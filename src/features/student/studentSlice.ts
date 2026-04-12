import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "./studentThunks";
import type { Student } from "../../types/student";

interface State {
  list: Student[];
  loading: boolean;
}

const initialState: State = {
  list: [],
  loading: false,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default studentSlice.reducer;