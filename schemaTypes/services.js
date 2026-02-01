export default {
  name: "services",
  title: "Services Section",
  type: "document",

  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },

    {
      name: "highlightWord",
      title: "Highlight Word",
      type: "string",
      description: "Word to highlight in heading",
    },

    {
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "serviceTitle",
              title: "Service Title",
              type: "string",
            },

            {
              name: "serviceDescription",
              title: "Service Description (Rich Text)",
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
          ],
        },
      ],
    },

    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
};
