import Fastify from 'fastify';
import 'dotenv/config';
import fastifyMongo from '@fastify/mongodb';
import testRoute from './routes/test';

const fastify = Fastify({
  logger: true
});

const envSchema = {
  type: 'object',
  required: ['MONGO_URI'],
  properties: {
    MONGO_URI: {
      type: 'string'
    }
  }
};

fastify.register(fastifyMongo, {
  forceClose: true,
  url: process.env.MONGO_URI
});

fastify.register(testRoute);

try {
  fastify.listen({ port: 3000 });
} catch (error: unknown) {
  fastify.log.error(error);
  process.exit(1);
}
