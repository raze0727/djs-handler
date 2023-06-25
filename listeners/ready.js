const { client, logger } = require('../structures');

client.on('ready', () => {
    logger.log('Client logged in.');
    client.application.commands.set(client.commands);
})