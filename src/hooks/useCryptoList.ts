import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CryptoService from '../services/CryptoService';
import { CryptoCurrency } from '../types/CryptoTypes';

export const useCryptoList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoCurrency[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const cryptoService = new CryptoService();

  useEffect(() => {
    loadCryptoData();
  }, []);

  useEffect(() => {
    filterCryptos();
  }, [searchQuery, cryptocurrencies]);

  const loadCryptoData = async () => {
    try {
      const data = await cryptoService.getCryptoList();
      setCryptocurrencies(data);
    } catch (error) {
      console.error('Error loading crypto data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCryptos = () => {
    if (!cryptocurrencies.length) return;

    const filtered = cryptocurrencies.filter(
      crypto =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  const handleCryptoPress = (crypto: CryptoCurrency) => {
    navigation.navigate('CryptoDetail', { cryptoId: crypto.id });
  };

  return { searchQuery, setSearchQuery, filteredCryptos, loading, handleCryptoPress };
};
