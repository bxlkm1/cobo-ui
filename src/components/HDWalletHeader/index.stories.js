import React from 'react';
import { Image, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { AssetWalletHeader, CoinWalletHeader } from './index';
import coins from '../../icons/CoinLogos';

storiesOf('AssetWalletHeader', module)
  .add('default', () => (
    <AssetWalletHeader
      fiatCurrencyValue={'$48,213 USD'}
      BTCValue={'9.20 BTC'}
      addWalletPress={() => console.log('hello icon is pressed')}
      theme={'dark'}
    >
      <Text>This is the children</Text>
    </AssetWalletHeader>
  ))
  .add('withBackupHd', () => (
    <AssetWalletHeader
      fiatCurrencyValue={'$48,213 USD'}
      BTCValue={'9.20 BTC'}
      showBackupHD
      backupHdText="Please Backup"
      toBackupHDWallet={() => console.log('backup is pressed')}
      addWalletPress={() => console.log('hello icon is pressed')}
      theme={'dark'}
    >
      <Text>This is the children</Text>
    </AssetWalletHeader>
  ));

const { ETH } = coins;
const ETHIcon = <Image source={ETH} />;

storiesOf('CoinWalletHeader', module)
  .add('default', () => (
    <CoinWalletHeader
      fiatCurrencyValue={'$48,213'}
      coinValue={'9.20 BTC'}
      percent={'+23.45%'}
      icon={ETHIcon}
      color={'#50DFBE'}
      theme={'default'}
    >
      <Text>This is the children</Text>
    </CoinWalletHeader>
  ))
  .add('HD', () => (
    <CoinWalletHeader
      fiatCurrencyValue={'$48,213'}
      coinValue={'9.20 BTC'}
      percent={'+23.45%'}
      icon={ETHIcon}
      color={'#50DFBE'}
      theme={'dark'}
    >
      <Text>This is the children</Text>
    </CoinWalletHeader>
  ))
  .add('HardWare', () => (
    <CoinWalletHeader
      fiatCurrencyValue={'$48,213'}
      coinValue={'9.20 BTC'}
      percent={'+23.45%'}
      icon={ETHIcon}
      color={'#50DFBE'}
      theme={'black'}
    >
      <Text>This is the children</Text>
    </CoinWalletHeader>
  ));
