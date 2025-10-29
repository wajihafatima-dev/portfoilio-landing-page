"use client";

import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Typography,
} from "@mui/material";

export default function TableComponent({ caption }) {
  return (
    <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="custom table">
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          <TableRow hover>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>

          <TableRow hover>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>Manager</TableCell>
          </TableRow>
        </TableBody>

        {/* Table Footer */}
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 2 }}
              >
                {caption || "End of Table"}
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </MuiTable>
    </TableContainer>
  );
}
