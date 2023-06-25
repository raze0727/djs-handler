const { client, logger } = require('../structures');

client.on('interactionCreate', async interaction => {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    await interaction.deferReply();
    command.run(client, interaction);
});