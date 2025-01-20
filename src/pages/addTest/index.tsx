import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { Patient } from '../../global/interfaces/patient';
import { themes } from '../../global/themes';
import SelectPatient from './components/selectPatient';
import AddNewPatient from './components/addNewPatient';
import PageHeader from '../../components/PageHeader';

const AddTest = ({ route, navigation }: { route: any, navigation: any }) => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const { patient: paramPatient } = route.params;
    const [selectedPatient, setSelectedPatient] = useState<Patient>(paramPatient as Patient);

    const [pageStep, setPageStep] = useState('selectPatient');

    const handleAddNewPatientButton = () => {
        setPageStep('addNewPatient');
    };

    const handleSelectPatient = (patient: Patient) => {
        setSelectedPatient(patient);
        setPageStep('addTest');
    }

    const handleGoBack = () => {
        switch (pageStep) {
            case 'addNewPatient':
                setPageStep('selectPatient');
                break;
            default:
                navigation.goBack();
                break;
        }
    };

    const handleSaveNewPatient = (patient: Patient) => {
        setPatients([...patients, patient]);
        setPageStep('selectPatient');
    };

    const renderSubPage = () => {
        switch (pageStep) {
            case 'addNewPatient':
                return <AddNewPatient handleSave={handleSaveNewPatient} />;
            case 'addTest':
                return <View />;
            default:
                return <SelectPatient handleSelectPatient={handleSelectPatient} handleAddNewPatientButton={handleAddNewPatientButton} patients={patients} setPatients={setPatients} />;
        }
    };

    return (
        <View style={styles.container}>
            <PageHeader handleGoBack={handleGoBack} title='Adicione um novo teste' />
            {renderSubPage()}
        </View>
    );
};


export default AddTest;