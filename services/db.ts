export default fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: fastify.config.MONGO_URI
});
