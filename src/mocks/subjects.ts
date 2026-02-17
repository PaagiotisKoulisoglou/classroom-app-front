import { Subject } from "../types";

// Mock subjects data for three university courses
export const mockSubjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Foundational concepts of computing, algorithms, and programming.",
        createdAt: new Date("2025-09-01T09:00:00Z").toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Mathematics",
        description: "Vectors, matrices, eigenvalues, and applications to data and systems.",
        createdAt: new Date("2025-09-02T09:00:00Z").toISOString(),
    },
    {
        id: 3,
        code: "HIST210",
        name: "World History Since 1500",
        department: "History",
        description: "Global historical developments from 1500 to the present.",
        createdAt: new Date("2025-09-03T09:00:00Z").toISOString(),
    },
];
