module.exports = {
  apps: [
    {
      name: 'compose_builder_backend',
      script: '/home/ubuntu/app/index.js',
      env: {
        PORT: 80,
      },
    },
  ],
}
