
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    skills: Skill[];
    createdDate: Date;
}

export interface Skill {
    id: number;
    skillName: string;
    createdDate: Date;
}
