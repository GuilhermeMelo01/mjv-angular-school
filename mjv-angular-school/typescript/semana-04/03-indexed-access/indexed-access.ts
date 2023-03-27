export class CourseSubject {
    id: number;
    name: string;
}

export class Professor {
    name: string;
    age: number;
    courseSubject: CourseSubject[];
}

export type professorName = Professor['name'];

export type professorCourseSubjects = Professor['courseSubject']

export type professorCourseSubjectId = Professor['courseSubject'][number]['id'];

export type professorNameOrAge = Professor['name' | 'age'];

export type professorPropretyTypes = Professor[keyof Professor]