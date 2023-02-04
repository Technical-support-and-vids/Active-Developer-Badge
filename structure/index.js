const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'active') {
    const embed = new EmbedBuilder()
    .setTitle("Congrats")
    .setDescription(`Congratulations ${interaction.user} you have won active dev badge you're just one step away from getting click on the link an do the steps`)
    .setColor("Red")
    .setTimestamp()
    
    interaction.reply({ embeds: [embed] });
    interaction.channel.send({ content: "https://discord.com/developers/active-developer" })
  }
});

client.login(process.env.TOKEN);
