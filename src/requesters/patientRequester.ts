import baseApiRequester from './baseApiRequester';

const mockedPatients = [ 
    { id: 1, name: 'John Doe', dateOfBirth: new Date(), gender: 'Masculino', cpfOrRg: '' },
    { id: 2, name: 'Jane Smith', dateOfBirth: new Date(), gender: 'Feminino', cpfOrRg: '' },
    { id: 3, name: 'Alice Johnson', dateOfBirth: new Date(), gender: 'Feminino', cpfOrRg: '' }
];

export class PatientRequester {
    async loadPatients(): Promise<any> {
        return Promise.resolve(mockedPatients);
    }
}