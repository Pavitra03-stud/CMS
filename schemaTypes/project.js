export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'github',
      title: 'GitHub Link',
      type: 'url'
    },
    {
      name: 'live',
      title: 'Live Demo Link',
      type: 'url'
    },
    {
  name: "backgroundColor",
  title: "Background Color",
  type: "string",
  description: "Example: #ffffff or linear-gradient(...)"
}

  ]
}
