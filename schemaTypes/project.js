export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
      rows: 4
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "projectUrl",
      title: "Project Website / GitHub Link",
      type: "url"
    }
  ]
};
