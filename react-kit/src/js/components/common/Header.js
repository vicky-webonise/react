import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    const isActive = (path, match, location) => !!(match || path === location.pathname);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">React Kit</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to='/' className="nav-link" activeClassName="text-primary">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to='/blog' className="nav-link" activeClassName="text-primary" isActive={isActive.bind(this, '/blog/2')}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}