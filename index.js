const readline = require('readline-sync');

let name = readline.question("What is the PlaceId? (Don't use ctrl+v use right click and paste, idk why it outputs some random stuff) .");

console.log("OK, allow this to run, searching through " + name);

const Hexanium = require('hexanium')

var Finder = new Hexanium('')

var PlaceId = name


async function Start() {
    let GUID = await Finder.FindServer(PlaceId)
    console.log(`Roblox.GameLauncher.joinGameInstance(${PlaceId}, "${GUID}")`)
console.log("OK, after it is done it should output something that looks like this (Eg: Roblox.GameLauncher.joinGameInstance("+ name +","+ GUID +"). So, now go to the roblox game, press F12 and paste it in. You should be prompted to open roblox, or it might do it for you. You are now done! GLHF")
}

Start()