import Button from "@modules/common/components/button"
import Link from "next/link"
import { LanguageSelected } from "utils/language"

const SignInPrompt = () => {
  const { cart } = LanguageSelected()

  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">{cart.signInPrompt.alreadyHaveAccount}</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          {cart.signInPrompt.signInBetterExpirience}
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">{cart.signInPrompt.signIn}</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
