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
  name: "backgroundImage",
  title: "Background Image",
  type: "image",
  options: {
    hotspot: true,
  },
},

{
  name: "useBackgroundImage",
  title: "Use Background Image",
  type: "boolean",
  initialValue: false,
},

{
  name: "backgroundColor",
  title: "Background Color",
  type: "string",
  description: "Example: #ffffff",
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
  description: "Example: rgba(0,0,0,0.45)",
},

{
  name: "sectionHeight",
  title: "Section Height",
  type: "string",
  initialValue: "100vh",
},

{
  name: "backgroundPosition",
  title: "Background Position",
  type: "string",
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
  options: {
    list: [
      { title: "Cover", value: "cover" },
      { title: "Contain", value: "contain" },
      { title: "Auto", value: "auto" },
    ],
  },
  initialValue: "cover",
},
/* ================= CARD SETTINGS ================= */

{
  name: "cardWidth",
  title: "Card Width",
  type: "string",
  initialValue: "350px",
},

{
  name: "cardHeight",
  title: "Card Height",
  type: "string",
  initialValue: "500px",
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
      { title: "Rotate", value: "rotate" },
    ],
    layout: "radio",
  },
  initialValue: "lift",
},
{
  name: "cardVerticalAlign",
  title: "Card Vertical Alignment",
  type: "string",
  options: {
    list: [
      { title: "Top", value: "flex-start" },
      { title: "Center", value: "center" },
      { title: "Bottom", value: "flex-end" },
    ],
    layout: "radio",
  },
  initialValue: "flex-start",
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
            /* SERVICE IMAGE */
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
  initialValue: "220px",
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
      { title: "Fill", value: "fill" },
    ],
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
  initialValue: "#D4A64A",
},
{
  name: "cardBackground",
  title: "Card Background",
  type: "string",
},

{
  name: "cardBorderRadius",
  title: "Card Border Radius",
  type: "string",
  initialValue: "20px",
},

{
  name: "cardShadow",
  title: "Card Shadow",
  type: "boolean",
  initialValue: true,
},
{
  name: "cardAnimation",
  title: "Card Animation",
  type: "string",
  options: {
    list: [
      { title: "None", value: "" },
      { title: "Fade", value: "fade" },
      { title: "Slide Up", value: "slide-up" },
      { title: "Zoom", value: "zoom" },
      { title: "Float", value: "float" },
    ],
  },
},
/* ================= SECTION BUTTONS ================= */

{
  name: "buttons",
  title: "Section Buttons",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Text",
          type: "string",
        },
        {
          name: "url",
          title: "Button Link",
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
          name: "backgroundColor",
          title: "Background Color",
          type: "string",
        },
        {
          name: "textColor",
          title: "Text Color",
          type: "string",
        },
        {
          name: "borderColor",
          title: "Border Color",
          type: "string",
        },
        {
          name: "openInNewTab",
          title: "Open In New Tab",
          type: "boolean",
          initialValue: false,
        },
      ],
    },
  ],
},

            /* SERVICE TITLE */
            {
              name: "serviceTitle",
              title: "Service Title (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },

            /* SERVICE DESCRIPTION */
            {
              name: "serviceDescription",
              title: "Service Description (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },

            /* ================= BUTTON ================= */

            {
              name: "showButton",
              title: "Show Button",
              type: "boolean",
              initialValue: false,
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
              description: "Example: /services or https://example.com",
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
                ],
                layout: "radio",
              },
              initialValue: "primary",
            },
            {
  name: "buttonWidth",
  title: "Button Width",
  type: "string",
  initialValue: "auto",
},

{
  name: "buttonPadding",
  title: "Button Padding",
  type: "string",
  initialValue: "12px 24px",
},

{
  name: "buttonBorderRadius",
  title: "Button Border Radius",
  type: "string",
  initialValue: "30px",
},

            {
              name: "buttonColor",
              title: "Button Color",
              type: "string",
              description: "Enter HEX color (Example: #3b82f6)",
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
                  { title: "Top", value: "top" },
                  { title: "Bottom", value: "bottom" },
                ],
                layout: "radio",
              },
              initialValue: "center",
            },
          ],
        },
      ],
    },
    /* ================= CONTENT BOX ================= */

{
  name: "enableContentBox",
  title: "Enable Content Box",
  type: "boolean",
  initialValue: false,
},

{
  name: "boxBackground",
  title: "Content Box Background",
  type: "string",
},

{
  name: "backdropBlur",
  title: "Backdrop Blur",
  type: "string",
  initialValue: "10px",
},

{
  name: "boxPadding",
  title: "Box Padding",
  type: "string",
  initialValue: "40px",
},

{
  name: "boxBorderRadius",
  title: "Box Border Radius",
  type: "string",
  initialValue: "20px",
},

{
  name: "boxShadow",
  title: "Show Box Shadow",
  type: "boolean",
  initialValue: true,
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

/* ================= REUSABLE RICH TEXT BLOCK ================= */

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