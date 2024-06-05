const { Client, Events, GatewayIntentBits } = require('discord.js');



const client = new Client({intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds]});


client.once(Events.ClientReady, readyClient => {
    console.log('Ready!')
});

client.on('messageCreate', (message) =>{
    if(message.author.bot) return false;
    const l = message.content.toLowerCase()

    if(l.includes('miserable.png')){
        message.reply({content: 'https://media.discordapp.net/attachments/1247690904073142323/1247691076752375849/miserable.png?ex=6660f25d&is=665fa0dd&hm=baa42fd9b63c6ab50b70208fd577317f432153cd50bc9013329c55c3078ad9f3&=&format=webp&quality=lossless',allowedMentions: {repliedUser: false}})
        
    }else if(l.includes('miserable')){ 
        message.reply({content: 'zeldalord1', allowedMentions: {repliedUser: false}});
    }else if(l.includes('true!')){ 
        message.reply({content: 'https://media.discordapp.net/attachments/1247690904073142323/1247691076429549568/adachi_true.png?ex=6660f25d&is=665fa0dd&hm=afd89c7e6a889be860384254c032db30ce736b586df3d1912a5a051721935395&=&format=webp&quality=lossless&width=409&height=473', allowedMentions: {repliedUser: false}});
    }else if(l.includes('false!')){ 
        message.reply({content: 'https://media.discordapp.net/attachments/1247690904073142323/1247691076056252466/adachi_false.png?ex=6660f25d&is=665fa0dd&hm=64f4e5babe8d652ecba0430988b5bae9d7aedb888dcaf40a777f30ae572486b9&=&format=webp&quality=lossless&width=494&height=473', allowedMentions: {repliedUser: false}});
    }else if(l.includes('would you lose')){ 
        message.reply({content: 'Nah, I\'d Win', allowedMentions: {repliedUser: false}});
    }
});

client.login(process.env.TOKEN)


