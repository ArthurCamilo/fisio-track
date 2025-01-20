import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Patient } from '../../global/interfaces/patient';
import { themes } from '../../global/themes';
import AddNewPatient from '../addTest/components/addNewPatient';
import { styles } from './styles';
import PageHeader from '../../components/PageHeader';

const AddPatientView = ({ navigation }: { navigation: any }) => {
    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSaveNewPatient = (patient: Patient) => {
        navigation.goBack();    
    };

    return (
        <View style={styles.container}>
            <PageHeader handleGoBack={handleGoBack} title='Adicione um novo paciente' />
            <AddNewPatient handleSave={handleSaveNewPatient} />
        </View>
    );
};


export default AddPatientView;