import "./tabela.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Lista = () => {
    const rows = [{
        id: 1,
        produto: "Dell G15",
        loja: "casasbahia",
        img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/multiview_image_g15_intel_tgl_4.png",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "Aprovado",
    },
    {
        id: 2,
        produto: "Dell G15",
        loja: "casasbahia",
        img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/multiview_image_g15_intel_tgl_4.png",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "pendente",
    },
    {
        id: 3,
        produto: "Dell G15",
        loja: "casasbahia",
        img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/multiview_image_g15_intel_tgl_4.png",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "aprovado",
    },
    {
        id: 4,
        produto: "Dell G15",
        loja: "casasbahia",
        img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/multiview_image_g15_intel_tgl_4.png",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "pendente",
    },
];
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Produtos </TableCell>
          <TableCell className="tableCell">Lojas </TableCell>
          <TableCell className="tableCell">Cliente</TableCell>
          <TableCell className="tableCell">Data</TableCell>
          <TableCell className="tableCell">conta</TableCell>
          <TableCell className="tableCell">metodo</TableCell>
          <TableCell className="tableCell">status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell className="tableCell">{row.produto}</TableCell>
            <TableCell className="tableCell">{row.loja}</TableCell>
            <TableCell className="tableCell">{row.cliente}</TableCell>
            <TableCell className="tableCell">{row.data}</TableCell>
            <TableCell className="tableCell">{row.conta}</TableCell>
            <TableCell className="tableCell">{row.metodo}</TableCell>
            <TableCell className="tableCell">{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Lista