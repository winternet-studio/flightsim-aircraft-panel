<?php
require_once(__DIR__ .'/vendor/autoload.php');

class Chat implements \Ratchet\MessageComponentInterface, \Ratchet\WebSocket\WsServerInterface {

	protected $clients;

	public function __construct() {
		$this->clients = new \SplObjectStorage;
	}

	public function getSubProtocols() {
		return ['fsuipc'];
	}

	public function onOpen(\Ratchet\ConnectionInterface $conn) {
		$this->log('Client connected ('. $conn->resourceId .')');

		// Store the new connection to send messages to later
		$this->clients->attach($conn);
	}

	public function onMessage(\Ratchet\ConnectionInterface $from, $msg) {
		$this->log($msg);

		$incoming = json_decode($msg, true);

		if ($incoming['command'] == 'offsets.read' && $incoming['name'] == 'aircraftOffsets' && !$incoming['interval']) {

			$outgoing = [
				'data' => [
					'altitude' => 9298863849472,
					'avionicsMaster' => 1,
					'heading' => 991067489,
					'aircraftName' => 'Cessna Skyhawk 172SP',
				],
				'command' => 'offsets.read',
				'name' => 'aircraftOffsets',
				'success' => true,
				'errorMessage' => null,
				'errorCode' => null,
			];

		} elseif ($incoming['command'] == 'vars.read' && $incoming['name'] == 'aircraftLVars' && !$incoming['interval']) {

			$outgoing = [
				'data' => [
					'AS1000_MFD_Brightness' => 0,
				],
				'command' => 'vars.read',
				'name' => 'aircraftLVars',
				'success' => true,
				'errorMessage' => null,
				'errorCode' => null,
			];

		}

		// Send message back
		if ($outgoing) {
			$from->send(json_encode($outgoing));
		}

		// $numRecv = count($this->clients) - 1;
		// echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
		// 	, $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');

		// foreach ($this->clients as $client) {
		// 	if ($from !== $client) {
		// 		// The sender is not the receiver, send to each client connected
		// 		$this->log('SENDING:');
		// 		$this->log($msg);
		// 		$client->send($msg);
		// 	}
		// }
	}

	public function onClose(\Ratchet\ConnectionInterface $conn) {
		// The connection is closed, remove it, as we can no longer send it messages
		$this->log('Connection '. $conn->resourceId .' has disconnected');
		$this->clients->detach($conn);
	}

	public function onError(\Ratchet\ConnectionInterface $conn, \Exception $e) {
		$this->log('An error has occurred: '. $e->getMessage());
		$conn->close();
	}

	public function log($msg) {
		echo date('Y-m-d H:i:s') .'  '. $msg . PHP_EOL . PHP_EOL;
	}
}



$port = 8083;   //FYI: conflicts with another binding of this port doesn't seem to be reported when starting the server

$wsServer = new \Ratchet\WebSocket\WsServer(
	new Chat()
);
// $wsServer->setStrictSubProtocolCheck(false);
$server = \Ratchet\Server\IoServer::factory(
	new \Ratchet\Http\HttpServer($wsServer),
	$port
);

file_put_contents('temp', print_r($server->app, true));

echo PHP_EOL .'Starting mock websocket server on port '. $port .'...'. PHP_EOL;
$server->run();
