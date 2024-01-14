'use client'

import { configuration } from '@/configuration'
import Container from '@/core/ui/Container'
import Logo from '@/core/ui/Logo'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
// import SiteNavigation from './SiteNavigation'
import If from '@/core/ui/If'
import DarkModeToggle from '@/components/DarkModeToggle'
import Button from '@/core/ui/Button'
import SiteNavigation from './SiteNavigation'
import SubHeading from '@/core/ui/SubHeading'
import Heading from '@/core/ui/Heading'

const SiteHeader = () => {
  const canSwitchTheme = configuration.features.enableThemeSwitcher

  return (
    <Container>
      <div className="flex py-1.5 px-1 items-center border-b border-gray-50 dark:border-dark-800/70 justify-between">
        <div className={'w-4/12'}>
          {/* <Logo /> */}
          <Heading type={2}>Hello</Heading>
        </div>

        <div className={'w-4/12 justify-center hidden lg:flex'}>
          <SiteNavigation />
        </div>

        <div className={'flex flex-1 items-center justify-end space-x-4'}>
          <div className={'items-center flex'}>
            <If condition={canSwitchTheme}>
              <DarkModeToggle />
            </If>
          </div>

          {/* <If condition={userSession} fallback={<AuthButtons />}>
            {(session) => <ProfileDropdown userSession={session} signOutRequested={signOut} />}
          </If> */}

          <div className={'flex lg:hidden'}>
            <SiteNavigation />
          </div>
        </div>
      </div>
    </Container>
  )
}

function AuthButtons() {
  return (
    <div className={'hidden space-x-2 lg:flex'}>
      <Button round>
        <span>Sign In</span>
      </Button>

      <Button>
        <span className={'flex items-center space-x-2'}>
          <span>Sign Up</span>
          <ChevronRightIcon className={'h-4'} />
        </span>
      </Button>
    </div>
  )
}

export default SiteHeader
