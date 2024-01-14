import Link from 'next/link'
import LogoImage from './LogoImage'
import React from 'react'

const Logo: React.FC<{
  href?: string
  className?: string
  label?: string
}> = ({ href, label, className }) => {
  return (
    <Link aria-label={label ?? 'Home Page'} href={href ?? '/'}>
      <LogoImage className={className} />
    </Link>
  )
}

export default Logo
