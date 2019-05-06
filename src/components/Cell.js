export default function (h, v) {
	const SELECTED_CLASS = "select";
	const ACTIVE_CLASS = "active";
	var getHorseMoves = function (h, v) {
		let validCell = function (h, v) {
			let valid = function (n) {
				return n >= 0 && n < 8;
			}
			return valid(h) && valid(v);
		}
		let res = [];
		// Перебор всех возможных комбинаций ячеек.
		for (let i = -2; i < 3; i++) {
			for (let j = -2; j < 3; j++) {
				if (
					i != 0 &&
					j != 0 &&
					Math.abs(i) != Math.abs(j) &&
					validCell(h + i, v + j)
				) {
					let _h = h + i;
					let _v = v + j;
					if (validCell(_h, _v))
						res.push([_h, _v]);
				}
			}
		}
		return res;
	}
	this.active = function () {
		this.class = ACTIVE_CLASS
		return getHorseMoves(h, v);
	}
	this.toDefault = function () {
		this.class = "";
	}
	this.select = function () {
		this.class = SELECTED_CLASS;
		return getHorseMoves(h, v);
	}
	this.class = "";


}