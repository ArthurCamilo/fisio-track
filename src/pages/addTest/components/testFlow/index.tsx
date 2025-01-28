import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Patient } from '../../../../global/interfaces/patient';
import { CameraView, useCameraPermissions, CameraRecordingOptions } from 'expo-camera';
import { Button } from '../../../../components/Button';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

interface TestFlowProps {
    selectedPatient: Patient;
    testSetup: TestSetup;
}

const TestFlow = ({ selectedPatient, testSetup } : TestFlowProps) => {

    const navigation = useNavigation();
    const [countdown, setCountdown] = useState(3);
    const [isRecording, setIsRecording] = useState(false);
    const [isRestCountdown, setIsRestCountdown] = useState(false);
    const [isPreparationCountdown, setIsPreparationCountdown] = useState(false);
    const [doneRepetitions, setDoneRepetitions] = useState(0);

    const [permission, requestPermission] = useCameraPermissions();
    const camera = useRef<CameraView | null>(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Precisamos da sua permissão para que o APP use a camera</Text>
                <Button onPress={requestPermission} text='Requisitar permissão' />
            </View>
        );
    }

    const startCountdown = async (durationInSeconds: number) => {
        setCountdown(durationInSeconds);
        return new Promise<void>((resolve, reject) => {
            const interval = setInterval(() => {
                setCountdown((prevCountdown) => {
                    if (prevCountdown === 1) {
                        clearInterval(interval);
                        resolve();
                        return prevCountdown;
                    }
                    return prevCountdown - 1;
                });
            }, 1000);
        });
    };

    const callRest = async (auxDoneRepetitions: number) => {
        setIsRestCountdown(true);
        await startCountdown(testSetup.restDuration);
        setIsRestCountdown(false);
        if (auxDoneRepetitions < testSetup.repetitions) {
            recordVideo();
        } else {
            navigation.goBack();
        }
    };

    const startTest = async () => {
        setIsPreparationCountdown(true);
        await startCountdown(3);
        setIsPreparationCountdown(false);
        recordVideo();
    };

    const recordVideo = async () => {
        const videoDuration = testSetup.effortDuration;
        const options: CameraRecordingOptions = {
            maxDuration: videoDuration,
        };

        setIsRecording(true);
        startCountdown(videoDuration);

        camera?.current?.recordAsync(options).then((data) => {
            setIsRecording(false);
            setDoneRepetitions((prevRepetitions) => prevRepetitions + 1);
            console.log('doneRepetitions', doneRepetitions);
            callRest(doneRepetitions + 1);
        }).catch((error) => {
            console.log(error);
            setIsRecording(false);
        })
    };

    return (
        <View style={styles.container}>
            <CameraView 
                style={styles.camera} 
                facing='back' 
                mode='video' 
                videoQuality='4:3' 
                focusable 
                autofocus='on' 
                mute 
                ref={(ref) => { camera.current = ref }}
            >
                <Text style={styles.repetitionsCounter}>{`Repetições: ${doneRepetitions}/${testSetup.repetitions}`}</Text>
                {
                    isPreparationCountdown && (
                        <Animated.View
                            style={styles.preparationCountdownContainer}
                            key={'preparation-countdown'}
                            entering={FadeIn.duration(400)}
                            exiting={FadeOut.duration(400)}
                        >
                            <Text style={styles.preparationCountdownText}>{countdown}</Text>
                            <Text style={styles.preparationCountdownText}>Prepare-se</Text>
                        </Animated.View>
                    )
                }
                {
                    isRecording && (
                        <Animated.View
                            style={styles.videoCountdownContainer}
                            key={'recording-countdown'}
                            entering={FadeIn.duration(400)}
                            exiting={FadeOut.duration(400)}
                        >
                            <Text style={styles.videoCountdownText}>{countdown}</Text>
                        </Animated.View>
                    )
                }
                {
                    isRestCountdown && (
                        <Animated.View
                            style={styles.preparationCountdownContainer}
                            key={'rest-countdown'}
                            entering={FadeIn.duration(400)}
                            exiting={FadeOut.duration(400)}
                        >
                            <Text style={styles.preparationCountdownText}>{countdown}</Text>
                            {
                                countdown < 4 ? (
                                    <Text style={styles.preparationCountdownText}>Prepara-se</Text>
                                ) : (
                                    <Text style={styles.preparationCountdownText}>Descanse</Text>
                                )
                            }
                        </Animated.View>
                    )
                }
                {
                    !isPreparationCountdown && !isRecording && !isRestCountdown && (
                        <View style={styles.buttonContainer}>
                            <Button onPress={startTest} text={'Iniciar teste'}></Button>
                        </View>
                    )
                }
            </CameraView>
        </View>
    );
};


export default TestFlow;