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
router.get("/getArtistData", ArtistThemeManage.getArtistData);
router.post("/setArtistAttribute", SecurityManage.verifyToken , ArtistThemeManage.setArtistAttribute);

router.get("/getUserData", SecurityManage.verifyToken , UserManage.getUserData);
router.get("/getProfileData", SecurityManage.checkToken , UserManage.getProfileData);
router.post("/getThemesFromList", SecurityManage.checkToken, UserManage.getThemesFromList);
router.post("/signUp", UserManage.singUp);
router.post("/signIn", UserManage.signIn);
router.post("/checkPassword", SecurityManage.verifyToken, UserManage.checkPassword);
router.post("/UpdateUserData", SecurityManage.verifyToken , UserManage.updateUserData);

router.post("/publishComment", SecurityManage.verifyToken , ComentsManage.publishComment);
router.post("/deleteComment", SecurityManage.verifyToken , ComentsManage.deleteComment);
router.post("/thumbValueTheme", SecurityManage.verifyToken , ComentsManage.thumbValueTheme);

router.post("/PrivatizeThemeList", SecurityManage.verifyToken , ThemeListsManage.privatizeThemeList);
router.post("/CreateNewThemeList", SecurityManage.verifyToken , ThemeListsManage.createNewThemeList);
router.post("/DeleteThemeList", SecurityManage.verifyToken , ThemeListsManage.deleteThemeList);
router.post("/AddToUserThemeList", SecurityManage.verifyToken , ThemeListsManage.addToUserThemeList);
router.post("/RemoveUserThemeList", SecurityManage.verifyToken , ThemeListsManage.removeFromUserThemeList);
router.post("/UpdateUserThemeList", SecurityManage.verifyToken , ThemeListsManage.updateUserThemeList);

module.exports = router;
