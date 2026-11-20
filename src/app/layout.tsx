import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petal Hotel - Luxury Premium Hotel in Shamshabad, Hyderabad",
  description: "Experience 5-star premium luxury stays, fine dining, and 24/7 airport transfers at Petal Hotel in Shamshabad, Hyderabad near Rajiv Gandhi International Airport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#183b32] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
