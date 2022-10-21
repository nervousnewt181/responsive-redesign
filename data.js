var chickenC = [
    {
        id: 1,
        title: "Chicken with Black Bean Sauce",
        price: 16.95,
        description: `Slices of chicken with vegetables, stir fried in a black bean sauce.`
    },
    {
        id: 2,
        title: "Chicken with Broccoli",
        price: 16.95,
        description: `Stir fry with broccoli, carrots, and baby corn in our savory brown sauce.`
    },
    {
        id: 3,
        title: "Orange Chicken",
        price: 16.95,
        description: `Crispy chicken in our delicious orange sauce served on a bed of steamed broccoli.`
    },
    {
        id: 4,
        title: "Chicken Lo Mein",
        price: 16.95,
        description: `With bean sprouts, green and white onions, cabbage, and soft noodles in a brown sauce.`
    }
]

var beefC = [
    {
        id: 1,
        title: "Beef with Ginger Sauce",
        price: 16.95,
        description: `Slices of beef with broccoli in a delicious ginger sauce.`
    },
    {
        id: 2,
        title: "Kung Pao Beef",
        price: 16.95,
        description: "With white onion, bell peper, and water chestnuts in a kung pao sauce topped with peanuts. Spicy."
    },
    {
        id: 3,
        title: "Szechuan Beef",
        price: 16.95,
        description: "Mixed vegetable stir fried in a spicy garlic brown sauce. Spicy."
    }
]

var veg = [
    {
        id: 1,
        title: "vegetarian dish",
        price: 15,
        description: "yay fiber"
    },
    {
        id: 2,
        title: "carrots",
        price: 15,
        description: "with the stem"
    },
    {
        id: 3,
        title: "carrots",
        price: 15,
        description: "with the stem"
    }
]

var chicken = [
    {
        id: 1,       
        title: "Chicken with Bone",
        price: 21.95,
        description: `Cornish chicken marinated in fresh lemon juice, herbs and saffron and 
        broiled to perfection.`   
    },
    {
        id: 2,
        title: "Chicken Koobideh",
        price: 17.95,
        description: `Seasoned ground chicken rolled around a skewer and flame broiled.`
    },
    {
        id: 3,       
        title: "Chicken Boneless",
        price: 21.95,
        description: "Fresh chicken breast in a special marinate and broiled to perfection."    
    },
    {
        id: 4,
        title: "Chicken Soltani",
        price: 25.95,
        description: `Combination of boneless chicken and chicken koobideh.`
    },
    {
        id: 5,       
        title: "Gaymeh Lapeh",
        price: 15.95,
        description: "A stew of split pea and chicken served with Persian rice."    
    },
    {
        id: 6,
        title: "Chicken again",
        price: 16,
        description: "yay chicken"
    }
]

var beef = [
    {
        id: 1,
        title: "beef title",
        price: 15,
        description: "beef desc"
    },
    {
        id: 2,
        title: "beef title",
        price: 15,
        description: "beef desc"
    },
    {
        id: 3,
        title: "Ghormah Sabzi",
        price: 15.95,
        description: "Stew of beef and green herbs."
    }
]

var fish = [
    {
        id: 1,
        title: "Salmon Fish",
        price: 19.95,
        description: `Marinated filet of salmon fish pan fried or frame broiled.`
    } 
]


document.getElementById('chicken-chinese').innerHTML = chickenC.map(entry => 
    `<div class="menu-entry">
    <div class="entry-header">
        <div><h4>${entry.title}</h4></div>
        <div><h4>${entry.price}</h4></div>
    </div>
    <div class="entry-desc">
        <p>${entry.description}
        </p>
    </div>
</div>`
).join('')

document.getElementById('chicken-persian').innerHTML = chicken.map(entry => 
    `<div class="menu-entry">
    <div class="entry-header">
        <div><h4>${entry.title}</h4></div>
        <div><h4>${entry.price}</h4></div>
    </div>
    <div class="entry-desc">
        <p>${entry.description}
        </p>
    </div>
</div>`
).join('')

document.getElementById('beef-chinese').innerHTML = beefC.map(entry => 
    `<div class="menu-entry">
    <div class="entry-header">
        <div><h4>${entry.title}</h4></div>
        <div><h4>${entry.price}</h4></div>
    </div>
    <div class="entry-desc">
        <p>${entry.description}
        </p>
    </div>
</div>`
).join('')

document.getElementById('beef-persian').innerHTML = beef.map(entry => 
    `<div class="menu-entry">
    <div class="entry-header">
        <div><h4>${entry.title}</h4></div>
        <div><h4>${entry.price}</h4></div>
    </div>
    <div class="entry-desc">
        <p>${entry.description}
        </p>
    </div>
</div>`
).join('')

document.getElementById('vegetarian').innerHTML = veg.map(entry => 
    `<div class="menu-entry">
    <div class="entry-header">
        <div><h4>${entry.title}</h4></div>
        <div><h4>${entry.price}</h4></div>
    </div>
    <div class="entry-desc">
        <p>${entry.description}
        </p>
    </div>
</div>`
).join('')

document.getElementById('fish').innerHTML = fish.map(entry => 
    `<div class="menu-entry">
    <div class="entry-header">
        <div><h4>${entry.title}</h4></div>
        <div><h4>${entry.price}</h4></div>
    </div>
    <div class="entry-desc">
        <p>${entry.description}
        </p>
    </div>
</div>`
).join('')

function toggle(id) {
    var menu = document.getElementById(id);
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}