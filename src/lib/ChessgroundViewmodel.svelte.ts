import { Chessground } from "chessground";
import type { Api } from "chessground/api";
import type { Config } from "chessground/config";
import type { DrawShape } from "chessground/draw";
import type { Drop, Key, MouchEvent, Piece, PiecesDiff } from "chessground/types";

export class ChessgroundViewmodel {
    config: Config | undefined = $state();
    div: HTMLDivElement | undefined = $state();
    cg: Api | null = $derived.by(() => {
        if (!this.div) {
            return null;
        }
        return Chessground(this.div, this.config)
    });

    constructor() {
    }

    set(config: Config) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.set(config);
    }

    getState() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.state;
    }

    getFen() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.getFen();
    }

    toggleOrientation() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.toggleOrientation();
    }

    move(orig: Key, dest: Key) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.move(orig, dest);
    }

    setPieces(pieces: PiecesDiff) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.setPieces(pieces);
    }

    selectSquare(key: Key | null) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.selectSquare(key);
    }

    newPiece(piece: Piece, key: Key) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.newPiece(piece, key);
    }

    playPremove() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.playPremove();
    }

    cancelPremove() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.cancelPremove();
    }

    playPredrop(validate: (drop: Drop) => boolean) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.playPredrop(validate);
    }

    cancelPredrop() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.cancelPredrop();
    }

    cancelMove() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.cancelMove();
    }

    stop() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.stop();
    }

    explode(keys: Key[]) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.explode(keys);
    }

    setShapes(shapes: DrawShape[]) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.setShapes(shapes);
    }

    setAutoShapes(shapes: DrawShape[]) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.setAutoShapes(shapes);
    }

    redrawAll() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.redrawAll();
    }

    dragNewPiece(piece: Piece, event: MouchEvent, force?: boolean) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.dragNewPiece(piece, event, force);
    }

    destroy() {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.destroy();
    }
}