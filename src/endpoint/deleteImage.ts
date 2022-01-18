
import { Request, Response } from 'express'
import DeleteImagesService from '../services/DeleteImagesService';
export const deleteImage = async (request: Request, response: Response) => {
    const { filename } = request.params;

    const deleteImagesService = new DeleteImagesService();

    await deleteImagesService.execute(filename);

    return response.send();
}