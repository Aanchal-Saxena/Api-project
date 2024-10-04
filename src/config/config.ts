import { config as conf } from 'dotenv';

// Load environment variables from .env file
conf();
console.log(process.env.m)

// Create the configuration object
const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.m,
  env: process.env.NODE_ENV,
};

// Freeze the config object to prevent modification
export const config = Object.freeze(_config);
