export const alias = () => {
    type comb = {

    }
    type description = 'as-number' | 'as-string'
    function combine(input1: number | string, input2: number | string, resultc: description) {
        let result;
        if ((typeof input1 === 'number' && typeof input2 === 'number') || resultc === 'as-number') {
            result = +input1 + +input2;
        } else {
            result = input1.toString() + input2.toString();
        }
        return result;
        // if (resultc === "as-number") {
        //   return +result;
        // } else {
        //   return result.toString();
        // }

    }
    const combineAges = combine(30, 32, "as-string");
    console.log(combineAges)
    const number2 = 25

    const combineNames = combine("30", "32", "as-number")
    console.log(combineNames)

}

