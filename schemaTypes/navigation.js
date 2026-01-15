export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Navbar Title (Name)",
      type: "string",
      description: "Example: Pavitra G V.",
    },
    {
      name: "backgroundColor",
      title: "Navbar Background (Color / Gradient)",
      type: "string",
      description: "Example: #000000 or linear-gradient(...)",
    },
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
            },
            {
              name: "order",
              title: "Order",
              type: "number",
            },
            {
              name: "show",
              title: "Show",
              type: "boolean",
              initialValue: true,
            },
          ],
        },
      ],
    },
  ],
};
