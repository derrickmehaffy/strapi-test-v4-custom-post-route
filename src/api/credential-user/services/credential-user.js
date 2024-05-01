'use strict';

/**
 * credential-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credential-user.credential-user');
