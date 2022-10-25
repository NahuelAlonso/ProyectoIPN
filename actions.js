const articles = [
    { id: 0, type: 'fanny_pack', size: '30x15 cm', release: '1/1/2020', soldUnits: 6, fabrics: '100% PU', price: 8999, sale: 0.2, name: 'Riñonera Cordura', colors: 'rojo, marrón, rosa, negro', washing: ['No lavar', 'No exprimir', 'No planchar', 'No blanquear'] },
    { id: 1, type: 'fanny_pack', size: '30x15 cm', release: '1/3/2020', soldUnits: 8, fabrics: '100% PU', price: 11599, sale: 0.3, name: 'Riñonera Preto', colors: 'marrón, rosa, negro', washing: ['No lavar', 'No exprimir', 'No planchar', 'No blanquear'] },
    { id: 2, type: 'fanny_pack', size: '30x15 cm', release: '1/6/2020', soldUnits: 9, fabrics: '100% PU', price: 4349, sale: 0.1, name: 'Riñonera Pocket', colors: 'rojo, negro', washing: ['No lavar', 'No exprimir', 'No planchar', 'No blanquear'] },
    { id: 3, type: 'fanny_pack', size: '30x15 cm', release: '1/9/2020', soldUnits: 10, fabrics: '100% Plástico', price: 4349, sale: 0, name: 'Riñonera Vilo', colors: 'rojo, marrón, rosa, negro', washing: ['No lavar', 'No exprimir', 'No planchar', 'No blanquear'] },
    { id: 4, type: 'fanny_pack', size: '30x15 cm', release: '1/12/2020', soldUnits: 11, fabrics: '100% Poliéster', price: 4799, sale: 0, name: 'Riñonera DELTA', colors: 'rojo', washing: ['No lavar', 'No exprimir', 'No planchar', 'No blanquear'] },
    { id: 5, type: 'fanny_pack', size: '30x15 cm', release: '1/1/2021', soldUnits: 6, fabrics: '100% Poliéster', price: 5889, sale: 0, name: 'Riñonera Rufina', colors: 'rojo, marrón, rosa', washing: ['No lavar', 'No exprimir', 'No planchar', 'No blanquear'] },
    { id: 6, type: 'fanny_pack', size: '30x15 cm', release: '1/2/2021', soldUnits: 6, fabrics: '100% Puffer', price: 11989, sale: 0, name: 'Riñonera Longtemps', colors: 'rojo, marrón', washing: [] },
    { id: 7, type: 'fanny_pack', size: '30x15 cm', release: '1/5/2021', soldUnits: 8, fabrics: '100% Puffer', price: 11989, sale: 0.15, name: 'Riñonera Adidas', colors: 'negro', washing: [] },
    { id: 8, type: 'fanny_pack', size: '30x15 cm', release: '1/8/2021', soldUnits: 3, fabrics: '100% Puffer', price: 7999, sale: 0, name: 'Riñonera Everlast', colors: 'negro', washing: [] },
    { id: 9, type: 'fanny_pack', size: '30x15 cm', release: '1/11/2021', soldUnits: 1, fabrics: '100% Puffer', price: 9499, sale: 0.5, name: 'Riñonera Holográfica', colors: 'rojo, negro', washing: [] },
    { id: 10, type: 'fanny_pack', size: '30x15 cm', release: '1/11/2021', soldUnits: 1, fabrics: '100% Charol', price: 10000, sale: 0.15, name: 'Riñonera Grande', colors: 'rojo, negro', washing: [] },
    { id: 11, type: 'fanny_pack', size: '30x15 cm', release: '1/11/2021', soldUnits: 1, fabrics: '100% Puffer', price: 6000, sale: 0.15, name: 'Riñonera Charol', colors: 'rojo, negro', washing: [] },
    { id: 12, type: 'fanny_pack', size: '30x15 cm', release: '1/11/2021', soldUnits: 1, fabrics: '100% Poliéster', price: 8900, sale: 0.15, name: 'Riñonera Floreada', colors: 'rojo, negro', washing: [] },
    { id: 13, type: 'scarf', size: '190x45 cm', release: '1/1/2022', soldUnits: 0, fabrics: '100% Lana', price: 12590, sale: 0, name: 'Bufanda All Too Well', colors: 'negro, marrón, gris', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 14, type: 'scarf', size: '190x45 cm', release: '1/2/2021', soldUnits: 10, fabrics: '100% Lana', price: 12590, sale: 0, name: 'Bufanda Escocesa', colors: 'negro, marrón, gris', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 15, type: 'scarf', size: '190x45 cm', release: '1/3/2022', soldUnits: 11, fabrics: '100% Lana', price: 12590, sale: 0, name: 'Bufanda Rayada', colors: 'marrón, gris', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 16, type: 'scarf', size: '190x45 cm', release: '1/5/2021', soldUnits: 12, fabrics: '100% Lana', price: 12590, sale: 0.1, name: 'Bufanda con Flecos', colors: 'negro, gris', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 17, type: 'scarf', size: '190x45 cm', release: '1/5/2022', soldUnits: 3, fabrics: '100% Lana', price: 7990, sale: 0, name: 'Bufanda Bicolor', colors: 'negro, gris', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 18, type: 'scarf', size: '190x45 cm', release: '1/6/2022', soldUnits: 5, fabrics: '100% Lana', price: 7990, sale: 0.2, name: 'Bufanda Sweter', colors: 'negro, marrón', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 19, type: 'scarf', size: '190x45 cm', release: '1/2/2021', soldUnits: 9, fabrics: '100% Lana', price: 15020, sale: 0, name: 'Bufanda Pompón', colors: 'negro', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] },
    { id: 20, type: 'scarf', size: '190x45 cm', release: '1/8/2022', soldUnits: 8, fabrics: '100% Lana', price: 15020, sale: 0.1, name: 'Bufanda Hufflepuff', colors: 'negro, rojo', washing: ['Lavar a máquina max. 40°C', 'No usar lejía ni blanqueador', 'No limiar en seco', 'Planchar máx. 110°C'] }
];//articles = {id, type, size, release, soldUnits, fabrics, price, sale, name, colors, washing}
Object.freeze(articles);

const trends = [
    {id: 'winter', name: 'Invierno', articles: [0, 3, 4, 5, 8, 10, 11, 15]},//8
    {id: 'summer', name: 'Verano', articles: [1, 6, 7, 9, 12, 15]},//6
    {id: 'spring', name: 'Primavera', articles: [2, 3, 4, 19, 17, 18, 13, 14]},//8
];
Object.freeze(trends);

let articleTemplate;//Plantilla de los artículos
let nothingFound;//Plantilla de texto con error de "ningún artículo coincide"
let filters = { type: undefined, min: undefined, max: undefined, search: '', colors: []};
let sorting = 'id';//Puede ser soldUnits, release, price o id
let shoppingCart = [];//Tiene todas las unidades a comprar, con los atributos 'id', 'cantidad' y 'color'

const getNumber = (number) => {//Convierte un número int a un string con '$' y '.' donde corresponde
    number = number.toString();
    if(number.length > 3)
        number = number.replace(/(\d{3})$/, '.$1');
    return '$' + number;
}

const sort = (list, sorting) => {//Devuelve una lista ordenada de su argumento, con criterio sorting
    let sortingFunction
    switch (sorting){
        case 'id': //Si se ordena por id,
            sortingFunction = (a, b) => a.id - b.id;//Se ordena de menor a mayor
            break;
        case 'soldUnits': //Si se ordena por unidades vendidas,
            sortingFunction = (a, b) => b['soldUnits'] - a['soldUnits'];//Se ordena de mayor a menor
            break;
        case 'price':
            sortingFunction = (a, b) => a.price * (1 - a.sale) - b.price * (1 - b.sale);//Se ordena de menor a mayor teniendo en cuenta las ofertas
            break;
        case 'actualPrice':
            sortingFunction = (a, b) => a.price - b.price;//Se ordena de menor a mayor sin tener en cuenta las ofertas
            break;
        case 'release': //Si se ordena por fecha,
            sortingFunction = (a, b) => {
                let dateA = a.release, dateB = b.release;
                let splitted = dateA.split('/');//Se separa a dateA por sus / para pasar de DD/MM/AAAA a MM/DD/AAAA
                dateA = splitted[1] + '/' + splitted[0] + '/' + splitted[2];//Se intercambia el primer número con el segundo
                dateA = new Date(dateA);//Se le asigna a dateA, la fecha en a.realease

                splitted = dateB.split('/');//Se repite el mismo proceso para dateB
                dateB = splitted[1] + '/' + splitted[0] + '/' + splitted[2];
                dateB = new Date(dateB);

                return dateB - dateA;
            }
    }
    return list.slice().sort(sortingFunction);
};

const showArticles = (list) => {//Crea una tarjeta html con los detalles de cada artículo dentro de list
    list = sort(list.slice(), sorting);//Ordena la lista de los artículos debidos
    console.log(list);
    if(list.length !== 0){
        $("#errorMessage").remove();
        list.forEach((article) => {
            let id = article.id;
            let newElement = articleTemplate.clone();
            newElement.find(".card-img-top").attr('src', `./images/products/${id}${article.name.toLowerCase().replace(/\s/g, '-')}.jpeg`);//Se cambia la imagen
            newElement.find(".card-img-top").attr({'alt': 'Foto de ' + article.name, 'id': 'image' + id});//Se cambia el alt de la img
            newElement.find(".card-title").text(article.name);//Se cambia el nombre
            newElement.find(".card-text").text(getNumber(Math.round(article.price * (1 - article.sale))));//Se cambia el precio
            newElement.find("#buy").attr('id', 'buyButton' + article.id);//Se cambia el id del botón de comprar
            newElement.find(".art-counter").children().attr('id', 'counter' + article.id);
            if(shoppingCart.filter((purchase) => purchase.id == article.id)[0])
                newElement.find(".art-counter").children().text(shoppingCart.filter((purchase) => purchase.id == article.id)[0].quantity);
            newElement.find(".art-counter").on('DOMSubtreeModified', () => {
                if(newElement.find(".art-counter").text().replace(/\s/g, '') == '0')
                    newElement.find(".art-counter").hide();
                else
                    newElement.find(".art-counter").show();
            });
            if(newElement.find(".art-counter").text().replace(/\s/g, '') == '0')
                newElement.find(".art-counter").hide();
            else
                newElement.find(".art-counter").show();
            newElement.appendTo("#catalog");
        });
    }
    else
        nothingFound.clone().appendTo("#catalog");
};

const filter = () => {//Devuelve una lista de los artículos que coinciden con filters
    return articles.filter((article) => {
        let searchRegex = new RegExp(filters.search, 'i');
        let hasColor = article.colors.split(', ').some((color) => {
            return filters.colors.indexOf(color) !== -1;
        });
        return (
            (!filters.type || filters.type === article.type) &&
            (!filters.min || filters.min < Math.round(article.price * (1 - article.sale))) &&
            (!filters.max || filters.max > Math.round(article.price * (1 - article.sale))) &&
            hasColor && searchRegex.test(article.name)
        );
    });
};

const translateColor = (color) => {
    switch(color){//Traduce color a inglés
        case 'rojo': color = 'red'; break;
        case 'marrón': color = 'brown'; break;
        case 'blanco': color = '#F0F0F0'; break;
        case 'negro': color = 'black'; break;
        case 'gris': color = 'gray'; break;
        case 'rosa': color = 'pink'; break;
    }
    return color;
}

const addColorToFilters = (color) => {
    color = color.replace('Checkbox', '');
    if (filters.colors.indexOf(color) === -1)
        filters.colors.push(color);
    else
        filters.colors.splice(filters.colors.indexOf(color), 1);
    console.log(filters.colors);
}

const showModal = (articleId) => {
    articleId = articleId.replace(/\D/g,'');//El id está compuesto por 'image' + id, por lo que sólo dejamos los números
    const article = articles[articleId],//El artículo sobre el que se deben proporcionar los datos
        simpleFeatures = [{id: 'size', name: 'Tamaño'}, {id: 'fabrics', name: 'Telas'}, {id: 'release', name: 'Estreno'}, {id: 'soldUnits', name: 'Vendidos'}];//Datos a mostrar en #modalSimpleFeatures
        featureValueTemplate = $("#modalSimpleFeatures").find(".featureValue:first-of-type").clone(),//Plantilla de cómo se ve un item dentro de #modalSimpleFeatures
        circleTemplate = $("#modalColors").find(".circle:first-of-type").clone(),
        rulesTemplate = $("#modalWashingList").find("li:first-of-type").clone();
    
    $(".featureValue").remove();//Se quitan todos por si ya se mostró el modal antes
    $("#modalSimpleFeatures").children().remove();
    $("#modalColors").children().remove();
    if(article.washing.length > 0)
        $("#modalWashingList").children().remove();
    
    //Precio y nombre
    $("#modalName").text(article.name);//Se actualiza el nombre
    $("#modalPrice").text(getNumber(Math.round(article.price * (1 - article.sale))));//Se actualiza el precio
    $("#modalBuy").unbind('click');
    $("#modalBuy").click(() => updateCart.add(articleId));
    if(article.sale > 0)//En caso de haber alguna oferta
        $("#modalSale").text(getNumber(article.price));//Mostrar el precio anterior (tachado)

    //Características simples
    simpleFeatures.forEach((feature) => {//Por cada característica simple
        let toAppend = featureValueTemplate.clone();
        if(feature.id === 'fabrics' && article[feature.id].length > 18)
            toAppend.addClass('d-none d-lg-block');
        toAppend.find(".feature").text(feature.name + ':');
        toAppend.find(".value").text(article[feature.id]);
        toAppend.clone().appendTo($("#modalSimpleFeatures"));
    })
    
    //Colores
    article.colors.split(', ').forEach((color) => {
        color = translateColor(color);
        let toAppend = circleTemplate.clone();//Genera un nuevo elemento (círculo)
        toAppend.css({'background-color': color});//Se le asigna el color deseado
        toAppend.appendTo($("#modalColors"));
    });

    //Cuidados
    if(article.washing.length > 0){
        $("#modalWashing").show();
        article.washing.forEach((rule) => {
            let toAppend = rulesTemplate.clone();
            toAppend.text(rule);
            toAppend.appendTo($("#modalWashingList"));
        });
    }
    else
        $("#modalWashing").hide();

    $('#modal').modal('show');
}

const updateCart = {//Objeto con dos attb; 'add' añade un objeto al carrito y 'delete', se lo quita
    'add': (article) => {//Objeto con attb id y color o puede ser un id (número)
        let ids = shoppingCart.map((art) => art.id);
        // if(typeof(article) === 'object'){
        //     $("#counter" + article.id).text(Number($("#counter" + article.id).text()) + 1);
        //     if(ids.indexOf(article.id) === -1)
        //         shoppingCart.push({id: article.id, color: article.color, quantity: 1});
        //     else
        //         shoppingCart[ids.indexOf(article.id)].quantity++;
        // }
        // else {
            article = article.replace(/\D/g, '');
            console.log(article);
            $("#counter" + article).text(Number($("#counter" + article).text()) + 1);
            if(ids.indexOf(article) === -1)
                shoppingCart.push({id: article, color: articles[article].colors.split(', ')[0], quantity: 1});
            else
                shoppingCart[ids.indexOf(article)].quantity++;
        // }
        $("[data-toggle='popover']").attr('data-content',
            shoppingCart.reduce((str, art) => `${str}<p class="m-1">${articles[art.id].name}   x${art.quantity}</p>`, ''));
        $("#alert").show();
        setTimeout(() => {
            $("#alert").hide();
        }, 2000);
            
    },
    'delete': (articleId) => {//Número
        let ids = shoppingCart.map((art) => art.id);
        if(ids.indexOf(articleId) === -1)
            return;
        let index = ids.indexOf(articleId);
        if (shoppingCart[index].quantity === 0)
            shoppingCart.splice(index, 1);
        else
            shoppingCart[ids.indexOf(articleId)].quantity--;
        $("#counter" + articleId).text(Number($("#counter" + articleId).text()) - 1);
        $("[data-toggle='popover']").attr('data-content',
            shoppingCart.reduce((str, art) => `${str}<p class="m-1">${articles[art.id].name}   x${art.quantity}</p>`, ''));
    }
}

const checkCredentials = () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#mailInput").val()))
        $("#mailError").hide();
    else
        $("#mailError").show();

    if($("#passwordInput").val().length >= 8)
        $("#passwordError").hide();
    else
        $("#passwordError").show();

}

$(document).ready(function () {//Se ejecuta al estar el documento listo
    
    articleTemplate = $(".card").clone();//Se guarda un clon del original en la variable articleTemplate
    $(".card").remove();//Y se lo elimina
    nothingFound = $("#errorMessage").clone();//Se repite el proceso con el erorr de no encotrado
    $("#errorMessage").remove();
    showArticles(articles);//Se muestran todos los artículos
    
    $("#mailError").hide();
    $("#passwordError").hide();
    $("#alert").hide();
    
    //Input tipo range
    var sortedByPrice = sort(articles.slice(), 'actualPrice');
    const minPrice = sortedByPrice[0].price, maxPrice = sortedByPrice[sortedByPrice.length - 1].price;    
    //Se les asigna los valores debidos a los input tipo range
    $("#minPriceValue").html(getNumber(minPrice));
    $("#maxPriceValue").html(getNumber(maxPrice));
    
    $("#minPriceInput").attr({'value' : minPrice, 'min' : minPrice, 'max' : maxPrice});
    $("#maxPriceInput").attr({'value' : maxPrice, 'min' : minPrice, 'max' : maxPrice});

    (function() {//Controla que el precio máximo no sea menor o igual al mínimo.
        function rangeInputChangeEventHandler(e){
            var minBtn = $(this).parent().children('.min'),
                maxBtn = $(this).parent().children('.max'),
                range_min = $(this).parent().children('.range_min'),
                range_max = $(this).parent().children('.range_max'),
                minVal = parseInt($(minBtn).val()),
                maxVal = parseInt($(maxBtn).val()),
                origin = $(this).attr('id');
    
            if(origin === 'minPriceInput' && minVal > maxVal-5){
                $(minBtn).val(maxVal-300);
            }
            var minVal = parseInt($(minBtn).val());
            $(range_min).html(getNumber(minVal));
    
    
            if(origin === 'maxPriceInput' && maxVal-5 < minVal){
                $(maxBtn).val(300+ minVal);
            }
            var maxVal = parseInt($(maxBtn).val());
            $(range_max).html(getNumber(maxVal));
        }
     $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
    })();

    //Líneas (trends)
    const navbarLink = $("#navbarLinks").children().clone();//Se crea una copia de la plantilla de cómo se debe ver un link en el navbar
    const hamburgerLink = $("#hamburgerLinks").children().clone();//Y en el menú hamburguesa
    $("#navbarLinks").children().remove();//Quita las plantillas
    $("#hamburgerLinks").children().remove();
    trends.forEach((trend) => {//Por cada línea,
        let navbar = navbarLink.clone();//Crea una copia de la plantilla
        navbar.find("#navbarTrendName").text(trend.name);//Cambia el texto al nombre de la línea
        navbar.find("#navbarTrendName").parent().parent().click(() =>{//Cuando se presiona
            $("#catalog").children().remove();
            showArticles(articles.filter((article) => trend.articles.indexOf(article.id) !== -1));
        });
        navbar.appendTo(navbarLinks);//Le agrega al elemento, navbar
        //Repite el mismo proceso, con hamburger
        let hamburger = hamburgerLink.clone();
        hamburger.find("#hamburgerTrendName").text(trend.name);
        hamburger.find("#hamburgerTrendQuantity").text(trend.articles.length + ' productos');//Cambia el texto a la cantidad
        hamburger.appendTo(hamburgerLinks);
    });

    //Filtrado de colores
    (function() {
        let allColors = [];
        articles.forEach((article) => {
            let toPush = article.colors.split(', ').forEach((color) => {
                if(allColors.indexOf(color) === -1)
                    allColors.push(color);
            });
        });
        let template = $("#colorFilter").children().clone();
        $("#colorFilter").children().remove();
        filters.colors = allColors;
        allColors.forEach((color) => {
            let aux = template.clone();
            aux.find("input").attr('id', color + 'Checkbox');
            aux.find("label").attr('for', color + 'Checkbox');
            aux.find("label").css({'background-color': translateColor(color)});
            aux.appendTo($("#colorFilter"));
        });
    })();

    $(function () {//Previene que se refresque la página al enviar formularios
        $("form").submit(function () { return false; });
    });

    //Buscar
    $("#searchBar").hide();
    $("#searchButton").click(() => {
        const bar = $("#searchBar");
        if(bar.is(":visible"))
            bar.hide();
        else
            bar.show();
    });

    //Collapsibles
    let i = [$("#collapseFilter"), $("#collapseHamburger")];
    $("#collapseFilter").on('show.bs.collapse', () => {
        console.log('ello');
        if($("#collapseHamburger").attr("aria-expanded"))
            $("#collapseHamburger").collapse('hide');
    });
    $("#collapseHamburger").on('show.bs.collapse', () => {
        console.log('olle');
        if($("#collapseFilter").attr("aria-expanded"))
            $("#collapseFilter").collapse('hide');
    });


    $("#searchBar input[type='search']").change(() => {
        filters.search = $("input[type='search']").val();
        $("#catalog").children().remove();
        showArticles(filter(articles));
    });

    let filterTemplate = $("#filter");

    filterTemplate.find("#minPriceInput").change(() => {
        filters.min = $("#minPriceInput").val();
    });
    
    filterTemplate.find("#maxPriceInput").change(() => {
        filters.max = $("#maxPriceInput").val();
    });


    filterTemplate.find("select").change(function () {
        sorting = $("select option:selected").val();
    });

    filterTemplate.find("input[name='articleType']").change(() => {
        if ($("input[value='scarf']").is(":checked") && $("input[value='fanny_pack']").is(":checked"))
            filters.type = undefined;
        else {
            if (!$("input[value='scarf']").is(":checked") && !$("input[value='fanny_pack']").is(":checked"))
                filters.type = 'none';
            else
                if ($("input[value='scarf']").is(":checked"))
                    filters.type = 'scarf';
                else
                    filters.type = 'fanny_pack';
        }
    });

    filterTemplate.find("input[type='submit']").click(() => {
        $("#catalog").children().remove();
        showArticles(filter(articles));
    });

    let aux = function () {
        if ($(window).width() <= 576){
            filterTemplate.removeClass('border-filter');
            filterTemplate.appendTo("#mobileFilter");
        }
        else{
            filterTemplate.addClass('border-filter');
            filterTemplate.appendTo("#filterContainer");
        }
    };

    aux();

    $( window ).resize(aux);
});