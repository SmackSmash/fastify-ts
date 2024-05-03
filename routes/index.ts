import type { FastifyInstance } from 'fastify';

const routes = async (fastify: FastifyInstance) => {
  const collection = fastify.mongo.db?.collection('sample_mflix');

  fastify.get('/', async (request, reply) => {
    console.log(collection);
    const result = collection!.find();
    return result;
  });
};

export default routes;
