import { Request, Response } from "express";
export declare function getPosts(req: Request, res: Response): Promise<Response>;
export declare function createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function registerUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listUser(req: Request, res: Response): Promise<Response>;
export declare function deleteUser(req: Request, res: Response): Promise<Response>;
export declare function updateUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=post.controller.d.ts.map