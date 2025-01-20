import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PatientsPage from '../pages/patients';
import TestsPage from '../pages/tests';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../pages/home';
import { CustomDrawerContent } from '../components/CustomDrawerContent';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


export default function DrawerRoutes() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: true }}
            initialRouteName='Patients'
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
             <Drawer.Screen 
                name="Patients"
                component={PatientsPage} 
                options={{ 
                    title: 'Lista de Pacientes',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialIcons name='account-circle' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen 
                name="Tests" 
                component={TestsPage} 
                options={{ 
                    title: 'Histórico de Testes',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialIcons name='format-list-bulleted' size={size} color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}