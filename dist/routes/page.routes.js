"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const hobbies = ["Drawing", "Dancing", "Skydiving", "Eating"];
const contact = {
    name: "James Smith",
    email: "test@gmail.com",
    tel: 11122223333,
    address: "7670 Robson Ave, BC",
};
// Home
pageRouter.get("/", (req, res) => {
    res.status(200).render("index", { title: "My Home", showInfo: true });
});
// About
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", { title: "About Us", hobbies });
});
// Contact
pageRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", { title: "Contact", contact });
});
exports.default = pageRouter;
