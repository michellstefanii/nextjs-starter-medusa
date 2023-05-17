import NextHead from "next/head"
import React from "react"
import { LanguageSelected } from "utils/language"

type HeadProps = {
  title?: string
  description?: string | null
  image?: string | null
}

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  const { common } = LanguageSelected()

  return (
    <NextHead>
      <title>{title} | {common.head.titleDescription}</title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
