
var qout=[{'quots':"“Be yourself; everyone else is already taken.”",
'other':" Oscar Wilde"},
{'quots':"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
'other':"  Marilyn Monroe"},
{'quots':"“So many books, so little time.”",
'other':"   Frank Zappa"},
{'quots':"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
'other':"  Albert Einstein"},
]
var btn=document.getElementById("btn");
btn.onclick=function(){
display()
}
function display(){
    var num=(Math.floor(Math.random()*qout.length))
document.getElementById("quots").innerHTML=qout[num].quots;
document.getElementById("other").innerHTML=qout[num].other;
}

