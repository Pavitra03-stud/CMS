export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "typography",
      title: "Global Typography",
      type: "object",
      fields: [
        {
          name: "fontFamily",
          title: "Font Family",
          type: "string",
          options: {
            list: [
              { title: "Poppins", value: "'Poppins', sans-serif" },
              { title: "Inter", value: "'Inter', sans-serif" },
              { title: "Montserrat", value: "'Montserrat', sans-serif" }
            ]
          }
        },
        {
          name: "baseFontSize",
          title: "Base Font Size",
          type: "string",
          options: {
            list: [
              { title: "Small (14px)", value: "14px" },
              { title: "Medium (16px)", value: "16px" },
              { title: "Large (18px)", value: "18px" }
            ]
          }
        },
        {
          name: "headingColor",
          title: "Heading Color",
          type: "string"
        },
        {
          name: "textColor",
          title: "Text Color",
          type: "string"
        },
        {
          name: "accentColor",
          title: "Accent Color",
          type: "string"
        }
      ]
    },
    {
      name: "backgroundColor",
      title: "Site Background",
      type: "string"
    }
  ]
};
