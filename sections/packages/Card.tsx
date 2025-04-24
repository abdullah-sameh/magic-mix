import { FaCheck, FaX } from 'react-icons/fa6'

export default function Card({
  index,
  headerText,
  price,
  entities,
}: {
  index: number
  headerText: string
  price: number
  entities: string[]
}) {
  return (
    <div className='max-w-[400px] border-2 rounded-xl px-7 py-2 text-center'>
      <header className='pb-4 py-2'>
        <h1 className='text-5xl text-[#2f7a2f]'>{headerText}</h1>
        <h2 className='text-2xl text-[#2f7a2f]'>{price} ريال شهرياً</h2>
      </header>

      <ul className='text-right py-3 my-3 border-b-2 border-t-2 border-dotted border-base-content border-opacity-60'>
        {entities.map((value, i) => {
          return (
            <li className='flex items-center gap-2' key={i}>
              {index === 0 && i === entities.length - 1 ? (
                <FaX />
              ) : (
                <FaCheck className='text-[#2f7a2f]' />
              )}
              <span
                className={
                  index === 0 && i === entities.length - 1
                    ? 'line-through text-2xl'
                    : 'text-2xl'
                }
              >
                {value}
              </span>
            </li>
          )
        })}
      </ul>

      <a
        href='https://wa.me/201128767990?text=Freetrail'
        target='_blank'
        rel='noopener'
        className='btn btn-primary'
      >
        اشترك الآن
      </a>
    </div>
  )
}
