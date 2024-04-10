import Navbar from "./navbar"
import Link from "next/link"
import Image from "next/image"

import logo from "@/public/logo.jpeg"

import "@/styles/header.css"

export default function Header() {
  return (
    <div className="header">
      <Link href="/" className="header_logo">
        <Image
          src={logo}
          alt="logo of tarahara run"
          height={80}
          className="header_logo-image"
        />
        <div className="header_logo-text">
          <h2 className="header_logo-heading">Tarahara Run</h2>
          <p className="header_logo-description">Run for unity, health & fun</p>
        </div>
      </Link>

      <Navbar />
    </div>
  )
}
