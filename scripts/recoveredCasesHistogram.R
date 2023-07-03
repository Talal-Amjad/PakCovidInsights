cases =  read.csv("Coviddata.csv",header = TRUE,sep = ",",
                  colClasses = c("NULL","NULL","NULL","NULL"
                                 ,"NULL","NULL","NULL","numeric",
                                 "NULL","NULL","NULL","NULL"))
recover_cases = c(0)
for (a in cases[1])
{
  recover_cases =  append(recover_cases,a)
}

options(scipen=10000)

jpeg(file="D:/projects/PakCovidInsights/public/images/recoveredCasesHistogram.jpeg",
    width=600, height=350)
hist(recover_cases, col="#E3E9F7",main = "Recovered Cases Histogram")
dev.off()