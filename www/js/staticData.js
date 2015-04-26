var staticData = {
	mainNavdata : [
	{
		"text" : "Contact us",
		"url" : "http://www.ville.sherbrooke.qc.ca/en/directory-of-services/"
	},{
		"text" : "Site map",
		"url" : "http://www.ville.sherbrooke.qc.ca/en/menus/liens-rapides-haut/site-map/"
	},{
		"text" : "Pressroom",
		"url" : "http://www.ville.sherbrooke.qc.ca/en/pressroom/"
	},{
		"text" : "Fr",
		"url" : "http://www.ville.sherbrooke.qc.ca/fr/"
	}
	],
	
	sideNavData : [
	{
		"text" : "Data Visualization 1",
		"page" : "dataVis1"
	},{
		"text" : "Data Visualization 2",
		"page" : "dataVis2"
	},{
		"text" : "Data Visualization 3",
		"page" : "dataVis3"
	},{
		"text" : "Data Visualization 4",
		"page" : "dataVis4"
	},{
		"text" : "Data Visualization 5",
		"page" : "dataVis5"
	},{
		"text" : "Data Visualization 6",
		"page" : "dataVis6"
	},{
		"text" : "Data Visualization 7",
		"page" : "dataVis7"
	}
	],
	
	charts : [
			{
				"tags": ["ZAP", "wifi", "wireless", "internet", "map", "heatmap", "sans fil", "sansfil", "carte", "tourist", "touristique", "businesses"],
				"title": {"en" : "ZAP Heatmap", "fr" : "Hotspots Zap"},
				"sources" : [""],
				"type" : "map",
			},
			{
				"tags": ["Streets", "roads", "transport", "map", "rues", "carte", "chemins"],
				"title": {"en" : "All streets", "fr" : "Tout les rues"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2015-04-23T12%3A16%3A03.639Z/segmentrue.kml"],
				"type" : "map",
			},
			{
				"tags": ["boroughs", "neighbourhoods", "neighborhoods", "voisines", "arrondissement", "arondissement", "arondisement", "carte", "map"],
				"title": {"en" : "The boroughs", "fr" : "Les arrondissements"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A39%3A33.020Z/arrondissement.kml"],
				"type" : "map",
			},
			{
				"tags": ["boroughs", "neighbourhoods", "neighborhoods", "voisines", "arrondissement", "arondissement", "arondisement", "chart", "graph"],
				"title": {"en" : "Number of streets per borough", "fr" : "Nombre de rues par arondissement"},
				"sources" : [""],
				"type" : "chart",
			},
			{
				"tags": ["parking", "stationnement", "stationment", "lot", "map", "businesses", "carte"],
				"title": {"en" : "Parking lots, meters, and pay-stations", "fr" : "Stationnment: lots, places, et horodateurs"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2015-04-15T12%3A16%3A14.460Z/bornenumerotee.kml, http://donnees.ville.sherbrooke.qc.ca/storage/f/2015-04-15T12%3A25%3A20.271Z/stationnementpublic.kml,http://donnees.ville.sherbrooke.qc.ca/storage/f/2015-04-15T12%3A18%3A50.388Z/horodateur.kml"],
				"type" : "map",
			},
			{
				"tags": ["graffiti", "graffiti", "grafitti", "art", "map", "carte", "attractions", "touristique", "tourist", "mural", "murale"],
				"title": {"en" : "Murals and graffiti", "fr" : "Murales et graffitis"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-03-03T01%3A20%3A17.240Z/murs-dedies-tags-graffitis.kml"],
				"type" : "map",
			},
			{
				"tags": ["interesting", "touristic", "tourist", "touristique", "see", "voir", "do", "faire", "graffiti", "graffiti", "grafitti", "art", "map", "carte", "attractions", "touristique", "tourist", "mural", "murale"],
				"title": {"en" : "Interesting things to see", "fr" : "Sites interessantes"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A51%3A55.982Z/siteinteret.kml, http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-03-03T01%3A20%3A17.240Z/murs-dedies-tags-graffitis.kml"],
				"type" : "",
			},
			{
				"tags": ["path", "sentier", "pedestre", "walking", "strolling", "exercise", "outdoors", "randonnee", "dehors", "carte", "map", "verte"],
				"title": {"en" : "Walk paths", "fr" : "Sentiers pedestres"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A50%3A08.967Z/sentierpedestre.kml", "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d44843.95550315405!2d-71.9405600029131!3d45.37409576251294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spark!5e0!3m2!1sen!2sca!4v1430013487421"],
				"type" : "map",
			},
			{
				"tags": ["path", "bike", "bicycle", "cycle", "bicyclette", "outdoors", "randonnee", "dehors", "carte", "map", "verte"],
				"title": {"en" : "Bike paths", "fr" : "Pistes cyclables"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A46%3A49.758Z/pistecyclable.kml"],
				"type" : "map",
			},
			{
				"tags": ["path", "sentier", "pedestre", "walking", "strolling", "exercise", "outdoors", "randonnee", "dehors", "bike", "bicycle", "cycle", "bicyclette", "carte", "map"],
				"title": {"en" : "Outdoor activities", "fr" : "Aller dehors"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A50%3A08.967Z/sentierpedestre.kml, http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A46%3A49.758Z/pistecyclable.kml"],
				"type" : "map",
			},
			{
				"tags": ["batiments", "buildings", "school", "hospital", "carte", "map"],
				"title": {"en" : "Public buildings: schools, commerce, hospitals, and municipal buildings", "fr" : "Batiments publiques: école, commerce, hôpital ou édifice municipal"},
				"sources" : ["http://donnees.ville.sherbrooke.qc.ca/storage/f/2014-09-18T14%3A40%3A40.457Z/batiment.kml"],
				"type" : "map",
			},
			{
				"tags": ["Restaurants", "eat", "manger", "carte", "map"],
				"title": {"en" : "Restaurants", "fr" : "Restaurants"},
				"sources" : ["https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d89761.06227216269!2d-71.87352623378905!3d45.327952116324155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurant!5e0!3m2!1sen!2sca!4v1430013267734"],
				"type" : "map",
			},
			{
				"tags": ["Cafe", "restaurants", "coffee", "tea", "carte", "manger", "map"],
				"title": {"en" : "Cafes", "fr" : "Cafes"},
				"sources" : ["https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d44833.819642698116!2d-71.90820183335423!3d45.38687662563207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scafe!5e0!3m2!1sen!2sca!4v1430013330468"],
				"type" : "map",
			},
			{
				"tags": ["Stay", "hotel", "hostel", "inn", "auberge", "map", "carte"],
				"title": {"en" : "Hostels, hotels, and inns", "fr" : "Hostels, hotels, et auberges"},
				"sources" : ["https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d44843.95550315405!2d-71.9405600029131!3d45.37409576251294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sauberge+OR+hostel+OR+hotel+OR+motel!5e0!3m2!1sen!2sca!4v1430013406166"],
				"type" : "map",
			},
			{
				"tags": ["Carte", "map", "parks", "parcs", "green", "spaces", "espaces", "verte"],
				"title": {"en" : "Parks", "fr" : "Parcs"},
				"sources" : ["https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d44843.95550315405!2d-71.9405600029131!3d45.37409576251294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spark!5e0!3m2!1sen!2sca!4v1430013487421"],
				"type" : "map",
			},
			{
				"tags": ["Chart", "bar", "line", "revenue", "cost", "income", "city", "budget"],
				"title": {"en" : "City revenues", "fr" : "Revenus de la ville"},
				"sources" : [""],
				"type" : "chart",
			},
			{
				"tags": ["Chart", "bar", "line", "revenue", "cost", "income", "city", "budget", "expenses"],
				"title": {"en" : "City expenses", "fr" : "Depenses de la ville"},
				"sources" : [""],
				"type" : "chart",
			},
			{
				"tags": ["Chart", "bar", "line", "revenue", "cost", "income", "city", "budget", "expenses"],
				"title": {"en" : "2015 budget", "fr" : "Budget 2015"},
				"sources" : [""],
				"type" : "chart",
			},
			{
				"tags": ["Chart", "infrastrucutre", "factories", "tunnels", "maintenance", "waterways", "rivers", "sewers", "egout", "water", "eau", "systeme", "eclairage", "lights", "streets", "chemins", "rues", "trottoirs", "buildings", "edifices", "batiments", "vehicles" ],
				"title": {"en" : "Infrastructure costs and acquisitions", "fr" : "Acquisition et depenses en infrastructure"},
				"sources" : [""],
				"type" : "chart",
			}]
};