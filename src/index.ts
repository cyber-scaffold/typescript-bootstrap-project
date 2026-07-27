import "esbuild-register";
import { IOCContainer } from "@/cores/IOCContainer";

import { ApplicationMain } from "@/commons/Application/ApplicationMain";
import { MainControllerProcess } from "@/controllers/MainController";

setImmediate(async () => {
  await IOCContainer.get(ApplicationMain).bootstrap();
  await IOCContainer.get(MainControllerProcess).execute();
});