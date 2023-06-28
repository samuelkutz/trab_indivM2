//AVISO: CODIGO FEIAO
//SE EXISTIR UMA MANEIRA MAIS FACIL DE FAZER ISSO POR FAVOR 
//ME CHAME NO DISCORD: mukinga]
function lengthConverter(input, from, to){
    if (from == undefined || to == undefined || input == undefined || input < 0) return "Invalid"

    console.log("aaa")
    if(from == "fromMeters" && to == "toMeters") return (input)
    if(from == "fromMeters" && to == "toCentimeters") return (input * 100.0)
    if(from == "fromMeters" && to == "toInches") return (input * 39.37)
    
    if(from == "fromCentimeters" && to == "toMeters") return (input / 100)
    if(from == "fromCentimeters" && to == "toCentimeters") return (input)
    if(from == "fromCentimeters" && to == "toInches") return (input / 2.54)
    
    if(from == "fromInches" && to == "toMeters") return (input / 39.37)
    if(from == "fromInches" && to == "toCentimeters") return (input * 2.54)
    if(from == "fromInches" && to == "toInches") return (input)
}

function weightConverter(input, from, to){
    if (from == undefined || to == undefined || input == undefined || input < 0) return "Invalid"

    if(from == "fromKilograms" && to == "toKilograms") return (input)
    if(from == "fromKilograms" && to == "toGrams") return (input * 1000.0)
    if(from == "fromKilograms" && to == "toPounds") return (input * 2.205)

    if(from == "fromGrams" && to == "toGrams") return (input)
    if(from == "fromGrams" && to == "toKilograms") return (input / 1000)
    if(from == "fromGrams" && to == "toPounds") return (input / 453.6)
    
    if(from == "fromPounds" && to == "toKilograms") return (input / 2.205)
    if(from == "fromPounds" && to == "toGrams") return (input * 453.6)
    if(from == "fromPounds" && to == "toPounds") return (input)
}

function temperatureConverter(input, from, to){
    if (from == undefined || to == undefined || input == undefined) return "Invalid"  

    if(from == "fromCelsius" && to == "toCelsius") return (input)
    if(from == "fromCelsius" && to == "toKelvin") return (input + 273.15)
    if(from == "fromCelsius" && to == "toFahrenheit") return ((input * 9/5) + 32)

    if(from == "fromKelvin" && to == "toCelsius") return (input - 273.15)
    if(from == "fromKelvin" && to == "toKelvin") return (input)
    if(from == "fromKelvin" && to == "toFahrenheit") return ((input - 273.15) * 9/5 + 32)
    
    if(from == "fromFahrenheit" && to == "toCelsius") return ((input  - 32) * 5/9)
    if(from == "fromFahrenheit" && to == "toKelvin") return ((input - 32) * 5/9 + 273.15)
    if(from == "fromFahrenheit" && to == "toFahrenheit") return (input)   
}

function convert(){
    var type;
    var from;
    var to;

    var input = parseFloat(document.querySelector("#input").value)
    
    document.querySelectorAll('input[name="SubtypeFrom"]').forEach(function(item) {
        if(item.checked){
            from = item.id
            return
        }
    })

    document.querySelectorAll('input[name="SubtypeTo"]').forEach(function(item) {
        if(item.checked){
            to = item.id
            return
        }
    })

    document.querySelectorAll('input[name="Type"]').forEach(function(item) {
        if(item.checked){
            type = item.id
            return
        }
    })

    if (type == "Length"){
        document.querySelector("#output").value = lengthConverter(input, from, to)
        return
    }
    
    if (type == "Weight"){
        document.querySelector("#output").value = weightConverter(input, from, to)
        return
    }

    if (type == "Temperature"){
        document.querySelector("#output").value = temperatureConverter(input, from, to)
        return
    }
}

