import React, { useEffect } from "react";

import { createStackNavigator }from '@react-navigation/stack';
import Login from "../pages/login";
import { useAuth } from "../contexts/auth";
import AddTestPage from "../pages/addTest";
import AddPatientView from "../pages/addPatient";
import DrawerRoutes from "./drawer.routes";
import TestsPage from "../pages/tests";
import PatientsPage from "../pages/patients";
import PatientDetails from "../pages/patientDetails";
import TestDetails from "../pages/testDetails";

export default function Routes (state: any, navigation: any) {
    const { logged } = useAuth();
    const Stack = createStackNavigator();  

    console.log('IsLogged', logged)

    return(
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'#FFF'
                }
            }}
        >
            {logged ? (
                <>
                    <Stack.Screen
                        name="DrawerRoutes"
                        component={DrawerRoutes}
                    />
                    <Stack.Screen   
                        name="AddTest"
                        component={AddTestPage}
                    />
                    <Stack.Screen   
                        name="AddNewPatient"
                        component={AddPatientView}
                    />
                    <Stack.Screen   
                        name="Tests"
                        component={TestsPage}
                    />
                    <Stack.Screen   
                        name="Patients"
                        component={PatientsPage}
                    />
                    <Stack.Screen   
                        name="PatientDetails"
                        component={PatientDetails}
                    />
                    <Stack.Screen   
                        name="TestDetails"
                        component={TestDetails}
                    />
                </>
            ) : (
                <Stack.Screen
                    name="Login" 
                    component={Login}
                />
            )}
            
        </Stack.Navigator>
    )
}