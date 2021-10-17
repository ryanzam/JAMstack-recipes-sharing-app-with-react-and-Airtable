import React from "react"

const SideBar = () => {
    return (<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px" }}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <i class="bi bi-egg-fried"></i>
      <span className="fs-4">Delicious Recipes</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="/all" className="nav-link active" aria-current="page">
        <i class="bi bi-house-door px-3"></i>
          All Recipes
        </a>
      </li>
      <li>
        <a href="/new" className="nav-link text-white">
        <i class="bi bi-file-earmark-plus px-3"></i>
          New Recipe
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>)
}

export default SideBar;