// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'projectImages',
      type: 'image',
      options: {
        isHighlighted: true
      },
      fields: [
        {
          name: 'caption_lt',
          type: 'string',
          title: 'Title (LT)',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'caption_en',
          type: 'string',
          title: 'Title (EN)',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      title: 'Site Settings',
      name: 'siteSettings',
      type: 'document',
      fields: [
        {
          title: 'Logo',
          name: 'logo',
          type: 'image'
        },
        {
          title: 'About (LT)',
          name: 'about_lt',
          type: 'array', 
          of: [{type: 'block'}]
        },
        {
          title: 'About (EN)',
          name: 'about_en',
          type: 'array', 
          of: [{type: 'block'}]
        },
        {
          title: 'Icon (must be 32x32px) png',
          name: 'icon',
          type: 'image'
        },
        {
          title: 'Metatag banner',
          name: 'meta_image',
          type: 'image'
        }
      ]
    },
    {
      title: 'Category',
      name: 'category',
      type: 'document',
      fields: [
        {
          name: 'name_lt',
          type: 'string',
          title: 'Category name (LT)'
        },
        {
          name: 'name_en',
          type: 'string',
          title: 'Category name (EN)'
        }
      ]
    },
    {
      title: 'Project',
      name: 'project',
      type: 'document',
      fields: [
        {
          name: 'name_lt',
          type: 'string',
          title: 'Project name (LT)'
        },
        {
          name: 'name_en',
          type: 'string',
          title: 'Project name (EN)'
        },
        {
          name: 'about_lt',
          type: 'string',
          title: 'About (LT) up to 200-300 characters'
        },
        {
          name: 'about_en',
          type: 'string',
          title: 'About (EN) up to 200-300 characters'
        },
        {
          name: 'category',
          type: 'reference',
          title: 'Category name',
          to: [{type: 'category'}]
        },
        {
          title: 'Images',
          name: 'images',
          type: 'array',
          of: [{ type: 'projectImages' }]
        }
      ]
    }
  ]),
})
