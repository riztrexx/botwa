console.log('Memulai...')
let { spawn } = require('child_process')
let path = require('path'),
  fs = require('fs'),
  package = require('./package.json')
const CFonts = require('cfonts')
CFonts.say('Fell CBOT', {
  colors: ['#f2aa4c'],
  font: 'block',
  align: 'center',
}),
  CFonts.say(
    "'" + package.name + "' Oleh @" + (package.author.name || package.author),
    {
      colors: ['#f2aa4c'],
      font: 'console',
      align: 'center',
    }
  )
var isRunning = false
function start(_0x4ae0ae) {
  if (isRunning) return
  isRunning = true
  let _0x25ab2d = [path.join(__dirname, _0x4ae0ae), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ..._0x25ab2d].join(' '), {
    colors: ['#f2aa4c'],
    font: 'console',
    align: 'center',
  })
  let _0x25391f = spawn(process.argv[0], _0x25ab2d, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  })
  _0x25391f.on('message', (_0x21a551) => {
    console.log('[RECEIVED]', _0x21a551)
    switch (_0x21a551) {
      case 'reset':
        _0x25391f.kill(), (isRunning = false), start.apply(this, arguments)
        break
      case 'uptime':
        _0x25391f.send(process.uptime())
        break
    }
  })
  _0x25391f.on('exit', (_0x1b5cb2) => {
    isRunning = false
    console.error('Exited with code:', _0x1b5cb2)
    if (_0x1b5cb2 === 0) return
    fs.watchFile(_0x25ab2d[0], () => {
      fs.unwatchFile(_0x25ab2d[0])
      start(_0x4ae0ae)
    })
  })
}
start('main.js')
