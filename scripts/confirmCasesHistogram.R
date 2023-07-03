cases =  read.csv("Coviddata.csv",header = TRUE,sep = ",",
                  colClasses = c("NULL","NULL","NULL","NULL"
                                 ,"NULL","numeric","NULL","NULL",
                                 "NULL","NULL","NULL","NULL"))
confirm_cases = c(0)
for (a in cases[1])
{
  confirm_cases =  append(confirm_cases,a)
}

options(scipen=10000)

jpeg(file="D:/projects/PakCovidInsights/public/images/confirmCasesHistogram.jpeg",
    width=600, height=350)
hist(confirm_cases, col="#E3E9F7", main = "Confirmed Cases Histogram")
dev.off()