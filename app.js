function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll(".carousel-item");
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;

    const offset = -index * 100 + "%";
    document.querySelector(".carousel-inner").style.transform = "translateX(" + offset + ")";
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        nextSlide();
    }, 3000);
});

const carShowroom = {
    cars: {
      car1: {
        model: "Aventador",
        company: "Lamborghini",
        image: "lom1.webp",
        price: "$400,000",
      },
      car2: {
        model: "Huracan",
        company: "Lamborghini",
        image: "lom 2.jpg",
        price: "$200,000",
      },
      car3: {
        model: "Urus",
        company: "Lamborghini",
        image: "lom 3.webp",
        price: "$220,000",
      },
      car4: {
        model: "Sian",
        company: "Lamborghini",
        image: "lom 4.webp",
        price: "$3,000,000",
      },
      car5: {
        model: "Civic",
        company: "Honda",
        image: "hon 1.jpg",
        price: "$4,500,000",
      },
      // Honda
      car6: {
        model: "Civic",
        company: "Honda",
        image: "hon 2.jpg",
        price: "$25,000",
      },
      car7: {
        model: "Accord",
        company: "Honda",
        image: "hon 3.avif",
        price: "$30,000",
      },
      car8: {
        model: "Accord",
        company: "Honda",
        image: "hon 4.avif",
        price: "$35,000",
      },
      car9: {
        model: "Accord",
        company: "Honda",
        image: "hon 5.jpg",
        price: "$40,000",
      },
      car10: {
        model: "Fit",
        company: "Honda",
        image: "hon 6._2",
        price: "$18,000",
      },
      
      car11: {
        model: "Corolla",
        company: "Toyota",
        image: "tot 1.webp",
        price: "$22,000",
      },
      car12: {
        model: "Corolla",
        company: "Toyota",
        image: "tot 2.jpg",
        price: "$28,000",
      },
      car13: {
        model: "Land Cruiser",
        company: "Toyota",
        image: "tot 3.jfif",
        price: "$45,000",
      },
      car14: {
        model: "Land Cruiser",
        company: "Toyota",
        image: "tot4.jfif",
        price: "$50,000",
      },
      car15: {
        model: "Land Cruiser",
        company: "Toyota",
        image: "tot 5.jfif",
        price: "$35,000",
      },
      // Ford
      car16: {
        model: "Mustang",
        company: "Ford",
        image: "mas 5.webp",
        price: "$55,000",
      },
      car17: {
        model: "Mustang",
        company: "Ford",
        image: "for 1.avif",
        price: "$20,000",
      },
      car18: {
        model: "Mustang",
        company: "Ford",
        image: "for 2.webp",
        price: "$45,000",
      },
      car19: {
        model: "Escape",
        company: "Ford",
        image: "for 3.avif",
        price: "$50,000",
      },
      car20: {
        model: "Escape",
        company: "Ford",
        image: "for 4.avif",
        price: "$30,000",
      },
      // Audi
      car21: {
        model: "A4",
        company: "Audi",
        image: "aud 1.jpg",
        price: "$40,000",
      },
      car22: {
        model: "Q7",
        company: "Audi",
        image: "aud 2.webp",
        price: "$70,000",
      },
      car23: {
        model: "R8",
        company: "Audi",
        image: "aud 3.webp",
        price: "$200,000",
      },
      car24: {
        model: "A6",
        company: "Audi",
        image: "aud 4.avif",
        price: "$60,000",
      },
    },
  }
  
  class Car {
    constructor(model, company, image, price) {
      this.model = model
      this.company = company
      this.image = image
      this.price = price
    }
  
    createCard() {
      return `<div class="car-card">
                      <img src="${this.image}" alt="${this.model}" width="100%">
                      <h3>${this.model}</h3>
                      <p>${this.company}</p>
                      <p class="price">Price: ${this.price}</p>
                  </div>`
    }
  }
  
  class CarSearch {
    constructor() {
      this.cars = Object.values(carShowroom.cars).map((car) => new Car(car.model, car.company, car.image, car.price))
      this.displayCars(this.cars)
      this.populateCarNames()
      document.getElementById("search-btn").addEventListener("click", () => this.filterCars())
      document.getElementById("car-name").addEventListener("change", () => this.updateCarModels())
    }
  
    displayCars(cars) {
      const container = document.getElementById("car-container")
      container.innerHTML = cars.map((car) => car.createCard()).join("")
      container.classList.add("car-grid")
    }
  
    populateCarNames() {
      const carNameSelect = document.getElementById("car-name")
      const uniqueCompanies = [...new Set(this.cars.map((car) => car.company))]
      uniqueCompanies.forEach((company) => {
        const option = document.createElement("option")
        option.value = company
        option.textContent = company
        carNameSelect.appendChild(option)
      })
    }
  
    updateCarModels() {
      const selectedCompany = document.getElementById("car-name").value
      const carModelSelect = document.getElementById("car-model")
      carModelSelect.innerHTML = '<option value="">Select Car Model</option>'
  
      if (selectedCompany) {
        const models = this.cars.filter((car) => car.company === selectedCompany).map((car) => car.model)
        const uniqueModels = [...new Set(models)]
        uniqueModels.forEach((model) => {
          const option = document.createElement("option")
          option.value = model
          option.textContent = model
          carModelSelect.appendChild(option)
        })
      }
    }
  
    filterCars() {
      const selectedCompany = document.getElementById("car-name").value
      const selectedModel = document.getElementById("car-model").value
  
      const filteredCars = this.cars.filter(
        (car) => (!selectedCompany || car.company === selectedCompany) && (!selectedModel || car.model === selectedModel),
      )
  
      this.displayCars(filteredCars)
    }
  }
  
  new CarSearch()
  