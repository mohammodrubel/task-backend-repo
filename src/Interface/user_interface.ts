
export type T_user = {
    name:string,
    email: string;
    password: string;
    role: 'Admin' | 'User'; 
    isDeleted: boolean;
};

