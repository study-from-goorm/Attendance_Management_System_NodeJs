const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('events.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('events.json', JSON.stringify(data));
}

async function readUserData() {
  const data = await fs.readFile('json/users.json', 'utf8');
  return JSON.parse(data);
}

async function writeUserData(data) {
  await fs.writeFile('json/users.json', JSON.stringify(data));
}

async function readAdminData() {
  const data = await fs.readFile('json/admin.json', 'utf8');
  return JSON.parse(data);
}

async function writeAdminData(data) {
  await fs.writeFile('json/admin.json', JSON.stringify(data));
}

async function readPlayerData() {
  const data = await fs.readFile('json/players.json', 'utf8');
  return JSON.parse(data);
}

async function writePlayerData(data) {
  await fs.writeFile('json/players.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
exports.readUserData = readUserData;
exports.writeUserData = writeUserData;
exports.readAdminData = readAdminData;
exports.writeAdminData = writeAdminData;
exports.readPlayerData = readPlayerData;
exports.writePlayerData = writePlayerData;
