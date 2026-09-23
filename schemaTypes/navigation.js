// export default {
//   name: "navigation",
//   title: "Navigation",
//   type: "document",

//   fields: [

//     /* =========================
//        SITE TITLE (RICH TEXT)
//     ========================= */
//     {
//       name: "siteTitle",
//       title: "Site Title (Rich Text)",
//       type: "array",
//       of: [richTextBlock()],
//     },

//     {
//       name: "layout",
//       title: "Navbar Layout",
//       type: "string",
//       options: {
//         list: [
//           { title: "Top (Horizontal)", value: "top" },
//           { title: "Side (Left Vertical)", value: "side" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "top",
//     },

//     /* ========================= TYPOGRAPHY ========================= */

//     {
//       name: "fontSize",
//       title: "Font Size",
//       type: "string",
//       options: {
//         list: [
//           { title: "Small", value: "14px" },
//           { title: "Medium", value: "16px" },
//           { title: "Large", value: "18px" },
//         ],
//       },
//     },

//     {
//       name: "fontFamily",
//       title: "Font Family",
//       type: "string",
//       options: {
//         list: [
//           { title: "Poppins", value: "'Poppins', sans-serif" },
//           { title: "Inter", value: "'Inter', sans-serif" },
//           { title: "Montserrat", value: "'Montserrat', sans-serif" },
//         ],
//       },
//     },

//     {
//       name: "textColor",
//       title: "Text Color",
//       type: "string",
//     },

//     {
//       name: "backgroundColor",
//       title: "Background Color",
//       type: "string",
//     },

//     /* ========================= PROFILE ========================= */

//     {
//       name: "profileImage",
//       title: "Profile Avatar",
//       type: "image",
//       options: { hotspot: true },
//     },

//     {
//       name: "profileRole",
//       title: "Profile Role (Rich Text)",
//       type: "array",
//       of: [richTextBlock()],
//     },

//     {
//       name: "showAvatar",
//       title: "Show Profile Avatar",
//       type: "boolean",
//       initialValue: true,
//     },

//     /* ========================= MENU ITEMS ========================= */

//     {
//       name: "menuItems",
//       title: "Menu Items",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [

//             {
//               name: "label",
//               title: "Label (Rich Text)",
//               type: "array",
//               of: [richTextBlock()],
//             },

//             {
//               name: "link",
//               title: "Link",
//               type: "string",
//               description: "#about OR about-us",
//             },

//             /* ===== LEVEL 2 ===== */
//             {
//               name: "subMenu",
//               title: "Sub Menu",
//               type: "array",
//               of: [
//                 {
//                   type: "object",
//                   fields: [

//                     {
//                       name: "label",
//                       type: "string",
//                     },

//                     {
//                       name: "link",
//                       type: "string",
//                     },

//                     /* ===== LEVEL 3 ===== */
//                     {
//                       name: "subMenu",
//                       title: "Sub Menu Level 2",
//                       type: "array",
//                       of: [
//                         {
//                           type: "object",
//                           fields: [
//                             { name: "label", type: "string" },
//                             { name: "link", type: "string" },
//                           ],
//                         },
//                       ],
//                     },

//                   ],
//                 },
//               ],
//             },

//             {
//               name: "order",
//               title: "Order",
//               type: "number",
//             },

//             {
//               name: "show",
//               title: "Show Item",
//               type: "boolean",
//               initialValue: true,
//             },

//           ],
//         },
//       ],
//     },

//     /* ========================= BUTTONS ========================= */

//     {
//       name: "ctaButtons",
//       title: "Navbar Buttons",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [

//             {
//               name: "text",
//               type: "string",
//               initialValue: "Connect With Me",
//             },

//             {
//               name: "link",
//               type: "string",
//             },

//             {
//               name: "openInNewTab",
//               type: "boolean",
//               initialValue: false,
//             },

//             {
//               name: "showButton",
//               type: "boolean",
//               initialValue: true,
//             },

//             {
//               name: "buttonColor",
//               type: "string",
//             },

//             {
//               name: "textColor",
//               type: "string",
//             },

//             {
//               name: "align",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Left", value: "left" },
//                   { title: "Center", value: "center" },
//                   { title: "Right", value: "right" },
//                 ],
//               },
//               initialValue: "right",
//             },

//           ],
//         },
//       ],
//     },

//   ],
// };


// /* ========================= RICH TEXT ========================= */

// function richTextBlock() {
//   return {
//     type: "block",

//     styles: [
//       { title: "Normal", value: "normal" },
//       { title: "Heading 1", value: "h1" },
//       { title: "Heading 2", value: "h2" },
//     ],

//     marks: {
//       decorators: [
//         { title: "Bold", value: "strong" },
//         { title: "Italic", value: "em" },
//         { title: "Underline", value: "underline" },
//       ],
//     },
//   };
// }


export default {
  name: "navigation",
  title: "Navigation",
  type: "document",

  fields: [

    /* =========================
       SITE TITLE
    ========================= */

    {
      name: "siteTitle",
      title: "Site Title",
      type: "array",
      of: [richTextBlock()],
    },

    {
      name: "layout",
      title: "Navbar Layout",
      type: "string",
      options: {
        list: [
          { title: "Top (Horizontal)", value: "top" },
          { title: "Side (Left Vertical)", value: "side" },
        ],
        layout: "radio",
      },
      initialValue: "top",
    },

    /* =========================
       TYPOGRAPHY
    ========================= */

    {
      name: "fontSize",
      title: "Default Font Size",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "14px" },
          { title: "Medium", value: "16px" },
          { title: "Large", value: "18px" },
        ],
      },
    },

    {
      name: "fontFamily",
      title: "Default Font Family",
      type: "string",
      options: {
        list: [
          { title: "Poppins", value: "'Poppins', sans-serif" },
          { title: "Inter", value: "'Inter', sans-serif" },
          { title: "Montserrat", value: "'Montserrat', sans-serif" },
        ],
      },
    },

    {
      name: "textColor",
      title: "Default Text Color",
      type: "string",
    },

    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },

    /* =========================
       PROFILE
    ========================= */

    {
      name: "profileImage",
      title: "Profile Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "profileRole",
      title: "Profile Role",
      type: "array",
      of: [richTextBlock()],
    },

    {
      name: "showAvatar",
      title: "Show Profile Avatar",
      type: "boolean",
      initialValue: true,
    },

    /* =========================
       MENU ITEMS
    ========================= */
    {
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            {
              name: "label",
              title: "Label",
              type: "array",
              of: [richTextBlock()],
            },

            {
              name: "link",
              title: "Link",
              type: "string",
              description: "#about OR about-us",
            },

            /* ================= LEVEL 2 ================= */

            {
              name: "subMenu",
              title: "Sub Menu",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [

                    {
                      name: "label",
                      title: "Sub Menu Label",
                      type: "array",
                      of: [richTextBlock()],
                    },

                    {
                      name: "link",
                      title: "Link",
                      type: "string",
                    },

                    /* ================= LEVEL 3 ================= */

                    {
                      name: "subMenu",
                      title: "Sub Menu Level 2",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: [

                            {
                              name: "label",
                              title: "Level 2 Label",
                              type: "array",
                              of: [richTextBlock()],
                            },

                            {
                              name: "link",
                              title: "Link",
                              type: "string",
                            },

                          ],
                        },
                      ],
                    },

                  ],
                },
              ],
            },

            {
              name: "order",
              title: "Order",
              type: "number",
            },

            {
              name: "show",
              title: "Show Item",
              type: "boolean",
              initialValue: true,
            },

          ],
        },
      ],
    },
    {
  name: "ctaButtons",
  title: "Navbar Buttons",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "array",
          of: [richTextBlock()],
        },

        {
          name: "link",
          title: "Button Link",
          type: "string",
        },

        {
          name: "openInNewTab",
          title: "Open in New Tab?",
          type: "boolean",
          initialValue: false,
        },

        {
          name: "showButton",
          title: "Show Button",
          type: "boolean",
          initialValue: true,
        },

        {
          name: "buttonColor",
          title: "Button Background",
          type: "string",
        },

        {
          name: "textColor",
          title: "Button Text Color",
          type: "string",
        },

        {
          name: "borderColor",
          title: "Border Color",
          type: "string",
        },

        {
          name: "hoverBackgroundColor",
          title: "Hover Background",
          type: "string",
        },

        {
          name: "hoverTextColor",
          title: "Hover Text Color",
          type: "string",
        },

        {
          name: "variant",
          title: "Button Style",
          type: "string",
          options: {
            list: [
              { title: "Filled", value: "filled" },
              { title: "Outline", value: "outline" },
            ],
            layout: "radio",
          },
          initialValue: "filled",
        },

        {
          name: "borderRadius",
          title: "Border Radius",
          type: "string",
          options: {
            list: [
              { title: "Square", value: "0px" },
              { title: "Rounded", value: "8px" },
              { title: "Pill", value: "999px" },
            ],
          },
          initialValue: "999px",
        },

        {
          name: "paddingX",
          title: "Horizontal Padding",
          type: "string",
          initialValue: "24px",
        },

        {
          name: "paddingY",
          title: "Vertical Padding",
          type: "string",
          initialValue: "12px",
        },

        {
          name: "align",
          title: "Button Alignment",
          type: "string",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Center", value: "center" },
              { title: "Right", value: "right" },
            ],
          },
          initialValue: "right",
        },
      ],
    },
  ],
}
  ],
  
};
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
                  { title: "12px", value: "12px" },
                  { title: "14px", value: "14px" },
                  { title: "16px", value: "16px" },
                  { title: "18px", value: "18px" },
                  { title: "20px", value: "20px" },
                  { title: "24px", value: "24px" },
                  { title: "28px", value: "28px" },
                  { title: "32px", value: "32px" },
                  { title: "36px", value: "36px" },
                  { title: "40px", value: "40px" },
                  { title: "48px", value: "48px" },
                  { title: "56px", value: "56px" },
                  { title: "64px", value: "64px" },
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
                  { title: "Roboto", value: "'Roboto', sans-serif" },
                  { title: "Playfair Display", value: "'Playfair Display', serif" },
                  { title: "Cormorant Garamond", value: "'Cormorant Garamond', serif" },
                  { title: "Lora", value: "'Lora', serif" },
                  { title: "Oswald", value: "'Oswald', sans-serif" },
                  { title: "Raleway", value: "'Raleway', sans-serif" },
                ],
              },
            },
          ],
        },
      ],
    },
  };
}