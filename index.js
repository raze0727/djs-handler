const { Client, Collection } = require('discord.js');
const client = new Client({
    intents: 32767
});

require('dotenv').config();
const { TOKEN } = process.env;

client.commands = new Collection();
client.ownerCommands = new Collection();
client.cooldown = new Collection();
client.config = require('./config.json');
client.color = client.config.embed.color;

module.exports = client;
require('./client')(client);

client.login(TOKEN);