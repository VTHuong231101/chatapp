import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
    // res.send("Login Route from controller");
    try {
        const {userInformation} = req.body;
    } catch (error) {
        
    }
}

export const signup = (req: Request, res: Response) => {
    res.send("Signup Route");
};

export const logout = (req: Request, res: Response) => {
    res.send("Logout Route");
};
