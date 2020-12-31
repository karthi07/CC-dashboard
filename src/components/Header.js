import React from 'react';
import '../App.sass';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div className="header d-flex justify-content-between">
      <div className="toggle">
        <img src="logo.png" />
        <Button type="button" className="btn btn-light ">
          Traning Mode
        </Button>
        <Button type="button" className="btn btn-dark  ">
          Live Mode
        </Button>
      </div>

      <div className="filters">
        <Button type="button" className="btn btn-dark  ">
          Show All
        </Button>
        <Button type="button" className="btn btn-light ">
          Crypto
        </Button>
        <Button type="button" className="btn btn-dark  ">
          Commodities
        </Button>
        <Button type="button" className="btn btn-light ">
          Stock
        </Button>
        <Button type="button" className="btn btn-dark  ">
          Index
        </Button>
        <Button type="button" className="btn btn-dark  ">
          Currency
        </Button>
      </div>

      <div className="menu-right">
        <img src="images/Search.png" />
        <img src="images/Star.png" />

        <img src="images/Graduating.png" />
        <img src="images/Short.png" />
      </div>
    </div>
  );
}

export default Header;
