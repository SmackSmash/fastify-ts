const Fastify = require('fastify');
const fastifyEnv = require('@fastify/env');
const testRoute = require('./routes/test');

const fastify = Fastify({
  logger: true
});

const schema = {
  type: 'object',
  required: ['MONGO_URI'],
  properties: {
    MONGO_URI: {
      type: 'string'
    }
  }
};

fastify
  .register(fastifyEnv, {
    confKey: 'config',
    schema: schema,
    dotenv: true
  })
  .ready((error: unknown) => {
    console.error(error);
    console.log(fastify.config.MONGO_URI);
  });

fastify.register(testRoute);

(async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error: unknown) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
