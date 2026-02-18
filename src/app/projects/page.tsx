import Hero from '@/components/Projects/Hero'
import Latest from '@/components/Projects/Latest/Latest'
import Portfolio from '@/components/Projects/Portfolio/Portfolio'
import Progress from '@/components/Projects/Progress/Progress'

const page = () => {
  return (
    <div>
      <Hero />
      <Progress />
      <Latest />
      <Portfolio />
    </div>
  )
}

export default page