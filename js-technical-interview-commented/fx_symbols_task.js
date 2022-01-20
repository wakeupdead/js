const symbolFactory = (symbol, score) => ({
    symbol,
    ric: symbol,
    bloombergKey: symbol,
    score,
});

const SYMBOLS = ['AA', 'BB', 'CC', 'IBM', 'GOGLE', 'AMZN', 'BND'];

const FAVORITE_SYMBOLS = ['VTI', 'AMZN', 'BND'];

const fetchMock = (symbols = []) => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.2) {
            const response = symbols.map(symbol => symbolFactory(symbol, Number(Math.random().toFixed(2))));
            resolve(response);
        } else {
            reject(new Error('404'));
        }
    });
};

const getSymbols = fetchMock(SYMBOLS);
const getFavoriteSymbols = fetchMock(FAVORITE_SYMBOLS);

/*
Бэкенд предоставляет два URL для данных, первый - /symbols, второй /favoriteSymbols. 
Первый возвращает все доступные символы, второй – отмеченные пользователем как «избранные». 
Формат ответа в обоих случая одинаков и представляет собой массив объектов 
ISymbol:
Interface ISymbol {
symbol: string,
ric: string,
bloombergKey: string,
score: number
}

Отдельные символы в обоих ответах могут совпадать. 
Напишите код, который совмещает оба ответа сервера по следующим правилам и выдает общий массив:
• символы из списка «избранных» показываются первыми;
• если есть дубликаты, то в результате остается только символ присутствующий в списке «избранных»
• символы должны быть отсортированы по score внутри сегмента «избранного» и остального;
• если сервер вернул ошибку – продолжаем работу с пустым набором;
• запросы к серверу выполняются параллельно.
*/

/*---------------------------------Ваше решение--------------------------------------------------------*/

function compareByScore(a, b) {
    if (a.score < b.score) return -1;
    if (a.score > b.score) return 1;
    return 0;
}

function noDupes([selected, all]) {
    const selectedSet = new Set(selected.map(elem => elem.symbol));
    const allSet = new Set(all.map(elem => elem.symbol));
    return [
        ...selected.filter(item => !allSet.has(item.symbol)).sort(compareByScore),
        ...all.filter(item => !selectedSet.has(item.symbol)).sort(compareByScore),
    ];
}

function mergeLists(selected, all) {
    const selRes = selected.catch(() => []);
    const allRes = all.catch(() => []);
    return Promise.all([selRes, allRes]).then(noDupes);
}

mergeLists(getFavoriteSymbols, getSymbols).then(console.table);

/* getSymbols.then(result => console.table(result)).catch(error => console.log('/getSymbols error: ', error.message));
getFavoriteSymbols
    .then(result => console.table(result))
    .catch(error => console.log('/getFavoriteSymbols error: ', error.message)); */
