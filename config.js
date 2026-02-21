/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['22897040258','22892047621'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['August Many', 'Goodluck'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU247iOBD9lZZfQUNuhIvUq80NEq4BGgJZzYOTOLEhN+wkEEZI8xH7hfslq9Dd06OVdrZXyoNTts45VaeqvoE0IwxNUQ2G30BOSQUL1ByLOkdgCNQyDBEFbRDAAoIhqNXx/CbH+DhIXaOnWcbugue2hdnGs+FVPXmsf1wcbrG2j57BvQ3y0ouJ/wvAqdHpTCI6hZwAt050VJzdqGaOvs9tk9R6x6270XK9lplpPIN7gwgJJWlk5BgliMJ4imobEvo5+YflAHGZevVKvGOtC16U0pTv6b2BA3fWJXxx56uVI8zP8db4nPyuOU070VFWWGCd+L0ztjsSr1fKNBbNHM+03SAQs1DHKH2Tz0iUosAKUFqQov503adKJJlkOdtWOzc4jkd9fce67CQm81qYy1QL8aWQqX1ejU6fEx6MSkeqTGXljZZ6Jbzg0PHN06Zzvgm6qceucJxSP7nU6938Z+E2fe+V0/+pO1xOVkawJqNaH+DDTcsD7uLc7I3qLVJa+GNTPkVlyQ+OKfc5+c6Gn0dYL31H247VajtZc0QiGw2THck2ie14e3igkSK9ZB/yYVHSX6k8C5NWOMuIFebpVh7XQXHrntY3url6+MitGzYj3+/XnQJHuHpJVq6WnI1sy5d7NMs713PeszukPPAkPaKTWTE8S8jl+ZHRCdVWAIb8vQ0oiggrKCxIlj5iQrcNYFBtkE9R8Sgv0Ho34lpi5peKfjVqbrFu3US8yl1h4IWr/JyIgmGFhtUTD8+gDXKa+YgxFJiEFRmt54gxGCEGhn98bYMUXYtX4xo6kW+DkFBWbNMyjzMYvLv6fgl9PyvTYlOnvtYcEAVD7iOMioKkEWvqWKaQ+phUSMOwYGAYwpihHxkiigIwLGiJfkytlgVN4QVpr2hdRwBtkDwMIUETFfqDHidxQrc/7PZ+Z18uDSrM8y8pKkAbpLB5DJQyKlnxNIdp/fT09Nf3P1+/357GWRbEpX8CbRA/AHmp3+eF7qAnihLPiQ1oc3H/kUtDHaACkpg1NbdsYTA1TGOiu93+ZTxW5pGiRQr4yP29iV5Nwu5md+0PygTznq7by+Rgeuq0JUN5Z/ByS/L8q9Sj3RSpD5P+CdLMBTpw181pPPZyS7j4g4gbUEgig58FopBlyu5lofr5bhKukh6S7ZaFAyxuIcY4R7PMCq/c4XjIDWsqz2745i1zeayq0XPDFqCK+OhnsjVn+LPJ4tS5FqHoLkV+Jbuzc7o4r4x96Ltcq3a3EbUyI5A01fInuqPNs8CgqXDh1v7BlZLp2TJ8qmy9qrrGvBetyqPy2t6P8Yrf1hp5NF7javMbEvTYEm/2/ZfLr7qbXuTu7Z8g3tbOv4yuenC2sR/aXp4FzuVyu+WJKlw2VZmU8XqBqnIsztFSbrli5ID7/Wsb5DEswowmYAhY4kHQBjQrm8620jD7BZOmWpa+ikZN1jFkhfIxLS8kQayASQ6GfK/Hy4Ou0OVfX9k0y03IMBgCMbK3kxO4/w1Az6UtewcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
