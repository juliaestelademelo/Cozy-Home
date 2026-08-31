var products = [
  { category: "lighting", name: "Ceramic Table Lamp", price: 89, description: "Warm ambient light with a handcrafted ceramic base." },
  { category: "lighting", name: "Rattan Pendant Light", price: 129, description: "Natural woven pendant light for a cozy dining area." },
  { category: "plants", name: "Ceramic Plant Pot", price: 34, description: "Minimalist terracotta pot, perfect for small indoor plants." },
  { category: "plants", name: "Hanging Plant Pot", price: 42, description: "Macrame-style hanging pot for trailing greenery." },
  { category: "plants", name: "Faux Fiddle Leaf Fig", price: 65, description: "Realistic artificial plant, no watering required." },
  { category: "textile", name: "Linen Throw Pillow", price: 28, description: "Soft linen cover in a warm terracotta tone." },
  { category: "textile", name: "Woven Wool Rug", price: 149, description: "Handwoven area rug with earthy stripes." },
  { category: "textile", name: "Cotton Table Runner", price: 22, description: "Lightweight runner with subtle texture, neutral palette." }
];

var productList = document.getElementById("productlist")

    

function renderProducts (list){

    productList.innerHTML = "";
    list.forEach(function(grid) {
    var cardHTML = ` <article class="productdisplay">
                <h3>${grid.name}</h3>
                <h4>${"$" + grid.price}</h4>
                <p>${grid.description}</p>
            </article>`;
    productList.innerHTML += cardHTML;

    
});

}

renderProducts(products)


var searchInput = document.getElementById("search")

searchInput.addEventListener("input", function() {

   applyFilters()

})


var category = document.getElementById("productype")

category.addEventListener("change", function(){

    applyFilters()
})


function applyFilters() {
    var searchTerm = searchInput.value
    var selectedCategory = category.value

    var filteredList = products.filter(function(item) {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory === "" || item.category === selectedCategory) 


})
    renderProducts(filteredList)
}
 
