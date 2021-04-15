const express = require('express');
const router = express.Router();

const DevManageTools = require('../controller/DevManageTools');

const SecurityManage = require('../controller/SecurityManage');
const UserManage = require('../controller/UserManage');
const ThemeListsManage = require('../controller/ThemeListsManage');
const ComentsManage = require('../controller/ComentsManage');
const ArtistThemeManage = require('../controller/ArtistThemeManage');

router.get("/generateDatabase", DevManageTools.generateDatabase);

router.get("/getData", ArtistThemeManage.getArtistDataCount);
router.get("/getThemeData", ArtistThemeManage.getThemeData);

router.post("/signUp", UserManage.singUp);
router.post("/signIn", UserManage.signIn);
router.get("/getUserData", SecurityManage.verifyToken , UserManage.getUserData);
router.get("/getProfileData", SecurityManage.checkToken , UserManage.getProfileData);

router.post("/publishComment", SecurityManage.verifyToken , ComentsManage.publishComment);
router.post("/deleteComment", SecurityManage.verifyToken , ComentsManage.deleteComment);

router.post("/PrivatizeThemeList", SecurityManage.verifyToken , ThemeListsManage.privatizeThemeList);
router.post("/CreateNewThemeList", SecurityManage.verifyToken , ThemeListsManage.createNewThemeList);
router.post("/DeleteThemeList", SecurityManage.verifyToken , ThemeListsManage.deleteThemeList);
router.post("/AddToUserThemeList", SecurityManage.verifyToken , ThemeListsManage.addToUserThemeList);
router.post("/RemoveUserThemeList", SecurityManage.verifyToken , ThemeListsManage.removeUserThemeList);

module.exports = router;
