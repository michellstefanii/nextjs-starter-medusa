import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import { LanguageSelected } from "utils/language"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  const { checkout } = LanguageSelected()

  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`${checkout.shippingAddress.hi} ${customer.first_name}, ${checkout.shippingAddress.wantSavedAdddresses}`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label={checkout.shippingAddress.form.email}
              {...register("email", {
                required: checkout.shippingAddress.form.emailReq,
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label={checkout.shippingAddress.form.firstName}
                {...register("shipping_address.first_name", {
                  required: checkout.shippingAddress.form.firstNameReq,
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label={checkout.shippingAddress.form.lastName}
                {...register("shipping_address.last_name", {
                  required: checkout.shippingAddress.form.lastNameReq,
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <Input
              label={checkout.shippingAddress.form.company}
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label={checkout.shippingAddress.form.address}
              {...register("shipping_address.address_1", {
                required: checkout.shippingAddress.form.addressReq,
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label={checkout.shippingAddress.form.apartments}
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-[122px_1fr] gap-x-2">
              <Input
                label={checkout.shippingAddress.form.postalCode}
                {...register("shipping_address.postal_code", {
                  required: checkout.shippingAddress.form.postalReq,
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label={checkout.shippingAddress.form.city}
                {...register("shipping_address.city", {
                  required: checkout.shippingAddress.form.cityReq,
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <CountrySelect
              {...register("shipping_address.country_code", {
                required: checkout.shippingAddress.form.countryReq,
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label={checkout.shippingAddress.form.state}
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label={checkout.shippingAddress.form.phone}
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
