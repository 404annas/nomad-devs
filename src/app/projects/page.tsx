import Hero from '@/components/Projects/Hero'
import Latest from '@/components/Projects/Latest/Latest'
import Portfolio from '@/components/Projects/Portfolio/Portfolio'
import Progress from '@/components/Projects/Progress/Progress'
import ContactForm from '@/components/Private/ContactForm' // Naya component import kiya

const page = () => {
  return (
    <div>
      <Hero />
      <Progress />
      <Latest />
      <Portfolio />
      <ContactForm /> {/* Yahan add kar diya */}
    </div>
  )
}

export default page
