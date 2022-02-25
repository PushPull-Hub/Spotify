const express = require('express');
const router = express.Router();
const service = require('../services/song');

router.get('', (request, response, next) => {
  service.getSongs().then((res) => response.status(200).send(res));
});

router.get('/:id', (request, response, next) => {
  const id = request.params.id;
  service.getSongById(id).then((res) => response.status(200).send(res));
});

router.post('', (request, response, next) => {
  const newSong = request.body;
  service.create(newSong).then((res) => response.status(200).send(res));
});

router.put('', (request, response, next) => {
  response.status(200).send('put method reached');
});

router.delete('/:id', (request, response, next) => {
  const unwantedSongId = request.params.id;
  service.delete(unwantedSongId);
});

module.exports = router;
