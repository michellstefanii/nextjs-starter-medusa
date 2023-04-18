import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { LanguageSelected } from "utils/language"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()
  const { account } = LanguageSelected()

  const handleError = (_e: Error) => {
    setAuthError(account.login.invalidEmailOrPassword)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">{account.login.welcomeBack}</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        {account.login.signInExperience}
      </p>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label={account.login.form.email}
            {...register("email", { required: account.login.form.emailReq })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label={account.login.form.password}
            {...register("password", { required: account.login.form.passwordReq })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              {account.login.authError}
            </span>
          </div>
        )}
        <Button className="mt-6">{account.login.enter}</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        {account.login.notMember}{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          {account.login.joinUs}
        </button>
        .
      </span>
    </div>
  )
}

export default Login
