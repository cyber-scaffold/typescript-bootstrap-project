import { v4 as uuidv4 } from "uuid";
import { injectable, inject } from "inversify";

import { IOCContainer } from "@/commons/Application/IOCContainer";
import { ApplicationConfigManager } from "@/commons/Application/ApplicationConfigManager";

/**
 * 会话级别的服务就特别适合用 RequestScope 作用域
 * 需要在中间件或者入口函数处使用container.createChild()初始化
 * **/
@injectable()
export class SessionInfoService {

  private id = uuidv4();

  constructor(
    @inject(ApplicationConfigManager) private readonly applicationConfigManager: ApplicationConfigManager
  ) {
    console.log("SessionInfoService实例化");
  };

  public async getSessionInfo() {
    return this.id;
  };

};


IOCContainer.bind(SessionInfoService).toSelf().inRequestScope();