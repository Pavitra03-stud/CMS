// export default {
//   name: "customSection",
//   title: "Custom Section",
//   type: "document",

//   fields: [
//     {
//       name: "title",
//       title: "Section Title",
//       type: "string",
//     },

//     {
//       name: "slug",
//       title: "Section Slug",
//       type: "string",
//       description: "Example: gallery, testimonials",
//     },

//     {
//       name: "content",
//       title: "Content (Rich Builder)",
//       type: "array",
//       of: [
//         richTextBlock(),

//         /* 🔥 Single Image */
//         {
//           type: "image",
//           options: { hotspot: true },
//         },

//         /* 🔥 Image Gallery */
//         {
//   type: "object",
//   name: "imageGallery",
//   title: "Image Gallery",
//   fields: [
//     {
//       name: "shape",
//       title: "Image Shape",
//       type: "string",
//       options: {
//         list: [
//           { title: "Rectangle", value: "rectangle" },
//           { title: "Square", value: "square" },
//           { title: "Circle", value: "circle" },
//           { title: "Diamond", value: "diamond" },
//           { title: "Hexagon", value: "hexagon" },
//           { title: "Star", value: "star" }
//         ],
//         layout: "radio"
//       },
//       initialValue: "rectangle"
//     },
//     {
//       name: "images",
//       title: "Images",
//       type: "array",
//       of: [{ type: "image", options: { hotspot: true } }]
//     }
//   ]  
//         }
//       ],
//     },

//     {
//       name: "showSection",
//       title: "Show Section",
//       type: "boolean",
//       initialValue: true,
//     },
//   ],
// };


// /* 🔥 HERO LEVEL RICH TEXT */
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
//                   { title: "Small", value: "14px" },
//                   { title: "Medium", value: "18px" },
//                   { title: "Large", value: "24px" },
//                   { title: "XL", value: "32px" },
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
  name: "customSection",
  title: "Custom Section",
  type: "document",

  fields: [
    /* ================= SECTION SETTINGS ================= */

    {
      name: "title",
      title: "Section Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Section Slug",
      type: "string",
      description: "Example: gallery, testimonials",
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
      initialValue: "left",
    },

    {
      name: "contentWidth",
      title: "Content Width",
      type: "string",
      options: {
        list: [
          { title: "Full Width", value: "full" },
          { title: "Medium", value: "medium" },
          { title: "Small Centered", value: "small" },
        ],
        layout: "radio",
      },
      initialValue: "medium",
    },

    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description: "Example: #0f172a or white",
    },

    /* ================= CONTENT BUILDER ================= */

    {
      name: "content",
      title: "Content (Rich Builder)",
      type: "array",
      of: [
        richTextBlock(),

        /* 🔥 Single Image */
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "imageAlign",
              title: "Image Alignment",
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
          ],
        },

        /* 🔥 Image Gallery */
        {
          type: "object",
          name: "imageGallery",
          title: "Image Gallery",
          fields: [
            {
              name: "shape",
              title: "Image Shape",
              type: "string",
              options: {
                list: [
                  { title: "Rectangle", value: "rectangle" },
                  { title: "Square", value: "square" },
                  { title: "Circle", value: "circle" },
                  { title: "Diamond", value: "diamond" },
                  { title: "Hexagon", value: "hexagon" },
                  { title: "Star", value: "star" },
                ],
                layout: "radio",
              },
              initialValue: "rectangle",
            },

            {
              name: "galleryAlign",
              title: "Gallery Alignment",
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
              name: "images",
              title: "Images",
              type: "array",
              of: [{ type: "image", options: { hotspot: true } }],
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
                  { title: "Small", value: "14px" },
                  { title: "Medium", value: "18px" },
                  { title: "Large", value: "24px" },
                  { title: "XL", value: "32px" },
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