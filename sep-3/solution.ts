function getLucky(s: string, k: number): number {
    //console.log("A".charCodeAt(0)); // a == 97

    //console.log(getNumFromStr("zbax"));

    let numStr = getNumFromStr(s); // returns 262124

    for (let i = 0; i < k; i++) {
        numStr = String(getSumVal(numStr));
    }

    return Number(numStr);
}

function getNumFromStr(s: string) {
    return s
        .split("")
        .map((char) => String(char.charCodeAt(0) - 96))
        .join("");
}

function getSumVal(val: string) {
    let sum = 0;
    val.split("").forEach((v) => (sum += Number(v)));

    return sum;
}

console.log(getLucky("zbax", 2));