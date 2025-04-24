import { BsWhatsapp } from 'react-icons/bs'

export default function PopupCardCarousel() {
  return (
    <div className='absolute flex flex-col items-center gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 w-fit h-fit'>
      <h1 className='md:text-2xl bg-base-300 w-fit px-4 md:px-10 py-2 rounded-lg'>
        أكادمية القرآن المنير
      </h1>
      <p className='text-white text-xl md:text-4xl bg-[#2f7a2f] px-4 md:px-10 py-2 rounded-lg'>
        احصل على حلقة مجانا
      </p>

      <a
        rel='noopener'
        target='_blank'
        href='https://wa.me/201128767990?text=Freetrail'
        className='btn px-4 md:px-10 py-2 rounded-lg'
      >
        <BsWhatsapp />
        احجز الآن
      </a>
    </div>
  )
}
