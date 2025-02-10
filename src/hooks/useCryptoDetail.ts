import { useState, useEffect } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import CryptoService from '../services/CryptoService';
import { CryptoCurrency } from '../types/CryptoTypes';

type RouteParams = {
  CryptoDetail: {
    cryptoId: string;
  };
};

export const useCryptoDetail = () => {
  const route = useRoute<RouteProp<RouteParams, 'CryptoDetail'>>();
  const [crypto, setCrypto] = useState<CryptoCurrency | null>(null);
  const [loading, setLoading] = useState(true);
  const cryptoService = new CryptoService();

  useEffect(() => {
    if (route.params?.cryptoId) {
      loadCryptoDetail();
    }
  }, [route.params?.cryptoId]);

  const loadCryptoDetail = async () => {
    try {
      const data = await cryptoService.getCryptoDetail(route.params.cryptoId);
      setCrypto(data);
    } catch (error) {
      console.error('Error loading crypto detail:', error);
    } finally {
      setLoading(false);
    }
  };

  return { crypto, loading };
};
