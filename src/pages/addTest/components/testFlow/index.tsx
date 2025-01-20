import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from './styles';
import { themes } from '../../../../global/themes';
import { Button } from "../../../../components/Button";
import { Patient } from '../../../../global/interfaces/patient';

interface TestFlowProps {
    selectedPatient: Patient
}

const TestFlow = ({ selectedPatient } : TestFlowProps) => {
    return (
        <View style={styles.container}>
            Tela do teste
        </View>
    );
};


export default TestFlow;