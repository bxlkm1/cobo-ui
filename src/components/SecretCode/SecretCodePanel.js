import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { CBText, CBHeader } from '../Core';

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SecretCodePanel = ({ header, descriptions, body, button, children }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Gradient colors={['#6163FF', '#8D04FF']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.9 }} />
      <View style={{ padding: 10 }}>
        <CBHeader bold style={{ paddingTop: 10, paddingBottom: 20 }}>
          {header}
        </CBHeader>
        {descriptions.map(each => (
          <CBText small color={'white'} style={{ paddingTop: 10, paddingBottom: 10 }}>
            {each}
          </CBText>
        ))}
        {body}
      </View>
      {button}
      {children}
    </ScrollView>
  );
};

export default SecretCodePanel;
