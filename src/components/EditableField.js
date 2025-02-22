import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup } from 'react-bootstrap';

// Define default values for cellData properties
const defaultCellData = {
  leading: '',
  textAlign: '',
  type: 'text', // Default type to text
  placeholder: '',
  min: '',
  name: '',
  id: '',
  value: '',
  step: '',
  precision: '',
  options: [], // Default options for select
};

const EditableField = ({ cellData = defaultCellData, onItemizedItemEdit }) => {
  // Ensure cellData has default values if some properties are missing
  const {
    leading,
    textAlign,
    type,
    placeholder,
    min,
    name,
    id,
    value,
    step,
    precision,
    options
  } = { ...defaultCellData, ...cellData };

  return (
      <InputGroup className="my-1 flex-nowrap">
        {leading && (
            <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
          <span
              className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small"
              style={{ width: "20px", height: "20px" }}
          >
            {leading}
          </span>
            </InputGroup.Text>
        )}

        {type === 'select' ? (
            <Form.Control
                as="select"
                className={textAlign}
                name={name}
                id={id}
                value={value}
                onChange={onItemizedItemEdit}
                aria-label={name}
                required
            >
              <option value="" disabled>{placeholder}</option>
              {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
              ))}
            </Form.Control>
        ) : (
            <Form.Control
                className={textAlign}
                type={type}
                placeholder={placeholder}
                min={min}
                name={name}
                id={id}
                value={value}
                step={step}
                precision={precision}
                aria-label={name}
                onChange={onItemizedItemEdit}
                required
            />
        )}
      </InputGroup>
  );
};

export default EditableField;
