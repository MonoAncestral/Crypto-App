import axios, { AxiosInstance } from 'axios';
import { CryptoCurrency } from '../types/CryptoTypes';

class CryptoService {
  private baseUrl: string;
  private httpClient: AxiosInstance;

  constructor(baseUrl: string = 'https://api.coinlore.net/api', httpClient: AxiosInstance = axios) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient;
  }

  async getCryptoList(): Promise<CryptoCurrency[]> {
    try {
      const response = await this.httpClient.get(`${this.baseUrl}/tickers/`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      throw error;
    }
  }

  async getCryptoDetail(id: string): Promise<CryptoCurrency> {
    try {
      const response = await this.httpClient.get(`${this.baseUrl}/ticker/?id=${id}`);
      return response.data[0];
    } catch (error) {
      console.error('Error fetching crypto detail:', error);
      throw error;
    }
  }
}

export default CryptoService;
