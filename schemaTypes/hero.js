export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },

    {
      name: "tagline",
      title: "Tagline (Rich Text)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "textColor",
                title: "Text Color",
                type: "object",
                fields: [
                  {
                    name: "color",
                    type: "string",
                    options: {
                      list: [
                        { title: "Accent", value: "accent" },
                        { title: "Blue", value: "blue" },
                        { title: "Pink", value: "pink" },
                        { title: "White", value: "white" },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },

    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      options: { accept: ".pdf" },
    },

    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
};
