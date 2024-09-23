// Importing necessary modules from discord.js
import { Client, GatewayIntentBits,Guild } from 'discord.js'; // Removed 'Guild' because it's not used in the code

import dotenv from 'dotenv';
dotenv.config();// Loads variables from .env into process.env

// Creating a virtual client
// This client object allows interaction with the Discord server
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,  // Guilds = Allows bot to access guild (server) related events
    GatewayIntentBits.GuildMessages, // GuildMessages = Allows bot to interact with messages in the guild (server)
    GatewayIntentBits.MessageContent // MessageContent = Allows bot to read the content of messages
  ]
});
// 'intent' means what permission we are giving to the bot


//setting up a listener, that logs the msg. when sent on the server/discord
client.on('messageCreate',(message)=>{
  //if msg. sent by bot don't reply
  if(message.author.bot) return;

  if(message.content.startsWith("create")){
    const url=message.content.split("create")[1];//extracts url from msg.
    return message.reply({content:"Generating short URL for "+url});
  }
  //else say hello
  message.reply({content:"Hi from Jarvis"});
  console.log(message.content);
})
//instead of message.content if we pass message only 
//then we can log all details about msg like username, avatar, banner etc

//another listener
//interactions are like the commands('/') this is using command.js
client.on("interactionCreate",(interaction)=>{
  // console.log(interaction);
  interaction.reply("Pong!");
})

//for login
//token(MTI4Nj...) of bot is required for login
client.login(process.env.DISCORD_TOKEN);
