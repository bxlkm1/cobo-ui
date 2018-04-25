import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';
import { HDWalletHeaderTheme } from '../../theme';
import BaseWalletHeader from './BaseWalletHeader';

const CoinWalletHeader = ({
  coinValue,
  fiatCurrencyValue,
  icon,
  percent,
  color,
  theme,
  children,
}) => {
  const subHeader = `≈${fiatCurrencyValue}`;

  return (
    <ThemeProvider theme={HDWalletHeaderTheme[theme]}>
      <BaseWalletHeader
        headerValue={coinValue}
        subHeaderValue={subHeader}
        icon={icon}
        percent={percent}
        color={color}
        HeaderOnPress={() => {}}
        children={children}
      />
    </ThemeProvider>
  );
};

CoinWalletHeader.propTypes = {
  coinValue: PropTypes.string.isRequired,
  fiatCurrencyValue: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  percent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.element,
};

CoinWalletHeader.defaultProps = {
  children: null,
};

export default CoinWalletHeader;
