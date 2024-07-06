import { IOCContainer } from "@/commons/Application/IOCContainer";

import { OtherService } from "@/services/OtherService";
import { SessionInfoService } from "@/services/SessionInfoService";
import { TransientFactoryService, TransientFactoryServiceFactory } from "@/services/TransientFactoryService";

export async function bootstrapServices() {

  IOCContainer.bind(OtherService).toSelf().inRequestScope();
  IOCContainer.bind(SessionInfoService).toSelf().inRequestScope();

  IOCContainer.bind(TransientFactoryService).toSelf().inTransientScope();
  IOCContainer.bind(TransientFactoryServiceFactory).toFactory(TransientFactoryServiceFactory);

};