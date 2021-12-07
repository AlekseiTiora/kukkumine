var x=35, y=30, r=30;
var ysamm=1, ykiirendus=0.1;
var y1=15;
var y2=15;
var x1=25;
var x2=45;
var t, g; //tahvel, graafiline kontekst
//liigutab palli liigu() funktsiooniga
// 100-tähendab 10 korda sekundis
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 400);
}
//joonista palli
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="green";
    g.fillStyle="green";
    g.beginPath();
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.rect(0, 300, t.width, 200)
    g.fillStyle="blue";
    g.opacity = 0.5;
    g.stroke();//joon
    g.fill();//taust

    if(y > t.height) {
        y = 0;
        y1 = y - 1;
        speed = 400;
        x = randNum(0, t.width);
        x1 = x - 13;
        x2 = x + 10;
    }

    g.fillStyle="black";
    g.beginPath();
    g.arc(x1,y1,5,0,2*Math.PI, true);
    g.stroke();
    g.fill();

    g.fillStyle="black";
    g.beginPath();
    g.arc(x2,y1,5,0,2*Math.PI, true);
    g.stroke();
    g.fill();

}



//kukkumine alla
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    y1+=ysamm;
    joonista();
}
function inputSpeed(event){
    var kiirus= document.getElementById('kiirus1').value;

    setInterval('liigu()',kiirus);
}

function inputSize(event){
    var size= document.getElementById('suurus1').value;

    r= size;
    r1=(size * 1.3) - size;
}


function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    x1=hx-14;
    y1=hy-15;
    x2=hx-(-8);
    y2=hy-14;
    r -= 0.5;


}
function randNum(min, max) {
    return Math.random() * (max - min) + min;
}


