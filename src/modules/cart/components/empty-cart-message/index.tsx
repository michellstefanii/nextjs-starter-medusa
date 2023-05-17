import UnderlineLink from "@modules/common/components/underline-link"
import { LanguageSelected } from "utils/language"

const EmptyCartMessage = () => {
  const { cart } = LanguageSelected()

  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">{cart.bagEmpty}</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        {cart.youDontHaveAnything}
      </p>
      <div>
        <UnderlineLink href="/store">{cart.exploreProducts}</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
