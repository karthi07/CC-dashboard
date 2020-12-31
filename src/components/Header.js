import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div className="header">
      <div className="toggle">
        <Button type="button" className="btn btn-light">
          Traning Mode
        </Button>
        <Button type="button" className="btn btn-dark bg group2">
          Live Mode
        </Button>
      </div>
    </div>
  );
}

export default Header;
