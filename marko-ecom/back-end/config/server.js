module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6e5c519b2d2cc7a7477f0639071a45f0'),
    },
  },
  cron: {
    enabled: true
  },
});
