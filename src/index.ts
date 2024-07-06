import { executeMainController } from "@/controllers/MainController";

import { bootstrapApplication } from "@/bootstrapApplication";
import { bootstrapControllers } from "@/bootstrapControllers";
import { bootstrapServices } from "@/bootstrapServices";

setImmediate(async () => {
  await bootstrapApplication();
  await bootstrapServices();
  await bootstrapControllers();

  await executeMainController();
});