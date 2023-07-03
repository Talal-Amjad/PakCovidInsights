df<-read.csv("Coviddata.csv",stringsAsFactors = FALSE)
simpleReg<-lm(Confirmed~Recovered,data=df)

options(scipen=1)

jpeg(file="D:/projects/PakCovidInsights/public/images/linearReg.jpeg",
    width=600, height=350)
plot(Confirmed~Recovered,data=df,col="#7c98da")
dev.off()