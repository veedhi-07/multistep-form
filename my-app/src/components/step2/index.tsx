import { addressSchema } from "../../utils/validation";
import FormField from "../common/formfield";
import { Formik, Form } from "formik";
import type { FormValues } from "../../types/index";
import { useLocalStorage } from "../../utils/localStorage";
import PaginationComponent from "../common/pagination";
import AppLayout from "../../layout/applayout";
import FormObserver from "../common/formobserver";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    street: "",
    city: "",
    state: "",
    zipCode: "",
  };
  const [step2Data, setStep2Data] = useLocalStorage("Step2Data", initialValues);
  return (
    <AppLayout title="Step 2: Address Information">
      <Formik<FormValues>
        initialValues={step2Data}
        onSubmit={(values) => {
          console.log(values);
          navigate("/step3");
        }}
        validationSchema={addressSchema}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <FormObserver values={values} setStep2Data={setStep2Data} />
            <FormField
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
            />
            <PaginationComponent
              onNext={() => navigate("/step3", { replace: true })}
              onPrevious={() => navigate("/")}
            />
          </Form>
        )}
      </Formik>
    </AppLayout>
  );
}
