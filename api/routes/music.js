const {
  index,
  update,
  destroy,
  show,
  create
} = require('../controllers/music');


module.exports = router => {
  // localhost:4000/musics
  router.get('/musics', index);

  // localhost:4000/musics/12345
  router.get('/musics/:id', show);
  // localhost:4000/musics
  router.post('/musics', create);

  // localhost:4000/musics/update
  router.post('/musics/update', update);

  // localhost:4000/musics/destroy
  router.post('/musics/destroy', destroy);
};