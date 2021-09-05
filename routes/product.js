const express = require("express");
const router = express.Router();

const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")
const {getProductById} = require("../controllers/products")

//params
router.param("userId",getUserById);
router.param("productId",getProductById);

//actual routes


module.exports = router;