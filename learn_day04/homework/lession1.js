// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 3000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
for (let product of products) {
  console.log(
    `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
  );
}
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let sum = 0;
for (let product of products) {
  sum += product.price * product.count;
}
console.log(sum);
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
for( let product of products) {
  if(product.brand == "Apple") {
    console.log(
      `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
    );
  }
}
// 4. Tìm các sản phẩm có giá > 20000000

for( let product of products) {
  if(product.price > 20000000) {
    console.log(
      `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
    );
  }
}
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
for( let product of products) {
  if(product.name.toLowerCase.includes("pro")) {
    console.log(
      `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
    );
  }
}

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

products.push({
  name: "Samsung 20 Utral",
  price: 21000000,
  brand: "Samsung",
  count: 1
})
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
for (let i = 0; i < products.length; ++i) {
  if (products[i].brand == "Samsung") {
      products.splice(i, 1);
  }
}
console.log(products);
// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((sp1, sp2) => {
  return sp1.price - sp2.price;
});
console.log(products);
// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((sp1, sp2) => {
  return sp2.count - sp1.count;
});
console.log(products);
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log(products[Math.floor(Math.random() * products.length)]);
console.log(products[Math.floor(Math.random() * products.length)]);