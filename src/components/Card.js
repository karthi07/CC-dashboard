import React from 'react';
import PropTypes from 'prop-types';

import './Cards.sass';

function Card(props) {
  let ext = props.id == 4 ? 'png' : 'svg';
  let inactive = ['$ 00.00', '0 %'].includes(props.val) ? 'inactive' : '';
  return (
    <div className={'vpf-card ' + inactive}>
      <div className="eth d-flex justify-content-between">
        <div className="eth">
          <img src="images/star.svg" />
          <div className="eth-amt">
            ETH 48 Hours
            <div className="type">Crypto</div>
          </div>
        </div>
        <div className="graphs">
          <div className="values">
            <img src="images/fast-forward.svg" />
            2,2x
            <div className="status"> {props.status} </div>
          </div>
          <img src={`images/graphs/balance${props.id}.${ext}`} className="graph-img" />

          <img src={`images/graphs/prediction${props.id}.svg`} className="graph-img" />
        </div>
        <div className="stock-amt">
          {props.val}
          <div className="type">Total commitment funds</div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  val: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
