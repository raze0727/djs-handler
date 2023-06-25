const { readdirSync } = require('fs');
const { logger, client } = require('./structures');
const clientConfig = require('./config.json').client;

async function load() {
    //Load listeners
    const listeners = readdirSync('./listeners');
    listeners.forEach(listener => {
        if (!listener.endsWith('.js')) return;
        require(`./listeners/${listener}`);
    });
    logger.log(`Loaded ${listeners.length} listeners`);

    //Load commands
    const _commands = [];
    const categories = readdirSync('./commands');
    categories.forEach(category => {
        const commands = readdirSync(`./commands/${category}`);
        commands.forEach(command => {
            if (!command.endsWith('.js')) return;
            const file = require(`./commands/${category}/${command}`);
            if (file?.name && file?.description && file?.type && file?.run) {
                client.commands.set(file.name, file);
                _commands.push(file.name);
            }
        });
    });
    logger.log(`Loaded ${_commands.length} commands`);

    //Log in
    client.login(clientConfig.token).catch(e => logger.err(e));

    //Connect to database
    if (clientConfig.uri) connect(config.uri, () => logger.log('Connected to database'));
    else logger.warn('No URI was provided.')
}

load();