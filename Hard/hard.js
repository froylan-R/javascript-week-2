var tomWeight = 8
var tomHeight = 9

var jerryWeight = 45
var jerryHeight = 10

const BMItom = tomWeight / tomHeight ** 2 
const BMIjerry = jerryWeight / (jerryHeight * jerryHeight)

console.log("Is Tom's BMI higher than Jerry's? " +  Boolean(BMItom < BMIjerry))

