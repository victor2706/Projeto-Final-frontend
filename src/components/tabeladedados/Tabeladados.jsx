import "./tabeladados.scss"

import { DataGrid } from '@mui/x-data-grid';
import {usercolumns, userRows } from "../../tabeladedadossource";
import { Link } from "react-router-dom";

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
      <div className="datatableTitle">
        Add Novo Usuario
        <Link to="/usuarios/novo" style={{textDecoration: "none"}} className="link"> 
          Adicionar
        </Link>
      </div>
      <DataGrid
      className="datagrid"
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