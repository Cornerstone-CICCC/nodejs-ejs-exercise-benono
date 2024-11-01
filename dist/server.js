"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const api_routes_1 = __importDefault(require("./routes/api.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded({ extended: true })); // accept form submittions
// Routes
app.use("/", page_routes_1.default);
app.use("/api", api_routes_1.default);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
