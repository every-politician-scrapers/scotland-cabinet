module.exports = (id, position, personname, positionname, startdate) => {
  reference = {
    P854: 'https://www.gov.scot/about/who-runs-government/cabinet-and-ministers/',
    P1476: {
      text: 'Cabinet and Ministers',
      language: 'en',
    },
    P813: new Date().toISOString().split('T')[0],
    P407: 'Q1860', // language: English
  }

  qualifier = {
    P580: '2021-05-18',
    P5054: 'Q106906168', // Mikhail Mishustin's Cabinet
  }

  if(startdate)      qualifier['P580']  = startdate
  if(personname)     reference['P1810'] = personname
  if(positionname)   reference['P1932'] = positionname

  return {
    id,
    claims: {
      P39: {
        value: position,
        qualifiers: qualifier,
        references: reference,
      }
    }
  }
}
