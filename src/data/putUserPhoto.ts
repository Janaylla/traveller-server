import { connection } from "./connection"
export interface IUser {
    id: string
    name: string
    address: string
    photo: string
}

export const putUserPhoto = async (id: string, photoUrl: string): Promise<void> => {
    try {
        await connection.raw(`
            UPDATE traveller_user 
            SET photo = '${photoUrl}' 
            WHERE (id = '${id}');
        `)
    }
    catch (err: any) {
        throw new Error(err.message);

    }
}