const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html'); // Last inn din HTML-fil her
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});