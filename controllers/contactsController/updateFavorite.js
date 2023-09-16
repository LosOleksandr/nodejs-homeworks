const { httpError } = require("../../utils");

const { Contact } = require("../../models");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;

  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });

  if (!result) {
    throw httpError(404, "Not Found");
  }

  res.json(result);
};

module.exports = updateFavorite;
