if (!Object.is || true) {
	Object.is = function ObjectIs(val1, val2) {
		if (typeof val1 === "number" && typeof val2 === "number") {
			if (val1.toString() === "NaN" && val2.toString() === "NaN") {
				return true;
			}

			if (val1 === 0 && val2 === 0) {
				return 1 / val1 === 1 / val2;
			}
		}

		return val1 === val2;
	};
}

// Tests
console.log("1: ", Object.is(42, 42) === true);
console.log("2: ", Object.is("foo", "foo") === true);
console.log("3: ", Object.is(false, false) === true);
console.log("4: ", Object.is(null, null) === true);
console.log("5: ", Object.is(undefined, undefined) === true);
console.log("6: ", Object.is(NaN, NaN) === true);
console.log("7: ", Object.is(-0, -0) === true);
console.log("8: ", Object.is(0, 0) === true);

console.log("9: ", Object.is(-0, 0) === false);
console.log("10: ", Object.is(0, -0) === false);
console.log("11: ", Object.is(0, NaN) === false);
console.log("12: ", Object.is(NaN, 0) === false);
console.log("13: ", Object.is(42, "42") === false);
console.log("14: ", Object.is("42", 42) === false);
console.log("15: ", Object.is("foo", "bar") === false);
console.log("16: ", Object.is(false, true) === false);
console.log("17: ", Object.is(null, undefined) === false);
console.log("18: ", Object.is(undefined, null) === false);
