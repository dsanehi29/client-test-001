fetch("site.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("headline").textContent = data.headline;
    document.getElementById("subheadline").textContent = data.subheadline;

    const featuresList = document.getElementById("features");
    featuresList.innerHTML = "";

    data.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    const cta = document.getElementById("cta");
    cta.textContent = data.cta_text;
    cta.href = data.cta_link;
  })
  .catch(error => {
    console.error("Error loading site.json:", error);
  });
