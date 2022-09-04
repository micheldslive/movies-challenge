import { Reveal } from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'
import { IChildren } from '@/core/types'

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const RevealContent = ({ children }: IChildren) => {
  return (
    <Reveal keyframes={animation} triggerOnce>
      {children}
    </Reveal>
  )
}
