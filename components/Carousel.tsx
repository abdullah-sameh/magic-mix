import Image from 'next/image'
import photo1 from '../public/carousel/photo1.jpeg'
import photo2 from '../public/carousel/photo2.jpeg'
import photo3 from '../public/carousel/photo3.jpeg'
import photo4 from '../public/carousel/photo4.jpeg'

export default function Carousel() {
  return (
    <div className='carousel w-full max-h-[600px]'>
      <div id='slide1' className='carousel-item relative w-full'>
        <Image alt='photo1' src={photo1} className='w-full object-cover' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide3'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❮
          </a>
          <a
            href='#slide2'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <Image alt='photo2' src={photo2} className='w-full object-cover' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide1'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❮
          </a>
          <a
            href='#slide3'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <Image alt='photo' src={photo3} className='w-full object-cover' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide2'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❮
          </a>
          <a
            href='#slide4'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <Image alt='photo' src={photo4} className='w-full object-cover' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide3'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❮
          </a>
          <a
            href='#slide1'
            className='btn btn-circle btn-sm lg:btn-md  btn-primary text-white'
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}
