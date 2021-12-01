import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(EmissionSource, Amount) {
  return { EmissionSource, Amount };
}

const rows = [
  createData("travel", "850kgCo"),
  createData("Shipping", "750kgCo"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 10, maxWidth: "270px", ml: 1, mr: 1 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ my: 1 }} align="left">
              Emission Source
            </TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ my: 1 }}>
          {rows.map((row) => (
            <TableRow
              key={row.EmissionSource}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: "#E5EFFB",
              }}
            >
              <TableCell component="th" scope="row">
                {row.EmissionSource}
              </TableCell>
              <TableCell align="left">{row.Amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
