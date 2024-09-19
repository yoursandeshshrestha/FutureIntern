"use client";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import "@radix-ui/themes/styles.css";
import {
  Theme,
  TextField,
  TextArea,
  RadioGroup,
  Button,
} from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faStar,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function JobForm() {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  return (
    <Theme>
      <form action="" className="container mt-6 flex flex-col gap-4">
        <TextField.Root placeholder="Job Title" />

        <div className="grid grid-cols-3 gap-6 *:grow">
          <div>
            <p>Remote?</p>
            <RadioGroup.Root defaultValue="onsite" name="remote-options">
              <RadioGroup.Item value="onsite" id="onsite">
                On-Site
              </RadioGroup.Item>
              <RadioGroup.Item value="hybrid" id="hybrid">
                Hybrid
              </RadioGroup.Item>
              <RadioGroup.Item value="remote" id="remote">
                Remote
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            <p>Full time?</p>
            <RadioGroup.Root defaultValue="full" name="job-type">
              <RadioGroup.Item value="full" id="full">
                Full-time
              </RadioGroup.Item>
              <RadioGroup.Item value="project" id="project">
                Project
              </RadioGroup.Item>
              <RadioGroup.Item value="part" id="part">
                Part-time
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Salary (per year)
            <TextField.Root>
              <TextField.Slot>$</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          <p>Location</p>
          <div className="flex gap-4 *:grow">
            <CountrySelect
              onChange={(e) => setCountryId(e?.id || null)}
              placeHolder="Select Country"
            />
            <StateSelect
              countryid={countryId}
              onChange={(e) => setStateId(e?.id || null)}
              placeHolder="Select State"
            />
            <CitySelect
              countryid={countryId}
              stateid={stateId}
              onChange={(e) => console.log(e)}
              placeHolder="Select City"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <h3>Job icon</h3>
            <div className="bg-gray-100 rounded-md size-28 inline-flex items-center justify-center content-center">
              <FontAwesomeIcon icon={faStar} className="text-gray-400" />
            </div>
            <div className="mt-2">
              <Button variant="soft">Select File</Button>
            </div>
          </div>
          <div className="grow ">
            <h3>Contact Person</h3>
            <div className="flex gap-6">
              <div className="">
                <div className="bg-gray-100 rounded-md size-28 inline-flex items-center justify-center content-center">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                </div>
                <div className="mt-2">
                  <Button variant="soft">Select File</Button>
                </div>
              </div>
              <div className="grow flex flex-col gap-2">
                <TextField.Root placeholder="John Doe">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="Phone" type="tel">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="Email" type="email">
                  <TextField.Slot>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-gray-400"
                    />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>
        <TextArea placeholder="Job description" resize="vertical" />
        <div>
          <Button size="3">
            <span className="px-8">Save</span>
          </Button>
        </div>
      </form>
    </Theme>
  );
}
