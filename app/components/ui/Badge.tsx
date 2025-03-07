'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx'; // Remplace classNames

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300',
        secondary: 'border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200',
        destructive: 'border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20',
        outline: 'text-gray-800 border border-gray-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={clsx(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
