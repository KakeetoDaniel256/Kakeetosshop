let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendSymbol(symbol) {
    displayValue += symbol;
    updateDisplay();
}

function deleteLastEntry() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(displayValue);

        // Additional Functions
        if (result === undefined || result === Infinity || isNaN(result)) {
            throw new Error('Invalid expression');
        }

        result = roundOff(result);

        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert(error.message);
    }
}

function roundOff(value) {
    return Math.round(value * 100) / 100;
}

function solveQuadraticEquation() {
    try {
        const values = displayValue.split(" ");
        if (values.length !== 3) {
            throw new Error('Invalid quadratic equation');
        }

        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        const c = parseFloat(values[2]);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            throw new Error('Invalid quadratic equation');
        }

        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            throw new Error('No real roots exist');
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            displayValue = root.toString();
        } else {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            displayValue = root1.toString() + ", " + root2.toString();
        }

        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert(error.message);
    }
}

// Additional Functions
function calculateSin() {
    try {
        const radians = eval(displayValue);
        if (isNaN(radians)) {
            throw new Error('Invalid input for sin');
        }

        const result = Math.sin(radians);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert(error.message);
    }
}

function calculateCos() {
    try {
        const radians = eval(displayValue);
        if (isNaN(radians)) {
            throw new Error('Invalid input for cos');
        }

        const result = Math.cos(radians);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert(error.message);
    }
}

function calculateSquareRoot() {
    try {
        const number = eval(displayValue);
        if (number < 0) {
            throw new Error('Invalid input for square root');
        }

        const result = Math.sqrt(number);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert(error.message);
    }
}

function calculateLog() {
    try {
        const number = eval(displayValue);
        if (number <= 0) {
            throw new Error('Invalid input for log');
        }

        const result = Math.log10(number);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert(error.message);
    }
}

// Other functions (matrix, tangent, etc.) can be added similarly

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
