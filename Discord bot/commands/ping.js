module.exports = {
    name: 'ping',
    description: "This is to see if im online!",
    execute(message, args){
        message.channel.send('Im Online!');
    }
}