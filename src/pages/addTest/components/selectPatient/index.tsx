import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { Patient } from '../../../../global/interfaces/patient';
import { themes } from '../../../../global/themes';
import { PatientRequester } from '../../../../requesters/patientRequester';


interface SelectPatientProps {
     handleAddNewPatientButton: () => void, 
     setPatients: (patients: Patient[]) => void,
     patients: Patient[],
     handleSelectPatient: (patient: Patient) => void
};

const SelectPatient = ({ handleAddNewPatientButton, setPatients, patients, handleSelectPatient }: SelectPatientProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const requester = new PatientRequester();

    const handleSearch = async () => {
        try {
            const data = await requester.loadPatients();
            setPatients(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Procure por um paciente (CPF, RG, Nome)"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
            />
            <FlatList
                data={patients}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <TouchableOpacity onPress={handleAddNewPatientButton} style={styles.addNewPatientButton}>
                        <Entypo 
                            name="plus"  
                            style={{ color: themes.Colors.primary, position: 'absolute', left: 10 }}
                            size={20}
                        />
                        <Text style={styles.addNewPatientText}>Adicionar novo paciente</Text>
                    </TouchableOpacity>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.patientItem} onPress={() => handleSelectPatient(item)}>
                        <Text>Nome: {item.name}</Text>
                        <Text>Documento: {item.id}</Text>
                        <Text>Data de Nascimento: {item.dateOfBirth.toLocaleDateString()}</Text>
                        <Text>Sexo: {item.gender}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};


export default SelectPatient;