export interface Test {
    date: Date; 
    id: number; 
    patient: {
        id: number;
        name: string;
    },
    type: {
        id: number;
        name: string;
    },
    leftMemberResults: number[],
    rightMemberResult: number[],
};