import Hapi from '@hapi/hapi';
import routes from './routes.mjs';

const init = async () => {
  const server = new Hapi.Server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
