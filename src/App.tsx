import React from 'react';
import "antd/dist/antd.min.css";
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ShoutView } from './components/ShoutView';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ShoutView />
    </QueryClientProvider>
  );
}


export default App;
