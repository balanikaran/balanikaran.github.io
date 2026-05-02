const imageModules = import.meta.glob(
  "../images/*.{png,jpg,jpeg,webp,avif,svg}",
  {
    eager: true,
    import: "default",
  },
)

export const getImage = (filename, fallback = "placeholder.png") =>
  imageModules[`../images/${filename}`] ?? imageModules[`../images/${fallback}`]
