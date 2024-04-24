import React from "react";
import DataTable from "react-data-table-component";
import { BabyProduct } from "../../common/dummyData";
import './userList.scss'

const UserList = () => {
  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="btnFlex">
          <button type="button" class="btn btn-success" onClick={() => handleEdit(row)}>Edit</button>
          <button type="button" class="btn btn-danger" onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
    },
  ];
  return (
    <div className="parentContainer">
      <DataTable columns={columns} data={BabyProduct} selectableRows />
    </div>
  );
};

export default UserList;
