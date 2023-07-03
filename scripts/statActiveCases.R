cases =  read.csv("Coviddata.csv",header = TRUE,sep = ",",
                  colClasses = c("NULL","NULL","NULL","NULL"
                                 ,"NULL","NULL","numeric","NULL",
                                 "NULL","NULL","NULL","NULL"))
active_cases = c(0)
for (a in cases[1])
{
  active_cases =  append(active_cases,a)
}

median = median(active_cases);
iqr = IQR(active_cases);
sum = sum(active_cases);

res <- c(median,iqr,sum);

print(res);