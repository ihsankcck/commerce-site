import { getStrapiMedia } from "../utils/medias"
import NextImage from "next/image"

const Image = (props) => {
  if (!props.media) {
    return null
  }

  const { url, width, height, alternativeText } = props.media.data.attributes

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <NextImage
      loader={loader}
      layout="responsive"
      objectFit="contain"
      width={width}
      height={height}
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
