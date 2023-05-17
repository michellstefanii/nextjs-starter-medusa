import { Customer, Order } from "@medusajs/medusa"
import ChevronDown from "@modules/common/icons/chevron-down"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import User from "@modules/common/icons/user"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { LanguageSelected } from "utils/language"

type OverviewProps = {
  orders?: Order[]
  customer?: Omit<Customer, "password_hash">
}

const Overview = ({ orders, customer }: OverviewProps) => {
  const { account } = LanguageSelected()

  return (
    <div>
      <div className="small:hidden">
        <div className="text-xl-semi mb-4 px-8">
          {`${account.overview.hello} ${customer?.first_name}`}
        </div>
        <div className="text-base-regular">
          <ul>
            <li>
              <Link href="/account/profile">
                <a className="flex items-center justify-between py-4 border-b border-gray-200 px-8">
                  <div className="flex items-center gap-x-2">
                    <User size={16} />
                    <span>{account.overview.profile}</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/addresses">
                <a className="flex items-center justify-between py-4 border-b border-gray-200 px-8">
                  <div className="flex items-center gap-x-2">
                    <MapPin size={16} />
                    <span>{account.overview.addresses}</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/orders">
                <a className="flex items-center justify-between py-4 border-b border-gray-200 px-8">
                  <div className="flex items-center gap-x-2">
                    <Package size={16} />
                    <span>{account.overview.orders}</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden small:block">
        <div className="text-xl-semi flex justify-between items-start mb-4">
          <span>{`${account.overview.hello} ${customer?.first_name}`}</span>
          <span className="text-small-regular text-gray-700">
            {account.overview.signedInAs}{" "}
            <span className="font-semibold">{customer?.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">{account.overview.profile}</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    {account.overview.completed}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">{account.overview.addresses}</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    {account.overview.saved}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-large-semi">{account.overview.recentOrders}</h3>
              </div>
              <ul className="flex flex-col gap-y-4">
                {orders ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li key={order.id}>
                        <Link href={`/order/details/${order.id}`}>
                          <a>
                            <div className="bg-gray-50 flex justify-between items-center p-4">
                              <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
                                <span className="font-semibold">
                                  {account.overview.datePlaced}
                                </span>
                                <span className="font-semibold">
                                  {account.overview.orderNumber}
                                </span>
                                <span className="font-semibold">
                                  {account.overview.totalAmount}
                                </span>
                                <span>
                                  {new Date(order.created_at).toDateString()}
                                </span>
                                <span>#{order.display_id}</span>
                                <span>
                                  {formatAmount({
                                    amount: order.total,
                                    region: order.region,
                                    includeTaxes: false,
                                  })}
                                </span>
                              </div>
                              <button
                                className="flex items-center justify-between"
                                onClick={close}
                              >
                                <span className="sr-only">
                                  {`${account.overview.goToOrder} #${order.display_id}`}
                                </span>
                                <ChevronDown className="-rotate-90" />
                              </button>
                            </div>
                          </a>
                        </Link>
                      </li>
                    )
                  })
                ) : (
                  <span>{account.overview.noRecentOrders}</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer?: Omit<Customer, "password_hash">) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
