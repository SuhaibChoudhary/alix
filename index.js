const db = require("./data.js")
const { Client, Collection } = require("discord.js");
const config = require("./botconfig.json");
const bot = new Client();
const Discord = require("discord.js"); 
const { connect } = require('mongoose');

connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
});

module.exports = bot;

require('./dashboard/server');
bot.login(config.token);

