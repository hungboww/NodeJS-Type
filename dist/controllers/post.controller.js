"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.listUser = exports.registerUser = exports.createUser = exports.getPosts = void 0;
var bcrypt = require('bcrypt');
var saltRounds = 10;
var database_1 = require("../database");
//select user ls from user
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_1.connect)()];
                case 1:
                    conn = _a.sent();
                    return [4 /*yield*/, conn.query('SELECT * FROM users')];
                case 2:
                    posts = _a.sent();
                    return [2 /*return*/, res.json(posts[0])];
            }
        });
    });
}
exports.getPosts = getPosts;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, conn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = req.body;
                    return [4 /*yield*/, (0, database_1.connect)()];
                case 1:
                    conn = _a.sent();
                    return [4 /*yield*/, conn.query('INSERT INTO users SET ?', [newUser])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.json({
                            message: "Post created"
                        })];
            }
        });
    });
}
exports.createUser = createUser;
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, password, encryptedPassword, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_1.connect)()];
                case 1:
                    conn = _a.sent();
                    password = req.body.password;
                    return [4 /*yield*/, bcrypt.hash(password, saltRounds)];
                case 2:
                    encryptedPassword = _a.sent();
                    users = {
                        "id": req.body.id,
                        "name": req.body.name,
                        "password": encryptedPassword,
                        "email": req.body.email
                    };
                    return [4 /*yield*/, conn.query('INSERT INTO users SET ? ', [users])];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.json({
                            message: "Post created"
                        })];
            }
        });
    });
}
exports.registerUser = registerUser;
function listUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, conn, posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, (0, database_1.connect)()];
                case 1:
                    conn = _a.sent();
                    return [4 /*yield*/, conn.query('SELECT * from users where id = ?', [id])];
                case 2:
                    posts = _a.sent();
                    return [2 /*return*/, res.json(posts[0])];
            }
        });
    });
}
exports.listUser = listUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, conn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, (0, database_1.connect)()];
                case 1:
                    conn = _a.sent();
                    return [4 /*yield*/, conn.query('DELETE FROM users where id = ?', [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.json({
                            message: "Delete User Okay"
                        })];
            }
        });
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, conn, checkUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, (0, database_1.connect)()];
                case 1:
                    conn = _a.sent();
                    checkUser = req.body;
                    return [4 /*yield*/, conn.query('UPDATE users set ? WHERE  id = ?', [checkUser, id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.json({
                            message: 'Update Successful'
                        })];
            }
        });
    });
}
exports.updateUser = updateUser;
//# sourceMappingURL=post.controller.js.map