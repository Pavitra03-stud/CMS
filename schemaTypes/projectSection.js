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
    {
      name: "description",
      title: "Section Description (Rich Text)",
      type: "array",
      of: [richTextBlock()],
    },


    /*  MATCHING CSS VALUES */
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
      name: "cardWidth",
      title: "Card Width",
      type: "string",
      initialValue: "360px",
    },

    {
      name: "cardHeight",
      title: "Card Height",
      type: "string",
      initialValue: "420px",
    },

    {
      name: "cardGap",
      title: "Gap Between Cards",
      type: "string",
      initialValue: "30px",
    },

    {
      name: "cardBackground",
      title: "Card Background",
      type: "string",
      initialValue: "#ffffff",
    },

    {
      name: "cardBorderRadius",
      title: "Card Border Radius",
      type: "string",
      initialValue: "20px",
    },

    {
      name: "cardBorder",
      title: "Card Border",
      type: "string",
      initialValue: "none",
    },

    {
      name: "cardShadow",
      title: "Show Card Shadow",
      type: "boolean",
      initialValue: true,
    },

    {
      name: "cardPadding",
      title: "Card Padding",
      type: "string",
      initialValue: "24px",
    },

    {
      name: "cardHover",
      title: "Card Hover Animation",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Lift", value: "lift" },
          { title: "Zoom", value: "zoom" },
          { title: "Glow", value: "glow" },
        ]
      },
      initialValue: "lift",
    },

    {
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "useBackgroundImage",
      title: "Use Background Image",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "showOverlay",
      title: "Show Overlay",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "overlayColor",
      title: "Overlay Color",
      type: "string",
    },

    {
      name: "sectionHeight",
      title: "Section Height",
      type: "string",
      initialValue: "100vh",
    },
    {
      name: "sectionPadding",
      title: "Section Padding",
      type: "string",
      initialValue: "100px 8%",
    },

    {
      name: "backgroundPosition",
      title: "Background Position",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ]
      },
      initialValue: "center",
    },

    {
      name: "backgroundSize",
      title: "Background Size",
      type: "string",
      options: {
        list: [
          { title: "Cover", value: "cover" },
          { title: "Contain", value: "contain" },
        ]
      },
      initialValue: "cover",
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
              name: "showImage",
              title: "Show Image",
              type: "boolean",
              initialValue: true,
            },

            {
              name: "imageWidth",
              title: "Image Width",
              type: "string",
              initialValue: "100%",
            },

            {
              name: "imageHeight",
              title: "Image Height",
              type: "string",
              initialValue: "240px",
            },

            {
              name: "imageBorderRadius",
              title: "Image Border Radius",
              type: "string",
              initialValue: "16px",
            },

            {
              name: "imageBorder",
              title: "Image Border",
              type: "string",
              initialValue: "none",
            },

            {
              name: "imageShadow",
              title: "Image Shadow",
              type: "boolean",
              initialValue: false,
            },

            {
              name: "imageObjectFit",
              title: "Image Object Fit",
              type: "string",
              options: {
                list: [
                  { title: "Cover", value: "cover" },
                  { title: "Contain", value: "contain" },
                ]
              },
              initialValue: "cover",
            },
            {
              name: "showBadge",
              title: "Show Badge",
              type: "boolean",
              initialValue: false,
            },

            {
              name: "badgeText",
              title: "Badge Text",
              type: "string",
            },

            {
              name: "badgeColor",
              title: "Badge Color",
              type: "string",
            },
            {
              name: "location",
              title: "Project Location",
              type: "string",
            },

            {
              name: "category",
              title: "Tile Category",
              type: "string",
            },

            {
              name: "completionDate",
              title: "Completion Date",
              type: "string",
            },

            {
              name: "client",
              title: "Client",
              type: "string",
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

            /*  NEW ALIGNMENT CONTROL */

            {
              name: "showButton",
              title: "Show Button",
              type: "boolean",
              initialValue: true,
            },

            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },

            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            },

            {
              name: "buttonStyle",
              title: "Button Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Outline", value: "outline" },
                  { title: "Ghost", value: "ghost" },
                ]
              },
            },

            {
              name: "buttonColor",
              title: "Button Color",
              type: "string",
            },

            {
              name: "buttonPosition",
              title: "Button Position",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" },
                ]
              },
            },

            {
              name: "showProject",
              title: "Show Project",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "maxWidth",
              title: "Content Width",
              type: "string",
              initialValue: "1300px",
            }
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