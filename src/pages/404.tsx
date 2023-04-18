import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { LanguageSelected } from "utils/language"

const NotFound: NextPageWithLayout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.notFound.title} description={t.notFound.description} />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl-semi text-gry-900">{t.notFound.body.title}</h1>
        <p className="text-small-regular text-gray-700">
          {t.notFound.body.message}
        </p>
        <Link href="/">
          <a className="mt-4 underline text-base-regular text-gray-900">
            {t.notFound.body.button}
          </a>
        </Link>
      </div>
    </>
  )
}

NotFound.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default NotFound
