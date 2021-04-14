const express = require('express');
const router = express.Router();

const controller = require('../controladores/product');

router.get("/generateDatabase", controller.generateDatabase);
router.get("/getData", controller.getData);
router.get("/getThemeData", controller.getThemeData);
router.post("/signUp", controller.singUp);
router.post("/signIn", controller.signIn);
router.get("/getUserData", controller.verifyToken , controller.getUserData);
router.get("/getProfileData", controller.checkToken , controller.getProfileData);
router.post("/publishComment", controller.verifyToken , controller.publishComment);
router.post("/deleteComment", controller.verifyToken , controller.deleteComment);
router.post("/PrivatizeThemeList", controller.verifyToken , controller.privatizeThemeList);
router.post("/CreateNewThemeList", controller.verifyToken , controller.createNewThemeList);
router.post("/DeleteThemeList", controller.verifyToken , controller.deleteThemeList);
router.post("/AddToUserThemeList", controller.verifyToken , controller.addToUserThemeList);

module.exports = router;
