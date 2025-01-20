import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationRequester } from '../../requesters/authenticationRequester';
import Toast from 'react-native-toast-message';

interface User {
    fullName: string;
    email: string;
}

interface AuthContextData {
    logged: boolean;
    user: User | null;
    token: string | null;
    login(email: string, password: string): Promise<void>;
    logout(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const authenticationRequester = new AuthenticationRequester();

    async function loadStoragedData() {
        try {
            const storedToken = await AsyncStorage.getItem('@FISIOTRACKAuth:token');
            const storedUser = await AsyncStorage.getItem('@FISIOTRACKAuth:user');
            console.log('StoredToken', storedToken)
            console.log('StoredUser', storedUser)
            if (storedToken && storedUser) {
                setToken(storedToken);
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Failed to load stored data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadStoragedData();
    }, []);

    async function login(email: string, password: string) {
        setLoading(true);

        try {
            const response = await authenticationRequester.authenticate(email, password);
            await AsyncStorage.setItem('@FISIOTRACKAuth:token', response.token);
            console.log(response.user)
            await AsyncStorage.setItem('@FISIOTRACKAuth:user',  JSON.stringify(response.user));
            await loadStoragedData();
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: error.response?.data || 'Unexpected error occurred',
            });
            setLoading(false);
        }
    }

    async function logout() {
        try {
            await AsyncStorage.clear();
            setToken(null);
            setUser(null);
        } catch (error) {
            console.error('Failed to clear storage:', error);
        }
    }

    return (
        <AuthContext.Provider value={{ logged: token != null, user, token, logout, login, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
