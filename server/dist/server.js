"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.port || 3000;
app.set("port", port);
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map