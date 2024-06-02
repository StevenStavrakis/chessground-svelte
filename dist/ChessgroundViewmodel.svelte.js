import { Chessground } from "chessground";
export class ChessgroundViewmodel {
    config = $state();
    div = $state();
    cg = $state();
    constructor(div, config) {
        this.div = div;
        this.config = config;
        this.cg = Chessground(div, config);
    }
    set(config) {
        this.config = config;
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
    move(orig, dest) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.move(orig, dest);
    }
    setPieces(pieces) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.setPieces(pieces);
    }
    selectSquare(key) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        this.cg.selectSquare(key);
    }
    newPiece(piece, key) {
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
    playPredrop(validate) {
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
    explode(keys) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.explode(keys);
    }
    setShapes(shapes) {
        if (!this.cg) {
            throw new Error("ChessgroundViewmodel not initialized");
        }
        return this.cg.setShapes(shapes);
    }
    setAutoShapes(shapes) {
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
    dragNewPiece(piece, event, force) {
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
