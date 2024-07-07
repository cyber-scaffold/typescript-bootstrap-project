import { injectable, inject } from "inversify";

import { IOCContainer } from "@/commons/Application/IOCContainer";
// import { ApplicationConfigManager } from "@/commons/Application/ApplicationConfigManager";
// import { RedisConnectManager } from "@/commons/Redis/RedisConnectManager";
// import { QueryBuilderManager } from "@/commons/MySQL/QueryBuilderManager";
import { OtherService } from "@/services/OtherService";
import { SessionInfoService } from "@/services/SessionInfoService";
import { RequestFactoryServiceFactory, RequestFactoryServiceProvider } from "@/services/RequestFactoryService";
import { TransientFactoryServiceFactory, TransientFactoryServiceProvider } from "@/services/TransientFactoryService";

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
    @inject(OtherService) private readonly otherService: OtherService,
    @inject(SessionInfoService) private readonly sessionInfoService: SessionInfoService,
    @inject(RequestFactoryServiceFactory) private readonly requestFactoryServiceProvider: RequestFactoryServiceProvider,
    @inject(TransientFactoryServiceFactory) private readonly transientFactoryServiceProvider: TransientFactoryServiceProvider
  ) { };

  /** 执行控制器 **/
  public async execute() {
    console.log("transient factory scope service run 1 time", await this.transientFactoryServiceProvider().execute());
    console.log("transient factory scope service run 2 time", await this.transientFactoryServiceProvider().execute());
    console.log("request factory scope service run 1 time", await this.requestFactoryServiceProvider().execute());
    console.log("request factory scope service run 2 time", await this.requestFactoryServiceProvider().execute());
    console.log("request scope service run 1 time", await this.sessionInfoService.getSessionInfo());
    console.log("request scope service run 2 time", await this.sessionInfoService.getSessionInfo());
  };

};