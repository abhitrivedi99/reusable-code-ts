import fs from 'fs'

const matches = fs.readFileSync('football.csv', {
    encoding:'utf-8'
}).split('\n').map((row: string) =>{
    return row.split(',')
})

let manUnitedWins = 0

const matchResult = {
    HomeWin : 'H',
    AwayWin : 'A',
    DrawWin : 'D'
}

for(let match of matches) {
    if(match[1]==='Man United' && match[5] === matchResult.HomeWin) manUnitedWins++
    if(match[2]==='Man United' && match[5] === matchResult.AwayWin) manUnitedWins++
}

console.log(`Man united won ${manUnitedWins}`)