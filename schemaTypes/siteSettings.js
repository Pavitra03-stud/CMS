export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    /* 🌈 GLOBAL BACKGROUND */
    {
      name: "backgroundColor",
      title: "Site Background Color",
      type: "string",
      description: "Enter HEX color (example: #0f172a)",
      initialValue: "#0f172a"
    },

    /* 📝 GLOBAL PLACEHOLDERS */
    {
      name: "placeholders",
      title: "Form Placeholders",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name Placeholder",
          type: "string",
          initialValue: "Enter your name"
        },
        {
          name: "email",
          title: "Email Placeholder",
          type: "string",
          initialValue: "Enter your email"
        },
        {
          name: "message",
          title: "Message Placeholder",
          type: "string",
          initialValue: "Write your message..."
        }
      ]
    }
  ]
};