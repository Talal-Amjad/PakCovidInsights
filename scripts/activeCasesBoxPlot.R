# Load the data from the CSV file
cases <- read.csv("Coviddata.csv", header = TRUE, sep = ",", 
                  colClasses = c("NULL", "NULL", "NULL", "NULL", "NULL", "NULL", "numeric", "NULL", "NULL", "NULL", "NULL", "NULL"))

active_cases <- c(0)
for (a in cases[1]) {
  active_cases <- append(active_cases, a)
}

options(scipen = 10000)

# Generate the box plot
jpeg(file = "D:/projects/PakCovidInsights/public/images/activeCasesBoxPlot.jpeg",
     width = 600, height = 350)
boxplot(active_cases, col = "#E3E9F7", main = "Active Cases Box Plot")
dev.off()
