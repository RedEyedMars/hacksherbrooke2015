import io, csv

#Todo; redis/cron
#something that parses the inside of the loop

out = open('../res/charts.js', 'w')
out.write("""charts : [""")

def recordChart(tags,titleFR,titleEN,sources,vistype,out):
	out.write("""
			{
				"tags": [""" +tags+ """],
				"title": {"en" : \""""+titleEN+"""\", "fr" : \""""+titleFR+"""\"},
				"sources" : [\""""+sources+"""\"],
				"type" : \""""+vistype+"""\",
			},""")

with open('../res/visualizations.csv', 'r') as f:
	reader = csv.reader(f, delimiter=',', quotechar='"')

	hax = True
	for row in reader:
		tags = row[2]
		titleFR = row[0]
		titleEN = row[1]
		sources = row[4]
		vistype = row[3]
	
		if not hax:
			recordChart(tags,titleFR,titleEN,sources,vistype,out)

		hax = False

out.write("""]""")
out.close()
