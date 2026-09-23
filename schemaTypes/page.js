// page.js

export default {
  name: "page",
  title: "Page",
  type: "document",

  fields: [
    /* ================= BASIC INFO ================= */

    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required()
    },

    {
      name: "slug",
      title: "Page Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200
      },
      validation: (Rule) => Rule.required()
    },

    /* ================= NAVBAR CONTROL (FIXED 🔥) ================= */

    {
      name: "useCustomNavbar",
      title: "Use Custom Navbar for this Page?",
      type: "boolean",
      initialValue: false
    },

    {
      name: "customNavbar",
      title: "Select Custom Navbar",
      type: "reference",
      to: [{ type: "navigation" }], // ✅ FIXED HERE
      hidden: ({ parent }) => !parent?.useCustomNavbar
    },

    /* ================= EXISTING PAGE MENU (KEEP SAME) ================= */

    {
      name: "menuItems",
      title: "Page Menu (Optional)",
      type: "array",
      of: [
        {
          name: "menuItem",
          title: "Menu Item",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Menu Label",
              type: "string"
            },
            {
              name: "link",
              title: "Link (URL or Slug)",
              type: "string",
              description: "Example: /institutions/engineering"
            },

            /* 🔥 DROPDOWN SUPPORT */
            {
              name: "children",
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  name: "childItem",
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Child Label",
                      type: "string"
                    },
                    {
                      name: "link",
                      title: "Child Link",
                      type: "string",
                      description: "Example: /institutions/arts"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* ================= PAGE CONTENT ================= */

    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        {
          name: "heroSection",
          title: "Hero Section",
          type: "reference",
          to: [{ type: "hero" }]
        },
        {
          name: "aboutSection",
          title: "About Section",
          type: "reference",
          to: [{ type: "about" }]
        },
        {
          name: "servicesSection",
          title: "Services Section",
          type: "reference",
          to: [{ type: "services" }]
        },
        {
          name: "portfolioSection",
          title: "Portfolio Section",
          type: "reference",
          to: [{ type: "portfolio" }]
        },
        {
          name: "contactSection",
          title: "Contact Section",
          type: "reference",
          to: [{ type: "contact" }]
        },
        {
          name: "customSectionRef",
          title: "Custom Section",
          type: "reference",
          to: [{ type: "customSection" }]
        },
        {
          name: "footerSection",
          title: "Footer",
          type: "reference",
          to: [{ type: "footer" }]
        }
      ]
    }
  ]
};