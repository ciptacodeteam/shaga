'use client';

import { transformMessages } from '@/i18n/messages';
import logo from '@/public/svg/logo.svg';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function NavigationBar() {
  const pathname = usePathname();
  const t = useTranslations();

  const messages = useMessages();
  const menus = transformMessages(messages.navList);

  return (
    <header>
      <div className='max-w-7xl mx-auto py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link href={`/${t('metadata.locale')}`}>
              <Image
                src={logo}
                alt='Logo'
                className='w-42'
                priority
                width={300}
                height={100}
              />
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
          </nav>
          {/* Tombol Kontak */}
          <div>
            <Link
              href={t('contactCtaLink')}
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
        </div>
      </div>
    </header>
  );
}
