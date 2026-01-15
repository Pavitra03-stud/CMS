export default {
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'serviceTitle', title: 'Service Title', type: 'string' },
            { name: 'serviceDescription', title: 'Service Description', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'showSection',
      title: 'Show Section',
      type: 'boolean'
    },
    {
  name: "backgroundColor",
  title: "Background Color",
  type: "string"
}

  ]
}
