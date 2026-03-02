export default {
  name: "portfolio",
  title: "Projects / Portfolio",
  type: "document",

  fields: [
    /* ================= SECTION SETTINGS ================= */

    {
      name: "heading",
      title: "Heading (Rich Text)",
      type: "array",
      of: [richTextBlock()],
    },

    {
      name: "headingAlign",
      title: "Heading Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "center",
    },

    /* 🔥 MATCHING CSS VALUES */
    {
      name: "gridLayout",
      title: "Grid Layout",
      type: "string",
      options: {
        list: [
          { title: "1 Column", value: "one" },
          { title: "2 Columns", value: "two" },
          { title: "3 Columns", value: "three" },
        ],
        layout: "radio",
      },
      initialValue: "three",
    },

    {
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
    },

    {
      name: "textAlign",
      title: "Section Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    },

    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },

    /* ================= PROJECTS ================= */

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
              title: "Project Title (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },

            {
              name: "description",
              title: "Project Description (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },

            {
              name: "image",
              title: "Project Image",
              type: "image",
              options: { hotspot: true },
            },

            {
              name: "imageShape",
              title: "Image Shape",
              type: "string",
              options: {
                list: [
                  { title: "Rectangle", value: "rectangle" },
                  { title: "Square", value: "square" },
                  { title: "Circle", value: "circle" },
                  { title: "Diamond", value: "diamond" },
                  { title: "Hexagon", value: "hexagon" },
                ],
                layout: "radio",
              },
              initialValue: "rectangle",
            },

            /* 🔥 NEW ALIGNMENT CONTROL */
            {
              name: "alignment",
              title: "Project Alignment",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
              },
              initialValue: "center",
            },

            {
              name: "projectUrl",
              title: "Project Link",
              type: "url",
            },

            {
              name: "showProject",
              title: "Show Project",
              type: "boolean",
              initialValue: true,
            },
          ],
        },
      ],
    },
  ],
};

/* ================= RICH TEXT BLOCK ================= */

function richTextBlock() {
  return {
    type: "block",

    styles: [
      { title: "Normal", value: "normal" },
      { title: "Heading 1", value: "h1" },
      { title: "Heading 2", value: "h2" },
      { title: "Heading 3", value: "h3" },
      { title: "Quote", value: "blockquote" },
    ],

    marks: {
      decorators: [
        { title: "Bold", value: "strong" },
        { title: "Italic", value: "em" },
        { title: "Underline", value: "underline" },
        { title: "Strike", value: "strike-through" },
        { title: "Code", value: "code" },
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
                  { title: "Black", value: "black" },
                ],
              },
            },
          ],
        },

        {
          name: "fontSize",
          title: "Font Size",
          type: "object",
          fields: [
            {
              name: "size",
              type: "string",
              options: {
                list: [
                  { title: "Small (14px)", value: "14px" },
                  { title: "Medium (18px)", value: "18px" },
                  { title: "Large (22px)", value: "22px" },
                  { title: "XL (28px)", value: "28px" },
                ],
              },
            },
          ],
        },

        {
          name: "fontFamily",
          title: "Font Family",
          type: "object",
          fields: [
            {
              name: "family",
              type: "string",
              options: {
                list: [
                  { title: "Poppins", value: "'Poppins', sans-serif" },
                  { title: "Inter", value: "'Inter', sans-serif" },
                  { title: "Montserrat", value: "'Montserrat', sans-serif" },
                ],
              },
            },
          ],
        },
      ],
    },
  };
}