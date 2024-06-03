import { bootstrapApplication } from "@/bootstrapApplication";
import { bootstrapController } from "@/bootstrapController";
import { bootstrapServices } from "@/bootstrapServices";

setImmediate(async () => {
  await bootstrapApplication();
  await bootstrapServices();
  await bootstrapController();
});