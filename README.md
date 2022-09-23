
---**** SUMTWODIGITS ****---
You are given an int array n where each position has a two-digit integer. Return the sum of its digits until all the values of the array are one digit

[execution time limit] 4 seconds (js)

[input] array.integer n

An array of positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99

[output] array.integer

Int array.
Add to the end of the array the sum of the two highest values

[JavaScript] Syntax Tips



---**** VALIDATE TAXES ****---
Find duplicates in string array and sum up their values.
Sum the values in the string with the same prefix and add it to the output string.
If a string doesn't match a condition, add a string "error,pos" to the output array where pos is the index of the invalid string.

Validate:
Valid prefixes are ieps, iva & exento.
Valid values are numbers.
ieps > 0
iva > 0 & iva <= 16
Exento == 0

Example:
Input = ["ieps,1","iva,0","exento,1","ieps,2"]
Output = ["ieps,3","error,1", "error,2"]

[execution time limit] 4 seconds (js)

[input] array.string taxes

Array of n strings.
Each string is "prefix,value" format

[output] array.string

Return an array in ascending order by value with the valid strings first and then the error strings.

[JavaScript] Syntax Tips

---**** VALIDATE VERSION ****---

You are given an string with the prefix:value format. Identify the version and validate their values. Add Success or Error to the output string

Validate:
Valid prefixes are name, age, state, zipcode & state
If the input contains only the prefixes name, age & state, the version is 3.3, otherwise the version is 4.0
name.length >= 5
age >= 18
state.length >= 5
zipcode.length == 5 & all positive digits.
status valid values are Soltero & Casado

Example:
Input = "name:candidato,age:40,state:jalisco"
Output = "Version 3.3 - Success"

[execution time limit] 4 seconds (js)

[input] string data

The string is "prefix:value" format

[output] string

"Version X - Success"
"Version X - Error"

[JavaScript] Syntax Tips