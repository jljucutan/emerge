/**
 * CHANGE LOGS
 * SERVICES-35262 | jjucutan | created configuration for dynamic date format
 */
var dateConfig = {
    countries: {
        "USA": "AMER",
        "CAN": "NAMER",
        "ARG": "NAMER",
        "AUS": "EMEA",
        "AUT": "EMEA",
        "BEL": "EMEA",
        "BRA": "AMER",
        "CHN": "APAC",
        "HRV": "EMEA",
        "CZE": "EMEA",
        "DNK": "EMEA",
        "EST": "EMEA",
        "FRA": "EMEA",
        "DEU": "EMEA",
        "HKG": "APAC",
        "IND": "APAC",
        "IDN": "APAC",
        "IRL": "EMEA",
        "ISR": "EMEA",
        "ITA": "EMEA",
        "JPN": "APAC",
        "LUX": "EMEA",
        "MYS": "APAC",
        "MEX": "AMER",
        "NLD": "EMEA",
        "NOR": "EMEA",
        "PHL": "APAC",
        "POL": "EMEA",
        "RUS": "EMEA",
        "ZAF": "EMEA",
        "KOR": "APAC",
        "ESP": "EMEA",
        "SWE": "EMEA",
        "CHE": "EMEA",
        "TWN": "APAC",
        "THA": "APAC",
        "TUR": "EMEA",
        "UKR": "EMEA",
        "GBR": "EMEA"
    },
    /**
     * Legend
     * AMER - American region
     * NAMER - North American region
     * APAC - Asia Pacific region
     * EMEA - Euorope Middle East, and Africa
     * LATAM - Latin America
     */
    regions: {
        "AMER": "mm/dd/yy",
        "NAMER": "yy/mm/dd",
        "LATAM": "mm/dd/yy",
        "APAC": "dd.mm.yy",
        "EMEA": "dd/mm/yy"
    }
};
