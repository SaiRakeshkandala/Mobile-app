let designers = [];
let shortlistedIds = new Set();
let showOnlyShortlisted = false;

document.addEventListener("DOMContentLoaded", async () => {
  await loadDesigners();
  renderDesigners();

  document.getElementById("filter-toggle").addEventListener("click", () => {
    showOnlyShortlisted = !showOnlyShortlisted;
    renderDesigners();
  });
});

async function loadDesigners() {
  const response = await fetch('designers.json');
  designers = await response.json();
}

function renderDesigners() {
  const list = document.getElementById("designer-list");
  list.innerHTML = "";

  let filtered = designers;
  if (showOnlyShortlisted) {
    filtered = designers.filter(d => shortlistedIds.has(d.id));
  }

  for (let d of filtered) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${d.name}</h3>
      <p>${d.bio}</p>
      <div class="actions">
        <button class="shortlist-btn" onclick="toggleShortlist(${d.id})">
          ${shortlistedIds.has(d.id) ? '★' : '☆'}
        </button>
      </div>
    `;
    list.appendChild(card);
  }
}

function toggleShortlist(id) {
  if (shortlistedIds.has(id)) {
    shortlistedIds.delete(id);
  } else {
    shortlistedIds.add(id);
  }
  renderDesigners();
}
