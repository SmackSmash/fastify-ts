import 'dotenv/config';
import Fastify from 'fastify';
import dbConnector from './services/db';
import routes from './routes';

const fastify = Fastify({
  logger: true
});

fastify.register(dbConnector);

fastify.register(routes);

try {
  fastify.listen({ port: 3000 });
} catch (error: unknown) {
  fastify.log.error(error);
  process.exit(1);
}
