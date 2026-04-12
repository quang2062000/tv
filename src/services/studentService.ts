import { students } from "../mock/students";
import type { Student } from "../types/student";

export const studentService = {
  getAll: async (): Promise<Student[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(students), 500);
    });
  },
};