"use client"

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"
import type { PropsWithChildren } from "react"

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  return (
    <NextThemesProvider {...props} />
  )
}
