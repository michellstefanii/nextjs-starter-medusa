import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { LanguageSelected } from "utils/language"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()
  const { account } = LanguageSelected()

  const handleError = (e: Error) => {
    setAuthError(account.register.errorTryAgain)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">{account.register.becomeMember}</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        {account.register.createYourMemberProfile}
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label={account.register.form.firstName}
            {...register("first_name", { required: account.register.form.firstNameReq })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label={account.register.form.lastName}
            {...register("last_name", { required: account.register.form.lastNameReq })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label={account.register.form.email}
            {...register("email", { required: account.register.form.emailReq })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label={account.register.form.phone}
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label={account.register.form.password}
            {...register("password", {
              required: account.register.form.passwordReq,
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              {account.register.theseCredentialsNotMatch}
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          {account.register.accountCreateAgree}{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">{account.register.privacyPolicy}</a>
          </Link>{" "}
          {account.register.and}{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">{account.register.termsOfUse}</a>
          </Link>
          .
        </span>
        <Button className="mt-6">{account.register.join}</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        {account.register.alreadyMember}{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          {account.register.signIn}
        </button>
        .
      </span>
    </div>
  )
}

export default Register
