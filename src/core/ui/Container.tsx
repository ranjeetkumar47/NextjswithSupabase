import React, { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
