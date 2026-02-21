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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2Y6jOBT9lZJfE3VYsoFUowFC9oVA9tE8GDBg9tgGQlqR5iPmC+dLRqS6uvphpqdG4sHY1rnnnnOuv4I0wxQtUA3kryAnuIQMNUtW5wjIQC08DxHQBi5kEMhgNT/UmyPXGQk9z6hP90k8x+fSWXUi7p7oImcwU81GydhOo1fwaIO8sGPs/ARwUul3WJFi5e/iYAitQLGW3GGe9Teb7j0L/CLCK8U/haKmv4JHgwgxwamv5wFKEIHxAtUGxORz9J1lupOkyl6o45IqkhlokSCOpVPnKk6rROqQsXO95Dq0Yudz9O1gWhyclW3i3YDjaUA6A7QO6Km+3TLPgZm5OyenKdlPxdkbfYr9FLkzF6UMs/rTuif6kq7XoiFpg6zq6xNX2XQ1frQ0+GSPypEXRAvz4lRJJGw/R7yjt2K/OhVkRJdFZOoRyUk8Qtfxxr4a0SB27XR7xKdyVmc/EjfIe1ai/6M7NlradbcIYcDtnLOfhiXHxVY4Ry3b8bdnqUKupOrTbb3/pO6n2l4VTuWkSlfMpmzptJTD6nI9LETPVBZeR1hWaBmNS1uIPuhDVpCfsRxVNrkO93NBycJws71yXhE6A830aViOqxnLb2VHKMfzoX0hxmSHrkGpdSdevpmprrUXuuPS765Nlh29s3d1XXaAyk5TXp8dRaieuUDmH21AkI8pI5DhLG32ulIbQLe0kEMQe6oL4k6nPGZzVXGlfc+8LVRinLrWPBlt5kZdLlZzY1aFo7sSnukraIOcZA6iFLlTTFlG6hWiFPqIAvm339sgRTf25ltTTeTbwMOEsn1a5HEG3XdT3w+h42RFyqw6dbRmgQiQuY9txBhOfdrIWKSQOAEukRZARoHswZii7w0iglwgM1Kg70OrZW6ju3lcHPm5tgVtkDz9wC6QgSAMpQHX5YTeUO4Nf6VfqgYV5vmXFDHQBilsLgOl8AvKXlYwrV9eXv7648+375eXSZa5ceFEoA3iJyDfHQ55oScNRLHLc2ID2hw8vvfSlHYRgzimQAbazBCkhT7Vl6e4N6wmE2XrK5qvgI/e3zP0ZlJwsQ63oVQkAW+PRsYmOU9tddHqw/5B5/utru3cugPSS5F6fv0HECCD9OyPS/E0EPnciYfLmht5moXNfXlGzpiepfXIZ1ltOctT3bcGs66wWovWdZVm/cTo4KPl4PBKuLkthZf5dNHywyPWleq1qeaiEjvox2IcH7Q6q0S9hoZ+mJyIsqlrtu3D4dGamVK8m3jrU2CEKtRUs4cD826JQhUxw5PKCxy0ZvFURElHtRCtdnd2jYnYS7TtW7qf0xV/e9XwM3iNq82vh9Hzkfhm33+5/Ma7ySL3aP8A8e3V+ZfJVc/Hfex4hp1n7rGq7vc8UYXKKoukiM01KouJuEKbfusi+kfwePzeBnkMmZeRBMiAJjYEbUCyokn2LPWyn1TS1NlstPXHTdcxpEz5mJYdThBlMMmBzA8GfF/qD4Xe2y2DZPkU0gDIQPSN/TwCj78BkLxKenoHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: true,
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
      antiSpam: true,
      antidelete: true,
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
  
