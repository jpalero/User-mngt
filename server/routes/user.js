const express = require("express");
const router = express.Router(); // Using router in module of express
const userController = require("../controllers/userController");

// This is Routes where you can monitor the path on your local browser.
// the router in 'router.get' which is created by importing the Router Function a built-in in express. Then connect it with method 'get',
// 'post' fuction, Then the path '/' or '/pathname', Then userController to import in file called userController
// Now load the name of function and callbacks inside the userController.
router.get("/", userController.view);
router.post("/", userController.find);
router.get("/adduser", userController.form);
router.post("/adduser", userController.create);
router.get("/edituser/:Id", userController.edit);
router.post("/edituser/:Id", userController.update);
router.get("/viewuser/:Id", userController.viewall);
router.get("/:Id", userController.delete);

module.exports = router;
