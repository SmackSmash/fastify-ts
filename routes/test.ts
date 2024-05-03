import type { FastifyInstance } from 'fastify';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
};

export default routes;
