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
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUserPhoto = void 0;
const connection_1 = require("./connection");
const putUserPhoto = (id, photoUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.connection.raw(`
            UPDATE traveller_user 
            SET photo = '${photoUrl}' 
            WHERE (id = '${id}');
        `);
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.putUserPhoto = putUserPhoto;
