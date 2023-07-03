cases =  read.csv("Coviddata.csv",header = TRUE,sep = ",",
                  colClasses = c("NULL","NULL","NULL","NULL"
                                 ,"NULL","NULL","numeric","NULL",
                                 "NULL","NULL","NULL","NULL"))
death_cases = c(0)
for (a in cases[1])
{
  death_cases =  append(death_cases,a)
}
options(scipen=10000)
boxplot(death_cases)

jpeg(file="D:/projects/PakCovidInsights/public/images/deathCasesBoxPlot.jpeg",
     width=600, height=350)
boxplot(death_cases, col="#E3E9F7", main = "Death Cases Box Plot")

dev.off()