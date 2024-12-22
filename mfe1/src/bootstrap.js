import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
  console.log(products);
};

if(process.env.NODE_ENV === 'development'){
    const el = document.getElementById("dev-products")
    if(el){
        mount(document.getElementById("dev-products"))
    }
  // mount(document.getElementById("dev-products"))
}

export {mount}