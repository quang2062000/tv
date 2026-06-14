import { soiBaiDangData } from "../mock/soiBaiDang";
import type { SoiBaiDang } from "../types/soiBaiDang";

export const soiBaiDangService = {
  getAll: async (): Promise<SoiBaiDang> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(soiBaiDangData), 500);
    });
  },
};