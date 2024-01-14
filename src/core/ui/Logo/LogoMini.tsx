import Link from 'next/link'
import React from 'react'
import LogoImageMini from '@/core/ui/Logo/LogoImageMini'

const LogoMini: React.FC<{ href?: string }> = ({ href }) => {
  return (
    <Link href={href ?? '/'}>
      <LogoImageMini />
    </Link>
  )
}

export default LogoMini
