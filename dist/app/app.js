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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// 
const userRouter = express_1.default.Router();
const coursesRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', coursesRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        massage: "user is created",
        data: user
    });
});
coursesRouter.post('/create-course', (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        massage: "courses is created",
        data: course
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    });
});
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.params);
    // console.log(req.query);
    // res.send('Hello kaku');
    try {
        res.send(something);
    }
    catch (error) {
        // console.log(error);
        next(error);
        // res.status(400).json({
        //   success: false,
        //     massage: "failed to get data"
        // })
    }
}));
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send("got data")
    res.json({
        message: "success data"
    });
});
// Global Error Handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'something went wrong'
        });
    }
});
exports.default = app;
