export default {
  name: 'mainImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: `Short description of the image used by screen readers and displayed when the image is not loaded. This is important for accessibility.`,
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
