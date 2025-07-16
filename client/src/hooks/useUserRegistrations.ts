import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import api from "@/lib/api";
// dummy hook to fetch information about the user's registered events
// if the user has no registered events, pass the most relevant event instead
export function useUserRegistrations() {
  return useQuery<RegistrationStatus, AxiosError>({
    queryKey: ["RegistrationStatus"],
    queryFn: () => {
      // add an endpoint later
      // do something like return api.get("users/me/event-registration-overview")
      return {
        // filler event
        eventName: "Transplant WA Funrun 2025",
        image: "/logo-trans.png",
        description: "Join us for the annual transplant event!",
        hasFormInProgress: true,
        hasCompletedForms: true,
        registrationLink: "/register/123",
      };
    },
  });
}
