
// 1. Array examples (Bài tập cũ của bạn)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("--- Array Operations ---");
// Map: Nhân đôi giá trị
const doubleArr = arr.map(x => x * 2);
console.log('Map (x2):', doubleArr);

// Filter: Lấy số chẵn
const evens = arr.filter(x => x % 2 === 0);
console.log('Filter (Even):', evens);

// Reduce: Tính tổng
const sum = arr.reduce((total, current) => total + current, 0);
console.log('Reduce (Sum):', sum);


// 2. Fetch and Display Data (Phần hiển thị sản phẩm)
async function renderProducts() {
    const listElement = document.getElementById('product-list');

    try {
        // Gọi file data.json
        const response = await fetch('data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("--- Loaded Data ---", data);

        // Create HTML table rows
        const htmlContent = data.map(product => {
            // Image handling
            let imageUrl = ''; // Default empty to show placeholder or alt
            if (product.images && product.images.length > 0) {
                let rawImg = product.images[0];
                if (rawImg.startsWith('["')) {
                    try { rawImg = JSON.parse(rawImg)[0]; } catch (e) { }
                }
                imageUrl = rawImg;
            }

            return `
                <tr>
                    <td><span class="id-badge">${product.id}</span></td>
                    <td class="product-name">${product.title}</td>
                    <td class="product-slug">${product.slug}</td>
                    <td class="product-price">$${product.price}</td>
                    <td class="product-desc" title="${product.description}">${product.description || ''}</td>
                    <td class="product-category">${product.category ? product.category.name : ''}</td>
                    <td>
                        <img class="product-img" src="${imageUrl}" alt="" onerror="this.src='https://placehold.co/60x60?text=No+Img'">
                    </td>
                </tr>
            `;
        }).join('');

        // Update UI
        listElement.innerHTML = htmlContent;
        document.getElementById('loading').style.display = 'none';

    } catch (error) {
        console.error("Error loading data:", error);
        document.getElementById('loading').innerHTML = `<span style="color:red">Error: ${error.message}</span>`;
    }
}


// Chạy hàm render khi trang load xong
document.addEventListener('DOMContentLoaded', renderProducts);
