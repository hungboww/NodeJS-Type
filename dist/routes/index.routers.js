"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var index_controller_1 = require("../controllers/index.controller");
router.route('/')
    .get(index_controller_1.indexWelcome);
exports.default = router;
//# sourceMappingURL=index.routers.js.map