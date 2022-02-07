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
exports.__esModule = true;
var axios_1 = require("axios");
// interface Payload {
//   grant_type: string;
//   client_id: string;
//   client_secret: string;
//   code: string;
//   redirect_uri: string;
// }
// class JWT {
//   access_token: string;
//   token_type: string;
//   expires_in: number;
//   refresh_token: string;
//   scope: string;
//   created_at: string;
// }
// getUserData('8128c96b44f4dd1ca4b092f0792afbfa017241fcb354b6a7e1b46bd85709fc21');
var options = {
    method: "POST",
    hostname: "api.intra.42.fr",
    port: null,
    path: "/oauth/token",
    headers: {
        "content-type": "application/json",
        "cache-control": "no-cache"
    }
};
function getAccessToken(code) {
    return __awaiter(this, void 0, void 0, function () {
        var payload, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payload = {
                        grant_type: "authorization_code",
                        client_id: "34c469cbd053f27f00bea12177cdc27a557362e9be693e62a981a1776bcf1a23",
                        client_secret: "0d64ef2b1460aa1feb4bc8287d49d70a923e2bdbae3c2b1654e81ef7ba75df04",
                        redirect_uri: "http://localhost:3000",
                        code: code
                    };
                    return [4 /*yield*/, (0, axios_1["default"])({
                            method: "post",
                            url: "https://api.intra.42.fr/oauth/token",
                            data: JSON.stringify(payload),
                            headers: {
                                "content-type": "application/json"
                            }
                        }).then(function (response) {
                            ret = response.data.access_token;
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ret];
            }
        });
    });
}
function getUserData(code) {
    return __awaiter(this, void 0, void 0, function () {
        var access_token, userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAccessToken(code).then(function (res) { return (access_token = res); })];
                case 1:
                    _a.sent();
                    console.log(access_token);
                    return [4 /*yield*/, (0, axios_1["default"])({
                            method: "GET",
                            url: "https://api.intra.42.fr/v2/me",
                            headers: {
                                authorization: "Bearer ".concat(access_token),
                                "content-type": "application/json"
                            }
                        }).then(function (response) {
                            var _a = response.data, id = _a.id, email = _a.email, username = _a.login, avatar = _a.image_url;
                            userData = { id: id, username: username, email: email, avatar: avatar };
                        })];
                case 2:
                    _a.sent();
                    console.log(userData);
                    return [2 /*return*/, userData];
            }
        });
    });
}
getUserData("5e63d538498b64c893a1f7cc01500f7423692c3442b6dc837b2e6aea6cbf5d92");
