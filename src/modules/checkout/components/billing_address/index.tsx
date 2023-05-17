import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"
import { LanguageSelected } from "utils/language"

const BillingAddress = () => {
  const { checkout } = LanguageSelected()

  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label={checkout.billingAddress.firstName}
              {...register("billing_address.first_name", {
                required: checkout.billingAddress.firstNameReq,
              })}
              autoComplete="given-name"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label={checkout.billingAddress.lastName}
              {...register("billing_address.last_name", {
                required: checkout.billingAddress.lastNameReq,
              })}
              autoComplete="family-name"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <Input
            label={checkout.billingAddress.company}
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label={checkout.billingAddress.address}
            {...register("billing_address.address_1", {
              required: checkout.billingAddress.addressReq,
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label={checkout.billingAddress.apartments}
            {...register("billing_address.address_2")}
            autoComplete="address-line2"
            errors={errors}
            touched={touchedFields}
          />
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <Input
              label={checkout.billingAddress.postalCode}
              {...register("billing_address.postal_code", {
                required: checkout.billingAddress.postalCodeReq,
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label={checkout.billingAddress.city}
              {...register("billing_address.city", {
                required: checkout.billingAddress.cityReq,
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <CountrySelect
            {...register("billing_address.country_code", {
              required: checkout.billingAddress.countryReq,
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label={checkout.billingAddress.state}
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label={checkout.billingAddress.phone}
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
