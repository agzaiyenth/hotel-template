'use client';

import { useLanguage } from '@/app/providers';
import { useEffect } from 'react';

export function RTLWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (language === 'ar') {
      htmlElement.classList.add('rtl');
      htmlElement.style.direction = 'rtl';
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.classList.remove('rtl');
      htmlElement.style.direction = 'ltr';
      htmlElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  return <>{children}</>;
}
