'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useId, useMemo, useRef, useState } from 'react';

export type FloatingLanguageSelectorProps = {
  onChange?: (code: string) => void;
  position?: 'right' | 'left';
  className?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function FloatingLanguageSelector({
  onChange,
  position = 'right',
  className,
}: FloatingLanguageSelectorProps) {
  const id = useId();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(
    t('metadata.locale') || 'id'
  );

  const messages = useMessages();
  const languages = useMemo(() => {
    const langs = Array.isArray(messages.languageList)
      ? messages.languageList
      : [];
    return langs.map((lang: any) => ({
      code: lang.link.replace('/', ''),
      label: lang.text,
      flag: lang.icon?.src,
    }));
  }, [messages.languageList]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const ordered = useMemo(() => {
    const current = languages.find((l) => l.code === selected) || languages[0];
    const rest = languages.filter((l) => l.code !== current.code);
    return { current, rest };
  }, [languages, selected]);

  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  function handleSelect(code: string) {
    setSelected(code);
    onChange?.(code);
    switchLocale(code);
    setOpen(false);
  }

  const isRight = position === 'right';
  const [hiddenByScroll, setHiddenByScroll] = useState(false);

  useEffect(() => {
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;
    let stopTimeout: number | null = null;

    function clearStopTimeout() {
      if (stopTimeout !== null) {
        clearTimeout(stopTimeout);
        stopTimeout = null;
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        // hide when scrolling down more than 8px, show when scrolling up
        if (delta > 8) {
          setHiddenByScroll(true);
        } else if (delta < -8) {
          setHiddenByScroll(false);
        }

        // reset idle timer: when user stops scrolling, show selector
        clearStopTimeout();
        stopTimeout = window.setTimeout(() => {
          setHiddenByScroll(false);
          stopTimeout = null;
        }, 800);

        lastY = y;
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearStopTimeout();
    };
  }, []);
  return (
    <div
      ref={containerRef}
      role='group'
      aria-label='Language selector'
      className={cx(
        'fixed bottom-14 right-2 lg:right-6 lg:bottom-12 z-50',
        isRight ? 'right-4' : 'left-4',
        className
      )}
      // apply transition and hide when scrolling down
      style={{
        transition: 'transform 220ms ease, opacity 220ms ease',
        transform: hiddenByScroll ? 'translateY(10px)' : 'translateY(0)',
        opacity: hiddenByScroll ? 0 : 1,
        pointerEvents: hiddenByScroll ? 'none' : undefined,
      }}
    >
      <div
        className={cx(
          'group relative flex flex-col items-center gap-2 p-2',
          'rounded-full backdrop-blur bg-white/80 dark:bg-zinc-900/70 shadow-lg ring-1 ring-black/5',
          'hover:ring-black/10 transition-all duration-300 ease-out'
        )}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <motion.button
          id={`${id}-button`}
          type='button'
          aria-haspopup='menu'
          aria-expanded={open}
          aria-controls={`${id}-list`}
          onClick={() => setOpen((s) => !s)}
          title={ordered.current.label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={cx(
            'w-12 h-12 rounded-full flex items-center justify-center text-xl',
            '!bg-gray-900/50 text-white dark:bg-zinc-100 dark:text-zinc-900',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
          )}
        >
          <Image
            src={ordered.current.flag}
            alt={ordered.current.label}
            className='w-6 h-6'
            priority
            width={24}
            height={24}
          />
          <span className='sr-only'>{ordered.current.label}</span>
        </motion.button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`${id}-list`}
              role='menu'
              aria-labelledby={`${id}-button`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className='flex flex-col items-center gap-2 mt-2'
            >
              {ordered.rest.map((lang, i) => (
                <motion.button
                  key={lang.code}
                  type='button'
                  role='menuitemradio'
                  aria-checked={selected === lang.code}
                  title={lang.label}
                  onClick={() => handleSelect(lang.code)}
                  initial={{ opacity: 0, scale: 0.9, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -8 }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                    delay: 0.03 * i,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cx(
                    'w-11 h-11 rounded-full flex items-center justify-center text-lg',
                    'bg-white/70 dark:bg-zinc-800/70 text-gray-900 dark:text-zinc-100',
                    'shadow ring-1 ring-black/5 backdrop-blur',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                    'transition-all duration-300 ease-out hover:shadow-md'
                  )}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    className='w-6 h-6'
                    priority
                    width={24}
                    height={24}
                  />
                  <span className='sr-only'>{lang.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          aria-hidden
          className={cx(
            'absolute -left-2 -right-2 -bottom-8 mx-auto w-max pointer-events-none',
            'opacity-0 translate-y-1 transition-all duration-300 ease-out',
            'group-hover:opacity-100 group-hover:translate-y-0'
          )}
        >
          <span className='text-xs px-2 py-1 rounded-full bg-black/80 text-white dark:bg-white/90 dark:text-black shadow'>
            {ordered.current.label}
          </span>
        </div>
      </div>
    </div>
  );
}
