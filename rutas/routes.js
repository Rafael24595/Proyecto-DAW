const express = require('express');
const router = express.Router();

const controller = require('../controladores/product');

router.get("/generateDatabase", controller.generateDatabase);
router.get("/getData", controller.getData);
router.post("/signUp", controller.singUp);
router.post("/signIn", controller.signIn);

module.exports = router;
