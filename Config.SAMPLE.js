// Sample file for the user-config folder

export const config = {

	skipDefaultAircraft: false,  //skip showing default aircraft on start page and only show those configured here in Config.js
	// userAircraft: [
	// 	{
	// 		path: 'Cessna172_G1000',
	// 		name: 'Cessna 172 Skyhawk (G1000)',
	// 		panels: [
	// 			{file: 'custom', name: 'My own custom panel'},
	// 		],
	// 	},
	// ],

	fsuipcUrl = 'ws://localhost:2048/fsuipc',  //the computer running the FSUIPC WebSocket Server. Can also use IP address like: 'ws://192.168.0.10:2048/fsuipc'
	/*
	NOTES ON USING WSS:
		https://stackoverflow.com/questions/45888088/securing-windows-port-with-ssl-for-socket-connection
		https://stackoverflow.com/questions/9641723/using-netsh-bind-an-ssl-certificate-to-a-port-number-is-failing
		https://stackoverflow.com/questions/26554364/register-certificate-to-ssl-port
	*/

};
