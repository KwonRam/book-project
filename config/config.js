require('dotenv').config();
const env = process.env;

const development = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  dialect: 'mysql',
  timezone: '+09:00',
};

module.exports = { development };
