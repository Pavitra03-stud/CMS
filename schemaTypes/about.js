// // export default {
// //   name: "about",
// //   title: "About Section",
// //   type: "document",

// //   fields: [
// //     {
// //       name: "heading",
// //       title: "Heading (Rich Text)",
// //       type: "array",
// //       of: [richTextBlock()],
// //     },

// //     {
// //       name: "description",
// //       title: "Description (Rich Text)",
// //       type: "array",
// //       of: [richTextBlock()],
// //     },

// //     {
// //       name: "profileImage",
// //       title: "Profile Image",
// //       type: "image",
// //       options: { hotspot: true },
// //     },

// //     {
// //       name: "imageShape",
// //       title: "Image Shape",
// //       type: "string",
// //       options: {
// //         list: [
// //           { title: "Circle", value: "circle" },
// //           { title: "Square", value: "square" },
// //           { title: "Rectangle", value: "rectangle" },
// //           { title: "Diamond", value: "diamond" },
// //           { title: "Star", value: "star" },
// //           { title: "Hexagon", value: "hexagon" },
// //         ],
// //         layout: "radio",
// //       },
// //       initialValue: "circle",
// //     },

// //     {
// //       name: "showSection",
// //       title: "Show Section",
// //       type: "boolean",
// //       initialValue: true,
// //     },
// //   ],
// // };


// // /*  UPDATED RICH TEXT BLOCK (ONLY ADD SIZE + FAMILY) */
// // function richTextBlock() {
// //   return {
// //     type: "block",
// //     styles: [
// //       { title: "Normal", value: "normal" },
// //       { title: "Heading 1", value: "h1" },
// //       { title: "Heading 2", value: "h2" },
// //       { title: "Heading 3", value: "h3" },
// //     ],
// //     marks: {
// //       decorators: [
// //         { title: "Bold", value: "strong" },
// //         { title: "Italic", value: "em" },
// //         { title: "Underline", value: "underline" },
// //         { title: "Strike", value: "strike-through" },
// //       ],
// //       annotations: [
// //         /* TEXT COLOR */
// //         {
// //           name: "textColor",
// //           title: "Text Color",
// //           type: "object",
// //           fields: [
// //             {
// //               name: "color",
// //               type: "string",
// //               options: {
// //                 list: [
// //                   { title: "Accent", value: "accent" },
// //                   { title: "Blue", value: "blue" },
// //                   { title: "Pink", value: "pink" },
// //                   { title: "White", value: "white" },
// //                   { title: "Black", value: "black" },
// //                 ],
// //               },
// //             },
// //           ],
// //         },

// //         /* FONT SIZE */
// //         {
// //           name: "fontSize",
// //           title: "Font Size",
// //           type: "object",
// //           fields: [
// //             {
// //               name: "size",
// //               type: "string",
// //               options: {
// //                 list: [
// //                   { title: "Small", value: "14px" },
// //                   { title: "Medium", value: "18px" },
// //                   { title: "Large", value: "22px" },
// //                   { title: "XL", value: "28px" },
// //                 ],
// //               },
// //             },
// //           ],
// //         },

// //         /* FONT FAMILY */
// //         {
// //           name: "fontFamily",
// //           title: "Font Family",
// //           type: "object",
// //           fields: [
// //             {
// //               name: "family",
// //               type: "string",
// //               options: {
// //                 list: [
// //                   { title: "Poppins", value: "'Poppins', sans-serif" },
// //                   { title: "Inter", value: "'Inter', sans-serif" },
// //                   { title: "Montserrat", value: "'Montserrat', sans-serif" },
// //                 ],
// //               },
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //   };
// // }


// // export default {
// //   name: "about",
// //   title: "About Section",
// //   type: "document",

// //   fields: [
// //     {
// //       name: "heading",
// //       title: "Heading (Rich Text)",
// //       type: "array",
// //       of: [richTextBlock()],
// //       initialValue: [
// //         {
// //           _type: "block",
// //           style: "h2",
// //           children: [
// //             {
// //               _type: "span",
// //               text: "About Me",
// //             },
// //           ],
// //         },
// //       ],
// //     },

// //     {
// //       name: "description",
// //       title: "Description (Rich Text)",
// //       type: "array",
// //       of: [richTextBlock()],
// //       initialValue: [
// //         {
// //           _type: "block",
// //           style: "normal",
// //           children: [
// //             {
// //               _type: "span",
// //               text: "Write something about yourself here. You can describe your skills, passion, experience, and goals.",
// //             },
// //           ],
// //         },
// //       ],
// //     },

// //     {
// //       name: "profileImage",
// //       title: "Profile Image",
// //       type: "image",
// //       options: { hotspot: true },
// //     },

// //     {
// //       name: "imageShape",
// //       title: "Image Shape",
// //       type: "string",
// //       options: {
// //         list: [
// //           { title: "Circle", value: "circle" },
// //           { title: "Square", value: "square" },
// //           { title: "Rectangle", value: "rectangle" },
// //           { title: "Diamond", value: "diamond" },
// //           { title: "Star", value: "star" },
// //           { title: "Hexagon", value: "hexagon" },
// //         ],
// //         layout: "radio",
// //       },
// //       initialValue: "circle",
// //     },

// //     {
// //       name: "showSection",
// //       title: "Show Section",
// //       type: "boolean",
// //       initialValue: true,
// //     },
// //   ],
// // };


// // /* 🔥 RICH TEXT BLOCK */
// // function richTextBlock() {
// //   return {
// //     type: "block",
// //     styles: [
// //       { title: "Normal", value: "normal" },
// //       { title: "Heading 1", value: "h1" },
// //       { title: "Heading 2", value: "h2" },
// //       { title: "Heading 3", value: "h3" },
// //     ],
// //     marks: {
// //       decorators: [
// //         { title: "Bold", value: "strong" },
// //         { title: "Italic", value: "em" },
// //         { title: "Underline", value: "underline" },
// //         { title: "Strike", value: "strike-through" },
// //       ],
// //       annotations: [
// //         {
// //           name: "textColor",
// //           title: "Text Color",
// //           type: "object",
// //           fields: [
// //             {
// //               name: "color",
// //               type: "string",
// //               options: {
// //                 list: [
// //                   { title: "Accent", value: "accent" },
// //                   { title: "Blue", value: "blue" },
// //                   { title: "Pink", value: "pink" },
// //                   { title: "White", value: "white" },
// //                   { title: "Black", value: "black" },
// //                 ],
// //               },
// //             },
// //           ],
// //         },
// //         {
// //           name: "fontSize",
// //           title: "Font Size",
// //           type: "object",
// //           fields: [
// //             {
// //               name: "size",
// //               type: "string",
// //               options: {
// //                 list: [
// //                   { title: "Small", value: "14px" },
// //                   { title: "Medium", value: "18px" },
// //                   { title: "Large", value: "22px" },
// //                   { title: "XL", value: "28px" },
// //                 ],
// //               },
// //             },
// //           ],
// //         },
// //         {
// //           name: "fontFamily",
// //           title: "Font Family",
// //           type: "object",
// //           fields: [
// //             {
// //               name: "family",
// //               type: "string",
// //               options: {
// //                 list: [
// //                   { title: "Poppins", value: "'Poppins', sans-serif" },
// //                   { title: "Inter", value: "'Inter', sans-serif" },
// //                   { title: "Montserrat", value: "'Montserrat', sans-serif" },
// //                 ],
// //               },
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //   };
// // }


// export default {
//   name: "about",
//   title: "About Section",
//   type: "document",

//   fields: [
//     /* ===== HEADING ===== */
//     {
//       name: "heading",
//       title: "Heading (Rich Text)",
//       type: "array",
//       of: [richTextBlock()],
//       initialValue: [
//         {
//           _type: "block",
//           style: "h2",
//           children: [
//             {
//               _type: "span",
//               text: "About Me",
//             },
//           ],
//         },
//       ],
//     },

//     /* ===== DESCRIPTION ===== */
//     {
//       name: "description",
//       title: "Description (Rich Text)",
//       type: "array",
//       of: [richTextBlock()],
//       initialValue: [
//         {
//           _type: "block",
//           style: "normal",
//           children: [
//             {
//               _type: "span",
//               text: "Write something about yourself here. You can describe your skills, passion, experience, and goals.",
//             },
//           ],
//         },
//       ],
//     },

//     /* ===== PROFILE IMAGE ===== */
//     {
//       name: "profileImage",
//       title: "Profile Image",
//       type: "image",
//       options: { hotspot: true },
//     },

//     /* ===== IMAGE SHAPE ===== */
//     {
//       name: "imageShape",
//       title: "Image Shape",
//       type: "string",
//       options: {
//         list: [
//           { title: "Circle", value: "circle" },
//           { title: "Square", value: "square" },
//           { title: "Rectangle", value: "rectangle" },
//           { title: "Diamond", value: "diamond" },
//           { title: "Star", value: "star" },
//           { title: "Hexagon", value: "hexagon" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "circle",
//     },

//     /* ===== SHOW SECTION TOGGLE ===== */
//     {
//       name: "showSection",
//       title: "Show Section",
//       type: "boolean",
//       initialValue: true,
//     },
//   ],

//   /* ===== PREVIEW CONFIG ===== */
//   preview: {
//     select: {
//       title: "heading",
//       media: "profileImage",
//     },
//     prepare(selection) {
//       const { title, media } = selection;

//       return {
//         title:
//           title && title[0]?.children[0]?.text
//             ? title[0].children[0].text
//             : "About Section",
//         media,
//       };
//     },
//   },
// };


// /* ===================================================== */
// /* 🔥 REUSABLE RICH TEXT BLOCK (With Color + Size + Font) */
// /* ===================================================== */

// function richTextBlock() {
//   return {
//     type: "block",

//     styles: [
//       { title: "Normal", value: "normal" },
//       { title: "Heading 1", value: "h1" },
//       { title: "Heading 2", value: "h2" },
//       { title: "Heading 3", value: "h3" },
//     ],

//     marks: {
//       decorators: [
//         { title: "Bold", value: "strong" },
//         { title: "Italic", value: "em" },
//         { title: "Underline", value: "underline" },
//         { title: "Strike", value: "strike-through" },
//       ],

//       annotations: [
//         /* ===== TEXT COLOR ===== */
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

//         /* ===== FONT SIZE ===== */
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
//                   { title: "Medium (18px)", value: "18px" },
//                   { title: "Large (22px)", value: "22px" },
//                   { title: "XL (28px)", value: "28px" },
//                 ],
//               },
//             },
//           ],
//         },

//         /* ===== FONT FAMILY ===== */
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
  name: "about",
  title: "About Section",
  type: "document",

  fields: [
    /* ================= HEADING ================= */
    {
      name: "heading",
      title: "Heading (Rich Text)",
      type: "array",
      of: [richTextBlock()],
      initialValue: [
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "About Me" }],
        },
      ],
    },

    /* ================= DESCRIPTION ================= */
    {
      name: "description",
      title: "Description (Rich Text)",
      type: "array",
      of: [richTextBlock()],
      initialValue: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Write something about yourself here. You can describe your skills, passion, experience and goals.",
            },
          ],
        },
      ],
    },

    /* ================= IMAGE ================= */
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    },

    /* ================= IMAGE SHAPE ================= */
    {
      name: "imageShape",
      title: "Image Shape",
      type: "string",
      options: {
        list: [
          { title: "Circle", value: "circle" },
          { title: "Square", value: "square" },
          { title: "Rectangle", value: "rectangle" },
          { title: "Diamond", value: "diamond" },
          { title: "Star", value: "star" },
          { title: "Hexagon", value: "hexagon" },
        ],
        layout: "radio",
      },
      initialValue: "circle",
    },

    /* ================= IMAGE POSITION ================= */
    {
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Top", value: "top" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    },

    /* ================= TEXT ALIGNMENT ================= */
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

    /* ================= BACKGROUND COLOR ================= */
    {
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
      description: "Enter HEX color (Example: #0f172a)",
    },

    /* ================= SHOW SECTION ================= */
    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],

  preview: {
    select: {
      title: "heading",
      media: "profileImage",
    },
    prepare({ title, media }) {
      return {
        title:
          title && title[0]?.children[0]?.text
            ? title[0].children[0].text
            : "About Section",
        media,
      };
    },
  },
};


/* ===================================================== */
/* 🔥 RICH TEXT BLOCK */
/* ===================================================== */

function richTextBlock() {
  return {
    type: "block",

    styles: [
      { title: "Normal", value: "normal" },
      { title: "Heading 1", value: "h1" },
      { title: "Heading 2", value: "h2" },
      { title: "Heading 3", value: "h3" },
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