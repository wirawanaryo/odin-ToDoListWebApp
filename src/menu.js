function MenuPage() {
  return `
     <div class="menuTitle">
      <h1 >Our <span>Menu</span></h1>
      <span>"Enjoy our handcrafted heart-warming meal, made with high quality ingredients"</span>
    </div> 
    <div class="hl"></div>   
    <div class="menuArea">
      <div class="menuCard">
        <div class="menuImg apple"></div>
        <span class="menuName">Winter Apple</span>
        <p class="menuDesc">Glazed and candied Apple with vanilla ice cream topping </p>
        <span class="menuPrice">$10</span>
      </div>
      <div class="menuCard">
        <div class="menuImg risotto"></div>
        <span class="menuName">Crab Risotto</span>
        <p class="menuDesc">Risotto made with our homemade signature broth, topped with crabcakes</p>
        <span class="menuPrice">$15</span>
      </div>
      <div class="menuCard">
        <div class="menuImg golden"></div>
        <span class="menuName">Golden Breakfast</span>
        <p class="menuDesc">Delicious bagel with smoked salmon and cream cheese, topped with cheese and eggyolk sauce</p>
        <span class="menuPrice">$15</span>
      </div>
      <div class="menuCard">
        <div class="menuImg steak"></div>
        <span class="menuName">Classic Steak</span>
        <p class="menuDesc">Steak with scallob and braised spinach on the side, along with thin-cut, golden-fried potatoes.</p>
        <span class="menuPrice">$20</span>
      </div>
      <div class="menuCard">
        <div class="menuImg forest"></div>
        <span class="menuName">Forest Blessing</span>
        <p class="menuDesc">Creamy oatmeal infused with a vibrant green-leaf extract, topped with  forest berries and pomegranate.</p>
        <span class="menuPrice">$15</span>
      </div>
      <div class="menuCard">
        <div class="menuImg cake"></div>
        <span class="menuName">Dark Temptation</span>
        <p class="menuDesc">Decadent chocolate cake paired with tangy strawberries; a perfect balance that leaves you craving more.</p>
        <span class="menuPrice">$10</span>
      </div>
    </div>
    <div class="hl"></div> 
    <div class="menuReservation">
      <span>We Provide</span>
      <div class="serviceList">
        <div class="serviceCard">
          <div class="cateringIcon"></div>
          <h2>Catering</h2>
          <span>Order some menu with package for event like 
            wedding, gathering meeting and other else.
          </span>
        </div> 
        <div class="serviceCard">
          <div class="deliIcon"></div>
          <h2>Delivery</h2>
          <span>You can quickly order with our 
            delivery service. Enjoy exquisite dinner at your home. 
          </span>
        </div>
        <div class="serviceCard">
          <div class="bookIcon"></div>
          <h2>Book a Table</h2>
          <span>Get a table for you, family or that special someone
             and get the best experience with us.
          </span>
        </div>       
      </div>
    </div>
  `;
}

export function loadMenuContent() {
  const content = document.getElementById("content");
  content.innerHTML = MenuPage();  
}

