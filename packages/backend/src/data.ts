const fs = require('fs');

import { v4 as uuidv4 } from 'uuid';
import { Show, User } from './types/graphql'

/****************************
 * File manipulation
 ****************************/
let rawdata = fs.readFileSync(__dirname + '/db.json');
let showkeeperdata = JSON.parse(rawdata);

async function saveData(dataToStringify) {
    return await fs.writeFile(__dirname + '/db.json', JSON.stringify(dataToStringify), () => console.log(`File write: ${__dirname + '/db.json'}`));
}


/****************************
 * Data manipulation
 ****************************/
function findShowIndex(shows: [Show], showId: String) {
    return shows.findIndex((show: Show) => show.id === showId)
}

function findUserShows(userId) {
    return getUserById(userId).shows
}

function getUserById(userId) {
    return showkeeperdata.users.find(user => user.id === userId)
}

function getUsers() {
    return showkeeperdata.users
}

/****************************
 * API
 ****************************/
module.exports = {
    getUsers: async (userId: String): Promise<[User]> => await getUsers(),
    getUser: async (userId: String): Promise<User> => await getUserById(userId),
    addMyShow: async (userId: String, newShow: Show): Promise<Show> => {
        newShow.id = uuidv4();
        findUserShows(userId).push(newShow)
        await saveData(showkeeperdata)
        return newShow;
    },
    updateMyShow: async (userId: String, updatedShow: Show): Promise<Show> => {
        const showIndex = findShowIndex(findUserShows(userId), updatedShow.id);
        if (showIndex !== -1) {
            findUserShows(userId)[showIndex] = updatedShow
            await saveData(showkeeperdata)
        }
        return updatedShow;
    },
    deleteMyShow: async (userId: String, showId: String): Promise<String> => {
        const showIndex = findShowIndex(findUserShows(userId), showId);
        if (showIndex !== -1) {
            findUserShows(userId).splice(showIndex, 1)
            await saveData(showkeeperdata)
        }
        return showId;
    }
}
