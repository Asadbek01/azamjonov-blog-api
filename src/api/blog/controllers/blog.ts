/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::blog.blog').findOne({ 
            where: { slug: id },    
            populate: ['thumbnail'],
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },

    sanitizeOutput(entity, ctx) {
        // Define your sanitization logic here
        return entity;
    },

    transformResponse(sanitizedEntity) {
        // Define your response transformation logic here
        return sanitizedEntity;
    },
}));
// 
