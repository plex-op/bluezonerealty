import { Footer, Header, ScrollHandler } from "../components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <ScrollHandler />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
