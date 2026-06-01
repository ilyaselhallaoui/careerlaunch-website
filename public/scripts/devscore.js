const form = document.querySelector("#devscore-form");
const panel = document.querySelector("#report-panel");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function scoreProfile(data) {
  const cvWords = data.cv.trim().split(/\s+/).filter(Boolean).length;
  const hasLinkedIn = data.linkedin.includes("linkedin.com");
  const githubLength = data.github.trim().length;
  const roleBonus = data.targetRole ? 12 : 0;

  const githubScore = clamp(35 + githubLength * 3, 35, 82);
  const profileScore = clamp((hasLinkedIn ? 72 : 48) + Math.min(cvWords / 10, 18), 30, 90);
  const skillScore = clamp(40 + Math.min(cvWords / 8, 28) + roleBonus, 35, 88);
  const projectScore = clamp(32 + Math.min(cvWords / 7, 34), 28, 86);
  const total = Math.round(
    githubScore * 0.28 + profileScore * 0.22 + skillScore * 0.25 + projectScore * 0.25
  );

  return {
    total,
    githubScore: Math.round(githubScore),
    profileScore: Math.round(profileScore),
    skillScore: Math.round(skillScore),
    projectScore: Math.round(projectScore),
  };
}

function recommendation(score) {
  if (score < 50) {
    return "You need visible proof. Build one serious role-specific project before sending more applications.";
  }
  if (score < 70) {
    return "You have a base, but the signal is too scattered. Tighten your GitHub, resume and project story around one target role.";
  }
  return "You are close. The biggest win now is positioning: clearer project outcomes, stronger resume bullets and sharper applications.";
}

function bar(label, value) {
  return [
    '<div class="result-bar">',
    `<span>${label}</span>`,
    `<strong>${value}</strong>`,
    `<meter value="${value}" min="0" max="100">${value}</meter>`,
    "</div>",
  ].join("");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    github: document.querySelector("#github").value,
    linkedin: document.querySelector("#linkedin").value,
    targetRole: document.querySelector("#target-role").value,
    email: document.querySelector("#email").value,
    cv: document.querySelector("#cv").value,
  };
  const score = scoreProfile(data);
  const tweet = encodeURIComponent(
    `I just got a DevScore of ${score.total}/100 for ${data.targetRole}. Checking how job-ready my CS profile is with CareerLaunch: https://careerlaunch.dev/devscore`
  );

  panel.innerHTML = `
    <p class="eyebrow">Your result</p>
    <div class="score-result">
      <div class="score-ring"><span>${score.total}</span><small>/100</small></div>
      <div>
        <h3>${data.targetRole}</h3>
        <p>${recommendation(score.total)}</p>
      </div>
    </div>
    <div class="result-bars">
      ${bar("GitHub portfolio", score.githubScore)}
      ${bar("Relevant skills", score.skillScore)}
      ${bar("Project proof", score.projectScore)}
      ${bar("Profile clarity", score.profileScore)}
    </div>
    <div class="locked-report">
      <h3>Full report locked</h3>
      <p>The complete report will include missing skills, project recommendations, resume fixes and the next 30 days of work.</p>
      <div class="button-row">
        <a class="button" href="https://twitter.com/intent/tweet?text=${tweet}" target="_blank" rel="noopener noreferrer">Post score on X</a>
        <a class="button secondary" href="mailto:ilyas@careerlaunch.dev?subject=DevScore%20paid%20unlock">Pay €5 later</a>
      </div>
      <label class="tweet-unlock">
        <span>Already posted? Paste your X post URL</span>
        <input id="tweet-url" placeholder="https://x.com/you/status/..." />
      </label>
      <button class="button secondary" id="verify-tweet" type="button">Unlock report preview</button>
      <p class="unlock-message" id="unlock-message"></p>
    </div>
  `;

  document.querySelector("#verify-tweet")?.addEventListener("click", () => {
    const url = document.querySelector("#tweet-url")?.value || "";
    const message = document.querySelector("#unlock-message");
    if (url.includes("x.com/") || url.includes("twitter.com/")) {
      message.textContent =
        "Preview unlocked. In the real version this URL will be verified automatically and the report will be sent by email.";
    } else {
      message.textContent = "Paste a valid X or Twitter post URL.";
    }
  });
});
