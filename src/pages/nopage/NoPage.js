import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";

const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page_error">
      <img src={"/iconHeader/404.jpg"} alt="404_Error" />

      <Outlet />
    </div>
  );
};

export default NoPage;
