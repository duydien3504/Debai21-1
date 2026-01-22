//câu 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// câu 2
let products = [
  new Product(1, "Twin Boxing Gloves", 2500000, 20, "Boxing - MMA Accessories", true),
  new Product(2, "Venum MMA Gloves", 2500000, 5, "Boxing - MMA Accessories", true),
  new Product(3, "Kick pad", 2000000, 100, "Muay Accessories", true),
  new Product(4, "Punch pad", 800000, 20, "Boxing Accessories", true),
  new Product(5, "Jump rope", 200000, 200, "Fitness Accessories", true),
  new Product(6, "Muay short", 300000, 100, "Clothing", true),
  new Product(7, "Dummy", 32000000, 1, "BJJ Dummy", true),
];
console.log(products);



// câu 3
let nameAndPrice = products.map((product) => {
  return {
    name: product.name,
    price: product.price,
  };
});
console.log(nameAndPrice);



// câu 4
let availableProducts = products.filter((product) => product.quantity > 0);
console.log("Sản phẩm còn hàng:", availableProducts);



//câu 5
let hasExpensiveProduct = products.some((product) => product.price > 30000000);
console.log("Có sản phẩm trên 30 triệu không?", hasExpensiveProduct);



// câu 6
let accessories = products.filter((p) => p.category === "Accessories");
let allAccessoriesAvailable = accessories.every((p) => p.isAvailable === true);

console.log("Tất cả phụ kiện đều đang bán?", allAccessoriesAvailable);

//câu 7
let totalInventoryValue = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
console.log("Tổng giá trị kho hàng:", totalInventoryValue);

//câu 8
console.log("-- Danh sách sản phẩm --");
for (let product of products) {
  console.log(
    `${product.name} - ${product.category} - ${product.isAvailable ? "Đang bán" : "Hết hàng"}`,
  );
}

//câu 9
console.log("-- Chi tiết sản phẩm đầu tiên --");
let firstProduct = products[0];

for (let key in firstProduct) {
  console.log(`Thuộc tính: ${key} - Giá trị: ${firstProduct[key]}`);
}

//câu 10
let activeProductNames = products
  .filter((p) => p.isAvailable === true && p.quantity > 0)
  .map((p) => p.name);

console.log("Tên các sản phẩm đang bán và còn hàng:", activeProductNames);
