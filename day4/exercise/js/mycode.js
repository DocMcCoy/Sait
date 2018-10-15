console.log("The page has been linked!")

var quotes = [
    "I know what you’re thinking. “Did he fire six shots or only five?” Well, to tell you the truth, in all this excitement I kind of lost track myself. But being as this is a .44 Magnum, the most powerful handgun in the world, and would blow your head clean off, you’ve got to ask yourself a question: Do I feel lucky? Well, do ya punk? — Detective Harry Calahan",
    "Mongol General: What is best in life? Conan: To crush your enemies, to see them driven before you, and to hear the lamentations of their women! — Conan",
    "All right Clanton, you called down the thunder and now you’ve got it. You see that? It says United States Marshall. Take a good look at him Ike because that’s how your gonna end up. The cowboys are finished you understand me? I see a red sash, I kill the man wearing it. So run you cur, run, tell all the other curs that law is coming, you tell I’m coming, and Hell’s coming with me you hear? Hell’s coming with me. — Wyatt Earp",
    "Those of you lucky enough to have your lives, take them with you. However, leave the limbs you’ve lost. They belong to me now. — Beatrix Kiddo",
    "I have come here to chew bubble gum and kick ass…and I’m all out of bubble gum. — John Nada",
    "None of you understand. I’m not locked up in here with you. You’re locked up in here with me. — Rorschach",
    "Yippee-ki-yay, motherfucker. — Detective John McLane",
    "Remember Sully when I promised to kill you last? I lied. — John Matrix",
    "Dyin’ ain’t much of a living, boy. — The Outlaw Josey Wales",
    "Good? Bad? I’m the guy with the gun. — Army of Darkness",
    "This city is afraid of me. I have seen its true face. The streets are extended gutters and the gutters are full of blood and when the drains finally scab over, all the vermin will drown. The accumulated filth of all their sex and murder will foam up about their waists and all the whores and politicians will look up and shout “Save us!”… and I’ll whisper “no.” — Rorschach",
    "You talkin’ to me? You talkin’ to me? You talkin’ to me? Then who the hell else are you talking… you talking to me? Well I’m the only one here. Who the fuck do you think you’re talking to? — Travis Bickle",
]

//make a function to count throught the array

console.log(quotes.length);

var quotesArrayLength = quotes.length;
var quotesArrayLengthPlusOne = quotes.length + 1;
var quotesArrayLengthMinusOne = quotes.length - 1;

var i = 0;
function go () {
    if (i < quotesArrayLengthMinusOne){
        i++
        quoteMachine(i);
        setTimeout(go, 3000);}
    else if (i = quotesArrayLengthMinusOne){
        i=0
        quoteMachine(i);
        setTimeout(go, 3000);}// callback
    else {alert("error")}
    }
    function quoteMachine(a) {
        document.getElementById("quote").innerHTML = quotes[a];
    }
go();

function quoteMachineClick(a) {
    if (a < quotesArrayLength){
        a++;
        document.getElementById("quote").innerHTML = quotes[a];
        i = a;
    }else {
        a = 0
        document.getElementById("quote").innerHTML = quotes[a];
        i = a;
    }
}

function quoteMachineBack(a) {
    if (a > 0){
        a--;
        document.getElementById("quote").innerHTML = quotes[a];
        i = a;
    } else {
        a=quotesArrayLengthMinusOne;
        document.getElementById("quote").innerHTML = quotes[a];  
        i = a;  
    }
}

