async function fetchProductDetails() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    let actualData = await response.json();

    let container = document.getElementById("content");

    actualData.forEach((ele) => {
      let div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <img src="${ele.image}" width="80"/>
        <h2>${ele.title}</h2>
        <p><b>Price:</b> ₹${ele.price}</p>
        <p><b>Category:</b> ${ele.category}</p>
        <p>${ele.description}</p>
        <p><b>Rating:</b> ${ele.rating.rate}</p>
        <p><b>Count:</b> ${ele.rating.count}</p>
      `;

      container.append(div);
    });

  } catch (error) {
    console.error(error);
  }
}

fetchProductDetails();