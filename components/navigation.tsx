'use client';

import { transformMessages } from '@/i18n/messages';
import { cn } from '@/lib/utils';
import logo from '@/public/svg/logo.svg';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function NavigationBar() {
  const pathname = usePathname();
  const t = useTranslations();

  const messages = useMessages();
  const menus = transformMessages(messages.navList);

  const [isTop, setIsTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // track scroll with a local previous value to avoid stale closures
    let prev = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > prev && prev > 400) setVisible(false);
      else setVisible(true);
      prev = current;
      setIsTop(current === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full bg-white z-30 transition-transform duration-300 ease-in-out',
        isTop ? 'shadow-none' : 'shadow-md',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className='max-w-7xl mx-auto py-4 px-4 md:px-0'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link href={`/${t('metadata.locale')}`}>
              <Image
                src={logo}
                alt='Logo'
                className='w-32 md:w-42'
                priority
                width={300}
                height={100}
              />
            </Link>
          </div>
          {/* Desktop nav */}
          <nav className='hidden md:flex gap-8 items-center'>
            <ul className='flex items-center gap-8'>
              {menus.map(
                (menu: { text: string; link: string }, idx: number) => {
                  const isActive = pathname === menu.link;
                  return (
                    <li key={idx}>
                      <Link
                        href={menu.link}
                        className={`font-manrope font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-primary'
                            : 'text-[#7686ab] hover:text-primary'
                        }`}
                      >
                        {menu.text}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>

            {/* Tombol Kontak (desktop) */}
            <div>
              <Link
                href={t('contactCtaLink')}
                className='group flex items-center bg-primary rounded-full px-3 py-2 transition-all duration-300'
              >
                <span className='text-white font-manrope mr-3 transition-all duration-300 group-hover:translate-x-1'>
                  {t('contactCtaText')}
                </span>

                <div className='rounded-full bg-white p-1 transition-transform duration-300 group-hover:rotate-45'>
                  <IoIosArrowRoundForward className='text-primary w-6 h-6 transition-colors duration-300' />
                </div>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              aria-label='Toggle menu'
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white/0 hover:bg-gray-100 focus:outline-none'
            >
              {/* hamburger / close icon */}
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className='md:hidden fixed inset-x-4 top-20 z-40 bg-white rounded-lg shadow-lg p-4'>
          <ul className='flex flex-col gap-3'>
            {menus.map((menu: { text: string; link: string }, idx: number) => (
              <li key={idx}>
                <Link
                  href={menu.link}
                  onClick={() => setMobileOpen(false)}
                  className='block font-manrope font-medium text-[#344565] py-2'
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-4'>
            <Link
              href={t('contactCtaLink')}
              onClick={() => setMobileOpen(false)}
              className='group inline-flex items-center bg-primary rounded-full px-4 py-2 transition-all duration-300'
            >
              <span className='text-white font-manrope mr-3'>
                {t('contactCtaText')}
              </span>
              <div className='rounded-full bg-white p-1'>
                <IoIosArrowRoundForward className='text-primary w-5 h-5' />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
