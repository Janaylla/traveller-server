import UploadImagesService from "../services/UploadImagesService";
import { Request, Response } from 'express'
import { selectUser, IUser } from "../data/selectUser";
import DeleteImagesService from "../services/DeleteImagesService";
import { putUserPhoto } from "../data/putUserPhoto";
export const changeImage = async (request: Request, response: Response) => {
    try {
        //Save new image
        const { id } = request.params
        const { file } = request;

        const user: IUser = await selectUser(id)

        const uploadImagesService = new UploadImagesService();
        if (!file) {
            throw new Error("Error")
        }

        await uploadImagesService.execute(file);

        //Delete image 
        const deleteImagesService = new DeleteImagesService();
        await deleteImagesService.execute(user.photo);

        //Save urlTmageBd  
        await putUserPhoto(id,
            file.filename
        )
        return response.json({ success: true });
    } catch (error: any) {
        console.log({ error })
        return response.status(400).send({
            message: error.message
        })
    }
}