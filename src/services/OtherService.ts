import { injectable, inject } from "inversify";

import { SessionInfoService } from "@/services/SessionInfoService";

@injectable()
export class OtherService {

  constructor(
    @inject(SessionInfoService) private readonly sessionInfoService: SessionInfoService
  ) { };

};