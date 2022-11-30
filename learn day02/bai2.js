function checkAge(name1, name2, age1, age2) {
    var olderPerson =  age1 > age2 ? name1 : name2;
    var youngerPerson = age1 < age2 ? name2 : name1;
    var check =  age1 > age2 ? olderPerson + " lớn tuổi hơn " + youngerPerson : youngerPerson + " lớn tuổi hơn " + olderPerson;
    return console.log(check);
}
checkAge("dung", "manh", 20, 30);