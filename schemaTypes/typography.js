export default {
  name: "typography",
  title: "Typography Settings",
  type: "object",
  fields: [
    /* ================= FONT FAMILY ================= */
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

    /* ================= FONT SIZE ================= */
    {
      name: "fontSize",
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

    /* ================= FONT WEIGHT ================= */
    {
      name: "fontWeight",
      title: "Font Weight",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "300" },
          { title: "Regular", value: "400" },
          { title: "Medium", value: "500" },
          { title: "Semi Bold", value: "600" },
          { title: "Bold", value: "700" }
        ]
      }
    },

    /* ================= FONT STYLE ================= */
    {
      name: "fontStyle",
      title: "Font Style",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Italic", value: "italic" }
        ],
        layout: "radio"
      }
    },

    /* ================= LETTER SPACING ================= */
    {
      name: "letterSpacing",
      title: "Letter Spacing",
      type: "string",
      options: {
        list: [
          { title: "Tight (-0.5px)", value: "-0.5px" },
          { title: "Normal (0px)", value: "0px" },
          { title: "Wide (1px)", value: "1px" },
          { title: "Extra Wide (2px)", value: "2px" }
        ]
      }
    },

    /* ================= LINE HEIGHT ================= */
    {
      name: "lineHeight",
      title: "Line Height",
      type: "string",
      options: {
        list: [
          { title: "Compact (1.4)", value: "1.4" },
          { title: "Normal (1.6)", value: "1.6" },
          { title: "Relaxed (1.8)", value: "1.8" }
        ]
      }
    },

    /* ================= COLORS ================= */
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

    /* ================= TEXT TRANSFORM ================= */
    {
      name: "textTransform",
      title: "Text Transform",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "none" },
          { title: "Uppercase", value: "uppercase" },
          { title: "Capitalize", value: "capitalize" }
        ]
      }
    }
  ]
};
