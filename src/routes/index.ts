import { request, Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { changeImage } from '../endpoint/changeImage';
import { deleteImage } from '../endpoint/deleteImage';
import { getUser } from '../endpoint/getUser';
import { uploadImage } from '../endpoint/uploadImage';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', upload.single('image'), uploadImage);
routes.delete('/:filename', deleteImage);


routes.put('/user/image/:id', upload.single('image'), changeImage);
routes.get('/user/:id', getUser);

export default routes;
