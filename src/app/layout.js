import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Link Shield",
  description: "Protect Your Links and Profit From Them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-300">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
