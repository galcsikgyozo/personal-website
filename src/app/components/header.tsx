import HeaderLogo from '@/app/components/ui/header-logo'
import GetInTouchButton from '@/app/components/ui/get-in-touch-button'

const Header: React.FC = () => {
  return (
    <header className="px-container fixed left-0 top-0 z-50 flex w-full items-center justify-between @sm:py-4 @md:py-5 @lg:px-12 @lg:py-6">
      <HeaderLogo />
      <GetInTouchButton />
    </header>
  )
}

export default Header
