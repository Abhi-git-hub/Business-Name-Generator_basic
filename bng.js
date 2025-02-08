const adjectives = () => {
    let Ad_a = "Crazy";
    let Ad_b = "Amazing";
    let Ad_c = "Fire";
let randomAd = Math.floor(Math.random() * 3) +1;
let randomAdVar;
if (randomAd == 1){
    randomAdVar = Ad_a;

}
else if (randomAd == 2){
    randomAdVar = Ad_b;
}

else if (randomAd == 3){
    randomAdVar = Ad_c
}
return randomAdVar;


}

const shop_name = () => {
    {
    let s_a = "Engine";
    let s_b = "Foods";
    let s_c = "Garments";

    let randoms = Math.floor(Math.random() * 3) +1;
let randomsVar;
if (randoms == 1){
    randomsVar = s_a;

}
else if (randoms == 2){
    randomsVar = s_b;
}

else if (randoms == 3){
    randomsVar = s_c
}
return randomsVar;
}
}

const Another_word = () => {
    let a_a = "Bros";
    let a_b = "Limited";
    let a_c = "Hub";

    let randoma = Math.floor(Math.random() * 3) +1;
let randomaVar;
if (randoma == 1){
    randomaVar = a_a;

}
else if (randoma == 2){
    randomaVar = a_b;
}

else if (randoma == 3){
    randomaVar = a_c
}
return randomaVar;
}

hello = adjectives() + " " + shop_name() + " " + Another_word();

console.log(hello);