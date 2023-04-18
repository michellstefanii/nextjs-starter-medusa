import AccountLayout from "@modules/account/templates/account-layout"
import ProfileTemplate from "@modules/account/templates/profile-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { LanguageSelected } from "utils/language"

const Profile: NextPageWithLayout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.account.profile.title} description={t.account.profile.description} />
      <ProfileTemplate />
    </>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Profile
