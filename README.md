# electron-tutorial

## Contents

## Pre-requirements

- Node.js
- NPM

## Install

```powershell
npm init
npm install electron --save-dev
```

## Start

Create main.js and add 'scripts' in package.json.

```
"start": "electron .",
"main": "main.js",
```

```powershell
npm run start
```

```main.js
console.log('Hello from Electron 👋')
```

## Add view

```index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>Hello from Electron renderer!</title>
  </head>
  <body>
    <h1>Hello from Electron renderer!</h1>
    <p>👋</p>
  </body>
</html>
```

```main.js
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
```