// Script to register slash commands

// Importing necessary modules from discord.js
import { REST, Routes } from 'discord.js'; // Ensure you're using ES module or convert to CommonJS (`require`)

import dotenv from 'dotenv';
dotenv.config(); // Loads variables from .env into process.env

// Defining commands (an array of commands, here only 'ping')
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

// Creating an instance of REST and setting up the bot token
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN); // Always store token in environment variables

  try {
    console.log('Started refreshing application (/) commands.');
    
    // Using the rest.put method to register the commands (applicationCommands method is used to register commands globally)
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }  // Sending the command array to be registered
    );
    
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    // Catching any errors that occur during the registration process
    console.error(error);
  }

