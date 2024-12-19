const array = [//az array tömb létrehozása
    {//itt hozom létre az array tömbömnek az első elemét 
        uralkodo: "I.István",//ertekadas az array első elemen belul az uralkodo tulajdonsagnak
        esemeny: "Koronázás",//ertekadas az array első elemen belul az esemeny tulajdonsagnak
        evszam: "1000",//ertekadas az array első elemen belul az evszam tulajdonsagnak
        esemeny2: "Pannonhalmi apátság megalapítása	",//ertekadas az array első elemen belul az esemeny2 tulajdonsagnak
        evszam2: "1001"//ertekadas az array első elemen belul az evszam2 tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek masodik elemét 
        uralkodo: "IV. Béla",//ertekadas az array masodik elemen belul az uralkodo tulajdonsagnak
        esemeny: "tatárjárás",//ertekadas az array masodik elemen belul az esemeny tulajdonsagnak
        evszam: "1241-1242"//ertekadas az array masodik elemen belul az evszam tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek harmadik elemét 
        uralkodo: "Mátyás király",//ertekadas az array harmadik elemen belul az uralkodo tulajdonsagnak
        esemeny: "Bécs elfoglalása",//ertekadas az array harmadik elemen belul az esemeny tulajdonsagnak
        evszam: "1485",//ertekadas az array harmadik elemen belul az evszam tulajdonsagnak
        esemeny2: "Kenyérmezei csata",//ertekadas az array harmadik elemen belul az esemeny2 tulajdonsagnak
        evszam2: "1479"//ertekadas az array harmadik elemen belul az evszam2 tulajdonsagnak
    },
    {//itt hozom létre az array tömbömnek negyedik elemét 
        uralkodo: "II. Rákóczi Ferenc",//ertekadas az array negyedik elemen belul az uralkodo tulajdonsagnak
        esemeny: "A szabadságharc kezdete",//ertekadas az array negyedik elemen belul az esemeny tulajdonsagnak
        evszam: "1703",//ertekadas az array negyedik elemen belul az evszam tulajdonsagnak
        esemeny2: "A szabadságharc vége",//ertekadas az array negyedik elemen belul az esemeny2 tulajdonsagnak
        evszam2: "1711"//ertekadas az array negyedik elemen belul az evszam2 tulajdonsagnak
    }
]

//Itt hozzuk létre a táblázatot
const table = document.createElement('table');//létrehozok egy table elemet, ami majd a tablazatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz

//A colgroup elemek szabályozzák a táblázatunk oszlopainak stílusát
//A colgroup elemet hozzuk it létre
const colgroup = document.createElement('colgroup');//itt hozom létre a colgroup elemet
table.appendChild(colgroup);//hozzáadjuk a tablehoz

//itt definiálom az első oszlopot 
const col1 = document.createElement('col');//itt hozom letre a col elemet
col1.className = "column";//itt adok neki egy className-t ez alapjan talalja meg a css
colgroup.appendChild(col1);//a colgrouphoz adom hozzá

//itt definiálom a második oszlopot, nem adok neki semmit mert nem kell semmit megjelenítenie
const col2 = document.createElement('col');//itt hozom letre a col elemet
colgroup.appendChild(col2);//a colgrouphoz adom hozzá

//itt definiálom a harmadik oszlopot 
const col3 = document.createElement('col');//itt hozom letre a col elemet
col3.className = "column";//itt adok neki egy className-t 
colgroup.appendChild(col3);//a colgrouphoz adom hozzá

//A táblázat fejlécének létrehozása
const thead = document.createElement('thead');//thead elem letrehozasa itt tortenik ez lesz a fejlec
table.appendChild(thead);//hozzáadom a tablehez

//Itt hozzuk létre a táblázat törzsét
const tbody = document.createElement('tbody');//létrehozok egy tbody elemet
table.appendChild(tbody);//hozzáadjuk a tbody-t a table-hez


const form = document.getElementById('form');//elékrem az index.html-ből a form id alapján a form htmlelementjét

form.addEventListener('submit', function(e) {//amikor submitolunk akkor hívódik meg ez a függvény és egy új sort tudunk hozzáadni a táblázatunkhoz
    e.preventDefault(); //megakadalyozza hogy a bongeszo alapertelmezetten fusson le

    const uralkodoHtmlElement = document.getElementById('uralkodo_nev');//elkerem azt a htmlelementet aminek az uralkodo_nev az id-ja
    const esemenyHtmlElement = document.getElementById('esemeny1');//elkerem azt a htmlelementet aminek az esemeny1 az id-ja
    const evszamHtmlElement = document.getElementById('evszam1');//elkerem azt a htmlelementet aminek az evszam1 az id-ja
    const esemeny2HtmlElement = document.getElementById('esemeny2');//elkerem azt a htmlelementet aminek az esemeny2 az id-ja
    const evszam2HtmlElement = document.getElementById('evszam2');//elkerem azt a htmlelementet aminek az evszam2 az id-ja

    const thisForm = e.currentTarget;//az e.currentTarget tartalmazza a formunkat amit eltarolunk egy valtozoban
    const errorElements = thisForm.querySelectorAll('.error');//az összes olyan elemet elkérjük ami error classal rendelkezik
    for (const errorElement of errorElements){//itt végigiterálunk az imént bekért error classos elemeken ami az errorElements
        errorElement.innerHTML = "";//kitöröljük azt az elemet ami benne van
    }

    let valid = true;//itt megadjuk a valid változónak kezdőérték ként hogy true ezt majd a későbbiekben fogjuk változtatni

    
    if(!validateFormInputFields(uralkodoHtmlElement, "meg kell adnod az uralkodót!")){//Ha a validateFormInputFields függvény hamis értékkel tér vissza a bemeneti uralkodo HTMLelement esetén
        valid = false;//akkor a valid valtozo értékét false ra allitjuk
    };
    
    if(!validateFormInputFields(esemenyHtmlElement, "meg kell adnod az eseményt!")){//Ha a validateFormInputFields függvény hamis értékkel tér vissza a bemeneti esemeny HTMLelement esetén
        valid = false;//a valid valtozo értékét false ra allitjuk
    };

    if(!validateFormInputFields(evszamHtmlElement, "meg kell adnod az évszámot!")){//Ha a validateFormInputFields függvény hamis értékkel tér vissza a bemeneti evszam HTMLelement esetén
        valid = false;//a valid valtozo értékét false ra allitjuk
    };
    if(!osszetettValidacio(esemeny2HtmlElement, evszam2HtmlElement, "Minden eseményhez kell tartoznia évszámnak")){//ellenőrizzük hogy ha az osszetettValidacio fuggvényunk hamissal tér-e vissza, emellett itt adjuk meg a függvényünknek a paramétereit ami kettő html elem és egy string
        valid = false;//a valid változó értékét hamisra állítjuk
    };
    
    
    if (valid){//abban az esetben ha a validációnk lefutott és nem volt kihagyott mező(azaz true maradt a valid változónk) akkor lefut
    const uralkodoValue = uralkodoHtmlElement.value;//az uralkodoHtmlElement értékét beleteszem egy változóba
    const esemenyValue = esemenyHtmlElement.value;//az esemenyHtmlElement értékét beleteszem egy változóba
    const evszamValue = evszamHtmlElement.value;//az evszamHtmlElement értékét beleteszem egy változóba
    const esemeny2Value = esemeny2HtmlElement.value === '' ? undefined : esemeny2HtmlElement.value;//ha az esemeny2HtmlElementben nincsen semmi tehát a htmlelement value tulajdonsága üres string akkor undefined lesz ha viszont ez nem igaz akkor ugyanúgy eltároljuk az értékét
    const evszam2Value = evszam2HtmlElement.value === '' ? undefined : evszam2HtmlElement.value;//ha az evszam2HtmlElement nincsen semmi tehát a htmlelement value tulajdonsága üres string akkor undefined lesz ha viszont ez nem igaz akkor ugyanúgy eltároljuk az értékét

        const newElement = {//itt hozok létre egy új objektumot
            uralkodo: uralkodoValue,//az uralkodo erteke az uralkodoValue lesz
            esemeny: esemenyValue,//az uralkodo erteke az esemenyValue lesz
            evszam: evszamValue,//az uralkodo erteke az evszamValue lesz
            esemeny2: esemeny2Value,//az uralkodo erteke az esemeny2Value lesz
            evszam2: evszam2Value//az uralkodo erteke az evszam2Value lesz
        };
    array.push(newElement);//itt adjuk hozzá az array-hez a new elementet(az új objektumunk)
    // Itt frissitjuk a tablazatunkat
    tbody.innerHTML = ''; // a meglevo tablazat aktualis tartalmat itt töröljük mert nem akarjuk duplikánlni a már meglévő táblázatot
    renderTable(array); // itt hivjuk meg a renderTable függvényünket ami az új adatokkal együtt fog kirenderelődni
    thisForm.reset();//miutan hozzáadtuk az adatokat a táblázatunkhoz az input mezőket(form-ot) visszaállítjuk
    }
});
createHeader();//itt hívjuk meg a createHeader függvényt ami a táblázatunk fejlécét generálja le
renderTable(array);//itt hívom meg a renderTable függvényt és átadom neki az array tömböt bemeneti paraméterként
