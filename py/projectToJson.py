#!/usr/bin/python2.7 -S
# -*- coding: utf-8 -*-
import sys

import re
import json
import codecs
reload(sys)
sys.setdefaultencoding("utf-8")
import site
file = codecs.open(sys.argv[1]+".txt", encoding='utf-8')
projects = {}
currentName = ""
for line in file.readlines():
   m = re.match("\s*((([\d\s,\.]+)M?\s*\$)?\s*([^\s][^\n]*))\s*\n",line)
   if m is not None:
     if m.group(2) is not None:
       val = 0
       if "M" in m.group(2):
          if "," in m.group(3) or "." in m.group(3):
            val = int(m.group(3).replace(",","").replace(".","").replace(" ","")+"00000")
	  else:
	    val = int(m.group(3).replace(" ","")+"000000")
       else:
         val = int(m.group(3).replace(" ",""))
         purpose = m.group(4).encode("utf-8")
	 projects[currentName].append({ "value":val, "purpose": purpose.strip() })
     else:
         currentName = m.group(1).encode("utf-8")
         projects[currentName] = []
print projects[currentName]
jsonfile = codecs.open(sys.argv[1]+'.json', "w", encoding="utf-8")
s = "{"
comma1 = ""
for topic in projects:
  comma2 = ""
  s = s + comma1 +"\n\t"+topic+":["
  t = ""
  for elem in projects[topic]:
    t = t + comma2 + "\n\t\t{ 'value':"+str(elem['value'])+", 'purpose':"+'"'+elem['purpose'] +'"}'
    comma2 = ","
  s = s + t
  s = s + "]"
  comma1 = ","
s = s + "}"
out = s
jsonfile.write(out)
