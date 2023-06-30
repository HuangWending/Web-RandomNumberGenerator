function generateRandomNumbers() {
    var minRange = parseInt(document.getElementById("minRange").value);
    var maxRange = parseInt(document.getElementById("maxRange").value);
    var count = parseInt(document.getElementById("count").value);

    var randomNumbers = [];

    for (var i = 0; i < count; i++) {
        var randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
        randomNumbers.push(randomNumber);
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "生成的随机数为: " + randomNumbers.join(", ");
}
