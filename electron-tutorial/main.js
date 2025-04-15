// More info: https://www.electronjs.org/docs/latest/tutorial/process-model#process-specific-module-aliases-typescript
// For typescript ->
// const { app } = require('electron/main')
// const { app, BrowserWindow } = require('electron/main')
const { app, BrowserWindow, ipcMain } = require('electron')

// const { updateElectronApp } = require('update-electron-app')
// updateElectronApp()
// console.log('update-electron-app export:', require('update-electron-app'))

// include the Node.js 'path' module at the top of your file
const path = require('node:path')

// This is the main process of your Electron app
// It creates a window and loads the HTML file
// You can also use this file to manage your app's lifecycle events
// and perform other tasks like IPC communication
// BrowserWindow is instantible, we can know because it is the first
// letter is capitalized. On the other hand, app is not instantiable.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}


app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Close all windows
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
