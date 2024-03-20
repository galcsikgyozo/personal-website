import Anchor from '@/app/utils/link'
import HeaderLogo from '@/app/components/ui/header-logo'

const Header: React.FC = () => {
  return (
    <header className="px-container fixed left-0 top-0 z-50 flex w-full items-center justify-between @sm:py-4 @md:py-5 @lg:px-12 @lg:py-6">
      <HeaderLogo />
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
