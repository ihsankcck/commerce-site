import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { getCategories } from "../utils/api"
import "../styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout categories={pageProps.categories}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
        />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)

  const categories = await getCategories()

  return { ...appProps, pageProps: { categories, path: ctx.pathname } }
}

export default MyApp
