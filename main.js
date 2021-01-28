var p=[];

function submit() {
    var dp=[];
    for(var a=1; a<=4; a++) {
        var paragraph=document.getElementById("s_"+a).value;
     nos.push(paragraph);
    }
    var lengths=dp.length;
    for(var k=0; k<lengths; k++) {
        dsp1.push("<h4>Name-"+p[k]+"</h4>");
    }
    document.getElementById("display_p").innerHTML=dp;
}