var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// src/index.ts
__markAsModule(exports);
__export(exports, {
  default: () => vitePluginVueForAntdDayjs
});

// src/map-to-dayjs-plugins.ts
var presets = {
  "antd-design-vue": {
    plugins: [
      "isSameOrBefore",
      "isSameOrAfter",
      "advancedFormat",
      "customParseFormat",
      "weekday",
      "weekYear",
      "weekOfYear",
      "isMoment",
      "localeData",
      "localizedFormat"
    ]
  }
};
function momentToDayjsPluginsInAntdVue() {
  const plugins = presets["antd-design-vue"].plugins.map((plugin) => {
    return `import ${plugin} from 'dayjs/plugin/${plugin}';`;
  });
  const extendPlugins = presets["antd-design-vue"].plugins.map((plugin) => {
    return `dayjs.extend(${plugin});`;
  });
  const specialPlugin = [`import 'dayjs/locale/zh-cn';dayjs.locale('zh-cn');`];
  return [...plugins, ...extendPlugins, ...specialPlugin];
}

// src/index.ts
try {
  require.resolve("dayjs/dayjs.min");
} catch (e) {
  throw new Error("vite-plugin-vue-antd-dayjs plugin requires dayjs to be present in the devDependency tree.");
}
function vitePluginVueForAntdDayjs() {
  const isAntdvueId = "moment-to-dayjs-for-antd-vue";
  return {
    name: "vite-plugin-vue-for-antd-dayjs",
    enforce: "pre",
    config: () => ({
      resolve: {
        alias: {
          moment: "dayjs"
        }
      }
    }),
    resolveId(id) {
      if (isAntdvueId === id) {
        console.log("resolveid id test", id);
        return id;
      }
    },
    load(id) {
      if (isAntdvueId === id) {
        console.log("load id", id);
        const momentTransforeToDayjs = `import dayjs from 'dayjs';`;
        const depStr = momentToDayjsPluginsInAntdVue().join("");
        return momentTransforeToDayjs + depStr;
      }
    }
  };
}
module.exports = vitePluginVueForAntdDayjs;
vitePluginVueForAntdDayjs["default"] = vitePluginVueForAntdDayjs;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
