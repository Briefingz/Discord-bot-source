//My first discord bot most of the coding is from a youtube tut but I did learn things from it and added my own stuff!
//Brief#4060
const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '/';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Brief is online!');
});
 //commands remember to make a command file and add each command by its name with .js at the end.
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if(command === 'brief'){
        client.commands.get('brief').execute(message, args);
    } 
    if(command === 'invite'){
        client.commands.get('invite').execute(message, args);
    }  
        if(command === 'skid'){
            client.commands.get('skid').execute(message, args);
    } 
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
} 
});

client.login('NzY3NTM2MjIwMDc0NjcyMTc4.X4zVzg.BqMnZevkkAqWIlT4IwEv1WNjiAI');