import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { Button } from '../../components/Button';

const TestsPage = () => {
    const { logout } = useAuth();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ textAlign: 'center' }}>This is the tests page</Text>
            <Button text="Logout" onPress={logout}/>
        </View>
    );
};

export default TestsPage;