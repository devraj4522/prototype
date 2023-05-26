import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const convertMonthToText = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1); // Month numbers are zero-based in JavaScript
  
    const monthText = date.toLocaleString('default', { month: 'long' });
    return monthText;
  };

const TableComponent = ({ data }) => {
  return (
    <TableContainer component={Paper} elevation={3} style={{ marginTop: "2rem", background: "#05101c" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", padding: "16px" }}>Text</TableCell>
            <TableCell style={{ fontWeight: "bold", padding: "16px" }}>Month</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell style={{ padding: "16px" }}>{item.text}</TableCell>
              <TableCell style={{ padding: "16px" }}>{convertMonthToText(item.month)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
