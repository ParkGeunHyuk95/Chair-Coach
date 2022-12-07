import * as express from "express";
import bodyService from "../services/bodyService";
import type { MulterFile } from "../customType/multer.d";

class bodyController {
  // GET: 전체 운동 기록 조회 기능
  static async bodyRecordlist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const allBodies = await bodyService.getAllBodies();
      return res.status(200).json(allBodies);
    } catch (err) {
      const result_err = {
        result: false,
        cause: "api",
        message: "bodyRecordlist api에서 오류가 발생했습니다.",
      };
      return res.status(200).json(result_err);
    }
  }

  // GET: 특정 유저의 운동 기록 조회
  static async bodyRecords(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user_id = req.body.user_id;
      if (user_id !== req.params.user_id) {
        const result_err = {
          result: false,
          cause: "user_id",
          message: "정상적으로 로그인된 사용자의 요청이 아닙니다.",
        };
        return res.status(200).json(result_err);
      }
      const Bodies = await bodyService.getBodies({ user_id });
      return res.status(200).json(Bodies);
    } catch (err) {
      const result_err = {
        result: false,
        cause: "api",
        message: "bodyRecords api에서 오류가 발생했습니다.",
      };
      return res.status(200).json(result_err);
    }
  }

  // POST: 특정 유저의 운동 기록 시작
  static async bodyCreate(
    req: express.Request & { files: MulterFile[] },
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user_id = req.body.user_id;
      if (user_id !== req.params.user_id) {
        const result_err = {
          result: false,
          cause: "user_id",
          message: "정상적으로 로그인된 사용자의 요청이 아닙니다.",
        };
        return res.status(200).json(result_err);
      }
      const tag = req.body.tag;
      const body = await bodyService.addBody({
        user_id,
        tag,
      });
      return res.status(200).json(body);
    } catch (err) {
      const result_err = {
        result: false,
        cause: "api",
        message: "bodyCreate api에서 오류가 발생했습니다.",
      };
      return res.status(200).json(result_err);
    }
  }

  // PATCH: 특정 유저의 운동 기록 종료
  static async bodyUpdate(
    // req: express.Request & { files: MulterFile[] },
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user_id = req.body.user_id;
      if (user_id !== req.params.user_id) {
        const result_err = {
          result: false,
          cause: "user_id",
          message: "정상적으로 로그인된 사용자의 요청이 아닙니다.",
        };
        return res.status(200).json(result_err);
      }
      const body_id = req.body.body_id;
      const body = await bodyService.updateBody({
        body_id,
      });
      return res.status(200).json(body);
    } catch (err) {
      const result_err = {
        result: false,
        cause: "api",
        message: "bodyUpdate api에서 오류가 발생했습니다.",
      };
      return res.status(200).json(result_err);
    }
  }

  // GET: 특정 유저의 운동 기록 조회 week
  static async bodyRecordsWeek(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user_id = req.body.user_id;
      if (user_id !== req.params.user_id) {
        const result_err = {
          result: false,
          cause: "user_id",
          message: "정상적으로 로그인된 사용자의 요청이 아닙니다.",
        };
        return res.status(200).json(result_err);
      }
      const year = req.params.year;
      const week = req.params.week;
      const Bodies = await bodyService.getBodiesByWeek({ user_id, year, week });
      return res.status(200).json(Bodies);
    } catch (err) {
      const result_err = {
        result: false,
        cause: "api",
        message: "bodyRecords api에서 오류가 발생했습니다.",
      };
      return res.status(200).json(result_err);
    }
  }

  // GET: 특정 유저의 운동 기록 조회 year
  static async bodyRecordsYear(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const user_id = req.body.user_id;
      if (user_id !== req.params.user_id) {
        const result_err = {
          result: false,
          cause: "user_id",
          message: "정상적으로 로그인된 사용자의 요청이 아닙니다.",
        };
        return res.status(200).json(result_err);
      }
      const year = req.params.year;
      const Bodies = await bodyService.getBodiesByYear({ user_id, year });
      return res.status(200).json(Bodies);
    } catch (err) {
      const result_err = {
        result: false,
        cause: "api",
        message: "bodyRecords api에서 오류가 발생했습니다.",
      };
      return res.status(200).json(result_err);
    }
  }
}

export = bodyController;