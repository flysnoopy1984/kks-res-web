
import { useState, useCookie } from "nuxt/app";

export const useInfo = () =>
  useState("userData", () => {
    return {
      username: "张三",
      age: 33,
    };
  });

//apiToken
export const useApiToken = () => 
  useState<String>("token", () => "");
