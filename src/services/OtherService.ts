import { injectable, inject } from "inversify";

import { IOCContainer } from "@/commons/Application/IOCContainer";
import { SessionInfoService } from "@/services/SessionInfoService";

@injectable()
export class OtherService {

  constructor(
    @inject(SessionInfoService) private readonly sessionInfoService: SessionInfoService
  ) { };

};

IOCContainer.bind(OtherService).toSelf().inRequestScope();