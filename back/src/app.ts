import express from "express";
import cors from "cors";
// import sequelize from "./config/sequelize";
import { db } from "./models";
import userRouter from "./routers/userRouter";
import socialLoginRouter from "./routers/socialLoginRouter";
import neckRouter from "./routers/neckRouter";
import bodyRouter from "./routers/bodyRouter";
import swagger from "./utils/swagger";
import { errorHandler } from "./middlewares/errorMiddleware";
import checkClientIp from "./middlewares/clientIpMiddleware";
const logger = require("./config/logger");
const client = require("./discord/index");
// const discordCommands = require("./discord/deploy-commands");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(checkClientIp);

app.use(userRouter);
app.use(socialLoginRouter);
app.use(neckRouter);
app.use(bodyRouter);
app.use(swagger);

// uploads
app.use(express.static("uploads"));

// errorHandlers
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("안녕하세요, 4팀 backend 서버입니다.");
});

// sequelize.sync({ force: false, alter: true });
db.sequelize
  // .sync({ force: true })
  // .sync({ force: false })
  // .sync({ alter: true })
  .sync({ alter: { drop: false } })
  .then(() => {
    logger.info("sequelize.sync: success");
    console.log("DB 테스트 성공");
  })
  .catch((error) => {
    logger.error("sequelize.sync:", error);
    console.error("DB 테스트 실패:", error);
  });
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ alter: { drop: false } });

(async () => {
  try {
    await db.sequelize.authenticate();
    logger.info("sequelize.authenticate: success");
    console.log("데이터베이스 연결 성공");
  } catch (error) {
    logger.error("sequelize.authenticate:", error);
    console.error("데이터베이스 오류:", error);
  }
})();

export = app;
