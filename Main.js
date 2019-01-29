const fs = require("fs");
const rls = require('readline-sync');
const { app, BrowserWindow } = require('electron');
function createWindow () {
  win = new BrowserWindow({ width: 250, height: 250});
  win.loadFile('index.html');
}
function closeWindow () {
  win.close();
}
app.on('ready', createWindow);
