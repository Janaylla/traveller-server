import { connection } from "./connection"
export interface IUser {
    id: string
    name: string
    address: string
    photo: string
}
export const selectUser = async (id: string): Promise<IUser> => {
    try {
        const [user] = await connection('traveller_user')
            .where({
                id: id
            })
        if (!user) {
            throw new Error("User not found")
        }
        return user
    }
    catch (err: any) {
        throw new Error(err.message);

    }
}