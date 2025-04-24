import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function Card({
  photo,
  title,
  description,
}: {
  photo: StaticImport
  title: string
  description: string
}) {
  return (
    <div className='relative'>
      <Image src={photo} alt='photo' className='w-full' />

      <header className='text-center absolute bottom-0 bg-[radial-gradient(green,transparent)] text-base-100 py-7 w-full'>
        <h2 className='text-4xl md:text-7xl'>{title}</h2>
        <p className='text-xl md:text-5xl'>{description}</p>
      </header>
    </div>
  )
}
