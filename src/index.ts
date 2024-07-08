import { IOCContainer } from "@/commons/Application/IOCContainer";

import { bootstrapApplication } from "@/bootstrapApplication";
import { bootstrapControllers } from "@/bootstrapControllers";
import { bootstrapServices } from "@/bootstrapServices";

import { MainControllerProcess } from "@/controllers/MainController";

setImmediate(async () => {
  await bootstrapApplication();
  await bootstrapServices();
  await bootstrapControllers();

  await IOCContainer.get(MainControllerProcess).execute();
});