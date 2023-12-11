const { NotFoundError } = require('../util/errors');
const { readAdminData, writeAdminData, readPlayerData } = require('./util');

async function getAllCourse() {
  const storedData = await readAdminData();
  if (!storedData.courses) {
    throw new NotFoundError('Could not find any courses.');
  }
  return storedData.courses;
}

async function getPlayers(courseId) {
  const storedData = await readPlayerData();
  if (!storedData.players || storedData.players.length === 0) {
    throw new NotFoundError('Could not find any players.');
  }

  const players = storedData.players.filter((py) => py.courseId === courseId);
  if (!players) {
    throw new NotFoundError('해당하는 코스에 플레이거가 없습니다.' + courseId);
  }

  return players;
}

exports.getAllCourse = getAllCourse;
exports.getPlayers = getPlayers;
