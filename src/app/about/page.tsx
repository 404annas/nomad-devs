import Featured from '@/components/About/Featured'
import Founder from '@/components/About/Founder'
import Hero from '@/components/About/Hero'
import Importance from '@/components/About/Importance'
import Industry from '@/components/About/Industry'
import Simply from '@/components/About/Simply'
import Team from '@/components/About/Team'

const page = () => {
  return (
    <div>
      <Hero />
      <Importance />
      <Simply />
      <Founder />
      <Team />
      <Industry />
      <Featured />
    </div>
  )
}

export default page