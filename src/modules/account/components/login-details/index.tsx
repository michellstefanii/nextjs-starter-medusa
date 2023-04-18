import { Customer } from "@medusajs/medusa"
import React from "react"
import Detail from "../detail-container"
import EditEmailModal from "./edit-email-modal"
import EditPasswordModal from "./edit-password-modal"
import { LanguageSelected } from "utils/language"

type LoginDetailsProps = {
  customer: Omit<Customer, "password_hash">
}

const LoginDetails: React.FC<LoginDetailsProps> = ({ customer }) => {
  const { account } = LanguageSelected()

  return (
    <Detail title="Login">
      <div className="flex flex-col gap-y-4">
        <Detail.SubDetail title={account.loginDetails.email}>
          <span>{customer.email}</span>
          <EditEmailModal customer={customer} />
        </Detail.SubDetail>
        <Detail.SubDetail title={account.loginDetails.password}>
          <span>•••••••••••</span>
          <EditPasswordModal customer={customer} />
        </Detail.SubDetail>
      </div>
    </Detail>
  )
}

export default LoginDetails
