import CartTemplate from "@modules/cart/templates"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { LanguageSelected } from "utils/language"

const Cart: NextPageWithLayout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.cart.title} description={t.cart.description} />
      <CartTemplate />
    </>
  )
}

Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Cart
