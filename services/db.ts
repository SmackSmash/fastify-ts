import fastifyPlugin from 'fastify-plugin';
import fastifyMongodb from '@fastify/mongodb';
import { FastifyInstance } from 'fastify';

const dbConnector = async (fastify: FastifyInstance) => {
  fastify.register(fastifyMongodb, {
    forceClose: true,
    url: process.env.MONGO_URI
  });
};

export default fastifyPlugin(dbConnector);
