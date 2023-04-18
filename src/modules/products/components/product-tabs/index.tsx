import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import { useMemo } from "react"
import { LanguageSelected } from "utils/language"

type ProductTabsProps = {
  product: Product
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const { products } = LanguageSelected()

  const tabs = useMemo(() => {
    return [
      {
        label: products.productTabs.productInformation,
        component: <ProductInfoTab product={product} />,
      },
      {
        label: products.productTabs.shippingReturns,
        component: <ShippingInfoTab />,
      },
    ]
  }, [product])

  return (
    <div>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-2">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-left uppercase text-small-regular pb-2 -mb-px border-b border-gray-200 transition-color duration-150 ease-in-out",
                    {
                      "border-b border-gray-900": selected,
                    }
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const { products } = LanguageSelected()

  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">{products.productTabs.material}</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{products.productTabs.countryOfOrigin}</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{products.productTabs.type}</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">{products.productTabs.weight}</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{products.productTabs.dimensions}</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}${products.productTabs.lengthAbbreviation} x ${product.width}${products.productTabs.widthAbbreviation} x ${product.height}${products.productTabs.heightAbbreviation}`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags.length ? (
        <div>
          <span className="font-semibold">{products.productTabs.tags}</span>
        </div>
      ) : null}
    </Tab.Panel>
  )
}

const ShippingInfoTab = () => {
  const { products } = LanguageSelected()

  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">{products.productTabs.fastDelivery}</span>
            <p className="max-w-sm">
              {products.productTabs.yourPackage}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">{products.productTabs.simpleExchanges}</span>
            <p className="max-w-sm">
              {products.productTabs.isTheFitQuiteRight}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">{products.productTabs.easyReturns}</span>
            <p className="max-w-sm">
              {products.productTabs.justReturnYourProduct}
            </p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  )
}

export default ProductTabs
