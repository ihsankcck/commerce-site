export function getStrapiMedia(url) {
  if (url == null) {
    return null
  }

  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }

  return `${
    process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL ||
    "https://cms.gallant-wiles.37-140-242-109.plesk.page"
  }${url}`
}
