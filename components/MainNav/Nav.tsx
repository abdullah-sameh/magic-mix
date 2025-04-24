'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

const scrollToEle = (id: string, offset: number = 80) => {
  const el = document.getElementById(id)
  window.scrollTo(0, el?.offsetTop || 0 - offset)
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    // to add background here
    <div className='fixed top-0 z-[100] w-full bg-base-100 backdrop-blur-lg bg-opacity-50'>
      <div className='container navbar'>
        <div className='navbar-start'>
          <a className='cursor-pointer'>
            <Image src='/logo.png' alt='logo' width='60' height='60' />
          </a>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a onClick={() => scrollToEle('main')} className='text-2xl'>
                الرئيسية
              </a>
            </li>
            <li>
              <a onClick={() => scrollToEle('services')} className='text-2xl'>
                الخدمات
              </a>
            </li>
            <li>
              <a onClick={() => scrollToEle('packages')} className='text-2xl'>
                الباقات
              </a>
            </li>
            <li>
              <a onClick={() => scrollToEle('offers')} className='text-2xl'>
                العروض
              </a>
            </li>
            <li>
              <a onClick={() => scrollToEle('about')} className='text-2xl'>
                من نحن
              </a>
            </li>
          </ul>
        </div>

        {/* mobile view */}
        <div className='navbar-end flex lg:hidden'>
          <div
            className={twMerge(
              'bg-base-300 p-[0.5rem] fixed top-0 left-0 w-full h-screen z-[55] duration-200 transition-[clip-path] ease-in-out',
              open ? 'nav-open' : 'nav-close'
            )}
          >
            <div className='container w-full mx-auto'>
              <label className='float-left btn btn-circle swap swap-rotate'>
                {/* this hidden checkbox controls the state */}
                <input
                  type='checkbox'
                  onChange={() => {
                    setOpen((prev) => !prev)
                  }}
                  checked={open}
                />

                {/* hamburger icon */}
                <svg
                  className='swap-off fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 512 512'
                >
                  <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
                </svg>

                {/* close icon */}
                <svg
                  className='swap-on fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 512 512'
                >
                  <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
                </svg>
              </label>
            </div>

            <ul className='fixed top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 flex flex-col items-center gap-10'>
              <li>
                <a
                  onClick={() => {
                    setOpen((prev) => !prev)
                    scrollToEle('main')
                  }}
                  className='btn-outline text-2xl'
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen((prev) => !prev)
                    scrollToEle('services')
                  }}
                  className='text-2xl'
                >
                  الخدمات
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen((prev) => !prev)
                    scrollToEle('packages')
                  }}
                  className='text-2xl'
                >
                  الباقات
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen((prev) => !prev)
                    scrollToEle('offers')
                  }}
                  className='text-2xl'
                >
                  العروض
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen((prev) => !prev)
                    scrollToEle('about')
                  }}
                  className='text-2xl'
                >
                  من نحن
                </a>
              </li>
              <div className='div-whatsapp-btn'>
                <a
                  href='https://wa.me/201128767990?text=Freetrail'
                  className='btn btn-primary'
                >
                  <FaWhatsapp /> تواصل معنا
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className='navbar-end hidden lg:flex'>
          <a
            rel='noopener'
            className='btn bg-whatsapp'
            href='https://wa.me/201128767990?text=Freetrail'
            target='_blank'
          >
            <FaWhatsapp className='w-5 h-5' />
            تواصل معنا عبر الوتساب
          </a>
        </div>
      </div>
    </div>
  )
}
