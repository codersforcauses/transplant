import { url } from "inspector";
import Image from "next/image";
import { JSX } from "react";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useUserRegistrations } from "@/hooks/useUserRegistrations";
// First of all, nav needs to be the same as the logout page but with new text

// maybe make a new type for metadata for events, and then have another hook for
// fetching the most relevant event to the user
// as well as one final hook for the registration state?

export default function Home_LoggedIn() {
  // TODO: add some loading behaviour/display
  const { data } = useUserRegistrations();
  // default incase the hook/api explodes
  const regStatus = data ?? {
    eventName: "Oops, looks like there's not much going on at the moment!",
    image: "/logo-trans.png",
    description:
      "Come back later or feel free to reach out to us at @email to let us know this is empty!",
    hasFormInProgress: false,
    hasCompletedForms: false,
    registrationLink: "",
  };

  return (
    <>
      <Navbar />
      {/* First of all, fetch the most relevant event from database
      * if the user has a registration in progress or has completed the registration
      but the event hasn't commenced yet, fetch that event's metadata, e.g. the image, 
      title, and a short subscription. 
      * Otherwise, fetch the most recent upcoming transplant event(s?)
      * could also be interesting to fetch the most relevant event to the user's
      * location via their ip
      * 
      * this doesn't need to be super robust, there isn't an event class in the schema
    */}
      {/* event metadata */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-gray-100">
            <Image
              src={regStatus.image}
              alt="Partner 1"
              width={200}
              height={80}
              className="mx-auto object-contain"
            />
          </div>
          {/* information panel for event */}
          <div>
            <h1 className="mb-6 text-2xl font-bold leading-tight sm:text-4xl lg:text-4xl">
              Title describing relevant event
            </h1>
            <h4 className="mb-6 max-w-md text-sm text-gray-600">
              {regStatus.description}
            </h4>
            {/* buttons */}
            <div className="mb-1 flex max-w-md flex-wrap space-y-4">
              <Button size="lg" variant="gradient">
                {regStatus.hasFormInProgress
                  ? "Continue your registration"
                  : "Start a new registration"}
              </Button>
              <div className="flex flex-wrap gap-2">
                {regStatus.hasFormInProgress && (
                  <Button size="sm" variant="secondary">
                    Start a new registration
                  </Button>
                )}
                {regStatus.hasCompletedForms && (
                  <Button size="sm" variant="secondary">
                    Manage existing registrations
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* replace with schedule component */}
      <div className="mx-auto mt-12 flex max-w-6xl">
        <h2 className="mx-auto text-xl font-semibold">Schedule goes here!</h2>
      </div>
    </>
  );
}
