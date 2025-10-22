'use client';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { IoIosArrowRoundForward } from 'react-icons/io';

type Props = {
  url?: string;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outline-primary'
    | 'outline-white';
  onClick?: () => void;
  className?: string;
};

const CTAButton = ({ url, text, size, variant, onClick, className }: Props) => {
  const sizes = {
    sm: 'p-1 md:px-2 md:py-1.5 text-sm',
    md: 'p-2 text-sm  md:text-base',
    lg: 'p-2 md:px-3.5 md:py-2.5 text-base md:text-lg',
  };

  const variants = {
    primary: 'bg-white text-primary',
    secondary: 'bg-primary text-white',
    outline: 'border border-primary text-primary bg-transparent',
    'outline-primary': 'border border-primary text-primary bg-transparent',
    'outline-white':
      'border border-white text-white bg-transparent  hover:bg-white/10',
  };

  return (
    <Link
      href={url || '/contact'}
      onClick={onClick}
      prefetch
      className={cn(
        'group flex items-center bg-white rounded-full px-2 py-2 transition-all duration-300 w-fit',
        sizes[size || 'md'],
        variants[variant || 'primary'],
        className
      )}
    >
      <span className='font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1'>
        {text || 'Learn More'}
      </span>

      <div
        className={cn(
          'flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:rotate-45',
          variant === 'secondary' ? 'bg-white' : 'bg-primary',
          variant === 'outline' ? 'bg-primary/20 group-hover:bg-primary' : '',
          variant === 'outline-primary'
            ? 'bg-primary/20 group-hover:bg-primary'
            : '',
          variant === 'outline-white' ? 'bg-white/20 group-hover:bg-white' : ''
        )}
      >
        <IoIosArrowRoundForward
          className={cn(
            'w-5 h-5 transition-colors duration-300',
            variant === 'secondary' ? 'text-primary' : 'text-white',
            variant === 'outline' ? 'text-primary group-hover:text-white' : '',
            variant === 'outline-primary'
              ? 'text-primary group-hover:!text-white'
              : '',
            variant === 'outline-white'
              ? 'text-white group-hover:text-primary'
              : ''
          )}
        />
      </div>
    </Link>
  );
};
export default CTAButton;
