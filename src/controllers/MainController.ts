import { injectable, inject } from "inversify";

import { IOCContainer } from "@/commons/Application/IOCContainer";
// import { ApplicationConfigManager } from "@/commons/Application/ApplicationConfigManager";
// import { RedisConnectManager } from "@/commons/Redis/RedisConnectManager";
// import { QueryBuilderManager } from "@/commons/MySQL/QueryBuilderManager";

import { SessionInfoService } from "@/services/SessionInfoService";
import { TransientService } from "@/services/TransientService";

export async function executeMainController() {
  const requestScopeContainer = IOCContainer.createChild();
  requestScopeContainer.bind(MainControllerProcess).toSelf().inSingletonScope();
  await requestScopeContainer.get(MainControllerProcess).execute();
};

@injectable()
export class MainControllerProcess {

  constructor(
    // @inject(ApplicationConfigManager) private readonly applicationConfigManager: ApplicationConfigManager,
    // @inject(RedisConnectManager) private readonly redisConnectManager: RedisConnectManager,
    // @inject(QueryBuilderManager) private readonly queryBuilderManager: QueryBuilderManager,
    @inject(SessionInfoService) private readonly sessionInfoService: SessionInfoService,
    @inject(TransientService) private readonly transientService: TransientService
  ) { };

  /** 执行控制器 **/
  public async execute() {
    console.log(await this.transientService.execute());
    await this.sessionInfoService.getSessionInfo();
  };

};