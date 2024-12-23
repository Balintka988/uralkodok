/**
 * itt generáljuk le a formunkat ahol az adatot kérjük be
 *
 * Az űrlap a következőket tartalmazza:
 * - Öt címkézett szöveges inputmezőt:
 *   1. "Uralkodó neve"
 *   2. "Első esemény"
 *   3. "Első esemény évszáma"
 *   4. "Második esemény"
 *   5. "Második esemény évszáma"
 * minden inputmezőnek van egy hibaüzenet tárolója ami az 'error' osztályt kapja
 * van egy gombunk is az űrlap beküldéséhez
 *
 * minden inputmezőnek van egy 'field' osztályú divbe van ágyazva
 */
function formGenerate(){//formot generáljuk itt
    const form = document.createElement('form');//letrehozunk egy form elemet
    form.id = 'form';//itt adjuk meg neki a classát hogy majd később erre tudjunk hivatkozni
    document.body.appendChild(form);//az űrlapot hozzáadjuk a dokumentumunk törzséhez, bodyhoz

    const div_1 = document.createElement('div');//létrehozunk egy div elemet ami a formunk első sora lesz
    div_1.classList.add('field');//megadom a div_1-nek a field classt

    const label1 = document.createElement('label');//létrehozok egy label elemet
    label1.htmlFor = 'uralkodo_nev';//a labelnek megadjuk a for attribútumot
    label1.innerText = 'Uralkodó neve:';//a label szövegét beállítjuk Uralkodo neve-re
    div_1.appendChild(label1);//hozzáadom a label1-et a div_1hez

    const input1 = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
    input1.type = 'text';//az input típusát textre állítjuk, hogy szöveges adatot tudjunk bevinni
    input1.id = 'uralkodo_nev';//itt adjuk meg az azonosítóját
    input1.name = 'uralkodo_nev';//itt adjuk meg a name attribútumot az inputnak
    div_1.appendChild(input1);//Az input mezőt hozzáadjuk a div_1-hez

    const div1_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
    div1_error.classList = 'error';//error osztályt hozzárendeljük
    div_1.appendChild(div1_error);//a hibaüzenet div-et hozzáadjuk a div_1 hez

    form.appendChild(div_1);//az imént összeállított div_1-et itt adjuk hozzá a formhoz
    
    const div_2 = document.createElement('div');//létrehozunk egy div elemet ami a formunk első sora lesz
    div_2.classList.add('field');//megadom a div_2-nek a field classt

    const label2 = document.createElement('label');//létrehozok egy label elemet
    label2.htmlFor = 'esemeny1';//a labelnek megadjuk a for attribútumot
    label2.innerText = 'Első esemény:';//a label szövegét beállítjuk Első esemeny-re
    div_2.appendChild(label2);//hozzáadom a label2-et a div_1hez

    const input2 = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
    input2.type = 'text';//az input típusát textre állítjuk, hogy szöveges adatot tudjunk bevinni
    input2.id = 'esemeny1';//itt adjuk meg az azonosítóját
    input2.name = 'esemeny1';//itt adjuk meg a name attribútumot az inputnak
    div_2.appendChild(input2);//Az input mezőt hozzáadjuk a div_2-hez

    const div2_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
    div2_error.classList = 'error';//error osztályt hozzárendeljük
    div_2.appendChild(div2_error);//a hibaüzenet div-et hozzáadjuk a div_2 höz

    form.appendChild(div_2);//az imént összeállított div_1-et itt adjuk hozzá a formhoz

    const div_3 = document.createElement('div');//létrehozunk egy div elemet ami a formunk első sora lesz
    div_3.classList.add('field');//megadom a div_3-nek a field classt

    const label3 = document.createElement('label');//létrehozok egy label elemet
    label3.htmlFor = 'evszam1';//a labelnek megadjuk a for attribútumot
    label3.innerText = 'Első esemény évszáma:';//a label szövegét beállítjuk Első esemény évszáma:-ra
    div_3.appendChild(label3);//hozzáadom a label3-at a div_1hez

    const input3 = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
    input3.type = 'text';//az input típusát textre állítjuk, hogy szöveges adatot tudjunk bevinni
    input3.id = 'evszam1';//itt adjuk meg az azonosítóját
    input3.name = 'evszam1';//itt adjuk meg a name attribútumot az inputnak
    div_3.appendChild(input3);//Az input mezőt hozzáadjuk a div_3-hoz

    const div3_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
    div3_error.classList = 'error';//error osztályt hozzárendeljük
    div_3.appendChild(div3_error);//a hibaüzenet div-et hozzáadjuk a div_3 hoz

    form.appendChild(div_3);//az imént összeállított div_1-et itt adjuk hozzá a formhoz

    const div_4 = document.createElement('div');//létrehozunk egy div elemet ami a formunk első sora lesz
    div_4.classList.add('field');//megadom a div_4-nek a field classt

    const label4 = document.createElement('label');//létrehozok egy label elemet
    label4.htmlFor = 'esemeny2';//a labelnek megadjuk a for attribútumot
    label4.innerText = 'Második esemény:';//a label szövegét beállítjuk Második eseméynre
    div_4.appendChild(label4);//hozzáadom a label4-et a div_1hez

    const input4 = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
    input4.type = 'text';//az input típusát textre állítjuk, hogy szöveges adatot tudjunk bevinni
    input4.id = 'esemeny2';//itt adjuk meg az azonosítóját
    input4.name = 'esemeny2';//itt adjuk meg a name attribútumot az inputnak
    div_4.appendChild(input4);//Az input mezőt hozzáadjuk a div_4-hez

    const div4_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
    div4_error.classList = 'error';//error osztályt hozzárendeljük
    div_4.appendChild(div4_error);//a hibaüzenet div-et hozzáadjuk a div_4 hez

    form.appendChild(div_4);//az imént összeállított div_1-et itt adjuk hozzá a formhoz

    const div_5 = document.createElement('div');//létrehozunk egy div elemet ami a formunk első sora lesz
    div_5.classList.add('field');//megadom a div_5-nek a field classt

    const label5 = document.createElement('label');//létrehozok egy label elemet
    label5.htmlFor = 'evszam2';//a labelnek megadjuk a for attribútumot
    label5.innerText = 'Második esemény évszáma';//a label szövegét beállítjuk Második esemény évszámára
    div_5.appendChild(label5);//hozzáadom a label1-öt a div_1hez

    const input5 = document.createElement('input');//itt hozzuk létre az input mezőt, itt viszük majd be a szöveget
    input5.type = 'text';//az input típusát textre állítjuk, hogy szöveges adatot tudjunk bevinni
    input5.id = 'evszam2';//itt adjuk meg az azonosítóját
    input5.name = 'evszam2';//itt adjuk meg a name attribútumot az inputnak
    div_5.appendChild(input5);//Az input mezőt hozzáadjuk a div_5-höz

    const div5_error = document.createElement('div');//létrehozunk még egy divet ahol majd a hibaüzenetet fogjuk megjeleníteni
    div5_error.classList = 'error';//error osztályt hozzárendeljük
    div_5.appendChild(div5_error);//a hibaüzenet div-et hozzáadjuk a div_5 höz

    form.appendChild(div_5);//az imént összeállított div_1-et itt adjuk hozzá a formhoz

    const button = document.createElement('button');//itt hozok létre egy új button elemet
    button.type = 'submit';//a típusát beállítjuk submitra
    button.innerText = 'Hozzáadás';//a gombon kiírva az lesz hogy Hozzáadás

    form.appendChild(button);//hozzáadjuk a gombunkat a formhoz
}

formGenerate();//itt hívom meg a formot generáló függvényt

/**
 * a createHeader függvény hozza létre a tábláazat fejlécét
 * A fejlécet a fejlec tömbből szedi ki és írja ki 
 * ezen a tömbön iterál végig
 * az első vagy utolsó oszlophoz 'column' osztályt rendel hozzá hogy jó legyen a css-ünk
 */
function createHeader(){ //fejlec legeneralasa
    const fejlec = ["Uralkodó", "Esemény", "Évszám"]; //a fejlec nevű tömbbe eltároljuk az adatokat amik stringek

    const headerRow = document.createElement('tr'); //a fejlécnek létrehozok egy sort
    thead.appendChild(headerRow); //thead elemhez hozzáadom az új sorunkat

    for (const item of fejlec) { //a fejlec tömböt for of-al járom be
        const headerCell = document.createElement('th'); //létrehozok egy uj cellat 
        headerCell.innerHTML = item; //a headerCell cellájának adom meg az éppen aktuális elemet

        if (item === fejlec[0] || item === fejlec[fejlec.length - 1]) { //egy elágazással kell megnéznem azt hogy az első vagy az utolso oszlopnál járunk e hogy a css jól mukodjon
            headerCell.className = 'column'; //itt rendeljük hozza a column osztályt
        }

        headerRow.appendChild(headerCell); //végül a cellát hozzáadjuk a fejléc sorához
    }
}

/**
 * A rendertable föggvény egy HTML tablazatot generál az array adatai alapján
 * midnen egyes elemhez új sort hoz létre
 * ha egy elemhez tartozik második esemeny meg evszam akkor egy új sor jön létre ugyan ahhoz az uralkodohoz (rowSpanoljuk)
 * 
 * @param {Array} array A bemeneti tömb ez tartalmazza az adatokat
 */
function renderTable(array){//itt definialom a renderTable függvényemet ami bemeneti paraméterként vár egy tömböt
    for (const currentElement of array){//itt iterálunk végig az array tömb elemein és a currentElement lesz az aktuális elem

        const row1 = document.createElement('tr');//itt hozunk létre egy új sort a táblázatunknak
        tbody.appendChild(row1);//hozzáadjuk a sort (row1-et) a tbodyhoz
    
        const uralkodo = document.createElement('td');//letrehozok egy td elemet
        uralkodo.innerHTML = currentElement.uralkodo;//itt a currentElement uralkodo tulajdonsaganak az erteket iratjuk ki
        row1.appendChild(uralkodo);//hozzáadjuk az első cellát a sorhoz
    
        const esemeny = document.createElement('td');//letrehozok egy td elemet
        esemeny.innerHTML = currentElement.esemeny;//itt a currentElement esemeny tulajdonsaganak az erteket iratjuk ki
        row1.appendChild(esemeny);//hozzáadjuk a cellát az első sorhoz
    
        const evszam = document.createElement('td');//letrehozok egy td elemet
        evszam.innerHTML = currentElement.evszam;//itt a currentElement evszam tulajdonsaganak az erteket iratjuk ki
        row1.appendChild(evszam);//hozzáadjuk a cellát az első sorhoz
    
        if (currentElement.esemeny2 !== undefined && currentElement.evszam2 !== undefined)//ez a feltétel akkor teljesül hogyha az aktuális elem esemeny2 és az evszam2 nem egyenlő undefineddel
        {
            const row2 = document.createElement('tr');//itt hozunk létre egy másik új sort a táblázatunknak
            tbody.appendChild(row2);//hozzáadjuk a sort (row2-t) a tbodyhoz
    
            uralkodo.rowSpan = "2";//itt a rowspant beállítjuk 2-re az uralkodonak mivel ha idáig lefutott akkor szükség lesz a sorok egyesítésére
    
            const esemeny2 = document.createElement('td');//letrehozok egy td elemet
            esemeny2.innerHTML = currentElement.esemeny2;//itt a currentElement esemeny2 tulajdonsaganak az erteket iratjuk ki
            row2.appendChild(esemeny2);//hozzáadjuk a cellát a második sorhoz
    
            const evszam2 = document.createElement('td');//letrehozok egy td elemet
            evszam2.innerHTML = currentElement.evszam2;//itt a currentElement evszam2 tulajdonsaganak az erteket iratjuk ki
            row2.appendChild(evszam2);//hozzáadjuk a cellát a második sorhoz
        }
    }
}


/**
 * ez a fuggvény validálja a masodik esemenyt meg a masodik evszamot
 * csak akkor fut le hogyha az egyik ki van toltve a masik viszont nem
 * 
 * @param {HTMLElement} esemeny2 ez tartalmazz a masodik esemenyt
 * @param {HTMLElement} evszam2 ez tartalmazz a masodik evszamot
 * @param {string} errormessage itt adjuk meg neki a hibaüzenetet
 * @returns {boolean} ezzel térünk vissza akkor igaz ha mindkettő ki volt töltve és akkor hamis hogyha csak az egyik
 */
function osszetettValidacio(esemeny2, evszam2, errormessage){//bemeneti értéknek kettő htmlelementet adunk neki esemeny2 és evszam2 és egy stringet ami az errormessage
    let valid = true;//megadjuk a valid valtozonak kezdeti értéknek hogy true
    if(esemeny2.value === '' && evszam2.value !== ''){//ez az elágazás csak akkor fut le hogyha a esemény2 mező üres és az évszám2 meg nem
        const szuloelem = esemeny2.parentElement;//megkeressük az éppen aktuális htmlelementnek a parentElement propertyét és ezt eltároljuk egy változóba
        const errorLocation = szuloelem.querySelector('.error');//az éppen aktuális htmlelementnek a beviteli mezőjének szuloelemeben keresünk egy olyan elemet amely rendelkezik az "error" osztállyal
        if (errorLocation != undefined){//hogyha van ilyen mező(van ilyen htmlelement) (nem undefined) akkor
            errorLocation.innerHTML = errormessage;//a hibaüzenetünket itt jelenitjuk meg amit a függvényhíváskor adunk meg neki (stringet adunk át)
        }
        valid = false;//a valid változó értékét hamisra állítjuk
    }
    if(evszam2.value === '' && esemeny2.value !== ''){//ez az elágazás csak akkor fut le hogyha a évszám2 mező üres és az esemeny2 meg nem
        const szuloelem = evszam2.parentElement;//megkeressük az éppen aktuális htmlelementnek a parentElement propertyét és ezt eltároljuk egy változóba
        const errorLocation = szuloelem.querySelector('.error');//az éppen aktuális htmlelementnek a beviteli mezőjének szuloelemeben keresünk egy olyan elemet amely rendelkezik az "error" osztállyal
        if (errorLocation != undefined){//hogyha van ilyen mező(van ilyen htmlelement) (nem undefined) akkor
            errorLocation.innerHTML = errormessage;//a hibaüzenetünket jelenitjuk meg amit a függvényhíváskor adunk meg neki (stringet adunk át)
        }
        valid = false;//a valid változó értékét hamisra állítjuk
    }
    return valid;//visszatérünk a valid változonk ertekevel
}

/**
 * ha uresek a mezők akkor fut le és hibaüzenetet jelenít meg
 * akkor hibaüzenetet jelenít meg. A valid változó értéke a sikeres validálásról ad információt.
 * 
 * @param {HTMLElement} inputElement erről a html elementről kell eldönteni hogy üres e
 * @param {string} errormessage ez a hibaüzenetünk amit akkor írunk ki hogyha üres a mező
 * @returns {boolean} ezzel térünk vissza akkor igaz ha mindkettő ki volt töltve és akkor hamis hogyha csak az egyik
 */
function validateFormInputFields(inputElement, errormessage){//itt adjuk meg a validateFormInputFields függvényünknek hogy milyen bemeneti elemet(htmlelement) és hibaüzenetet (string)varunk
        let valid = true;//megadjuk a valid valtozonak kezdeti értéknek hogy true
        if(inputElement.value === ""){//hogyha a bemeneti elem (inputElement) értéke üres akkor
            const szuloelem = inputElement.parentElement;//megkeressük az éppen aktuális htmlelementnek a parentElement propertyét és ezt eltároljuk egy változóba
            const errorLocation = szuloelem.querySelector('.error');//az éppen aktuális htmlelementnek a beviteli mezőjének szuloelemeben keresünk egy olyan elemet amely rendelkezik az "error" osztállyal
            if (errorLocation != undefined){//hogyha van ilyen mező(van ilyen htmlelement) (nem undefined) akkor
                errorLocation.innerHTML = errormessage;//megadjuk neki itt a hibaüzenetünket a bemeneti paraméterünkből
            }
            valid = false;//a valid változó értékét hamisra állítjuk
        }
        return valid;//visszatérünk a valid valtozoval ami hamis ha lefutott a validacio és true hogyha volt bele írva 
}