const { app, BrowserWindow } = require('electron')
// require('electron-reload')(__dirname, {
//   electron: require('${__dirname}/../../node_modules/electron')
// })
require('electron-reload')(__dirname);
let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })

  // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
  win.loadURL(`file://${__dirname}/dist/poseidon-web/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
