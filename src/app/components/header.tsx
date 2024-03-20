import Anchor from '@/app/utils/link'

const Header: React.FC = () => {
  return (
    <header className="px-container fixed left-0 top-0 z-50 flex w-full items-center justify-between @sm:py-4 @md:py-5 @lg:px-12 @lg:py-6">
      <Anchor href="#document" aria-label="Scroll to top" className="">
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
      <Anchor
        href="#contact"
        className="button button-primary @sm:px-6 @sm:py-3 @sm:text-base @md:px-8 @md:py-4 @md:text-lg @lg:px-8 @lg:py-4 @lg:text-lg"
      >
        Get in touch
      </Anchor>
    </header>
  )
}

export default Header
