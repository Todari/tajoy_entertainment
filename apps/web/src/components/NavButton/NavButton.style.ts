import { css } from "_panda/css";

export const navButtonStyle = ({ selected }: { selected: boolean }) => css({
  py: '12px',
  transition: 'all 0.2s',
  borderBottomWidth: '0.25rem',
  borderBottomStyle: 'solid',
  borderBottomColor: selected ? 'primary' : 'transparent',
})