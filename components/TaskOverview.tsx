import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "@/lib/schema";
import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

interface Props {
  tasks: Task[];
}

export default function TaskOverview({ tasks }: Props) {
  const tasksDone = tasks.filter((task) => task.status === "DONE");
  const tasks_done_percentage = (tasksDone.length / tasks.length) * 100;

  const tasksTodo = tasks.filter((task) => task.status === "TO_DO");
  const tasks_todo_percentage = (tasksTodo.length / tasks.length) * 100;

  const tasksInProgress = tasks.filter((task) => task.status === "IN_PROGRESS");
  const tasks_inProgress_percentage =
    (tasksInProgress.length / tasks.length) * 100;

  const tasksCanceled = tasks.filter((task) => task.status === "CANCELED");
  const tasks_canceled_percentage = (tasksCanceled.length / tasks.length) * 100;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Done</CardTitle>
            <CheckCircledIcon className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tasksDone.length}</div>
            <p className="text-sm text-muted-foreground">
              {tasks_done_percentage}% of all tasks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Todo</CardTitle>
            <CircleIcon className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tasksTodo.length}</div>
            <p className="text-sm text-muted-foreground">
              {tasks_todo_percentage}% of all tasks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">In Progress</CardTitle>
            <StopwatchIcon className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tasksInProgress.length}</div>
            <p className="text-sm text-muted-foreground">
              {tasks_inProgress_percentage}% of all tasks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Canceled</CardTitle>
            <CrossCircledIcon className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tasksCanceled.length}</div>
            <p className="text-sm text-muted-foreground">
              {tasks_canceled_percentage}% of all tasks
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
