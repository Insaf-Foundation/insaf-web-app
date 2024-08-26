import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Insaf Foundation`;
  }, [title]);
};

export default useTitle;
