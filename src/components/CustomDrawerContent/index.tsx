import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useAuth } from '../../contexts/auth';
import { style } from './styles';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';

export function CustomDrawerContent(props) {

    const { logout } = useAuth();

    return (
        <>
            <DrawerContentScrollView {...props} style={{ flex: 1 }}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem
                style={[style.logoutButton, { marginBottom: 30, marginLeft: 16 }]}
                label="Sair do Aplicativo"
                icon={({ focused, size, color }) => (
                    <MaterialIcons name='arrow-back' size={size} color={color} />
                )}
                inactiveTintColor={`${themes.Colors.primary}`}
                onPress={() => logout()}
            />
        </>
    );
}