import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { HDWalletHeaderTheme } from '../../theme';
import BaseWalletHeader from './BaseWalletHeader';
import { AddWallet } from '../../icons';
import BackupHd from './BackupHd';

class AssetWalletHeader extends React.PureComponent {
  state = {
    unitIndex: 0,
  };

  getValue = () => {
    const valueMap = {
      0: this.props.fiatCurrencyValue,
      1: this.props.BTCValue,
      2: this.props.hiddenValue,
    };

    return valueMap[this.state.unitIndex] || this.props.fiatCurrencyValue;
  };

  onHeaderClick = () => {
    if (this.state.unitIndex === 2) {
      this.setState({
        unitIndex: 0,
      });
    } else {
      this.setState({
        unitIndex: this.state.unitIndex + 1,
      });
    }
  };

  renderIcon() {
    return (
      <TouchableOpacity onPress={this.props.addWalletPress} onLayout={this.props.onAddWalletLayout}>
        <AddWallet />
      </TouchableOpacity>
    );
  }

  renderBackupHd() {
    const { showBackupHD, backupHdText, toBackupHDWallet } = this.props;
    return showBackupHD ? <BackupHd text={backupHdText} onPress={toBackupHDWallet} /> : null;
  }

  render() {
    return (
      <ThemeProvider theme={HDWalletHeaderTheme[this.props.theme]}>
        <BaseWalletHeader
          headerValue={this.getValue()}
          icon={this.renderIcon()}
          backupHd={this.renderBackupHd()}
          headerOnPress={this.props.canClickHeaderValue ? this.onHeaderClick : null}
          children={this.props.children}
          style={this.props.style}
          transparent={this.props.transparent}
        />
      </ThemeProvider>
    );
  }
}

AssetWalletHeader.propTypes = {
  fiatCurrencyValue: PropTypes.string.isRequired,
  BTCValue: PropTypes.string.isRequired,
  addWalletPress: PropTypes.func.isRequired,
  onAddWalletLayout: PropTypes.func,
  showBackupHD: PropTypes.bool,
  backupHdText: PropTypes.string,
  toBackupHDWallet: PropTypes.func,
  children: PropTypes.element,
  theme: PropTypes.string,
  style: PropTypes.any,
  transparent: PropTypes.bool,
  hiddenValue: PropTypes.string,
  canClickHeaderValue: PropTypes.bool,
};

AssetWalletHeader.defaultProps = {
  children: null,
  theme: 'default',
  style: {},
  transparent: false,
  hiddenValue: '********',
  canClickHeaderValue: true,
  onAddWalletLayout: e => null,
};

export default AssetWalletHeader;
