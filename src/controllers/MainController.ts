import { injectable, inject } from "inversify";

import { ApplicationConfigManager } from "@/commons/Application/ApplicationConfigManager";
import { RedisConnectManager } from "@/commons/Redis/RedisConnectManager";
import { QueryBuilderManager } from "@/commons/MySQL/QueryBuilderManager";

@injectable()
export class MainController {

  constructor(
    @inject(ApplicationConfigManager) private readonly applicationConfigManager: ApplicationConfigManager,
    @inject(RedisConnectManager) private readonly redisConnectManager: RedisConnectManager,
    @inject(QueryBuilderManager) private readonly queryBuilderManager: QueryBuilderManager
  ) { };

  /** 执行控制器 **/
  public async execute() {
    console.log("asdasd");
  };

};