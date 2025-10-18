import db from "../models/index.js";

const seedCurrency = async () => {
    console.log('Currency seeding is starting...');
    try {
            const currencies = await db.Currency.bulkCreate([
            {
                currencyCode: 'USD',
                currencyName: 'US Dollar'
            }, {
                currencyCode: 'EUR',
                currencyName: 'Euro',
            }, {
                currencyCode: 'TRY',
                currencyName: 'Turkish Lira',
            }, {
                currencyCode: 'GBP',
                currencyName: 'British Pound'
            }, {
                currencyCode: 'CAD',
                currencyName: 'Canadian Dollar'
            }, {
                currencyCode: 'JPY',
                currencyName: 'Japanese Yen'
            }, {
                currencyCode: 'KRW',
                currencyName: 'Korean Won'
            }, {
                currencyCode: 'CNY',
                currencyName: 'Chinese Yuan'
            }
        ], {
            ignoreDuplicate: true,
        });

        console.log(`CURRENCIES TABLE: Added ${currencies.length} record.\n`);
    } catch(error) {    
        console.error('Error occured on seeding CURRENCIES: ', error, '\n');
    }
}

export { seedCurrency };