import Carousel from '@/components/Carousel'
import Nav from '@/components/MainNav/Nav'
import PopupCardCarousel from '@/components/PopupCardCarousel'
import Offers from '@/sections/Offers/page'
import About from '@/sections/about/page'
import Packages from '@/sections/packages/page'
import Services from '@/sections/services/page'
import { FaArrowUp, FaHandPointRight } from 'react-icons/fa6'

export default function Home() {
  return (
    <main dir='rtl' id='main' className='relative'>
      <Nav />
      <div className='my-20'></div>

      <div className='container'>
        <div className='relative'>
          <PopupCardCarousel />
          <Carousel />
        </div>

        <Services />

        <Packages />

        <Offers />

        <About />

        <div className='flex justify-center'>
          <a
            href='https://wa.me/201128767990?text=Freetrail'
            target='_blank'
            rel='noopener'
            className='btn btn-lg btn-primary btn-outline'
          >
            <span>احصل على حلقة مجانية الآن</span>
            <FaHandPointRight />
          </a>
        </div>
      </div>

      <footer className='footer mt-5 items-center p-4 bg-neutral text-neutral-content'>
        <div className='container flex flex-col md:flex-row justify-between text-2xl'>
          <aside className='items-center grid-flow-col'>
            <p>جميع الحقوق محفوظة لدى موقعنا</p>
          </aside>
          <nav className='grid-flow-col'>
            <p>تم التصميم والتطوير بواسطة</p>
          </nav>
        </div>
      </footer>

      {/* up button */}
      <a
        href='#main'
        className='fixed right-5 bottom-5 text-white btn btn-success'
      >
        <FaArrowUp />
      </a>
    </main>
  )
}
