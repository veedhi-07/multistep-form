import { addressSchema } from "../../utils/validation";
import FormField from "../common/formfield";
import { Formik, Form } from "formik";
import AppLayout from "../../layout/applayout";

export default function Step2() {
  const initialValues = { street: "", city: "", state: "", zipCode: "" };
  return (
    <AppLayout title="Step 2: Address Information">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={addressSchema}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
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
          </Form>
        )}
      </Formik>
    </AppLayout>
  );
}
