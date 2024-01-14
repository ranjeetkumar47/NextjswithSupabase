'use client'

import { configuration } from '@/configuration'
import isBrowser from '@/core/generic/is-browser'
import { loadSelectedTheme } from '@/core/theming'
import { useEffect } from 'react'

const enableThemeSwitcher = configuration.features.enableThemeSwitcher

function ThemeSetter() {
  useEffect(() => {
    if (isBrowser() && enableThemeSwitcher) {
      loadSelectedTheme()
    }
  }, [])

  return null
}

export default ThemeSetter
