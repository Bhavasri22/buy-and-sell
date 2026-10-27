
let items = [
    [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300",
        "Laptop",
        15000,
        "Electronics",
        "Good condition"
    ],
    [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
        "Headphones",
        500,
        "Electronics",
        "Working well"
    ],
    [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300",
        "Books",
        300,
        "Books",
        "Good condition"
    ]
];

function show() {
    let search = document
        .getElementById("search")
        .value
        .toLowerCase();

    let filteredItems = items.filter(function(item) {
        return item[1].toLowerCase().includes(search) ||
               item[3].toLowerCase().includes(search);
    });

    let output = "";

    filteredItems.forEach(function(item) {
        output += `
            <div class="card">

                <img
                    src="${item[0]}"
                    alt="Product"
                    onerror="this.style.display='none'"
                >

                <h3>${item[1]}</h3>
                <h3>₹${item[2]}</h3>

                <p>${item[3]}</p>
                <p>${item[4]}</p>

                <button onclick="buy()">
                    Buy
                </button>

            </div>
        `;
    });

    document.getElementById("products").innerHTML = output;
}

function add() {
    let image = document.getElementById("img").value.trim();
    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value;
    let category = document.getElementById("cat").value;
    let description = document.getElementById("desc").value.trim();

    if (!image || !name || !price || !description) {
        alert("Please fill all fields");
        return;
    }

    if (Number(price) <= 0) {
        alert("Please enter a valid price");
        return;
    }

    items.push([
        image,
        name,
        Number(price),
        category,
        description
    ]);

    show();

    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("desc").value = "";

    alert("Product added successfully!");
}

function buy() {
    alert("Contact seller to buy");
}

show();
