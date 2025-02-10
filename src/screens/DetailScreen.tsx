import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useCryptoDetail } from '../hooks/useCryptoDetail';
import styles from '../styles/detailStyles';

const DetailScreen: React.FC = () => {
  const { crypto, loading } = useCryptoDetail();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!crypto) {
    return (
      <View style={styles.errorContainer}>
        <Text>Failed to load cryptocurrency details</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.symbol}>{crypto.symbol || 'N/A'}</Text>
        <Text style={styles.name}>{crypto.name || 'Unknown'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <InfoRow label="Price (USD)" value={`$${crypto.price_usd ?? '0.00'}`} />
        <InfoRow
          label="24h Change"
          value={`${crypto.percent_change_24h ?? '0'}%`}
          valueColor={(crypto.percent_change_24h ?? 0) >= 0 ? '#4CAF50' : '#F44336'}
        />
        <InfoRow
          label="Market Cap"
          value={`$${crypto.market_cap_usd ? crypto.market_cap_usd.toLocaleString() : 'N/A'}`}
        />
      </View>
    </ScrollView>
  );
};

const InfoRow: React.FC<{ label: string; value: string; valueColor?: string }> = ({ label, value, valueColor }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, valueColor ? { color: valueColor } : {}]}>{value}</Text>
  </View>
);

export default DetailScreen;
