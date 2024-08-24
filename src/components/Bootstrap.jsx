"use client"

import React, { useEffect } from "react";

const BootstrapJS = () => {
  // js de bootstrap

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
};

export default BootstrapJS;
