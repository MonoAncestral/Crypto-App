import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CryptoCurrency } from '../types/CryptoTypes';

interface Props {
  crypto: CryptoCurrency;
  onPress: (crypto: CryptoCurrency) => void;
}

const ListItem: React.FC<Props> = ({ crypto, onPress }) => {
  const priceColor = crypto.percent_change_24h >= 0 ? '#4CAF50' : '#F44336';

  return (
    <TouchableOpacity onPress={() => onPress(crypto)} style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.symbol}>{crypto.symbol}</Text>
        <Text style={styles.name}>{crypto.name}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.price}>${crypto?.price_usd && crypto.price_usd}</Text>
        <Text style={[styles.change, { color: priceColor }]}>
          {crypto.percent_change_24h}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  change: {
    fontSize: 14,
  },
});

export default ListItem;