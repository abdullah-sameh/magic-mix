import SectionHeader from '@/components/SectionHeader'
import { FaRegHandPointRight } from 'react-icons/fa6'
import Card from './Card'

const content = [
  'حصة فردية',
  'أحكام التجويد',
  '30 دقيقة',
  'نشاط تفاعلي',
  'تفسير بعض الكلمات',
]

export default function Packages() {
  return (
    <div id='packages'>
      <SectionHeader
        text='أنظمة الأكادمية'
        brief='احجز العرض المناسب لك بأفضل الأسعار'
      />

      <div className='grid md:grid-cols-[repeat(3,minmax(0,400px))] justify-center gap-4 py-5'>
        <Card
          index={0}
          headerText='حصة أسبوعياً'
          price={60}
          entities={content}
        />
        <Card
          index={1}
          headerText='حصتين أسبوعياً'
          price={120}
          entities={content}
        />
        <Card
          index={2}
          headerText='ثلاث حصص أسبوعياً'
          price={180}
          entities={content}
        />
      </div>
    </div>
  )
}
