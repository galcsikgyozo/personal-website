import ContactCard from '@/app/components/ui/contact-card'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-container grid-base pt-0">
      <h3 className="h3 col-span-12 text-primary @sm:mb-8 @md:mb-12 @lg:mb-16 md:col-span-12 md:col-start-7 md:text-center">
        Got a project for me?
        <br />
        Wanna hire me?
        <br />
        Or just stalk?
      </h3>
      <div className="contact-card-wrapper gap-x-base col-span-12 grid grid-cols-1 @sm:gap-y-4 md:col-span-24 md:grid-cols-3">
        <ContactCard
          href="mailto:hello@gyozo.me"
          src="/images/icon-envelope.svg"
          alt="Email icon"
          label="Say hello in an email"
          title="hello@gyozo.me"
        />
        <ContactCard
          href="https://www.linkedin.com/in/galcsikgyozo"
          src="/images/icon-linkedin-in.svg"
          alt="LinkedIn icon"
          label="Let's connect on LinkedIn"
          title="/in/galcsikgyozo"
        />
        <ContactCard
          href="https://instagram.com/gyozogalcsik"
          src="/images/icon-instagram.svg"
          alt="Instagram icon"
          label="Follow me on Instagram"
          title="@gyozogalcsik"
        />
      </div>
    </section>
  )
}

export default Contact
