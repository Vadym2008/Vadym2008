function num() {
    let num1 = prompt("Введіть перше число:");
    let num2 = 1000;
    if (num1 > num2) {
        console.log("Задане вами число більше " + num2);
    } else if (num1 == num2) {
        console.log(`Число є ${num2}`);
    } else if (num1 < num2) {
        console.log("Менше " + num2);
    } else {
        console.log("Ви ввели не число");
    }
}

function time() {
    let time = prompt("Який поточний час?");
    if (time >= 6 && time <= 11) {
        console.log("Доброго ранку!");
    } else if (time >= 12 && time <= 17) {
        console.log("Доброго дня!");
    } else if (time >= 18 && time <= 21) {
        console.log("Доброго вечора!");
    } else if (time >= 22 && time <= 5) {
        console.log("Доброї ночі!");
    }
}

function temp() {
    let temperature = prompt("Введіть температуру")
    if (temperature >= 10 && temperature <= 25) {
        console.log("Можна йти гуляти")
    } else {
        console.log("Залишайтесь вдома")
    }
}


function traficLights() {
    let userColor = prompt("Введіть колір");
    let color1 = "green";
    let color2 = "yellow";
    let color3 = "red";
    if (userColor == color1) {
        consoler.log("Можна йти");
    } else if (userColor == color2) {
        console.log("Приготуватись");
    } else {
        console.log("Іти заборонено");
    }
}

function message1() {
    let number = prompt("Введіть цифру");
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    console.log(result);
}

function evenNum() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i)
    }
}
function multiplication() {
    let userNum = prompt("Введіть число")
    for (let num = 1; num <= 10; num++) {
        let boxNum = num * userNum;
        console.log(userNum + "*" + num + "=" + boxNum)
    }
}



/* function message() {
for (let i = 1; i <= 5; i++) {
    console.log("no".repeat(i))
}
}*/


function matrix() {
    for (let i = 1; i <= 10; i++) {
        let num = " "
        for (let y = 1; y <= 10; y++) {
            num += y + " "
        };
        console.log(num)

    }
}



function random() {
    let ranNum = Math.floor(Math.random(1) * 10);
    console.log(ranNum);
    let num;
    do {
        num = prompt("Введіть загадане число");

        if (num == ranNum) {
            console.log("Ви вгадали")
        } else {
            if (num < ranNum) {
                console.log("Загадане число більше")

            } else if (num > ranNum) {
                console.log("Загадане число менше")
            }
        }
    } while (ranNum != num);
}

function createHero() {
    let hero = {
        name: prompt("Введіть імя героя"),
        strength: prompt("Введіть силу героя"),
        city: prompt("Введіть місто героя")
    };
    console.log("Супергерой " + hero.name + " має силу " + hero.strength + " захищає місто " + hero.city)
}

function createWallet() {
    let myWallet = {
        money: 100,
    };


    function addMoney(amount) {
        myWallet.money += amount;
    }

    let sumaAdd = Number(prompt("Введіть суму, на яку хочете поповнити гаманець"));

    addMoney(sumaAdd);
    console.log(myWallet.money)

    function spendMoney(amount) {
        myWallet.money -= amount;
    }

    let sumaSpend = Number(prompt("Введіть суму, яку хочете витратити"));

    spendMoney(sumaSpend);
    console.log(myWallet.money)

}

//Доробити задачу з використанням do while
function password() {
    let userPassword = prompt("Додайте пароль")
    let user = {
        password: userPassword
    };
    let chekUserPassword
    do {
        chekUserPassword = prompt("Введіть пароль")
        if (chekUserPassword == user.password) {
            console.log("Вхід успішний")
        } else {
            console.log("Спробуйте ще раз")
        }
    }
    while (user.password != chekUserPassword);
    console.log(chekUserPassword)
}

function evenNumbers() {
    let num = Number(prompt("Введіть число"));
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function filtrNum() {
    let num = [1, 2, 30, 4, 5, 6];
    let newArr = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            newArr.push(num[i]);
        }
    }
    console.log(newArr);
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function maxNum() {
    let num = [3, 7, 1, 9, 4];
    let num2 = [8, 10, 50, 100];
    let max = getMax(num)
    let max2 = getMax(num2)
    if (max2 > max) {
        console.log(max2)
    } else {
        console.log(max)
    }
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumNum() {
    let num = [1, 2, 3, 4, 12, 45, 11]
    console.log(getSum(num))
}

function numbersSplice() {
    let num = [1, 2, 3, 2]
    let numberToBeChanged = 2;
    let numberToChange = 9;
    for (let i = 0; i < num.length; i++) {
        if (numberToBeChanged == num[i]) {
            num[i] = numberToChange
        }
    }
    console.log(num)
}

//Зробити норм
function numberss() {
    let num = [1, "Hello", true, 2, "World", false]
    num.sort();
    console.log(num);
}

function numbersss() {
    let num = ["a", "b", "с", "d"]
    num.reverse()
    console.log(num)
}

function getObjectOfTypes(arr) {
    let obj = {
        strings: [],
        numbers: [],
        booleans: [],
        objects: [],
        others: [],
    };
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "string") {
            obj.strings.push({ key: i, value: arr[i] })
        } else if (typeof arr[i] == "number") {
            obj.numbers.push({ key: i, value: arr[i] })
        } else if (typeof arr[i] == "boolean") {
            obj.booleans.push({ key: i, value: arr[i] })
        } else if (typeof arr[i] == "object") {
            obj.objects.push({ key: i, value: arr[i] })
        } else {
            obj.others.push({ key: i, value: arr[i] })
        }
    }
    return obj;
}

function showGroupedArraysObject() {
    let myArray = [1, "Hello", true, 2, "World", false, { name: "Ivan" }, undefined];
    let groupedObj = getObjectOfTypes(myArray)
    console.log(groupedObj)
}

function lesson2_18() {
    let obj1 = {
        name: "Petro",
    }
    let obj2 = obj1;
    obj1.name = "Ivan"
    console.log(obj2.name)
}

function lesson2_18_2() {
    let var1 = "Petro"
    let var2 = var1
    var1 = "Ivan"
    console.log(var2)
}

function student() {
    let arr = [
        {
            name: "Ivan",
            grades: [85, 90, 78]
        },
        {
            name: "Olena",
            grades: [92, 88, 95]
        },
        {
            name: "Andriy",
            grades: [75, 80, 79]
        }
    ]

    setAvgToAllStudents(arr);

    console.log(arr)

}

student()

function setAvgToAllStudents(arr) {
    for (let i = 0; i < arr.length; i++) {
        let avg = 0;
        for (let j = 0; j < arr[i].grades.length; j++) {
            avg = avg + arr[i].grades[j]
        }
        avg = avg / arr[i].grades.length
        arr[i].average = avg
    }
}

function Username(userName) {
    let users = [
        {
            name: "Ivan",
            email: "ivan@example.com"
        },
        {
            name: "Olena",
            email: "olena@example.com"
        },
        {
            name: "Ivan",
            email: "ivan2@example.com"
        }

    ];
    ///let student = users.find(user => user.name === userName)
    let email = getEmail(users, userName)
    if (email == null){
        console.log("Користувача не знайдено")
    }else {
        console.log(email)
    }
}


Username("Ivan")





function getEmail(users, searchName){
    let foundEmail = null
    for(let i = 0; i < users.length; i++){
        if (searchName == users[i].name){
            foundEmail = users[i].email;
            break;
        }
    }
    return foundEmail;
}
function superHero() {
    let characters = [
        {
            name: "Артем",
            class: "воїн",
            hp: 120
        },
        {
            name: "Богдан",
            class: "маг",
            hp: 150,
        }
    ]
    const sort = characters.sort((a, b) => a.hp > b.hp ? -1 : 1);
    console.log(sort);
}

superHero();

//вивести матрицю чисел 10 рядків цифри від 1 до 10
//Всі задачі обгорнути у функції і придумати хороші назви для функцій і 1 з них викликати
