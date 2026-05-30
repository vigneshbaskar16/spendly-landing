import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { ExpenseProvider } from './context/ExpenseContext';
import HomeScreen           from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import ChartsScreen         from './screens/ChartsScreen';
import TransactionsScreen   from './screens/TransactionsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // ── ExpenseProvider makes data available to ALL screens ──────────────────
    <ExpenseProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#0B0C0A' },
            headerTintColor: '#F0F0EE',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarStyle: {
              backgroundColor: '#1C1E1A',
              borderTopColor: '#2a2a2a',
              paddingBottom: 8,
              paddingTop: 6,
              height: 65,
            },
            tabBarActiveTintColor: '#B8EF43',
            tabBarInactiveTintColor: '#5A5D55',
            tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏠</Text>,
              title: 'Spendly',
            }}
          />
          <Tab.Screen
            name="Transactions"
            component={TransactionsScreen}
            options={{
              tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📋</Text>,
              title: 'Transactions',
            }}
          />
          <Tab.Screen
            name="Add"
            component={AddTransactionScreen}
            options={{
              tabBarIcon: ({ color }) => <Text style={{ fontSize: 26 }}>➕</Text>,
              title: 'Add',
            }}
          />
          <Tab.Screen
            name="Charts"
            component={ChartsScreen}
            options={{
              tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📊</Text>,
              title: 'Charts',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
}