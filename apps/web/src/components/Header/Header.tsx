"use client"

import { NavButton } from "../NavButton";
import { TajoyLogo } from "@tajoy-ent/ui";
import { headerStyle, headerContentStyle, headerNavStyle } from "./Header.style";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={headerStyle}>
      <div className={headerContentStyle}>
      <TajoyLogo color="white" onClick={() => window.location.href = "/"}/>
      <div className={headerNavStyle}>
        <NavButton 
          selected={pathname === "/company"}
          type="button" 
          onClick={() => window.location.href = "/company"}
        >
          COMPANY
        </NavButton>
        <NavButton 
          selected={pathname === "/production"}
          type="button" 
          onClick={() => window.location.href = "/production"}
        >
          PRODUCTION
        </NavButton>
        <NavButton 
          selected={pathname === "/artists"}
          type="button" 
          onClick={() => window.location.href = "/artists"}
        >
          ARTISTS
        </NavButton>
        <NavButton 
          selected={pathname === "/news"}
          type="button" 
          onClick={() => window.location.href = "/news"}
        >
          NEWS
        </NavButton>
        <NavButton 
          selected={pathname === "/audition"}
          type="button" 
          onClick={() => window.location.href = "/audition"}
        >
          AUDITION
        </NavButton>
      </div>
      </div>
    </header>
  )
}