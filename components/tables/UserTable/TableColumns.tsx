"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { User, userSchema } from "@/lib/schema/UserSchema";
import TableColumnHeader from "./TableColumnHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TableRowActions from "./TableRowActions";

export const TableColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select-all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select-row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => <TableColumnHeader name="Name" />,
    cell: ({ row }) => {
      const member = userSchema.parse(row.original);
      const memberName = member.name;
      return (
        <div className="flex items-center space-x-2">
          <Avatar className="h-9 w-9">
            <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
            <AvatarFallback>{memberName[0]}</AvatarFallback>
          </Avatar>
          <span>{memberName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "tasks",
    header: () => <TableColumnHeader name="Tasks" />,
    cell: ({ row }) => {
      const member = userSchema.parse(row.original);
      const tasks = member.tasks.length;
      return <div>{tasks}</div>;
    },
  },
  {
    accessorKey: "done",
    header: () => <TableColumnHeader name="Done" />,
    cell: ({ row }) => {
      const member = userSchema.parse(row.original);
      const tasks = member.tasks;
      const tasksDone = tasks.filter((task) => task.status === "DONE");
      return <div>{tasksDone.length}</div>;
    },
  },
  {
    accessorKey: "todo",
    header: () => <TableColumnHeader name="Todo" />,
    cell: ({ row }) => {
      const member = userSchema.parse(row.original);
      const tasks = member.tasks;
      const tasksTodo = tasks.filter((task) => task.status === "TO_DO");
      return <div>{tasksTodo.length}</div>;
    },
  },
  {
    accessorKey: "inprogress",
    header: () => <TableColumnHeader name="In Progress" />,
    cell: ({ row }) => {
      const member = userSchema.parse(row.original);
      const tasks = member.tasks;
      const tasksInProgress = tasks.filter(
        (task) => task.status === "IN_PROGRESS"
      );
      return <div>{tasksInProgress.length}</div>;
    },
  },
  {
    accessorKey: "canceled",
    header: () => <TableColumnHeader name="Canceled" />,
    cell: ({ row }) => {
      const member = userSchema.parse(row.original);
      const tasks = member.tasks;
      const tasksCanceled = tasks.filter((task) => task.status === "CANCELED");
      return <div>{tasksCanceled.length}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <TableRowActions row={row} />,
  },
];
