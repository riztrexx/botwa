let handler = async (_0x2087ef, { conn: _0x56eeb6, usedPrefix: _0x19e5e7 }) => {
  ye = '@' + _0x2087ef.sender.split`@`[0]
  let _0x50717a = (
    '\n\nHai Kak ' +
    ye +
    ' Bot ini Menggunakan Sc dari\n https://github.com/riztrexx/botwa \n Developer Fell CBOT\n\n'
  ).trim()
  _0x56eeb6.fakeReply(
    _0x2087ef.chat,
    _0x50717a,
    '0@s.whatsapp.net',
    '*' + global.packname + '*',
    'status@broadcast'
  )
}
;(handler.help = ['github']),
  (handler.tags = ['info']),
  (handler.command = ['script', 'sc', 'scbot', 'github']),
  (handler.owner = false),
  (handler.mods = false)
;(handler.premium = false),
  (handler.group = false),
  (handler.private = false),
  (handler.admin = false),
  (handler.botAdmin = false),
  (handler.fail = null),
  (handler.exp = 25),
  (module.exports = handler)
