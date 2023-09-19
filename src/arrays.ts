/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length = numbers.length;
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[length - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const trip = numbers.map((num) => num * 3);
    return trip;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toI = numbers.map((str) => {
        const parsedInt = parseInt(str, 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
    return toI;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers = amounts.map((str) => {
        if (str.startsWith("$")) {
            str = str.substring(1);
        }

        const parsedInt = parseInt(str, 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const modifiedMessages: string[] = [];

    for (const message of messages) {
        if (message.endsWith("?")) {
            // Remove messages ending with "?"
            continue;
        } else if (message.endsWith("!")) {
            // Make messages ending with "!" uppercase
            modifiedMessages.push(message.toUpperCase());
        } else {
            // Keep other messages as they are
            modifiedMessages.push(message);
        }
    }

    return modifiedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shrtwords = words.filter((word) => word.length < 4);
    return shrtwords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const isValidColor = colors.every(
        (color) => color === "red" || color === "blue" || color === "green"
    );

    return isValidColor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((total, num) => total + num, 0);
    const equation = `${sum}=${addends.join("+")}`;

    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sumOfPositives = 0;
    let negativeFound = false;
    const result = [];

    for (const value of values) {
        if (value < 0 && !negativeFound) {
            // Found the FIRST negative number
            negativeFound = true;
            result.push(value);
            result.push(sumOfPositives);
        } else {
            if (value >= 0) {
                sumOfPositives += value;
            }
            result.push(value);
        }
    }

    if (!negativeFound) {
        // If no negative number was found, append the sum to the end
        result.push(sumOfPositives);
    }

    return result;
}
