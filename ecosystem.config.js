module.exports = {
  apps: [
    {
      name: 'compose_builder_backend',
      script: './index.js',
      env: {
        PORT: 80,
      },
    },
  ],
}
