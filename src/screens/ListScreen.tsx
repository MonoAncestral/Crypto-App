import React from 'react';
import { View, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { useCryptoList } from '../hooks/useCryptoList';
import CryptoListItem from '../components/ListItem';
import styles from '../styles/listStyles';

const ListScreen: React.FC = () => {
  const { searchQuery, setSearchQuery, filteredCryptos, loading, handleCryptoPress } = useCryptoList();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search cryptocurrencies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredCryptos}
        renderItem={({ item }) => (
          <CryptoListItem crypto={item} onPress={handleCryptoPress} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListScreen;
