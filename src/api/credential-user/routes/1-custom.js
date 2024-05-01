module.exports = {
  routes: [
    {
      method: "POST",
      path: "/credential-users/custom/plz",
      handler: "api::credential-user.credential-user.healthCheck",
      config: {
        description: "Testing Health Check",
        policies: [],
      },
    },
  ],
};
