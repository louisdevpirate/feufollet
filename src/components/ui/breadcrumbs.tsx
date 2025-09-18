'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useTheme } from '@/components/ui/theme-provider';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { theme } = useTheme();

  return (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      <Link 
        href="/" 
        className="flex items-center space-x-1 hover:opacity-70 transition-opacity"
        style={{ color: theme.primary }}
      >
        <Home className="w-4 h-4" />
        <span>Accueil</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:opacity-70 transition-opacity text-gray-600"
            >
              {item.name}
            </Link>
          ) : (
            <span className="font-medium" style={{ color: theme.primary }}>
              {item.name}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
