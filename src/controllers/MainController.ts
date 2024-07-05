import { injectable, inject } from "inversify";

import { ApplicationConfigManager } from "@/commons/Application/ApplicationConfigManager";
import { RedisConnectManager } from "@/commons/Redis/RedisConnectManager";
import { QueryBuilderManager } from "@/commons/MySQL/QueryBuilderManager";

import { MainServiceFactory, MainServiceProvider } from "@/services/MainService";

@injectable()
export class MainController {

  constructor(
    @inject(ApplicationConfigManager) private readonly applicationConfigManager: ApplicationConfigManager,
    @inject(RedisConnectManager) private readonly redisConnectManager: RedisConnectManager,
    @inject(QueryBuilderManager) private readonly queryBuilderManager: QueryBuilderManager,
    @inject(MainServiceFactory) private readonly mainServiceProvider: MainServiceProvider
  ) { };

  /** 执行控制器 **/
  public async execute() {
    const mainService = this.mainServiceProvider();
    console.log(await mainService.execute());
  };

};