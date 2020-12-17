const Music = require('../models/music');

exports.index = async (req, res, next) => {
  try{
  const musics = await Music.find();
  res.status(200).json(musics);
  }
  catch(error){
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const music = await Music.findById(req.params.id);

    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try{
    const { title, genre, artist } = req.body;
    console.log(req.body);

    const mus = await Music.create({
      title,
      genre,
      artist
    });
    res.status(200).json({message: "Music was Created", music: mus})
  }
  catch(error){
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try{
    const {_id, title, genre, artist} = req.body;

    const mus = await Music.findOneAndUpdate({ _id: _id}, {
      title,
      genre,
      artist
    });
    res.status(200).json({message: "Music was updated successfully", music: mus});
  }
  catch(error){
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Music.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Music was deleted successfully" });
  } catch (error) {
    next(error);
  }
};