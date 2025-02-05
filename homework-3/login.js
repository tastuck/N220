const passwordText = "(d0nteatTheScript"; //constant because the pass is provided

let startsWithSpace = passwordText.startsWith(" "); //let because its assigned later

let hasEightOrMoreChars = passwordText.length >= 8; //let because assigned later

let containsEat = passwordText.includes("eat"); //assigned later


if (startsWithSpace) 
{
    console.log("password startswith space");
};

if (hasEightOrMoreChars) 
{
    console.log("password contains 8 or more characters");
};

if (containsEat) 
{
    console.log("password contains word eat");
};
