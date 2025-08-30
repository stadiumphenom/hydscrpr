const sampleData = [
  { title: "AI Toolkit Pro", price: 19, tags: ["AI", "ChatGPT", "Toolkit"], url: "https://gumroad.com/l/aipro" },
  { title: "Ebook Cover Pack", price: 7, tags: ["design", "ebook", "canva"], url: "https://gumroad.com/l/coverpack" },
  { title: "Notion Freelance OS", price: 29, tags: ["Notion", "freelance", "template"], url: "https://gumroad.com/l/freelanceos" }
];

function renderProducts(data) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  data.forEach(product => {
    const div = document.createElement("div");
    div.className = "border p-4 rounded bg-gray-800";
    div.innerHTML = `
      <h2 class="text-lg font-bold">${product.title}</h2>
      <p class="text-neon-green">$${product.price}</p>
      <p class="text-sm">Tags: ${product.tags.join(", ")}</p>
      <a href="${product.url}" target="_blank" class="text-blue-400 underline">View</a>
    `;
    list.appendChild(div);
  });
}

document.getElementById("demoToggle").onclick = () => renderProducts(sampleData);
document.getElementById("exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify(sampleData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "products.json";
  a.click();
};
document.getElementById("csvBtn").onclick = () => {
  const rows = ["Title,Price,Tags,URL"];
  sampleData.forEach(p => rows.push(`"${p.title}",${p.price},"${p.tags.join(" ")}",${p.url}`));
  const blob = new Blob([rows.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "products.csv";
  a.click();
};
