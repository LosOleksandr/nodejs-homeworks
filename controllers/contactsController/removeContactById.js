const { httpError } = require("../../utils");

const { Contact } = require("../../models");

const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw httpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = removeContactById;
