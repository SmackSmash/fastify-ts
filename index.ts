import Fastify from 'fastify';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
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

await fastify.register(fastifyEnv, {
  confKey: 'config',
  schema: envSchema,
  dotenv: true
});

await fastify.register(fastifyMongo, {
  forceClose: true,
  url: fastify.config.MONGO_URI
});

await fastify.register(testRoute);

try {
  await fastify.listen({ port: 3000 });
} catch (error: unknown) {
  fastify.log.error(error);
  process.exit(1);
}

export {};
