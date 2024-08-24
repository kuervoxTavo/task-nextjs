import "bootstrap/dist/css/bootstrap.css";
import BootstrapJS from "@/components/Bootstrap";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Tareas - GOP",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <BootstrapJS />
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
