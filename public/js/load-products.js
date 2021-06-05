export async function loadProducts() {
  const data = await fetch('/.netlify/functions/get-products')
    .then((res) => res.json())
    .catch((error) => console.error(error));

  const container = document.querySelector('.products');

  const pre = document.createElement('pre');
  pre.innerText = JSON.stringify(data, null, 2);

  container.appendChild(pre);
}