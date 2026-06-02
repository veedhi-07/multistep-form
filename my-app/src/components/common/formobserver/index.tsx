import { useEffect } from "react";

function FormObserver({
  values,
  setStep1Data,
  setStep2Data,
}: {
  values: any;
  setStep1Data?: (value: any) => void;
  setStep2Data?: (value: any) => void;
}) {
  useEffect(() => {
    setStep1Data && setStep1Data(values);
    setStep2Data && setStep2Data(values);
  }, [values]);

  return null;
}
export default FormObserver;
