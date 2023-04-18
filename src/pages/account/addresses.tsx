import AccountLayout from "@modules/account/templates/account-layout"
import AddressesTemplate from "@modules/account/templates/addresses-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { LanguageSelected } from "utils/language"

const Addresses: NextPageWithLayout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.account.addresses.title} description={t.account.addresses.description} />
      <AddressesTemplate />
    </>
  )
}

Addresses.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Addresses
