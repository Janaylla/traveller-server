import UploadImagesService from "../services/UploadImagesService";
import { Request, Response } from 'express'
export const uploadImage = async (request: Request, response: Response) => {
  try {
    const { file } = request;

    const uploadImagesService = new UploadImagesService();
    if (!file)
      throw new Error("Error")

    await uploadImagesService.execute(file);

    return response.json({ success: true, fileUrl: `https://images-profiles-jan.s3.amazonaws.com/${file.filename}` });
  } catch (error: any) {
    return response.status(400).send({
      message: error.message
    })
  }
}