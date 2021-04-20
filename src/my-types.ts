import {
  CustomPluginOptions,
  LoadResult,
  PluginContext,
  ResolveIdResult,
  PluginHooks
} from 'rollup'

export type momentToDayjsPluginsInAntdVue = string[]
export interface ConfigEnv {
  command: 'build' | 'serve'
  mode: string
}
export type ResolverFunction = PluginHooks['resolveId']

export interface ResolverObject {
  buildStart?: PluginHooks['buildStart']
  resolveId: ResolverFunction
}
export interface Alias {
  find: string | RegExp
  replacement: string
  /**
   * Instructs the plugin to use an alternative resolving algorithm,
   * rather than the Rollup's resolver.
   * @default null
   */
  customResolver?: ResolverFunction | ResolverObject | null
}
export type AliasOptions = readonly Alias[] | { [find: string]: string }
export interface UserConfig {
  resolve?: { alias?: AliasOptions }
}
export interface Plugin {
  name: string,
  enforce?: 'pre' | 'post'
  config?: (
    config: UserConfig,
    env: ConfigEnv
  ) => UserConfig | null | void | Promise<UserConfig | null | void>
  resolveId?(
    this: PluginContext,
    source: string,
    importer: string | undefined,
    options: { custom?: CustomPluginOptions },
    ssr?: boolean
  ): Promise<ResolveIdResult> | ResolveIdResult
  load?(
    this: PluginContext,
    id: string,
    ssr?: boolean
  ): Promise<LoadResult> | LoadResult
}