var pts={"S":10,"A":9,"B":8,"C":7,"D":6,"E":5,"F":0,"N":0};
$("#add").click(() => {
    $("#creditList").append("<div class=\"input-group mt-3 mb-3 \">\n" +
        "                <div class=\"input-group-prepend\">\n" +
        "                    <div class=\"input-group-text\">Course</div>\n" +
        "                </div>\n" +
        "                <select class=\"form-control credits\">\n" +
        "                    <option class=\"disabled\">Credits</option>\n" +
        "                    <option value=\"1\">1</option>\n" +
        "                    <option value=\"2\">2</option>\n" +
        "                    <option value=\"3\">3</option>\n" +
        "                    <option value=\"4\">4</option>\n" +
        "                    <option value=\"5\">5</option>\n" +
        "                </select>\n" +
        "                <select class=\"form-control grade\">\n" +
        "                    <option class=\"disabled\">Grade</option>\n" +
        "                    <option value=\"S\">S</option>\n" +
        "                    <option value=\"A\">A</option>\n" +
        "                    <option value=\"B\">B</option>\n" +
        "                    <option value=\"C\">C</option>\n" +
        "                    <option value=\"D\">D</option>\n" +
        "                    <option value=\"E\">E</option>\n" +
        "                    <option value=\"F\">F</option>\n" +
        "                    <option value=\"N\">N</option>\n" +
        "                </select>\n" +
        "            </div>")
});

$("#calculate").click(()=>{
    let credits=[], grade=[],er=0;
    for( let i=0;i<$("#creditList")[0].children.length;i++){
        let m=$("#creditList")[0].children[i];
        if((m.children[1].value!=='Credits' && m.children[2].value==='Grade') || m.children[1].value==='Credits' && m.children[2].value!=='Grade'){
            alert('Make sure the necessary fields are selected');
            return;
        }
        else if(m.children[1].value!=='Credits' && m.children[2].value!=='Grade'){
            credits.push(parseInt(m.children[1].value,10));
            grade.push(m.children[2].value);
        }
    }
    if(credits.length) {
        let sum = 0, denom = 0;
        credits.forEach((e, i) => {
            sum += e * pts[grade[i]];
            denom += e;
        });
        $("#gpaResult").addClass('d-block');
        $("#gpaResult").html(`<b>Your GPA is ${Number((sum / denom).toFixed(2))}</b>`);
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service worker registration failed, error:', error);
        });
}