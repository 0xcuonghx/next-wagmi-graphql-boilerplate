'use client';
import WagmiProvider from '@/app/providers/wagmi/WagmiProvider';
import { ApolloProvider } from './apollo/ApolloProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AlertProvider } from './alerts/AlertProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider>
      <WagmiProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AlertProvider>
            {children}
          </AlertProvider>
        </LocalizationProvider>
      </WagmiProvider>
    </ApolloProvider>
  );
}

export default Providers;
