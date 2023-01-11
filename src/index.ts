import { server } from './server/Server';


server.listen(process.env.PORT || 3000, () => {
  console.log(`a porta rodando ${process.env.PORT || 3000}`)
});