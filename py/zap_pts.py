#Generates a javascript file/variable for heatmapjs to use


#python zap_pts.py ../res/zap_points_raw
#copy zap_pts.js to our js folder

import csv
import sys

csvfile = open(sys.argv[1]+'.csv', 'r')
jsfile = open('zap_pts.js', 'w')

fieldnames = ("name","latitude","longitude")
reader = csv.DictReader( csvfile, fieldnames)

# var data = [{lat: 24.6408, lng:46.7728, count: 3},{lat: 50.75, lng:-1.55, count: 1}]


out = """var zapData = {
max: 200,
data: ["""
hax = True
for row in reader:
	if not hax:
		out += "{lat: " + row['latitude'] + ", lng: "+ row['longitude'] + ", count: 1 },"
	hax = False

out = out[:-1]

out += "]};"
#print out

jsfile.write(out)
