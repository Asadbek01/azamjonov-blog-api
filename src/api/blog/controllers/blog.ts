'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeOutput } = require('strapi-utils');

function transformResponse(entity: any) {
    // do some transformation on the entity
    return entity;
}

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
    async findOne(ctx: any) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::blog.blog').findOne({ 
            where: { slug: id },    
            populate: ['thumbnail'],
         });
        const sanitizedEntity = await sanitizeOutput(entity, strapi.models['blog'], ctx);

        return transformResponse(sanitizedEntity);

        },

}));

