// export default {
//   name: "customSection",
//   title: "Custom Section",
//   type: "document",

//   fields: [
//     /* ================= SECTION SETTINGS ================= */

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
//       initialValue: "left",
//     },

//     {
//       name: "contentWidth",
//       title: "Content Width",
//       type: "string",
//       options: {
//         list: [
//           { title: "Full Width", value: "full" },
//           { title: "Medium", value: "medium" },
//           { title: "Small Centered", value: "small" },
//         ],
//         layout: "radio",
//       },
//       initialValue: "medium",
//     },

//     {
//       name: "backgroundColor",
//       title: "Background Color",
//       type: "string",
//       description: "Example: #0f172a or white",
//     },

//     /* ================= CONTENT BUILDER ================= */

//     {
//       name: "content",
//       title: "Content (Rich Builder)",
//       type: "array",
//       of: [
//         richTextBlock(),

//         /* ================= BUTTON BLOCK ================= */

//         {
//           type: "object",
//           name: "button",
//           title: "Button",
//           fields: [
//             {
//               name: "text",
//               title: "Button Text",
//               type: "string",
//             },
//             {
//               name: "link",
//               title: "Button Link",
//               type: "string",
//               description: "Example: #contact or https://example.com",
//             },
//             {
//               name: "style",
//               title: "Button Style",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Primary", value: "primary" },
//                   { title: "Outline", value: "outline" },
//                 ],
//               },
//               initialValue: "primary",
//             },
//             {
//               name: "align",
//               title: "Button Alignment",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Left", value: "left" },
//                   { title: "Center", value: "center" },
//                   { title: "Right", value: "right" },
//                 ],
//               },
//               initialValue: "left",
//             },
//           ],
//         },

//         /* ================= SINGLE IMAGE ================= */

//         {
//           type: "image",
//           options: { hotspot: true },
//           fields: [
//             {
//               name: "imageAlign",
//               title: "Image Alignment",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Left", value: "left" },
//                   { title: "Center", value: "center" },
//                   { title: "Right", value: "right" },
//                 ],
//                 layout: "radio",
//               },
//               initialValue: "center",
//             },
//           ],
//         },

//         /* ================= IMAGE GALLERY ================= */

//         {
//           type: "object",
//           name: "imageGallery",
//           title: "Image Gallery",
//           fields: [
//             {
//               name: "display",
//               title: "Display Type",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Grid", value: "grid" },
//                   { title: "Carousel", value: "carousel" },
//                 ],
//                 layout: "radio",
//               },
//               initialValue: "grid",
//             },

//             {
//               name: "columns",
//               title: "Grid Columns",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "2 Columns", value: "two" },
//                   { title: "3 Columns", value: "three" },
//                   { title: "4 Columns", value: "four" },
//                 ],
//               },
//               hidden: ({ parent }) => parent?.display !== "grid",
//               initialValue: "three",
//             },

//             {
//               name: "shape",
//               title: "Image Shape",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Rectangle", value: "rectangle" },
//                   { title: "Square", value: "square" },
//                   { title: "Circle", value: "circle" },
//                   { title: "Diamond", value: "diamond" },
//                   { title: "Hexagon", value: "hexagon" },
//                   { title: "Star", value: "star" },
//                 ],
//                 layout: "radio",
//               },
//               initialValue: "rectangle",
//             },

//             {
//               name: "galleryAlign",
//               title: "Gallery Alignment",
//               type: "string",
//               options: {
//                 list: [
//                   { title: "Left", value: "left" },
//                   { title: "Center", value: "center" },
//                   { title: "Right", value: "right" },
//                 ],
//                 layout: "radio",
//               },
//               initialValue: "center",
//             },

//             {
//               name: "images",
//               title: "Images",
//               type: "array",
//               of: [{ type: "image", options: { hotspot: true } }],
//             },
//           ],
//         },
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

// /* ================= RICH TEXT BLOCK ================= */

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
//         {
//           name: "pageSlug",
//           title: "Page Slug",
//           type: "slug",
//           options: {
//             source: "title",
//           }
//         }
//       ],
//     },
//   };
// }


const richTextBlock = () => ({
  type: "object",
  name: "richTextBlock",
  title: "Rich Text",

  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    },

    {
      name: "fontFamily",
      type: "string",
      options: {
        list: [
          { title: "Poppins", value: "Poppins" },
          { title: "Inter", value: "Inter" },
          { title: "Montserrat", value: "Montserrat" }
        ]
      }
    },

    {
      name: "fontSize",
      type: "string"
    },

    {
      name: "fontWeight",
      type: "string"
    },

    {
      name: "textColor",
      type: "string"
    },

    {
      name: "textAlign",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" }
        ]
      }
    },

    {
      name: "lineHeight",
      type: "string"
    }
  ]
});
export default {
  name: "customSection",
  title: "Custom Section",
  type: "document",

  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "layout",
      title: "Layout",
    },
    {
      name: "background",
      title: "Background",
    },
    {
      name: "spacing",
      title: "Spacing",
    },
    {
      name: "animation",
      title: "Animation",
    },
    {
      name: "visibility",
      title: "Visibility",
    },
    {
      name: "content",
      title: "Content Builder",
    },
  ],

  fields: [

    /* ==========================================================
       GENERAL
    ========================================================== */

    {
      name: "sectionName",
      title: "Section Name",
      type: "string",
      group: "general",
      validation: Rule => Rule.required(),
    },
    {
      name: "sectionHeading",
      title: "Section Heading",
      type: "array",
      of: [richTextBlock()],
      group: "general",
    },
    {
      name: "sectionSlug",
      title: "Section Slug",
      type: "slug",
      options: {
        source: "sectionName",
        maxLength: 96,
      },
      group: "general",
    },

    {
      name: "pageSlug",
      title: "Page Slug",
      type: "string",
      description: "Example: home, about, services, contact",
      initialValue: "home",
      group: "general",
    },

    {
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      description: "Lower numbers appear first.",
      group: "general",
    },

    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
      group: "general",
    },

    {
      name: "anchorId",
      title: "Anchor ID",
      type: "string",
      description: "Example: about-us",
      group: "general",
    },

    {
      name: "customClass",
      title: "Custom CSS Class",
      type: "string",
      group: "general",
    },

    /* ==========================================================
       LAYOUT
    ========================================================== */

    {
      name: "layout",
      title: "Layout",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "Single Column", value: "single" },
          { title: "Two Columns", value: "two" },
          { title: "Three Columns", value: "three" },
          { title: "Four Columns", value: "four" },
          { title: "Cards", value: "cards" },
          { title: "Grid", value: "grid" },
          { title: "Carousel", value: "carousel" },
          { title: "Timeline", value: "timeline" },
          { title: "Accordion", value: "accordion" },
          { title: "Tabs", value: "tabs" },
          { title: "Masonry", value: "masonry" },
        ],
      },
      initialValue: "single",
    },

    {
      name: "containerWidth",
      title: "Container Width",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "Small", value: "900px" },
          { title: "Medium", value: "1200px" },
          { title: "Large", value: "1400px" },
          { title: "Full Width", value: "100%" },
        ],
      },
      initialValue: "1200px",
    },

    {
      name: "textAlign",
      title: "Text Alignment",
      type: "string",
      group: "layout",
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
    /* ==========================================================
   BACKGROUND
========================================================== */

    {
      name: "backgroundType",
      title: "Background Type",
      type: "string",
      group: "background",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Color", value: "color" },
          { title: "Gradient", value: "gradient" },
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "none",
    },

    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      group: "background",
      hidden: ({ document }) => document?.backgroundType !== "color",
    },

    {
      name: "backgroundGradient",
      title: "Gradient CSS",
      type: "string",
      group: "background",
      description:
        "Example: linear-gradient(135deg,#111,#444)",
      hidden: ({ document }) => document?.backgroundType !== "gradient",
    },

    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      group: "background",
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.backgroundType !== "image",
    },

    {
      name: "backgroundVideo",
      title: "Background Video URL",
      type: "url",
      group: "background",
      hidden: ({ document }) => document?.backgroundType !== "video",
    },

    {
      name: "backgroundPosition",
      title: "Background Position",
      type: "string",
      group: "background",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Top", value: "top" },
          { title: "Bottom", value: "bottom" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
      initialValue: "center",
    },

    {
      name: "backgroundSize",
      title: "Background Size",
      type: "string",
      group: "background",
      options: {
        list: [
          { title: "Cover", value: "cover" },
          { title: "Contain", value: "contain" },
          { title: "Auto", value: "auto" },
        ],
      },
      initialValue: "cover",
    },

    {
      name: "backgroundRepeat",
      title: "Background Repeat",
      type: "string",
      group: "background",
      options: {
        list: [
          { title: "No Repeat", value: "no-repeat" },
          { title: "Repeat", value: "repeat" },
          { title: "Repeat X", value: "repeat-x" },
          { title: "Repeat Y", value: "repeat-y" },
        ],
      },
      initialValue: "no-repeat",
    },

    {
      name: "overlay",
      title: "Enable Overlay",
      type: "boolean",
      initialValue: false,
      group: "background",
    },

    {
      name: "overlayColor",
      title: "Overlay Color",
      type: "string",
      group: "background",
      hidden: ({ document }) => !document?.overlay,
    },

    {
      name: "overlayOpacity",
      title: "Overlay Opacity",
      type: "number",
      group: "background",
      initialValue: 0.4,
      validation: Rule => Rule.min(0).max(1),
      hidden: ({ document }) => !document?.overlay,
    },

    /* ==========================================================
       SPACING
    ========================================================== */

    {
      name: "paddingTop",
      title: "Padding Top",
      type: "string",
      group: "spacing",
      initialValue: "80px",
    },

    {
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "string",
      group: "spacing",
      initialValue: "80px",
    },

    {
      name: "paddingLeft",
      title: "Padding Left",
      type: "string",
      group: "spacing",
      initialValue: "8%",
    },

    {
      name: "paddingRight",
      title: "Padding Right",
      type: "string",
      group: "spacing",
      initialValue: "8%",
    },

    {
      name: "marginTop",
      title: "Margin Top",
      type: "string",
      group: "spacing",
      initialValue: "0px",
    },

    {
      name: "marginBottom",
      title: "Margin Bottom",
      type: "string",
      group: "spacing",
      initialValue: "0px",
    },

    {
      name: "sectionGap",
      title: "Gap Between Elements",
      type: "string",
      group: "spacing",
      initialValue: "24px",
    },

    /* ==========================================================
       ANIMATION
    ========================================================== */

    {
      name: "animation",
      title: "Animation",
      type: "string",
      group: "animation",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Fade Up", value: "fade-up" },
          { title: "Fade Down", value: "fade-down" },
          { title: "Fade Left", value: "fade-left" },
          { title: "Fade Right", value: "fade-right" },
          { title: "Zoom In", value: "zoom-in" },
          { title: "Zoom Out", value: "zoom-out" },
          { title: "Slide Up", value: "slide-up" },
          { title: "Slide Down", value: "slide-down" },
        ],
      },
      initialValue: "none",
    },

    {
      name: "animationDelay",
      title: "Animation Delay (ms)",
      type: "number",
      group: "animation",
      initialValue: 0,
    },

    {
      name: "animationDuration",
      title: "Animation Duration (ms)",
      type: "number",
      group: "animation",
      initialValue: 600,
    },

    /* ==========================================================
       VISIBILITY
    ========================================================== */

    {
      name: "hideOnDesktop",
      title: "Hide on Desktop",
      type: "boolean",
      group: "visibility",
      initialValue: false,
    },

    {
      name: "hideOnTablet",
      title: "Hide on Tablet",
      type: "boolean",
      group: "visibility",
      initialValue: false,
    },

    {
      name: "hideOnMobile",
      title: "Hide on Mobile",
      type: "boolean",
      group: "visibility",
      initialValue: false,
    },
    /* ==========================================================
   CONTENT BUILDER
========================================================== */

    {
      name: "content",
      title: "Content Builder",
      type: "array",
      group: "content",
      of: [

        /* =====================================================
           RICH TEXT
        ===================================================== */

        richTextBlock(),

        /* =====================================================
           IMAGE BLOCK
        ===================================================== */

        {
          type: "object",
          name: "imageBlock",
          title: "Image",

          fields: [

            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },

            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },

            {
              name: "caption",
              title: "Caption",
              type: "string",
            },

            {
              name: "width",
              title: "Width",
              type: "string",
              initialValue: "100%",
            },

            {
              name: "height",
              title: "Height",
              type: "string",
              initialValue: "auto",
            },

            {
              name: "objectFit",
              title: "Object Fit",
              type: "string",
              options: {
                list: [
                  {
                    title: "Cover",
                    value: "cover",
                  },
                  {
                    title: "Contain",
                    value: "contain",
                  },
                  {
                    title: "Fill",
                    value: "fill",
                  },
                ],
              },
              initialValue: "cover",
            },

            {
              name: "shape",
              title: "Shape",
              type: "string",
              options: {
                list: [
                  {
                    title: "Rectangle",
                    value: "rectangle",
                  },
                  {
                    title: "Rounded",
                    value: "rounded",
                  },
                  {
                    title: "Circle",
                    value: "circle",
                  },
                  {
                    title: "Square",
                    value: "square",
                  },
                ],
              },
              initialValue: "rectangle",
            },

            {
              name: "alignment",
              title: "Alignment",
              type: "string",
              options: {
                list: [
                  {
                    title: "Left",
                    value: "left",
                  },
                  {
                    title: "Center",
                    value: "center",
                  },
                  {
                    title: "Right",
                    value: "right",
                  },
                ],
              },
              initialValue: "center",
            },

            {
              name: "shadow",
              title: "Shadow",
              type: "boolean",
              initialValue: false,
            },

            {
              name: "borderRadius",
              title: "Border Radius",
              type: "string",
              initialValue: "12px",
            },

            {
              name: "link",
              title: "Image Link",
              type: "url",
            },

            {
              name: "openInNewTab",
              title: "Open In New Tab",
              type: "boolean",
              initialValue: false,
            },

          ],
        },
        /* =====================================================
   BUTTON BLOCK
===================================================== */

        {
          type: "object",
          name: "buttonBlock",
          title: "Button",

          fields: [

            {
              name: "text",
              title: "Button Text",
              type: "string",
            },

            {
              name: "link",
              title: "Button Link",
              type: "url",
            },

            {
              name: "style",
              title: "Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                  { title: "Outline", value: "outline" },
                  { title: "Ghost", value: "ghost" },
                  { title: "Gradient", value: "gradient" },
                ],
              },
              initialValue: "primary",
            },

            {
              name: "size",
              title: "Size",
              type: "string",
              options: {
                list: [
                  { title: "Small", value: "sm" },
                  { title: "Medium", value: "md" },
                  { title: "Large", value: "lg" },
                ],
              },
              initialValue: "md",
            },

            {
              name: "textColor",
              title: "Text Color",
              type: "string",
            },

            {
              name: "backgroundColor",
              title: "Background Color",
              type: "string",
            },

            {
              name: "borderRadius",
              title: "Border Radius",
              type: "string",
              initialValue: "8px",
            },

            {
              name: "alignment",
              title: "Alignment",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" },
                ],
              },
              initialValue: "left",
            },

            {
              name: "openInNewTab",
              title: "Open In New Tab",
              type: "boolean",
              initialValue: false,
            },

          ],
        },

        /* =====================================================
           DIVIDER BLOCK
        ===================================================== */

        {
          type: "object",
          name: "dividerBlock",
          title: "Divider",

          fields: [

            {
              name: "style",
              title: "Style",
              type: "string",
              options: {
                list: [
                  { title: "Solid", value: "solid" },
                  { title: "Dashed", value: "dashed" },
                  { title: "Dotted", value: "dotted" },
                ],
              },
              initialValue: "solid",
            },

            {
              name: "color",
              title: "Color",
              type: "string",
            },

            {
              name: "thickness",
              title: "Thickness",
              type: "string",
              initialValue: "1px",
            },

            {
              name: "width",
              title: "Width",
              type: "string",
              initialValue: "100%",
            },

            {
              name: "marginTop",
              title: "Margin Top",
              type: "string",
              initialValue: "20px",
            },

            {
              name: "marginBottom",
              title: "Margin Bottom",
              type: "string",
              initialValue: "20px",
            },

          ],
        },

        /* =====================================================
           SPACER BLOCK
        ===================================================== */

        {
          type: "object",
          name: "spacerBlock",
          title: "Spacer",

          fields: [
            {
              name: "height",
              title: "Height",
              type: "string",
              initialValue: "40px",
            }
          ]
        },

        /* =====================================================
           ICON BLOCK
        ===================================================== */

        {
          type: "object",
          name: "iconBlock",
          title: "Icon",

          fields: [

            {
              name: "icon",
              title: "Icon Name",
              type: "string",
            },

            {
              name: "size",
              title: "Size",
              type: "number",
              initialValue: 40,
            },

            {
              name: "color",
              title: "Color",
              type: "string",
            },

            {
              name: "alignment",
              title: "Alignment",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" },
                ],
              },
              initialValue: "center",
            },

          ],
        },
        /* =====================================================
   VIDEO BLOCK
===================================================== */

        {
          type: "object",
          name: "videoBlock",
          title: "Video",

          fields: [

            {
              name: "videoType",
              title: "Video Type",
              type: "string",
              options: {
                list: [
                  { title: "YouTube", value: "youtube" },
                  { title: "Vimeo", value: "vimeo" },
                  { title: "Direct URL", value: "url" }
                ]
              },
              initialValue: "youtube"
            },

            {
              name: "url",
              title: "Video URL",
              type: "url"
            },

            {
              name: "autoplay",
              title: "Autoplay",
              type: "boolean",
              initialValue: false
            },

            {
              name: "loop",
              title: "Loop",
              type: "boolean",
              initialValue: false
            },

            {
              name: "muted",
              title: "Muted",
              type: "boolean",
              initialValue: true
            },

            {
              name: "controls",
              title: "Show Controls",
              type: "boolean",
              initialValue: true
            },

            {
              name: "borderRadius",
              title: "Border Radius",
              type: "string",
              initialValue: "12px"
            }

          ]
        },

        /* =====================================================
           QUOTE BLOCK
        ===================================================== */

        {
          type: "object",
          name: "quoteBlock",
          title: "Quote",

          fields: [

            {
              name: "quote",
              title: "Quote",
              type: "array",
              of: [richTextBlock()]
            },

            {
              name: "author",
              title: "Author",
              type: "array",
              of: [richTextBlock()]
            },

            {
              name: "designation",
              title: "Designation",
              type: "array",
              of: [richTextBlock()]
            },

            {
              name: "authorImage",
              title: "Author Image",
              type: "image",
              options: {
                hotspot: true
              }
            },

            {
              name: "alignment",
              title: "Alignment",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" }
                ]
              },
              initialValue: "center"
            }

          ]
        },

        /* =====================================================
           RATING BLOCK
        ===================================================== */

        {
          type: "object",
          name: "ratingBlock",
          title: "Rating",

          fields: [

            {
              name: "rating",
              title: "Rating",
              type: "number",
              validation: Rule => Rule.min(1).max(5)
            },

            {
              name: "maxRating",
              title: "Maximum Rating",
              type: "number",
              initialValue: 5
            },

            {
              name: "starColor",
              title: "Star Color",
              type: "string",
              initialValue: "#FFD700"
            },

            {
              name: "showNumber",
              title: "Show Numeric Rating",
              type: "boolean",
              initialValue: true
            }

          ]
        },

        /* =====================================================
           PROGRESS BAR BLOCK
        ===================================================== */

        {
          type: "object",
          name: "progressBlock",
          title: "Progress Bar",

          fields: [

            {
              name: "label",
              title: "Label",
              type: "array",
              of: [richTextBlock()]
            },

            {
              name: "value",
              title: "Percentage",
              type: "number",
              validation: Rule => Rule.min(0).max(100)
            },

            {
              name: "color",
              title: "Progress Color",
              type: "string"
            },

            {
              name: "background",
              title: "Background Color",
              type: "string"
            }

          ]
        },

        /* =====================================================
           COUNTER BLOCK
        ===================================================== */

        {
          type: "object",
          name: "counterBlock",
          title: "Counter",

          fields: [

            {
              name: "number",
              title: "Number",
              type: "number"
            },

            {
              name: "suffix",
              title: "Suffix",
              type: "string"
            },

            {
              name: "prefix",
              title: "Prefix",
              type: "string"
            },

            {
              name: "title",
              title: "Title",
              type: "array",
              of: [richTextBlock()]
            }

          ]
        },
        /* =====================================================
   CARD COLLECTION
===================================================== */

        {
          type: "object",
          name: "cardCollection",
          title: "Card Collection",

          fields: [

            {
              name: "title",
              title: "Collection Title",
              type: "array",
              of: [richTextBlock()]
            },

            {
              name: "subtitle",
              title: "Collection Subtitle",
              type: "array",
              of: [richTextBlock()]
            },

            {
              name: "layout",
              title: "Layout",
              type: "string",
              options: {
                list: [
                  { title: "Grid", value: "grid" },
                  { title: "Carousel", value: "carousel" },
                  { title: "Horizontal Scroll", value: "horizontal" },
                  { title: "Masonry", value: "masonry" },
                  {
                    title: "Accordion",
                    value: "accordion",
                  }
                ]
              },
              initialValue: "grid"
            },

            {
              name: "columns",
              title: "Columns",
              type: "number",
              initialValue: 3
            },

            {
              name: "gap",
              title: "Gap",
              type: "string",
              initialValue: "24px"
            },

            {
              name: "cardStyle",
              title: "Card Style",
              type: "string",
              options: {
                list: [
                  { title: "Default", value: "default" },
                  { title: "Glass", value: "glass" },
                  { title: "Outlined", value: "outlined" },
                  { title: "Minimal", value: "minimal" },
                  { title: "Shadow", value: "shadow" }
                ]
              },
              initialValue: "default"
            },
            {
              name: "autoplay",
              title: "Autoplay",
              type: "boolean",
              initialValue: true
            },

            {
              name: "loop",
              title: "Loop",
              type: "boolean",
              initialValue: true
            },

            {
              name: "navigation",
              title: "Show Navigation",
              type: "boolean",
              initialValue: true
            },

            {
              name: "pagination",
              title: "Show Pagination",
              type: "boolean",
              initialValue: true
            },

            {
              name: "slidesPerView",
              title: "Slides Per View",
              type: "number",
              initialValue: 3
            },


            {
              name: "cards",
              title: "Cards",
              type: "array",

              of: [
                {
                  type: "object",

                  fields: [
                    {
                      name: "showNumber",
                      title: "Show Number",
                      type: "boolean",
                      initialValue: false,
                    },

                    {
                      name: "number",
                      title: "Number",
                      type: "string",
                    },

                    /* ===========================================
                       IMAGE
                    =========================================== */

                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: {
                        hotspot: true
                      }
                    },

                    {
                      name: "imageShape",
                      title: "Image Shape",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "Rectangle",
                            value: "rectangle"
                          },
                          {
                            title: "Square",
                            value: "square"
                          },
                          {
                            title: "Circle",
                            value: "circle"
                          },
                          {
                            title: "Rounded",
                            value: "rounded"
                          }
                        ]
                      },
                      initialValue: "rectangle"
                    },

                    /* ===========================================
                       ICON
                    =========================================== */

                    {
                      name: "icon",
                      title: "Icon",
                      type: "string"
                    },

                    /* ===========================================
                       BADGE
                    =========================================== */

                    {
                      name: "badge",
                      title: "Badge",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    {
                      name: "badgeColor",
                      title: "Badge Color",
                      type: "string"
                    },
                    /* ===========================================
   TEXT CONTENT
=========================================== */

                    {
                      name: "title",
                      title: "Title",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    {
                      name: "subtitle",
                      title: "Subtitle",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    {
                      name: "description",
                      title: "Description",
                      type: "array",
                      of: [richTextBlock()]
                    },


                    /* ===========================================
                       RATING
                    =========================================== */

                    {
                      name: "rating",
                      title: "Rating",
                      type: "number",
                      validation: Rule => Rule.min(1).max(5)
                    },

                    {
                      name: "showRating",
                      title: "Show Rating",
                      type: "boolean",
                      initialValue: true
                    },

                    /* ===========================================
                       PRICE
                    =========================================== */

                    {
                      name: "price",
                      title: "Price",
                      type: "string"
                    },

                    {
                      name: "oldPrice",
                      title: "Old Price",
                      type: "string"
                    },

                    /* ===========================================
                       DATE
                    =========================================== */

                    {
                      name: "date",
                      title: "Date",
                      type: "date"
                    },

                    /* ===========================================
                       CATEGORY
                    =========================================== */

                    {
                      name: "category",
                      title: "Category",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    /* ===========================================
                       LOCATION
                    =========================================== */

                    {
                      name: "location",
                      title: "Location",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    /* ===========================================
                       CLIENT
                    =========================================== */

                    {
                      name: "client",
                      title: "Client",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    /* ===========================================
                       TAGS
                    =========================================== */

                    {
                      name: "tags",
                      title: "Tags",
                      type: "array",
                      of: [
                        {
                          type: "string"
                        }
                      ]
                    },

                    /* ===========================================
                       STATUS
                    =========================================== */

                    {
                      name: "status",
                      title: "Status",
                      type: "string",
                      options: {
                        list: [
                          { title: "Active", value: "active" },
                          { title: "Completed", value: "completed" },
                          { title: "Coming Soon", value: "coming-soon" },
                          { title: "Sold Out", value: "sold-out" }
                        ]
                      }
                    },
                    /* ===========================================
   BUTTON
=========================================== */

                    {
                      name: "buttonText",
                      title: "Button Text",
                      type: "array",
                      of: [richTextBlock()]
                    },

                    {
                      name: "buttonLink",
                      title: "Button Link",
                      type: "url"
                    },

                    {
                      name: "buttonStyle",
                      title: "Button Style",
                      type: "string",
                      options: {
                        list: [
                          { title: "Primary", value: "primary" },
                          { title: "Secondary", value: "secondary" },
                          { title: "Outline", value: "outline" },
                          { title: "Ghost", value: "ghost" }
                        ]
                      },
                      initialValue: "primary"
                    },

                    /* ===========================================
                       SOCIAL LINKS
                    =========================================== */

                    {
                      name: "socialLinks",
                      title: "Social Links",
                      type: "object",
                      fields: [

                        {
                          name: "facebook",
                          title: "Facebook",
                          type: "url"
                        },

                        {
                          name: "instagram",
                          title: "Instagram",
                          type: "url"
                        },

                        {
                          name: "linkedin",
                          title: "LinkedIn",
                          type: "url"
                        },

                        {
                          name: "twitter",
                          title: "Twitter / X",
                          type: "url"
                        },

                        {
                          name: "github",
                          title: "GitHub",
                          type: "url"
                        },

                        {
                          name: "website",
                          title: "Website",
                          type: "url"
                        }

                      ]
                    },

                    /* ===========================================
                       EXTRA CUSTOM FIELDS
                    =========================================== */

                    {
                      name: "extraFields",
                      title: "Extra Fields",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: [

                            {
                              name: "label",
                              title: "Label",
                              type: "array",
                              of: [richTextBlock()]
                            },

                            {
                              name: "value",
                              title: "Value",
                              type: "array",
                              of: [richTextBlock()]
                            }

                          ]
                        }
                      ]
                    }

                  ]
                }
              ]
            }

          ]
        },
      ]
    }

  ],
  //   preview: {
  //   select: {
  //     title: "sectionName",
  //     subtitle: "pageSlug",
  //     layout: "layout",
  //     media: "backgroundImage",
  //   },
  //   prepare({ title, subtitle, layout, media }) {
  //     return {
  //       title: title || "Untitled Custom Section",
  //       subtitle: `${subtitle || "home"} • ${layout || "single"}`,
  //       media,
  //     };
  //   },
  // },
  preview: {
    select: {
      title: "sectionName",
    },
  },

};