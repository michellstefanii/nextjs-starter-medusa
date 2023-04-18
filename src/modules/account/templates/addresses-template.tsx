import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"
import { LanguageSelected } from "utils/language"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()
  const { account } = LanguageSelected()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">{account.addressesTemplate.shippingAddress}</h1>
        <p className="text-base-regular">
          {account.addressesTemplate.viewUpdateShippingAddresses}
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
