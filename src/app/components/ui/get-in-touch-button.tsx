'use client'

const GetInTouchButton: React.FC = () => {
  return (
    <button
      className="button button-primary @sm:px-6 @sm:py-3 @sm:text-base @md:px-8 @md:py-4 @md:text-lg @lg:px-8 @lg:py-4 @lg:text-lg"
      onClick={(event) => {
        event.preventDefault()
        document.getElementById('contact')?.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        })
      }}
    >
      Get in touch
    </button>
  )
}

export default GetInTouchButton
