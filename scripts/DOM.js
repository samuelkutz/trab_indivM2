//set of functions to work with DOM

function uncheckSiblings(checkbox, family){
    let checkboxes = document.querySelectorAll(`input[name="${family}"]`)

    checkboxes.forEach(function(item) {
        if(item !== checkbox) {
            item.checked = false
        }
    })
}

function changeSubtypeSelect(checkbox){
    let type = checkbox.id

    if (type == "Length"){
        changeToLength()
    }

    
    if (type == "Weight"){
        changeToWeight()
    }

    
    if (type == "Temperature"){
        changeToTemperature()
    }
}


function changeToLength(){
    let subtypeFrom = document.querySelector("#From")
    let subtypeTo = document.querySelector("#To")

    subtypeFrom.innerHTML = 
    `\n<h2 class="subtitle">From</h2>
    <div>
        <input type="checkbox" id="fromMeters" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromMeters">Meters</label>
    </div>

    <div>
        <input type="checkbox" id="fromCentimeters" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromCentimeters">Centimeters</label>
    </div>

    <div>
        <input type="checkbox" id="fromInches" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromInches">Inches</label>
    </div>\n`

    subtypeTo.innerHTML = 
    `\n<h2 class="subtitle">To</h2>

    <div>
        <input type="checkbox" id="toMeters" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toMeters">Meters</label>
    </div>

    <div>
        <input type="checkbox" id="toCentimeters" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toCentimeters">Centimeters</label>
    </div>

    <div>
        <input type="checkbox" id="toInches" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toInches">Inches</label>
    </div>\n`
}

function changeToWeight(){
    let subtypeFrom = document.querySelector("#From")
    let subtypeTo = document.querySelector("#To")

    subtypeFrom.innerHTML = 
    `\n<h2 class="subtitle">From</h2>

    <div>
        <input type="checkbox" id="fromKilograms" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromKilograms">Kilograms</label>
    </div>

    <div>
        <input type="checkbox" id="fromGrams" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromGrams">Grams</label>
    </div>

    <div>
        <input type="checkbox" id="fromPounds" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromPounds">Pounds</label>
    </div>\n`

    subtypeTo.innerHTML = 
    `\n<h2 class="subtitle">To</h2>
                
    <div>
        <input type="checkbox" id="toKilograms" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toKilograms">Kilograms</label>
    </div>

    <div>
        <input type="checkbox" id="toGrams" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toGrams">Grams</label>
    </div>

    <div>
        <input type="checkbox" id="toPounds" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toPounds">Pounds</label>
    </div>\n`
}

function changeToTemperature(){
    let subtypeFrom = document.querySelector("#From")
    let subtypeTo = document.querySelector("#To")

    subtypeFrom.innerHTML = 
    `\n<h2 class="subtitle">From</h2>

    <div>
        <input type="checkbox" id="fromCelsius" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromCelsius">Celsius</label>
    </div>

    <div>
        <input type="checkbox" id="fromFahrenheit" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromFahrenheit">Fahrenheit</label>
    </div>

    <div>
        <input type="checkbox" id="fromKelvin" name="SubtypeFrom" onchange="uncheckSiblings(this, name)">
        <label for="fromKelvin">Kelvin</label>
    </div>\n`

    subtypeTo.innerHTML = 
    `\n<h2 class="subtitle">To</h2>
                
    <div>
        <input type="checkbox" id="toCelsius" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toCelsius">Celsius</label>
    </div>

    <div>
        <input type="checkbox" id="toFahrenheit" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toFahrenheit">Fahrenheit</label>
    </div>

    <div>
        <input type="checkbox" id="toKelvin" name="SubtypeTo" onchange="uncheckSiblings(this, name)">
        <label for="toKelvin">Kelvin</label>
    </div>\n`
}