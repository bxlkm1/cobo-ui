import React from 'react';
import { storiesOf } from '@storybook/react-native';
import MnemonicImporter from './index';

storiesOf('Mnemonic Importer', module)
  .add('default', () => (
    <MnemonicImporter
      locale={'zh'}
      onNextPage={state => {
        console.log(state);
      }}
      words={[]}
      wordsNumber={12}
      theme={'dark'}
      onCancel={() => console.log('this is the cancel function')}
    />
  ))
  .add('words', () => (
    <MnemonicImporter
      locale={'zh'}
      onNextPage={state => {
        console.log('this is the callback props', state);
      }}
      words={[
        'butter',
        'erosion',
        'upper',
        'bullet',
        'original',
        'angle',
        'people',
        'tobacco',
        'you',
        'practice',
        'grab',
        'crowd',
      ]}
      theme={'dark'}
      wordsNumber={12}
      onCancel={() => console.log('this is the cancel function')}
    />
  ));
