import AppLayout from "../../layout/applayout";
import PaginationComponent from "../common/pagination";
import { useNavigate } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();
  const step1Data = JSON.parse(localStorage.getItem("Step1Data") || "{}");

  const step2Data = JSON.parse(localStorage.getItem("Step2Data") || "{}");

  const handleSubmit = () => {
    const finalData = {
      ...step1Data,
      ...step2Data,
    };

    console.log("Submitting:", finalData);

    localStorage.removeItem("Step1Data");
    localStorage.removeItem("Step2Data");

    navigate("/final");
  };

  return (
    <AppLayout title="Step 3: Review Information">
      <div className="space-y-6">
        <div>
          <h2 className="font-bold text-lg">Personal Information</h2>

          <p>First Name: {step1Data.firstname}</p>

          <p>Last Name: {step1Data.lastname}</p>

          <p>Email: {step1Data.email}</p>

          <p>Phone: {step1Data.phone}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg">Address Information</h2>

          {/* <p>Street: {step2Data.street}</p> */}
          <p> Country: {step2Data.country}</p>

          <p>State: {step2Data.state}</p>

          <p>City: {step2Data.city}</p>

          {/* <p>Zip Code:{step2Data.zipCode}</p> */}
        </div>
        <PaginationComponent
          onPrevious={() => navigate("/step2", { replace: true })}
          isLastStep={true}
          onNext={handleSubmit}
        />
        {/* <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button> */}
      </div>
    </AppLayout>
  );
}
