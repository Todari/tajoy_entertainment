"use client"

import Link from "next/link";
import { NavButton } from "../NavButton";
import { TajoyLogo } from "@tajoy-ent/ui";
import { headerStyle, headerContentStyle, headerNavStyle } from "./Header.style";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={headerStyle}>
      <div className={headerContentStyle}>
      <Link href="/" prefetch={true}>
        <TajoyLogo color="white" />
      </Link>
      <div className={headerNavStyle}>
        <Link href="/company" prefetch={true}>
          <NavButton 
            selected={pathname === "/company"}
          >
            COMPANY
          </NavButton>
        </Link>
        <Link href="/production" prefetch={true}>
          <NavButton 
            selected={pathname === "/production"}
          type="button" 
        >
            PRODUCTION
          </NavButton>
        </Link>
        <Link href="/artists" prefetch={true}>
          <NavButton 
            selected={pathname === "/artists"}
          type="button" 
        >
          ARTISTS
          </NavButton>
        </Link>
        <Link href="/news" prefetch={true}>
          <NavButton 
            selected={pathname === "/news"}
          type="button" 
        >
          NEWS
          </NavButton>
        </Link>
        <Link href="/audition" prefetch={true}>
          <NavButton 
            selected={pathname === "/audition"}
          type="button" 
        >
          AUDITION
          </NavButton>
        </Link>
      </div>
      </div>
    </header>
  )
}