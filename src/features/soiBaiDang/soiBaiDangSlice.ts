import { createSlice } from "@reduxjs/toolkit";
import { fetchSoiBaiDang } from "./soiBaiDangThunks";
import type { SoiBaiDang } from "../../types/soiBaiDang";

interface State {
  data: SoiBaiDang;
  loading: boolean;
}

const initialState: State = {
  data: {
    dienTich:0,gia:0,giaM2:0,id:0,loaiHinh:"",sdt:"",tinh:"",xaPhuong:""
  },
  loading: false,
};

const studentSlice = createSlice({
  name: "soiBaiDang",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoiBaiDang.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSoiBaiDang.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSoiBaiDang.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default studentSlice.reducer;