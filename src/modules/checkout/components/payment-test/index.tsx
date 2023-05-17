import Alert from "@modules/common/icons/alert"
import { LanguageSelected } from "utils/language"

const PaymentTest = () => {
  const { checkout } = LanguageSelected()
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 bg-yellow-100 w-full p-2">
        <Alert size={16} className="text-yellow-700" />
        <span className="text-small-regular text-yellow-700">
          <span className="font-semibold">{checkout.attention}:</span> {checkout.forTestingPurposesOnly}
        </span>
      </div>
    </div>
  )
}

export default PaymentTest
