const { Collection } = require('discord.js');
const fs = require('fs');
const slashcommand = [];
const slashFiles = fs.readdirSync('./src/CommandSlash').filter(file => file.endsWith('.js'));
const client = global.raviwen;
client.slashcmd = new Collection();


fs.readdir(`./src/CommandSlash/`, (err, files) => { 
    if(err) console.error(err);
    files.filter(file => file.endsWith('.js')).forEach(file => { 
        const slashxd = require(`../CommandSlash/${file}`);
        slashcommand.push(slashxd.data.toJSON());
        client.slashcmd.set(slashxd.data.name, slashxd);
    });
});



module.exports = {
    client: client,
    slashcmd: slashcommand
};