const mainWrapper = document.querySelector(".mainWrapper");
const filterContinent = Array.from(document.querySelectorAll("option"));
const modal = document.querySelector(".modal");
const modalDataTable = document.querySelector(".modal-data-table");
const dataTableBtn = document.getElementById("dataTableButton");
const backBtn = document.getElementById("backBtn");
const dataTableBackBtn = document.getElementById("dataTableBackButton");
const continents = document.querySelector(".continents");
const searchCountry = document.querySelector("input[type='search']");

let modalWrapper = document.createElement("div");
let modalDataTableWrapper = document.createElement("div");
let codeArray = []; //alpha3Code for all countries arr
let countryArray = []; // countries names arr
let borderArray = []; // bordering country arr
let tempData = [];

const Employee = (name) => {
  this.name = name;
};
const fetchCountry = async (event) => {
  const apiEndpoint = `https://restcountries.com/v3.1/all`;
  const countries = document.querySelector(".countries");

  await fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      data.forEach((element) => {
        const { cca3, borders, flags, name, population, region, capital } = element;

        let country = document.createElement("div");
        let imageBtn = document.createElement("button");
        let countryDetails = document.createElement("div");
        let img = document.createElement("img");

        //create an array to hold all alpha3Code
        codeArray.push(cca3);
        //create an array to hold all countries
        countryArray.push(name.common);

        country.classList.add("allCountries");
        countryDetails.classList.add("paraName");

        img.classList.add("flags");
        img.alt = `${name.common} flag`;
        imageBtn.appendChild(img);
        imageBtn.classList.add("image-btn");

        countries.appendChild(country);
        country.appendChild(imageBtn);
        country.appendChild(countryDetails);

        countryDetails.innerHTML = `
				<div class="country-details-wrapper">				
				  	    <h2 class="country-details-title">
						   ${name.common}
						</h2>
						<div class="country-details-content">
				    		 <p class="country-population">
							     <span class="country-details-data-titles">Population:</span>
								 <span class="country-details-data-content">${population.toLocaleString()}</span>
							</p>
				       		 <p class="country-region">
								<span class="country-details-data-titles">Region:</span>
								<span class="country-details-data-content">${region}</span>
							 </p>
				        	 <p class="country-capital">
							 	<span class="country-details-data-titles">Capital:</span>
							 	<span class="country-details-data-content">${capital}</span>
							 </p>
						</div>
				</div>			  
				`;

        img.src = `${flags.svg}`;
        imageBtn.addEventListener("click", function () {
          modal.classList.remove("hide-modal");
          mainWrapper.classList.add("hide-main-wrapper");
          borderArray = [];
          if (typeof borders != "undefined") {
            borders.map((country) => {
              codeArray.forEach((elm, index) => {
                if (country == elm) {
                  borderArray.push(countryArray[index]);
                }
              });
            });
          }
          modal.appendChild(modalWrapper);
          modalTemplate(element);
        });
      });

      //Datatable generated
      $("#countriesDataTable").DataTable({
        data: data,
        dom: "Bfrtip",
        columns: [
          { data: "name.common" },
          { data: "region" },
          { data: "capital[0]" },
          { data: "population" },
          { data: "cca3" },
        ],
        buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
      });
    })
    .catch((error) => console.log("Error :", error));
};

backBtn.addEventListener("click", (e) => {
  e.stopPropagation;
  mainWrapper.classList.remove("hide-main-wrapper");
  modal.classList.add("hide-modal");
});
dataTableBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainWrapper.classList.add("hide-main-wrapper");

  modalDataTable.classList.remove("hide-modal");
  modalDataTableWrapper.classList.add("hide-main-wrapper");
  modalDataTableWrapper.classList.remove("hide-main-wrapper");
  modal.classList.add("hide-modal");
});
dataTableBackBtn.addEventListener("click", (e) => {
  e.stopPropagation;
  mainWrapper.classList.remove("hide-main-wrapper");
  modal.classList.add("hide-modal");

  modalDataTable.classList.add("hide-modal");
  modalDataTableWrapper.classList.remove("hide-main-wrapper");
});

fetchCountry();

searchCountry.addEventListener("input", (e) => {
  const resultCountry = e.target.value;
  const availableCountries = Array.from(document.querySelectorAll(".country-details-title"));
  availableCountries.forEach((country) => {
    const myCountry = country.innerHTML.toLowerCase().trim();
    if (myCountry === resultCountry.toLowerCase().trim()) {
      country.closest(".allCountries").classList.remove("hide-card");
    } else if (myCountry.includes(resultCountry.toLowerCase().trim())) {
      country.closest(".allCountries").classList.remove("hide-card");
    } else {
      country.closest(".allCountries").classList.add("hide-card");
    }
  });
});

const continentSelect = document.querySelector("select");
continentSelect.onchange = (evt) => {
  const availableCountries = Array.from(document.querySelectorAll(".country-region span"));
  availableCountries.forEach((country) => {
    const myCountry = country.innerHTML.toLowerCase().trim();
    if (myCountry == continentSelect.value || continentSelect.value === "all") {
      country.closest(".allCountries").classList.remove("hide-card");
    } else {
      country.closest(".allCountries").classList.add("hide-card");
    }
  });
};

const modalTemplate = (element) => {
  const {
    currencies,
    languages,
    borders,
    flags,
    name,
    population,
    region,
    capital,
    subregion,
    startOfWeek,
  } = element;

  const currencyObj = Object.keys(currencies);
  const currenceList = currencyObj.map((cur) => currencies[cur].name);
  const langs = Object.values(languages);
  const borderState = typeof borders !== "undefined";
  modalWrapper.classList.add("modal-container");

  const borderBool = modal.classList.contains("darkMode");

  modalWrapper.innerHTML = `					
        
		<div class="container country-details">		
  			<div class="flex">
			  <img class="country-details-img" src= ${flags.svg} alt="the flag of ${name.common} " tabindex=0>
			</div>
		<div class="flex">
			<div class="primary-secondary">
				<div class="primary">           
						<h3 class="primary-title">${name.common}</h3>
						<div class="primary-divider">
							<p class="primary-message">
							<span class="highLight">Official name:</span>${name.official}
						</p>
							<p class="primary-message">
							<span class="highLight">Population:</span> ${population.toLocaleString()}
						</p>
							<p class="primary-message">
							<span class="highLight">Region:</span> ${region}
						</p>
							<p class="primary-message">
							<span class="highLight">Sub region:</span> ${subregion}
						</p>
							<p class="primary-message">
							<span class="highLight">Capital:</span> ${capital}
							</p>
						</div>
				</div>
	

			<div class="secondary">
				<p class="secondary-message">
					<span class="highLight">Start of Week:</span> ${startOfWeek}
				</p>

				<div class="secondary-message">
					<span class="highLight">Currencies:</span>
					<ul class="currency-list>	
						${currenceList.map(
              (cur) => `<li class="currency-list-item">
							<span class="secondary-currency">${cur}</span>
						</li>`
            )}
					</ul>							
				</div>

				<p class="secondary-message">
					<span class="highLight">Languages:</span> 
					<ul class="languages">
					${langs
            .map(
              (lang) => `<li>
								<span class="secondary-language">${lang}</span>
						</li>
					`
            )
            .join(" ")}
					</ul>
				</p>
				</div>
				<div class="bordering-city">
					<p class="bordering-content">
						<span class="highLight">Border countries:</span>
					</p>
					<ul class="bordering">					 
						${
              borderState
                ? borderArray
                    .map(
                      (border) => `<li>
										<button class="border btn ${borderBool ? "theme-light" : ""}"> ${border}</button></li>`
                    )
                    .join("")
                : `<li><span>No bordering countries</span></li>`
            } 						
					</ul>
				</div>
			</div>
		</div> 
	</div>     
	`;
  const borderingCountries = document.querySelector(".bordering");
  //add an eventListener to bordering countries
  // when the btn of bordering country is clicked
  // respective country should be displayed.
  borderingCountries.addEventListener("click", (evt) => {
    const apiEndpoint = `https://restcountries.com/v3.1/name/${evt.target.innerHTML.trim()}`;

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        //call the modalTemplate and fetched data for a particular
        //country be applied.
        borderArray = [];
        data[0].borders.map((country) => {
          codeArray.forEach((elm, index) => {
            if (country == elm) {
              borderArray.push(countryArray[index]);
            }
          });
        });
        modalTemplate(data[0]);
      });
  });
};
