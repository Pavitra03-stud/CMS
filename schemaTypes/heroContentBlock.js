export default {
  name: "heroContentBlock",
  title: "Hero Content Block",
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
          { title: "Statistics", value: "stats" },
        ],
        layout: "radio",
      },
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [richTextBlock()],
    },

    {
  name: "items",
  title: "Statistics",
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
          type: "string",
        },

        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }

      ]
    }
  ]
},

    {
      name: "x",
      title: "Left Position",
      type: "number",
      initialValue: 100,
    },

    {
      name: "y",
      title: "Top Position",
      type: "number",
      initialValue: 150,
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
      description: "rgba(0,0,0,.45)",
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
          { title: "None", value: "" },
          { title: "Fade", value: "fade" },
          { title: "Slide Left", value: "slide-left" },
          { title: "Slide Right", value: "slide-right" },
          { title: "Zoom", value: "zoom" },
        ],
      },
    },

  ],
};

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
      ],
    },
  };
}