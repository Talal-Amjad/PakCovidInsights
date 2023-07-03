var R = require("r-integration");
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');


// Landing page
app.get('/',(req,res)=>{
    res.render('landing');
})

// main menu
app.get('/dashboard',(req,res)=>{
    res.render('Graphs/dashBoard');
})

//confirm cases
app.get('/confirmCasesBoxPlot',(req,res)=>{
    R.executeRScript("./scripts/confirmCasesBoxPlot.R");
    res.render('Graphs/confirmCasesBoxPlot');
})

app.get('/confirmcaseshistogram',(req,res)=>{
    R.executeRScript("./scripts/confirmCasesHistogram.R");
    res.render('Graphs/confirmCasesHistogram');
})

//death cases
app.get('/deathcaseshistogram',(req,res)=>{
    R.executeRScript("./scripts/deathCasesHistogram.R");
    res.render('Graphs/deathCasesHistogram');
})

app.get('/deathcasesboxplot',(req,res)=>{
    R.executeRScript("./scripts/deathCasesBoxPlot.R");
    res.render('Graphs/deathCasesBoxPlot');
})
//active cases
app.get('/activecaseshistogram',(req,res)=>{
    R.executeRScript("./scripts/activeCasesHistogram.R");
    res.render('Graphs/activeCasesHistogram');
})

app.get('/activecasesboxplot',(req,res)=>{
    R.executeRScript("./scripts/activeCasesBoxPlot.R");
    res.render('Graphs/activeCasesBoxPlot');
})

//recovered cases
app.get('/recoverdcaseshistogram',(req,res)=>{
    R.executeRScript("./scripts/recoveredCasesHistogram.R");
    res.render('Graphs/recoveredCasesHistogram');
})

app.get('/recoverdcasesboxplot',(req,res)=>{
    R.executeRScript("./scripts/recoveredCasesBoxPlot.R");
    res.render('Graphs/recoveredCasesBoxPlot');
})

//Statistics

//Confirmed Cases
app.get('/statisticsconfirmcases',(req,res)=>{
    const result = R.executeRScript("./scripts/statConfirmCases.R");
    res.render('Statistics/statConfirmCases',{median : result[1],iqr : result[2],total : result[3]})
})

//Death Cases
app.get('/statisticsdeathcases',(req,res)=>{
    const result = R.executeRScript("./scripts/statDeathCases.R");
    res.render('Statistics/statDeathCases',{median : result[1],iqr : result[2],total : result[3]})
})
//Active Cases
app.get('/statisticsactivecases',(req,res)=>{
    const result = R.executeRScript("./scripts/statActiveCases.R");
    res.render('Statistics/statActiveCases',{median : result[1],iqr : result[2],total : result[3]})
})

//Recovered Cases
app.get('/statisticsrecoveredcases',(req,res)=>{
    const result = R.executeRScript("./scripts/statRecoveredCases.R");
    res.render('Statistics/statRecoveredCases',{median : result[1],iqr : result[2],total : result[3]})
})

//poisson distribution
app.get('/poissondist',(req,res)=>{
    const result = R.executeRScript('./scripts/poisson.R')
    res.render('poisson',{d : result[1],c : result[2],p : result[3],adr : result[4],atleast : result[5],exact : result[6]});
})

//linear reg
app.get('/linearregression',(req,res)=>{
    R.executeRScript('./scripts/linearReg.R')
    res.render('Graphs/linearReg');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,err => console.log('Listeining 4009 Port'))
