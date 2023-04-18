import React from "react"
import { LanguageSelected } from "utils/language"

const EditButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { account } = LanguageSelected()
  return (
    <div>
      <button
        className="underline text-small-regular text-gray-700 mt-2"
        {...props}
      >
        {account.edit}
      </button>
    </div>
  )
}

export default EditButton
