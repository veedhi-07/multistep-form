import { infoSchema } from "../../utils/validation";
import FormField from "../common/formfield";
import { Formik, Form } from "formik";
import type { FormValues } from "../../types/index";
import { useLocalStorage } from "../../utils/localStorage";
import AppLayout from "../../layout/applayout";
import PaginationComponent from "../common/pagination";
import FormObserver from "../common/formobserver";
import { replace, useNavigate } from "react-router-dom";

export default function Step1() {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  };
  const [step1Data, setStep1Data] = useLocalStorage("Step1Data", initialValues);
  return (
    <>
      <AppLayout title="Step:1 Personal Information">
        <Formik<FormValues>
          initialValues={step1Data}
          //
          onSubmit={(values) => {
            // console.log(values);
            navigate("/step2");
          }}
          validationSchema={infoSchema}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <FormObserver values={values} setStep1Data={setStep1Data} />
              <div>
                <FormField
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  placeholder="Enter your first name"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstname}
                  touched={touched.firstname}
                />
              </div>
              <FormField
                id="lastname"
                name="lastname"
                label="Last Name"
                placeholder="Enter your last name"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastname}
                touched={touched.lastname}
              />
              <FormField
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <FormField
                id="phone"
                name="phone"
                label="Phone"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
                touched={touched.phone}
              />
              <PaginationComponent
                onNext={() => navigate("/step2", { replace: true })}
              />
            </Form>
          )}
        </Formik>
      </AppLayout>
    </>
  );
}
