import { LanguageSelected } from "utils/language"
import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  const { account } = LanguageSelected()

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">{account.ordersTemplate.orders}</h1>
        <p className="text-base-regular">
          {account.ordersTemplate.viewYourOrdersSatatus}
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
