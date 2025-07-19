import { console } from "node:inspector/promises";

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import api from "@/lib/api";

type RegistrationDetails = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

export const useRegister = (
  args?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<{ [key: string]: unknown }>,
      RegistrationDetails
    >,
    "mutationKey" | "mutationFn"
  >,
) => {
  return useMutation({
    ...args,
    mutationKey: ["register"],
    mutationFn: (details: RegistrationDetails) => {
      return api.post("/users/register/", details);
    },
  });
};
