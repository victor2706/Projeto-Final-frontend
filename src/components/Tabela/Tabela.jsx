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
        img: "https://images-submarino.b2w.io/produtos/4068966338/imagens/notebook-gamer-dell-g15-i1100-m30p-15-6-fhd-11-geracao-intel-core-i5-8gb-512gb-ssd-nvidia-rtx-3050-windows-11/4068966338_4_large.jpg",
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
        img: "https://images-submarino.b2w.io/produtos/4068966338/imagens/notebook-gamer-dell-g15-i1100-m30p-15-6-fhd-11-geracao-intel-core-i5-8gb-512gb-ssd-nvidia-rtx-3050-windows-11/4068966338_4_large.jpg",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "Pendente",
    },
    {
        id: 3,
        produto: "Dell G15",
        loja: "casasbahia",
        img: "https://images-submarino.b2w.io/produtos/4068966338/imagens/notebook-gamer-dell-g15-i1100-m30p-15-6-fhd-11-geracao-intel-core-i5-8gb-512gb-ssd-nvidia-rtx-3050-windows-11/4068966338_4_large.jpg",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "Aprovado",
    },
    {
        id: 4,
        produto: "Dell G15",
        loja: "casasbahia",
        img: "https://images-submarino.b2w.io/produtos/4068966338/imagens/notebook-gamer-dell-g15-i1100-m30p-15-6-fhd-11-geracao-intel-core-i5-8gb-512gb-ssd-nvidia-rtx-3050-windows-11/4068966338_4_large.jpg",
        cliente: "Marocs Miguel",
        data: "2 abril",
        conta: 1500,
        metodo: "dinheiro ou delivery",
        status: "Pendente",
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
            <TableCell className="Tabela">
              <div className="informacoes">
                <img src={row.img} alt="" className="image" />
                {row.produto}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.loja}</TableCell>
            <TableCell className="tableCell">{row.cliente}</TableCell>
            <TableCell className="tableCell">{row.data}</TableCell>
            <TableCell className="tableCell">{row.conta}</TableCell>
            <TableCell className="tableCell">{row.metodo}</TableCell>
            <TableCell className="Tabela">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Lista