import { useEffect, useState } from "react";

// 커스텀 훅을 정의
function useViewPort() {
  const [mobile, setMobile] = useState();
  const [tablet, setTablet] = useState();

  useEffect(() => {
    const ReSize = () => {
      setMobile(window.innerWidth < 768);
      setTablet(window.innerWidth < 1200);
    };
    window.addEventListener("resize", ReSize);
    return () => {
      window.removeEventListener("resize", ReSize);
    };
  }, []);

  return { mobile, tablet };
}

export default useViewPort;
