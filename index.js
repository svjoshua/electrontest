const { app, BrowserWindow } = require('electron');

async function loadHW(){
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences : {
			nodeIntegration : true
		}
	});

	win.loadFile('helloworld.html');

	//win.webContents.openDevTools();
}

app.on('ready', loadHW);