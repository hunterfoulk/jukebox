const router = require("express").Router();
let User = require("../models/user.model.js");
let authMiddleware = require("../middleware/auth");

router.route("/addSong").post(authMiddleware, async (req, res) => {
  let user = await User.findById(req.user._id);
  user.playlist.push({ link: req.body.link });
  user
    .save()
    .then(() => {
      console.log("Song " + req.body.link + " added!");
      res.json("Song " + req.body.link + " added!");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/getPlaylist").get(authMiddleware, async (req, res) => {
  let user = await User.findById(req.user._id);
  res.send({ playlist: user.playlist });
});

module.exports = router;
