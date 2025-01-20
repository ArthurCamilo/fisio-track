import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from './styles';
import { Button } from "../../../../components/Button";
import { Patient } from '../../../../global/interfaces/patient';

interface AddNewPatientProps {
    handleSave: (patient: Patient) => void;
}

const AddNewPatient = ({ handleSave } : AddNewPatientProps) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [cpfOrRg, setCpfOrRg] = useState('');
    const [gender, setGender] = useState('');

    const [show, setShow] = useState(false);

    const onChange = (_: DateTimePickerEvent, selectedDate: Date) => {
        setShow(false);
        setDateOfBirth(selectedDate);
    };

    const showMode = () => {
        setShow(true);
    };

    const handleSaveInternal = () => {
        const patient: Patient = {
            id: 0,
            name,
            dateOfBirth,
            cpfOrRg,
            gender
        };
        handleSave(patient);
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                
                <Text>Nome Completo</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} />

                <Text>Data de Nascimento</Text>
                <TextInput showSoftInputOnFocus={false} style={styles.input} value={`${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`} onPress={showMode} />
            
                {show && (
                    <DateTimePicker
                        value={dateOfBirth}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => onChange(event, selectedDate || dateOfBirth)}
                    />
                )}
                
                <Text>CPF ou RG</Text>
                <TextInput style={styles.input} value={cpfOrRg} onChangeText={setCpfOrRg} />
                
                <Text>Sexo</Text>
                <View style={styles.radioGroup}>
                    <TouchableOpacity onPress={() => setGender('Masculino')} style={[styles.radioButton, gender === 'Masculino' && styles.selectedRadioButton]}>
                        <Text>Masculino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender('Feminino')} style={[styles.radioButton, gender === 'Feminino' && styles.selectedRadioButton]}>
                        <Text>Feminino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender('Outro')} style={[styles.radioButton, gender === 'Outro' && styles.selectedRadioButton]}>
                        <Text>Outro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button text='SALVAR' onPress={handleSaveInternal} />
            </View>
        </View>
    );
};


export default AddNewPatient;