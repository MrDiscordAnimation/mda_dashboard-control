const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}
let mainWindow;
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    //Hides the Frame
    frame: false,
    //Hides the Menu Bar
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    //Shows the App ICON
    //icon: path.join(__dirname, 'assets/mda-app.edusoftware.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // Load Web Contents in Default Browser: StackOverFlow: https://stackoverflow.com/questions/31749625/make-a-link-from-electron-open-in-browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("mda:")) {
        return { action: 'allow' };
    }
    // open url in a browser and prevent default
    shell.openExternal(url);
    return { action: 'deny' };
});
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  return mainWindow;
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  mainWindow = createWindow();
  console.log("MDA Dashboard Server")
  console.log("Built by MDAScripts. Exploits checked by MDA Security. Published by MDAPublishers.")
  console.log(" _ _   _   _ Scripts")
  console.log("| | | | | |_|Publishers")
  console.log("| | | |_/ | |Software")
  console.log("Running on Node.JS & Electron")
  console.log("Built by our Teams.")
  console.log("Email: mda@amogus.email mdaofficial@zohomail.com")
  updateApp = require('update-electron-app');

  updateApp({
      //Checks for Github Updates
      updateInterval: '1 hour',
      notifyUser: true
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
//Minimize Window
ipcMain.on('window:minimize', () => {
  mainWindow.minimize();
})
//Maximize Window
ipcMain.on('window:maximize', () => {
  mainWindow.maximize();
})
//Restore the Window to it's default
ipcMain.on('window:restore', () => {
  mainWindow.restore();
})
//Close Window
ipcMain.on('window:close', () => {
  mainWindow.close();
})