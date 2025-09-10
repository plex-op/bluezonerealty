import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const header = document.querySelector("header");
          const headerHeight = header?.offsetHeight || 100;

          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollHandler;
