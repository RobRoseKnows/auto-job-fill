const linkedInPattern = "^(([H|h][T|t][T|t][P|p][S|s]?:\/\/)?" + 
                        "(?:[W|w]{3}\.)?([L|l][I|i][N|n][K|k][E|e][D|d][I|i][N|n].[C|c][O|o][M|m]\/([I|i][N|n]\/)?))?" + 
                        "(?<usern>[A-Za-z0-9]{5,30})$";
const githubPattern =   "^(([H|h][T|t][T|t][P|p][S|s]?:\/\/)?" + 
                        "(?:[W|w]{3}\.)?([G|g][I|i][T|t][H|h][U|u][B|b]\.[C|c][O|o][M|m])\/)?" + 
                        "(?<usern>[A-Za-z\d](?:[A-Za-z\d]|-(?=[A-Za-z\d])){0,38})$";