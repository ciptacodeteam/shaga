'use client';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { IoIosArrowRoundForward } from 'react-icons/io';

type Props = {
  url?: string;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-primary';
  onClick?: () => void;
};

const CTAButton = ({ url, text, size, variant, onClick }: Props) => {
  const sizes = {
    sm: 'px-2 py-2 text-sm',
    md: 'px-3 py-3 text-base',
    lg: 'px-3.5 py-3.5 text-lg',
  };

  const variants = {
    primary: 'bg-white text-primary',
    secondary: 'bg-primary text-white',
    outline: 'border border-white text-white bg-transparent',
    'outline-primary': 'border border-primary text-primary bg-transparent',
  };

  return (
    <Link
      href={url || '/contact'}
      onClick={onClick}
      className={cn(
        'group flex items-center bg-white rounded-full px-2 py-2 transition-all duration-300 w-fit',
        sizes[size || 'md'],
        variants[variant || 'primary']
      )}
    >
      <span className='font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1'>
        {text || 'Learn More'}
      </span>

      <div
        className={cn(
          'flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:rotate-45',
          variant === 'secondary' ? 'bg-white' : 'bg-primary',
          variant === 'outline' ? 'bg-white/20 group-hover:bg-white' : '',
          variant === 'outline-primary'
            ? 'bg-primary/20 group-hover:bg-primary'
            : ''
        )}
      >
        <IoIosArrowRoundForward
          className={cn(
            'w-5 h-5 transition-colors duration-300',
            variant === 'secondary' ? 'text-primary' : 'text-white',
            variant === 'outline' ? 'text-white group-hover:text-primary' : '',
            variant === 'outline-primary'
              ? 'text-primary group-hover:!text-white'
              : ''
          )}
        />
      </div>
    </Link>
  );
};
export default CTAButton;
