'use client'

import Anchor from '@/app/utils/link'

const HeaderLogo: React.FC = () => {
  return (
    <Anchor href="#document" aria-label="Scroll to top">
      <svg
        className="aspect-[448/512] text-primary @sm:h-12 @md:h-14 @lg:h-16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 124l212 121 213-121-116-68-48 28 67 40-116 65-117-65 164-96-47-28L12 124zM1 384l223 128 223-128V235L224 362v55l176-101v40L224 457 48 357V222l176 100 223-127v-55L224 268 1 140v244z"
          clipRule="evenodd"
        />
      </svg>
    </Anchor>
  )
}

export default HeaderLogo
