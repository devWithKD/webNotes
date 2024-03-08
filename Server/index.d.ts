import { Express } from "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    tokenPayload: TokenPayload;
    nodeID: string;
  }
}
