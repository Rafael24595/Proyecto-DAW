const express = require('express');
const router = express.Router();

const controller = require('../controladores/product');

router.get("/generateDatabase", controller.generateDatabase);
router.get("/getData", controller.getData);
router.post("/signUp", controller.singUp);
router.post("/signIn", controller.signIn);
router.get("/getUserData", controller.verifyToken , controller.getUserData);
router.get("/getProfileData", controller.getProfileData);

module.exports = router;
