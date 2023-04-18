import { LineItem, Region } from "@medusajs/medusa"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"
import { LanguageSelected } from "utils/language"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  const { cart } = LanguageSelected()

  return (
    <div>
      <div className="border-b border-gray-200 pb-3 flex items-center">
        <h1 className="text-xl-semi">{cart.templates.shoppingBag}</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-8 py-8">
        {items && region
          ? items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => {
                return <Item key={item.id} item={item} region={region} />
              })
          : Array.from(Array(5).keys()).map((i) => {
              return <SkeletonLineItem key={i} />
            })}
      </div>
    </div>
  )
}

export default ItemsTemplate
