'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultTheme = localStorage.getItem('theme') || 'dark'

  return (
    <NextThemesProvider attribute="class" defaultTheme={defaultTheme}>
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
