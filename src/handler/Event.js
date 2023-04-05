const fs = require('fs');
const client = global.raviwen;


    fs.readdir('./src/Event/', (err, files) => { 
        if(err) console.error(err);
        files.filter(file => file.endsWith('.js')).forEach(file => { 
            let rotadev = require(`../Event/${file}`);
            if(!rotadev.event) return;
            client.on(rotadev.event.isim, rotadev)
        });
        console.log(`[Event] ${files.length} event(s) loaded!`);
    });
