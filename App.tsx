import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
