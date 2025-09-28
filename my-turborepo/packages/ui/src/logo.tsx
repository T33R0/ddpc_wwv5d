"use client";

import Image from "next/image";
import logo from "@repo/assets/images/logo.png";

export function Logo() {
  return <Image src={logo} alt="DDPC Logo" width={40} height={40} />;
}
