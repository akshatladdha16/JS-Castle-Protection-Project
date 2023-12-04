// identations in JS is not importat but good practice to do that

let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;

// var,let : ways to declare variables
let fighting; //no need to initialise with let (useful when we need to use it later in program)
let inventory=['stick','dagger','sword']; //array 
let monitorHealth;
let inventory=['stick']

const button1=document.querySelector("#button1") // to target an html element using ID
// var->allows changing , const->least changing (cannot update)
const button2=document.querySelector("#button2") 
const button3=document.querySelector("#button3") 
const text=document.querySelector("#text") 
const xptext=document.querySelector("#xptext")
const healthText=document.querySelector("#healthText") 
const goldText=document.querySelector("#goldText") 
const monsterStats=document.querySelector("#monsterStats") 
const monsterNameText=document.querySelector("#monsterName") 
const monsterHealthText=document.querySelector("#monsterHEalth") 
const locations=[
    {
        name:'Town Square',
        "button Text":["Go to store","Go to cave","Fight dragon"],
        "button_functions":[goStore,goCave,fightDragon],
        text:"you entered the town and you see a sign \"Store\"."
    },
    {
        name:'store',
        "button Text":["Buy 10 health (10 gold)","Buy weapon (30 Gold)","Go to town square"],
        "button_functions":[buyhealth,buyWeapon,goTown],
        text:"you entered the store."
    },
    {
        name:'cave',
        "button Text":["fight slime","fight fanged beast","Go to town square"],
        "button_functions":[buyhealth,buyWeapon,goTown],
        text:"you entered the cave , you will se some monsters."
    },
    {
        name:'fight',
        "button Text":["Attack","Dodge","Run"],
        "button_functions":[attack,dodge,goTown],
        text:"you are fighting a monster"
    }
];  // {} : properties in js or dictionary in python 

const weapons=[{
    name:'stick',
    power:5
},
{
    name:'dagger',
    power:30
},
{
    name:'claw hammer',
    power:50
},
{
    name:"sword",
    power:100
}
];

const monster=[
{   
    name:"slime",
    level:2,
    health:5
},
{   
    name:"fanged Beast",
    level:8,
    health:60
},
{   
    name:"dragon",
    level:20,
    health:300
},
] 

//init buttons and their functioning
button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;
//onclicking it will execute the function

// whenever repetition code is there, convert in a function to use in other functions with a dictionary to add new points
function update(locations){  
    button1.innerText= locations['button Text'][0];
    button2.innerText=locations['button Text'][1];
    button3.innerText=locations['button Text'][2];
    
    button1.onclick=locations['button_functions'][0];
    button2.onclick=locations["button_functions"][1];
    button3.onclick=locations["button_functions"][2];
    text.innerText=locations.text
}

function goTown(){
    update(locations[0]);
    console.log("Going to town.")
}
//  we won't be needing these funtiontions now as we used update function for all
function goStore(){
    update(locations[1]);
    console.log("Going to store.")
    
}
function goCave(){
    update(locations[2]);
    console.log("Going to cave.")
}


function buyhealth(){
    if(gold>=10 && health<=90){
        gold-=10;
        health+=10;
        // now need to display theese updtaed values 
        healthText.innerText=health;
        goldText.innerText=gold;
    }else if(gold<10){
        text.innerText="Don't have enough gold to buy"
    }else{
        test.innerText="Don't need health at this point"
    }
    
}
function buyWeapon(){
    if(currentWeapon<weapons.length-1){
        if(gold>=30){
            gold-=30;
            currentWeapon+=1; // to get the index of the weapon present
            let newWeapon= weapons[currentWeapon].name;
            goldText.innerText="you now have a "+newWeapon;
            inventory.push(newWeapon);
            text.innerText+="in your inventory you have: "+inventory;
        }else{
            text.innerText="You do not have enough gold to buy a weapon.";
        }
    }
    else{
        text.innerText="you already have the most powerful weapon!";
        button2.innerText="Sell Weapon for 15 gold";
        button2.onclick=sellWeapon();
    }
}

function sellWeapon(){
    if(inventory.length>1){
        gold+=15;
        goldText.innerText=gold;
        let currentWeapon= inventory.shift(); //removes fiurst element and retruns the first new element
        text.innerText+="IN your inventory you have: "+inventory;
    }else{
        text.innerText="don't sell your only weapon";
    }
}
function fightDragon(){
    fighting =2;
    goFight();
}
function fightSlime(){
    fighting =0;
    goFight();
}
function fightBeast(){
    fighting =1;
    goFight();
}

function goFight(){
    update(location[3]);
    monsterHealth=monster[fighting].health;
    monsterStats.computedStyleMap.display='block';
    monsterNameText.innerText=monster[fighting].name;
    monsterHealthText.innerText=monsterHealth;
    
}
function attack(){
    text.innerText='The '+monster[fighting].name +" attacks";
    test.innerText='you attack with your '+weapons[currentWeapon].name+ ".";
    health-=monster[fighting].level;
    monsterHealth-=weapons[currentWeapon].power +Math.floor(Math.random()*xp)+1;//math.random willm give random number btw 0 and 1
    health.innerText=health;
    if(health<=0){
        lose();
    }
    else if (monsterHealth<=0){
        defeatMonster();
    }
}
function lose(){

}
function defeatMonster(){
    gold+=Math.floor(monster[fighting].level*6.7);
}
function dodge(){

}