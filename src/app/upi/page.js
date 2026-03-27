"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";
import Image from "next/image";

/* ---------------- WRAPPER ---------------- */
export default function UpiPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <UpiContent />
    </Suspense>
  );
}

/* ---------------- CONTENT ---------------- */
function UpiContent() {
  const searchParams = useSearchParams();
  const upiLink = searchParams.get("link");

  const [qr, setQr] = useState("");

  useEffect(() => {
    if (upiLink) {
      QRCode.toDataURL(upiLink).then(setQr);
    }
  }, [upiLink]);

  if (!upiLink) {
    return <div className="p-10 text-center">Invalid UPI link</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
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