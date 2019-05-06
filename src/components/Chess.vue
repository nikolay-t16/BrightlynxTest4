<template>
	<div>
		<div class="row" v-for="row in cells">
			<div v-for="item in row" v-bind:class=item.class v-on:click=onClick(item)>
			</div>
		</div>
	</div>


</template>

<script>
	import Cell from './Cell.js';

	export default {
		name: "Chess",
		data: function () {
			const CELL_COUNT = 8;
			let cells = [];
			//Инициализация ячеек
			for (let i = 0; i < CELL_COUNT; i++) {
				cells.push([]);
				for (let j = 0; j < CELL_COUNT; j++) {
					cells[i].push(new Cell(i, j));
				}
			}

			return {cells: cells, CELL_COUNT: CELL_COUNT};
		},
		methods: {
			//выбор ячейки
			onClick: function (item) {
				this.unSelect();
				let activeCells = item.select();
				this.activateCels(activeCells);
			},
			//Сброс состояния всех ячеек
			unSelect: function () {
				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						this.cells[i][j].toDefault();
					}
				}
			},
			//Активирование ячейки ( окрашивание в зеленый)
			activateCels: function (activeCells) {
				for (let i = 0; i < activeCells.length; i++) {
					let cell = activeCells[i];
					this.cells[cell[0]][cell[1]].active();
				}
			}
		}
	}
</script>

<style scoped>
	.row {
		height: 54px;
		margin: 5px auto;
		text-align: center;
	}

	.row div {
		border: 1px black solid;
		margin: 2px;
		height: 50px;
		width: 50px;
		margin: 2px;
		display: inline-block;
	}

	.row:nth-child(2n) div:nth-child(2n+1) {
		background: black;
	}

	.row:nth-child(2n+1) div:nth-child(2n) {
		background: black;
	}

	.row div.select {
		background: blue !important;
	}

	.row div.active {
		background: green !important;
	}
</style>