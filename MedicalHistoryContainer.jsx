import React, { useState } from "react";

const MedicalHistoryContainer = () => {
  const [medicalHistory, setMedicalHistory] = useState({
    testType: "",
    testReportFiles: [],
    allergies: "",
    medications: "",
    chronicConditions: "",
    surgeries: "",
    familyHistory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicalHistory({ ...medicalHistory, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMedicalHistory({ ...medicalHistory, testReportFiles: files });
  };

  const addTestResult = () => {
    // Add logic to add another test result field if needed
    // For example, you can store test results in an array
    // and add a new item to the array when this function is called
  };

  return (
    <div className="container">
      <h2>Medical History</h2>
      <label>
        Test Type:
        <select
          name="testType"
          value={medicalHistory.testType}
          onChange={handleChange}
        >
          <option value="">Select Test Type</option>
          <option value="bloodTest">Blood Test</option>
          <option value="urineTest">Urine Test</option>
          {/* Add more test types as needed */}
        </select>
      </label>

      <label>
        Upload Test Reports:
        <input
          type="file"
          name="testReportFiles"
          multiple
          onChange={handleFileChange}
        />
      </label>
      {/* Add button to add more test results */}
      <button onClick={addTestResult}>Add Another Test Result</button>

      <label>
        Allergies:
        <textarea
          name="allergies"
          value={medicalHistory.allergies}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Current Medications:
        <textarea
          name="medications"
          value={medicalHistory.medications}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Chronic Medical Conditions:
        <textarea
          name="chronicConditions"
          value={medicalHistory.chronicConditions}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Past Surgeries or Medical Procedures:
        <textarea
          name="surgeries"
          value={medicalHistory.surgeries}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Family Medical History:
        <textarea
          name="familyHistory"
          value={medicalHistory.familyHistory}
          onChange={handleChange}
        ></textarea>
      </label>
    </div>
  );
};

export default MedicalHistoryContainer;
