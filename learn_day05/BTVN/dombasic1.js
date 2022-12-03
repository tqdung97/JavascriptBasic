// Viêt function thay đổi phần tử đầu và cuối trong mọi list có trên web page đươi dây.
// Phần từ đầu tiên trong list thay thành text first ,phần tử cuối cùng thay thành last.
/* <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
<ul>
  <li>👻</li>
  <li>👽</li>
  <li>🦁</li>
</ul> */

function firstAndLast() {
  let ulQuery = document.querySelectorAll("ul");
  for (let i = 0; i < ulQuery.length; i++) {
    let liQuery = ulQuery[i].querySelectorAll("li");
    for (let j = 0; j < liQuery.length; j++) {
      if (j == 0) {
        liQuery[j].innerHTML = "first";
      } else if (j == liQuery.length - 1) {
        liQuery[j].innerHTML = "last";
      }
    }
  }
}

// Bài 2: Đánh dầu từ trong văn bản
// Viết function nhận vào 1 argument là number, function có chức năng xác định tất cả các từ trong 1 đoạn văn có số ký
//  tự dài hơn hoặc bằng tham số được truyền vào
// , sau đó đánh dấu những từ đó (tô đậm, hoặc bôi màu, …)
function countWord(number) {
  let string = "";
  let convert = document.querySelector("p");
  let paragraph = document.querySelector("p").textContent;
  paragraphArray = paragraph.split(" ");
  for (let i = 0; i < paragraphArray.length; i++) {
    if (paragraphArray[i].length >= number) {
      paragraphArray.splice(i, 1, `<b> ${paragraphArray[i]} </b>`);
    }
    string = paragraphArray.join(" ");
    convert.innerHTML = `${string}`;
  }
  return convert;
}
countWord(3);

// Bài 3: Thay đổi dấu:
// Viết function thay thế tất cả các dấu ? bằng text why? và tất cả các dấu ! bằng text what? trong đoạn văn bản sau:
// SMILEY: Hi, Lia. What seems to be the problem today?
// LIA: I hope you can tell me! A chunk of my tooth broke off yesterday.
// SMILEY: That’s not good. Did you bite something hard?
// LIA: No, I didn’t . . . that’s the weird thing. It just kind of fell out.
// SMILEY: Did it hurt when it broke?
// LIA: Yes, it did, just a little; but it started to hurt like crazy this morning.
// SMILEY: I think we’d better take a full set of X-rays . . . Okay, open wide. Let me take a look. Oh, boy. Yes, it looks like you’ve exposed the root on your left, molar.
// LIA: rgscht rfghsh!! ghs gtfhhkj?
// SMILEY: Sorry. I’ll be done in a minute. I’m afraid you’ll have to have a root canal. I can put in a temporary filling, but you’ll have to come back in two weeks for the procedure.
// LIA: Do I have to have a root canal? My tooth doesn’t really hurt too much.
// SMILEY: If we don’t take care of this quickly, it may become infected, and it will hurt a lot. I’ll tell Dina to set up an appointment, and I’ll see you back here in two weeks, on Tuesday, the 14th, at 3 p.m.
// LIA: Will the procedure hurt?
// SMILEY: I’ll give you medication so that you won’t feel any pain. Relax! It’s not so bad!
function changeText() {
  let result = document.querySelector("p");
  let paragraph = document.querySelector("p").textContent;
  paragraphArray = paragraph.split("");
  for (let i = 0; i <= paragraphArray.length; i++) {
    if(paragraphArray[i] == "?"){
        paragraphArray.splice(i, 1, " why?")
    }
    if(paragraphArray[i] == "!") {
        paragraphArray.splice(i, 1, " what?")
    }
    let string2 = paragraphArray.join("");
    result.innerHTML = `${string2}`;
  }
  console.log(result);
}
