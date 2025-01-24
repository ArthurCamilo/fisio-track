import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { NavigationProp } from '@react-navigation/native';
import { Test } from '../../global/interfaces/test';
import PageHeader from '../../components/PageHeader';

const TestDetails = ({ route, navigation }: { route: any , navigation: NavigationProp<any> }) => {

    const { test: testParam } = route.params;
    
    const test = testParam as Test;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const flattenResults = (values: number[], type: string) => values.map((item: number, index: number) => {
        return {
            side: type,
            value: item,
            attempt: index + 1
        };
    })

    const listData = flattenResults(test.leftMemberResults, 'Membro Esquerdo').concat(flattenResults(test.rightMemberResult, 'Membro Direito'));

    return (
        <View style={styles.container}>
            <PageHeader handleGoBack={handleGoBack} title='Detalhes do Teste' />
            <View style={styles.testDetails}>
                <TouchableOpacity>
                    <Text>{test.date.toLocaleDateString()}</Text>
                    <Text>{test.type.name}</Text>
                    <Text>{test.patient.name}</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.resultsHeader}>Resultados</Text>
            <FlatList
                data={listData}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.resultItem}>
                        <Text>{item.side}</Text>
                        <Text>Tentativa número {item.attempt}</Text>
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TestDetails;

