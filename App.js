import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div>
      <MDBRow className="d-flex justify-content-center">
        This is a row
        <MDBCol md="6" className="bg-primary mt-5 text-white">
          This column (.col-md-6) is centered
        </MDBCol>
      </MDBRow>
    </div>
  );
}
