$.getJSON('http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=0&LeagueID=00&Season=2017-18', (json) => {
  // console.log(json.resultSets[0].rowSet);
  const igraci = json.resultSets[0].rowSet;
  let igrac,
    ime,
    prezime,
    nadimak;
  for (let i = 0; i < igraci.length; i++) {
    igrac = igraci[i];
    if (igrac[3] === 1 && igrac[4] === '2017' && igrac[5] === '2017') {
      [prezime, ime] = igrac[1].split(', ');
      // prezime = igrac[1].split(', ')[0];
      nadimak = (`${prezime.substr(0, 5) + ime.split('.').join('').substr(0, 2)}01`).toLowerCase();
      document.write(`{
                    "playerId": ${igrac[0]},
                    "playerName": "${igrac[2]}",
                    "playerFN": "${ime}",
                    "playerLN": "${prezime}",
                    "playerNN": "${nadimak}"
                },<br>`);
    }
  }
});
