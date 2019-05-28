"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TodoController {
    constructor() {
        this.convertDate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { date_string } = req.params;
            const date = new Date(Number(date_string));
            if (isNaN(date.getTime())) {
                console.log('not valid!', date.getTime());
            }
            else {
                console.log('valid! ', date.getTime());
            }
            res.json(`${date_string} ok love you she! hihi`);
        });
    }
}
exports.default = TodoController;
//# sourceMappingURL=TimeStampController.js.map