import React, { useState } from 'react';
import './Cards.sass';
import Card from './Card';
import { Button } from 'react-bootstrap';

import data from './CardsData';

function Cards() {
  //let cardsData = data;
  const [cardsData, setCardsData] = useState(data);

  // cardsData.sort(function (a, b) {
  //   return a.value - b.value;
  // });
  const [isPercentage, setValueType] = useState(false);
  const handleValueChange = (e) => {
    let value = isPercentage;
    setValueType(!value);
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    let temp = Object.assign([], cardsData);
    temp.sort(function (a, b) {
      return a[e.target.value] - b[e.target.value];
    });

    setCardsData(temp);
  };

  return (
    <div className="cards col-10">
      <div className="filter d-flex justify-content-between">
        <div>
          <div className="applied">Select assets, types and period:</div>
          <Button variant="secondary" className="filter-btn">
            Filter{' '}
          </Button>
        </div>
        <div className="units">
          <div>Units:</div>
          <Button
            variant="secondary"
            className={isPercentage ? 'units-btn btn-active' : 'units-btn '}
            onClick={handleValueChange}
            disabled={isPercentage}
          >
            %{' '}
          </Button>
          <Button
            variant="secondary"
            className={!isPercentage ? 'units-btn btn-active' : 'units-btn '}
            onClick={handleValueChange}
            disabled={!isPercentage}
          >
            ${' '}
          </Button>
          <div>
            Sort by
            <select className="sort-select" onChange={handleSort}>
              <option value="trend">Trending</option>
              <option value="value">Value</option>
            </select>
          </div>
        </div>
      </div>
      {cardsData.map((data, index) => (
        <Card
          key={index}
          id={data.id}
          val={isPercentage ? data.pertcentage : data.eth}
          status={data.status}
        />
      ))}
    </div>
  );
}

export default Cards;
