const express = require("express");

const router = express.Router();

const { contactsController } = require("../../controllers");

const {
  validateBody,
  isValidId,
  checkAuthToken,
} = require("../../middlewares");

const { contactShemes } = require("../../schemes");

router.get("/", checkAuthToken, contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post("/", checkAuthToken, contactsController.addNewContact);

router.delete("/:contactId", isValidId, contactsController.removeContactById);

router.put(
  "/:contactId",
  validateBody(contactShemes.contactScheme),
  contactsController.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactShemes.favoriteScheme),
  contactsController.updateFavorite
);

module.exports = router;
