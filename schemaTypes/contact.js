export default {
  name: "contact",
  title: "Contact Section",
  type: "document",

  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },

    {
      name: "description",
      title: "Description (Rich Text)",
      type: "array",
      of: [
        {
          type: "block",
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
                    title: "Color",
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

    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "address", title: "Address", type: "string" },

    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
};
