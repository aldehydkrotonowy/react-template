import styled, { keyframes } from 'styled-components'
import { NumberValues } from '../../styles'

interface CircleLoaderProps {
  small?: boolean
  white?: boolean
}

const smallSize: NumberValues = 16
const normalSize: NumberValues = 56

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const CircleLoader = styled.div<CircleLoaderProps>`
${p =>
  p.small
    ? `
  width: ${smallSize}px;
  height: ${smallSize}px;
  `
    : `
  width: ${normalSize}px;
  height: ${normalSize}px;
  `}
  border: 1px solid ${p => (p.white ? `white` : p.theme.colors.primary)};  
  border-top: 1px solid transparent;
  border-radius: 50%;
  animation-name: ${rotateAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`
