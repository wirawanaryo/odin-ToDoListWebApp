function ContactPage() {
  return `
    <div class="contactBanner">
      <span>We'll be waiting here, at</span>
      <h1>Restoranku</h1>
    </div>
    <div class="contactInfos">
      <div class="location">
        <div class="locIcon"></div>
        <h2>Visit Us</h2>
        <p>Enjoy a warm, inviting space designed for comfort,
           whether you’re grabbing a quick bite or settling in for the evening
        </p>
        <span>Jln. Giri Harapan Blok 1 no 45, Jakarta Tenggara</span>
      </div>
      <div class="vl"></div>
      <div class="phone">
        <div class="phoneIcon"></div>
        <h2>Call Us</h2>
        <p>Our team is available to handle reservations, 
          provide quick answers, and ensure you get the support you need in real-time.
        </p>
        <span>+9878 8788 777</span>
      </div>
      <div class="vl"></div>
      <div class="mail">
        <div class="mailIcon"></div>
        <h2>Contact Us</h2>
        <p>For detailed inquiries, feedback, or collaborative proposals, send us an email. 
          We aim to respond to every message promptly.
        </p>
        <span>restoranku@resto.id</span>
      </div>
    </div>
  `;
}

export function loadContactContent() {
  const content = document.getElementById("content");
  content.innerHTML = ContactPage();  
}

