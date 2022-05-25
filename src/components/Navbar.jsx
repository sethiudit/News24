import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand nav_editor mr-4" to="/"><span>News</span>zilla</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link  mx-2" aria-current="page" style={{ fontSize: '18px', fontWeight: '400' }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  mx-2" style={{ fontSize: '18px', fontWeight: '400' }} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  mx-2" style={{ fontSize: '18px', fontWeight: '400' }} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  mx-2" style={{ fontSize: '18px', fontWeight: '400' }} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  mx-2" style={{ fontSize: '18px', fontWeight: '400' }} to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  mx-2" style={{ fontSize: '18px', fontWeight: '400' }} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  mx-2" style={{ fontSize: '18px', fontWeight: '400' }} to="/technology">Technology</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}
