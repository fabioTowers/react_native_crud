import AppNavigator from './src/AppNavigator';
import { UsersProvider } from './src/context/UsersContext';

export default function App() {
  return (
    <UsersProvider>
        <AppNavigator />
    </UsersProvider>
  );
}
