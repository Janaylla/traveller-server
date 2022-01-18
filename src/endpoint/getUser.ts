
import { Request, Response } from 'express'
import { selectUser, IUser } from "../data/selectUser";
export const getUser = async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        const user: IUser = await selectUser(id)

        return response.json({ user });
    } catch (error: any) {
        return response.status(400).send({
            message: error.message
        })
    }
}