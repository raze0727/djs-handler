const { Client, Collection } = require('discord.js');
const clientConfig = require('../config.json').client;

const client = new Client({
    intents: [
        'Guilds', 'MessageContent', 'GuildVoiceStates'
    ]
});

client.commands = new Collection();
client.config = clientConfig;
module.exports = client;