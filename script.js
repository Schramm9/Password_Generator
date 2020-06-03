//generate random password
var generateBtn = document.querySelector("#generate");
function generate() {

    function initialize() {
        // gets user's preferred length of password
        // in this case "true" means user chose a length outside of 8-128 character length
        var lenConfirm = true;
        while (lenConfirm) {
            var len = prompt("How many characters long would you like your password to be?");
            if (8 < len && len < 128) { lenConfirm = false }
            else { lenConfirm = true; alert("Passwords should be between 8 & 128 characters in length.") }
        }

        var chooseOne = true; // expects user to choose 1 of the criteria below
        while (chooseOne) {

            // Determines if Uppercase is used
            var uppC = confirm("Would you like uppercase letters in your password?");

            // Determines if Lowercase is used
            var lowC = confirm("Would you like lowercase letters in your password?");

            // Determines if numbers are used
            var numOk = confirm("Would you like numbers (digits) in your password?");

            // Determines if special characters are used
            var charOk = confirm("Would you like there to be special characters in your password?");




            if (uppC = false && lowC == false && numOk == false && charOk == false) {
                chooseOne = false; alert("Please select at least 1 of the 4 preceding criteria.")
            }

            else {
                chooseOne = true;

            }
        }
        
    }
    initialize();
}
generateBtn.addEventListener("click", generate);