{
     {
        "numbers": [
        "",
	" thousand",
	" million",
	" billion",
	" trillion",
	" quadrillion",
	" quintillion"
     }
}

    var url = "numbers.json";         
    $.getJSON(url, function (data) {
        $.each(data, function (numbers, model) {
            if (model.numbers == " thousand", " million", " billion", " trillion", " quadrillion", " quintillion") {
                console.log(model.numbers)
            }
        })
    });
