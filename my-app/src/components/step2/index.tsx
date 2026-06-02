import { addressSchema } from "../../utils/validation";
import FormField from "../common/formfield";
import { Formik, Form } from "formik";
import type { FormValues } from "../../types/index";
import { useLocalStorage } from "../../utils/localStorage";
import PaginationComponent from "../common/pagination";
import AppLayout from "../../layout/applayout";
import FormObserver from "../common/formobserver";
import { useNavigate } from "react-router-dom";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";

export default function Step2() {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    // street: "",
    city: "",
    country: "",
    state: "",
    // zipCode: "",
  };
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [step2Data, setStep2Data] = useLocalStorage("Step2Data", initialValues);
  const isCountry = countryId == 0;
  const isState = stateId == 0;

  return (
    <AppLayout title="Step 2: Address Information">
      <Formik<FormValues>
        initialValues={step2Data}
        onSubmit={(values) => {
          console.log(values);
          navigate("/step3");
        }}
        // validationSchema={addressSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
        }) => (
          <Form>
            <FormObserver values={values} setStep2Data={setStep2Data} />
            {/* <FormField
              id="street"
              name="street"
              label="Street"
              placeholder="Enter your street address"
              value={values.street}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.street}
              touched={touched.street}
            />

            <FormField
              id="city"
              name="city"
              label="City"
              placeholder="Enter your city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city}
              touched={touched.city}
            />

            <FormField
              id="state"
              name="state"
              label="State"
              placeholder="Enter your state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.state}
              touched={touched.state}
            />

            <FormField
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              value={values.zipCode}
              placeholder="Enter your zip code"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.zipCode}
              touched={touched.zipCode}
            /> */}
            <>
              <CountrySelect
                placeHolder="Select Country"
                inputClassName="..."
                onChange={(country) => {
                  // console.log(country);
                  if ("id" in country) {
                    setCountryId(country.id);
                    const selectedCountry = country;
                    setFieldValue("country", selectedCountry.name);
                    setFieldValue("state", "");
                    setFieldValue("city", "");

                    setStateId(0);
                    setCityId(0);
                  }
                }}
              />
              {!isCountry && (
                <StateSelect
                  placeHolder="Select State"
                  // inputClassName="..."
                  countryid={countryId}
                  onChange={(state) => {
                    if ("id" in state) {
                      setStateId(state.id);
                      setFieldValue("state", state.name);
                      setFieldValue("city", "");
                      setCityId(0);
                    }
                    // console.log(state);
                    // if ("id" in state) setStateId(state.id);
                  }}
                />
              )}
              {!isState && (
                <CitySelect
                  placeHolder="Select City"
                  // inputClassName="..."
                  countryid={countryId}
                  stateid={stateId}
                  onChange={(city) => {
                    console.log(city);
                    if ("id" in city) {
                      setCityId(city.id);
                      setFieldValue("city", city.name);
                    }
                  }}
                />
              )}
            </>
            <PaginationComponent
              isLastStep={false}
              // onNext={() => navigate("/step3", { replace: true })}
              onNext={() => {
                console.log("Next clicked!!!!!!!!!!!!!!!!");
              }}
              // onPrevious={() => navigate("/")}
              onPrevious={() => {
                console.log("Previous clickedddddd");
              }}
            />
          </Form>
        )}
      </Formik>
    </AppLayout>
  );
}
