export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function getCategories() {
  const categories = await fetchAPI("/categories?populate=*")
  return categories.data
}

export async function getCategory(slug) {
  const categories = await fetchAPI(
    `/categories?populate[products][populate]=*&filters[slug][$eq]=${slug}`
  )
  return categories?.data?.[0]
}

export async function getProducts() {
  const products = await fetchAPI("/products?populate=*")
  return products.data
}

export async function getProduct(slug) {
  const products = await fetchAPI(
    `/products?filters[slug[$eq]=${slug}&populate=image`
  )
  return products?.data?.[0]
}