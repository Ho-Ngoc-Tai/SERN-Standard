import express from "express"
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/hoiTai", (req, res) => {
        return res.send('Tai dep zai');
    });

    //rest api

    return app.use("/", router);
}

module.exports = initWebRoutes;