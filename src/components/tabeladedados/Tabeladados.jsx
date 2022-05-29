import "./tabeladados.scss"

import { DataGrid } from '@mui/x-data-grid';
import {usercolumns, userRows } from "../../tabeladedadossource";
import { Link } from "react-router-dom";
import { useState} from "react";

const Tabeladados = () => {
  const [data, SetData] = useState(userRows);

  const handleDelete = (id) => {
    SetData(data.filter((item) => item.id !== id));
  };

  const colunaaction = [{ field: "action", headerName: "Action", width: 200 , renderCell:(params)=>{
    return(
      <div className="cellAction">
        <Link to="/usuarios/mais" style={{ textDecoration: "none" }}>
        <div className="viewButton">View</div>
        </Link>
        <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
      </div>
    );
  },
},
];
  return (
    <div className="tabela" >
      <div className="datatableTitle">
        LISTA DE USUÁRIOS
        <Link to="/usuarios/novo" className="link"> 
          Adicionar
        </Link>
      </div>
      <DataGrid
      className="datagrid"
        rows={data}
        columns={usercolumns.concat(colunaaction)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Tabeladados