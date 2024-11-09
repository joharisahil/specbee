const speakerDetails = {
  speaker1: {
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme Corp",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "/images/speaker1.png",
    icon: "/images/Vector.png",
  },
  speaker2: {
    name: "John Doe",
    title: "Chief Engagement Officer",
    company: "Acquia",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "/images/speaker2.png",
    icon: "/images/Vector.png",
  },
  speaker3: {
    name: "John Doe",
    title: "Chief Technical Developer",
    company: "Pantheon",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "/images/speaker3.png",
    icon: "/images/Vector.png",
  },
  speaker4: {
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Specbee",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    image: "/images/speaker4.png",
    icon: "/images/Vector.png",
  },
};

function showSpeakerDetails(speakerId) {
  const speaker = speakerDetails[speakerId];
  const popoverContent = `
      <div class="popover-row">
        <div class="popover-image-column">
          <img src="${speaker.image}" alt="${speaker.name}" class="popover-image" />
        </div>
        <div class="popover-info-column">
          <h3 class="popover-name">${speaker.name}</h3>
          <p class="popover-title">${speaker.title}</p>
          <p class="popover-company">${speaker.company}</p>
        </div>
        <div class="dividing-line"></div>
        <div class="popover-description-column">
          <p class="popover-description">${speaker.description}</p>
        </div>
      </div>
    `;

  const popover = document.getElementById("popover");
  document.getElementById("popover-content").innerHTML = popoverContent;

  popover.classList.add("show");
}

function closePopover() {
  const popover = document.getElementById("popover");
  popover.classList.remove("show");
}
