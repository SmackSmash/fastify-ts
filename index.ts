import Fastify from 'fastify';
import test from './services/db';

const fastify = Fastify({
  logger: true
});

fastify.get('/', async function handler(request, reply) {
  return { hello: test };
});

(async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
