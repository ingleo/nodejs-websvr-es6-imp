import hbs from 'hbs';

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizeStr', (text) => {
    let words = text.split(' ');
    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});