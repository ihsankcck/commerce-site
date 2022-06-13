import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "../../components/ProductsList"
import { getCategories, getCategory } from "../../utils/api"

const CategoryPage = ({ category }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Katagori Yükleniyor</div>
  }

  return (
    <div>
      <Head>
        <title>{category.attributes.name} ürünler</title>
      </Head>
      <ProductsList products={category.attributes.products.data} />
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug)
  return { props: { category } }
}

// export async function getStaticPaths() {
//   const categories = await getCategories()
//   return {
//     paths: categories.map((_category) => {
//       return {
//         params: { slug: _category.attributes.slug },
//       }
//     }),
//     fallback: true,
//   }
// }
