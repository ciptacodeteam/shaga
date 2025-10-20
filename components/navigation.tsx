'use client';

import { locales } from '@/i18n/routing';
import logo from '@/public/svg/logo.svg';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function NavigationBar() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'id';
  const t = useTranslations();

  const messages = useMessages();
  const menus = Array.isArray(messages.navList) ? messages.navList : [];

  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <header>
      <div className='max-w-7xl mx-auto py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link href={`/${locale}`}>
              <Image src={logo} alt='Logo' className='w-42' />
            </Link>
          </div>

          <nav className='flex gap-8 items-center'>
            {/* Menu Navigasi */}
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

            {/* Tombol Kontak */}
            <div>
              <Link
                href={`/${locale}/kontak`}
                className='group flex items-center bg-primary rounded-full px-2 py-2 transition-all duration-300'
              >
                <span className='text-white font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1'>
                  {t('contactCtaText')}
                </span>

                <div className='rounded-full bg-white p-1 transition-transform duration-300 group-hover:rotate-45'>
                  <IoIosArrowRoundForward className='text-primary w-6 h-6 transition-colors duration-300' />
                </div>
              </Link>
            </div>

            {/* Tombol Ganti Bahasa */}
            <div className='flex gap-2 ms-4'>
              {locales.map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLocale(lang)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    locale === lang
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
