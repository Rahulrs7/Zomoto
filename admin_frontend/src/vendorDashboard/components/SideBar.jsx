import React, { useState } from "react";

const SideBar = ({ showFirmHandler, showProductHandler, showAllProductsHandler, showFirmTitle }) => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="sideBarSection">
      <ul>
        {showFirmTitle && (
          <li className={active === "addFirm" ? "activeMenu" : ""} onClick={() => { setActive("addFirm"); showFirmHandler(); }}>
            Add Firm
          </li>
        )}
        <li className={active === "addProduct" ? "activeMenu" : ""} onClick={() => { setActive("addProduct"); showProductHandler(); }}>
          Add Product
        </li>
        <li className={active === "allProducts" ? "activeMenu" : ""} onClick={() => { setActive("allProducts"); showAllProductsHandler(); }}>
          All Products
        </li>
        <li>User Details</li>
      </ul>
    </div>
  );
};

export default SideBar;
