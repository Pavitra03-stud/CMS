export default {
  name: "portfolio",
  title: "Projects / Portfolio",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "My Projects",
    },
    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "typography",
      title: "Typography",
      type: "typography",
    },
    {
      name: "projects",
      title: "Projects List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Project Title",
              type: "string",
            },
            {
              name: "description",
              title: "Project Description",
              type: "array",
              of: [{ type: "block" }], // 🔥 Portable Text
            },
            {
              name: "image",
              title: "Project Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "projectUrl",
              title: "Project Link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
