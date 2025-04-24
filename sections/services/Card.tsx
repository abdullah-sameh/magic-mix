import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export interface CardProps {
  title: string
  description: string
  photo: StaticImport
}

export default function Card({ title, description, photo }: CardProps) {
  const descriptionElement = description.split('\n').map((desc, i) => (
    <p key={i} className='text-xl md:text-2xl'>
      {desc}
    </p>
  ))

  return (
    <div className='bg-base-300'>
      <Image className='w-full' src={photo} alt='photo1' />

      <div className='card-body p-5 flex flex-col text-center items-center'>
        <h4 className='text-3xl md:text-5xl  text-primary'>{title}</h4>
        {...descriptionElement}
        <a
          href='https://wa.me/201128767990?text=Freetrail'
          target='_blank'
          rel='noopener'
          className='btn btn-primary w-fit'
        >
          اشترك الآن
        </a>
      </div>
    </div>
  )
}
