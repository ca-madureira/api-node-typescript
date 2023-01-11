import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


interface ICity {
  name: string;
  state: string;
  
}

const bodyValidation: yup.SchemaOf<ICity> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
  
});

export const create = async (req: Request<{}, {}, ICity>, res:Response) => {
  let validatedData: ICity | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {abortEarly:false});
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      // errors: {
      //   default: yupError.message,

      // }

      errors: {
        default: validationErrors
      }
    });
  }
 
};