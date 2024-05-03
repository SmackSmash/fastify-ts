import Fastify from 'fastify';
import testRoute from './routes/test';

const fastify = Fastify({
  logger: true
});

fastify.register(testRoute);

(async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
