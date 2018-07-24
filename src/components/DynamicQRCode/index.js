import React from 'react';
import PropTypes from 'prop-types';
import { splitData } from 'cobo-wallet-utils/qrCode';
import CBQRCode from '../QRCode';

class DynamicQRCode extends React.PureComponent {
  state = {
    index: 0,
    codes: splitData(this.props.words, this.props.codeCapacity),
  };

  componentDidMount() {
    this.clock = setInterval(() => {
      if (this.state.index >= this.state.codes.length - 1) {
        this.setState({
          index: 0,
        });
      } else {
        this.setState({
          index: this.state.index + 1,
        });
      }
    }, this.props.refreshSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <CBQRCode size={this.props.size} code={JSON.stringify(this.state.codes[this.state.index])} />
    );
  }
}

DynamicQRCode.propTypes = {
  words: PropTypes.string.isRequired,
  refreshSpeed: PropTypes.number,
  size: PropTypes.number,
  codeCapacity: PropTypes.number,
};

DynamicQRCode.defaultProps = {
  refreshSpeed: 500,
  size: 220,
  codeCapacity: 100,
};

export default DynamicQRCode;
