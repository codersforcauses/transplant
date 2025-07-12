import Link from "next/link";
import { useState } from "react";

import { Button } from "../button";
import { GoogleIcon } from "../google-icon";
import { Separator } from "../separator";

const ParticipantForm = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div className="space-y-6">
        <h1 className="mb-6 text-2xl font-bold"> Personal Details</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block font-medium text-primary">First Name</label>
            <input
              className="w-full rounded border border-border p-2 font-medium text-primary"
              placeholder="Your First Name"
              name="firstName"
              autoComplete="given-name"
            ></input>
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Middle Name (optional)
            </label>
            <input
              className="w-full rounded border border-border p-2 font-medium text-primary"
              placeholder="Your Middle Name"
              name="middleName"
              autoComplete="additional-name"
            ></input>
          </div>
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-primary">Last Name</label>
          <input
            className="w-full rounded border border-border p-2"
            placeholder="Your Last Name"
            name="lastName"
            autoComplete="family-name"
          ></input>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block font-medium text-primary">Gender</label>
            <select
              className="w-full rounded border border-border p-2"
              name="gender"
              autoComplete="sex"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Non-Binary">Non-Binary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Date of Birth
            </label>
            <input
              className="w-full rounded border border-border p-2 font-medium text-primary"
              placeholder="dd/mm/yyyy"
              name="dateOfBirth"
              type="date"
              autoComplete="bday"
            ></input>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Contact Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Email Address
            </label>
            <input
              className="w-full rounded border border-border p-2"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              autoComplete="email"
            ></input>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Mobile Phone
              </label>
              <input
                className="w-full rounded border border-border p-2"
                placeholder="Your Mobile Phone"
                name="mobilePhone"
                type="tel"
                autoComplete="mobile tel"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Day Phone
              </label>
              <input
                className="w-full rounded border border-border p-2"
                placeholder="Your Day Phone"
                name="dayPhone"
                type="tel"
                autoComplete="work tel"
              ></input>
            </div>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-medium">Postal Address</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Address Line 1
              </label>
              <input
                className="w-full rounded border border-border p-2"
                name="addressLine1"
                autoComplete="address-line1"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Address Line 2
              </label>
              <input
                className="w-full rounded border border-border p-2"
                name="addressLine2"
                autoComplete="address-line2"
              ></input>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label className="block font-medium text-primary">State</label>
                <input
                  className="w-full rounded border border-border p-2"
                  name="state"
                  autoComplete="address-level1"
                ></input>
              </div>
              <div className="space-y-2">
                <label className="block font-medium text-primary">
                  Postcode
                </label>
                <input
                  className="w-full rounded border border-border p-2"
                  name="postcode"
                  autoComplete="postal-code"
                ></input>
              </div>
              <div className="space-y-2">
                <label className="block font-medium text-primary">
                  Country
                </label>
                <input
                  className="w-full rounded border border-border p-2"
                  name="country"
                  autoComplete="country-name"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Emergency Contact</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Full Name
              </label>
              <input
                className="w-full rounded border border-border p-2"
                name="emergencyContactName"
                autoComplete="name"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Phone Number
              </label>
              <input
                className="w-full rounded border border-border p-2"
                name="emergencyContactPhone"
                type="tel"
                autoComplete="tel"
              ></input>
            </div>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-medium">
            Secondary Emergency Contact
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Full Name (optional)
              </label>
              <input
                className="w-full rounded border border-border p-2"
                name="secondaryEmergencyContactName"
                autoComplete="name"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="block font-medium text-primary">
                Phone Number (optional)
              </label>
              <input
                className="w-full rounded border border-border p-2"
                name="secondaryEmergencyContactPhone"
                type="tel"
                autoComplete="tel"
              ></input>
            </div>
          </div>
        </div>
      </div>

      {/* End Page */}
      <div className="space-y-6">
        <h1 className="mb-6 text-2xl font-bold">Country Details</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              In which country were you born?
            </label>
            <input
              className="w-full rounded border border-border p-2"
              name="birthCountry"
              autoComplete="country-name"
            >
              {/**need to import somethign here probably */}
            </input>
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Language Spoken
            </label>
            <input
              className="w-full rounded border border-border p-2"
              name="language"
              autoComplete="language"
            ></input>
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Are you of Aboriginal or Torres Strait Islander origin?
            </label>
            <input
              className="w-full rounded border border-border p-2"
              name="indigenousStatus"
            ></input>
          </div>
        </div>
      </div>

      {/**End Page  */}
      <div className="space-y-6">
        <h1 className="mb-6 text-2xl font-bold">Competition Details</h1>
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block font-medium text-primary">
              Are you a transplant recipient or a supporter?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="participantType" value="recipient" />
                Transplant Recipient
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="participantType" value="supporter" />
                Supporter
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block font-medium text-primary">
              Will you be competing in the games?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="competing" value="yes" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="competing" value="no" />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Registration category:
            </label>
            <select
              className="w-full rounded border border-border p-2"
              name="registrationCategory"
            >
              <option value="">Please select</option>
              <option value="competitor">Competitor</option>
              <option value="non-competitor">Non-competitor</option>
              <option value="junior">Junior (under 18)</option>
              <option value="family">Family member</option>
            </select>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Country Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Which country will you represent in the games?
            </label>
            <input
              className="w-full rounded border border-border p-2"
              name="representingCountry"
            ></input>
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Which state/territory will you represent?
            </label>
            <input
              className="w-full rounded border border-border p-2"
              name="representingState"
            ></input>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Insurance Details</h2>
        <div className="space-y-4">
          <div className="space-y-3">
            <label className="block font-medium text-primary">
              Do you have appropriate travel insurance?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="hasInsurance" value="yes" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="hasInsurance" value="no" />
                No
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-primary">
              Please provide details:
            </label>
            <input
              className="w-full rounded border border-border p-2"
              name="insuranceDetails"
            ></input>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Volunteering</h2>
        <div className="space-y-4">
          <div className="space-y-3">
            <label className="block font-medium text-primary">
              Would you like to volunteer at the games?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="volunteer" value="yes" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="volunteer" value="no" />
                No
              </label>
            </div>
          </div>
          <div className="space-y-3">
            <label className="block font-medium text-primary">
              Would you like more information about Junior Activities at the
              games?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="juniorActivities" value="yes" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="juniorActivities" value="no" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      {/**End Page  */}
    </div>
  );
};

export default ParticipantForm;
