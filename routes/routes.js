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

router.get("/getThemeData", ArtistThemeManage.getThemeData);
router.get("/getArtistData", ArtistThemeManage.getArtistData);
router.get("/getArtistsId", ArtistThemeManage.getArtistsId);
router.post("/searchUsersDataByName", UserManage.searchUsersDataByName);
router.post("/getArtistDataQuery", ArtistThemeManage.getArtistDataQuery);
router.post("/setArtistAttribute", SecurityManage.verifyTokenStrict , ArtistThemeManage.setArtistAttribute);
router.post("/setArtist", SecurityManage.verifyTokenStrict, ArtistThemeManage.setArtist);
router.post("/removeArtist", SecurityManage.verifyTokenStrict, ArtistThemeManage.removeArtist);
router.post("/reassignArtistTheme", SecurityManage.verifyTokenStrict, ArtistThemeManage.reassignArtistTheme);
router.post("/reassignArtistThemes", SecurityManage.verifyTokenStrict, ArtistThemeManage.reassignArtistThemes);

router.get("/getUserData", SecurityManage.verifyTokenStrict , UserManage.getUserData);
router.get("/getProfileData", SecurityManage.verifyToken , UserManage.getProfileData);
router.get("/checkToken", SecurityManage.checkTokenDate);
router.get("/extendSession", SecurityManage.extendSession);
router.post("/getThemesFromList", SecurityManage.verifyToken, UserManage.getThemesFromList);
router.post("/signUp", UserManage.singUp);
router.post("/signIn", UserManage.signIn);
router.post("/checkPassword", SecurityManage.verifyTokenStrict, UserManage.checkPassword);
router.post("/UpdateUserData", SecurityManage.verifyTokenStrict , UserManage.updateUserData);

router.post("/publishComment", SecurityManage.verifyTokenStrict , ComentsManage.publishComment);
router.post("/deleteComment", SecurityManage.verifyTokenStrict , ComentsManage.deleteComment);
router.post("/thumbValueTheme", SecurityManage.verifyTokenStrict , ComentsManage.thumbValueTheme);

router.post("/PrivatizeThemeList", SecurityManage.verifyTokenStrict , ThemeListsManage.privatizeThemeList);
router.post("/CreateNewThemeList", SecurityManage.verifyTokenStrict , ThemeListsManage.createNewThemeList);
router.post("/DeleteThemeList", SecurityManage.verifyTokenStrict , ThemeListsManage.deleteThemeList);
router.post("/AddToUserThemeList", SecurityManage.verifyTokenStrict , ThemeListsManage.addToUserThemeList);
router.post("/RemoveUserThemeList", SecurityManage.verifyTokenStrict , ThemeListsManage.removeFromUserThemeList);
router.post("/UpdateUserThemeList", SecurityManage.verifyTokenStrict , ThemeListsManage.updateUserThemeList);
router.post("/setThemesAttribute", SecurityManage.verifyTokenStrict , ArtistThemeManage.setThemesAttribute);
router.post("/setTheme", SecurityManage.verifyTokenStrict , ArtistThemeManage.setTheme);
router.post("/removeTheme", SecurityManage.verifyTokenStrict , ArtistThemeManage.removeTheme);

router.get("/getFlagsList", FilesManage.getFlagsList);
router.post("/uploadFile", SecurityManage.verifyTokenStrict, multipartMiddleware , FilesManage.uploadFile);
router.post("/removeFile", SecurityManage.verifyTokenStrict, FilesManage.removeFile);
router.post("/renameFile", SecurityManage.verifyTokenStrict, FilesManage.renameFile);

module.exports = router;
