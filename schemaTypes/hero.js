export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'text' },
    {
  name: "resumeFile",
  title: "Resume PDF",
  type: "file",
  options: {
    accept: ".pdf",
  },
}
,
{
  name: "backgroundColor",
  title: "Background Color",
  type: "string",
  description: "Example: #0f0f0f or linear-gradient(...)",
},
    {
      name: "heroImage",title: "Hero Image",type: "image",options: { hotspot: true }},
    { name: 'showSection', title: 'Show Section', type: 'boolean' }
  ]
}
