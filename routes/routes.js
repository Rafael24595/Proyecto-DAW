const express = require('express');
const router = express.Router();

const DevManageTools = require('../controller/DevManageTools');

const SecurityManage = require('../controller/SecurityManage');
const UserManage = require('../controller/UserManage');
const ThemeListsManage = require('../controller/ThemeListsManage');
const ComentsManage = require('../controller/ComentsManage');
const ArtistThemeManage = require('../controller/ArtistThemeManage');
const FilesManage = require('../controller/FilesManage');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir:'./.temp'
});

router.get("/generateDatabase", DevManageTools.generateDatabase);

router.get("/getData", ArtistThemeManage.getArtistDataCount);
router.get("/getThemeData", ArtistThemeManage.getThemeData);
router.get("/getArtistData", ArtistThemeManage.getArtistData);
router.get("/getArtistsAttributes", ArtistThemeManage.getArtistsAttributes);
router.post("/searchUsersDataByName", UserManage.searchUsersDataByName);
router.post("/getArtistDataQuery", ArtistThemeManage.getArtistDataQuery);
router.post("/setArtistAttribute", SecurityManage.verifyToken , ArtistThemeManage.setArtistAttribute);
router.post("/setArtist", SecurityManage.verifyToken, ArtistThemeManage.setArtist);
router.post("/removeArtist", SecurityManage.verifyToken, ArtistThemeManage.removeArtist);
router.post("/reassignArtistTheme", SecurityManage.verifyToken, ArtistThemeManage.reassignArtistTheme);
router.post("/reassignArtistThemes", SecurityManage.verifyToken, ArtistThemeManage.reassignArtistThemes);

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
router.post("/setThemesAttribute", SecurityManage.verifyToken , ArtistThemeManage.setThemesAttribute);
router.post("/setTheme", SecurityManage.verifyToken , ArtistThemeManage.setTheme);
router.post("/removeTheme", SecurityManage.verifyToken , ArtistThemeManage.removeTheme);

router.get("/getFlagsList", FilesManage.getFlagsList);
router.post("/uploadFile", SecurityManage.verifyToken, multipartMiddleware , FilesManage.uploadFile);
router.post("/removeFile", SecurityManage.verifyToken, FilesManage.removeFile);
router.post("/renameFile", SecurityManage.verifyToken, FilesManage.renameFile);

module.exports = router;
