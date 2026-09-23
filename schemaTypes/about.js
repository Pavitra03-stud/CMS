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

    /* ================= PROFILE IMAGE ================= */
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
    {
      name: "imageWidth",
      title: "Image Width",
      type: "string",
      initialValue: "450px",
    },

    {
      name: "imageHeight",
      title: "Image Height",
      type: "string",
      initialValue: "450px",
    },

    {
      name: "imageBorder",
      title: "Image Border",
      type: "string",
    },

    {
      name: "imageBorderRadius",
      title: "Image Border Radius",
      type: "string",
      initialValue: "20px",
    },

    {
      name: "imageShadow",
      title: "Image Shadow",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "imageOpacity",
      title: "Image Opacity",
      type: "number",
      initialValue: 1,
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
        layout: "dropdown",
      },
      initialValue: "cover",
    },
    {
      name: "imageAnimation",
      title: "Image Animation",
      type: "string",
      options: {
        list: [
          { title: "Fade", value: "fade" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Zoom", value: "zoom" },
        ],
      },
    },

    /* ================= TEXT ALIGNMENT ================= */
    {
      name: "headingPosition",
      title: "Heading Position",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Inside Content", value: "inside" },
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "top",
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
    /* ================= BACKGROUND IMAGE ================= */

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
        ],
      },
      initialValue: "cover",
    },

    {
      name: "overlayColor",
      title: "Overlay Color",
      type: "string",
      description: "Example : rgba(0,0,0,.45)",
    },

    {
      name: "showOverlay",
      title: "Show Overlay",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "sectionHeight",
      title: "Section Height",
      type: "string",
      initialValue: "100vh",
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
      title: "Box Background",
      type: "string",
      description: "Example rgba(0,0,0,.45)",
    },

    {
      name: "backdropBlur",
      title: "Backdrop Blur",
      type: "string",
      initialValue: "12px",
    },

    {
      name: "boxOpacity",
      title: "Opacity",
      type: "number",
      initialValue: 1,
    },

    {
      name: "boxPadding",
      title: "Box Padding",
      type: "string",
      initialValue: "40px",
    },

    {
      name: "boxWidth",
      title: "Box Width",
      type: "string",
      initialValue: "600px",
    },
    {
      name: "boxMaxWidth",
      title: "Box Max Width",
      type: "string",
      initialValue: "650px",
    },

    {
      name: "boxMinHeight",
      title: "Box Min Height",
      type: "string",
      initialValue: "auto",
    },

    {
      name: "boxBorderWidth",
      title: "Border Width",
      type: "string",
      initialValue: "1px",
    },

    {
      name: "boxBorderColor",
      title: "Border Color",
      type: "string",
      initialValue: "#ffffff20",
    },

    {
      name: "boxBorderRadius",
      title: "Border Radius",
      type: "string",
      initialValue: "20px",
    },

    {
      name: "boxBorder",
      title: "Border",
      type: "string",
    },

    {
      name: "boxShadow",
      title: "Box Shadow",
      type: "boolean",
      initialValue: true,
    },

    {
      name: "boxAnimation",
      title: "Animation",
      type: "string",
      options: {
        list: [
          { title: "Fade", value: "fade" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Zoom", value: "zoom" },
        ]
      },
    },

    {
      name: "boxPosition",
      title: "Horizontal Position",
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
      name: "boxOffsetX",
      title: "Box Offset X",
      type: "number",
      initialValue: 0,
      description: "Move box left (-) or right (+)"
    },

    {
      name: "boxOffsetY",
      title: "Box Offset Y",
      type: "number",
      initialValue: 0,
      description: "Move box up (-) or down (+)"
    },


    /* ================= NEW: DYNAMIC BUTTONS ================= */

    {
      name: "buttons",
      title: "About Buttons",
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
              description:
                "Examples: /contact | https://google.com | mailto:abc@gmail.com",
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
              title: "Background Color (HEX)",
              type: "string",
            },
            {
              name: "textColor",
              title: "Text Color (HEX)",
              type: "string",
            },
            {
              name: "borderColor",
              title: "Border Color (HEX)",
              type: "string",
            },
            {
              name: "openInNewTab",
              title: "Open In New Tab?",
              type: "boolean",
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: "label",
            },
          },
        },
      ],
    },

    {
      name: "buttonPosition",
      title: "Button Position",
      type: "string",
      options: {
        list: [
          { title: "Below Description", value: "bottom" },
          { title: "Above Description", value: "top" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "bottom",
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
      name: "buttonGap",
      title: "Button Gap",
      type: "string",
      initialValue: "16px",
    },

    {
      name: "buttonWidth",
      title: "Button Width",
      type: "string",
    },

    {
      name: "buttonPadding",
      title: "Button Padding",
      type: "string",
    },

    {
      name: "buttonBorderRadius",
      title: "Button Radius",
      type: "string",
    },
    /* ================= FEATURES ================= */

    {
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            {
              name: "icon",
              title: "Icon",
              type: "image",
            },

            {
              name: "title",
              title: "Title",
              type: "array",
              of: [richTextBlock()],
            },

            {
              name: "description",
              title: "Description",
              type: "array",
              of: [richTextBlock()],
            },

            {
              name: "background",
              title: "Card Background",
              type: "string",
            },

            {
              name: "borderRadius",
              title: "Border Radius",
              type: "string",
              initialValue: "20px",
            },

            {
              name: "boxShadow",
              title: "Box Shadow",
              type: "boolean",
              initialValue: true,
            }

          ]
        }
      ]
    },
    {
      name: "contentBlocks",
      title: "Content Blocks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            {
              name: "type",
              title: "Content Type",
              type: "string",
              options: {
                list: [
                  { title: "Heading", value: "heading" },
                  { title: "Paragraph", value: "paragraph" },
                  { title: "Button", value: "button" },
                  { title: "Image", value: "image" },
                  { title: "Statistics", value: "statistics" },
                ],
                layout: "radio",
              }
            },

            {
              name: "content",
              title: "Content",
              type: "array",
              of: [richTextBlock()],
            },

            {
              name: "image",
              title: "Image",
              type: "image",
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
              name: "statistics",
              title: "Statistics",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "number", type: "string" },
                    { name: "label", type: "string" },
                    { name: "icon", type: "string" },
                  ]
                }
              ]
            },

            {
              name: "x",
              title: "Left Position",
              type: "number",
              initialValue: 0,
            },

            {
              name: "y",
              title: "Top Position",
              type: "number",
              initialValue: 0,
            },

            {
              name: "width",
              title: "Width",
              type: "string",
              initialValue: "400px",
            },

            {
              name: "padding",
              title: "Padding",
              type: "string",
              initialValue: "30px",
            },

            {
              name: "background",
              title: "Background",
              type: "string",
            },

            {
              name: "borderRadius",
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

            {
              name: "backdropBlur",
              title: "Backdrop Blur",
              type: "string",
              initialValue: "12px",
            },

            {
              name: "animation",
              title: "Animation",
              type: "string",
              options: {
                list: [
                  { title: "Fade", value: "fade" },
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                  { title: "Zoom", value: "zoom" },
                ]
              }
            }

          ]
        }
      ]
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