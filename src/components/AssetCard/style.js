import styled from 'styled-components/native';
import { CBShadow, CBText } from '../Core';
import { WalletLogo } from '../../icons';

export const Container = styled(CBShadow)`
  background-color: white;
  border-radius: 3;
  margin-vertical: 8;
  shadow-opacity: 0.15;
  elevation: 1;
  shadow-color: ${props => props.theme.backgroundShadowColor};
`;

export const Row = styled.TouchableOpacity`
  width: 100%;
  height: 72;
  padding-left: 16;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

export const IconContent = styled.View`
  justify-content: center;
  margin-right: 12;
`;

export const CoinIcon = styled(WalletLogo)`
  height: 46;
  width: 46;
`;

export const AmountContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const ToggleArea = styled.TouchableOpacity`
  width: 50;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CoinCodeText = styled(CBText)`
  color: ${props => props.theme.CoinCodeColor};
`;

export const AmountText = styled(CBText)`
  font-weight: 800;
  font-size: 17;
  margin-bottom: 5;
  color: ${props => props.theme.amountTextColor};
`;

export const FiatCurrencyAmountText = styled(CBText)`
  color: ${props => props.theme.fiatCurrencyAmountColor};
`;