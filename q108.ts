//Compare two strings to check if they are identical, ignoring case sensitivity.

// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
   // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello" , "Hello"));      // true
console.log(areStringsEqualIgnoreCase("world","Word"));         // false

// We make both strings lowercase to ensure the comparison ignores case differences


