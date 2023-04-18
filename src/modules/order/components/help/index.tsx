import Link from "next/link"
import React from "react"
import { LanguageSelected } from "utils/language"

const Help = () => {
  const { order } = LanguageSelected()

  return (
    <div>
      <h2 className="text-base-semi">{order.help.needHelp}</h2>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <Link href="/contact">
              <a>{order.help.contact}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>{order.help.returnsExchanges}</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
