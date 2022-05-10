import React from 'react'
import MagnifiyingGlass from '../images/magnifying-glass-solid.svg';
export function Search() {
  return (
        <div class="searchBar">
            <input type="text" placeholder="Search..." />
            <img class="searchIco" src={MagnifiyingGlass} alt=""  />
        </div>
  )
}
