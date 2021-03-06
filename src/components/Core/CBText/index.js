import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { FontColors } from '../../../theme/CBColor';

const CBText = styled.Text`
  font-size: ${props => (props.small ? 13 : 15)};
  color: ${props => props.colorHex || FontColors[props.color]};
  font-weight: ${props => {
    if (props.bold) {
      return 600;
    }
    if (props.superBold) {
      return 800;
    }
    return 400;
  }};
`;

CBText.propTypes = {
  color: PropTypes.oneOf([
    'dark',
    'gray',
    'grayLight',
    'primary',
    'white',
    'red',
    'blue',
    'orange',
    'candyRed',
  ]),
  colorHex: PropTypes.string,
};

CBText.defaultProps = {
  color: 'gray',
  colorHex: undefined,
};

export default CBText;
