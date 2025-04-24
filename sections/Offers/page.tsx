import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import Card from './Card'
import photo1 from '@/public/carousel/photo1.jpeg'
import offer1 from '@/public/offers/offer1.jpg'
import offer2 from '@/public/offers/offer2.jpg'
import offer3 from '@/public/offers/offer3.jpg'
import offer4 from '@/public/offers/offer4.jpg'
import Image from 'next/image'

// const offers = [
//   { id: 1, title: 'ادفع إشتراك شهرين', description: 'واحصل على 6 حصص هدية' },
//   {
//     id: 2,
//     title: 'ادفع اشتراك 3 شهور',
//     description: 'واحصل على شهر هدية',
//   },
//   {
//     id: 3,
//     title: 'ادفع إشتراك 6 شهور',
//     description: 'واحصل على 3 شهور هدية',
//   },
//   { id: 4, title: 'ادفع اشتراك 12 شهر', description: 'واحصل على 4 شهور هدية' },
// ]

const imgs = [offer1, offer2, offer3, offer4]

export default function Offers() {
  return (
    <div id='offers' className='flex flex-col gap-5'>
      <SectionHeader text='أفضل العروض لدينا' brief='احجز العرض الأن' />

      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-5 px-4'>
        {imgs.map((offer, i) => {
          return (
            <div key={i} className='relative'>
              <Image alt={`${offer}`} src={offer} />
              <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
                <a
                  href={`https://wa.me/201128767990?text=offer${i + 1}`}
                  target='_blank'
                  className='btn'
                >
                  احجز العرض الأن
                </a>
              </div>
            </div>
          )
        })}
        {/* {offers.map((offer) => (
          <Card
            key={offer.id}
            photo={photo1}
            title={offer.title}
            description={offer.description}
          />
        ))} */}
      </div>
    </div>
  )
}
