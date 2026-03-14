// ---------- MAIN SCRIPT ----------
document.addEventListener("DOMContentLoaded", function () {

// ---------- PHOTOGRAPHY COLLECTIONS ----------
  const photoCollections = [
    {
      title: "Monolith",
      subtitle: "MMXVI - MMXXIV",
      folder: "content/photos/gallery/Monolith/",
      imageCount: 13 
    },
    {
      title: "Encounters IV",
      subtitle: "MMXI - MMXXIV",
      folder: "content/photos/gallery/EncountersIV/",
      imageCount: 15
    },
    {
      title: "Encounters III",
      subtitle: "MMXV - MMXXIV",
      folder: "content/photos/gallery/EncountersIII/",
      imageCount: 20
    },
    {
      title: "Shadows",
      subtitle: "MMXIV - MMXXV",
      folder: "content/photos/gallery/Shadows/",
      imageCount: 17
    }, 
    {
      title: "Aqueous",
      subtitle: "MMXVI",
      folder: "content/photos/gallery/Aqueous/",
      imageCount: 12
    },
    {
      title: "Flux",
      subtitle: "MMXIX - MMXXIV",
      folder: "content/photos/gallery/Flux/",
      imageCount: 20
    },     
    {
      title: "Earthly",
      subtitle: "MMXVI - MMXXIII",
      folder: "content/photos/gallery/Earthly/",
      imageCount: 16
    },      
    {
      title: "Cubanacán",
      subtitle: "MMXIX",
      folder: "content/photos/gallery/Cubanacan/",
      imageCount: 22
    },  
    {
      title: "Luminous",
      subtitle: "MMXV - MMXXIV",
      folder: "content/photos/gallery/Luminous/",
      imageCount: 24
    }, 
    {
      title: "Encounters II",
      subtitle: "MMXI - MMXXIII",
      folder: "content/photos/gallery/EncountersII/",
      imageCount: 18
    },
    {
      title: "Encounters I",
      subtitle: "MMXV - MMXXIV",
      folder: "content/photos/gallery/EncountersI/",
      imageCount: 14
    },
    {
      title: "Traces",
      subtitle: "MMXI - MMXXIV",
      folder: "content/photos/gallery/Traces/",
      imageCount: 13
    }
  ];

  photoCollections.forEach(collection => {
    collection.images = [];
    for (let i = 1; i <= collection.imageCount; i++) {
      collection.images.push(i + ".jpg");
    }
  });

  let photographyHTML = `<h2>Photography</h2><div class="photography-container">`;
  photoCollections.forEach((collection, index) => {
    
    let dotsHTML = `<div class="progress-dots">`;
    for(let i = 0; i < collection.imageCount; i++) {
      dotsHTML += `<span class="dot ${i === 0 ? 'active' : ''}"></span>`;
    }
    dotsHTML += `</div>`;

    photographyHTML += `
      <div class="photo-collection" data-collection-index="${index}" data-current-img="0">
        <div class="img-wrapper">
          <button class="nav-arrow left-arrow">⟨</button>
          <img class="collection-img" src="${collection.folder}${collection.images[0]}" alt="${collection.title}">
          <button class="nav-arrow right-arrow">⟩</button>
        </div>
        ${dotsHTML} <div class="collection-title">
          ${collection.title}<br>
          <span class="collection-subtitle">${collection.subtitle}</span>
        </div>
      </div>
    `;
  });
  photographyHTML += `</div>`;

  // ---------- RANDOM INTRO PHOTO ----------
  const introPhotos = [
    "Photo1.jpg",
    "Photo2.jpg"
  ];

  const photoEl = document.getElementById("main-photo");
  if (photoEl && introPhotos.length > 0) {
    const randomIndex = Math.floor(Math.random() * introPhotos.length);
    const chosen = introPhotos[randomIndex];
    photoEl.src = `content/photos/intro/${chosen}?v=${Date.now()}`;
  }

  // ---------- TYPEWRITER INTRO ----------
  const introTarget = document.getElementById("intro-typewriter");
  if (introTarget && typeof Typewriter !== "undefined") {
    const writer = new Typewriter(introTarget, {
      typeSpeed: 160
    });

    writer
      .rest(800)
      .type("AYLIN BAYKAL")
      .then(() => {
        setTimeout(() => {
          document.body.classList.add("intro-done");
        }, 700);
      })
      .start();
  }

  // ---------- PANEL CONTENT ----------
  const contentMap = {
    about: `
      <h2>About</h2>
      <p>
        Aylin Baykal-Akbas is a doctoral candidate in the Entrepreneurship and Innovation Group at Warwick Business School. Her research explores night work and examines how people navigate the emotional and temporal demands of working after dark. Her projects focus on two settings that rarely sleep: SMEs in the night time economy and night shifts in healthcare. Across both contexts, she studies how nocturnal rhythms reshape work, emotion regulation, and team coordination. Her work moves beyond daytime assumptions in management research to show how individuals and teams pace and coordinate themselves, as well as how they sustain care and service as the city winds down. 
      </p> 
      <p>
        Born and raised in Istanbul, Aylin earned a BSc in Business Administration through a joint programme between Middle East Technical University (METU) in Ankara and Binghamton University (SUNY) in New York. She later completed an MSc in Development Administration at University College London (UCL). Before starting her PhD, she worked as a business and data analyst across sectors in New York and New Jersey, and later as a transport analyst in London.      
      </p>
      <p>
        Beyond research, she enjoys <a class="text-link" href="https://www.goodreads.com/aylinbaykal">reading</a>, <a class="text-link" href="https://www.letterboxd.com/Aylinbayk">watching films</a>, <a class="text-link" href="https://www.strava.com/athletes/aylin_baykal">cycling</a>, and <a href="#" class="text-link internal-link" data-side="left" data-section="photography">photography</a>. Aylin is a native Turkish speaker, fluent in English, and has advanced proficiency in German. She is currently based in Leamington Spa, UK, where she lives with her partner, <a class="text-link" href="https://www.ozaneakbas.com">Ozan E. Akbas</a>.
      </p>      
    `,
    photography: photographyHTML,
    research: `
      <h2>Research</h2>
      <p>
        Aylin studies how work is organised and experienced under nocturnal conditions. Her research examines how the distinctive temporal, social, and sensory features of the night reshape coordination, emotional regulation, and collective performance in sectors that depend on continuous service and care. Rather than treating the night as simply a setting, she conceptualises it as a condition that reconfigures how work is organised, how relationships are negotiated, and how bodies endure and adapt across extended hours. 
      </p> 
      <p>
        In migrant-owned hospitality and food businesses, she investigates entrepreneurs who work on the front line while also managing staff and sustaining their enterprises. She examines how they navigate unpredictable late night customer interactions, fluctuating demand, fatigue, and safety concerns, while coordinating teams and maintaining relational stability. Her work explores how emotion work, the pacing of bodily energy, and informal forms of leadership enable these businesses to function through the night. 
      </p> 
      <p>
        In healthcare settings, she studies clinical staff who sustain attentiveness and patient care when staffing levels drop and resources become limited. She focuses on how workers maintain vigilance, manage emotional strain, and rely on tacit coordination during hours when institutional support is reduced and work follows a different rhythm. These contexts reveal how night work generates distinctive forms of pressure and responsibility that differ from daytime organisational life.  
      </p> 
      <p>
        Her earlier research examined migrant enterprises and nocturnal work in collaboration with the Greater London Authority's 24-Hour London Team. That project explored the motivations and challenges of migrant entrepreneurs in London's night-time economy, including how they mobilise diaspora networks and respond to municipal policies that shape night work. This work laid the foundation for her current focus on how the night reconfigures work, emotion, and organisations. 
      </p>
      <h3>Ongoing Research Projects</h3>
      <ul class="research-list">
        <li>Managing Emotional Energy at Night: A Process Model of Entrepreneurial Work in Nocturnal Settings</li>
        <li>Migrant Night-Time Businesses and Nocturnal Work of a Diaspora Community</li>
      </ul>
    `,
    contact: `
      <h2>Contact</h2>

      <div class="contact-list">

        <div class="contact-row">
          <h3>Get In Touch</h3>
          <div class="contact-details">
            <p><a class="text-link" href="mailto:aylin.baykal@warwick.ac.uk">aylin.baykal@warwick.ac.uk</a></p>
          </div>
        </div>

        <div class="contact-row">
          <h3>On Other Platforms</h3>
          <div class="contact-details">
            <p><a class="text-link" href="https://www.linkedin.com/in/aylinbaykal" target="_blank">LinkedIn</a></p>
            <p><a class="text-link" href="https://www.x.com/aylinbaykal" target="_blank">X</a></p>
            <p><a class="text-link" href="https://www.goodreads.com/aylinbaykal" target="_blank">Goodreads</a></p>
            <p><a class="text-link" href="https://www.letterboxd.com/Aylinbayk" target="_blank">Letterboxd</a></p>
            <p><a class="text-link" href="https://open.spotify.com/user/abaykalable" target="_blank">Spotify</a></p>
          </div>
        </div>

      </div>
    `
  };

  const leftPanel = document.getElementById("panel-left");
  const rightPanel = document.getElementById("panel-right");
  const leftContent = document.getElementById("panel-left-content");
  const rightContent = document.getElementById("panel-right-content");

  function closePanels() {
    if (leftPanel) leftPanel.classList.remove("is-open");
    if (rightPanel) rightPanel.classList.remove("is-open");
  }

  function openPanel(side, sectionKey) {
      const html = contentMap[sectionKey] || "<p>Content coming soon.</p>";

      leftPanel.classList.remove("is-open");
      rightPanel.classList.remove("is-open");

      leftContent.classList.remove("about-mode", "photography-mode", "research-mode", "contact-mode");
      rightContent.classList.remove("about-mode", "photography-mode", "research-mode", "contact-mode");

      if (side === "left") {
          leftContent.innerHTML = html;
          leftPanel.classList.add("is-open");

          if (sectionKey === "about") leftContent.classList.add("about-mode");
          if (sectionKey === "photography") leftContent.classList.add("photography-mode");
          if (sectionKey === "research") leftContent.classList.add("research-mode");
          if (sectionKey === "contact") leftContent.classList.add("contact-mode");
      }

      if (side === "right") {
          rightContent.innerHTML = html;
          rightPanel.classList.add("is-open");

          if (sectionKey === "about") rightContent.classList.add("about-mode");
          if (sectionKey === "photography") rightContent.classList.add("photography-mode");
          if (sectionKey === "research") rightContent.classList.add("research-mode");
          if (sectionKey === "contact") rightContent.classList.add("contact-mode");
      }
  }

  document.querySelectorAll(".corner-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const side = btn.getAttribute("data-side");
      const section = btn.getAttribute("data-section");
      openPanel(side, section);
    });
  });

  document.querySelectorAll(".panel-close").forEach((btn) => {
    btn.addEventListener("click", closePanels);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanels();
  });

  // ---------- GLOBAL CLICK LISTENER (PHOTOS, ARROWS & INTERNAL LINKS) ----------
  document.addEventListener("click", function (e) {
    
    // 1. GO FORWARD: Clicked the image OR the right arrow
    if (e.target.classList.contains("collection-img") || e.target.classList.contains("right-arrow")) {
      const parentDiv = e.target.closest(".photo-collection");
      const collectionIndex = parseInt(parentDiv.getAttribute("data-collection-index"));
      let currentImgIndex = parseInt(parentDiv.getAttribute("data-current-img"));
      
      const collection = photoCollections[collectionIndex];
      const nextImgIndex = (currentImgIndex + 1) % collection.images.length;
      
      parentDiv.setAttribute("data-current-img", nextImgIndex);
      parentDiv.querySelector(".collection-img").src = collection.folder + collection.images[nextImgIndex];

      const dots = parentDiv.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      dots[nextImgIndex].classList.add("active");

      const futureImgIndex = (nextImgIndex + 1) % collection.images.length;
      const imgPreload = new Image();
      imgPreload.src = collection.folder + collection.images[futureImgIndex];
    }

    // 2. GO BACKWARD: Clicked the left arrow
    if (e.target.classList.contains("left-arrow")) {
      const parentDiv = e.target.closest(".photo-collection");
      const collectionIndex = parseInt(parentDiv.getAttribute("data-collection-index"));
      let currentImgIndex = parseInt(parentDiv.getAttribute("data-current-img"));
      
      const collection = photoCollections[collectionIndex];
      const prevImgIndex = (currentImgIndex - 1 + collection.images.length) % collection.images.length;
      
      parentDiv.setAttribute("data-current-img", prevImgIndex);
      parentDiv.querySelector(".collection-img").src = collection.folder + collection.images[prevImgIndex];

      const dots = parentDiv.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      dots[prevImgIndex].classList.add("active");
    }

    // 3. INTERNAL LINKS
    if (e.target.classList.contains("internal-link")) {
      e.preventDefault(); 
      const side = e.target.getAttribute("data-side");
      const section = e.target.getAttribute("data-section");
      openPanel(side, section);
    }
    
  });

});
