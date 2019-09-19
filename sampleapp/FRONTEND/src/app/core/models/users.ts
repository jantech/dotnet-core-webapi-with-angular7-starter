
export interface Users {
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
}
