import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('Cities - DeleteById', () => {
   it('Apaga registro', async () => {

    const res = await testServer
      .post('./cidades')
      .send({ name: 'Caxias do sul'});

    expect (res.statusCode).toEqual(StatusCodes.CREATED);

    const resDeleted = await testServer
      .delete(`/cidades/${res.body}`)
      .send();

    expect(resDeleted.statusCode).toEqual(StatusCodes.NO_CONTENT);
   });

   it('Tentar apagar registro que não existe', async () => {

    const res = await testServer
       .delete('./cidades/9999')
       .send();

       expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
       expect(res.body).toHaveProperty('errors.default');
   })

   
})
