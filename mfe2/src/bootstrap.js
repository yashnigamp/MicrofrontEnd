import { mount } from "products/ProductsIndex";
import("remote2/Remote3");

console.log(mount);
mount(document.getElementById("dev-products12"))
console.log("Container connected and established");
