function countBMI(height, weight) {
    let bmi = (weight / (height ** 2));

    switch (true) {
        case bmi < 16:
            console.log("Gầy độ III");
            break;
        case bmi < 17:
            console.log("Gầy độ II");
            break;
        case 17 <= bmi < 18.5:
            console.log("Gầy độ I");
        break;   
        case 18.5 <= bmi < 25:
            console.log("Bình thường");
        break;
        case 25 <= bmi < 30:
            console.log("Thừa cân");
        break; 
        case 30 <= bmi < 35:
            console.log("Béo phì độ I");
        break; 
        case 35 <= bmi <= 40:
            console.log("Béo phì độ II");
        break;
        case bmi > 45:
            console.log("Béo phì độ III");
        break;
        default:
            console.log(false);
            break;
            
    }
}
console.log(countBMI(70,50));
