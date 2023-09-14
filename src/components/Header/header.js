import React from "react";
import { FilterSquareFill, List } from "react-bootstrap-icons";

function Header() {
  return (
    <div className="header_container row shadow d-flex py-3 position-sticky justify-content-between align-items-baseline">
      <div className="list_icon">
        <List />
      </div>
      <div className="search d-flex justify-content-center align-items-center">
        <select name="prods" id="prods" className="prods">
          <option value="Products">Products</option>
          <option value="p1">p1</option>
          <option value="p2">p2</option>
          <option value="p3">p3</option>
        </select>
        <input type="text" placeholder="Search by Products & services" />
      </div>
      <div className="filter col-lg-3 col-md-3 col-sm-3 text-primary border d-flex align-items-center border-white">
        <FilterSquareFill color="#3665F3" />&nbsp; Filter
      </div>
    </div>
  );
}

export default Header;
