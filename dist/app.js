"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const path_1 = tslib_1.__importDefault(require("path"));
const route_1 = tslib_1.__importDefault(require("./route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use('/', route_1.default);
mongoose_1.default.connect("mongodb://localhost:27017/todo_list")
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => console.log("failed to connect", error));
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${3000}`);
});
//# sourceMappingURL=app.js.map