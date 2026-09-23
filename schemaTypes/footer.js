export default {
  name: "footer",
  title: "Footer",
  type: "document",

  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "company",
      title: "Company",
    },
    {
      name: "quicklinks",
      title: "Quick Links",
    },
    {
      name: "contact",
      title: "Contact",
    },
    {
      name: "social",
      title: "Social Media",
    },
    {
      name: "newsletter",
      title: "Newsletter",
    },
    {
      name: "style",
      title: "Style",
    },
  ],

  fields: [

    /* ==========================================================
       GENERAL
    ========================================================== */

    {
      name: "showFooter",
      title: "Show Footer",
      type: "boolean",
      initialValue: true,
      group: "general",
    },

    {
      name: "layout",
      title: "Footer Layout",
      type: "string",
      group: "general",
      options: {
        list: [
          { title: "2 Columns", value: "two" },
          { title: "3 Columns", value: "three" },
          { title: "4 Columns", value: "four" },
        ],
        layout: "radio",
      },
      initialValue: "four",
    },

    /* ==========================================================
       COMPANY
    ========================================================== */

    {
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "company",
    },

    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      group: "company",
    },

    {
      name: "companyDescription",
      title: "Company Description",
      type: "array",
      of: [{ type: "block" }],
      group: "company",
    },

    /* ==========================================================
       QUICK LINKS
    ========================================================== */

    {
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      group: "quicklinks",

      of: [
        {
          type: "object",

          fields: [

            {
              name: "title",
              title: "Title",
              type: "string",
            },

            {
              name: "link",
              title: "Link",
              type: "string",
              description: "Example: /about or #contact",
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

    /* ==========================================================
       CONTACT INFORMATION
    ========================================================== */

    {
      name: "contactItems",
      title: "Contact Information",
      type: "array",
      group: "contact",

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
              name: "value",
              title: "Value",
              type: "string",
            },

            {
              name: "link",
              title: "Optional Link",
              type: "string",
            },

          ],
        },
      ],
    },

    /* ==========================================================
       SOCIAL LINKS
    ========================================================== */

    {
      name: "socialLinks",
      title: "Social Media",
      type: "array",
      group: "social",

      of: [
        {
          type: "object",

          fields: [

            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  "Facebook",
                  "Instagram",
                  "LinkedIn",
                  "YouTube",
                  "Twitter",
                  "WhatsApp",
                ],
              },
            },

            {
              name: "url",
              title: "URL",
              type: "url",
            },

          ],
        },
      ],
    },

    /* ==========================================================
       NEWSLETTER
    ========================================================== */

    {
      name: "showNewsletter",
      title: "Show Newsletter",
      type: "boolean",
      initialValue: true,
      group: "newsletter",
    },

    {
      name: "newsletterHeading",
      title: "Newsletter Heading",
      type: "string",
      hidden: ({document}) => !document?.showNewsletter,
      group: "newsletter",
    },

    {
      name: "newsletterDescription",
      title: "Newsletter Description",
      type: "text",
      hidden: ({document}) => !document?.showNewsletter,
      group: "newsletter",
    },

    {
      name: "placeholder",
      title: "Placeholder",
      type: "string",
      initialValue: "Enter your email",
      hidden: ({document}) => !document?.showNewsletter,
      group: "newsletter",
    },

    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Subscribe",
      hidden: ({document}) => !document?.showNewsletter,
      group: "newsletter",
    },
        /* ==========================================================
       FOOTER STYLE
    ========================================================== */

    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "#111111",
      group: "style",
    },

    {
      name: "textColor",
      title: "Text Color",
      type: "string",
      initialValue: "#D6D6D6",
      group: "style",
    },

    {
      name: "headingColor",
      title: "Heading Color",
      type: "string",
      initialValue: "#FFFFFF",
      group: "style",
    },

    {
      name: "linkColor",
      title: "Link Color",
      type: "string",
      initialValue: "#CCCCCC",
      group: "style",
    },

    {
      name: "linkHoverColor",
      title: "Link Hover Color",
      type: "string",
      initialValue: "#D4AF37",
      group: "style",
    },

    {
      name: "borderColor",
      title: "Border Color",
      type: "string",
      initialValue: "#2E2E2E",
      group: "style",
    },

    {
      name: "iconColor",
      title: "Icon Color",
      type: "string",
      initialValue: "#FFFFFF",
      group: "style",
    },

    {
      name: "iconHoverColor",
      title: "Icon Hover Color",
      type: "string",
      initialValue: "#D4AF37",
      group: "style",
    },

    {
      name: "buttonBackground",
      title: "Button Background",
      type: "string",
      initialValue: "#D4AF37",
      group: "style",
    },

    {
      name: "buttonTextColor",
      title: "Button Text Color",
      type: "string",
      initialValue: "#111111",
      group: "style",
    },

    {
      name: "inputBackground",
      title: "Input Background",
      type: "string",
      initialValue: "#1B1B1B",
      group: "style",
    },

    {
      name: "inputTextColor",
      title: "Input Text Color",
      type: "string",
      initialValue: "#FFFFFF",
      group: "style",
    },

    {
      name: "inputBorderColor",
      title: "Input Border Color",
      type: "string",
      initialValue: "#3A3A3A",
      group: "style",
    },

    /* ==========================================================
       COPYRIGHT
    ========================================================== */

    {
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      initialValue: "© 2026 TileLux. All Rights Reserved.",
      group: "general",
    },

    {
      name: "showBackToTop",
      title: "Show Back To Top Button",
      type: "boolean",
      initialValue: true,
      group: "general",
    },

    {
      name: "backToTopText",
      title: "Back To Top Tooltip",
      type: "string",
      initialValue: "Back to Top",
      hidden: ({ document }) => !document?.showBackToTop,
      group: "general",
    },

    /* ==========================================================
       SPACING
    ========================================================== */

    {
      name: "paddingTop",
      title: "Padding Top",
      type: "string",
      initialValue: "70px",
      group: "style",
    },

    {
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "string",
      initialValue: "30px",
      group: "style",
    },

    {
      name: "columnGap",
      title: "Column Gap",
      type: "string",
      initialValue: "40px",
      group: "style",
    },

    {
      name: "borderTop",
      title: "Show Top Border",
      type: "boolean",
      initialValue: true,
      group: "style",
    },

    {
      name: "shadow",
      title: "Enable Shadow",
      type: "boolean",
      initialValue: false,
      group: "style",
    }

  ],

  preview: {
    select: {
      title: "companyName",
      media: "logo",
    },

    prepare({ title, media }) {
      return {
        title: title || "Footer",
        subtitle: "Website Footer",
        media,
      };
    },
  },
};