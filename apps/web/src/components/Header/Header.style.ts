import { hstack } from "_panda/patterns"

export const headerStyle = hstack({
  justify: 'center',
  w: '100vw',
  h: '8rem',
  px: '32',
  position: 'fixed',
  top: '0',
  bg: 'dark',
})

export const headerContentStyle = hstack({
  justify: 'space-between',
  w: '100%',
  maxW: '75rem',
})

export const headerNavStyle = hstack({
  gap: '16',
})  