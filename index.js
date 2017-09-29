function theBeatlesPlay(musicians, instruments) {
  var facts = new Array();

  for (var i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return facts;
}
