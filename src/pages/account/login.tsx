import LoginTemplate from "@modules/account/templates/login-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"
import { LanguageSelected } from "utils/language"

const Login: NextPageWithLayout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.account.login.title} description={t.account.login.description} />
      <LoginTemplate />
    </>
  )
}

Login.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Login
