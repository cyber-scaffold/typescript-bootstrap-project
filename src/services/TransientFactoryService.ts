import { v4 as uuidv4 } from "uuid";
import { injectable, interfaces, inject } from "inversify";

import { ApplicationConfigManager } from "@/commons/Application/ApplicationConfigManager";

export type TransientFactoryServiceProvider = () => TransientFactoryService;

export function TransientFactoryServiceFactory(context: interfaces.Context): TransientFactoryServiceProvider {
  return function TransientFactoryServiceProvider(): TransientFactoryService {
    return context.container.get(TransientFactoryService);
  };
};

@injectable()
export class TransientFactoryService {

  private id = uuidv4();

  constructor(
    @inject(ApplicationConfigManager) private readonly applicationConfigManager: ApplicationConfigManager
  ) { };

  public async execute() {
    console.log("瞬态服务,使用工厂模式", this.id);
  };

};