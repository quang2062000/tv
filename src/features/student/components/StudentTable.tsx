import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchStudents } from "../studentThunks";

import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper, CircularProgress
} from "@mui/material";

export default function StudentTable() {
  const dispatch = useAppDispatch();
  const { list, loading } = useAppSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  return (
    <Paper sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.age}</TableCell>
              <TableCell>{s.email}</TableCell>
              <TableCell>{s.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}