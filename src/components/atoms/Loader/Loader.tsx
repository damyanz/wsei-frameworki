import React from "react";

const Loader = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src="/loader.svg" alt="Loading..." {...props} />;
};

export default Loader;
