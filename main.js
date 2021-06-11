const { BrowserWindow } = require('electron')
const electron = require('electron')
const app = electron.app
var path = require('path')

const BrowerWindow = electron.BrowserView

//when the app ready it will create the window
app.on('ready',function(){
    //Lets create the window
    let loginWindow = new BrowserWindow({
        //Window Size 
        width : 300,
        height : 600,
        maxWidth : 1400,
        maxHeight : 1200,

        //Web Preferences
        webPreferences:{
            preload: path.join(__dirname,'preload.js'),
            
        }
    })
    loginWindow.loadURL('file://' + __dirname + '/index.html')

    loginWindow.once('ready-to-show',function(){
        loginWindow.show()
    })
})

app.on('window-all-closed',function(){
    if(process.platform !== 'darwin') app.quit()
})