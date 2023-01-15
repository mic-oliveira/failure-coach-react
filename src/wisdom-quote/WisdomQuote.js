
export class WisdomQuote {
    loadQuotes(lang = 'pt-br') {
        const file = require(`../i18n/${lang}.json`);
        return file.quotes[Math.floor(Math.random() * file.quotes.length)];
    }

}
