import { useAccount } from "@lib/context/account-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import { emailRegex } from "@lib/util/regex"
import { Customer } from "@medusajs/medusa"
import EditButton from "@modules/account/components/edit-button"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import Spinner from "@modules/common/icons/spinner"
import { useUpdateMe } from "medusa-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { LanguageSelected } from "utils/language"

type EditEmailModalProps = {
  customer: Omit<Customer, "password_hash">
}

type FormValues = {
  email: string
}

const EditEmailModal: React.FC<EditEmailModalProps> = ({ customer }) => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const { account } = LanguageSelected()

  const { mutate } = useUpdateMe()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: customer.email,
    },
  })

  const { refetchCustomer } = useAccount()

  const submit = handleSubmit((data) => {
    setSubmitting(true)
    setError(undefined)

    if (data.email === customer.email) {
      setSubmitting(false)
      setError(account.loginDetails.editEmail.mustNewEmail)
      return
    }

    mutate(
      { id: customer.id, ...data },
      {
        onSuccess: () => {
          setSubmitting(false)
          refetchCustomer()
          close()
        },
        onError: () => {
          setSubmitting(false)
          setError(account.loginDetails.editEmail.unableUpdateEmail)
        },
      }
    )
  })

  return (
    <div>
      <EditButton onClick={open} />
      <Modal isOpen={state} close={close}>
        <Modal.Title>{account.loginDetails.editEmail.editYourEmail}</Modal.Title>
        <Modal.Body>
          <div className="flex flex-col w-full">
            <Input
              label={account.loginDetails.editEmail.form.email}
              {...register("email", {
                required: account.loginDetails.editEmail.form.emailReq,
                pattern: {
                  value: emailRegex,
                  message: account.loginDetails.editEmail.form.validMailReq,
                },
              })}
              errors={errors}
            />
          </div>
          {error && (
            <div className="text-rose-500 text-small-regular py-2">{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0"
            onClick={close}
          >
            {account.loginDetails.editEmail.cancel}
          </Button>
          <Button className="min-h-0" onClick={submit} disabled={submitting}>
            {account.loginDetails.editEmail.save}
            {submitting && <Spinner />}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditEmailModal
