const express = require('express');

const { getAllCourse, getPlayers } = require('../data/admin');

const router = express.Router();

router.get('/courses', async (req, res, next) => {
  try {
    const courses = await getAllCourse();
    res.json(courses);
    // setTimeout(() => {
    //   res.json(courses);
    // }, 3000);
  } catch (error) {
    next(error);
  }
});

router.get('/:courseId/players', async (req, res, next) => {
  try {
    const players = await getPlayers(parseInt(req.params.courseId, 10));
    res.json(players);
    // setTimeout(() => {
    //   res.json(players);
    // }, 3000);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
