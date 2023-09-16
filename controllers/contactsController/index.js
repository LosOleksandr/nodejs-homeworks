const { controlWrapper } = require("../../utils");

const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addNewContact = require("./addNewContact");
const removeContactById = require("./removeContactById");
const updateContactById = require("./updateContactById");
const updateFavorite = require("./updateFavorite");

const contactsContoller = {
  getAllContacts: controlWrapper(getAllContacts),
  getContactById: controlWrapper(getContactById),
  addNewContact: controlWrapper(addNewContact),
  removeContactById: controlWrapper(removeContactById),
  updateContactById: controlWrapper(updateContactById),
  updateFavorite: controlWrapper(updateFavorite),
};

module.exports = contactsContoller;
