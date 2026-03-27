"use client";

import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UpiPage() {
  const searchParams = useSearchParams();
  const upiLink = searchParams.get("link");

  const [qr, setQr] = useState("");

  useEffect(() => {
    if (upiLink) {
      QRCode.toDataURL(upiLink).then(setQr);
    }
  }, [upiLink]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl mb-4">Scan & Pay</h1>

      {qr && (
        <Image
          src={qr}
          alt="UPI QR"
          width={250}
          height={250}
          unoptimized
        />
      )}
    </div>
  );
}