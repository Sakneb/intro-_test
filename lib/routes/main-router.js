const Router = require("@koa/router");
const router = new Router();

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.getHello);
router.get("/mars", mainController.getHelloMars);
router.get("/joke", mainController.getJoke);
router.get("/hello", mainController.getHelloCustom);
router.get("/eesti", mainController.getHelloEesti);
router.get("/no-you", mainController.getSomething);
router.get("/add", mainController.getAddition);

module.exports = router;
