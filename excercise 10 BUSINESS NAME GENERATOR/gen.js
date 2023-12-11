function Adjectives() {
    let randomNum = Math.floor(Math.random() * 10);

    let adjective_1 = "Crazy";
    let adjective_2 = "Amazing";
    let adjective_3 = "Fire";
    let adjective_4 = "Pro";
    let adjective_5 = "Tech";

    if (randomNum >= 0 && randomNum < 2) {
        return adjective_1;
    }
    else if (randomNum >= 2 && randomNum < 4) {
        return adjective_2;
    }
    else if (randomNum >= 4 && randomNum < 6) {
        return adjective_3;
    }
    else if (randomNum >= 6 && randomNum < 8) {
        return adjective_4;
    }
    else if (randomNum >= 8 && randomNum <= 10) {
        return adjective_5;
    }

}

function ShopName() {
    let randomNum = Math.floor(Math.random() * 10);

    let shopName_1 = "Engine";
    let shopName_2 = "Food";
    let shopName_3 = "Garments";
    let shopName_4 = "Fabrics";
    let shopName_5 = "Art";

    if (randomNum >= 0 && randomNum < 2) {
        return shopName_1;
    }
    else if (randomNum >= 2 && randomNum < 4) {
        return shopName_2;
    }
    else if (randomNum >= 4 && randomNum < 6) {
        return shopName_3;
    }
    else if (randomNum >= 6 && randomNum < 8) {
        return shopName_4;
    }
    else if (randomNum >= 8 && randomNum <= 10) {
        return shopName_5;
    }
}

function AnotherWord() {
    let randomNum = Math.floor(Math.random() * 10);

    let anotherWord_1 = "Bros";
    let anotherWord_2 = "Hub";
    let anotherWord_3 = "Limited";
    let anotherWord_4 = "Experts";
    let anotherWord_5 = "Buddies";

    if (randomNum >= 0 && randomNum < 2) {
        return anotherWord_1;
    }
    else if (randomNum >= 2 && randomNum < 4) {
        return anotherWord_2;
    }
    else if (randomNum >= 4 && randomNum < 6) {
        return anotherWord_3;
    }
    else if (randomNum >= 6 && randomNum < 8) {
        return anotherWord_4;
    }
    else if (randomNum >= 8 && randomNum <= 10) {
        return anotherWord_5;
    }
}

console.log(`The Business Name for You is : ${Adjectives()} ${ShopName()} ${AnotherWord()}`);

