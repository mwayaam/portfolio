import { Outlet } from "react-router-dom";
import OmbreBackdrop from "./OmbreBackdrop";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <OmbreBackdrop />
      <Navbar />
      <main style={{ paddingTop: "6.5rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}