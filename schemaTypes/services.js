// export default {
//   name: "services",
//   title: "Services Section",
//   type: "document",

//   fields: [
//     /* ================= HEADING ================= */
//     {
//       name: "heading",
//       title: "Heading (Rich Text)",
//       type: "array",
//       of: [richTextBlock()],
//     },

//     {
//       name: "headingAlign",
//       title: "Heading Alignment",
//       type: "string",
//       options: {
//         list: [
//           { title: "Left", value: "left" },
//           { title: "Center", value: "center" },
//           { title: "Right", value: "right" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "center",
//     },

//     /* ================= DESCRIPTION ================= */
//     {
//       name: "description",
//       title: "Section Description (Rich Text)",
//       type: "array",
//       of: [richTextBlock()],
//     },

//     {
//       name: "textAlign",
//       title: "Text Alignment",
//       type: "string",
//       options: {
//         list: [
//           { title: "Left", value: "left" },
//           { title: "Center", value: "center" },
//           { title: "Right", value: "right" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "center",
//     },

//     /* ================= LAYOUT CONTROL ================= */
//     {
//       name: "layout",
//       title: "Services Layout",
//       type: "string",
//       options: {
//         list: [
//           { title: "Grid (3 Column)", value: "grid" },
//           { title: "2 Column", value: "twoColumn" },
//           { title: "Single Column", value: "single" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "grid",
//     },

//     {
//       name: "cardAlign",
//       title: "Cards Alignment",
//       type: "string",
//       options: {
//         list: [
//           { title: "Left", value: "flex-start" },
//           { title: "Center", value: "center" },
//           { title: "Right", value: "flex-end" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "center",
//     },

//     /* ================= BACKGROUND ================= */
//     {
//       name: "backgroundColor",
//       title: "Section Background Color",
//       type: "string",
//       description: "Enter HEX color (Example: #0f172a)",
//     },

//     /* ================= SERVICES LIST ================= */
//     {
//       name: "servicesList",
//       title: "Services List",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             {
//               name: "serviceTitle",
//               title: "Service Title (Rich Text)",
//               type: "array",
//               of: [richTextBlock()],
//             },

//             {
//               name: "serviceDescription",
//               title: "Service Description (Rich Text)",
//               type: "array",
//               of: [richTextBlock()],
//             },
//           ],
//         },
//       ],
//     },

//     /* ================= SHOW SECTION ================= */
//     {
//       name: "showSection",
//       title: "Show Section",
//       type: "boolean",
//       initialValue: true,
//     },
//   ],
// };

// /* 🔥 REUSABLE RICH TEXT BLOCK */
// function richTextBlock() {
//   return {
//     type: "block",

//     styles: [
//       { title: "Normal", value: "normal" },
//       { title: "Heading 1", value: "h1" },
//       { title: "Heading 2", value: "h2" },
//       { title: "Heading 3", value: "h3" },
//       { title: "Quote", value: "blockquote" },
//     ],

//     marks: {
//       decorators: [
//         { title: "Bold", value: "strong" },
//         { title: "Italic", value: "em" },
//         { title: "Underline", value: "underline" },
//         { title: "Strike", value: "strike-through" },
//         { title: "Code", value: "code" },
//       ],

//       annotations: [
//         {
//           name: "textColor",
//           title: "Text Color",
//           type: "object",
//           fields: [
//             {
//               name: "color",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Accent", value: "accent" },
//                   { title: "Blue", value: "blue" },
//                   { title: "Pink", value: "pink" },
//                   { title: "White", value: "white" },
//                   { title: "Black", value: "black" },
//                 ],
//               },
//             },
//           ],
//         },

//         {
//           name: "fontSize",
//           title: "Font Size",
//           type: "object",
//           fields: [
//             {
//               name: "size",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Small (14px)", value: "14px" },
//                   { title: "Normal (16px)", value: "16px" },
//                   { title: "Large (20px)", value: "20px" },
//                   { title: "XL (26px)", value: "26px" },
//                 ],
//               },
//             },
//           ],
//         },

//         {
//           name: "fontFamily",
//           title: "Font Family",
//           type: "object",
//           fields: [
//             {
//               name: "family",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Poppins", value: "'Poppins', sans-serif" },
//                   { title: "Inter", value: "'Inter', sans-serif" },
//                   { title: "Montserrat", value: "'Montserrat', sans-serif" },
//                 ],
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };
// }


export default {
  name: "services",
  title: "Services Section",
  type: "document",

  fields: [
    /* ================= HEADING ================= */
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

    /* ================= DESCRIPTION ================= */
    {
      name: "description",
      title: "Section Description (Rich Text)",
      type: "array",
      of: [richTextBlock()],
    },

    {
      name: "textAlign",
      title: "Text Alignment",
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

    /* ================= LAYOUT CONTROL ================= */
    {
      name: "layout",
      title: "Services Layout",
      type: "string",
      options: {
        list: [
          { title: "3 Column Grid", value: "grid" },
          { title: "2 Column", value: "twoColumn" },
          { title: "Single Column", value: "single" },
        ],
        layout: "radio",
      },
      initialValue: "grid",
    },

    {
      name: "cardAlign",
      title: "Cards Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "flex-start" },
          { title: "Center", value: "center" },
          { title: "Right", value: "flex-end" },
        ],
        layout: "radio",
      },
      initialValue: "center",
    },

    /* ================= BACKGROUND ================= */
    {
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
      description: "Enter HEX color (Example: #0f172a)",
    },

    /* ================= SERVICES LIST ================= */
    {
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            /* 🔥 SERVICE IMAGE */
            {
              name: "serviceImage",
              title: "Service Image",
              type: "image",
              options: { hotspot: true },
            },

            {
              name: "showImage",
              title: "Show Image",
              type: "boolean",
              initialValue: true,
            },

            {
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: {
                list: [
                  { title: "Top", value: "top" },
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
              },
              initialValue: "top",
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
                ],
                layout: "radio",
              },
              initialValue: "rectangle",
            },

            /* 🔥 TITLE */
            {
              name: "serviceTitle",
              title: "Service Title (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },

            /* 🔥 DESCRIPTION */
            {
              name: "serviceDescription",
              title: "Service Description (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },
          ],
        },
      ],
    },

    /* ================= SHOW SECTION ================= */
    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
};

/* 🔥 REUSABLE RICH TEXT BLOCK */
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
                  { title: "Normal (16px)", value: "16px" },
                  { title: "Large (20px)", value: "20px" },
                  { title: "XL (26px)", value: "26px" },
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