import { IOCContainer } from "@/commons/Application/IOCContainer";
import { MainController } from "@/controllers/MainController";

import { bootstrapApplication } from "@/bootstrapApplication";
import { bootstrapController } from "@/bootstrapController";
import { bootstrapServices } from "@/bootstrapServices";

setImmediate(async () => {
  await bootstrapApplication();
  await bootstrapServices();
  await bootstrapController();

  const mainController = IOCContainer.get(MainController);
  await mainController.execute();
});