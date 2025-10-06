/*
    CURRENCY TABLE
        CURRENCYID      -- UNIQUE PK
        CURRENCYCODE    -- UNIQUE
        CURRENCYNAME    -- STRING
*/

export const currency = [
    {
        currencyId: 'currency_01',
        currencyCode: 'USD',
        currencyName: 'US Dollar',
        currencySymbol: '$'
    }, {
        currencyId: 'currency_02',
        currencyCode: 'EUR',
        currencyName: 'Euro',
        currencySymbol: '€'
    }, {
        currencyId: 'currency_03',
        currencyCode: 'TRY',
        currencyName: 'Turkish Lira',
        currencySymbol: '₺'
    }, {
        currencyId: 'currency_04',
        currencyCode: 'GBP',
        currencyName: 'GB Pound',
        currencySymbol: '£'
    }
]