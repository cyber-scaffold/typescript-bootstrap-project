import os from "os";
import path from "path";
import { merge } from "lodash";
import pathExists from "path-exists";
import { readFile } from "jsonfile";
import { injectable } from "inversify";

import { IOCContainer } from "@/commons/Application/IOCContainer";

@injectable()
export class ApplicationConfigManager {

  /** 应用层内置的默认配置 **/
  private defaultConfig: any = {
    docs: false,
    server: {
      port: 15200
    },
    redis: {
      port: 6379,
      host: "0.0.0.0",
    },
    mysql: {
      port: 3306,
      host: "0.0.0.0",
      username: "root",
      password: "gaea0571",
      database: "gmecamp_config"
    },
    rabbitmq: {
      host: "0.0.0.0",
      port: 5672,
      username: "root",
      password: "gaea0571"
    },
    mongodb: {
      host: "0.0.0.0",
      port: 27017,
      username: "root",
      password: "gaea0571",
      database: "test_data"
    }
  };

  /** 操作系统层的配置 **/
  private systemConfig: any = {};

  /** $HOME目录下的配置 **/
  private custmerConfig: any = {};

  /** 声明在操作系统层的配置文件路径 **/
  get systemConfigPath() {
    return path.join("/etc/", "/redis-broadcast-discover/", "./config.json");
  };

  /** 声明在$HOME目录下的配置文件路径 **/
  get custmerConfigPath() {
    return path.join(os.homedir(), "/.redis-broadcast-discover/", "./config.json");
  };

  /** 初始化并加载配置到运行时 **/
  public async initialize() {
    if (await pathExists(this.systemConfigPath)) {
      this.systemConfig = await readFile(this.systemConfigPath);
    };
    if (await pathExists(this.custmerConfigPath)) {
      this.custmerConfig = await readFile(this.custmerConfigPath);
    };
  };

  /** 获取最终组合之后的运行时配置 **/
  public getRuntimeConfig() {
    const composeConfig = merge(this.defaultConfig, this.systemConfig, this.custmerConfig);
    return composeConfig;
  };

};

IOCContainer.bind(ApplicationConfigManager).toSelf().inSingletonScope();