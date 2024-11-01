"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiRouter = (0, express_1.Router)();
// Contact
apiRouter.post("/contact/email", (req, res) => {
    const info = {
        title: req.body.title,
        text: req.body.text,
    };
    res
        .status(200)
        .render("contact_submitted", { title: "Contact Submitted", info });
});
exports.default = apiRouter;
