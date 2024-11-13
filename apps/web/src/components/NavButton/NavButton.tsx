import { Button } from "@tajoy-ent/ui";
import type { NavButtonProps } from "./NavButton.type";
import { navButtonStyle } from "./NavButton.style";
export function NavButton({ selected = false, children, ...props }: NavButtonProps) {
  return (
    <div className={navButtonStyle({ selected })}>
      <Button variant="ghost" {...props}>
        {children}
      </Button>
    </div>
  )
}