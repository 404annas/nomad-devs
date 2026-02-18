import Broucher from '@/components/Private/Broucher'
import ContactForm from '@/components/Private/ContactForm'
import Hero from '@/components/Private/Hero'
import Service from '@/components/Private/Service'
import Speak from '@/components/Private/Speak'

const page = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Speak />
      <Broucher />
      <ContactForm />
    </div>
  )
}

export default page