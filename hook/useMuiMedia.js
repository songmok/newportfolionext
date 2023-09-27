import { useMediaQuery } from "@mui/material";

const useMuiMedia = () => {
  const mobile = useMediaQuery("(min-width:768px)");
  const tablet = useMediaQuery("(min-width:1200px)");
  return { mobile, tablet };
};

export default useMuiMedia;
