import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    label: "نام درخواست/شماره",
  },
  {
    id: "calories",
    label: "دستگاه/ شماره سریال",
  },
  {
    id: "fat",
    label: "وضعیت",
  },
  {
    id: "carbs",
    label: "نام مشتری/آدرس",
  },
  {
    id: "protein",
    label: "موبایل",
  },
  {
    id: "protein",
    label: "تاریخ درخواست",
  },
  {
    id: "protein",
    label: "بررسی کننده",
  },
  {
    id: "protein",
    label: "تاریخ بررسی",
  },
  {
    id: "actions",
    label: "عملیات",
  },
];

interface Props {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

const ListHead: React.FC<Props> = (props) => {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "انتخاب همه",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListHead;
