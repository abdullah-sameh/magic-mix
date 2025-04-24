import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import photo1 from '@/public/carousel/photo1.jpeg'

export default function About() {
  return (
    <div id='about' className='grid md:grid-cols-2 p-10 gap-5 bg-base-200 my-5'>
      <div className='left'>
        <SectionHeader text='من نحن' brief='' />

        <div className='flex flex-col gap-5'>
          <p className='bg-base-100 text-xl md:text-3xl p-5 rounded-lg'>
            أكاديمية مُتخصصة فى تعليم القرآن الكريم والعلوم الإسلامية الشرعية
            والعربية وذلك للناطقين وغير الناطقين بها وتهتم الأكاديمية بضمان
            توفير حياة إسلامية شاملة لجميع المُلتحقين بها.
          </p>
          <p className='bg-base-100 text-xl md:text-3xl p-5 rounded-lg'>
            مُهمتنا هي تثقيف العالم حول القرآن واللغة العربية والدراسات
            الإسلامية عبر الإنترنت ونريد إنتاج محتوى ممتع وجذاب للأطفال والكبار.
            نريد الاستمتاع بينما نتعلم.
          </p>
        </div>
      </div>

      <div className='right'>
        <Image src={photo1} alt='img1' className='w-full' />
      </div>
    </div>
  )
}
