import csv
import pandas
import json
import sys

filename = sys.argv[1]+'.csv'
with open (csvfile = open(sys.argv[1]+'.csv', 'r')
jsonfile = open(sys.argv[1]+'.json', 'w')

fieldnames = ("name","latitude","longitude")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ][1:] )
jsonfile.write(out)
