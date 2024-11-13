"use client"

import { Button, TajoyLogo } from "@tajoy-ent/ui";
import { headerStyle, headerContentStyle, headerNavStyle } from "./Header.style";

export function Header() {

  return (
    <header className={headerStyle}>
      <div className={headerContentStyle}>
      <TajoyLogo color="white" />
      <div className={headerNavStyle}>
        <Button variant="ghost" type="button">COMPANY</Button>
        <Button variant="ghost" type="button">PRODUCTION</Button>
        <Button variant="ghost" type="button">ARTISTS</Button>
        <Button variant="ghost" type="button">NEWS</Button>
        <Button variant="ghost" type="button">AUDITION</Button>
      </div>
      </div>
    </header>
  )
}