// Bài 2:
// Tạo 1 constructor tên Person khi khởi tạo có name và age được truyền vào và một property tên stomach là array.
// Các instances của Person khi khởi tạo sẽ có 1 stomach là array rỗng (Chiếc bụng đói)
// Xử lý để các instances của Person có các method sau:
// method .eat("Somethings") , khi người ăn một cái gì đó, loại thức ăn đó sẽ được đẩy vào array stomach (Đẩy thức ăn vào bụng),
//  method eat này không nhận quá 10 thức ăn vào bụng.
// method .poop(), khi người thực hiện poops thì array stomach sẽ empty (Đào thải tất cả !!)
// method .introduceMyself trả ra string giới thiệu về bản thân theo format sau: This is David, 50 years old

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function (something) {
    if (this.stomach.length >= 10) {
      return;
    }
    this.stomach.push(something);
  };
  this.poop = function () {
    this.stomach.length = 0;
  };

  this.introduceMyself = function () {
    console.log(`This is ${this.name}, ${this.age} years old`);
  };
}

dung = new Person("Dung", 26);
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("thit");
dung.eat("Ca");
console.log(dung);

// Out put :
//  stomach:
// Array(10)
// 0: "thit"
// 1: "thit"
// 2: "thit"
// 3: "thit"
// 4: "thit"
// 5: "thit"
// 6: "thit"
// 7: "thit"
// 8: "thit"
// 9: "thit"
// length: 10
//dung.eat('Ca') không thể thêm vào mảng vì method eat này không nhận quá 10 thức ăn vào bụng.

dung.poop();
console.log(dung);
//OUT PUT :
// stomach:
// Array(0)
// length: 0

dung.introduceMyself();
//OUT PUT : This is Dung, 26 years old
