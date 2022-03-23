"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var post_controller_1 = require("../controllers/post.controller");
router.route('/')
    .get(post_controller_1.getPosts)
    .post(post_controller_1.registerUser);
router.route('/:id')
    .get(post_controller_1.listUser)
    .delete(post_controller_1.deleteUser)
    .put(post_controller_1.updateUser);
// router.route('/password')
exports.default = router;
//# sourceMappingURL=post.routes.js.map