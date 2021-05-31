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

router.get("/misc/database/new", DevManageTools.generateDatabase);

router.get("/theme", ArtistThemeManage.getThemeData);
router.post("/theme", SecurityManage.verifyTokenStrict , ArtistThemeManage.setTheme);
router.post("/theme/remove", SecurityManage.verifyTokenStrict , ArtistThemeManage.removeTheme);
router.post("/theme/reassign", SecurityManage.verifyTokenStrict, ArtistThemeManage.reassignArtistTheme);
router.post("/theme/reassign/all", SecurityManage.verifyTokenStrict, ArtistThemeManage.reassignArtistThemes);
router.post("/theme/comment", SecurityManage.verifyTokenStrict , ComentsManage.publishComment);
router.post("/theme/comment/remove", SecurityManage.verifyTokenStrict , ComentsManage.deleteComment);
router.post("/theme/thumb", SecurityManage.verifyTokenStrict , ComentsManage.thumbValueTheme);
router.get("/theme/flags/all", FilesManage.getFlagsList);
router.post("/theme/attribute", SecurityManage.verifyTokenStrict , ArtistThemeManage.setThemesAttribute);

router.get("/artist", ArtistThemeManage.getArtistData);
router.post("/artist", SecurityManage.verifyTokenStrict, ArtistThemeManage.setArtist);
router.post("/artist/remove", SecurityManage.verifyTokenStrict, ArtistThemeManage.removeArtist);
router.post("/artist/page", ArtistThemeManage.getArtistDataQuery);
router.get("/artist/id/all", ArtistThemeManage.getArtistsId);
router.post("/artist/attribute", SecurityManage.verifyTokenStrict , ArtistThemeManage.setArtistAttribute);

router.get("/user", SecurityManage.verifyToken , UserManage.getProfileData);
router.post("/user/page", UserManage.searchUsersDataByName);
router.get("/user/token", SecurityManage.verifyTokenStrict , UserManage.getUserData);
router.get("/user/token/date", SecurityManage.checkTokenDate);
router.get("/user/token/date/refresh", SecurityManage.extendSession);
router.post("/user/password", SecurityManage.verifyTokenStrict, UserManage.checkPassword);
router.post("/user/access/signUp", UserManage.singUp);
router.post("/user/access/signin", UserManage.signIn);
router.post("/user/themelist/all", SecurityManage.verifyToken, UserManage.getThemesFromList);
router.post("/user/themelist/privacy", SecurityManage.verifyTokenStrict , ThemeListsManage.privatizeThemeList);
router.post("/user/themelist", SecurityManage.verifyTokenStrict , ThemeListsManage.createNewThemeList);
router.post("/user/themelist/delete", SecurityManage.verifyTokenStrict , ThemeListsManage.deleteThemeList);
router.post("/user/themelist/add", SecurityManage.verifyTokenStrict , ThemeListsManage.addToUserThemeList);
router.post("/user/themelist/remove", SecurityManage.verifyTokenStrict , ThemeListsManage.removeFromUserThemeList);
router.post("/user/themelist/update", SecurityManage.verifyTokenStrict , ThemeListsManage.updateUserThemeList);
router.post("/user/attribute", SecurityManage.verifyTokenStrict , UserManage.updateUserData);

router.post("/file", SecurityManage.verifyTokenStrict, multipartMiddleware , FilesManage.uploadFile);
router.post("/file/remove", SecurityManage.verifyTokenStrict, FilesManage.removeFile);
router.post("/file/rename", SecurityManage.verifyTokenStrict, FilesManage.renameFile);

module.exports = router;
