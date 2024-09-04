import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import EditableField from "./EditableField";

const InvoiceItem = ({
  items,
  onItemizedItemEdit,
  currency,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th>WEIGHT</th>
          </tr>
        </thead>
        <tbody>

            {items.map((item) => (
                <>
                    <ItemRow
                        key={item.id}
                        item={item}
                        onItemizedItemEdit={onItemizedItemEdit}
                        currency={currency}
                    />
                    <tr>
                        <td>
                            <div
                                className="text-start ms-2"
                                id={item.id}>  {'v* 916 KDM తరుగు'}
                            </div>
                        </td>
                        <td>
                            <EditableField
                                onItemizedItemEdit={onItemizedItemEdit}
                                cellData={{
                                    type: "number",
                                    name: "wastage",
                                    min: 0,
                                    step: "0.1",
                                    value: item.wastage,
                                    id: item.id,
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={item.stones === "1" ? "1" : "2"}>
                            <EditableField
                                onItemizedItemEdit={onItemizedItemEdit}
                                cellData={{
                                    type: "select",
                                    name: "stones",
                                    placeholder: "Select Stones are present or not",
                                    value: item.stones,
                                    id: item.id,
                                    options: [
                                        {value: "1", label: "YES"},
                                        {value: "0", label: "NO"},
                                    ],
                                }}
                            />
                        </td>
                        {item.stones === "1" &&
                            <td>
                                <EditableField
                                    onItemizedItemEdit={onItemizedItemEdit}
                                    cellData={{
                                        type: "number",
                                        name: "wstones",
                                        min: 0,
                                        step: "0.1",
                                        value: item.wstones,
                                        id: item.id,
                                    }}
                                />
                            </td>}
                    </tr>

                    <tr>
                        <td colSpan={item.oldGold === "1" ? "1" : "2"}>
                            <EditableField
                                onItemizedItemEdit={onItemizedItemEdit}
                                cellData={{
                                    type: "select",
                                    name: "oldGold",
                                    placeholder: "Select oldGold is given or not",
                                    value: item.oldGold,
                                    id: item.id,
                                    options: [
                                        {value: "1", label: "YES"},
                                        {value: "0", label: "NO"},
                                    ],
                                }}
                            />
                        </td>
                        {item.oldGold === "1" &&
                            <td>
                                <EditableField
                                    onItemizedItemEdit={onItemizedItemEdit}
                                    cellData={{
                                        type: "number",
                                        name: "ostones",
                                        min: 0,
                                        step: "0.1",
                                        value: item.ostones,
                                        id: item.id,
                                    }}
                                />
                            </td>}
                    </tr>


                    <tr>
                        <td>
                            <div
                                className="text-start ms-2"
                                id={item.id}>  {'గ్రాము 22ct Rate'}
                            </div>
                        </td>
                        <td>
                            <EditableField
                                onItemizedItemEdit={onItemizedItemEdit}
                                cellData={{
                                    type: "number",
                                    name: "rate",
                                    min: 1,
                                    step: "1",
                                    value: item.rate,
                                    id: item.id,
                                }}
                            />
                        </td>
                    </tr>

                </>
            ))}

        </tbody>
      </Table>
    </div>
  );
};

const ItemRow = ({item, onItemizedItemEdit, currency}) => {

    return (
        <tr>
            <td style={{width: "100%"}}>
                <EditableField
                    onItemizedItemEdit={onItemizedItemEdit}
                    cellData={{
                        type: "select",
                        name: "name",
                        placeholder: "Select an item Name",
                        value: item.name,
                        id: item.id,
                        options: [
                            {value: "item1", label: "Item 1"},
                            {value: "item2", label: "Item 2"},
                            {value: "item3", label: "Item 3"},
                            {value: "item4", label: "Item 1"},
                            {value: "item5", label: "Item 2"},
                            {value: "item6", label: "Item 3"},
                        ],
                    }}
                />
            </td>
            <td style={{minWidth: "100px"}}>
                <EditableField
                    onItemizedItemEdit={onItemizedItemEdit}
                    cellData={{
                        type: "number",
                        name: "quantity",
                        min: 1,
                        step: "0.1",
                        value: item.quantity,
                        id: item.id,
                    }}
                />
            </td>
        </tr>
    );
};

export default InvoiceItem;