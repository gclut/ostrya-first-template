import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-white text-black hover:bg-gray-100 border border-transparent',
        secondary: 'bg-black text-white hover:bg-black/80 border border-white',
        outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
        ghost: 'bg-transparent text-white hover:text-blue-400',
      },
      size: {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

export const Button = ({ href, children, className, variant, size, ...props }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
};
