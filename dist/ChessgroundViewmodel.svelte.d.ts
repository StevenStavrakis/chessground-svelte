import type { Api } from "chessground/api";
import type { Config } from "chessground/config";
import type { DrawShape } from "chessground/draw";
import type { Drop, Key, MouchEvent, Piece, PiecesDiff } from "chessground/types";
export declare class ChessgroundViewmodel {
    cg: Api | undefined;
    constructor();
    initialize(config: Config, div: HTMLDivElement): void;
    set(config: Config): void;
    getState(): import("chessground/state").State;
    getFen(): string;
    toggleOrientation(): void;
    move(orig: Key, dest: Key): void;
    setPieces(pieces: PiecesDiff): void;
    selectSquare(key: Key | null): void;
    newPiece(piece: Piece, key: Key): void;
    playPremove(): boolean;
    cancelPremove(): void;
    playPredrop(validate: (drop: Drop) => boolean): boolean;
    cancelPredrop(): void;
    cancelMove(): void;
    stop(): void;
    explode(keys: Key[]): void;
    setShapes(shapes: DrawShape[]): void;
    setAutoShapes(shapes: DrawShape[]): void;
    redrawAll(): void;
    dragNewPiece(piece: Piece, event: MouchEvent, force?: boolean): void;
    destroy(): void;
}
