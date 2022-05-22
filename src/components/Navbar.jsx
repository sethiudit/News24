import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand nav_editor mr-4" href="/"><span>News</span>zilla</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link  mx-2" aria-current="page" style={{fontSize:'18px',fontWeight:'400'}} href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  mx-2" style={{fontSize:'18px',fontWeight:'300'}} href="/about">About</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}
