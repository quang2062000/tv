import { createAsyncThunk } from "@reduxjs/toolkit";
import { soiBaiDangService } from "../../services/soiBaiDangService";

export const fetchSoiBaiDang = createAsyncThunk(
  "soiBaiDang/fetch",
  async () => {
    return await soiBaiDangService.getAll();
  }
);