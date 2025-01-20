import { Test } from '../global/interfaces/test';
import baseApiRequester from './baseApiRequester';

const mockedTests: Test[] = [
    {
        date: new Date(),
        id: 1,
        patient: {
            id: 1,
            name: 'João da Silva'
        },
        type: {
            id: 1,
            name: 'Teste de Fadiga'
        },
        leftMemberResults: [1, 2, 3],
        rightMemberResult: [1, 2, 3]
    },
    {
        date: new Date(),
        id: 2,
        patient: {
            id: 1,
            name: 'João da Silva'
        },
        type: {
            id: 1,
            name: 'Teste de Fadiga'
        },
        leftMemberResults: [1, 2, 3],
        rightMemberResult: [1, 2, 3]
    },
    {
        date: new Date(),
        id: 3,
        patient: {
            id: 1,
            name: 'João da Silva'
        },
        type: {
            id: 1,
            name: 'Teste de Fadiga'
        },
        leftMemberResults: [1, 2, 3],
        rightMemberResult: [1, 2, 3]
    }
];

export class TestsRequester {
    async loadTests(): Promise<Test[]> {
        return Promise.resolve(mockedTests);
    }

    async getTestsByPatientId(patientId: number): Promise<Test[]> {
        return Promise.resolve(mockedTests);
    }
}