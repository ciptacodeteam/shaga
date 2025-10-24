'use client';

import { transformMessages } from '@/i18n/messages';
import { Link } from '@/i18n/navigation';
import NextLink from 'next/link';
import { PHONE_NUMBER } from '@/lib/constant';
import { cn, getWhatsappMessageUrl } from '@/lib/utils';
import logo from '@/public/svg/logo.svg';
import { motion } from 'framer-motion';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CTAButton from './CTAButton';
import { locales } from '@/i18n/routing';

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileOpen]);

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
            <Link href={'/'} prefetch>
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
                        prefetch
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

            <div className='flex gap-3 items-center justify-end'>
              {locales.map((locale) => {
                const localePath =
                  locale === t('metadata.locale') ? '/' : `/${locale}`;
                return (
                  <NextLink
                    key={locale}
                    href={localePath}
                    prefetch
                    className={cn(
                      'font-manrope font-bold transition-colors duration-200 bg-gray-100 px-3 py-1 rounded-full text-xs',
                      locale === t('metadata.locale')
                        ? 'text-white bg-primary'
                        : 'text-[#7686ab] hover:text-primary'
                    )}
                  >
                    {locale.toUpperCase()}
                  </NextLink>
                );
              })}
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
              <motion.svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                initial={false}
                animate={mobileOpen ? 'open' : 'closed'}
              >
                <motion.path
                  style={{ originX: 0.5, originY: 0.5 }}
                  variants={{
                    closed: { y: 0, rotate: 0, transition: { duration: 0.18 } },
                    open: { y: 6, rotate: 45, transition: { duration: 0.18 } },
                  }}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16'
                />
                <motion.path
                  variants={{
                    closed: { opacity: 1, transition: { duration: 0.12 } },
                    open: { opacity: 0, transition: { duration: 0.12 } },
                  }}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 12h16'
                />
                <motion.path
                  style={{ originX: 0.5, originY: 0.5 }}
                  variants={{
                    closed: { y: 0, rotate: 0, transition: { duration: 0.18 } },
                    open: {
                      y: -6,
                      rotate: -45,
                      transition: { duration: 0.18 },
                    },
                  }}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 18h16'
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <motion.div
        key='mobile-menu'
        className='lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm min-h-svh max-h-screen overflow-auto'
        initial='closed'
        animate={mobileOpen ? 'open' : 'closed'}
        variants={{
          closed: {
            y: '-100%',
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          },
          open: {
            y: '0%',
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              when: 'beforeChildren',
              staggerChildren: 0.06,
              delayChildren: 0.28,
            },
          },
        }}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className='relative h-full overflow-auto flex flex-col justify-center items-start'
          onClick={(e) => e.stopPropagation()}
        >
          <header>
            {/* Close button */}
            <button
              aria-label='Close menu'
              onClick={() => setMobileOpen(false)}
              className='absolute top-6 right-6 p-2 rounded-md text-gray-700 hover:bg-gray-100'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            <div className='p-8 mb-12 absolute top-0 left-0'>
              <Link href={'/'} prefetch onClick={() => setMobileOpen(false)}>
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
          </header>
          {/* Content container (centered, appears after bg slide) */}
          <motion.ul
            className='flex flex-col gap-4 items-start justify-start mr-auto px-8 max-w-md'
            variants={{
              closed: {},
              open: {},
            }}
          >
            {menus.map((menu: { text: string; link: string }, idx: number) => {
              const isActive =
                pathname.replace(`/${t('metadata.locale')}`, '') ===
                  menu.link ||
                (menu.link === '/' && pathname === `/${t('metadata.locale')}`);
              return (
                <motion.li
                  key={idx}
                  variants={{
                    closed: { opacity: 0, y: 12 },
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.36 },
                    },
                  }}
                >
                  <Link
                    href={menu.link}
                    prefetch
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      `font-manrope font-semibold transition-colors duration-200 py-2 block text-3xl`,
                      isActive
                        ? 'text-primary'
                        : 'text-[#7686ab] hover:text-primary'
                    )}
                  >
                    {menu.text}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA - reveal slightly after menu items */}
          <motion.div
            className='absolute bottom-8 left-2 transform px-8 max-w-md mr-auto'
            variants={{
              closed: { opacity: 0, y: 8 },
              open: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.36 },
              },
            }}
          >
            <CTAButton
              text={t('contactCtaText')}
              url={getWhatsappMessageUrl(
                PHONE_NUMBER,
                'Hello, I am interested in your logistics services. Please provide me with more information.'
              )}
              onClick={() => setMobileOpen(false)}
              variant='secondary'
            />
          </motion.div>

          <div className='flex gap-4 items-center justify-end absolute bottom-10 right-8'>
            {locales.map((locale) => {
              const localePath =
                locale === t('metadata.locale') ? '/' : `/${locale}`;
              const localizedPath =
                pathname.replace(
                  `/${t('metadata.locale')}`,
                  localePath === '/' ? '' : localePath
                ) || localePath;
              return (
                <NextLink
                  key={locale}
                  href={localizedPath}
                  prefetch
                  className={cn(
                    'font-manrope font-bold transition-colors duration-200 bg-gray-100 px-3 py-1 rounded-full text-sm',
                    locale === t('metadata.locale')
                      ? 'text-primary'
                      : 'text-[#7686ab] hover:text-primary'
                  )}
                >
                  {locale.toUpperCase()}
                </NextLink>
              );
            })}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
