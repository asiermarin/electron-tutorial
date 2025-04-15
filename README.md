# electron-tutorial

## Contents

- [electron-tutorial](#electron-tutorial)
  - [Contents](#contents)
  - [Pre-requirements](#pre-requirements)
  - [Install](#install)
  - [Start](#start)
  - [Add view](#add-view)
  - [Packaging -\> Electron Forge](#packaging---electron-forge)
  - [Publish GitHub Release](#publish-github-release)
  - [Auto Updated](#auto-updated)

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

```
main.js
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

## Packaging -> Electron Forge

Add Electron Forge:

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

Generate application executable:

```
npm run make
```

## Publish GitHub Release

Install GitHub release package dependencies:

```
npm install --save-dev @electron-forge/publisher-github
```

Insert configuration in the publishers part in forge.config.ts:

```
module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'asiermarin',
          name: 'electron-tutorial'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}
```

Add new publish command:

```
  //...
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish"
  },
  //...
```

Run command:

```
npm run publish
```

## Auto Updated

Install the dependence:

```
npm install update-electron-app
```

Add to main.js:

```
require('update-electron-app')()
```
