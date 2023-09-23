const { httpError } = require("../../utils");
const { User } = require("../../models");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: filePath, filename } = req.file;

  const newFilename = `${_id}-${filename}`;

  const resultUpload = path.join(avatarsDir, newFilename);

  await fs.rename(filePath, resultUpload);

  await Jimp.read(resultUpload)
    .then((file) => file.resize(250, 250).write(resultUpload))
    .catch((error) => console.log(error));

  const user = await User.findByIdAndUpdate(
    _id,
    { avatarUrl: resultUpload },
    { new: true }
  );

  if (!user) {
    throw httpError(404, "Not found");
  }

  res.json(user);
};

module.exports = updateAvatar;
