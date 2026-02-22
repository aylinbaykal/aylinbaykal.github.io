// ---------- MAIN SCRIPT ----------
document.addEventListener("DOMContentLoaded", function () {

  // ---------- RANDOM INTRO PHOTO ----------
  const introPhotos = [
    "Photo1.jpg",
    "Photo2.jpg"
    // Add more intro photos if needed
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
        Born and raised in Istanbul, Aylin earned an MSc in Development Administration from University College London (UCL) and a BSc in Business Administration through a joint programme with Binghamton University (SUNY) in New York and Middle East Technical University (METU) in Ankara. Before starting her PhD, she worked as a business and data analyst across sectors in New York and New Jersey, and later as a transport analyst in London.
      </p>
      <p>
        Beyond research, she enjoys <a class="text-link" href="https://www.goodreads.com/aylinbaykal">reading</a>, <a class="text-link" href="https://www.letterboxd.com/Aylinbayk">watching films</a>, cycling, and <a class="text-link" href="https://www.behance.net/aylinbayk">photography</a>. Aylin is a native Turkish speaker, fluent in English, and has advanced working proficiency in German. She is currently based in Leamington Spa, UK, where she lives with her partner, <a class="text-link" href="https://www.ozaneakbas.com">Ozan E. Akbas</a>.
      </p>      
    `,
    photography: `
      <h2>Photography</h2>
      <p>
        Coming soon...
      </p>
    `,
    research: `
      <h2>Research</h2>
      <p>
        Aylin's academic background spans business and development studies, with degrees from University College London, the State University of New York at Binghamton, and Middle East Technical University. She is broadly interested in how work is structured and experienced at night, as well as how workers navigate nocturnal labour in demanding and complex environments. 
      </p> 
      <p>
        During her master's degree at UCL, she examined migrant enterprises and nocturnal work through a months-long research project conducted in collaboration with the Greater London Authority's 24-Hour London Team. Her dissertation explored the motivations and challenges of migrant entrepreneurs in London’s night-time economy, drawing on experiences with workers and business owners from diverse communities. In this research, she also analysed how entrepreneurs make use of diaspora networks, negotiate their working conditions, and respond to municipal policies that shape night work. 
      </p> 
      <p>
        At Warwick Business School, Aylin investigates what it means to work through the night in sectors that depend on continuous service, care and frontline presence, building on the initial ideas developed during her earlier academic work on nocturnal labour and migrant entrepreneurship. Currently, she studies two contexts that reveal different dimensions of working after dark. In migrant owned hospitality and food businesses, she examines how entrepreneurs who also work on the front line manage unpredictable late night customer interactions alongside the ongoing relationships they maintain with staff. Her research explores how they balance the emotional demands of service with the practical and relational work of sustaining the business through the night, including coordinating teams, pacing activity across quieter and busier moments, and maintaining a sense of steadiness as fatigue, fluctuating demand, and safety concerns shape the atmosphere around them. In healthcare settings, she focuses on clinical staff who sustain attentiveness and patient care when resources are limited, when staffing levels drop, and the slower rhythm of the night introduces forms of emotional pressure distinct from daytime work. 
      </p> 
      <p>
        Across these contexts, Aylin examines how people adjust their pace, attention, and emotions to the distinctive conditions of night work. She explores how reduced visibility, sudden surges in demand, and limited supervision create situations that require workers to rely on different forms of coordination, judgment, and emotional regulation during hours often overlooked in management scholarship. By positioning the night as a condition that reshapes how work is done, rather than treating it as a simple setting, her research challenges assumptions drawn from daytime contexts and offers new ways of understanding emotion work, collective performance, and the organisation of work. .
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
            <p><a class="text-link" href="https://www.linkedin.com/in/aylinbaykal" target="_blank">Linkedin</a></p>
            <p><a class="text-link" href="https://www.x.com/aylinbaykal" target="_blank">Twitter</a></p>
            <p><a class="text-link" href="https://www.behance.net/aylinbayk" target="_blank">Behance</a></p>
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

      // First: close both panels
      leftPanel.classList.remove("is-open");
      rightPanel.classList.remove("is-open");

      // Clear old mode classes
      leftContent.classList.remove("about-mode", "photography-mode", "research-mode", "contact-mode");
      rightContent.classList.remove("about-mode", "photography-mode", "research-mode", "contact-mode");

      // LEFT PANEL
      if (side === "left") {
          leftContent.innerHTML = html;
          leftPanel.classList.add("is-open");

          if (sectionKey === "about") leftContent.classList.add("about-mode");
          if (sectionKey === "photography") leftContent.classList.add("photography-mode");
          if (sectionKey === "research") leftContent.classList.add("research-mode");
          if (sectionKey === "contact") leftContent.classList.add("contact-mode");
      }

      // RIGHT PANEL
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

  // ESC closes panels
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanels();
  });
});
