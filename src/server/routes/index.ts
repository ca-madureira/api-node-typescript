import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CitiesController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.post('/cidades', CitiesController.createValidation, CitiesController.create);
router.get('/cidades', CitiesController.getAllValidation, CitiesController.getAll);


export { router };