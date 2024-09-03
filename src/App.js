import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100 min-vh-100">
      <Container className="py-4 py-md-5">
        <h1 className="mb-4 text-center">Sri Naga Prasanna Jewellry Works Bill Generator</h1>
        <InvoiceForm />
      </Container>
    </div>
  );
};

export default App;
