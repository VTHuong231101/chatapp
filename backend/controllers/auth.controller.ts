import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    res.send("Login Route from controller");
}

export const signup = (req: Request, res: Response) => {
    res.send("Signup Route");
};

export const logout = (req: Request, res: Response) => {
    res.send("Logout Route");
};
