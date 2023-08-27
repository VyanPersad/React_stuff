import React from 'react'

export default function Navitem({active=" ",text, onClick}) {
  return (
    <li className="nav-item ">
        <a className={`nav-link ${active}`} href="#" onClick={onClick}>{text}</a>{" "}
    </li>
  )
}
 