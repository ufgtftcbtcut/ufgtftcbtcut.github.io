const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
var data = datas[params.name]

var codedInText;
if(data["codedInC"]) {
    codedInText = "C";
} else {
    codedInText = "Pizn";
}

function generateTable(dataKey) {
    var i;
    var j;
    var dataText = data[dataKey];
    var generated = "";
    for(i = 0; i < dataText.length; i++) {
        generated += "<tr>";
        for(j = 0; j < dataText[i].length; j++) {
            generated += j == 0? "<th>":"<td>";
            generated += dataText[i][j];
            generated += j == 0? "</th>":"</td>";
        }
        generated += "</tr>";
    }
    return generated;
}

if(data["isFunction"]) {
    var parametersTable = generateTable("params");
}
var seeAlsoTable = generateTable("seeAlso");

var functionData;
if(data["isFunction"]) {
    functionData = `
<h3>Parameters</h3>
<table>
    <tbody>
        ${parametersTable}
    </tbody>
</table>
<h3>Return value</h3>
${data["returnValue"]}
`;
} else {
    functionData = "";
}

document.querySelector("html").innerHTML = `
<html>
    <head>
        <style>
            body{
                font-family: sans-serif;
                font-size: 15px;
                border: 5px solid #eee;
                padding: 5px;
                margin: 5px;
            }
            h1{
                font-weight: normal;
                margin-block-start: 3px;
                margin-block-end: 5px;
                border-bottom: 1px solid gray;
            }
            h2{
                margin-block-end: 3px;
            }
            h3{
                margin-block-end:5px;
                margin-left:10px;
            }
            .navbar{
                border-left: 3px solid gray;
                padding-left: 5px;
            }
            table{
                font-size: 15px;
            }
            th{
                text-align: right;
            }
            pre{
                background-color: #eee;
                padding: 8px;
                border: 1px solid gray;
                margin-block-start: 3px;
                margin-block-end: 5px;
                border-radius: 4px;
            }
            .outputtitle{
                display: block;
                margin-top: 8px;
            }
            .credits{
                display: block;
                margin-top: 8px;
                font-size: 13px;
            }
        </style>
    </head>
    <body>
        <h2>Pizn Reference</h2>
        <span class="navbar">Pizn // ${data["navbar"].join(" // ")} // ${data["path"]}${data["name"]}</span>
        <h1>
            <span style="font-size: 20px;">${data["path"]}</span><!--
            --><span style="font-size: 29px;">${data["name"]}</span><!--
            --><span style="font-size: 16px;">(${data["titleParams"]})</span>
        </h1>
        ${data["description"]}
        ${functionData}
        <h3>Example</h3>
        <pre id="exampleCode">${data["example"]}</pre>
        <button onclick="runCode();" style="margin-right: 5px;">
            Run this code
        </button>
        <button onclick="explainCode();" id="explainButton">
            Show explanation
        </button>
        <span class="outputtitle">Output: </span>
        <pre>${data["exampleOutput"]}</pre>
        <h3>Notes</h3>
        ${data["notes"]}
        <h3>See also</h3>
        <table>
            <tbody>
                ${seeAlsoTable}
            </tbody>
        </table>
        <h3>Implementation details</h3>
        ${codedInText} code:
        <pre>${data["implementation"]}</pre>
        <span class="credits">
            Pizn is created by ufgtftcbtcut. The website is created by ufgtftcbtcut and hosted by GitHub Pages. The website design is inspired by cppreference.com.
        </span>
    </body>
</html>
`;

function runCode() {
    console.log("Code runner currently unavailable");
}
var codeExplained = false;
var exampleCode   = document.getElementById("exampleCode");
var explainButton = document.getElementById("explainButton");
function explainCode() {
    if(codeExplained == false) {
        exampleCode.  innerText = data["exampleComments"];
        explainButton.innerText = "Hide explanation";
        codeExplained = true;
    } else {
        exampleCode.  innerText = data["example"];
        explainButton.innerText = "Show explanation"
        codeExplained = false;
    }
}
