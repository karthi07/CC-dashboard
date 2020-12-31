import React from 'react';
import './Cards.sass';
import Card from './Card';
import { Button, Dropdown } from 'react-bootstrap';

function Cards() {
  return (
    <div className="cards col-10">
      <div className="filter d-flex justify-content-between">
        <div>
          <div className="applied">Select assets, types and period:</div>
          <Button className="filter-btn">Filter </Button>
        </div>
        <div className="units">
          <div>Units:</div>
          <Button className="units-btn">% </Button>
          <Button className="units-btn btn-active">$ </Button>
          <div>
            Sort by
            <Dropdown className="sort-dropdown">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Trending
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <Card key={1} id={1} eth={'$ 34,346.00'} status={'Outcome in 6h 41m'} />
      <Card key={2} id={2} eth={'$ 329,146.00'} status={'Outcome in 6h 41m'} />
      <Card key={3} id={3} eth={'$ 129,146.00'} status={'Outcome in 6h 41m'} />
      <Card key={4} id={4} eth={'$ 46.00'} status={'Outcome in 6h 41m'} />
      <Card key={5} id={5} eth={'$ 00.00'} status={'opening in 32m 45s'} />
      <Card key={2} id={2} eth={'$ 329,146.00'} status={'Outcome in 6h 41m'} />
      <Card key={3} id={3} eth={'$ 129,146.00'} status={'Outcome in 6h 41m'} />
      <Card key={4} id={4} eth={'$ 46.00'} status={'Outcome in 6h 41m'} />
    </div>
  );
}

export default Cards;
