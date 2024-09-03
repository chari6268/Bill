import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
// import EditableField from "./EditableField";
import EditableField from "./edit";

const InvoiceItem = ({
  items,
  onItemizedItemEdit,
  currency,
  onRowDel,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>WEIGHT</th>
            <th>Per Gram Cost</th>
            <th>Stones Weight</th>
            {/* <th className="text-center">ACTION</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onItemizedItemEdit={onItemizedItemEdit}
              onDelEvent={onRowDel}
              currency={currency}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const ItemRow = ({ item, onItemizedItemEdit, onDelEvent, currency }) => {
  const handleDelete = () => {
    onDelEvent(item);
  };

  return (
    <tr>
      <td style={{ width: "100%" }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
              type: "select",
              name: "name",
              placeholder: "Select an item",
              value: item.name,
              id: item.id,
              options: [
                  { value: "item1", label: "Item 1" },
                  { value: "item2", label: "Item 2" },
                  { value: "item3", label: "Item 3" }
              ],
          }}
        />
      </td>
      <td style={{ minWidth: "100px" }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: item.quantity,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            leading: currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: item.price,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "100px" }}>
        <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
            type: "text",
            name: "additionalField",
            placeholder: "Stones Weight",
            value: item.additionalField,
            id: item.id,
            }}
        />
    </td>
    </tr>
  );
};

export default InvoiceItem;