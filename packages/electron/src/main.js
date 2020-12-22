const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
require('dotenv').config({ path: 'src/googleApi.env' })
process.env.GOOGLE_KEY;

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    titleBarStyle: "default",
    resizable: true,
  });
  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../../app/build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}


app.on("ready", createWindow);
