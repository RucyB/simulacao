import { Team, PlayerStats } from '../lib/matchSimulator';

// 48 Seleções classificadas para Copa do Mundo 2026
export const realWorldTeams: Team[] = [
  // Grupo A - EUA, México, Canadá, Panamá
  {
    id: 'usa', name: 'Estados Unidos', attack: 78, defense: 75, midfield: 76, overall: 76,
    players: [
      { id: 'usa1', name: 'Turner', position: 'GOL', overall: 80 },
      { id: 'usa2', name: 'Dest', position: 'DEF', overall: 79 },
      { id: 'usa3', name: 'Richards', position: 'DEF', overall: 76 },
      { id: 'usa4', name: 'McKenzie', position: 'DEF', overall: 74 },
      { id: 'usa5', name: 'Robinson', position: 'DEF', overall: 77 },
      { id: 'usa6', name: 'Adams', position: 'MEI', overall: 81 },
      { id: 'usa7', name: 'Musah', position: 'MEI', overall: 78 },
      { id: 'usa8', name: 'McKennie', position: 'MEI', overall: 79 },
      { id: 'usa9', name: 'Pulisic', position: 'ATA', overall: 83 },
      { id: 'usa10', name: 'Weah', position: 'ATA', overall: 77 },
      { id: 'usa11', name: 'Balogun', position: 'ATA', overall: 76 },
    ]
  },
  {
    id: 'mex', name: 'México', attack: 76, defense: 74, midfield: 75, overall: 75,
    players: [
      { id: 'mex1', name: 'Ochoa', position: 'GOL', overall: 78 },
      { id: 'mex2', name: 'Montes', position: 'DEF', overall: 76 },
      { id: 'mex3', name: 'Araujo', position: 'DEF', overall: 79 },
      { id: 'mex4', name: 'Vasquez', position: 'DEF', overall: 74 },
      { id: 'mex5', name: 'Gallardo', position: 'DEF', overall: 75 },
      { id: 'mex6', name: 'Herrera', position: 'MEI', overall: 77 },
      { id: 'mex7', name: 'Lozano', position: 'MEI', overall: 80 },
      { id: 'mex8', name: 'Pineda', position: 'MEI', overall: 76 },
      { id: 'mex9', name: 'Jimenez', position: 'ATA', overall: 82 },
      { id: 'mex10', name: 'Martin', position: 'ATA', overall: 78 },
      { id: 'mex11', name: 'Alvarez', position: 'ATA', overall: 75 },
    ]
  },
  {
    id: 'can', name: 'Canadá', attack: 72, defense: 71, midfield: 72, overall: 72,
    players: [
      { id: 'can1', name: 'Borjan', position: 'GOL', overall: 74 },
      { id: 'can2', name: 'Johnston', position: 'DEF', overall: 73 },
      { id: 'can3', name: 'Vitória', position: 'DEF', overall: 72 },
      { id: 'can4', name: 'Miller', position: 'DEF', overall: 71 },
      { id: 'can5', name: 'Davies', position: 'DEF', overall: 80 },
      { id: 'can6', name: 'Eustáquio', position: 'MEI', overall: 75 },
      { id: 'can7', name: 'Hutchinson', position: 'MEI', overall: 73 },
      { id: 'can8', name: 'Buchanan', position: 'MEI', overall: 74 },
      { id: 'can9', name: 'David', position: 'ATA', overall: 78 },
      { id: 'can10', name: 'Larin', position: 'ATA', overall: 76 },
      { id: 'can11', name: 'Koné', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'pan', name: 'Panamá', attack: 68, defense: 70, midfield: 69, overall: 69,
    players: [
      { id: 'pan1', name: 'Mejia', position: 'GOL', overall: 71 },
      { id: 'pan2', name: 'Blackburn', position: 'DEF', overall: 70 },
      { id: 'pan3', name: 'Escobar', position: 'DEF', overall: 69 },
      { id: 'pan4', name: 'Cummings', position: 'DEF', overall: 68 },
      { id: 'pan5', name: 'Murillo', position: 'DEF', overall: 70 },
      { id: 'pan6', name: 'Bárcenas', position: 'MEI', overall: 72 },
      { id: 'pan7', name: 'Gómez', position: 'MEI', overall: 70 },
      { id: 'pan8', name: 'Ayarza', position: 'MEI', overall: 68 },
      { id: 'pan9', name: 'Díaz', position: 'ATA', overall: 73 },
      { id: 'pan10', name: 'Martínez', position: 'ATA', overall: 69 },
      { id: 'pan11', name: 'Suárez', position: 'ATA', overall: 67 },
    ]
  },
  // Grupo B - Argentina, Uruguai, Chile, Peru
  {
    id: 'arg', name: 'Argentina', attack: 88, defense: 80, midfield: 85, overall: 85,
    players: [
      { id: 'arg1', name: 'Martinez', position: 'GOL', overall: 87 },
      { id: 'arg2', name: 'Molina', position: 'DEF', overall: 83 },
      { id: 'arg3', name: 'Romero', position: 'DEF', overall: 84 },
      { id: 'arg4', name: 'Otamendi', position: 'DEF', overall: 82 },
      { id: 'arg5', name: 'Acuña', position: 'DEF', overall: 81 },
      { id: 'arg6', name: 'De Paul', position: 'MEI', overall: 85 },
      { id: 'arg7', name: 'Paredes', position: 'MEI', overall: 82 },
      { id: 'arg8', name: 'Mac Allister', position: 'MEI', overall: 83 },
      { id: 'arg9', name: 'Messi', position: 'ATA', overall: 93 },
      { id: 'arg10', name: 'Álvarez', position: 'ATA', overall: 84 },
      { id: 'arg11', name: 'Di María', position: 'ATA', overall: 85 },
    ]
  },
  {
    id: 'uru', name: 'Uruguai', attack: 80, defense: 82, midfield: 79, overall: 80,
    players: [
      { id: 'uru1', name: 'Muslera', position: 'GOL', overall: 82 },
      { id: 'uru2', name: 'Giménez', position: 'DEF', overall: 84 },
      { id: 'uru3', name: 'Araujo', position: 'DEF', overall: 83 },
      { id: 'uru4', name: 'Godín', position: 'DEF', overall: 80 },
      { id: 'uru5', name: 'Olivera', position: 'DEF', overall: 78 },
      { id: 'uru6', name: 'Valverde', position: 'MEI', overall: 87 },
      { id: 'uru7', name: 'Bentancur', position: 'MEI', overall: 82 },
      { id: 'uru8', name: 'De La Cruz', position: 'MEI', overall: 80 },
      { id: 'uru9', name: 'Núñez', position: 'ATA', overall: 83 },
      { id: 'uru10', name: 'Suárez', position: 'ATA', overall: 82 },
      { id: 'uru11', name: 'Cavani', position: 'ATA', overall: 80 },
    ]
  },
  {
    id: 'chi', name: 'Chile', attack: 76, defense: 75, midfield: 75, overall: 75,
    players: [
      { id: 'chi1', name: 'Bravo', position: 'GOL', overall: 78 },
      { id: 'chi2', name: 'Mena', position: 'DEF', overall: 75 },
      { id: 'chi3', name: 'Maripán', position: 'DEF', overall: 77 },
      { id: 'chi4', name: 'Albornoz', position: 'DEF', overall: 74 },
      { id: 'chi5', name: 'Isla', position: 'DEF', overall: 76 },
      { id: 'chi6', name: 'Aránguiz', position: 'MEI', overall: 78 },
      { id: 'chi7', name: 'Vidal', position: 'MEI', overall: 80 },
      { id: 'chi8', name: 'Fernández', position: 'MEI', overall: 76 },
      { id: 'chi9', name: 'Sánchez', position: 'ATA', overall: 82 },
      { id: 'chi10', name: 'Vargas', position: 'ATA', overall: 77 },
      { id: 'chi11', name: 'Castillo', position: 'ATA', overall: 74 },
    ]
  },
  {
    id: 'per', name: 'Peru', attack: 73, defense: 73, midfield: 73, overall: 73,
    players: [
      { id: 'per1', name: 'Gallese', position: 'GOL', overall: 75 },
      { id: 'per2', name: 'Corzo', position: 'DEF', overall: 73 },
      { id: 'per3', name: 'Lapadula', position: 'DEF', overall: 72 },
      { id: 'per4', name: 'Trauco', position: 'DEF', overall: 74 },
      { id: 'per5', name: 'Advíncula', position: 'DEF', overall: 75 },
      { id: 'per6', name: 'Tapia', position: 'MEI', overall: 76 },
      { id: 'per7', name: 'Yotún', position: 'MEI', overall: 74 },
      { id: 'per8', name: 'Cueva', position: 'MEI', overall: 75 },
      { id: 'per9', name: 'Guerrero', position: 'ATA', overall: 78 },
      { id: 'per10', name: 'Farfán', position: 'ATA', overall: 74 },
      { id: 'per11', name: 'Carrillo', position: 'ATA', overall: 73 },
    ]
  },
  // Grupo C - Espanha, Portugal, Dinamarca, Irlanda
  {
    id: 'esp', name: 'Espanha', attack: 84, defense: 82, midfield: 86, overall: 84,
    players: [
      { id: 'esp1', name: 'Simón', position: 'GOL', overall: 85 },
      { id: 'esp2', name: 'Carvajal', position: 'DEF', overall: 84 },
      { id: 'esp3', name: 'Laporte', position: 'DEF', overall: 83 },
      { id: 'esp4', name: 'Le Normand', position: 'DEF', overall: 82 },
      { id: 'esp5', name: 'Cucurella', position: 'DEF', overall: 81 },
      { id: 'esp6', name: 'Rodri', position: 'MEI', overall: 89 },
      { id: 'esp7', name: 'Pedri', position: 'MEI', overall: 86 },
      { id: 'esp8', name: 'Olmo', position: 'MEI', overall: 83 },
      { id: 'esp9', name: 'Yamal', position: 'ATA', overall: 85 },
      { id: 'esp10', name: 'Morata', position: 'ATA', overall: 82 },
      { id: 'esp11', name: 'Williams', position: 'ATA', overall: 84 },
    ]
  },
  {
    id: 'por', name: 'Portugal', attack: 86, defense: 80, midfield: 83, overall: 83,
    players: [
      { id: 'por1', name: 'Costa', position: 'GOL', overall: 84 },
      { id: 'por2', name: 'Cancelo', position: 'DEF', overall: 85 },
      { id: 'por3', name: 'Dias', position: 'DEF', overall: 86 },
      { id: 'por4', name: 'Gonçalo Inácio', position: 'DEF', overall: 81 },
      { id: 'por5', name: 'Nuno Mendes', position: 'DEF', overall: 83 },
      { id: 'por6', name: 'Neves', position: 'MEI', overall: 84 },
      { id: 'por7', name: 'Bernardo Silva', position: 'MEI', overall: 87 },
      { id: 'por8', name: 'B. Silva', position: 'MEI', overall: 85 },
      { id: 'por9', name: 'Ronaldo', position: 'ATA', overall: 88 },
      { id: 'por10', name: 'Leão', position: 'ATA', overall: 86 },
      { id: 'por11', name: 'Ramos', position: 'ATA', overall: 82 },
    ]
  },
  {
    id: 'den', name: 'Dinamarca', attack: 76, defense: 78, midfield: 77, overall: 77,
    players: [
      { id: 'den1', name: 'Schmeichel', position: 'GOL', overall: 78 },
      { id: 'den2', name: 'Christensen', position: 'DEF', overall: 80 },
      { id: 'den3', name: 'Kjaer', position: 'DEF', overall: 78 },
      { id: 'den4', name: 'Maehle', position: 'DEF', overall: 76 },
      { id: 'den5', name: 'Vestergaard', position: 'DEF', overall: 77 },
      { id: 'den6', name: 'Eriksen', position: 'MEI', overall: 84 },
      { id: 'den7', name: 'Hojbjerg', position: 'MEI', overall: 81 },
      { id: 'den8', name: 'Damsgaard', position: 'MEI', overall: 78 },
      { id: 'den9', name: 'Dolberg', position: 'ATA', overall: 79 },
      { id: 'den10', name: 'Wind', position: 'ATA', overall: 77 },
      { id: 'den11', name: 'Poulsen', position: 'ATA', overall: 76 },
    ]
  },
  {
    id: 'irl', name: 'Irlanda', attack: 70, defense: 72, midfield: 71, overall: 71,
    players: [
      { id: 'irl1', name: 'Bazunu', position: 'GOL', overall: 73 },
      { id: 'irl2', name: 'Doherty', position: 'DEF', overall: 74 },
      { id: 'irl3', name: 'Keane', position: 'DEF', overall: 72 },
      { id: 'irl4', name: 'O\'Shea', position: 'DEF', overall: 71 },
      { id: 'irl5', name: 'Robinson', position: 'DEF', overall: 73 },
      { id: 'irl6', name: 'Henderson', position: 'MEI', overall: 75 },
      { id: 'irl7', name: 'Browne', position: 'MEI', overall: 72 },
      { id: 'irl8', name: 'Sammie Szmodics', position: 'MEI', overall: 71 },
      { id: 'irl9', name: 'Parrott', position: 'ATA', overall: 74 },
      { id: 'irl10', name: 'Obafemi', position: 'ATA', overall: 72 },
      { id: 'irl11', name: 'Troy Parrott', position: 'ATA', overall: 73 },
    ]
  },
  // Grupo D - França, Holanda, Áustria, Hungria
  {
    id: 'fra', name: 'França', attack: 90, defense: 83, midfield: 86, overall: 87,
    players: [
      { id: 'fra1', name: 'Maignan', position: 'GOL', overall: 86 },
      { id: 'fra2', name: 'Pavard', position: 'DEF', overall: 83 },
      { id: 'fra3', name: 'Upamecano', position: 'DEF', overall: 84 },
      { id: 'fra4', name: 'Saliba', position: 'DEF', overall: 85 },
      { id: 'fra5', name: 'Hernandez', position: 'DEF', overall: 85 },
      { id: 'fra6', name: 'Tchouaméni', position: 'MEI', overall: 85 },
      { id: 'fra7', name: 'Rabiot', position: 'MEI', overall: 83 },
      { id: 'fra8', name: 'Coman', position: 'MEI', overall: 84 },
      { id: 'fra9', name: 'Mbappé', position: 'ATA', overall: 92 },
      { id: 'fra10', name: 'Griezmann', position: 'ATA', overall: 87 },
      { id: 'fra11', name: 'Giroud', position: 'ATA', overall: 82 },
    ]
  },
  {
    id: 'ned', name: 'Holanda', attack: 82, defense: 84, midfield: 83, overall: 83,
    players: [
      { id: 'ned1', name: 'Verbruggen', position: 'GOL', overall: 82 },
      { id: 'ned2', name: 'Dumfries', position: 'DEF', overall: 83 },
      { id: 'ned3', name: 'Van Dijk', position: 'DEF', overall: 88 },
      { id: 'ned4', name: 'Aké', position: 'DEF', overall: 83 },
      { id: 'ned5', name: 'De Vrij', position: 'DEF', overall: 84 },
      { id: 'ned6', name: 'De Jong', position: 'MEI', overall: 86 },
      { id: 'ned7', name: 'Stengs', position: 'MEI', overall: 80 },
      { id: 'ned8', name: 'Simons', position: 'MEI', overall: 82 },
      { id: 'ned9', name: 'Gakpo', position: 'ATA', overall: 83 },
      { id: 'ned10', name: 'Wijnaldum', position: 'ATA', overall: 81 },
      { id: 'ned11', name: 'Depay', position: 'ATA', overall: 84 },
    ]
  },
  {
    id: 'aut', name: 'Áustria', attack: 76, defense: 75, midfield: 76, overall: 76,
    players: [
      { id: 'aut1', name: 'Bailey', position: 'GOL', overall: 77 },
      { id: 'aut2', name: 'Lainer', position: 'DEF', overall: 76 },
      { id: 'aut3', name: 'Pavlidis', position: 'DEF', overall: 75 },
      { id: 'aut4', name: 'Wöber', position: 'DEF', overall: 76 },
      { id: 'aut5', name: 'Trimmel', position: 'DEF', overall: 74 },
      { id: 'aut6', name: 'Sabitzer', position: 'MEI', overall: 80 },
      { id: 'aut7', name: 'Grillitsch', position: 'MEI', overall: 76 },
      { id: 'aut8', name: 'Laimer', position: 'MEI', overall: 78 },
      { id: 'aut9', name: 'Arnautovic', position: 'ATA', overall: 79 },
      { id: 'aut10', name: 'Gregoritsch', position: 'ATA', overall: 76 },
      { id: 'aut11', name: 'Baumgartner', position: 'ATA', overall: 75 },
    ]
  },
  {
    id: 'hun', name: 'Hungria', attack: 72, defense: 73, midfield: 72, overall: 72,
    players: [
      { id: 'hun1', name: 'Gulácsi', position: 'GOL', overall: 74 },
      { id: 'hun2', name: 'Lang', position: 'DEF', overall: 73 },
      { id: 'hun3', name: 'Orban', position: 'DEF', overall: 75 },
      { id: 'hun4', name: 'Szalai', position: 'DEF', overall: 72 },
      { id: 'hun5', name: 'Fiola', position: 'DEF', overall: 73 },
      { id: 'hun6', name: 'Szoboszlai', position: 'MEI', overall: 80 },
      { id: 'hun7', name: 'Kleinheisler', position: 'MEI', overall: 73 },
      { id: 'hun8', name: 'Nagy', position: 'MEI', overall: 72 },
      { id: 'hun9', name: 'Sallai', position: 'ATA', overall: 76 },
      { id: 'hun10', name: 'Szalai', position: 'ATA', overall: 74 },
      { id: 'hun11', name: 'Varga', position: 'ATA', overall: 73 },
    ]
  },
  // Grupo E - Inglaterra, Bélgica, Eslovênia, Eslováquia
  {
    id: 'eng', name: 'Inglaterra', attack: 87, defense: 81, midfield: 84, overall: 85,
    players: [
      { id: 'eng1', name: 'Pickford', position: 'GOL', overall: 84 },
      { id: 'eng2', name: 'Walker', position: 'DEF', overall: 84 },
      { id: 'eng3', name: 'Stones', position: 'DEF', overall: 85 },
      { id: 'eng4', name: 'Maguire', position: 'DEF', overall: 83 },
      { id: 'eng5', name: 'Shaw', position: 'DEF', overall: 82 },
      { id: 'eng6', name: 'Rice', position: 'MEI', overall: 86 },
      { id: 'eng7', name: 'Henderson', position: 'MEI', overall: 82 },
      { id: 'eng8', name: 'Bellingham', position: 'MEI', overall: 87 },
      { id: 'eng9', name: 'Kane', position: 'ATA', overall: 90 },
      { id: 'eng10', name: 'Saka', position: 'ATA', overall: 86 },
      { id: 'eng11', name: 'Sterling', position: 'ATA', overall: 84 },
    ]
  },
  {
    id: 'bel', name: 'Bélgica', attack: 82, defense: 78, midfield: 80, overall: 80,
    players: [
      { id: 'bel1', name: 'Courtois', position: 'GOL', overall: 87 },
      { id: 'bel2', name: 'Meunier', position: 'DEF', overall: 80 },
      { id: 'bel3', name: 'Vertonghen', position: 'DEF', overall: 79 },
      { id: 'bel4', name: 'Boyata', position: 'DEF', overall: 78 },
      { id: 'bel5', name: 'Castaño', position: 'DEF', overall: 77 },
      { id: 'bel6', name: 'Witsel', position: 'MEI', overall: 80 },
      { id: 'bel7', name: 'Tielemans', position: 'MEI', overall: 82 },
      { id: 'bel8', name: 'Carrasco', position: 'MEI', overall: 79 },
      { id: 'bel9', name: 'De Bruyne', position: 'ATA', overall: 90 },
      { id: 'bel10', name: 'Lukaku', position: 'ATA', overall: 84 },
      { id: 'bel11', name: 'Hazard', position: 'ATA', overall: 82 },
    ]
  },
  {
    id: 'svn', name: 'Eslovênia', attack: 72, defense: 74, midfield: 73, overall: 73,
    players: [
      { id: 'svn1', name: 'Oblak', position: 'GOL', overall: 86 },
      { id: 'svn2', name: 'Balkovec', position: 'DEF', overall: 73 },
      { id: 'svn3', name: 'Brahimi', position: 'DEF', overall: 72 },
      { id: 'svn4', name: 'Zalokar', position: 'DEF', overall: 71 },
      { id: 'svn5', name: 'Stojanovic', position: 'DEF', overall: 72 },
      { id: 'svn6', name: 'Klemen Lorbek', position: 'MEI', overall: 74 },
      { id: 'svn7', name: 'Elšnik', position: 'MEI', overall: 73 },
      { id: 'svn8', name: 'Verbič', position: 'MEI', overall: 74 },
      { id: 'svn9', name: 'Šporar', position: 'ATA', overall: 75 },
      { id: 'svn10', name: 'Vipotnik', position: 'ATA', overall: 73 },
      { id: 'svn11', name: 'Celar', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'svk', name: 'Eslováquia', attack: 71, defense: 73, midfield: 72, overall: 72,
    players: [
      { id: 'svk1', name: 'Dúbravka', position: 'GOL', overall: 74 },
      { id: 'svk2', name: 'Hancko', position: 'DEF', overall: 75 },
      { id: 'svk3', name: 'Vavro', position: 'DEF', overall: 73 },
      { id: 'svk4', name: 'Satka', position: 'DEF', overall: 72 },
      { id: 'svk5', name: 'Kucka', position: 'DEF', overall: 74 },
      { id: 'svk6', name: 'Kucka', position: 'MEI', overall: 76 },
      { id: 'svk7', name: 'Lobotka', position: 'MEI', overall: 78 },
      { id: 'svk8', name: 'Duda', position: 'MEI', overall: 74 },
      { id: 'svk9', name: 'Schranz', position: 'ATA', overall: 75 },
      { id: 'svk10', name: 'Boženík', position: 'ATA', overall: 73 },
      { id: 'svk11', name: 'Strelec', position: 'ATA', overall: 72 },
    ]
  },
  // Grupo F - Brasil, Suíça, Croácia, Argélia
  {
    id: 'bra', name: 'Brasil', attack: 85, defense: 82, midfield: 84, overall: 84,
    players: [
      { id: 'bra1', name: 'Alisson', position: 'GOL', overall: 88 },
      { id: 'bra2', name: 'Danilo', position: 'DEF', overall: 83 },
      { id: 'bra3', name: 'Marquinhos', position: 'DEF', overall: 87 },
      { id: 'bra4', name: 'Silva', position: 'DEF', overall: 85 },
      { id: 'bra5', name: 'Alex Sandro', position: 'DEF', overall: 82 },
      { id: 'bra6', name: 'Casemiro', position: 'MEI', overall: 88 },
      { id: 'bra7', name: 'Paquetá', position: 'MEI', overall: 84 },
      { id: 'bra8', name: 'Neymar', position: 'ATA', overall: 90 },
      { id: 'bra9', name: 'Vinicius Jr', position: 'ATA', overall: 89 },
      { id: 'bra10', name: 'Richarlison', position: 'ATA', overall: 83 },
      { id: 'bra11', name: 'Raphinha', position: 'ATA', overall: 84 },
    ]
  },
  {
    id: 'sui', name: 'Suíça', attack: 76, defense: 78, midfield: 77, overall: 77,
    players: [
      { id: 'sui1', name: 'Sommer', position: 'GOL', overall: 82 },
      { id: 'sui2', name: 'Widmer', position: 'DEF', overall: 77 },
      { id: 'sui3', name: 'Akanji', position: 'DEF', overall: 82 },
      { id: 'sui4', name: 'Elvedi', position: 'DEF', overall: 79 },
      { id: 'sui5', name: 'Rodríguez', position: 'DEF', overall: 78 },
      { id: 'sui6', name: 'Xhaka', position: 'MEI', overall: 83 },
      { id: 'sui7', name: 'Freuler', position: 'MEI', overall: 79 },
      { id: 'sui8', name: 'Vargas', position: 'MEI', overall: 78 },
      { id: 'sui9', name: 'Embolo', position: 'ATA', overall: 80 },
      { id: 'sui10', name: 'Shaqiri', position: 'ATA', overall: 79 },
      { id: 'sui11', name: 'Okafor', position: 'ATA', overall: 77 },
    ]
  },
  {
    id: 'cro', name: 'Croácia', attack: 78, defense: 79, midfield: 80, overall: 79,
    players: [
      { id: 'cro1', name: 'Livakovic', position: 'GOL', overall: 83 },
      { id: 'cro2', name: 'Juranovic', position: 'DEF', overall: 78 },
      { id: 'cro3', name: 'Lovren', position: 'DEF', overall: 79 },
      { id: 'cro4', name: 'Vida', position: 'DEF', overall: 78 },
      { id: 'cro5', name: 'Gvardiol', position: 'DEF', overall: 84 },
      { id: 'cro6', name: 'Modric', position: 'MEI', overall: 87 },
      { id: 'cro7', name: 'Kovacic', position: 'MEI', overall: 84 },
      { id: 'cro8', name: 'Brozovic', position: 'MEI', overall: 82 },
      { id: 'cro9', name: 'Perisic', position: 'ATA', overall: 82 },
      { id: 'cro10', name: 'Kramaric', position: 'ATA', overall: 81 },
      { id: 'cro11', name: 'Petkovic', position: 'ATA', overall: 78 },
    ]
  },
  {
    id: 'alg', name: 'Argélia', attack: 74, defense: 73, midfield: 73, overall: 73,
    players: [
      { id: 'alg1', name: 'Mbolhi', position: 'GOL', overall: 76 },
      { id: 'alg2', name: 'Atal', position: 'DEF', overall: 75 },
      { id: 'alg3', name: 'Belaïli', position: 'DEF', overall: 74 },
      { id: 'alg4', name: 'Bensebaini', position: 'DEF', overall: 76 },
      { id: 'alg5', name: 'Mandi', position: 'DEF', overall: 74 },
      { id: 'alg6', name: 'Feghouli', position: 'MEI', overall: 77 },
      { id: 'alg7', name: 'Bennacer', position: 'MEI', overall: 78 },
      { id: 'alg8', name: 'Zerrouki', position: 'MEI', overall: 74 },
      { id: 'alg9', name: 'Mahrez', position: 'ATA', overall: 84 },
      { id: 'alg10', name: 'Brahimi', position: 'ATA', overall: 78 },
      { id: 'alg11', name: 'Slimani', position: 'ATA', overall: 76 },
    ]
  },
  // Grupo G - Alemanha, Itália, Dinamarca (já colocada), Tunísia
  {
    id: 'ger', name: 'Alemanha', attack: 84, defense: 81, midfield: 85, overall: 83,
    players: [
      { id: 'ger1', name: 'Neuer', position: 'GOL', overall: 85 },
      { id: 'ger2', name: 'Kimmich', position: 'DEF', overall: 87 },
      { id: 'ger3', name: 'Rüdiger', position: 'DEF', overall: 85 },
      { id: 'ger4', name: 'Tah', position: 'DEF', overall: 82 },
      { id: 'ger5', name: 'Raum', position: 'DEF', overall: 80 },
      { id: 'ger6', name: 'Gündogan', position: 'MEI', overall: 85 },
      { id: 'ger7', name: 'Kroos', position: 'MEI', overall: 86 },
      { id: 'ger8', name: 'Musiala', position: 'MEI', overall: 86 },
      { id: 'ger9', name: 'Müller', position: 'ATA', overall: 84 },
      { id: 'ger10', name: 'Havertz', position: 'ATA', overall: 83 },
      { id: 'ger11', name: 'Füllkrug', position: 'ATA', overall: 81 },
    ]
  },
  {
    id: 'ita', name: 'Itália', attack: 78, defense: 83, midfield: 80, overall: 80,
    players: [
      { id: 'ita1', name: 'Donnarumma', position: 'GOL', overall: 86 },
      { id: 'ita2', name: 'Di Lorenzo', position: 'DEF', overall: 82 },
      { id: 'ita3', name: 'Bonucci', position: 'DEF', overall: 83 },
      { id: 'ita4', name: 'Bastoni', position: 'DEF', overall: 83 },
      { id: 'ita5', name: 'Spinazzola', position: 'DEF', overall: 80 },
      { id: 'ita6', name: 'Jorginho', position: 'MEI', overall: 84 },
      { id: 'ita7', name: 'Barella', position: 'MEI', overall: 84 },
      { id: 'ita8', name: 'Locatelli', position: 'MEI', overall: 81 },
      { id: 'ita9', name: 'Insigne', position: 'ATA', overall: 83 },
      { id: 'ita10', name: 'Immobile', position: 'ATA', overall: 82 },
      { id: 'ita11', name: 'Chiesa', position: 'ATA', overall: 83 },
    ]
  },
  {
    id: 'tun', name: 'Tunísia', attack: 70, defense: 74, midfield: 72, overall: 72,
    players: [
      { id: 'tun1', name: 'Mathlouthi', position: 'GOL', overall: 73 },
      { id: 'tun2', name: 'Maaloul', position: 'DEF', overall: 74 },
      { id: 'tun3', name: 'Bronn', position: 'DEF', overall: 73 },
      { id: 'tun4', name: 'Meriah', position: 'DEF', overall: 72 },
      { id: 'tun5', name: 'Abdi', position: 'DEF', overall: 73 },
      { id: 'tun6', name: 'Sassi', position: 'MEI', overall: 75 },
      { id: 'tun7', name: 'Skhiri', position: 'MEI', overall: 76 },
      { id: 'tun8', name: 'Chaaleli', position: 'MEI', overall: 73 },
      { id: 'tun9', name: 'Msakni', position: 'ATA', overall: 77 },
      { id: 'tun10', name: 'Jaziri', position: 'ATA', overall: 74 },
      { id: 'tun11', name: 'Sliti', position: 'ATA', overall: 73 },
    ]
  },
  // Adicionando mais seleções para completar 48...
  // Grupo H - Colômbia, Senegal, Qatar, Equador
  {
    id: 'col', name: 'Colômbia', attack: 80, defense: 77, midfield: 79, overall: 79,
    players: [
      { id: 'col1', name: 'Ospina', position: 'GOL', overall: 82 },
      { id: 'col2', name: 'Mojica', position: 'DEF', overall: 78 },
      { id: 'col3', name: 'Cuesta', position: 'DEF', overall: 79 },
      { id: 'col4', name: 'Lucumí', position: 'DEF', overall: 77 },
      { id: 'col5', name: 'Sánchez', position: 'DEF', overall: 78 },
      { id: 'col6', name: 'Cuadrado', position: 'MEI', overall: 82 },
      { id: 'col7', name: 'Arias', position: 'MEI', overall: 79 },
      { id: 'col8', name: 'Díaz', position: 'MEI', overall: 81 },
      { id: 'col9', name: 'James', position: 'ATA', overall: 83 },
      { id: 'col10', name: 'Falcao', position: 'ATA', overall: 80 },
      { id: 'col11', name: 'Duván Zapata', position: 'ATA', overall: 79 },
    ]
  },
  {
    id: 'sen', name: 'Senegal', attack: 76, defense: 77, midfield: 76, overall: 76,
    players: [
      { id: 'sen1', name: 'Mendy', position: 'GOL', overall: 82 },
      { id: 'sen2', name: 'Sabaly', position: 'DEF', overall: 77 },
      { id: 'sen3', name: 'Koulibaly', position: 'DEF', overall: 84 },
      { id: 'sen4', name: 'Diallo', position: 'DEF', overall: 76 },
      { id: 'sen5', name: 'Sarr', position: 'DEF', overall: 77 },
      { id: 'sen6', name: 'Gueye', position: 'MEI', overall: 80 },
      { id: 'sen7', name: 'Cissé', position: 'MEI', overall: 77 },
      { id: 'sen8', name: 'P. Gueye', position: 'MEI', overall: 78 },
      { id: 'sen9', name: 'Mané', position: 'ATA', overall: 87 },
      { id: 'sen10', name: 'Diatta', position: 'ATA', overall: 78 },
      { id: 'sen11', name: 'Sarr', position: 'ATA', overall: 76 },
    ]
  },
  {
    id: 'qat', name: 'Qatar', attack: 70, defense: 72, midfield: 71, overall: 71,
    players: [
      { id: 'qat1', name: 'Barsham', position: 'GOL', overall: 72 },
      { id: 'qat2', name: 'Ró-Ró', position: 'DEF', overall: 73 },
      { id: 'qat3', name: 'Hassan', position: 'DEF', overall: 72 },
      { id: 'qat4', name: 'Miguel', position: 'DEF', overall: 71 },
      { id: 'qat5', name: 'Al-Haydos', position: 'DEF', overall: 73 },
      { id: 'qat6', name: 'Boudiaf', position: 'MEI', overall: 74 },
      { id: 'qat7', name: 'Al-Ahrak', position: 'MEI', overall: 72 },
      { id: 'qat8', name: 'Al-Haydos', position: 'MEI', overall: 73 },
      { id: 'qat9', name: 'Afif', position: 'ATA', overall: 76 },
      { id: 'qat10', name: 'Ali', position: 'ATA', overall: 75 },
      { id: 'qat11', name: 'Muntari', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'ecu', name: 'Equador', attack: 73, defense: 74, midfield: 73, overall: 73,
    players: [
      { id: 'ecu1', name: 'Galíndez', position: 'GOL', overall: 75 },
      { id: 'ecu2', name: 'Preciado', position: 'DEF', overall: 74 },
      { id: 'ecu3', name: 'Torres', position: 'DEF', overall: 75 },
      { id: 'ecu4', name: 'Hincapié', position: 'DEF', overall: 76 },
      { id: 'ecu5', name: 'Pacho', position: 'DEF', overall: 74 },
      { id: 'ecu6', name: 'Caicedo', position: 'MEI', overall: 78 },
      { id: 'ecu7', name: 'Méndez', position: 'MEI', overall: 75 },
      { id: 'ecu8', name: 'Sarmiento', position: 'MEI', overall: 76 },
      { id: 'ecu9', name: 'Valencia', position: 'ATA', overall: 80 },
      { id: 'ecu10', name: 'Estupiñán', position: 'ATA', overall: 75 },
      { id: 'ecu11', name: 'Cifuentes', position: 'ATA', overall: 73 },
    ]
  },
  // Grupo I - Japão, Coreia do Sul, Austrália, Arábia Saudita
  {
    id: 'jpn', name: 'Japão', attack: 78, defense: 76, midfield: 77, overall: 77,
    players: [
      { id: 'jpn1', name: 'Gonda', position: 'GOL', overall: 76 },
      { id: 'jpn2', name: 'Tomiyasu', position: 'DEF', overall: 80 },
      { id: 'jpn3', name: 'Yoshida', position: 'DEF', overall: 78 },
      { id: 'jpn4', name: 'Ito', position: 'DEF', overall: 77 },
      { id: 'jpn5', name: 'Nagatomo', position: 'DEF', overall: 75 },
      { id: 'jpn6', name: 'Endo', position: 'MEI', overall: 79 },
      { id: 'jpn7', name: 'Morita', position: 'MEI', overall: 77 },
      { id: 'jpn8', name: 'Kamada', position: 'MEI', overall: 78 },
      { id: 'jpn9', name: 'Minamino', position: 'ATA', overall: 80 },
      { id: 'jpn10', name: 'Furuhashi', position: 'ATA', overall: 78 },
      { id: 'jpn11', name: 'Dôan', position: 'ATA', overall: 79 },
    ]
  },
  {
    id: 'kor', name: 'Coreia do Sul', attack: 76, defense: 75, midfield: 75, overall: 75,
    players: [
      { id: 'kor1', name: 'Kim Seung-gyu', position: 'GOL', overall: 77 },
      { id: 'kor2', name: 'Kim Jin-su', position: 'DEF', overall: 76 },
      { id: 'kor3', name: 'Kim Min-jae', position: 'DEF', overall: 83 },
      { id: 'kor4', name: 'Kim Young-gwon', position: 'DEF', overall: 77 },
      { id: 'kor5', name: 'Lee Yong', position: 'DEF', overall: 75 },
      { id: 'kor6', name: 'Hwang Hee-chan', position: 'MEI', overall: 80 },
      { id: 'kor7', name: 'Lee Jae-sung', position: 'MEI', overall: 77 },
      { id: 'kor8', name: 'Son Jun-ho', position: 'MEI', overall: 76 },
      { id: 'kor9', name: 'Son Heung-min', position: 'ATA', overall: 88 },
      { id: 'kor10', name: 'Hwang Ui-jo', position: 'ATA', overall: 77 },
      { id: 'kor11', name: 'Cho Gue-sung', position: 'ATA', overall: 76 },
    ]
  },
  {
    id: 'aus', name: 'Austrália', attack: 73, defense: 74, midfield: 73, overall: 73,
    players: [
      { id: 'aus1', name: 'Ryan', position: 'GOL', overall: 75 },
      { id: 'aus2', name: 'Atkinson', position: 'DEF', overall: 74 },
      { id: 'aus3', name: 'Souttar', position: 'DEF', overall: 75 },
      { id: 'aus4', name: 'Rowles', position: 'DEF', overall: 73 },
      { id: 'aus5', name: 'Behich', position: 'DEF', overall: 74 },
      { id: 'aus6', name: 'Mooy', position: 'MEI', overall: 78 },
      { id: 'aus7', name: 'Irvine', position: 'MEI', overall: 75 },
      { id: 'aus8', name: 'Baccus', position: 'MEI', overall: 73 },
      { id: 'aus9', name: 'Leckie', position: 'ATA', overall: 76 },
      { id: 'aus10', name: 'Maclaren', position: 'ATA', overall: 75 },
      { id: 'aus11', name: 'Tilio', position: 'ATA', overall: 74 },
    ]
  },
  {
    id: 'ksa', name: 'Arábia Saudita', attack: 72, defense: 73, midfield: 72, overall: 72,
    players: [
      { id: 'ksa1', name: 'Al-Owais', position: 'GOL', overall: 74 },
      { id: 'ksa2', name: 'Al-Bulaihi', position: 'DEF', overall: 75 },
      { id: 'ksa3', name: 'Al-Tambakti', position: 'DEF', overall: 73 },
      { id: 'ksa4', name: 'Al-Ghanam', position: 'DEF', overall: 72 },
      { id: 'ksa5', name: 'Al-Shahrani', position: 'DEF', overall: 74 },
      { id: 'ksa6', name: 'Al-Faraj', position: 'MEI', overall: 76 },
      { id: 'ksa7', name: 'Al-Dawsari', position: 'MEI', overall: 77 },
      { id: 'ksa8', name: 'Kanoo', position: 'MEI', overall: 73 },
      { id: 'ksa9', name: 'Al-Shehri', position: 'ATA', overall: 75 },
      { id: 'ksa10', name: 'Al-Raheb', position: 'ATA', overall: 74 },
      { id: 'ksa11', name: 'Al-Ghamdi', position: 'ATA', overall: 72 },
    ]
  },
  // Grupo J - Costa Rica, Honduras, Jamaica, Haiti
  {
    id: 'crc', name: 'Costa Rica', attack: 70, defense: 73, midfield: 71, overall: 71,
    players: [
      { id: 'crc1', name: 'Navas', position: 'GOL', overall: 82 },
      { id: 'crc2', name: 'Chacón', position: 'DEF', overall: 72 },
      { id: 'crc3', name: 'Calvo', position: 'DEF', overall: 73 },
      { id: 'crc4', name: 'Waston', position: 'DEF', overall: 74 },
      { id: 'crc5', name: 'Fuller', position: 'DEF', overall: 72 },
      { id: 'crc6', name: 'Borges', position: 'MEI', overall: 75 },
      { id: 'crc7', name: 'Brenes', position: 'MEI', overall: 73 },
      { id: 'crc8', name: 'Ruiz', position: 'MEI', overall: 76 },
      { id: 'crc9', name: 'Campbell', position: 'ATA', overall: 77 },
      { id: 'crc10', name: 'Venegas', position: 'ATA', overall: 73 },
      { id: 'crc11', name: 'Ureña', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'hon', name: 'Honduras', attack: 68, defense: 70, midfield: 69, overall: 69,
    players: [
      { id: 'hon1', name: 'López', position: 'GOL', overall: 71 },
      { id: 'hon2', name: 'García', position: 'DEF', overall: 70 },
      { id: 'hon3', name: 'Pereira', position: 'DEF', overall: 69 },
      { id: 'hon4', name: 'Figueroa', position: 'DEF', overall: 70 },
      { id: 'hon5', name: 'Crisanto', position: 'DEF', overall: 68 },
      { id: 'hon6', name: 'Acosta', position: 'MEI', overall: 72 },
      { id: 'hon7', name: 'López', position: 'MEI', overall: 70 },
      { id: 'hon8', name: 'Martínez', position: 'MEI', overall: 69 },
      { id: 'hon9', name: 'Bengtson', position: 'ATA', overall: 73 },
      { id: 'hon10', name: 'Lacayo', position: 'ATA', overall: 70 },
      { id: 'hon11', name: 'Elis', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'jam', name: 'Jamaica', attack: 71, defense: 72, midfield: 71, overall: 71,
    players: [
      { id: 'jam1', name: 'Blake', position: 'GOL', overall: 76 },
      { id: 'jam2', name: 'Dawkins', position: 'DEF', overall: 72 },
      { id: 'jam3', name: 'Miazga', position: 'DEF', overall: 74 },
      { id: 'jam4', name: 'Powell', position: 'DEF', overall: 71 },
      { id: 'jam5', name: 'Latibeaudiere', position: 'DEF', overall: 72 },
      { id: 'jam6', name: 'Leather', position: 'MEI', overall: 73 },
      { id: 'jam7', name: 'Gray', position: 'MEI', overall: 74 },
      { id: 'jam8', name: 'Bailey', position: 'MEI', overall: 78 },
      { id: 'jam9', name: 'Antonio', position: 'ATA', overall: 80 },
      { id: 'jam10', name: 'Foster', position: 'ATA', overall: 73 },
      { id: 'jam11', name: 'Morris', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'hai', name: 'Haiti', attack: 66, defense: 68, midfield: 67, overall: 67,
    players: [
      { id: 'hai1', name: 'Johny Placide', position: 'GOL', overall: 69 },
      { id: 'hai2', name: 'Jérôme', position: 'DEF', overall: 68 },
      { id: 'hai3', name: 'Alexandre', position: 'DEF', overall: 67 },
      { id: 'hai4', name: 'Etienne', position: 'DEF', overall: 68 },
      { id: 'hai5', name: 'Désiré', position: 'DEF', overall: 67 },
      { id: 'hai6', name: 'Borgella', position: 'MEI', overall: 69 },
      { id: 'hai7', name: 'Saint-Fleur', position: 'MEI', overall: 68 },
      { id: 'hai8', name: 'Charles', position: 'MEI', overall: 67 },
      { id: 'hai9', name: 'Nazon', position: 'ATA', overall: 72 },
      { id: 'hai10', name: 'Pierrot', position: 'ATA', overall: 70 },
      { id: 'hai11', name: 'Lafrance', position: 'ATA', overall: 68 },
    ]
  },
  // Grupo K - Nigéria, Camarões, Gana, Mali
  {
    id: 'nga', name: 'Nigéria', attack: 78, defense: 76, midfield: 77, overall: 77,
    players: [
      { id: 'nga1', name: 'Nwabali', position: 'GOL', overall: 76 },
      { id: 'nga2', name: 'Aina', position: 'DEF', overall: 79 },
      { id: 'nga3', name: 'Balogun', position: 'DEF', overall: 77 },
      { id: 'nga4', name: 'Omeruo', position: 'DEF', overall: 76 },
      { id: 'nga5', name: 'Sanusi', position: 'DEF', overall: 75 },
      { id: 'nga6', name: 'Ndidi', position: 'MEI', overall: 82 },
      { id: 'nga7', name: 'Iwobi', position: 'MEI', overall: 78 },
      { id: 'nga8', name: 'Aribo', position: 'MEI', overall: 77 },
      { id: 'nga9', name: 'Osimhen', position: 'ATA', overall: 85 },
      { id: 'nga10', name: 'Iheanacho', position: 'ATA', overall: 78 },
      { id: 'nga11', name: 'Chukwueze', position: 'ATA', overall: 80 },
    ]
  },
  {
    id: 'cmr', name: 'Camarões', attack: 75, defense: 76, midfield: 75, overall: 75,
    players: [
      { id: 'cmr1', name: 'Onana', position: 'GOL', overall: 82 },
      { id: 'cmr2', name: 'Fai', position: 'DEF', overall: 76 },
      { id: 'cmr3', name: 'Castelletto', position: 'DEF', overall: 77 },
      { id: 'cmr4', name: 'Ngamaleu', position: 'DEF', overall: 75 },
      { id: 'cmr5', name: 'Tolo', position: 'DEF', overall: 76 },
      { id: 'cmr6', name: 'Zambo Anguissa', position: 'MEI', overall: 80 },
      { id: 'cmr7', name: 'Onguéné', position: 'MEI', overall: 76 },
      { id: 'cmr8', name: 'Kunde', position: 'MEI', overall: 77 },
      { id: 'cmr9', name: 'Aboubakar', position: 'ATA', overall: 80 },
      { id: 'cmr10', name: 'Bassogog', position: 'ATA', overall: 76 },
      { id: 'cmr11', name: 'Nkoudou', position: 'ATA', overall: 75 },
    ]
  },
  {
    id: 'gha', name: 'Gana', attack: 74, defense: 74, midfield: 74, overall: 74,
    players: [
      { id: 'gha1', name: 'Ati-Zigi', position: 'GOL', overall: 76 },
      { id: 'gha2', name: 'Lamptey', position: 'DEF', overall: 75 },
      { id: 'gha3', name: 'Amartey', position: 'DEF', overall: 76 },
      { id: 'gha4', name: 'Baba', position: 'DEF', overall: 74 },
      { id: 'gha5', name: 'Dunkwa', position: 'DEF', overall: 73 },
      { id: 'gha6', name: 'Partey', position: 'MEI', overall: 83 },
      { id: 'gha7', name: 'Kudus', position: 'MEI', overall: 80 },
      { id: 'gha8', name: 'Sulemana', position: 'MEI', overall: 77 },
      { id: 'gha9', name: 'Jordan Ayew', position: 'ATA', overall: 79 },
      { id: 'gha10', name: 'André Ayew', position: 'ATA', overall: 78 },
      { id: 'gha11', name: 'Inaki Williams', position: 'ATA', overall: 79 },
    ]
  },
  {
    id: 'mli', name: 'Mali', attack: 72, defense: 73, midfield: 72, overall: 72,
    players: [
      { id: 'mli1', name: 'M. Keita', position: 'GOL', overall: 74 },
      { id: 'mli2', name: 'H. Traoré', position: 'DEF', overall: 73 },
      { id: 'mli3', name: 'Soumaoro', position: 'DEF', overall: 74 },
      { id: 'mli4', name: 'M. Traoré', position: 'DEF', overall: 72 },
      { id: 'mli5', name: 'Diarra', position: 'DEF', overall: 73 },
      { id: 'mli6', name: 'Kamara', position: 'MEI', overall: 76 },
      { id: 'mli7', name: 'N. Traoré', position: 'MEI', overall: 74 },
      { id: 'mli8', name: 'Dieng', position: 'MEI', overall: 75 },
      { id: 'mli9', name: 'K. Haidara', position: 'ATA', overall: 77 },
      { id: 'mli10', name: 'Sissoko', position: 'ATA', overall: 74 },
      { id: 'mli11', name: 'Djenepo', position: 'ATA', overall: 73 },
    ]
  },
  // Grupo L - Marrocos, Egito, África do Sul, Guiné
  {
    id: 'mar', name: 'Marrocos', attack: 76, defense: 80, midfield: 78, overall: 78,
    players: [
      { id: 'mar1', name: 'Bounou', position: 'GOL', overall: 84 },
      { id: 'mar2', name: 'Hakimi', position: 'DEF', overall: 85 },
      { id: 'mar3', name: 'Aguerd', position: 'DEF', overall: 82 },
      { id: 'mar4', name: 'Saïss', position: 'DEF', overall: 79 },
      { id: 'mar5', name: 'Mazraoui', position: 'DEF', overall: 80 },
      { id: 'mar6', name: 'Amrabat', position: 'MEI', overall: 82 },
      { id: 'mar7', name: 'Ounahi', position: 'MEI', overall: 78 },
      { id: 'mar8', name: 'Ziyech', position: 'MEI', overall: 84 },
      { id: 'mar9', name: 'En-Nesyri', position: 'ATA', overall: 81 },
      { id: 'mar10', name: 'Boufal', position: 'ATA', overall: 79 },
      { id: 'mar11', name: 'Tagnaouti', position: 'ATA', overall: 76 },
    ]
  },
  {
    id: 'egy', name: 'Egito', attack: 74, defense: 76, midfield: 75, overall: 75,
    players: [
      { id: 'egy1', name: 'El-Shennawy', position: 'GOL', overall: 76 },
      { id: 'egy2', name: 'Hegazy', position: 'DEF', overall: 76 },
      { id: 'egy3', name: 'Hafez', position: 'DEF', overall: 75 },
      { id: 'egy4', name: 'Abdel-Shafy', position: 'DEF', overall: 74 },
      { id: 'egy5', name: 'Ashraf', position: 'DEF', overall: 75 },
      { id: 'egy6', name: 'Elneny', position: 'MEI', overall: 78 },
      { id: 'egy7', name: 'Zizo', position: 'MEI', overall: 76 },
      { id: 'egy8', name: 'Abdelmonem', position: 'MEI', overall: 75 },
      { id: 'egy9', name: 'Mohamed Salah', position: 'ATA', overall: 88 },
      { id: 'egy10', name: 'Trezeguet', position: 'ATA', overall: 76 },
      { id: 'egy11', name: 'Mostafa Mohamed', position: 'ATA', overall: 75 },
    ]
  },
  {
    id: 'rsa', name: 'África do Sul', attack: 70, defense: 72, midfield: 71, overall: 71,
    players: [
      { id: 'rsa1', name: 'Williams', position: 'GOL', overall: 73 },
      { id: 'rsa2', name: 'Kekana', position: 'DEF', overall: 72 },
      { id: 'rsa3', name: 'Mokoena', position: 'DEF', overall: 74 },
      { id: 'rsa4', name: 'Mothwa', position: 'DEF', overall: 71 },
      { id: 'rsa5', name: 'Sibisi', position: 'DEF', overall: 72 },
      { id: 'rsa6', name: 'Kutumela', position: 'MEI', overall: 74 },
      { id: 'rsa7', name: 'Maseko', position: 'MEI', overall: 73 },
      { id: 'rsa8', name: 'Zungu', position: 'MEI', overall: 72 },
      { id: 'rsa9', name: 'Zwane', position: 'ATA', overall: 75 },
      { id: 'rsa10', name: 'Mabasa', position: 'ATA', overall: 73 },
      { id: 'rsa11', name: 'Lepasa', position: 'ATA', overall: 72 },
    ]
  },
  {
    id: 'gui', name: 'Guiné', attack: 70, defense: 71, midfield: 70, overall: 70,
    players: [
      { id: 'gui1', name: 'K. Camara', position: 'GOL', overall: 72 },
      { id: 'gui2', name: 'S. Camara', position: 'DEF', overall: 71 },
      { id: 'gui3', name: 'M. Camara', position: 'DEF', overall: 70 },
      { id: 'gui4', name: 'D. Camara', position: 'DEF', overall: 71 },
      { id: 'gui5', name: 'Sylla', position: 'DEF', overall: 70 },
      { id: 'gui6', name: 'A. Camara', position: 'MEI', overall: 73 },
      { id: 'gui7', name: 'Kaba', position: 'MEI', overall: 72 },
      { id: 'gui8', name: 'Keita', position: 'MEI', overall: 71 },
      { id: 'gui9', name: 'Kamano', position: 'ATA', overall: 75 },
      { id: 'gui10', name: 'Kouyaté', position: 'ATA', overall: 73 },
      { id: 'gui11', name: 'Bayo', position: 'ATA', overall: 72 },
    ]
  },
];

// Partidas reais da fase de grupos (exemplo)
export const realWorldMatches = [
  {
    id: 'm1',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Estados Unidos',
    awayTeam: 'México',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-11T18:00:00')
  },
  {
    id: 'm2',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Argentina',
    awayTeam: 'Uruguai',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-12T15:00:00')
  },
  {
    id: 'm3',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Espanha',
    awayTeam: 'Portugal',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-12T18:00:00')
  },
  {
    id: 'm4',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'França',
    awayTeam: 'Holanda',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-13T15:00:00')
  },
  {
    id: 'm5',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Inglaterra',
    awayTeam: 'Bélgica',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-13T18:00:00')
  },
  {
    id: 'm6',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Brasil',
    awayTeam: 'Suíça',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-14T15:00:00')
  },
  {
    id: 'm7',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Alemanha',
    awayTeam: 'Itália',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-14T18:00:00')
  },
  {
    id: 'm8',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Japão',
    awayTeam: 'Coreia do Sul',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-15T12:00:00')
  },
];

// Grupos da Copa do Mundo 2026
export const realWorldGroups = [
  {
    name: 'A',
    teams: [
      { name: 'Estados Unidos', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'México', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Canadá', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Panamá', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'B',
    teams: [
      { name: 'Argentina', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Uruguai', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Chile', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Peru', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'C',
    teams: [
      { name: 'Espanha', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Portugal', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Dinamarca', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Irlanda', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'D',
    teams: [
      { name: 'França', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Holanda', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Áustria', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Hungria', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'E',
    teams: [
      { name: 'Inglaterra', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Bélgica', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Eslovênia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Eslováquia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'F',
    teams: [
      { name: 'Brasil', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Suíça', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Croácia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Argélia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'G',
    teams: [
      { name: 'Alemanha', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Itália', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Dinamarca', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Tunísia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'H',
    teams: [
      { name: 'Colômbia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Senegal', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Qatar', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Equador', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'I',
    teams: [
      { name: 'Japão', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Coreia do Sul', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Austrália', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Arábia Saudita', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'J',
    teams: [
      { name: 'Costa Rica', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Honduras', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Jamaica', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Haiti', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'K',
    teams: [
      { name: 'Nigéria', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Camarões', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Gana', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Mali', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'L',
    teams: [
      { name: 'Marrocos', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Egito', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'África do Sul', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Guiné', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
];

// Estatísticas iniciais dos jogadores
export const realWorldPlayerStats: PlayerStats[] = [
  { id: 'arg9', name: 'Messi', selection: 'Argentina', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'bra8', name: 'Neymar', selection: 'Brasil', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'fra9', name: 'Mbappé', selection: 'França', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'eng9', name: 'Kane', selection: 'Inglaterra', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'por9', name: 'Ronaldo', selection: 'Portugal', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'jpn9', name: 'Minamino', selection: 'Japão', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'kor9', name: 'Son Heung-min', selection: 'Coreia do Sul', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
  { id: 'mar9', name: 'En-Nesyri', selection: 'Marrocos', position: 'ATA', goals: 0, assists: 0, avgRating: 0, mvpCount: 0 },
];