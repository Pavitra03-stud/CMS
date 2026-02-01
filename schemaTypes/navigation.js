export default {
  name: "navigation",
  title: "Navigation",
  type: "document",

  fields: [
    /* =========================
       BASIC SITE INFO
    ========================= */
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
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
       PROFILE AVATAR (NEW)
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
      title: "Profile Role / Subtitle",
      type: "string",
      description: "Example: Frontend Developer",
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
              type: "string",
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
