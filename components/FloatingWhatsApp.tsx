"use client";

import React from "react";
import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

export default function FloatingWhatsApps() {
  const hour = new Date().getHours();
  let greeting = "Halo! 👋";

  if (hour < 12) greeting = "Selamat pagi! ☀️";
  else if (hour < 18) greeting = "Selamat siang! 🌤️";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  else greeting = "Selamat malam! 🌙";

  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+628116383887"
        accountName="PT. SHAGA"
        avatar="/img/avatar.png"
        statusMessage="Online"
        chatMessage={`${greeting} Ada yang bisa kami bantu hari ini?`}
        className="custom-whatsapp-widget"
        notification={true}
        notificationSound={true}
        darkMode={false}
        allowEsc={true}
        style={{ left: "20px", right: "unset", bottom: "20px" }} // 🔄 posisi kiri bawah
      />
    </>
  );
}
