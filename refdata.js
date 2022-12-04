// data converted from a private excel spreadsheet
const none   = "None";
const nthing = "Nothing";
const tba    = "To be added";
const change = "Might be changed";
// variables for quick changing
var datas = {
    "Print":{
        "navbar": ["Terminal","Output"],
        "path": "Main.Main.",
        "name": "Print",
        "isFunction": true,
        "titleParams": "String Text, Boolean InsertNewline = true",
        "description": "Prints text into the default terminal.",
        "params": [
            ["Text","What to print into the terminal","Required"],
            ["InsertNewline","Add a newline after the text?","true"]
        ],
        "returnValue": nthing,
        "example": "print(\"Hello, world!\")",
        "exampleComments": "print(\"Hello, world!\") # Prints Hello, world! into the terminal",
        "exampleOutput": "Hello, world!",
        "notes": none,
        "seeAlso": [
            ["Input()","Take user input from the terminal"],
            ["Input.Masked()","Take password input from the terminal"]
        ],
        "codedInC": true,
        "implementation": tba
    }
}
