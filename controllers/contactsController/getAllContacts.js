const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page, limit, favorite } = req.query;

  const skip = (page - 1) * limit;

  const query = { owner };

  if (favorite) {
    query.favorite = favorite;
  }

  const result = await Contact.find(query, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "username email subscription");
  res.json(result);
};

module.exports = getAllContacts;
