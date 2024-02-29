import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
      {
          name: "title",
          title: "Title",
          description:"Title of skill",
          type: "string",
      },
      {
          name: "progress",
          title: "Progress",
          type: "string",
      },
      {
          name: "image",
          title: "Image",
          type: "image",
          options: {hotspot:true}
      },
      

  ]
 
})
