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
          { title: "Text Left – Form Right", value: "row" },
          { title: "Form Left – Text Right", value: "row-reverse" },
          { title: "Text Top – Form Bottom", value: "column" },
          { title: "Form Top – Text Bottom", value: "column-reverse" },
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
      options: {
        hotspot: true,
      },
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

    {
      name: "contactOrder",
      title: "Contact Field Order",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "Phone", value: "phone" },
          { title: "Address", value: "address" },
        ],
      },
    },

    /* ================= CONTENT ================= */

    {
      name: "heading",
      title: "Heading (Rich Text)",
      type: "array",
      of: [richBlock()],
    },

    {
      name: "description",
      title: "Description (Rich Text)",
      type: "array",
      of: [richBlock()],
    },

    richContactField("email", "Email"),
    richContactField("phone", "Phone"),
    richContactField("address", "Address"),

    {
      name: "showSection",
      title: "Show Section",
      type: "boolean",
      initialValue: true,
    },
  ],
};


/* ================= REUSABLE RICH BLOCK ================= */

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
      annotations: [
        textColorAnnotation(),
        fontSizeAnnotation(),
        fontFamilyAnnotation(),
      ],
    },
  };
}

function richContactField(name, title) {
  return {
    name,
    title: `${title} (Rich Text)`,
    type: "array",
    of: [richBlock()],
  };
}

function textColorAnnotation() {
  return {
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
  };
}

function fontSizeAnnotation() {
  return {
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
            { title: "Medium", value: "16px" },
            { title: "Large", value: "20px" },
            { title: "XL", value: "24px" },
          ],
        },
      },
    ],
  };
}

function fontFamilyAnnotation() {
  return {
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
  };
}