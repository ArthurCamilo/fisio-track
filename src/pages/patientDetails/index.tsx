import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { Patient } from '../../global/interfaces/patient';
import { styles } from './styles';
import { themes } from '../../global/themes';
import { Entypo } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { TestsRequester } from '../../requesters/testsRequester';
import { Test } from '../../global/interfaces/test';
import { Button } from '../../components/Button';
import PageHeader from '../../components/PageHeader';

const PatientDetails = ({ route, navigation }: { route: any , navigation: NavigationProp<any> }) => {

    const [tests, setTests] = useState<Test[]>([]);
    const { patient: paramPatient } = route.params;
    
    const patient = paramPatient as Patient;
    const testRequester = new TestsRequester();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleNewTest = () => {
        navigation.navigate('AddTest', { patient });
    };

    useEffect(() => {
        const fetchTests = async () => {
            const tests = await testRequester.getTestsByPatientId(patient.id);
            setTests(tests);
        };
        fetchTests();
    }, []);

    return (
        <View style={styles.container}>
            <PageHeader handleGoBack={handleGoBack} title='Detalhes do Paciente' />
            <View style={styles.patientDetails}>
                <TouchableOpacity>
                    <Text>Nome: {patient.name}</Text>
                    <Text>Documento: {patient.id}</Text>
                    <Text>Data de Nascimento: {patient.dateOfBirth.toLocaleDateString()}</Text>
                    <Text>Sexo: {patient.gender}</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.testsHeader}>Testes</Text>
            <FlatList
                data={tests}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.testItem} onPress={() => navigation.navigate('TestDetails', { test: item })}>
                        <Text>{item.date.toLocaleDateString()}</Text>
                        <Text>{item.type.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.buttonView}>
                <Button text='INICIAR NOVO TESTE' onPress={handleNewTest} />
            </View>
        </View>
    );
};

export default PatientDetails;

