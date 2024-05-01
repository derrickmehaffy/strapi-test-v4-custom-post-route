"use strict";

/**
 * credential-user controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::credential-user.credential-user",
  ({ strapi }) => ({
    async healthCheck(ctx) {
      console.log(ctx.request.body);

      return {
        okay: true,
      };
    },
  })
);
