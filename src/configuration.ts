enum Themes {
  Light = 'light',
  Dark = 'dark'
}
export const configuration = {
  site: {
    name: 'The SaaS Solution for developers and founders',
    description: 'Your SaaS Description',
    themeColor: '#ffffff',
    themeColorDark: '#0a0a0a',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Sky Digi Soft',
    twitterHandle: '',
    githubHandle: '',
    convertKitFormId: '',
    locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE
  },

  theme: Themes.Light,
  features: {
    enableThemeSwitcher: true
  }
}
