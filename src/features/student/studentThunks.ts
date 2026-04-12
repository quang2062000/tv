import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentService } from "../../services/studentService";

export const fetchStudents = createAsyncThunk(
  "student/fetch",
  async () => {
    return await studentService.getAll();
  }
);