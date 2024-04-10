"use client"

import Link from "next/link"
import Image from "next/image"

import menu from "@/public/icon/MenuHambuger.svg"
import close from "@/public/icon/XCloseDelete.svg"

import { useState } from "react"

const navList = {
  "/": { name: "Home" },
  "/about": { name: "About" },
  "/event": { name: "Event" },
  "/team": { name: "Team" },
}

export default function Navbar() {
  const [show, setShow] = useState(false)
  const handleClick = (event) => {
    event.preventDefault()
    setShow(!show)
  }

  return (
    <>
      <Image
        src={show ? close : menu}
        onClick={handleClick}
        alt="menu-close icon"
        className="icon"
      />

      <div className="nav_link">
        <div className={show ? "nav" : "nav idle"}>
          {Object.entries(navList).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="link">
                {name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
