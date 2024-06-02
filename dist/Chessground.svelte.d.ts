/// <reference types="svelte" />
import type { Config } from 'chessground/config';
import type { Key } from 'chessground/types';
import { ChessgroundViewmodel } from './ChessgroundViewmodel.svelte.js';
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
    orientation?: "white" | "black" | undefined;
    fen?: string | undefined;
    turnColor?: "white" | "black" | undefined;
    check?: boolean | "white" | "black" | undefined;
    lastMove?: Key[] | undefined;
    selected?: Key | undefined;
    coordinates?: boolean | undefined;
    autoCastle?: boolean | undefined;
    viewOnly?: boolean | undefined;
    disableContextMenu?: boolean | undefined;
    addPieceZIndex?: boolean | undefined;
    addDimensionsCssVarsTo?: HTMLElement | undefined;
    blockTouchScroll?: boolean | undefined;
    config?: Config | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    getVm: () => ChessgroundViewmodel;
}, "">;
type Chessground = InstanceType<typeof Chessground>;
export default Chessground;
