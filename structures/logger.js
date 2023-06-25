const { green, gray, yellow, red } = require('chalk');
const logger = {
    log, warn, err
}

async function log(text) {
    console.log(`[ ${green('OK')} ] ${gray(text)}`);
}

async function warn(text) {
    console.log(`[ ${yellow('WARN')} ] ${gray(text)}`);
}

async function err(text) {
    return console.log(`[ ${red('ERR')} ] ${gray(text)}`);
}

module.exports = logger;