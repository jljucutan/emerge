/**
 * national id format configuration
 * 01.07.2020 | jjucutan | initial configuration creation
 * 01.24.2020 | jjucutan | removed SRIAD, VIAPID, PCEIN from US as requested by client 
 * 02.26.2020 | jjucutan | changed id descriptions for HKG
 * 05.14.2020 | jjucutan | updated ssn formatting for us of a
 * 06.17.2020 | jjucutan | added regex validation
 */
const NATIONAL_ID_MAP = new Map();
NATIONAL_ID_MAP.set("CHN", {
    ID_NO: {
        shortDesc: 'ID',
        desc: 'National ID',
        regex: '^[0-9]{17}[a-zA-Z]{1}$',
        messageFormat: '99999999999999999X',
        format: '00000000000000000S'
    }
});
NATIONAL_ID_MAP.set("DEU", {
   VSNR: {
        shortDesc: 'SIN',
        desc: 'Social Insurance Number',
        regex: '^[0-9]{8}[a-zA-Z]{1}[0-9]{3}$',
        messageFormat: '99999999A999',
        format: '00000000S000'
   } 
});
NATIONAL_ID_MAP.set("FRA", {
    PR: {
        shortDesc: 'SSN',
        desc: 'Social Security Number',
        regex: '^[0-9]{1}\\.[0-9]{2}\\.[0-9]{2}\\.[0-9]{1}[a-zA-Z]{1}\\.[0-9]{3}\\.[0-9]{3}$',
        messageFormat: '9.99.99.9X.999.999',
        format: '0.00.00.0S.000.000'
    } 
});
NATIONAL_ID_MAP.set("GBR", {
    PR_9: {
        shortDesc: 'NINO',
        desc: 'Nat Ins Num (9 Chars)',
        regex: '^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$',
        messageFormat: 'AA999999A',
        format: 'SS000000S'
    },
    UTR: {
        shortDesc: 'UTR',
        desc: 'Unique Taxpayer Reference',
        regex: '^[0-9]{10}$',
        messageFormat: '9999999999',
        format: '0000000000'
    } 
});
NATIONAL_ID_MAP.set("HKG", {
    ID_NO1: {
        shortDesc: 'ID No',
        desc: 'ID Number',
        regex: '^[a-zA-Z]{2}[0-9]{7}\\([a-zA-Z0-9]{1}\\)$',
        messageFormat: 'XX9999999(X)',
        format: 'SS0000000(A)'
    },
    ID_NO2: {
        shortDesc: 'ID No2',
        desc: 'ID Number',
        regex: '^[a-zA-Z]{1}[0-9]{6}\\([a-zA-Z0-9]{1}\\)$',
        messageFormat: 'X999999(X)',
        format: 'S000000(A)'
    } 
});
NATIONAL_ID_MAP.set("USA", {
    PR: {
        shortDesc: 'SSN',
        desc: 'Social Security Number',
        regex: '^[0-9]{3}-[0-9]{2}-[0-9]{4}$',
        messageFormat: 'XXX-XX-XXXX',
        format: '000-00-0000'
    },
    ITIN: {
        shortDesc: 'TaxpayerID',
        desc: 'Individual Taxpayer ID Number',
        regex: '^[0-9]{3}-[0-9]{2}-[0-9]{4}$',
        messageFormat: '999-99-9999',
        format: '000-00-0000'
    }
});
