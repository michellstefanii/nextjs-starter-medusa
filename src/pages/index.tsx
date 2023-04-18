import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { useRouter } from "next/router"
import { ReactElement, useEffect } from "react"
import { NextPageWithLayout } from "types/global"
import { DetectLanguage, LanguageSelected } from "utils/language"

const Home: NextPageWithLayout = () => {
  const t = LanguageSelected()
  const router = useRouter()

  useEffect(() => {
    DetectLanguage(router)
  }, [router])

  return (
    <>
      <Head
        title={t.index.title}
        description={t.index.description}
      />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
