export const config = {

	skipDefaultAircraft: false,  //skip showing default aircraft on start page and only show those configured here in Config.js
	// aircraft: {
	// 	'msfs20/myown/BonanzaG36': 'Beechcraft Bonanza G36',
	// },


	fsuipcUrl = 'ws://localhost:2048/fsuipc',  //the computer running the FSUIPC WebSocket Server. Can also use IP address like: 'ws://192.168.0.10:2048/fsuipc'
	/*
	NOTES ON USING WSS:
		https://stackoverflow.com/questions/45888088/securing-windows-port-with-ssl-for-socket-connection
		https://stackoverflow.com/questions/9641723/using-netsh-bind-an-ssl-certificate-to-a-port-number-is-failing
		https://stackoverflow.com/questions/26554364/register-certificate-to-ssl-port
	*/

};
