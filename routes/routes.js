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

router.patch("/misc/database", DevManageTools.generateDatabase);

router.get("/theme/:theme", ArtistThemeManage.getThemeData);
router.post("/theme", SecurityManage.verifyTokenStrict , ArtistThemeManage.setTheme);
router.delete("/theme/:id", SecurityManage.verifyTokenStrict , ArtistThemeManage.removeTheme);
router.patch("/theme/reassign/:main/:target/:id", SecurityManage.verifyTokenStrict, ArtistThemeManage.reassignArtistTheme);
router.post("/theme/:theme/comment", SecurityManage.verifyTokenStrict , ComentsManage.publishComment);
router.delete("/theme/:theme/comment/:id", SecurityManage.verifyTokenStrict , ComentsManage.deleteComment);
router.patch("/theme/:theme/thumb/:value", SecurityManage.verifyTokenStrict , ComentsManage.thumbValueTheme);
router.get("/theme/attributte/flags/all", FilesManage.getFlagsList);
router.patch("/theme/:theme/:attribute/:value", SecurityManage.verifyTokenStrict , ArtistThemeManage.setThemesAttribute);

router.get("/artist/:artist", ArtistThemeManage.getArtistData);
router.post("/artist", SecurityManage.verifyTokenStrict, ArtistThemeManage.setArtist);
router.delete("/artist/:id", SecurityManage.verifyTokenStrict, ArtistThemeManage.removeArtist);
router.get("/artist/:page/:limit", ArtistThemeManage.getArtistDataQuery);
router.get("/artist/attributte/:attribute/all", ArtistThemeManage.getArtistAttributte);
router.patch("/artist/:artist/:attribute/:value", SecurityManage.verifyTokenStrict , ArtistThemeManage.setArtistAttribute);

router.get("/user/:user", SecurityManage.verifyToken , UserManage.getProfileData);
router.get("/user/verify/:code", UserManage.checkActivationCode);
router.get("/user/:page/:limit", UserManage.searchUsersDataByName);
router.get("/user/self/profile/token", SecurityManage.verifyTokenStrict , UserManage.getUserData);
router.get("/user/self/profile/token/date", SecurityManage.checkTokenDate);
router.get("/user/self/profile/token/refresh", SecurityManage.extendSession);
router.get("/user/:user/:attributte/:value", SecurityManage.verifyTokenStrict, UserManage.getUserAttribute);
router.post("/user/access/signUp", UserManage.singUp);
router.post("/user/access/signin", UserManage.signIn);
router.get("/user/:user/themelist/:id/all", SecurityManage.verifyToken, UserManage.getThemesFromList);
router.patch("/user/:user/themelist/:id/attribute/privacy", SecurityManage.verifyTokenStrict , ThemeListsManage.privatizeThemeList);
router.post("/user/:user/themelist/:id", SecurityManage.verifyTokenStrict , ThemeListsManage.createNewThemeList);
router.delete("/user/:user/themelist/:id", SecurityManage.verifyTokenStrict , ThemeListsManage.deleteThemeList);
router.post("/user/:user/themelist/:id/:theme", SecurityManage.verifyTokenStrict , ThemeListsManage.addToUserThemeList);
router.delete("/user/:user/themelist/:id/:theme", SecurityManage.verifyTokenStrict , ThemeListsManage.removeFromUserThemeList);
router.patch("/user/:user/themelist/:id", SecurityManage.verifyTokenStrict , ThemeListsManage.updateUserThemeList);
router.patch("/user/:user/:attribute", SecurityManage.verifyTokenStrict , UserManage.updateUserData);

router.post("/file", SecurityManage.verifyTokenStrict, multipartMiddleware , FilesManage.uploadFile);

module.exports = router;
