# djs-handler

![Discord](https://img.shields.io/discord/759705699034071082?logo=discord)

## Table of contents
- [Installation](#intallation)
- [Configuration](#configuration)
- [Command](#command)
- [OwnerCommand](#ownercommand)

## Installation
Install all dependancies:
```bash
npm i
```

Start:
```bash
node index.js
```

## Configuration
[.env](./.env)
```
TOKEN=CLIENT TOKEN
SECRET=CLIENT SECRET (optional)
URI=MONGO URI (optional)
```

[config.json](./config.json)
```json
{
    "activity": {
        "type": "PLAYING",
        "text": "test"
    },
    "debug": {
        "guild": "1234567890",
        "enabled": false
    },
    "embed": {
        "color": {
            "error": "RED",
            "regular": "WHITE"
        }
    },
    "owner": {
        "ids": [
            "786451264007438348",
            "1234567890"
        ],
        "prefix": "!"
    }
}
```

## Command
Example:
```js
const { Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'example',
    description: 'example',
    cooldown: {
        length: 10000, //ms
        type: 'user' //guild/user
    },
    options: [
        {
            name: 'example2',
            description: 'example2',
            type: 'STRING', //INTEGER/SUB_COMMAND...
            required: true //BOOLEAN
        }
    ],
    type: 'CHAT_INPUT',
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        //...
    }
}
```

## OwnerCommand
Example:
```js
const { Client, Message } = require('discord.js');

module.exports = {
    name: 'example',
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        //...
    }
}
```