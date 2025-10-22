'use client';

import { transformMessages } from '@/i18n/messages';
import { Link } from '@/i18n/navigation';
import { cn, getWhatsappMessageUrl } from '@/lib/utils';
import logo from '@/public/svg/logo.svg';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CTAButton from './CTAButton';
import { PHONE_NUMBER } from '@/lib/constant';

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
        isTop ? 'shadow-none' : 'shadow-sm',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className='max-w-7xl mx-auto py-4 px-4 md:px-6 xl:px-0'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link href={'/'}>
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
          <nav className='hidden lg:flex gap-8 items-center'>
            <ul className='flex items-center gap-8'>
              {menus.map(
                (menu: { text: string; link: string }, idx: number) => {
                  const isActive =
                    pathname.replace(`/${t('metadata.locale')}`, '') ===
                      menu.link ||
                    (menu.link === '/' &&
                      pathname === `/${t('metadata.locale')}`);
                  return (
                    <li key={idx}>
                      <Link
                        href={menu.link}
                        className={cn(
                          `font-manrope font-medium transition-colors duration-200`,
                          isActive
                            ? 'text-primary'
                            : 'text-[#7686ab] hover:text-primary'
                        )}
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
              <CTAButton
                text={t('contactCtaText')}
                url={getWhatsappMessageUrl(
                  PHONE_NUMBER,
                  'Hello, I am interested in your logistics services. Please provide me with more information.'
                )}
                size='md'
                variant='secondary'
              />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
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
        <div className='lg:hidden fixed inset-x-4 top-20 z-40 bg-white rounded-lg shadow-lg p-4'>
          <ul className='flex flex-col gap-3'>
            {menus.map((menu: { text: string; link: string }, idx: number) => {
              const isActive =
                pathname.replace(`/${t('metadata.locale')}`, '') ===
                  menu.link ||
                (menu.link === '/' && pathname === `/${t('metadata.locale')}`);
              return (
                <li key={idx}>
                  <Link
                    href={menu.link}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      `font-manrope font-medium transition-colors duration-200 py-2 block`,
                      isActive
                        ? 'text-primary'
                        : 'text-[#7686ab] hover:text-primary'
                    )}
                  >
                    {menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className='mt-4'>
            <CTAButton
              text={t('contactCtaText')}
              url={getWhatsappMessageUrl(
                PHONE_NUMBER,
                'Hello, I am interested in your logistics services. Please provide me with more information.'
              )}
              onClick={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
