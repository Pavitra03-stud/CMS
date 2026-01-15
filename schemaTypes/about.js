export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'showSection',
      title: 'Show Section',
      type: 'boolean'
    },
    {
  name: "backgroundColor",
  title: "Background Color",
  type: "string",
  description: "Example: #0f172a or linear-gradient(...)"
}
  ]
}
