import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Patient } from '../../global/interfaces/patient';
import { themes } from '../../global/themes';
import { styles } from './styles';

const PageHeader = ({ handleGoBack, title }: { handleGoBack: () => void, title: String }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
                <Entypo 
                    name="chevron-left"
                    style={{ color: themes.Colors.gray }}
                    size={30}
                />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>{title}</Text>
        </View>
    );
};


export default PageHeader;