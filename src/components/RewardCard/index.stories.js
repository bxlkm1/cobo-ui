import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import RewardCard from './index';

storiesOf('RewardCard', module).add('default', () => (
  <View style={{ flex: 1, backgroundColor: '#F5F5F8', paddingHorizontal: 16, paddingVertical: 20 }}>
    <RewardCard
      isOpen
      coinCode="LBTC"
      displayCode="LBTC"
      slogan="300%+ Yearly"
      earned="120000.32479000"
      earnedText="earned"
      joinText="Join now"
      paidText="Payment day"
      paidInfo="Pay at 8:00 daily"
      readmoreText="Read more"
      rulesText="Rules"
      viewRulesText="View Rules"
      tags={['Smart voting', 'No lock period', 'No risk', '0.01 DASH from the vote']}
      onJoinPress={() => {
        console.log('onJoinPress');
      }}
      onRulesButtonPress={() => {
        console.log('onRulesButtonPress');
      }}
      onCardPress={() => {
        console.log('onCardPress');
      }}
    />
  </View>
));
