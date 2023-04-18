import { medusaClient } from "@lib/config"
import { Customer } from "@medusajs/medusa"
import Input from "@modules/common/components/input"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import AccountInfo from "../account-info"
import { LanguageSelected } from "utils/language"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

type UpdateCustomerPasswordFormData = {
  old_password: string
  new_password: string
  confirm_password: string
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  )
  const { account } = LanguageSelected()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<UpdateCustomerPasswordFormData>()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset()
  }, [customer, reset])

  const updatePassword = async (data: UpdateCustomerPasswordFormData) => {
    const isValid = await medusaClient.auth
      .authenticate({
        email: customer.email,
        password: data.old_password,
      })
      .then(() => true)
      .catch(() => false)

    if (!isValid) {
      setError("old_password", {
        type: "validate",
        message: account.profilePassword.oldPasswordIncorrect,
      })
      setErrorMessage(account.profilePassword.oldPasswordIncorrect)

      return
    }

    if (data.new_password !== data.confirm_password) {
      setError("confirm_password", {
        type: "validate",
        message: account.profilePassword.passwordsNotMatch,
      })
      setErrorMessage(account.profilePassword.passwordsNotMatch)

      return
    }

    return update({
      id: customer.id,
      password: data.new_password,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(updatePassword)}
      onReset={() => reset()}
      className="w-full"
    >
      <AccountInfo
        label={account.profilePassword.form.password}
        currentInfo={
          <span>{account.profilePassword.form.passwordSecurityReasons}</span>
        }
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label={account.profilePassword.form.oldPassword}
            {...register("old_password", {
              required: true,
            })}
            type="password"
            errors={errors}
          />
          <Input
            label={account.profilePassword.form.newPassword}
            type="password"
            {...register("new_password", { required: true })}
            errors={errors}
          />
          <Input
            label={account.profilePassword.form.confirmPassword}
            type="password"
            {...register("confirm_password", { required: true })}
            errors={errors}
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileName
