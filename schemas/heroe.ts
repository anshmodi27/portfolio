import { FaCamera } from "react-icons/fa";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "photos",
  title: "Photos",
  type: "document",
  icon: FaCamera,
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
    defineField({
      name: "src",
      title: "Image Source",
      type: "url",
    }),
  ],
});
