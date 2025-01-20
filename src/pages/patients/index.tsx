import React, { useState } from 'react';
import { View } from 'react-native';
import SelectPatient from '../addTest/components/selectPatient';
import { Patient } from '../../global/interfaces/patient';

const PatientsPage = ({ navigation }: { navigation: any }) => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const handleAddNewPatientButton = () => {
        navigation.navigate('AddNewPatient');
    };

    const handleSelectPatient = (patient: Patient) => {
        navigation.navigate('PatientDetails', { patient });
    };

    return (
        <View style={{ flex: 1 }}>
            <SelectPatient patients={patients} setPatients={setPatients} handleAddNewPatientButton={handleAddNewPatientButton} handleSelectPatient={handleSelectPatient} />
        </View>
    );
};

export default PatientsPage;