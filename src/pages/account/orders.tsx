import AccountLayout from "@modules/account/templates/account-layout"
import OrdersTemplate from "@modules/account/templates/orders-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"
import { LanguageSelected } from "utils/language"

const Orders: NextPageWithLayout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.account.orders.title} description={t.account.orders.description} />
      <OrdersTemplate />
    </>
  )
}

Orders.getLayout = (page) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Orders
