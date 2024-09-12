import { useEffect, useState } from "react";

export function useScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 512);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isSmallScreen };
}
