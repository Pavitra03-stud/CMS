export default {
  name: "navigation",
  title: "Navigation",
  type: "document",

  fields: [

    /* =========================
       SITE TITLE (RICH TEXT)
    ========================= */
    {
      name: "siteTitle",
      title: "Site Title (Rich Text)",
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
    },

    /* =========================
       TYPOGRAPHY CONTROLS
    ========================= */
    {
      name: "fontSize",
      title: "Font Size",
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
      title: "Font Family",
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
      title: "Text Color",
      type: "string",
    },

    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },

    /* =========================
       PROFILE AVATAR
    ========================= */
    {
      name: "profileImage",
      title: "Profile Avatar",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "profileRole",
      title: "Profile Role (Rich Text)",
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
       MENU ITEMS (RICH LABEL)
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
              title: "Label (Rich Text)",
              type: "array",
              of: [richTextBlock()],
            },
            {
              name: "link",
              title: "Link",
              type: "string",
              description: "Example: #home, #about, #contact",
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
  ],
};


/* =========================
   REUSABLE RICH TEXT BLOCK
========================= */
function richTextBlock() {
  return {
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "Heading 1", value: "h1" },
      { title: "Heading 2", value: "h2" },
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
                  { title: "Medium", value: "16px" },
                  { title: "Large", value: "20px" },
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
