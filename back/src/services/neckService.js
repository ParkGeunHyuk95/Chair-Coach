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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Neck_model_1 = __importDefault(require("../models/Neck.model"));
// import { nullPrototypeHandler } from "../utils/nullPrototypeHandler";
var uuid_1 = require("uuid");
var moment_timezone_1 = __importDefault(require("moment-timezone"));
moment_timezone_1.default.tz.setDefault("Asia/Seoul");
var neckService = /** @class */ (function () {
    function neckService() {
    }
    //// 모든 거북목 테스트 결과 조회
    neckService.getAllNecks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allNecks, countNecks, result_success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Neck_model_1.default.findAll()];
                    case 1:
                        allNecks = _a.sent();
                        return [4 /*yield*/, Neck_model_1.default.countAll()];
                    case 2:
                        countNecks = _a.sent();
                        result_success = Object.assign({
                            result: true,
                            message: "\uBAA8\uB4E0 \uAC70\uBD81\uBAA9 \uACB0\uACFC \uC870\uD68C\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC774\uB904\uC84C\uC2B5\uB2C8\uB2E4.",
                        }, { count: countNecks[0].cnt, list: allNecks });
                        return [2 /*return*/, result_success];
                }
            });
        });
    };
    //// 특정 유저의 거북목 테스트 결과 조회
    neckService.getNecks = function (_a) {
        var user_id = _a.user_id;
        return __awaiter(this, void 0, void 0, function () {
            var Necks, countNecks, result_success;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Neck_model_1.default.findByUserId({ user_id: user_id })];
                    case 1:
                        Necks = _b.sent();
                        return [4 /*yield*/, Neck_model_1.default.countByUserId({ user_id: user_id })];
                    case 2:
                        countNecks = _b.sent();
                        result_success = Object.assign({
                            result: true,
                            message: "\uD574\uB2F9 \uC720\uC800\uC758 \uAC70\uBD81\uBAA9 \uACB0\uACFC \uC870\uD68C\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC774\uB904\uC84C\uC2B5\uB2C8\uB2E4.",
                        }, { count: countNecks[0].cnt, list: Necks });
                        return [2 /*return*/, result_success];
                }
            });
        });
    };
    //// 거북목 테스트 결과 기록
    neckService.addNeck = function (_a) {
        var user_id = _a.user_id, result = _a.result, score = _a.score, filename = _a.filename;
        return __awaiter(this, void 0, void 0, function () {
            var neck_id, newNeck, result_success;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        neck_id = (0, uuid_1.v4)();
                        return [4 /*yield*/, Neck_model_1.default.create({
                                neck_id: neck_id,
                                user_id: user_id,
                                result: result,
                                score: score,
                                filename: filename,
                            })];
                    case 1:
                        newNeck = _b.sent();
                        result_success = Object.assign({
                            result: true,
                            message: "\uAC70\uBD81\uBAA9 \uACB0\uACFC \uAE30\uB85D\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC774\uB904\uC84C\uC2B5\uB2C8\uB2E4.",
                        });
                        return [2 /*return*/, result_success];
                }
            });
        });
    };
    //// 특정 유저의 거북목 기록 조회 - year
    neckService.getNecksByYear = function (_a) {
        var user_id = _a.user_id, year = _a.year;
        return __awaiter(this, void 0, void 0, function () {
            var Necks, result_success;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Neck_model_1.default.findByUserIdYear({ user_id: user_id, year: year })];
                    case 1:
                        Necks = _b.sent();
                        result_success = Object.assign({
                            result: true,
                            message: "\uD574\uB2F9 \uC720\uC800\uC758 \uAC70\uBD81\uBAA9 \uAE30\uB85D \uC870\uD68C\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC774\uB904\uC84C\uC2B5\uB2C8\uB2E4.",
                            list: Necks,
                        });
                        return [2 /*return*/, result_success];
                }
            });
        });
    };
    return neckService;
}());
module.exports = neckService;
