<script lang="ts">
	import type { Config } from 'chessground/config';
	import type { Key } from 'chessground/types';
	import { Chess } from 'chessops/chess';
	import { parseSquare, makeSquare } from 'chessops/util';
	import Chessground from '$lib/Chessground.svelte';

	const chess = Chess.default();
	function toDests(chess: Chess): Map<Key, Key[]> {
		const dests = new Map();
		const occupied = Array.from(chess.board.occupied);
		occupied.forEach((s, i) => {
			const from = makeSquare(s);
			const destinations = Array.from(chess.dests(s)).map((d) => makeSquare(d));
			if (Array.from(destinations).length) {
				dests.set(from, destinations);
			}
		});
		return dests;
	}
	let ref: Chessground | undefined = $state();

	let config: Config = $state({
		orientation: 'white',
		turnColor: 'white',
		coordinatesOnSquares: true,
		movable: {
			color: 'white',
			showDests: true,
			free: false,
			dests: toDests(chess),
			events: {
				after: (from, to, meta) => {
					const fromNumber = parseSquare(from);
					const toNumber = parseSquare(to);
					if (fromNumber === undefined || toNumber === undefined) {
						throw new Error('Invalid move');
					}
					const isLegalMove = chess.isLegal({
						from: fromNumber,
						to: toNumber
					});
					if (isLegalMove) {
						chess.play({
							from: fromNumber,
							to: toNumber
						});

						config = {
							...config,
							turnColor: chess.turn,
							orientation: chess.turn,
							movable: {
								...config.movable,
								dests: toDests(chess),
								color: chess.turn
							}
						};
					}
				}
			}
		},
		draggable: {
			enabled: true
		}
	});
	$inspect(config);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="w-[500px]">
	<Chessground bind:this={ref} config={config} />
</div>
