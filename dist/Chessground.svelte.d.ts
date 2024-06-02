/// <reference types="svelte" />
import type { Config } from 'chessground/config';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
declare const Chessground: $$__sveltets_2_IsomorphicComponent<{
    className?: string | undefined;
    config: Config;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, Record<string, any>, "">;
type Chessground = InstanceType<typeof Chessground>;
export default Chessground;
