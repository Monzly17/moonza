exports.donate = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${MONZLY}*
╠════════════════════
║├≽️⚜ *OVO*: _0823-1738-0554_
║├≽️⚜ *PULSA*: _0823-1738-0554_
║├≽️⚜ *GOPAY*: _0823-1738-0554_
╠════════════════════
║  *${VLYZANBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${MONZLY}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY MONZLY*
╚════════════════════`
}

