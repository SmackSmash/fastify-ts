import 'dotenv/config';
import Fastify from 'fastify';
import dbConnector from './services/db';
import testRoute from './routes/test';

const fastify = Fastify({
  logger: true
});

fastify.register(dbConnector);

fastify.register(testRoute);

try {
  fastify.listen({ port: 3000 });
} catch (error: unknown) {
  fastify.log.error(error);
  process.exit(1);
}
