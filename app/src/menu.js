const electron = require('electron')
const Menu = electron.remote.Menu
const app = electron.app

var template = [
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      },
      {
        label: '重做',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: '剪切',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: '复制',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: '粘贴',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: '全选',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      }
    ]
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: '关闭窗口',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      }
    ]
  }
]

if (process.platform === 'darwin') {
  var name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        label: '隐藏 ' + name,
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        label: '隐藏其他应用',
        accelerator: 'Command+Alt+H',
        role: 'hideothers'
      },
      {
        label: '显示全部',
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        label: '退出',
        accelerator: 'Command+Q',
        click: function () {
          app.quit()
        }
      }
    ]
  })
}
console.log(Menu)
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
