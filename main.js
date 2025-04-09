// More info: https://www.electronjs.org/docs/latest/tutorial/process-model#process-specific-module-aliases-typescript
// For typescript ->
// const { app } = require('electron/main')
// const { app, BrowserWindow } = require('electron/main')
const { app, BrowserWindow } = require('electron')

// This is the main process of your Electron app
// It creates a window and loads the HTML file
// You can also use this file to manage your app's lifecycle events
// and perform other tasks like IPC communication
// BrowserWindow is instantible, we can know because it is the first
// letter is capitalized. On the other hand, app is not instantiable.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
