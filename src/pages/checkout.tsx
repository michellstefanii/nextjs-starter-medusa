import CheckoutTemplate from "@modules/checkout/templates"
import Head from "@modules/common/components/head"
import { LanguageSelected } from "utils/language"

const Checkout = () => {
  const t = LanguageSelected()

  return (
    <>
      <Head title={t.checkout.title} />
      <CheckoutTemplate />
    </>
  )
}

export default Checkout
