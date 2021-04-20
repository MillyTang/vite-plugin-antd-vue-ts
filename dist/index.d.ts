import { CustomPluginOptions } from 'rollup';
import { LoadResult } from 'rollup';
import { PluginContext } from 'rollup';
import { PluginHooks } from 'rollup';
import { ResolveIdResult } from 'rollup';

declare interface Alias {
    find: string | RegExp;
    replacement: string;
    /**
     * Instructs the plugin to use an alternative resolving algorithm,
     * rather than the Rollup's resolver.
     * @default null
     */
    customResolver?: ResolverFunction | ResolverObject | null;
}

declare type AliasOptions = readonly Alias[] | {
    [find: string]: string;
};

declare interface ConfigEnv {
    command: 'build' | 'serve';
    mode: string;
}

declare interface Plugin_2 {
    name: string;
    enforce?: 'pre' | 'post';
    config?: (config: UserConfig, env: ConfigEnv) => UserConfig | null | void | Promise<UserConfig | null | void>;
    resolveId?(this: PluginContext, source: string, importer: string | undefined, options: {
        custom?: CustomPluginOptions;
    }, ssr?: boolean): Promise<ResolveIdResult> | ResolveIdResult;
    load?(this: PluginContext, id: string, ssr?: boolean): Promise<LoadResult> | LoadResult;
}

declare type ResolverFunction = PluginHooks['resolveId'];

declare interface ResolverObject {
    buildStart?: PluginHooks['buildStart'];
    resolveId: ResolverFunction;
}

declare interface UserConfig {
    resolve?: {
        alias?: AliasOptions;
    };
}

declare function vitePluginVueForAntdDayjs(): Plugin_2;
export default vitePluginVueForAntdDayjs;

export { }
