import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import transaction from './img/receive-coin.png';
import financing from './img/financing-receive.png';
import spending from './img/spending-receive.png';
import received from './img/received.png';
import invoiceUnpaid from './img/invoice_unpaid.png';

const RECEIVE_IMG_PATHS = {
  transaction,
  financing,
  spending,
  received,
  invoiceUnpaid,
};

function ReceiveIcon({ style, type }) {
  return <Image style={style} source={RECEIVE_IMG_PATHS[type]} />;
}

ReceiveIcon.propTypes = {
  style: PropTypes.object,
  type: PropTypes.oneOf(['transaction', 'financing', 'spending', 'received', 'invoiceUnpaid']),
};

ReceiveIcon.defaultProps = {
  style: {},
  type: 'transaction',
};

export default ReceiveIcon;
