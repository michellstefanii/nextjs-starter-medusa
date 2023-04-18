import NativeSelect, {
  NativeSelectProps,
} from "@modules/common/components/native-select"
import { useCart, useRegions } from "medusa-react"
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react"
import { LanguageSelected } from "utils/language"

const CountrySelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ placeholder, ...props }, ref) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    const { checkout } = LanguageSelected()
    const placeholderT = placeholder ?? checkout.countrySelect.country

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    const { regions } = useRegions()
    const { cart } = useCart()

    const countryOptions = useMemo(() => {
      const currentRegion = regions?.find((r) => r.id === cart?.region_id)

      if (!currentRegion) {
        return []
      }

      return currentRegion.countries.map((country) => ({
        value: country.iso_2,
        label: country.display_name,
      }))
    }, [regions, cart])

    return (
      <NativeSelect ref={innerRef} placeholder={placeholderT} {...props}>
        {countryOptions.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>
    )
  }
)

CountrySelect.displayName = "CountrySelect"

export default CountrySelect
