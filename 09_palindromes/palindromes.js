const palindromes = function (palindrome) {
    let palindromeArray = []
    let reversedPalindrome = [];

    palindrome = palindrome.toLowerCase();
    for (let i = 0; i < palindrome.length; i++) {
        if ((palindrome[i] >= `a` && palindrome[i] <= `z`) ||
            (palindrome[i] >= `0` && palindrome[i] <= `9`)
        ) {
            palindromeArray.push(palindrome[i]);
        }
    }
    
    for (char of palindromeArray) {
        reversedPalindrome.unshift(char);
    }

    return palindromeArray.join(``) === reversedPalindrome.join(``);
};

// Do not edit below this line
module.exports = palindromes;