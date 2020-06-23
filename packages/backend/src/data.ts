const fs = require('fs');

let rawdata = fs.readFileSync(__dirname + '/db.json');
let showkeeperdata = JSON.parse(rawdata);

async function saveData() {
    return await fs.writeFile(__dirname + '/db.json', JSON.stringify(showkeeperdata), console.log);
}
module.exports = {
    getMyShows: () => showkeeperdata.myShows,
    addMyShow: async (newShow) => {
        showkeeperdata.myShows.push(newShow)
        await saveData()
        return newShow;
    }
}

// TODO: Typescript types