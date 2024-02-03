document.addEventListener("DOMContentLoaded", () => {
    let num = 0;
    let screen = document.getElementById("screen");
    let clearBtn = document.getElementById("clearBtn");
    let history1 = [];
    let history2 = [];
    let negativeMode = false;
    let negativeBtn = document.getElementById("(-)");
    let decimalMode = false;
    let roundTo = 1;
    let combinedHistory = [];
    let answersHistory = [];
    let roundToBtn = document.getElementById("roundToBtn");
    let decimalBtn = document.getElementById(".");
    negativeBtn.addEventListener("click", (e) => {
        e.preventDefault();
    if (negativeMode == false) {
    negativeMode = true;
    console.log(negativeMode); // todo remove when finished
    } else if (negativeMode == true) {
    negativeMode = false;
    console.log(negativeMode); // todo remove when finished
    }
    })
    decimalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (decimalMode == false) {
            decimalMode = true;
            console.log(decimalMode); // todo remove when finished
        } else if (decimalMode == true) {
            decimalMode = false;
            console.log(decimalMode); // todo remove when finished
        }
    });
    roundToBtn.addEventListener("click", (e) => {
        e.preventDefault();
        roundTo = parseInt(document.getElementById("roundTo").value);
    });
    let operations = ["add", "subtract", "multiply", "divide"].map(
        (operation) => {
            return document.getElementById(operation.toString());
        }
    );
    let equals = document.getElementById("equals");
    let action = null;
    let total = 0;
    let numBtns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        return document.getElementById(number.toString());
    });
    numBtns.map((element) => {
        element.addEventListener("click", (event) => {
            if (action == null) {
                if (decimalMode) {
                    num += event.target.textContent;
                } else {
                    num = parseInt(num + event.target.textContent);
                }
    
                if (negativeMode) {
                    if (num > 0) {
                    num *= -1;
                }
                
            }
                screen.textContent = num;
                if (negativeMode == false) {
                }
                console.log(num); // todo remove when finished
            } else if (action !== null) {
                if (decimalMode) {
                    num += event.target.textContent;
                } else {
                    num = parseInt(num + event.target.textContent);
                }
                console.log(num); // todo remove when finished
                screen.textContent = num;
            }
        });
    });
    operations.map((compute) => {
        compute.addEventListener("click", (e) => {
            action = e.target.textContent;
            if (decimalMode == true) {
                let history1 = [history1];
                console.log(history1); // todo remove when finished
                decimalMode = false;
            } else if (negativeMode) {
                negativeMode == false;
            } else {
                history1.push(num);
            }
            num = 0;
        });
    });
    equals.addEventListener("click", () => {
        if (history1.length > 0 && action !== null) {
            history2.push(num);
            combinedHistory = history1.concat(history2);
            switch (action) {
                case "+":
                    total = combinedHistory.reduce((acc, num) => acc + num, 0);
                    break;
                case "-":
                    total = combinedHistory.reduce((acc, num) => acc - num);
                    break;
                case "x":
                    total = combinedHistory.reduce((acc, num) => acc * num, 1);
                    break;
                case "÷":
                    total = combinedHistory.reduce((acc, num) => acc / num);
                    break;
                default:
                    console.log("Invalid operation");
            }
            
            total = parseFloat(total.toFixed(roundTo));
            answersHistory.push(total);
            clearAfterCalculation();
            console.log(total); // todo remove when finished
        }
    });
        console.log(total); // todo remove when finished
        function clearAllCalculations() {
            history1 = [];
            history2 = [];
            total = 0;
            decimalMode = false;
            action = null;
            num = 0;
            hybridArr = [];
            negativeMode = false;
            combinedHistory = [];
            answersHistory = [];
            screen.textContent = "";
        }
        clearBtn.addEventListener("click", () => {
            clearAllCalculations();
            console.log("everything cleared!"); // todo remove when finished
        });
    function clearAfterCalculation() {
        screen.textContent = total;
        num = 0;
    }
    });
   
