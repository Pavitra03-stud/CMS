export default {
  name: "contact",
  title: "Contact Section",
  type: "document",

  fields: [

    /* ================= SECTION CONTROLS ================= */

    {
      name: "layout",
      title: "Layout Position",
      type: "string",
      options: {
        list: [
          { title: "Text Left - Form Right", value: "row" },
          { title: "Form Left - Text Right", value: "row-reverse" },
          { title: "Text Top - Form Bottom", value: "column" },
          { title: "Form Top - Text Bottom", value: "column-reverse" },
        ],
        layout: "radio",
      },
      initialValue: "row",
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
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },

    {
      name: "paddingTop",
      title: "Padding Top",
      type: "string",
      initialValue: "100px",
    },

    {
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "string",
      initialValue: "100px",
    },

    /* ================= IMAGE CONTROLS ================= */

    {
      name: "showImage",
      title: "Show Contact Image?",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "contactImage",
      title: "Contact Image",
      type: "image",
      hidden: ({ document }) => !document?.showImage,
      options: { hotspot: true },
    },

    {
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      hidden: ({ document }) => !document?.showImage,
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Bottom", value: "bottom" },
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
      hidden: ({ document }) => !document?.showImage,
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

    /* ================= FORM + INFO CONTROLS ================= */

    {
      name: "formAlign",
      title: "Form Alignment Inside Section",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "flex-start" },
          { title: "Center", value: "center" },
          { title: "Right", value: "flex-end" },
        ],
        layout: "radio",
      },
      initialValue: "flex-start",
    },

    {
      name: "infoAlign",
      title: "Contact Info Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "flex-start" },
          { title: "Center", value: "center" },
          { title: "Right", value: "flex-end" },
        ],
        layout: "radio",
      },
      initialValue: "flex-start",
    },

    {
      name: "formWidth",
      title: "Form Width",
      type: "string",
      description: "Example: 400px, 500px, 100%",
      initialValue: "100%",
    },

    /* ================= CONTENT ================= */

    {
      name: "heading",
      title: "Heading (Rich Text)",
      type: "array",
      of: [richBlock()],
    },
    {
      name: "headingColor",
      title: "Heading Color",
      type: "string",
      initialValue: "#2E241B",
    },

    {
      name: "description",
      title: "Description (Rich Text)",
      type: "array",
      of: [richBlock()],
    },
    {
      name: "descriptionColor",
      title: "Description Color",
      type: "string",
      initialValue: "#5F5F5F",
    },
    {
              name: "labelColor",
              title: "Label Color",
              type: "string",
              initialValue: "#2E241B",
            },
            {
              name: "valueColor",
              title: "Value Color",
              type: "string",
              initialValue: "#666666",
            },
            {
              name: "formBackground",
              title: "Form Background",
              type: "string",
              initialValue: "#FFFFFF",
            },
            {
              name: "formBorderColor",
              title: "Form Border",
              type: "string",
              initialValue: "#E5E5E5",
            },
            {
              name: "inputBackground",
              title: "Input Background",
              type: "string",
              initialValue: "#FFFFFF",
            },
             {
              name: "inputTextColor",
              title: "Input Text Color",
              type: "string",
              initialValue: "#2E241B",
            },
            {
              name: "placeholderColor",
              title: "Placeholder Color",
              type: "string",
              initialValue: "#999999",
            },
            {
              name: "buttonBackground",
              title: "Button Background",
              type: "string",
              initialValue: "#C89B3C",
            },
            {
              name: "buttonTextColor",
              title: "Button Text Color",
              type: "string",
              initialValue: "#FFFFFF",
            },
            {
              name: "buttonHoverBackground",
              title: "Button Hover Background",
              type: "string",
              initialValue: "#A67C22",
            },
            {
              name: "cardBackground",
              title: "Card Background",
              type: "string",
              initialValue: "#FFFFFF",
            },
            {
              name: "cardShadow",
              title: "Card Shadow",
              type: "string",
              initialValue: "0 12px 40px rgba(0,0,0,.12)",
            },
            {
              name: "overlayColor",
              title: "Overlay Color",
              type: "string",
              initialValue: "rgba(255,255,255,.75)",
            },

    /* ================= FULLY DYNAMIC CONTACT ITEMS ================= */

    {
      name: "contactItems",
      title: "Contact Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label (Example: Email, Instagram, LinkedIn)",
              type: "string",
            },
            
            {
              name: "value",
              title: "Value (Rich Text)",
              type: "array",
              of: [richBlock()],
            },
            {
              name: "link",
              title: "Optional Link",
              type: "string",
              description:
                "Examples: mailto:abc@gmail.com | tel:+9198765xxxxx | https://instagram.com/username",
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
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
};


/* ================= RICH TEXT BLOCK ================= */

function richBlock() {
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
    },
  };
}