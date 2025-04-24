import SectionHeader from '@/components/SectionHeader'
import Card, { CardProps } from './Card'
import { promises as fs } from 'fs'
import serviceImg1 from '@/public/services/tagweed.jpeg'
import serviceImg2 from '@/public/services/learning.jpeg'
import serviceImg3 from '@/public/services/readingAndWrighting.jpeg'
import serviceImg4 from '@/public/services/arabic.jpeg'
import serviceImg5 from '@/public/services/reading.jpeg'
import serviceImg6 from '@/public/services/tafseer.jpeg'

const serviceImgs = [
  serviceImg1,
  serviceImg2,
  serviceImg3,
  serviceImg4,
  serviceImg5,
  serviceImg6,
]

export default async function Services() {
  const res = await fs.readFile(process.cwd() + '/public/data.json', 'utf8')
  const data: CardProps[] = JSON.parse(res).services

  return (
    <div id='services'>
      <SectionHeader
        text='خدماتنا'
        brief='نمتلك خبرة طويلة في مجالنا، ولذلك نستطيع تقديم خدمات متميّزة لك.'
      />

      <div className='mt-3 grid md:grid-cols-3 px-4 gap-4'>
        {data?.map((service, i) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            photo={serviceImgs[i]}
          />
        ))}
      </div>
    </div>
  )
}
