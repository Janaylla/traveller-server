"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../config/upload"));
const changeImage_1 = require("../endpoint/changeImage");
const deleteImage_1 = require("../endpoint/deleteImage");
const getUser_1 = require("../endpoint/getUser");
const uploadImage_1 = require("../endpoint/uploadImage");
const routes = (0, express_1.Router)();
const upload = (0, multer_1.default)(upload_1.default);
routes.post('/', upload.single('image'), uploadImage_1.uploadImage);
routes.delete('/:filename', deleteImage_1.deleteImage);
routes.put('/user/image/:id', upload.single('image'), changeImage_1.changeImage);
routes.get('/user/:id', getUser_1.getUser);
exports.default = routes;
