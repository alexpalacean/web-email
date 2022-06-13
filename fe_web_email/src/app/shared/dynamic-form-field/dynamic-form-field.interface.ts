export interface FormFields {
    type?: MatInputTypes;
    formControlName: string;
    label: string;
}

export enum MatInputTypes {
    PASSWORD = 'password',
    TEXT = 'text'
}