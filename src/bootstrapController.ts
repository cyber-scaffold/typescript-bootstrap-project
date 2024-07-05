import { IOCContainer } from "@/commons/Application/IOCContainer";

import { MainController } from "@/controllers/MainController";

export async function bootstrapController() {

  IOCContainer.bind(MainController).toSelf().inTransientScope();

};