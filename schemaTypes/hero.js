export default {
  name: "hero",
  title: "Hero Section",
  type: "document",

  fields: [
    /* ================= NAME ================= */
    {
      name: "name",
      title: "Name (Rich Text)",
      type: "array",
      of: [richTextBlock()],
    },

    /* ================= ROLE ================= */
    {
      name: "role",
      title: "Role (Rich Text)",
      type: "array",
      of: [richTextBlock()],
    },

    /* ================= TAGLINE ================= */
    {
      name: "tagline",
      title: "Tagline (Rich Text)",
      type: "array",
      of: [richTextBlock()],
    },

    /* ================= IMAGE ================= */
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "imageShape",
      title: "Hero Image Shape",
      type: "string",
      options: {
        list: [
          { title: "Circle", value: "circle" },
          { title: "Square", value: "square" },
          { title: "Rectangle", value: "rectangle" },
          { title: "Star", value: "star" },
          { title: "Diamond", value: "diamond" },
        ],
        layout: "radio",
      },
      initialValue: "circle",
    },
    /* ================= IMAGE SIZE ================= */
    {
      name: "heroBackground",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "useBackgroundImage",
      title: "Use Background Image?",
      type: "boolean",
      initialValue: false,
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
      initialValue: "right",
    },

    /* ================= TEXT ALIGN ================= */
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
      name: "contentPosition",
      title: "Content Position",
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
      name: "enableContentBox",
      title: "Enable Content Box",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "boxPosition",
      title: "Box Position",
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
      name: "boxVertical",
      title: "Vertical Position",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio",
      },
      initialValue: "center",
    },
    {
      name: "boxBackground",
      title: "Box Background",
      type: "string",
      description: "Example: rgba(0,0,0,.45)",
      initialValue: "rgba(0,0,0,.45)",
    },
    {
      name: "backdropBlur",
      title: "Backdrop Blur",
      type: "string",
      description: "Example: 10px",
    },
    {
      name: "boxOpacity",
      title: "Opacity",
      type: "number",
      validation: Rule => Rule.min(0).max(1),
      initialValue: 0.8
    },
    {
      name: "buttonLayout",
      title: "Button Layout",
      type: "string",
      options: {
        list: [
          { title: "Horizontal", value: "row" },
          { title: "Vertical", value: "column" },
        ],
        layout: "radio",
      },
      initialValue: "row",
    },
    {
      name: "boxAnimation",
      title: "Animation",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Fade", value: "fade" },
          { title: "Slide Left", value: "left" },
          { title: "Slide Right", value: "right" },
          { title: "Zoom", value: "zoom" }
        ]
      },
      initialValue: "fade"
    },
    {
      name: "boxPadding",
      title: "Box Padding",
      type: "string",
      initialValue: "50px",
    },

    {
      name: "boxWidth",
      title: "Box Width",
      type: "string",
      initialValue: "600px",
    },

    {
      name: "boxBorderRadius",
      title: "Border Radius",
      type: "string",
      initialValue: "20px",
    },

    {
      name: "boxShadow",
      title: "Box Shadow",
      type: "boolean",
      initialValue: true,
    },

    /* ================= BACKGROUND COLOR ================= */
    {
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
      description: "Enter HEX color (Example: #0f172a)",
    },
    {
      name: "overlayColor",
      title: "Overlay Color",
      type: "string",
      description: "Example: rgba(0,0,0,0.4)",
      initialValue: "rgba(0,0,0,0.35)",
    },

    {
      name: "showOverlay",
      title: "Show Overlay",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "heroHeight",
      title: "Hero Height",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "60vh" },
          { title: "Medium", value: "80vh" },
          { title: "Full Screen", value: "100vh" },
        ],
        layout: "radio",
      },
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
        layout: "radio",
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
        ],
        layout: "radio",
      },
      initialValue: "cover",
    },

    /* ================= DYNAMIC BUTTONS ================= */
    {
      name: "buttons",
      title: "Hero Buttons",
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
              description: "HEX or gradient",
            },
            {
              name: "textColor",
              title: "Text Color",
              type: "string",
            },
            {
              name: "borderColor",
              title: "Border Color (for outline)",
              type: "string",
            },
            {
              name: "openInNewTab",
              title: "Open in New Tab?",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    },

    /*  NEW: BUTTON POSITION (ONLY ADDITION) */
    {
      name: "buttonPosition",
      title: "Button Position",
      type: "string",
      options: {
        list: [
          { title: "Above Text", value: "top" },
          { title: "Below Text", value: "bottom" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "bottom",
    },
    {
  name: "buttonGap",
  title: "Button Gap",
  type: "string",
  initialValue: "16px",
},

{
  name: "buttonPadding",
  title: "Button Padding",
  type: "string",
  initialValue: "16px 34px",
},

{
  name: "buttonBorderRadius",
  title: "Button Border Radius",
  type: "string",
  initialValue: "30px",
},

{
  name: "buttonWidth",
  title: "Button Width",
  type: "string",
  description: "Example: auto, 220px, 100%",
  initialValue: "auto",
},

    /* ================= RESUME ================= */
    {
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      options: { accept: ".pdf" },
    },

    /* ================= SHOW ================= */
    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "contentBlocks",
      title: "Content Blocks",
      type: "array",
      of: [
        {
          type: "heroContentBlock",
        },
      ],
    },
  ],
};


/* ===================================================== */
/*  RICH TEXT BLOCK */
/* ===================================================== */

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
                  { title: "Small", value: "20px" },
                  { title: "Medium", value: "28px" },
                  { title: "Large", value: "36px" },
                  { title: "XL", value: "48px" },
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