export function loadHomeContent() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <div class="intro">
      <span class="quote">"Not Just Food"</span>
      <p>We offer <span class="highlightQuote">unforgettable</span> dining experience</p>
    </div>

    <div class="aboutUs">
      <div class="aboutImg"></div>
      <div class="aboutDesc">
        <h2>About <span>Us</span></h2>
        <p>
          A dish is only as good as its ingredients.
          That's why we import our spices and use top-quality ingredients in each of our menu,
          as well as our other offerings. The authentic taste comes from family recipes and from fresh,
          simple but tasteful ingredients.
        </p>
      </div>
    </div>

    <div class="whyUs">
      <h2>Why dine in Restoranku</h2>
      <div class="whyCards">
        ${generateReviewCard("Reviewer 1")}
        ${generateReviewCard("Reviewer 2")}
        ${generateReviewCard("Reviewer 3")}
      </div>
    </div>
  `;
}

function generateReviewCard(reviewerName) {
  return `
    <div class="reviewCard">
      <span>⭐⭐⭐⭐⭐</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat
      </p>
      <div class="rvwrTag">
        <div class="rvwrAvatar"></div>
        <div class="rvwrName">
          <span>${reviewerName}</span>
        </div>
      </div>
    </div>
  `;
}


