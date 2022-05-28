import "./tabeladados.scss"

import { DataGrid } from '@mui/x-data-grid';
import {usercolumns, userRows } from "../../tabeladedadossource";

const Tabeladados = () => {
  const colunaaction = [{ field: "action", headerName: "Action", width: 200 , renderCell:()=>{
    return(
      <div className="cellAction">
        <div className="viewButton">View</div>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}]
  return (
    <div className="tabela" >
      <DataGrid
        rows={userRows}
        columns={usercolumns.concat(colunaaction)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Tabeladados