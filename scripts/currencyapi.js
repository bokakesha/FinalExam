function createTable() {
    let table = document.createElement('table');
    table.className = 'table';

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let currency = document.createElement('th');
    currency.setAttribute('scope', 'row');
    currency.textContent = 'Currency';
    tr.appendChild(currency);

    let rate = document.createElement('th');
    rate.setAttribute('scope', 'row');
    rate.textContent = 'Rate';
    tr.appendChild(rate);

    let date = document.createElement('th');
    date.setAttribute('scope','row');
    date.textContent = 'Date';
    tr.appendChild(date);


    let currencySection = document.querySelector('.currency-section');
    currencySection.appendChild(table);
}


async function fetchData() {
    let response = await fetch(
        'https://api.exchangeratesapi.io/latest'
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        let json = await response.json();
        let rates = await json.rates;
        let date = await json.date;
        createTable();

        let table = document.querySelector('.table');

        for (let [key, value] of Object.entries(rates)) {
                let tr = document.createElement('tr');

                let th = document.createElement('th');
                th.setAttribute('scope', 'row');
                th.textContent = key;
                tr.appendChild(th);

                let tdForRate = document.createElement('td');
                tdForRate.textContent = value;
                tr.appendChild(tdForRate);

                let tdForDate = document.createElement('td');
                tdForDate.textContent = date;
                tr.appendChild(tdForDate);

                table.tBodies[0].appendChild(tr);
            }

        }

}

fetchData();
