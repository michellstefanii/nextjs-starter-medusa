import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { LanguageSelected } from "utils/language"

const Hero = () => {
  const { home } = LanguageSelected()

  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          {home.hero.summerStylesFinally}
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          {home.hero.thisYearSummerCollection}
        </p>
        <UnderlineLink href="/store">{home.hero.exploreProducts}</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt={home.hero.photoAlt}
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
