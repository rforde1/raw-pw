import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
