// wd create-entity create-office.js "Minister for X"
module.exports = (label) => {
  return {
    type: 'item',
    labels: {
      en: label,
    },
    descriptions: {
      en: 'Scottish cabinet position',
    },
    claims: {
      P31:   { value: 'Q294414' }, // instance of: public office
      P279:  { value: 'Q83307'  }, // subclas of: minister
      P17:   { value: 'Q145'    }, // country: UK
      P1001: { value: 'Q22'     }, // jurisdiction: Scotland
      P361: {
        value: 'Q32859621',         // part of: Cabinet of Scotland
        references: {
          P854: 'https://www.gov.scot/about/who-runs-government/cabinet-and-ministers/',
        },
      }
    }
  }
}
