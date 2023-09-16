const { httpError } = require("../../utils");

const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw httpError(404, "Not Found");
  }
  res.json(result);
};

const addNewContact = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({
    ...req.body,
    owner: _id,
  });

  res.status(201).json(result);
};

module.exports = getContactById;
