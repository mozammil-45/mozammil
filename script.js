// Copy this and use it as the start of your monuments array.
const monuments = [
    // DELHI[cite: 4]
    {id: 1, name: "Lal Kot", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tomar Dynasty", year: 1060, lat: 28.5255, lng: 77.1854, desc: "The first documented fortified city of Delhi.", wiki: "https://en.wikipedia.org/wiki/Lal_Kot",gmaps_link: "https://maps.app.goo.gl/TE8bVaxt422Uur348"},    
    {id:2,name:"Anang Tal",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tomar Dynasty",year:1060,lat:28.5241,lng:77.1850,desc:"An ancient reservoir built by the Tomar king Anangpal II.",wiki:"https://en.wikipedia.org/wiki/Anangpur_Dam", gmaps_link: "https://maps.app.goo.gl/1dTnY5qez4RJxd3K7" },
    {id:3,name:"Suraj Kund",country:"India",state:"Delhi",city:"Faridabad",dynasty:"Tomar Dynasty",year:1060,lat:28.4870,lng:77.2797,desc:"An ancient reservoir in the backdrop of the Aravalli hills.",wiki:"https://en.wikipedia.org/wiki/Surajkund"},
    {id:4,name:"Qila Rai Pithora",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Chauhan Dynasty",year:1150,lat:28.5238,lng:77.1883,desc:"A fortified city built by Prithviraj Chauhan.",wiki:"https://en.wikipedia.org/wiki/Qila_Rai_Pithora"},
    {id:5,name:"Rai Pithora's Fortifications",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Chauhan Dynasty",year:1150,lat:28.5230,lng:77.1900,desc:"The expansive defensive walls of ancient Qila Rai Pithora.",wiki:"https://en.wikipedia.org/wiki/Qila_Rai_Pithora"},
    {id:6,name:"Quwwat-ul-Islam Mosque",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Ghurid Empire",year:1192,lat:28.5247,lng:77.1854,desc:"The first mosque built in Delhi after the Islamic conquest.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar_complex#Quwwat-ul-Islam_Mosque"},
    {id:7,name:"Qutb Minar (Foundation)",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Ghurid Empire",year:1192,lat:28.5244,lng:77.1855,desc:"The initial foundation of the famous victory tower.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar"},
    {id:8,name:"Qutb Minar",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1206,lat:28.5244,lng:77.1855,desc:"A soaring 73-meter high tower of victory.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar"},
    {id:9,name:"Quwwat-ul-Islam Mosque Expansion",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1206,lat:28.5247,lng:77.1854,desc:"Expanded mosque complex showcasing early Indo-Islamic architecture.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar_complex"},
    {id:10,name:"Qutb Complex",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1206,lat:28.5243,lng:77.1856,desc:"A UNESCO World Heritage site housing early Sultanate monuments.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar_complex"},
    {id:11,name:"Sultan Ghari's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1231,lat:28.5262,lng:77.1352,desc:"The first Islamic mausoleum built in India.",wiki:"https://en.wikipedia.org/wiki/Sultan_Ghari"},
    {id:12,name:"Iltutmish's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1235,lat:28.5248,lng:77.1849,desc:"The intricately carved tomb of the second Sultan of Delhi.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar_complex#Tomb_of_Iltutmish"},
    {id:13,name:"Hauz-i-Shamsi",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1230,lat:28.5152,lng:77.1774,desc:"A historic water reservoir built by Sultan Iltutmish.",wiki:"https://en.wikipedia.org/wiki/Hauz-i-Shamsi"},
    {id:14,name:"Balban's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mamluk Dynasty",year:1287,lat:28.5186,lng:77.1884,desc:"Tomb notable for featuring the first true arch in India.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Balban"},
    {id:15,name:"Siri Fort",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Khalji Dynasty",year:1303,lat:28.5375,lng:77.2215,desc:"The second city of Delhi, built to defend against Mongols.",wiki:"https://en.wikipedia.org/wiki/Siri_Fort"},
    {id:16,name:"Alai Darwaza",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Khalji Dynasty",year:1311,lat:28.5242,lng:77.1855,desc:"A magnificent southern gateway to the Quwwat-ul-Islam Mosque.",wiki:"https://en.wikipedia.org/wiki/Alai_Darwaza"},
    {id:17,name:"Alai Minar",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Khalji Dynasty",year:1311,lat:28.5255,lng:77.1852,desc:"An unfinished tower intended to be twice the size of the Qutb Minar.",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar_complex#Alai_Minar"},
    {id:18,name:"Hauz Khas",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Khalji Dynasty",year:1290,lat:28.5494,lng:77.1934,desc:"An ancient royal water tank built by Alauddin Khalji.",wiki:"https://en.wikipedia.org/wiki/Hauz_Khas_Complex"},
    {id:19,name:"Jamat Khana Masjid",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Khalji Dynasty",year:1315,lat:28.5873,lng:77.2435,desc:"The oldest mosque in the Nizamuddin Dargah complex.",wiki:"https://en.wikipedia.org/wiki/Nizamuddin_Dargah"},
    {id:20,name:"Alauddin Khalji's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Khalji Dynasty",year:1316,lat:28.5240,lng:77.1848,desc:"The tomb and madrasa of Sultan Alauddin Khalji.",wiki:"https://en.wikipedia.org/wiki/Alauddin_Khalji%27s_tomb_and_madrasa"},
    {id:21,name:"Tughlaqabad Fort",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1321,lat:28.5143,lng:77.2600,desc:"A ruined fort representing the third historic city of Delhi.",wiki:"https://en.wikipedia.org/wiki/Tughlaqabad_Fort"},
    {id:22,name:"Ghiyasuddin Tughlaq's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1325,lat:28.5133,lng:77.2612,desc:"A fortified tomb structure connected to Tughlaqabad.",wiki:"https://en.wikipedia.org/wiki/Tughlaqabad_Fort"},
    {id:23,name:"Jahanpanah Fortifications",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1326,lat:28.5393,lng:77.2045,desc:"The fourth city of Delhi, built to enclose the space between Siri and Lal Kot.",wiki:"https://en.wikipedia.org/wiki/Jahanpanah"},
    {id:24,name:"Begumpuri Mosque",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1351,lat:28.5398,lng:77.2057,desc:"A massive mosque featuring numerous domes.",wiki:"https://en.wikipedia.org/wiki/Begumpur_Mosque"},
    {id:25,name:"Khirki Mosque",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1351,lat:28.5312,lng:77.2198,desc:"A unique cross-axial, largely covered mosque.",wiki:"https://en.wikipedia.org/wiki/Khirki_Mosque"},
    {id:26,name:"Satpula",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1326,lat:28.5298,lng:77.2215,desc:"A seven-arched bridge and weir serving Jahanpanah.",wiki:"https://en.wikipedia.org/wiki/Satpula"},
    {id:27,name:"Firoz Shah Kotla",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1354,lat:28.6365,lng:77.2435,desc:"The fortress of Firozabad, the fifth city of Delhi.",wiki:"https://en.wikipedia.org/wiki/Feroz_Shah_Kotla"},
    {id:28,name:"Firoz Shah's Mosque",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1354,lat:28.6360,lng:77.2440,desc:"The Jami Masjid inside the Firoz Shah Kotla complex.",wiki:"https://en.wikipedia.org/wiki/Feroz_Shah_Kotla"},
    {id:29,name:"Hauz Khas Madrasa",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1352,lat:28.5492,lng:77.1932,desc:"A leading center of Islamic education overlooking the Hauz Khas lake.",wiki:"https://en.wikipedia.org/wiki/Hauz_Khas_Complex"},
    {id:30,name:"Firoz Shah Tughlaq's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1388,lat:28.5488,lng:77.1935,desc:"The mausoleum of Sultan Firoz Shah, located in Hauz Khas.",wiki:"https://en.wikipedia.org/wiki/Hauz_Khas_Complex"},
    {id:31,name:"Ashokan Pillar at Firoz Shah Kotla",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Tughlaq Dynasty",year:1356,lat:28.6368,lng:77.2435,desc:"An ancient Mauryan pillar relocated to Delhi.",wiki:"https://en.wikipedia.org/wiki/Pillars_of_Ashoka"},
    {id:32,name:"Mubarak Shah's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Sayyid Dynasty",year:1434,lat:28.5723,lng:77.2201,desc:"An octagonal tomb of the second Sayyid Sultan.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Mubarak_Shah"},
    {id:33,name:"Muhammad Shah's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Sayyid Dynasty",year:1444,lat:28.5835,lng:77.2201,desc:"A prominent octagonal tomb within Lodi Gardens.",wiki:"https://en.wikipedia.org/wiki/Lodi_Gardens"},
    {id:34,name:"Bahlol Lodi's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Lodi Dynasty",year:1489,lat:28.5874,lng:77.2415,desc:"A simple square tomb of the founder of the Lodi dynasty.",wiki:"https://en.wikipedia.org/wiki/Bahlul_Lodi"},
    {id:35,name:"Sikandar Lodi's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Lodi Dynasty",year:1517,lat:28.5847,lng:77.2195,desc:"An octagonal tomb set in a walled enclosure in Lodi Gardens.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Sikandar_Lodi"},
    {id:36,name:"Bara Gumbad",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Lodi Dynasty",year:1490,lat:28.5852,lng:77.2200,desc:"A massive dome serving as a gateway to an adjoining mosque.",wiki:"https://en.wikipedia.org/wiki/Bara_Gumbad"},
    {id:37,name:"Bara Gumbad Mosque",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Lodi Dynasty",year:1494,lat:28.5852,lng:77.2198,desc:"A highly ornate mosque constructed during the reign of Sikandar Lodi.",wiki:"https://en.wikipedia.org/wiki/Bara_Gumbad"},
    {id:38,name:"Sheesh Gumbad",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Lodi Dynasty",year:1489,lat:28.5855,lng:77.2205,desc:"The 'Glazed Dome' tomb, noted for its blue enameled tile work.",wiki:"https://en.wikipedia.org/wiki/Sheesh_Gumbad"},
    {id:39,name:"Moth Ki Masjid",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Lodi Dynasty",year:1505,lat:28.5606,lng:77.2185,desc:"A beautiful Lodi-era mosque built by the prime minister of Sikandar Lodi.",wiki:"https://en.wikipedia.org/wiki/Moth_Ki_Masjid"},
    {id:40,name:"Babur-era Structures",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mughal Empire",year:1526,lat:28.6139,lng:77.2090,desc:"Limited surviving traces of early Mughal interventions in Delhi.",wiki:"https://en.wikipedia.org/wiki/Babur"},
    {id:41,name:"Dinpanah",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mughal Empire",year:1533,lat:28.6096,lng:77.2437,desc:"Humayun's city, which later became the site of Purana Qila.",wiki:"https://en.wikipedia.org/wiki/Purana_Qila"},
    {id:42,name:"Purana Qila",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Sur Empire",year:1540,lat:28.6096,lng:77.2437,desc:"The Old Fort, expanded by Sher Shah Suri.",wiki:"https://en.wikipedia.org/wiki/Purana_Qila"},
    {id:43,name:"Qila-i-Kuhna Mosque",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Sur Empire",year:1541,lat:28.6093,lng:77.2435,desc:"A transitional Indo-Islamic mosque inside Purana Qila.",wiki:"https://en.wikipedia.org/wiki/Qila-i-Kuhna_Mosque"},
    {id:44,name:"Sher Mandal",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Sur Empire",year:1541,lat:28.6090,lng:77.2430,desc:"An octagonal pavilion used by Humayun as a library.",wiki:"https://en.wikipedia.org/wiki/Purana_Qila#Sher_Mandal"},
    {id:45,name:"Sher Shah Suri Gate",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Sur Empire",year:1540,lat:28.6110,lng:77.2420,desc:"A massive gateway surviving from Sher Shah's walled city.",wiki:"https://en.wikipedia.org/wiki/Sher_Shah_Suri_Gate"},
    {id:46,name:"Humayun's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mughal Empire",year:1570,lat:28.5933,lng:77.2507,desc:"The magnificent garden tomb of Emperor Humayun.",wiki:"https://en.wikipedia.org/wiki/Humayun%27s_Tomb"},
    {id:47,name:"Jahangir-period Additions",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Mughal Empire",year:1605,lat:28.5870,lng:77.2450,desc:"Various structures like Chausath Khamba around the Nizamuddin area.",wiki:"https://en.wikipedia.org/wiki/Chausath_Khamba"},
    {id:48,name:"Red Fort",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1639,lat:28.6562,lng:77.2410,desc:"The majestic main residence of the Mughal emperors.",wiki:"https://en.wikipedia.org/wiki/Red_Fort"},
    {id:49,name:"Jama Masjid",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1650,lat:28.6507,lng:77.2334,desc:"One of the largest mosques in India.",wiki:"https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi"},
    {id:50,name:"Shahjahanabad",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1639,lat:28.6550,lng:77.2300,desc:"The walled city of Delhi, serving as the Mughal capital.",wiki:"https://en.wikipedia.org/wiki/Old_Delhi"},
    {id:51,name:"Chandni Chowk",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1650,lat:28.6560,lng:77.2300,desc:"The historic main street and market of Shahjahanabad.",wiki:"https://en.wikipedia.org/wiki/Chandni_Chowk"},
    {id:52,name:"Lahori Gate",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1639,lat:28.6558,lng:77.2386,desc:"The main entrance to the Red Fort, facing Lahore.",wiki:"https://en.wikipedia.org/wiki/Lahori_Gate,_Delhi"},
    {id:53,name:"Delhi Gate",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1638,lat:28.6415,lng:77.2405,desc:"The southern historic gateway of Shahjahanabad.",wiki:"https://en.wikipedia.org/wiki/Delhi_Gate_(Delhi)"},
    {id:54,name:"Moti Masjid",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Mughal Empire",year:1659,lat:28.6565,lng:77.2415,desc:"The 'Pearl Mosque' built by Aurangzeb inside the Red Fort.",wiki:"https://en.wikipedia.org/wiki/Moti_Masjid_(Red_Fort)"},
    {id:55,name:"Safdarjung's Tomb",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Later Mughal",year:1754,lat:28.5893,lng:77.2106,desc:"The last monumental tomb garden of the Mughals.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Safdar_Jang"},
    {id:56,name:"Qudsia Garden",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Later Mughal",year:1748,lat:28.6675,lng:77.2285,desc:"A palace complex and garden laid out by Qudsia Begum.",wiki:"https://en.wikipedia.org/wiki/Qudsia_Bagh"},
    {id:57,name:"Mirza Ghalib's Haveli",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"Later Mughal",year:1800,lat:28.6534,lng:77.2254,desc:"The residence of the legendary Urdu poet.",wiki:"https://en.wikipedia.org/wiki/Ghalib_ki_Haveli"},
    {id:58,name:"St. James' Church",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"British Raj",year:1836,lat:28.6655,lng:77.2307,desc:"One of the oldest churches in Delhi.",wiki:"https://en.wikipedia.org/wiki/St._James%27_Church,_Delhi"},
    {id:59,name:"Kashmere Gate",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"British Raj",year:1835,lat:28.6667,lng:77.2283,desc:"The northern gate of the historic walled city.",wiki:"https://en.wikipedia.org/wiki/Kashmere_Gate"},
    {id:60,name:"Delhi Flagstaff Tower",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1828,lat:28.6833,lng:77.2167,desc:"A signal tower on the Delhi Ridge.",wiki:"https://en.wikipedia.org/wiki/Flagstaff_Tower,_Delhi"},
    {id:61,name:"Old Secretariat",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1912,lat:28.6750,lng:77.2200,desc:"The seat of the Government of India before New Delhi was built.",wiki:"https://en.wikipedia.org/wiki/Old_Secretariat,_Delhi"},
    {id:62,name:"St. Stephen's Church",country:"India",state:"Delhi",city:"Old Delhi",dynasty:"British Raj",year:1862,lat:28.6580,lng:77.2250,desc:"A historic church built in the Romanesque style.",wiki:"https://en.wikipedia.org/wiki/St._Stephen%27s_Church,_Delhi"},
    {id:63,name:"India Gate",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1921,lat:28.6129,lng:77.2295,desc:"A monumental sandstone arch honoring Indian soldiers.",wiki:"https://en.wikipedia.org/wiki/India_Gate"},
    {id:64,name:"Rashtrapati Bhavan",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1929,lat:28.6143,lng:77.1994,desc:"The majestic official residence of the President of India.",wiki:"https://en.wikipedia.org/wiki/Rashtrapati_Bhavan"},
    {id:65,name:"North Block",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1927,lat:28.6145,lng:77.2055,desc:"One of the two Secretariat Buildings.",wiki:"https://en.wikipedia.org/wiki/Secretariat_Building,_New_Delhi"},
    {id:66,name:"South Block",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1927,lat:28.6135,lng:77.2055,desc:"Part of the Secretariat, housing key ministries.",wiki:"https://en.wikipedia.org/wiki/Secretariat_Building,_New_Delhi"},
    {id:67,name:"Old Parliament House",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1927,lat:28.6172,lng:77.2081,desc:"The historic circular building that formerly housed parliament.",wiki:"https://en.wikipedia.org/wiki/Old_Parliament_House,_New_Delhi"},
    {id:68,name:"Connaught Place",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1929,lat:28.6315,lng:77.2167,desc:"The main commercial centre of New Delhi.",wiki:"https://en.wikipedia.org/wiki/Connaught_Place,_New_Delhi"},
    {id:69,name:"Kartavya Path",country:"India",state:"Delhi",city:"New Delhi",dynasty:"British Raj",year:1920,lat:28.6139,lng:77.2190,desc:"The ceremonial boulevard of New Delhi.",wiki:"https://en.wikipedia.org/wiki/Kartavya_Path"},
    {id:70,name:"Raj Ghat",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:1948,lat:28.6406,lng:77.2495,desc:"A memorial dedicated to Mahatma Gandhi.",wiki:"https://en.wikipedia.org/wiki/Raj_Ghat_and_associated_memorials"},
    {id:71,name:"Lotus Temple",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:1986,lat:28.5535,lng:77.2588,desc:"A Baháʼí House of Worship famous for its shape.",wiki:"https://en.wikipedia.org/wiki/Lotus_Temple"},
    {id:72,name:"Akshardham Temple",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:2005,lat:28.6127,lng:77.2773,desc:"A massive Hindu temple complex.",wiki:"https://en.wikipedia.org/wiki/Swaminarayan_Akshardham_(New_Delhi)"},
    {id:73,name:"Indira Gandhi Memorial",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:1984,lat:28.6015,lng:77.2025,desc:"A museum located at the former Prime Minister's residence.",wiki:"https://en.wikipedia.org/wiki/Indira_Gandhi_Memorial_Museum"},
    {id:74,name:"National Police Memorial",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:2018,lat:28.5950,lng:77.1850,desc:"A memorial honoring fallen police personnel.",wiki:"https://en.wikipedia.org/wiki/National_Police_Memorial_(India)"},
    {id:75,name:"National War Memorial",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:2019,lat:28.6139,lng:77.2300,desc:"A monument built to honor the Armed Forces.",wiki:"https://en.wikipedia.org/wiki/National_War_Memorial_(India)"},
    {id:76,name:"Dr. Ambedkar National Memorial",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:2018,lat:28.6360,lng:77.2200,desc:"A memorial dedicated to the architect of the Indian Constitution.",wiki:"https://en.wikipedia.org/wiki/Dr._Ambedkar_National_Memorial"},
    {id:77,name:"Bharat Mandapam",country:"India",state:"Delhi",city:"New Delhi",dynasty:"Republic of India",year:2023,lat:28.6135,lng:77.2410,desc:"An international exhibition and convention center.",wiki:"https://en.wikipedia.org/wiki/Pragati_Maidan#Bharat_Mandapam"},

    // NCR — OUTSIDE DELHI[cite: 8]
    {id:78,name:"Farmana Archaeological Site",country:"India",state:"Delhi NCR",city:"Rohtak",dynasty:"Harappan Civilization",year:-3500,lat:29.09,lng:76.26,desc:"An early Harappan archaeological site.",wiki:"https://en.wikipedia.org/wiki/Farmana"},
    {id:79,name:"Rakhigarhi Archaeological Site",country:"India",state:"Delhi NCR",city:"Hisar",dynasty:"Harappan Civilization",year:-2600,lat:29.28,lng:76.11,desc:"One of the largest settlements of the ancient Indus Valley Civilization.",wiki:"https://en.wikipedia.org/wiki/Rakhigarhi"},
    {id:80,name:"Kunal Archaeological Site",country:"India",state:"Delhi NCR",city:"Fatehabad",dynasty:"Harappan Civilization",year:-3500,lat:29.62,lng:75.64,desc:"A pre-Harappan and early Harappan site.",wiki:"https://en.wikipedia.org/wiki/Kunal,_Haryana"},
    {id:81,name:"Banawali Archaeological Site",country:"India",state:"Delhi NCR",city:"Fatehabad",dynasty:"Harappan Civilization",year:-3000,lat:29.62,lng:75.39,desc:"An important Indus Valley Civilization site.",wiki:"https://en.wikipedia.org/wiki/Banawali"},
    {id:82,name:"Bhirrana Archaeological Site",country:"India",state:"Delhi NCR",city:"Fatehabad",dynasty:"Harappan Civilization",year:-7500,lat:29.55,lng:75.59,desc:"One of the oldest Harappan sites in the Indian subcontinent.",wiki:"https://en.wikipedia.org/wiki/Bhirrana"},
    {id:83,name:"Khokhrakot Archaeological Site",country:"India",state:"Delhi NCR",city:"Rohtak",dynasty:"Ancient",year:-800,lat:28.89,lng:76.57,desc:"An ancient mound revealing early historic remains.",wiki:"https://en.wikipedia.org/wiki/Rohtak"},
    {id:84,name:"Ther Mound",country:"India",state:"Delhi NCR",city:"Sirsa",dynasty:"Ancient",year:-600,lat:29.53,lng:75.02,desc:"Ancient mound covering a long sequence of historic times.",wiki:"https://en.wikipedia.org/wiki/Sirsa,_Haryana"},
    {id:85,name:"Surajkund",country:"India",state:"Delhi NCR",city:"Faridabad",dynasty:"Tomar Dynasty",year:950,lat:28.4870,lng:77.2797,desc:"An ancient artificial lake.",wiki:"https://en.wikipedia.org/wiki/Surajkund"},
    {id:86,name:"Raja Nahar Singh Palace",country:"India",state:"Delhi NCR",city:"Faridabad",dynasty:"Ballabhgarh State",year:1739,lat:28.33,lng:77.32,desc:"The historic 18th-century palace.",wiki:"https://en.wikipedia.org/wiki/Nahar_Singh_Mahal"},
    {id:87,name:"Shish Mahal",country:"India",state:"Delhi NCR",city:"Gurugram",dynasty:"Farrukhnagar State",year:1733,lat:28.44,lng:76.82,desc:"An 18th-century palace built by Nawab Faujdar Khan.",wiki:"https://en.wikipedia.org/wiki/Farrukhnagar"},
    {id:88,name:"Tomb of Khwaja Khizr",country:"India",state:"Delhi NCR",city:"Sonipat",dynasty:"Lodi Dynasty",year:1522,lat:28.99,lng:77.02,desc:"A tomb built out of red sandstone.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Khwaja_Khizr"},
    {id:89,name:"Kabuli Bagh Mosque",country:"India",state:"Delhi NCR",city:"Panipat",dynasty:"Mughal Empire",year:1527,lat:29.40,lng:76.98,desc:"A mosque built by Babur.",wiki:"https://en.wikipedia.org/wiki/Kabuli_Bagh_Mosque"},
    {id:90,name:"Ibrahim Lodi's Tomb",country:"India",state:"Delhi NCR",city:"Panipat",dynasty:"Lodi Dynasty",year:1526,lat:29.39,lng:76.97,desc:"The tomb of the last Sultan of Delhi.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Ibrahim_Lodi"},
    {id:91,name:"Third Battle of Panipat Memorial",country:"India",state:"Delhi NCR",city:"Panipat",dynasty:"British Raj",year:1850,lat:29.38,lng:76.99,desc:"A memorial obelisk.",wiki:"https://en.wikipedia.org/wiki/Third_Battle_of_Panipat"},
    {id:92,name:"Gateway of Old Mughal Sarai",country:"India",state:"Delhi NCR",city:"Karnal",dynasty:"Mughal Empire",year:1600,lat:29.68,lng:76.99,desc:"A remnant of a historic caravanserai.",wiki:"https://en.wikipedia.org/wiki/Karnal"},
    {id:93,name:"Kalander Shah Tomb",country:"India",state:"Delhi NCR",city:"Karnal",dynasty:"Mughal Empire",year:1600,lat:29.68,lng:76.98,desc:"The marble tomb of the revered Sufi saint.",wiki:"https://en.wikipedia.org/wiki/Karnal"},
    {id:94,name:"Miran Sahib Tomb",country:"India",state:"Delhi NCR",city:"Karnal",dynasty:"Mughal Empire",year:1600,lat:29.68,lng:76.97,desc:"The tomb of a revered saintly figure.",wiki:"https://en.wikipedia.org/wiki/Karnal"},
    {id:95,name:"Shahjahan ki Baoli",country:"India",state:"Delhi NCR",city:"Rohtak",dynasty:"Mughal Empire",year:1650,lat:28.96,lng:76.29,desc:"An ornate stepped well.",wiki:"https://en.wikipedia.org/wiki/Meham"},
    {id:96,name:"Bada Talab",country:"India",state:"Delhi NCR",city:"Rewari",dynasty:"Rewari State",year:1810,lat:28.19,lng:76.61,desc:"A historic pond built by Rao Tej Singh.",wiki:"https://en.wikipedia.org/wiki/Rewari"},
    {id:97,name:"Fort of Bawal",country:"India",state:"Delhi NCR",city:"Rewari",dynasty:"Regional State",year:1800,lat:28.08,lng:76.58,desc:"A stronghold constructed during the regional states' era.",wiki:"https://en.wikipedia.org/wiki/Bawal"},
    {id:98,name:"Red Mosque",country:"India",state:"Delhi NCR",city:"Rewari",dynasty:"Mughal Empire",year:1570,lat:28.19,lng:76.62,desc:"A Mughal mosque built during the reign of Akbar.",wiki:"https://en.wikipedia.org/wiki/Rewari"},
    {id:99,name:"Humayun Mosque",country:"India",state:"Delhi NCR",city:"Fatehabad",dynasty:"Mughal Empire",year:1530,lat:29.51,lng:75.45,desc:"A historic mosque.",wiki:"https://en.wikipedia.org/wiki/Fatehabad,_Haryana"},
    {id:100,name:"Fatehabad Remains",country:"India",state:"Delhi NCR",city:"Fatehabad",dynasty:"Tughlaq Dynasty",year:1350,lat:29.51,lng:75.45,desc:"Historical remains of the city.",wiki:"https://en.wikipedia.org/wiki/Fatehabad,_Haryana"},
    {id:101,name:"Tomb of Bu-Ali Shah Qalandar",country:"India",state:"Delhi NCR",city:"Panipat",dynasty:"Regional State",year:1750,lat:29.39,lng:76.97,desc:"The shrine of the celebrated Sufi saint.",wiki:"https://en.wikipedia.org/wiki/Panipat"},
    {id:102,name:"Salar Gunj Gate",country:"India",state:"Delhi NCR",city:"Panipat",dynasty:"Regional State",year:1750,lat:29.39,lng:76.97,desc:"A historic city gate.",wiki:"https://en.wikipedia.org/wiki/Panipat"},
    {id:103,name:"Bab-i-Faiz Gate",country:"India",state:"Delhi NCR",city:"Panipat",dynasty:"Regional State",year:1750,lat:29.39,lng:76.98,desc:"Another prominent historic gateway.",wiki:"https://en.wikipedia.org/wiki/Panipat"},
    {id:104,name:"Lohagarh Fort",country:"India",state:"Delhi NCR",city:"Bharatpur",dynasty:"Jat Kingdom",year:1732,lat:27.21,lng:77.49,desc:"The 'Iron Fort'.",wiki:"https://en.wikipedia.org/wiki/Lohagarh_Fort"},
    {id:105,name:"Bharatpur Palace & Museum",country:"India",state:"Delhi NCR",city:"Bharatpur",dynasty:"Jat Kingdom",year:1730,lat:27.22,lng:77.49,desc:"A rich repository of the region's royal past.",wiki:"https://en.wikipedia.org/wiki/Bharatpur,_Rajasthan"},
    {id:106,name:"Ganga Mandir",country:"India",state:"Delhi NCR",city:"Bharatpur",dynasty:"Jat Kingdom",year:1845,lat:27.21,lng:77.49,desc:"A beautiful temple featuring exquisite carvings.",wiki:"https://en.wikipedia.org/wiki/Bharatpur,_Rajasthan"},
    {id:107,name:"Bala Qila",country:"India",state:"Delhi NCR",city:"Alwar",dynasty:"Alwar State",year:1775,lat:27.57,lng:76.58,desc:"A formidable hill fort.",wiki:"https://en.wikipedia.org/wiki/Alwar_fort"},
    {id:108,name:"Alwar City Palace",country:"India",state:"Delhi NCR",city:"Alwar",dynasty:"Alwar State",year:1793,lat:27.57,lng:76.59,desc:"An architectural marvel.",wiki:"https://en.wikipedia.org/wiki/Alwar"},
    {id:109,name:"Moosi Maharani Ki Chhatri",country:"India",state:"Delhi NCR",city:"Alwar",dynasty:"Alwar State",year:1815,lat:27.57,lng:76.59,desc:"A striking cenotaph.",wiki:"https://en.wikipedia.org/wiki/Alwar"},
    {id:110,name:"Vidur Tila",country:"India",state:"Delhi NCR",city:"Meerut",dynasty:"Mahabharata",year:-1000,lat:29.17,lng:78.02,desc:"An ancient mound associated with Vidura.",wiki:"https://en.wikipedia.org/wiki/Hastinapur"},
    {id:111,name:"Karna Temple",country:"India",state:"Delhi NCR",city:"Meerut",dynasty:"Mahabharata",year:-1000,lat:29.17,lng:78.02,desc:"A temple dedicated to Karna.",wiki:"https://en.wikipedia.org/wiki/Hastinapur"},
    {id:112,name:"Pandaveshwar Temple",country:"India",state:"Delhi NCR",city:"Meerut",dynasty:"Mahabharata",year:-1000,lat:29.17,lng:78.02,desc:"A Shiva temple linked to the Pandavas.",wiki:"https://en.wikipedia.org/wiki/Hastinapur"},
    {id:113,name:"Digambar Jain Bada Mandir",country:"India",state:"Delhi NCR",city:"Meerut",dynasty:"Jain",year:1801,lat:29.17,lng:78.02,desc:"A major pilgrimage center.",wiki:"https://en.wikipedia.org/wiki/Hastinapur"},
    {id:114,name:"Shwetambar Jain Temple",country:"India",state:"Delhi NCR",city:"Meerut",dynasty:"Jain",year:1801,lat:29.17,lng:78.02,desc:"A significant temple in Hastinapur.",wiki:"https://en.wikipedia.org/wiki/Hastinapur"},
    {id:115,name:"Jambudweep Jain Temple",country:"India",state:"Delhi NCR",city:"Meerut",dynasty:"Jain",year:1985,lat:29.17,lng:78.02,desc:"A modern temple complex.",wiki:"https://en.wikipedia.org/wiki/Jambudweep"},

    // HARYANA — OUTSIDE NCR[cite: 8]
    {id:116,name:"Agroha Archaeological Site",country:"India",state:"Haryana",city:"Hisar",dynasty:"Harappan Civilization",year:-2600,lat:29.33,lng:75.62,desc:"The ancient capital of Maharaja Agrasen.",wiki:"https://en.wikipedia.org/wiki/Agroha_Mound"},
    {id:117,name:"Firoz Shah Palace",country:"India",state:"Haryana",city:"Hisar",dynasty:"Tughlaq Dynasty",year:1354,lat:29.16,lng:75.72,desc:"A palace complex built by Firoz Shah Tughlaq.",wiki:"https://en.wikipedia.org/wiki/Firoz_Shah_Palace_Complex"},
    {id:118,name:"Gujari Mahal",country:"India",state:"Haryana",city:"Hisar",dynasty:"Tughlaq Dynasty",year:1354,lat:29.16,lng:75.72,desc:"Built by Firoz Shah Tughlaq.",wiki:"https://en.wikipedia.org/wiki/Firoz_Shah_Palace_Complex"},
    {id:119,name:"Lat Ki Masjid",country:"India",state:"Haryana",city:"Hisar",dynasty:"Tughlaq Dynasty",year:1354,lat:29.16,lng:75.72,desc:"A Tughlaq-era mosque.",wiki:"https://en.wikipedia.org/wiki/Lat_Ki_Masjid"},
    {id:120,name:"Barsi Gate",country:"India",state:"Haryana",city:"Hisar",dynasty:"Tughlaq Dynasty",year:1303,lat:29.10,lng:75.96,desc:"The southern historic gate of the Hansi fort.",wiki:"https://en.wikipedia.org/wiki/Hansi"},
    {id:121,name:"Fort of Hansi",country:"India",state:"Haryana",city:"Hisar",dynasty:"Tughlaq Dynasty",year:1300,lat:29.10,lng:75.96,desc:"The historic Asigarh Fort.",wiki:"https://en.wikipedia.org/wiki/Asigarh_Fort"},
    {id:122,name:"Ancient Gumbad",country:"India",state:"Haryana",city:"Hisar",dynasty:"Tughlaq Dynasty",year:1350,lat:29.16,lng:75.72,desc:"An old domed structure.",wiki:"https://en.wikipedia.org/wiki/Hisar_(city)"},
    {id:123,name:"Jahaj Kothi",country:"India",state:"Haryana",city:"Hisar",dynasty:"Regional State",year:1796,lat:29.16,lng:75.73,desc:"A building later used by George Thomas.",wiki:"https://en.wikipedia.org/wiki/Jahaj_Kothi_Museum"},
    {id:124,name:"Tomb of Khawaja Pir",country:"India",state:"Haryana",city:"Sirsa",dynasty:"Medieval Islamic",year:1300,lat:29.53,lng:75.02,desc:"The tomb of a highly revered saint.",wiki:"https://en.wikipedia.org/wiki/Sirsa,_Haryana"},
    {id:125,name:"Jama Masjid",country:"India",state:"Haryana",city:"Sirsa",dynasty:"Medieval Islamic",year:1300,lat:29.53,lng:75.02,desc:"A historic mosque.",wiki:"https://en.wikipedia.org/wiki/Sirsa,_Haryana"},
    {id:126,name:"Dera Baba Sarsai Nath",country:"India",state:"Haryana",city:"Sirsa",dynasty:"Nath tradition",year:1300,lat:29.53,lng:75.02,desc:"An ancient shrine.",wiki:"https://en.wikipedia.org/wiki/Sirsa,_Haryana"},
    {id:127,name:"Ther Mound",country:"India",state:"Haryana",city:"Sirsa",dynasty:"Ancient",year:-600,lat:29.53,lng:75.02,desc:"An ancient archaeological mound.",wiki:"https://en.wikipedia.org/wiki/Sirsa,_Haryana"},
    {id:128,name:"Ashokan Pillar",country:"India",state:"Haryana",city:"Fatehabad",dynasty:"Tughlaq Dynasty",year:1350,lat:29.51,lng:75.45,desc:"An Ashokan pillar re-erected.",wiki:"https://en.wikipedia.org/wiki/Fatehabad,_Haryana"},
    {id:129,name:"Lat of Feroz Shah",country:"India",state:"Haryana",city:"Fatehabad",dynasty:"Tughlaq Dynasty",year:1351,lat:29.51,lng:75.45,desc:"A victory pillar.",wiki:"https://en.wikipedia.org/wiki/Fatehabad,_Haryana"},
    {id:130,name:"Humayun Mosque",country:"India",state:"Haryana",city:"Fatehabad",dynasty:"Mughal Empire",year:1530,lat:29.51,lng:75.45,desc:"A historic mosque.",wiki:"https://en.wikipedia.org/wiki/Fatehabad,_Haryana"},
    {id:131,name:"Ancient Site of Sugh",country:"India",state:"Haryana",city:"Yamunanagar",dynasty:"Ancient",year:-300,lat:30.14,lng:77.36,desc:"The ruins of the ancient town.",wiki:"https://en.wikipedia.org/wiki/Sugh_Ancient_Mound"},
    {id:132,name:"Adibadri Archaeological Site",country:"India",state:"Haryana",city:"Yamunanagar",dynasty:"Ancient",year:800,lat:30.27,lng:77.27,desc:"A site associated with the mythical Sarasvati river.",wiki:"https://en.wikipedia.org/wiki/Adi_Badri,_Haryana"},
    {id:133,name:"Gurudwara Kapal Mochan",country:"India",state:"Haryana",city:"Yamunanagar",dynasty:"Sikh heritage",year:1687,lat:30.30,lng:77.32,desc:"A historic Sikh shrine.",wiki:"https://en.wikipedia.org/wiki/Kapal_Mochan"},
    {id:134,name:"Raja Harsha ka Tila",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Early Medieval",year:600,lat:29.96,lng:76.81,desc:"An extensive mound.",wiki:"https://en.wikipedia.org/wiki/Harsh_Ka_Tila"},
    {id:135,name:"Raja Karna ka Qila",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Early Medieval",year:600,lat:29.96,lng:76.81,desc:"A mound linked to Karna.",wiki:"https://en.wikipedia.org/wiki/Kurukshetra"},
    {id:136,name:"Vishvamitra Ka Tila",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Gurjara-Pratihara",year:800,lat:29.98,lng:76.58,desc:"An ancient mound.",wiki:"https://en.wikipedia.org/wiki/Pehowa"},
    {id:137,name:"Sheikh Chilli's Tomb",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Mughal Empire",year:1650,lat:29.96,lng:76.81,desc:"A beautiful marble tomb complex.",wiki:"https://en.wikipedia.org/wiki/Sheikh_Chilli's_Tomb"},
    {id:138,name:"Pathar Masjid",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Mughal Empire",year:1650,lat:29.96,lng:76.81,desc:"A small red sandstone mosque.",wiki:"https://en.wikipedia.org/wiki/Thanesar"},
    {id:139,name:"Sthaneshwara Mahadev Temple",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Hindu Religious",year:1000,lat:29.97,lng:76.81,desc:"An ancient temple.",wiki:"https://en.wikipedia.org/wiki/Sthaneshwar_Mahadev_Temple"},
    {id:140,name:"Brahma Sarovar",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Hindu Religious",year:1000,lat:29.96,lng:76.82,desc:"An ancient water tank.",wiki:"https://en.wikipedia.org/wiki/Brahma_Sarovar"},
    {id:141,name:"Jyotisar",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Hindu Religious",year:1000,lat:29.95,lng:76.76,desc:"The traditional site of the Bhagavad Gita.",wiki:"https://en.wikipedia.org/wiki/Jyotisar"},
    {id:142,name:"Gurudwara Mastgarh",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Sikh heritage",year:1700,lat:29.96,lng:76.82,desc:"A prominent historic Gurudwara.",wiki:"https://en.wikipedia.org/wiki/Kurukshetra"},
    {id:143,name:"Nabha House",country:"India",state:"Haryana",city:"Kurukshetra",dynasty:"Regional State",year:1850,lat:29.96,lng:76.82,desc:"A historic mansion.",wiki:"https://en.wikipedia.org/wiki/Kurukshetra"},
    {id:144,name:"Old Fort",country:"India",state:"Haryana",city:"Kaithal",dynasty:"Medieval",year:1767,lat:29.80,lng:76.39,desc:"Remains of an old fort.",wiki:"https://en.wikipedia.org/wiki/Kaithal"},
    {id:145,name:"Raja Amar Singh structures",country:"India",state:"Haryana",city:"Kaithal",dynasty:"Sikh",year:1780,lat:29.80,lng:76.39,desc:"Historic buildings.",wiki:"https://en.wikipedia.org/wiki/Kaithal"},
    {id:146,name:"Fort of Loharu",country:"India",state:"Haryana",city:"Bhiwani",dynasty:"Rajput",year:1570,lat:28.43,lng:75.81,desc:"An impressive fortress.",wiki:"https://en.wikipedia.org/wiki/Loharu"},
    {id:147,name:"Ancient Site of Naurangabad",country:"India",state:"Haryana",city:"Bhiwani",dynasty:"Ancient",year:-300,lat:28.80,lng:76.13,desc:"An archaeological site.",wiki:"https://en.wikipedia.org/wiki/Bhiwani_district"},
    {id:148,name:"Palace of Dadri",country:"India",state:"Haryana",city:"Charkhi Dadri",dynasty:"Regional State",year:1850,lat:28.59,lng:76.26,desc:"The historic palace structure.",wiki:"https://en.wikipedia.org/wiki/Charkhi_Dadri"},
    {id:149,name:"Prithviraj Ki Kutcheri",country:"India",state:"Haryana",city:"Bhiwani",dynasty:"Rajput",year:1100,lat:28.79,lng:76.13,desc:"A historic baradari.",wiki:"https://en.wikipedia.org/wiki/Bhiwani"},
    {id:150,name:"Sanghol Ancient Site",country:"India",state:"Punjab",city:"Fatehgarh Sahib",dynasty:"Buddhist",year:200,lat:30.79,lng:76.39,desc:"An ancient site.",wiki:"https://en.wikipedia.org/wiki/Sanghol"},
// Wait for Part 2 and append it to this array!    
{id:151,name:"Sanghol Buddhist Stupa Site SGL-11",country:"India",state:"Punjab",city:"Fatehgarh Sahib",dynasty:"Buddhist",year:200,lat:30.79,lng:76.39,desc:"A significant excavated Buddhist stupa site.",wiki:"https://en.wikipedia.org/wiki/Sanghol"},
    {id:152,name:"Ancient Mound of Ropar",country:"India",state:"Punjab",city:"Rupnagar",dynasty:"Ancient",year:-2000,lat:30.97,lng:76.52,desc:"An important Harappan archaeological site.",wiki:"https://en.wikipedia.org/wiki/Rupnagar"},
    {id:153,name:"Ancient Site of Sunet",country:"India",state:"Punjab",city:"Ludhiana",dynasty:"Ancient",year:-500,lat:30.89,lng:75.81,desc:"An extensive ancient mound yielding artifacts.",wiki:"https://en.wikipedia.org/wiki/Ludhiana"},
    {id:154,name:"Takht-i-Akbar",country:"India",state:"Punjab",city:"Gurdaspur",dynasty:"Mughal Empire",year:1556,lat:32.00,lng:75.14,desc:"The coronation site of Mughal Emperor Akbar.",wiki:"https://en.wikipedia.org/wiki/Kalanaur,_Punjab"},
    {id:155,name:"Anarkali Baradari",country:"India",state:"Punjab",city:"Gurdaspur",dynasty:"Mughal Empire",year:1590,lat:31.81,lng:75.20,desc:"A Mughal-era pavilion built in Batala.",wiki:"https://en.wikipedia.org/wiki/Batala"},
    {id:156,name:"Shamsher Khan's Tomb",country:"India",state:"Punjab",city:"Gurdaspur",dynasty:"Mughal Empire",year:1590,lat:31.81,lng:75.20,desc:"The beautiful tomb of Akbar's foster brother.",wiki:"https://en.wikipedia.org/wiki/Batala"},
    {id:157,name:"Mughal Bridge",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1610,lat:31.13,lng:75.39,desc:"A historic stone bridge from the Mughal era.",wiki:"https://en.wikipedia.org/wiki/Nakodar"},
    {id:158,name:"Old Sarai & Gateway",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1610,lat:31.13,lng:75.39,desc:"A grand caravanserai gateway at Dakhni.",wiki:"https://en.wikipedia.org/wiki/Nakodar"},
    {id:159,name:"Sarai & Gateway",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1618,lat:31.09,lng:75.58,desc:"A majestic serai built under Noor Jahan's orders.",wiki:"https://en.wikipedia.org/wiki/Nurmahal"},
    {id:160,name:"Mughal Kos Minar",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"A Mughal milestone used to mark distance.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:161,name:"Tombs of Muhammad Momin and Haji Jamal",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1612,lat:31.13,lng:75.47,desc:"Beautifully adorned Mughal-era tombs.",wiki:"https://en.wikipedia.org/wiki/Nakodar"},
    {id:162,name:"Seven Kos Minar",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"Historic Mughal milestones on the Grand Trunk Road.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:163,name:"Seven Kos Minar (Birpind)",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:164,name:"Seven Kos Minar (Chima Kalan)",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:165,name:"Seven Kos Minar (Dakhni)",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:166,name:"Seven Kos Minar (Tut Kalan)",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:167,name:"Seven Kos Minar (Upal)",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Mughal Empire",year:1620,lat:31.13,lng:75.47,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:168,name:"Seven Kos Minar (Dhandari Kalan)",country:"India",state:"Punjab",city:"Ludhiana",dynasty:"Mughal Empire",year:1620,lat:30.88,lng:75.88,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:169,name:"Kos Minar near Ghungrali Rajputan",country:"India",state:"Punjab",city:"Ludhiana",dynasty:"Mughal Empire",year:1620,lat:30.88,lng:75.88,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:170,name:"Kos Minar near Lashkari Khan Sarai",country:"India",state:"Punjab",city:"Ludhiana",dynasty:"Mughal Empire",year:1620,lat:30.88,lng:75.88,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:171,name:"Kos Minar near Sherpur Kalan",country:"India",state:"Punjab",city:"Ludhiana",dynasty:"Mughal Empire",year:1620,lat:30.88,lng:75.88,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:172,name:"Kos Minar near Sunnahwal",country:"India",state:"Punjab",city:"Ludhiana",dynasty:"Mughal Empire",year:1620,lat:30.88,lng:75.88,desc:"A historic Mughal milestone.",wiki:"https://en.wikipedia.org/wiki/Kos_Minar"},
    {id:173,name:"Old Sarai Gateway at Amanat Khan",country:"India",state:"Punjab",city:"Tarn Taran",dynasty:"Mughal Empire",year:1640,lat:31.32,lng:74.83,desc:"A Mughal serai gateway noted for its beautiful tile work.",wiki:"https://en.wikipedia.org/wiki/Sarai_Amanat_Khan"},
    {id:174,name:"Old Sarai Gateway at Fatehabad",country:"India",state:"Punjab",city:"Tarn Taran",dynasty:"Mughal Empire",year:1640,lat:31.32,lng:74.83,desc:"A grand entry to the historic serai.",wiki:"https://en.wikipedia.org/wiki/Tarn_Taran_Sahib"},
    {id:175,name:"Maharaja Ranjit Singh Fort",country:"India",state:"Punjab",city:"Jalandhar",dynasty:"Sikh Empire",year:1809,lat:31.02,lng:75.78,desc:"A fort in Phillaur used as a military training center.",wiki:"https://en.wikipedia.org/wiki/Phillaur_Fort"},
    {id:176,name:"Ram Bagh Gate",country:"India",state:"Punjab",city:"Amritsar",dynasty:"Sikh Empire",year:1820,lat:31.63,lng:74.87,desc:"The only surviving gate of Maharaja Ranjit Singh's walled city.",wiki:"https://en.wikipedia.org/wiki/Amritsar"},
    {id:177,name:"Summer Palace of Maharaja Ranjit Singh",country:"India",state:"Punjab",city:"Amritsar",dynasty:"Sikh Empire",year:1818,lat:31.63,lng:74.87,desc:"The summer residence of the Sikh Emperor in Ram Bagh.",wiki:"https://en.wikipedia.org/wiki/Amritsar"},
    {id:178,name:"Bathinda Fort / Qila Mubarak",country:"India",state:"Punjab",city:"Bathinda",dynasty:"Sikh Empire",year:1750,lat:30.21,lng:74.94,desc:"An ancient fort later utilized by the Sikh Empire.",wiki:"https://en.wikipedia.org/wiki/Qila_Mubarak"},
    {id:179,name:"Gobindgarh Fort",country:"India",state:"Punjab",city:"Amritsar",dynasty:"Sikh Empire",year:1760,lat:31.63,lng:74.87,desc:"A historic military fort in Amritsar.",wiki:"https://en.wikipedia.org/wiki/Gobindgarh_Fort"},
    {id:180,name:"Akal Takht Sahib",country:"India",state:"Punjab",city:"Amritsar",dynasty:"Sikh Empire",year:1606,lat:31.62,lng:74.87,desc:"The highest seat of earthly authority of the Khalsa.",wiki:"https://en.wikipedia.org/wiki/Akal_Takht"},
    {id:181,name:"Golden Temple / Harmandir Sahib",country:"India",state:"Punjab",city:"Amritsar",dynasty:"Sikh religious",year:1589,lat:31.62,lng:74.87,desc:"The preeminent spiritual site of Sikhism.",wiki:"https://en.wikipedia.org/wiki/Golden_Temple"},
    {id:182,name:"Durgiana Temple complex",country:"India",state:"Punjab",city:"Amritsar",dynasty:"Sikh / Regional",year:1921,lat:31.63,lng:74.87,desc:"A premier Hindu temple of Punjab.",wiki:"https://en.wikipedia.org/wiki/Durgiana_Temple"},
    {id:183,name:"Qila Mubarak / Patiala Fort",country:"India",state:"Punjab",city:"Patiala",dynasty:"Patiala State",year:1763,lat:30.33,lng:76.39,desc:"The magnificent royal residence of the Patiala dynasty.",wiki:"https://en.wikipedia.org/wiki/Qila_Mubarak_(Patiala)"},
    {id:184,name:"Moti Bagh Palace",country:"India",state:"Punjab",city:"Patiala",dynasty:"Patiala State",year:1840,lat:30.33,lng:76.39,desc:"One of the largest royal residences in Asia.",wiki:"https://en.wikipedia.org/wiki/Moti_Bagh_Palace"},
    {id:185,name:"Sheesh Mahal",country:"India",state:"Punjab",city:"Patiala",dynasty:"Patiala State",year:1847,lat:30.33,lng:76.39,desc:"The 'Palace of Mirrors' built by Maharaja Narinder Singh.",wiki:"https://en.wikipedia.org/wiki/Sheesh_Mahal_(Patiala)"},
    {id:186,name:"Baradari Gardens",country:"India",state:"Punjab",city:"Patiala",dynasty:"Patiala State",year:1876,lat:30.33,lng:76.39,desc:"Lush gardens featuring colonial-era architecture.",wiki:"https://en.wikipedia.org/wiki/Baradari_Gardens_(Patiala)"},
    {id:187,name:"Jagatjit Palace",country:"India",state:"Punjab",city:"Kapurthala",dynasty:"Kapurthala State",year:1908,lat:31.38,lng:75.38,desc:"A spectacular palace inspired by the Palace of Versailles.",wiki:"https://en.wikipedia.org/wiki/Jagatjit_Palace"},
    {id:188,name:"Christ Church",country:"India",state:"Punjab",city:"Kapurthala",dynasty:"British Raj",year:1856,lat:31.38,lng:75.38,desc:"A historic church serving as a monument of colonial heritage.",wiki:"https://en.wikipedia.org/wiki/Kapurthala"},

    // UTTAR PRADESH[cite: 9]
    {id:189,name:"Ashoka Pillar & Archaeological Site",country:"India",state:"Uttar Pradesh",city:"Varanasi",dynasty:"Mauryan",year:-250,lat:25.38,lng:83.02,desc:"Ancient Mauryan pillar site where Buddha gave his first sermon.",wiki:"https://en.wikipedia.org/wiki/Pillars_of_Ashoka"},
    {id:190,name:"Dhamek Stupa",country:"India",state:"Uttar Pradesh",city:"Varanasi",dynasty:"Gupta",year:500,lat:25.38,lng:83.02,desc:"A massive stupa in Sarnath.",wiki:"https://en.wikipedia.org/wiki/Dhamek_Stupa"},
    {id:191,name:"Dharmarajika Stupa",country:"India",state:"Uttar Pradesh",city:"Varanasi",dynasty:"Mauryan",year:-250,lat:25.38,lng:83.02,desc:"The ruins of a large stupa built by Emperor Ashoka.",wiki:"https://en.wikipedia.org/wiki/Dharmarajika_Stupa"},
    {id:192,name:"Chaukhandi Stupa",country:"India",state:"Uttar Pradesh",city:"Varanasi",dynasty:"Gupta",year:500,lat:25.37,lng:83.02,desc:"An ancient Buddhist stupa with an octagonal tower.",wiki:"https://en.wikipedia.org/wiki/Chaukhandi_Stupa"},
    {id:193,name:"Mahaparinirvana Temple",country:"India",state:"Uttar Pradesh",city:"Kushinagar",dynasty:"Buddhist",year:-250,lat:26.74,lng:83.89,desc:"The sacred site marking Buddha's Mahaparinirvana.",wiki:"https://en.wikipedia.org/wiki/Kushinagar"},
    {id:194,name:"Ramabhar Stupa",country:"India",state:"Uttar Pradesh",city:"Kushinagar",dynasty:"Buddhist",year:-250,lat:26.73,lng:83.90,desc:"A large stupa marking the cremation site of Lord Buddha.",wiki:"https://en.wikipedia.org/wiki/Ramabhar_Stupa"},
    {id:195,name:"Jetavana Monastery",country:"India",state:"Uttar Pradesh",city:"Shravasti",dynasty:"Buddhist",year:600,lat:27.51,lng:82.05,desc:"One of the most famous ancient Buddhist monasteries.",wiki:"https://en.wikipedia.org/wiki/Jetavana"},
    {id:196,name:"Kaushambi Archaeological Site",country:"India",state:"Uttar Pradesh",city:"Kaushambi",dynasty:"Mauryan",year:-250,lat:25.34,lng:81.38,desc:"The ruins of the ancient city.",wiki:"https://en.wikipedia.org/wiki/Kosambi"},
    {id:197,name:"Ashoka Pillar at Kaushambi",country:"India",state:"Uttar Pradesh",city:"Kaushambi",dynasty:"Mauryan",year:-250,lat:25.34,lng:81.38,desc:"An ancient Ashokan edict pillar.",wiki:"https://en.wikipedia.org/wiki/Pillars_of_Ashoka"},
    {id:198,name:"Sankisa Archaeological Site",country:"India",state:"Uttar Pradesh",city:"Farrukhabad",dynasty:"Mauryan",year:-250,lat:27.33,lng:79.26,desc:"An ancient Buddhist pilgrimage site.",wiki:"https://en.wikipedia.org/wiki/Sankassa"},
    {id:199,name:"Agra Fort",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1565,lat:27.18,lng:78.02,desc:"The historic main residence of the Mughal emperors.",wiki:"https://en.wikipedia.org/wiki/Agra_Fort"},
    {id:200,name:"Ram Bagh",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1528,lat:27.20,lng:78.03,desc:"The oldest Mughal garden in India.",wiki:"https://en.wikipedia.org/wiki/Ram_Bagh,_Agra"},
    {id:201,name:"Fatehpur Sikri",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1571,lat:27.09,lng:77.66,desc:"The brief capital of the Mughal Empire.",wiki:"https://en.wikipedia.org/wiki/Fatehpur_Sikri"},
    {id:202,name:"Buland Darwaza",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1575,lat:27.09,lng:77.66,desc:"The highest gateway in the world.",wiki:"https://en.wikipedia.org/wiki/Buland_Darwaza"},
    {id:203,name:"Jama Masjid",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1571,lat:27.09,lng:77.66,desc:"A congregational mosque built by Akbar.",wiki:"https://en.wikipedia.org/wiki/Jama_Masjid,_Fatehpur_Sikri"},
    {id:204,name:"Panch Mahal",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1575,lat:27.09,lng:77.66,desc:"A five-story palatial structure in Fatehpur Sikri.",wiki:"https://en.wikipedia.org/wiki/Panch_Mahal,_Fatehpur_Sikri"},
    {id:205,name:"Akbar's Tomb",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1605,lat:27.22,lng:77.95,desc:"The majestic red sandstone tomb in Sikandra.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Akbar"},
    {id:206,name:"Itimad-ud-Daulah's Tomb",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1622,lat:27.19,lng:78.03,desc:"A delicate marble mausoleum often described as the 'Baby Taj'.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_I%27tim%C4%81d-ud-Daulah"},
    {id:207,name:"Taj Mahal",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1632,lat:27.17,lng:78.04,desc:"The iconic ivory-white marble mausoleum.",wiki:"https://en.wikipedia.org/wiki/Taj_Mahal"},
    {id:208,name:"Chini ka Rauza",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1635,lat:27.19,lng:78.03,desc:"A funerary monument notable for glazed tile work.",wiki:"https://en.wikipedia.org/wiki/Chini_Ka_Rauza"},
    {id:209,name:"Mehtab Bagh",country:"India",state:"Uttar Pradesh",city:"Agra",dynasty:"Mughal Empire",year:1630,lat:27.17,lng:78.04,desc:"A charbagh complex across the river from the Taj Mahal.",wiki:"https://en.wikipedia.org/wiki/Mehtab_Bagh"},
    {id:210,name:"Allahabad Fort",country:"India",state:"Uttar Pradesh",city:"Prayagraj",dynasty:"Mughal Empire",year:1583,lat:25.43,lng:81.87,desc:"A large fort built by Emperor Akbar.",wiki:"https://en.wikipedia.org/wiki/Allahabad_Fort"},
    {id:211,name:"Khusro Bagh",country:"India",state:"Uttar Pradesh",city:"Prayagraj",dynasty:"Mughal Empire",year:1600,lat:25.44,lng:81.81,desc:"A large walled garden housing tombs of Jahangir's family.",wiki:"https://en.wikipedia.org/wiki/Khusro_Bagh"},
    {id:212,name:"Chunar Fort",country:"India",state:"Uttar Pradesh",city:"Mirzapur",dynasty:"Mughal Empire",year:1550,lat:25.12,lng:82.87,desc:"A historic fort commanding the Ganges river.",wiki:"https://en.wikipedia.org/wiki/Chunar_Fort"},
    {id:213,name:"Kalinjar Fort",country:"India",state:"Uttar Pradesh",city:"Banda",dynasty:"Chandela Dynasty",year:1000,lat:25.01,lng:80.48,desc:"An ancient fortress-city.",wiki:"https://en.wikipedia.org/wiki/Kalinjar_Fort"},
    {id:214,name:"Neelkanth Temple",country:"India",state:"Uttar Pradesh",city:"Banda",dynasty:"Chandela Dynasty",year:1000,lat:25.01,lng:80.48,desc:"A revered Shiva temple within Kalinjar Fort.",wiki:"https://en.wikipedia.org/wiki/Kalinjar_Fort"},
    {id:215,name:"Kakra Math",country:"India",state:"Uttar Pradesh",city:"Mahoba",dynasty:"Chandela Dynasty",year:1000,lat:25.29,lng:79.87,desc:"An ancient Chandela era temple.",wiki:"https://en.wikipedia.org/wiki/Mahoba"},
    {id:216,name:"Jhansi Fort",country:"India",state:"Uttar Pradesh",city:"Jhansi",dynasty:"Mughal Empire",year:1613,lat:25.46,lng:78.58,desc:"A massive fortress situated on a hilltop.",wiki:"https://en.wikipedia.org/wiki/Jhansi_Fort"},
    {id:217,name:"Atala Masjid",country:"India",state:"Uttar Pradesh",city:"Jaunpur",dynasty:"Sharqi Sultanate",year:1408,lat:25.75,lng:82.68,desc:"A distinctive 15th-century mosque.",wiki:"https://en.wikipedia.org/wiki/Atala_Masjid,_Jaunpur"},
    {id:218,name:"Jama Masjid",country:"India",state:"Uttar Pradesh",city:"Jaunpur",dynasty:"Sharqi Sultanate",year:1470,lat:25.74,lng:82.68,desc:"A monumental 15th-century Friday mosque.",wiki:"https://en.wikipedia.org/wiki/Jama_Masjid,_Jaunpur"},
    {id:219,name:"Lal Darwaza Mosque",country:"India",state:"Uttar Pradesh",city:"Jaunpur",dynasty:"Sharqi Sultanate",year:1447,lat:25.74,lng:82.68,desc:"A Sharqi-era mosque.",wiki:"https://en.wikipedia.org/wiki/Lal_Darwaza_Masjid"},
    {id:220,name:"Shahi Bridge",country:"India",state:"Uttar Pradesh",city:"Jaunpur",dynasty:"Sharqi Sultanate",year:1568,lat:25.74,lng:82.68,desc:"A 16th-century bridge spanning the Gomti River.",wiki:"https://en.wikipedia.org/wiki/Shahi_Bridge,_Jaunpur"},
    {id:221,name:"Bara Imambara",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1784,lat:26.86,lng:80.91,desc:"A grand imambara complex known for its labyrinth.",wiki:"https://en.wikipedia.org/wiki/Bara_Imambara"},
    {id:222,name:"Rumi Darwaza",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1784,lat:26.86,lng:80.91,desc:"An imposing gateway representing Awadhi architecture.",wiki:"https://en.wikipedia.org/wiki/Rumi_Darwaza"},
    {id:223,name:"Asafi Mosque",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1784,lat:26.86,lng:80.91,desc:"A large mosque located inside the Bara Imambara.",wiki:"https://en.wikipedia.org/wiki/Bara_Imambara"},
    {id:224,name:"Shahi Baoli",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1784,lat:26.86,lng:80.91,desc:"An elaborate stepped well in the Bara Imambara.",wiki:"https://en.wikipedia.org/wiki/Bara_Imambara"},
    {id:225,name:"Chota Imambara",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1838,lat:26.87,lng:80.90,desc:"An ornate imambara known as the Palace of Lights.",wiki:"https://en.wikipedia.org/wiki/Chota_Imambara"},
    {id:226,name:"Husainabad Clock Tower",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1881,lat:26.87,lng:80.90,desc:"The tallest clock tower in India.",wiki:"https://en.wikipedia.org/wiki/Husainabad_Clock_Tower"},
    {id:227,name:"Chattar Manzil",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1798,lat:26.85,lng:80.93,desc:"A palace characterized by its umbrella-shaped domes.",wiki:"https://en.wikipedia.org/wiki/Chattar_Manzil"},
    {id:228,name:"Dilkusha Kothi",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1800,lat:26.83,lng:80.96,desc:"The remains of an English baroque-style palace.",wiki:"https://en.wikipedia.org/wiki/Dilkusha_Kothi"},
    {id:229,name:"Residency Complex",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1800,lat:26.86,lng:80.92,desc:"Buildings that served as the residence for the British Resident.",wiki:"https://en.wikipedia.org/wiki/The_Residency,_Lucknow"},
    {id:230,name:"Moti Mahal",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1800,lat:26.85,lng:80.93,desc:"The 'Pearl Palace' built on the banks of the Gomti.",wiki:"https://en.wikipedia.org/wiki/Moti_Mahal,_Lucknow"},
    {id:231,name:"Qaiserbagh Palace Complex",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1850,lat:26.85,lng:80.93,desc:"A large palace complex built by Wajid Ali Shah.",wiki:"https://en.wikipedia.org/wiki/Kaiserbagh"},
    {id:232,name:"Sikandar Bagh",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"Nawab of Awadh",year:1800,lat:26.85,lng:80.95,desc:"A walled villa and garden famous as a site of the 1857 siege.",wiki:"https://en.wikipedia.org/wiki/Sikandar_Bagh"},
    {id:233,name:"British Residency",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"British Raj",year:1857,lat:26.86,lng:80.92,desc:"The ruins marking the historic 1857 Siege of Lucknow.",wiki:"https://en.wikipedia.org/wiki/The_Residency,_Lucknow"},
    {id:234,name:"La Martiniere College",country:"India",state:"Uttar Pradesh",city:"Lucknow",dynasty:"British Raj",year:1845,lat:26.84,lng:80.96,desc:"An educational institution established by Claude Martin.",wiki:"https://en.wikipedia.org/wiki/La_Martiniere_College,_Lucknow"},
    {id:235,name:"All Saints Cathedral",country:"India",state:"Uttar Pradesh",city:"Prayagraj",dynasty:"British Raj",year:1887,lat:25.44,lng:81.82,desc:"A magnificent Anglican cathedral built in Gothic style.",wiki:"https://en.wikipedia.org/wiki/All_Saints_Cathedral,_Prayagraj"},
    {id:236,name:"Anand Bhavan",country:"India",state:"Uttar Pradesh",city:"Prayagraj",dynasty:"British Raj",year:1930,lat:25.46,lng:81.86,desc:"The historic mansion belonging to the Nehru family.",wiki:"https://en.wikipedia.org/wiki/Anand_Bhavan"},
    {id:237,name:"Swaraj Bhavan",country:"India",state:"Uttar Pradesh",city:"Prayagraj",dynasty:"British Raj",year:1920,lat:25.46,lng:81.86,desc:"The original Nehru family home turned political headquarters.",wiki:"https://en.wikipedia.org/wiki/Swaraj_Bhavan"},
    {id:238,name:"Bharat Mata Temple",country:"India",state:"Uttar Pradesh",city:"Varanasi",dynasty:"Independent India",year:1936,lat:25.31,lng:82.98,desc:"A temple featuring a marble map of India.",wiki:"https://en.wikipedia.org/wiki/Bharat_Mata_Mandir"},
    {id:239,name:"Banaras Hindu University",country:"India",state:"Uttar Pradesh",city:"Varanasi",dynasty:"Independent India",year:1916,lat:25.26,lng:82.99,desc:"The historic campus of the prominent Indian university.",wiki:"https://en.wikipedia.org/wiki/Banaras_Hindu_University"},

    // UTTARAKHAND[cite: 9]
    {id:240,name:"Baijnath Temple Group",country:"India",state:"Uttarakhand",city:"Bageshwar",dynasty:"Katyuri Dynasty",year:1000,lat:29.91,lng:79.61,desc:"Ancient stone temples built along the Gomati river.",wiki:"https://en.wikipedia.org/wiki/Baijnath,_Uttarakhand"},
    {id:241,name:"Jageshwar Temple Group",country:"India",state:"Uttarakhand",city:"Almora",dynasty:"Katyuri Dynasty",year:1000,lat:29.63,lng:79.85,desc:"A cluster of over 100 ancient stone temples in a Deodar forest.",wiki:"https://en.wikipedia.org/wiki/Jageshwar"},
    {id:242,name:"Katarmal Sun Temple",country:"India",state:"Uttarakhand",city:"Almora",dynasty:"Katyuri Dynasty",year:900,lat:29.61,lng:79.58,desc:"A 9th-century sun temple.",wiki:"https://en.wikipedia.org/wiki/Katarmal_Sun_Temple"},
    {id:243,name:"Adibadri Temple Group",country:"India",state:"Uttarakhand",city:"Chamoli",dynasty:"Katyuri Dynasty",year:1000,lat:30.15,lng:79.23,desc:"A group of 16 ancient temples.",wiki:"https://en.wikipedia.org/wiki/Adi_Badri,_Uttarakhand"},
    {id:244,name:"Baleshwar Temple Group",country:"India",state:"Uttarakhand",city:"Champawat",dynasty:"Chand Dynasty",year:1300,lat:29.33,lng:80.09,desc:"Ancient temples known for intricate stone carvings.",wiki:"https://en.wikipedia.org/wiki/Baleshwar_Temple,_Champawat"},
    {id:245,name:"Patal Bhubaneswar Cave Temple",country:"India",state:"Uttarakhand",city:"Pithoragarh",dynasty:"Chand Dynasty",year:1300,lat:29.82,lng:80.04,desc:"An extensive limestone cave temple network.",wiki:"https://en.wikipedia.org/wiki/Patal_Bhuvaneshwar"},
    {id:246,name:"Nanda Devi Temple",country:"India",state:"Uttarakhand",city:"Almora",dynasty:"Chand Dynasty",year:1400,lat:29.60,lng:79.66,desc:"A revered temple housing the patron goddess of the Chand kings.",wiki:"https://en.wikipedia.org/wiki/Nanda_Devi_Temple,_Almora"},
    {id:247,name:"Golu Devta Temple",country:"India",state:"Uttarakhand",city:"Almora",dynasty:"Chand Dynasty",year:1600,lat:29.61,lng:79.69,desc:"The legendary temple of Chitai known for hanging bells.",wiki:"https://en.wikipedia.org/wiki/Golu_Devata"},
    {id:248,name:"Kasar Devi Temple",country:"India",state:"Uttarakhand",city:"Almora",dynasty:"Chand Dynasty",year:1600,lat:29.63,lng:79.63,desc:"An ancient shrine located on a ridge above Almora.",wiki:"https://en.wikipedia.org/wiki/Kasar_Devi"},
    {id:249,name:"Khalanga War Memorial",country:"India",state:"Uttarakhand",city:"Dehradun",dynasty:"British Raj",year:1815,lat:30.34,lng:78.07,desc:"A memorial to the Gurkha forces who fought the British.",wiki:"https://en.wikipedia.org/wiki/Battle_of_Nalapani"},
    {id:250,name:"Forest Research Institute",country:"India",state:"Uttarakhand",city:"Dehradun",dynasty:"British Raj",year:1906,lat:30.34,lng:77.99,desc:"A premier institute in a sprawling colonial building.",wiki:"https://en.wikipedia.org/wiki/Forest_Research_Institute_(India)"},
    {id:251,name:"Raj Bhawan (Nainital)",country:"India",state:"Uttarakhand",city:"Nainital",dynasty:"British Raj",year:1897,lat:29.38,lng:79.46,desc:"The Governor's House, resembling a Scottish castle.",wiki:"https://en.wikipedia.org/wiki/Raj_Bhavan_(Uttarakhand)"},
    {id:252,name:"St. John's in the Wilderness",country:"India",state:"Uttarakhand",city:"Nainital",dynasty:"British Raj",year:1844,lat:29.39,lng:79.45,desc:"One of the oldest churches in Nainital.",wiki:"https://en.wikipedia.org/wiki/St._John_in_the_Wilderness_Church_(Nainital)"},
    {id:253,name:"Gurney House",country:"India",state:"Uttarakhand",city:"Nainital",dynasty:"British Raj",year:1881,lat:29.38,lng:79.46,desc:"The historic former residence of Jim Corbett.",wiki:"https://en.wikipedia.org/wiki/Gurney_House"},
    {id:254,name:"Landour Cantonment Heritage",country:"India",state:"Uttarakhand",city:"Mussoorie",dynasty:"British Raj",year:1827,lat:30.46,lng:78.10,desc:"Historic colonial buildings and estates.",wiki:"https://en.wikipedia.org/wiki/Landour"},
    {id:255,name:"Kellogg Memorial Church",country:"India",state:"Uttarakhand",city:"Mussoorie",dynasty:"British Raj",year:1903,lat:30.45,lng:78.09,desc:"A prominent Gothic-style church in Landour.",wiki:"https://en.wikipedia.org/wiki/Landour"},
    {id:256,name:"Christ Church, Mussoorie",country:"India",state:"Uttarakhand",city:"Mussoorie",dynasty:"British Raj",year:1836,lat:30.45,lng:78.07,desc:"The oldest church in the Himalayan ranges.",wiki:"https://en.wikipedia.org/wiki/Mussoorie"},
    {id:257,name:"IIT Roorkee Heritage Buildings",country:"India",state:"Uttarakhand",city:"Roorkee",dynasty:"British Raj",year:1847,lat:29.86,lng:77.89,desc:"Historic buildings of India's oldest engineering college.",wiki:"https://en.wikipedia.org/wiki/IIT_Roorkee"},
    {id:258,name:"Old Cemetery",country:"India",state:"Uttarakhand",city:"Roorkee",dynasty:"British Raj",year:1850,lat:29.86,lng:77.89,desc:"A historic 19th-century cemetery.",wiki:"https://en.wikipedia.org/wiki/Roorkee"},
    {id:259,name:"Har Ki Pauri",country:"India",state:"Uttarakhand",city:"Haridwar",dynasty:"Hindu religious",year:100,lat:29.95,lng:78.17,desc:"The famous ghat on the banks of the Ganges.",wiki:"https://en.wikipedia.org/wiki/Har_Ki_Pauri"},
    {id:260,name:"Kankhal Daksheshwar Temple",country:"India",state:"Uttarakhand",city:"Haridwar",dynasty:"Hindu religious",year:1000,lat:29.92,lng:78.14,desc:"An ancient temple associated with King Daksha.",wiki:"https://en.wikipedia.org/wiki/Daksheswara_Mahadev_Temple"},
    {id:261,name:"Maya Devi Temple",country:"India",state:"Uttarakhand",city:"Haridwar",dynasty:"Hindu religious",year:1000,lat:29.94,lng:78.16,desc:"One of the Siddh Peethas dedicated to Goddess Maya.",wiki:"https://en.wikipedia.org/wiki/Maya_Devi_Temple,_Haridwar"},
    {id:262,name:"Bharat Mandir",country:"India",state:"Uttarakhand",city:"Rishikesh",dynasty:"Hindu religious",year:800,lat:30.10,lng:78.29,desc:"The oldest and most sacred temple in Rishikesh.",wiki:"https://en.wikipedia.org/wiki/Rishikesh"},
    {id:263,name:"Neelkanth Mahadev Temple",country:"India",state:"Uttarakhand",city:"Rishikesh",dynasty:"Hindu religious",year:800,lat:30.08,lng:78.34,desc:"A revered temple in the mountains above Rishikesh.",wiki:"https://en.wikipedia.org/wiki/Neelkanth_Mahadev_Temple"},
    {id:264,name:"Kedarnath Temple",country:"India",state:"Uttarakhand",city:"Rudraprayag",dynasty:"Hindu religious",year:800,lat:30.73,lng:79.06,desc:"An ancient, highly revered Shiva temple in the Garhwal Himalayas.",wiki:"https://en.wikipedia.org/wiki/Kedarnath_Temple"},
    {id:265,name:"Badrinath Temple",country:"India",state:"Uttarakhand",city:"Chamoli",dynasty:"Hindu religious",year:800,lat:30.74,lng:79.49,desc:"The historic complex and main shrine of Lord Badri.",wiki:"https://en.wikipedia.org/wiki/Badrinath_Temple"},
    {id:266,name:"Gangotri Temple",country:"India",state:"Uttarakhand",city:"Uttarkashi",dynasty:"Hindu religious",year:1800,lat:30.99,lng:78.93,desc:"The traditional shrine dedicated to the Goddess Ganga.",wiki:"https://en.wikipedia.org/wiki/Gangotri"},
    {id:267,name:"Yamunotri Temple",country:"India",state:"Uttarakhand",city:"Uttarkashi",dynasty:"Hindu religious",year:1800,lat:31.01,lng:78.45,desc:"The chief sanctuary of Goddess Yamuna in the Himalayas.",wiki:"https://en.wikipedia.org/wiki/Yamunotri"},
    {id:268,name:"Tungnath Temple",country:"India",state:"Uttarakhand",city:"Rudraprayag",dynasty:"Hindu religious",year:1000,lat:30.48,lng:79.21,desc:"The highest Shiva temple in the world.",wiki:"https://en.wikipedia.org/wiki/Tungnath"},
    {id:269,name:"Narsingh Temple",country:"India",state:"Uttarakhand",city:"Chamoli",dynasty:"Hindu religious",year:800,lat:30.55,lng:79.56,desc:"The winter seat of Lord Badrinath in Joshimath.",wiki:"https://en.wikipedia.org/wiki/Joshimath"},
    {id:270,name:"Baijnath–Bageshwar Heritage",country:"India",state:"Uttarakhand",city:"Bageshwar",dynasty:"Hindu religious",year:1000,lat:29.83,lng:79.77,desc:"Historic religious complexes along the Saryu river.",wiki:"https://en.wikipedia.org/wiki/Bageshwar"},

    // BIHAR[cite: 10]
    {id:271,name:"Mahabodhi Temple",country:"India",state:"Bihar",city:"Bodh Gaya",dynasty:"Mauryan Empire",year:-250,lat:24.69,lng:84.99,desc:"Ancient temple marking Buddha's enlightenment.",wiki:"https://en.wikipedia.org/wiki/Mahabodhi_Temple"},
    {id:272,name:"Barabar Caves",country:"India",state:"Bihar",city:"Jehanabad",dynasty:"Mauryan Empire",year:-250,lat:25.00,lng:85.06,desc:"The oldest surviving rock-cut caves in India.",wiki:"https://en.wikipedia.org/wiki/Barabar_Caves"},
    {id:273,name:"Sudama Cave",country:"India",state:"Bihar",city:"Jehanabad",dynasty:"Mauryan Empire",year:-250,lat:25.00,lng:85.06,desc:"Historic rock-cut chamber in the Barabar hills.",wiki:"https://en.wikipedia.org/wiki/Barabar_Caves"},
    {id:274,name:"Lomas Rishi Cave",country:"India",state:"Bihar",city:"Jehanabad",dynasty:"Mauryan Empire",year:-250,lat:25.00,lng:85.06,desc:"Famous for its carved arch-like facade.",wiki:"https://en.wikipedia.org/wiki/Lomas_Rishi_Cave"},
    {id:275,name:"Nalanda Mahavihara",country:"India",state:"Bihar",city:"Nalanda",dynasty:"Gupta Empire",year:427,lat:25.13,lng:85.44,desc:"The ruins of one of the world's oldest monastic universities.",wiki:"https://en.wikipedia.org/wiki/Nalanda"},
    {id:276,name:"Rajgir Archaeological Site",country:"India",state:"Bihar",city:"Rajgir",dynasty:"Mauryan Empire",year:-250,lat:25.01,lng:85.41,desc:"The ancient capital city of the Magadha empire.",wiki:"https://en.wikipedia.org/wiki/Rajgir"},
    {id:277,name:"Vishwa Shanti Stupa",country:"India",state:"Bihar",city:"Rajgir",dynasty:"Modern Buddhist",year:1969,lat:25.00,lng:85.42,desc:"A large white peace pagoda on a hilltop.",wiki:"https://en.wikipedia.org/wiki/Vishwa_Shanti_Stupa,_Rajgir"},
    {id:278,name:"Cyclopean Wall",country:"India",state:"Bihar",city:"Rajgir",dynasty:"Mauryan Empire",year:-500,lat:25.01,lng:85.42,desc:"A massive, ancient 40-km long stone wall.",wiki:"https://en.wikipedia.org/wiki/Cyclopean_Wall_of_Rajgir"},
    {id:279,name:"Ajatshatru Fort",country:"India",state:"Bihar",city:"Rajgir",dynasty:"Haryanka",year:-490,lat:25.01,lng:85.41,desc:"Ruins of the fort built by King Ajatshatru.",wiki:"https://en.wikipedia.org/wiki/Ajatashatru"},
    {id:280,name:"Kesaria Stupa",country:"India",state:"Bihar",city:"East Champaran",dynasty:"Mauryan Empire",year:-250,lat:26.33,lng:84.86,desc:"One of the tallest Buddhist stupas in the world.",wiki:"https://en.wikipedia.org/wiki/Kesariya_stupa"},
    {id:281,name:"Lauriya Nandangarh Pillar",country:"India",state:"Bihar",city:"West Champaran",dynasty:"Mauryan Empire",year:-250,lat:26.99,lng:84.40,desc:"A well-preserved monolithic pillar of Ashoka.",wiki:"https://en.wikipedia.org/wiki/Lauriya_Nandangarh"},
    {id:282,name:"Lauriya Araraj Pillar",country:"India",state:"Bihar",city:"East Champaran",dynasty:"Mauryan Empire",year:-250,lat:26.55,lng:84.64,desc:"An inscribed sandstone pillar from the Mauryan period.",wiki:"https://en.wikipedia.org/wiki/Lauriya_Araraj"},
    {id:283,name:"Vaishali Ashokan Pillar",country:"India",state:"Bihar",city:"Vaishali",dynasty:"Mauryan Empire",year:-250,lat:25.98,lng:85.12,desc:"A lion pillar marking the ancient city of Vaishali.",wiki:"https://en.wikipedia.org/wiki/Pillars_of_Ashoka"},
    {id:284,name:"Vikramshila Archaeological Site",country:"India",state:"Bihar",city:"Bhagalpur",dynasty:"Pala Empire",year:800,lat:25.32,lng:87.27,desc:"The ruins of a prominent center of Buddhist learning.",wiki:"https://en.wikipedia.org/wiki/Vikramashila"},
    {id:285,name:"Maner Sharif Dargah",country:"India",state:"Bihar",city:"Patna",dynasty:"Mughal Empire",year:1616,lat:25.64,lng:84.87,desc:"A magnificent mausoleum featuring exquisite stone carvings.",wiki:"https://en.wikipedia.org/wiki/Maner_Sharif"},
    {id:286,name:"Golghar",country:"India",state:"Bihar",city:"Patna",dynasty:"British Raj",year:1786,lat:25.62,lng:85.13,desc:"A massive granary built in the stupa architecture style.",wiki:"https://en.wikipedia.org/wiki/Golghar"},
    {id:287,name:"Agam Kuan",country:"India",state:"Bihar",city:"Patna",dynasty:"Mauryan Empire",year:-250,lat:25.60,lng:85.19,desc:"An ancient, supposedly unfathomable well built by Ashoka.",wiki:"https://en.wikipedia.org/wiki/Agam_Kuan"},
    {id:288,name:"Sher Shah Suri Masjid",country:"India",state:"Bihar",city:"Patna",dynasty:"Sur Empire",year:1545,lat:25.60,lng:85.20,desc:"A historic Afghan-style mosque in Patna.",wiki:"https://en.wikipedia.org/wiki/Sher_Shah_Suri_Masjid"},
    {id:289,name:"Pathar Ki Masjid",country:"India",state:"Bihar",city:"Patna",dynasty:"Mughal Empire",year:1621,lat:25.62,lng:85.21,desc:"A stone mosque built by Parvez Shah.",wiki:"https://en.wikipedia.org/wiki/Pathar_Ki_Masjid"},
    {id:290,name:"Takht Sri Patna Sahib",country:"India",state:"Bihar",city:"Patna",dynasty:"Sikh heritage",year:1954,lat:25.59,lng:85.22,desc:"Gurdwara marking the birthplace of Guru Gobind Singh.",wiki:"https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib"},
    {id:291,name:"Sasaram Sher Shah Suri Tomb",country:"India",state:"Bihar",city:"Sasaram",dynasty:"Sur Empire",year:1545,lat:24.94,lng:84.03,desc:"A majestic sandstone mausoleum standing in an artificial lake.",wiki:"https://en.wikipedia.org/wiki/Tomb_of_Sher_Shah_Suri"},
    {id:292,name:"Rohtasgarh Fort",country:"India",state:"Bihar",city:"Rohtas",dynasty:"Sur Empire",year:1539,lat:24.62,lng:83.91,desc:"One of the most ancient and massive hill forts of India.",wiki:"https://en.wikipedia.org/wiki/Rohtasgarh_Fort"},
    {id:293,name:"Mundeshwari Devi Temple",country:"India",state:"Bihar",city:"Kaimur",dynasty:"Gupta Empire",year:108,lat:25.04,lng:83.58,desc:"Considered the oldest functional Hindu temple in India.",wiki:"https://en.wikipedia.org/wiki/Mundeshwari_Temple"},
    {id:294,name:"Darbhanga Fort",country:"India",state:"Bihar",city:"Darbhanga",dynasty:"Khandavala",year:1934,lat:26.15,lng:85.89,desc:"The grand residential complex of the Darbhanga royal family.",wiki:"https://en.wikipedia.org/wiki/Darbhanga_Fort"},
    {id:295,name:"Janki Mandir",country:"India",state:"Bihar",city:"Sitamarhi",dynasty:"Hindu religious",year:1900,lat:26.58,lng:85.49,desc:"A temple marking the traditional birthplace of Goddess Sita.",wiki:"https://en.wikipedia.org/wiki/Sitamarhi"},

    // RAJASTHAN[cite: 10]
    {id:296,name:"Chittorgarh Fort",country:"India",state:"Rajasthan",city:"Chittorgarh",dynasty:"Rajput",year:700,lat:24.88,lng:74.64,desc:"One of the largest forts in India.",wiki:"https://en.wikipedia.org/wiki/Chittorgarh_Fort"},
    {id:297,name:"Vijay Stambh",country:"India",state:"Rajasthan",city:"Chittorgarh",dynasty:"Rajput",year:1448,lat:24.88,lng:74.64,desc:"The towering 9-story Tower of Victory.",wiki:"https://en.wikipedia.org/wiki/Vijaya_Stambha"},
    {id:298,name:"Kirti Stambh",country:"India",state:"Rajasthan",city:"Chittorgarh",dynasty:"Rajput",year:1150,lat:24.88,lng:74.64,desc:"A 12th-century tower dedicated to the first Jain Tirthankara.",wiki:"https://en.wikipedia.org/wiki/Kirti_Stambha"},
    {id:299,name:"Rana Kumbha Palace",country:"India",state:"Rajasthan",city:"Chittorgarh",dynasty:"Rajput",year:1433,lat:24.88,lng:74.64,desc:"The ruined palace where Queen Padmini committed Jauhar.",wiki:"https://en.wikipedia.org/wiki/Chittorgarh_Fort"},
    {id:300,name:"Meera Temple",country:"India",state:"Rajasthan",city:"Chittorgarh",dynasty:"Rajput",year:1440,lat:24.88,lng:74.64,desc:"A temple associated with the mystic poetess Meera Bai.",wiki:"https://en.wikipedia.org/wiki/Meera_Temple"},
    {id:301,name:"Kumbhalgarh Fort",country:"India",state:"Rajasthan",city:"Rajsamand",dynasty:"Rajput",year:1458,lat:25.14,lng:73.58,desc:"A fortress featuring the second longest continuous wall in the world.",wiki:"https://en.wikipedia.org/wiki/Kumbhalgarh"},
    {id:302,name:"Ranakpur Jain Temple",country:"India",state:"Rajasthan",city:"Pali",dynasty:"Rajput",year:1437,lat:25.11,lng:73.47,desc:"A magnificent marble temple supported by 1,444 carved pillars.",wiki:"https://en.wikipedia.org/wiki/Ranakpur_Jain_temple"},
    {id:303,name:"Jaisalmer Fort",country:"India",state:"Rajasthan",city:"Jaisalmer",dynasty:"Rajput",year:1156,lat:26.91,lng:70.91,desc:"A massive, living golden fort rising from the Thar Desert.",wiki:"https://en.wikipedia.org/wiki/Jaisalmer_Fort"},
    {id:304,name:"Patwon Ki Haveli",country:"India",state:"Rajasthan",city:"Jaisalmer",dynasty:"Rajput",year:1805,lat:26.91,lng:70.91,desc:"The largest and most elaborately carved haveli in Jaisalmer.",wiki:"https://en.wikipedia.org/wiki/Patwon_Ki_Haveli"},
    {id:305,name:"Salim Singh Ki Haveli",country:"India",state:"Rajasthan",city:"Jaisalmer",dynasty:"Rajput",year:1815,lat:26.91,lng:70.91,desc:"A distinct haveli featuring a peacock-shaped roof.",wiki:"https://en.wikipedia.org/wiki/Jaisalmer"},
    {id:306,name:"Nathmal Ki Haveli",country:"India",state:"Rajasthan",city:"Jaisalmer",dynasty:"Rajput",year:1885,lat:26.91,lng:70.91,desc:"A unique haveli built by two architect brothers.",wiki:"https://en.wikipedia.org/wiki/Jaisalmer"},
    {id:307,name:"Gadisar Lake Heritage",country:"India",state:"Rajasthan",city:"Jaisalmer",dynasty:"Rajput",year:1367,lat:26.90,lng:70.92,desc:"A historic artificial lake surrounded by temples.",wiki:"https://en.wikipedia.org/wiki/Gadisar_Lake"},
    {id:308,name:"Mehrangarh Fort",country:"India",state:"Rajasthan",city:"Jodhpur",dynasty:"Rajput",year:1459,lat:26.29,lng:73.01,desc:"A formidable fort towering 400 feet above the Blue City.",wiki:"https://en.wikipedia.org/wiki/Mehrangarh"},
    {id:309,name:"Jaswant Thada",country:"India",state:"Rajasthan",city:"Jodhpur",dynasty:"Rajput",year:1899,lat:26.30,lng:73.02,desc:"A beautifully carved white marble cenotaph.",wiki:"https://en.wikipedia.org/wiki/Jaswant_Thada"},
    {id:310,name:"Umaid Bhawan Palace",country:"India",state:"Rajasthan",city:"Jodhpur",dynasty:"Rajput",year:1943,lat:26.28,lng:73.04,desc:"One of the world's largest private residences.",wiki:"https://en.wikipedia.org/wiki/Umaid_Bhawan_Palace"},
    {id:311,name:"Mandore Gardens",country:"India",state:"Rajasthan",city:"Jodhpur",dynasty:"Rajput",year:600,lat:26.34,lng:73.03,desc:"The ancient capital of Marwar.",wiki:"https://en.wikipedia.org/wiki/Mandore"},
    {id:312,name:"Junagarh Fort",country:"India",state:"Rajasthan",city:"Bikaner",dynasty:"Rajput",year:1589,lat:28.02,lng:73.31,desc:"An unassailable fort that was never conquered.",wiki:"https://en.wikipedia.org/wiki/Junagarh_Fort"},
    {id:313,name:"Lalgarh Palace",country:"India",state:"Rajasthan",city:"Bikaner",dynasty:"Rajput",year:1902,lat:28.03,lng:73.32,desc:"An imposing red sandstone palace.",wiki:"https://en.wikipedia.org/wiki/Lalgarh_Palace"},
    {id:314,name:"Karni Mata Temple",country:"India",state:"Rajasthan",city:"Deshnoke",dynasty:"Rajput",year:1900,lat:27.79,lng:73.34,desc:"The famous 'Rat Temple' of Rajasthan.",wiki:"https://en.wikipedia.org/wiki/Karni_Mata_Temple"},
    {id:315,name:"Amber Fort",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1592,lat:26.98,lng:75.85,desc:"An opulent Rajput palace complex.",wiki:"https://en.wikipedia.org/wiki/Amer_Fort"},
    {id:316,name:"Jaigarh Fort",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1726,lat:26.98,lng:75.84,desc:"A rugged fort housing the world's largest cannon.",wiki:"https://en.wikipedia.org/wiki/Jaigarh_Fort"},
    {id:317,name:"Nahargarh Fort",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1734,lat:26.93,lng:75.81,desc:"A historic fort standing on the edge of the Aravalli Hills.",wiki:"https://en.wikipedia.org/wiki/Nahargarh_Fort"},
    {id:318,name:"Hawa Mahal",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1799,lat:26.92,lng:75.82,desc:"The iconic five-story pink honeycomb 'Palace of Winds'.",wiki:"https://en.wikipedia.org/wiki/Hawa_Mahal"},
    {id:319,name:"Jantar Mantar",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1734,lat:26.92,lng:75.82,desc:"A UNESCO site featuring the world's largest stone sundial.",wiki:"https://en.wikipedia.org/wiki/Jantar_Mantar,_Jaipur"},
    {id:320,name:"Albert Hall Museum",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1887,lat:26.91,lng:75.81,desc:"The oldest museum of the state.",wiki:"https://en.wikipedia.org/wiki/Albert_Hall_Museum"},
    {id:321,name:"Jal Mahal",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1799,lat:26.95,lng:75.84,desc:"A serene palace sitting in the Man Sagar Lake.",wiki:"https://en.wikipedia.org/wiki/Jal_Mahal"},
    {id:322,name:"Galtaji Temple Complex",country:"India",state:"Rajasthan",city:"Jaipur",dynasty:"Rajput",year:1500,lat:26.91,lng:75.85,desc:"An ancient Hindu pilgrimage site.",wiki:"https://en.wikipedia.org/wiki/Galtaji"},
    {id:323,name:"Ranthambore Fort",country:"India",state:"Rajasthan",city:"Sawai Madhopur",dynasty:"Rajput",year:944,lat:26.01,lng:76.45,desc:"A formidable fort nestled deep within the National Park.",wiki:"https://en.wikipedia.org/wiki/Ranthambore_Fort"},
    {id:324,name:"Bundi Palace",country:"India",state:"Rajasthan",city:"Bundi",dynasty:"Rajput",year:1600,lat:25.44,lng:75.63,desc:"A masterpiece of Rajput architecture.",wiki:"https://en.wikipedia.org/wiki/Bundi"},
    {id:325,name:"Taragarh Fort",country:"India",state:"Rajasthan",city:"Bundi",dynasty:"Rajput",year:1354,lat:25.45,lng:75.63,desc:"A highly defensive hillside fort.",wiki:"https://en.wikipedia.org/wiki/Taragarh_Fort,_Bundi"},
    {id:326,name:"Garh Palace",country:"India",state:"Rajasthan",city:"Bundi",dynasty:"Rajput",year:1600,lat:25.44,lng:75.63,desc:"A complex of palatial structures.",wiki:"https://en.wikipedia.org/wiki/Bundi"},
    {id:327,name:"Dholpur Palace",country:"India",state:"Rajasthan",city:"Dholpur",dynasty:"Rajput",year:1800,lat:26.70,lng:77.88,desc:"A royal palace featuring red sandstone architecture.",wiki:"https://en.wikipedia.org/wiki/Dholpur"},
    {id:328,name:"Lohagarh Palace Complex",country:"India",state:"Rajasthan",city:"Bharatpur",dynasty:"Rajput",year:1732,lat:27.22,lng:77.49,desc:"The administrative palace within Lohagarh.",wiki:"https://en.wikipedia.org/wiki/Lohagarh_Fort"},
    {id:329,name:"Deeg Palace",country:"India",state:"Rajasthan",city:"Deeg",dynasty:"Rajput",year:1772,lat:27.47,lng:77.32,desc:"A luxurious summer resort of the rulers of Bharatpur.",wiki:"https://en.wikipedia.org/wiki/Deeg_Palace"},
    {id:330,name:"Chand Baori",country:"India",state:"Rajasthan",city:"Abhaneri",dynasty:"Rajput",year:800,lat:27.00,lng:76.60,desc:"One of the largest intricately carved stepwells in India.",wiki:"https://en.wikipedia.org/wiki/Chand_Baori"},
    {id:331,name:"Harshat Mata Temple",country:"India",state:"Rajasthan",city:"Abhaneri",dynasty:"Rajput",year:800,lat:27.00,lng:76.60,desc:"An ancient temple next to Chand Baori.",wiki:"https://en.wikipedia.org/wiki/Harshat_Mata_Temple"},
    {id:332,name:"Pushkar Brahma Temple",country:"India",state:"Rajasthan",city:"Pushkar",dynasty:"Rajput",year:1300,lat:26.48,lng:74.55,desc:"One of the few existing temples dedicated to Brahma.",wiki:"https://en.wikipedia.org/wiki/Brahma_Temple,_Pushkar"},
    {id:333,name:"City Palace Udaipur",country:"India",state:"Rajasthan",city:"Udaipur",dynasty:"Rajput",year:1559,lat:24.57,lng:73.68,desc:"A monumental complex of 11 palaces.",wiki:"https://en.wikipedia.org/wiki/City_Palace,_Udaipur"},
    {id:334,name:"Lake Palace",country:"India",state:"Rajasthan",city:"Udaipur",dynasty:"Rajput",year:1746,lat:24.57,lng:73.67,desc:"A stunning white marble palace floating in Lake Pichola.",wiki:"https://en.wikipedia.org/wiki/Lake_Palace"},

    // MADHYA PRADESH[cite: 10]
    {id:335,name:"Sanchi Stupa",country:"India",state:"Madhya Pradesh",city:"Sanchi",dynasty:"Mauryan Empire",year:-250,lat:23.48,lng:77.73,desc:"One of the oldest Buddhist monuments in India.",wiki:"https://en.wikipedia.org/wiki/Sanchi"},
    {id:336,name:"Ashokan Pillar at Sanchi",country:"India",state:"Madhya Pradesh",city:"Sanchi",dynasty:"Mauryan Empire",year:-250,lat:23.48,lng:77.73,desc:"Fragments of an original Ashokan pillar.",wiki:"https://en.wikipedia.org/wiki/Pillars_of_Ashoka"},
    {id:337,name:"Udayagiri Caves",country:"India",state:"Madhya Pradesh",city:"Vidisha",dynasty:"Gupta Empire",year:400,lat:23.53,lng:77.78,desc:"Ancient rock-cut caves featuring old Hindu images.",wiki:"https://en.wikipedia.org/wiki/Udayagiri_Caves"},
    {id:338,name:"Heliodorus Pillar",country:"India",state:"Madhya Pradesh",city:"Vidisha",dynasty:"Sunga",year:-113,lat:23.53,lng:77.80,desc:"A stone column erected by a Greek ambassador.",wiki:"https://en.wikipedia.org/wiki/Heliodorus_pillar"},
    {id:339,name:"Bhimbetka Rock Shelters",country:"India",state:"Madhya Pradesh",city:"Raisen",dynasty:"Prehistoric",year:-8000,lat:22.93,lng:77.61,desc:"A UNESCO site featuring prehistoric cave paintings.",wiki:"https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters"},
    {id:340,name:"Bhojeshwar Temple",country:"India",state:"Madhya Pradesh",city:"Bhojpur",dynasty:"Paramara",year:1010,lat:23.10,lng:77.58,desc:"An incomplete Hindu temple housing a massive lingam.",wiki:"https://en.wikipedia.org/wiki/Bhojeshwar_Temple"},
    {id:341,name:"Bhojpur Fort",country:"India",state:"Madhya Pradesh",city:"Bhojpur",dynasty:"Paramara",year:1010,lat:23.10,lng:77.58,desc:"The ruins of the ancient fortress.",wiki:"https://en.wikipedia.org/wiki/Bhojpur,_Madhya_Pradesh"},
    {id:342,name:"Khajuraho Group of Monuments",country:"India",state:"Madhya Pradesh",city:"Khajuraho",dynasty:"Chandela",year:950,lat:24.83,lng:79.92,desc:"Temples celebrated for their nagara architecture.",wiki:"https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments"},
    {id:343,name:"Kandariya Mahadeva Temple",country:"India",state:"Madhya Pradesh",city:"Khajuraho",dynasty:"Chandela",year:1030,lat:24.83,lng:79.92,desc:"The largest and most ornate temple in Khajuraho.",wiki:"https://en.wikipedia.org/wiki/Kandariya_Mahadeva_Temple"},
    {id:344,name:"Lakshmana Temple",country:"India",state:"Madhya Pradesh",city:"Khajuraho",dynasty:"Chandela",year:954,lat:24.83,lng:79.92,desc:"One of the best-preserved temples of Khajuraho.",wiki:"https://en.wikipedia.org/wiki/Lakshmana_Temple,_Khajuraho"},
    {id:345,name:"Chitragupta Temple",country:"India",state:"Madhya Pradesh",city:"Khajuraho",dynasty:"Chandela",year:1023,lat:24.83,lng:79.92,desc:"A temple dedicated to Surya.",wiki:"https://en.wikipedia.org/wiki/Chitragupta_temple,_Khajuraho"},
    {id:346,name:"Vishvanatha Temple",country:"India",state:"Madhya Pradesh",city:"Khajuraho",dynasty:"Chandela",year:999,lat:24.83,lng:79.92,desc:"A beautifully sculpted temple dedicated to Shiva.",wiki:"https://en.wikipedia.org/wiki/Vishvanatha_Temple,_Khajuraho"},
    {id:347,name:"Duladeo Temple",country:"India",state:"Madhya Pradesh",city:"Khajuraho",dynasty:"Chandela",year:1100,lat:24.82,lng:79.93,desc:"A slightly later temple noted for unique carvings.",wiki:"https://en.wikipedia.org/wiki/Duladeo_Temple"},
    {id:348,name:"Mithawali Chausath Yogini",country:"India",state:"Madhya Pradesh",city:"Morena",dynasty:"Kachchhapaghata",year:1323,lat:26.43,lng:78.18,desc:"A circular temple.",wiki:"https://en.wikipedia.org/wiki/Chausath_Yogini_Temple,_Mitaoli"},
    {id:349,name:"Padavali Temple",country:"India",state:"Madhya Pradesh",city:"Morena",dynasty:"Kachchhapaghata",year:950,lat:26.42,lng:78.18,desc:"A fortress-like temple featuring elaborate carvings.",wiki:"https://en.wikipedia.org/wiki/Bateshwar_Hindu_temples,_Madhya_Pradesh"},
    {id:350,name:"Bateshwar Temple Group",country:"India",state:"Madhya Pradesh",city:"Morena",dynasty:"Gurjara-Pratihara",year:800,lat:26.42,lng:78.18,desc:"A cluster of almost 200 ancient Hindu temples.",wiki:"https://en.wikipedia.org/wiki/Bateshwar_Hindu_temples,_Madhya_Pradesh"},    
// MADHYA PRADESH (Continued)[cite: 10]
    {id:351,name:"Gwalior Fort",country:"India",state:"Madhya Pradesh",city:"Gwalior",dynasty:"Rajput",year:1000,lat:26.22,lng:78.16,desc:"An impregnable hill fort referred to as the pearl amongst fortresses.",wiki:"https://en.wikipedia.org/wiki/Gwalior_Fort"},
    {id:352,name:"Man Singh Palace",country:"India",state:"Madhya Pradesh",city:"Gwalior",dynasty:"Tomar Dynasty",year:1486,lat:26.23,lng:78.16,desc:"A beautifully painted palace inside the Gwalior Fort.",wiki:"https://en.wikipedia.org/wiki/Man_Singh_Tomar"},
    {id:353,name:"Teli ka Mandir",country:"India",state:"Madhya Pradesh",city:"Gwalior",dynasty:"Gurjara-Pratihara",year:800,lat:26.22,lng:78.16,desc:"The tallest building inside the Gwalior fort.",wiki:"https://en.wikipedia.org/wiki/Teli_ka_Mandir"},
    {id:354,name:"Sas-Bahu Temples",country:"India",state:"Madhya Pradesh",city:"Gwalior",dynasty:"Kachchhapaghata",year:1092,lat:26.22,lng:78.16,desc:"Twin intricately carved temples dedicated to Lord Vishnu.",wiki:"https://en.wikipedia.org/wiki/Sasbahu_Temple,_Gwalior"},
    {id:355,name:"Gujari Mahal",country:"India",state:"Madhya Pradesh",city:"Gwalior",dynasty:"Tomar Dynasty",year:1450,lat:26.23,lng:78.17,desc:"A palace built by Man Singh for his queen.",wiki:"https://en.wikipedia.org/wiki/Gujari_Mahal"},
    {id:356,name:"Orchha Fort Complex",country:"India",state:"Madhya Pradesh",city:"Orchha",dynasty:"Bundela Rajput",year:1501,lat:25.35,lng:78.64,desc:"A massive fort complex situated on an island in the Betwa River.",wiki:"https://en.wikipedia.org/wiki/Orchha_Fort_complex"},
    {id:357,name:"Jahangir Mahal",country:"India",state:"Madhya Pradesh",city:"Orchha",dynasty:"Bundela Rajput",year:1605,lat:25.35,lng:78.64,desc:"A grand palace built to host Emperor Jahangir.",wiki:"https://en.wikipedia.org/wiki/Jahangir_Mahal,_Orchha"},
    {id:358,name:"Raja Mahal",country:"India",state:"Madhya Pradesh",city:"Orchha",dynasty:"Bundela Rajput",year:1531,lat:25.35,lng:78.64,desc:"The former residence of the kings of Orchha.",wiki:"https://en.wikipedia.org/wiki/Orchha_Fort_complex"},
    {id:359,name:"Chaturbhuj Temple",country:"India",state:"Madhya Pradesh",city:"Orchha",dynasty:"Bundela Rajput",year:1558,lat:25.35,lng:78.64,desc:"A towering temple featuring a mix of architectural styles.",wiki:"https://en.wikipedia.org/wiki/Chaturbhuj_Temple,_Orchha"},
    {id:360,name:"Ram Raja Temple",country:"India",state:"Madhya Pradesh",city:"Orchha",dynasty:"Bundela Rajput",year:1550,lat:25.35,lng:78.64,desc:"A unique temple where Lord Rama is worshipped as a king.",wiki:"https://en.wikipedia.org/wiki/Ram_Raja_Temple"},
    {id:361,name:"Datia Palace",country:"India",state:"Madhya Pradesh",city:"Datia",dynasty:"Bundela Rajput",year:1614,lat:25.66,lng:78.46,desc:"A stunning 7-story palace built entirely of stone and brick.",wiki:"https://en.wikipedia.org/wiki/Datia_Palace"},
    {id:362,name:"Mandu Fort Complex",country:"India",state:"Madhya Pradesh",city:"Dhar",dynasty:"Malwa Sultanate",year:1000,lat:22.34,lng:75.39,desc:"A massive ruined fortress city.",wiki:"https://en.wikipedia.org/wiki/Mandu,_Madhya_Pradesh"},
    {id:363,name:"Jahaz Mahal",country:"India",state:"Madhya Pradesh",city:"Dhar",dynasty:"Malwa Sultanate",year:1450,lat:22.34,lng:75.39,desc:"The 'Ship Palace' built between two artificial lakes.",wiki:"https://en.wikipedia.org/wiki/Jahaz_Mahal"},
    {id:364,name:"Hindola Mahal",country:"India",state:"Madhya Pradesh",city:"Dhar",dynasty:"Malwa Sultanate",year:1425,lat:22.34,lng:75.39,desc:"The 'Swinging Palace' known for its sloping sidewalls.",wiki:"https://en.wikipedia.org/wiki/Hindola_Mahal"},
    {id:365,name:"Hoshang Shah's Tomb",country:"India",state:"Madhya Pradesh",city:"Dhar",dynasty:"Malwa Sultanate",year:1440,lat:22.34,lng:75.39,desc:"India's first marble tomb.",wiki:"https://en.wikipedia.org/wiki/Hoshang_Shah_Tomb"},
    {id:366,name:"Rani Roopmati Pavilion",country:"India",state:"Madhya Pradesh",city:"Dhar",dynasty:"Malwa Sultanate",year:1550,lat:22.32,lng:75.39,desc:"A romantic pavilion offering sweeping valley views.",wiki:"https://en.wikipedia.org/wiki/Mandu,_Madhya_Pradesh"},
    {id:367,name:"Bawangaja Jain Monument",country:"India",state:"Madhya Pradesh",city:"Barwani",dynasty:"Jain",year:1100,lat:21.99,lng:74.88,desc:"A famous Jain pilgrimage center.",wiki:"https://en.wikipedia.org/wiki/Bawangaja"},
    {id:368,name:"Burhanpur Fort",country:"India",state:"Madhya Pradesh",city:"Burhanpur",dynasty:"Faruqi Dynasty",year:1400,lat:21.31,lng:76.22,desc:"A historic fort on the banks of the Tapti River.",wiki:"https://en.wikipedia.org/wiki/Burhanpur"},
    {id:369,name:"Asirgarh Fort",country:"India",state:"Madhya Pradesh",city:"Burhanpur",dynasty:"Faruqi Dynasty",year:1400,lat:21.47,lng:76.29,desc:"Known as the 'Key to the Deccan'.",wiki:"https://en.wikipedia.org/wiki/Asirgarh_Fort"},
    {id:370,name:"Shahi Qila",country:"India",state:"Madhya Pradesh",city:"Burhanpur",dynasty:"Faruqi Dynasty",year:1450,lat:21.31,lng:76.22,desc:"A majestic palace in Burhanpur.",wiki:"https://en.wikipedia.org/wiki/Burhanpur"},
    {id:371,name:"Chanderi Fort",country:"India",state:"Madhya Pradesh",city:"Chanderi",dynasty:"Rajput",year:1050,lat:24.71,lng:78.13,desc:"A sprawling fort situated on a steep hill.",wiki:"https://en.wikipedia.org/wiki/Chanderi"},

    // GUJARAT[cite: 10]
    {id:372,name:"Dholavira Archaeological Site",country:"India",state:"Gujarat",city:"Kutch",dynasty:"Harappan Civilization",year:-2650,lat:23.88,lng:70.21,desc:"An incredibly sophisticated ancient Indus Valley city.",wiki:"https://en.wikipedia.org/wiki/Dholavira"},
    {id:373,name:"Lothal Archaeological Site",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Harappan Civilization",year:-2400,lat:22.52,lng:72.24,desc:"The site of the world's earliest known ancient dockyard.",wiki:"https://en.wikipedia.org/wiki/Lothal"},
    {id:374,name:"Modhera Sun Temple",country:"India",state:"Gujarat",city:"Modhera",dynasty:"Chaulukya",year:1026,lat:23.58,lng:71.99,desc:"A stunning Hindu temple dedicated to Surya.",wiki:"https://en.wikipedia.org/wiki/Sun_Temple,_Modhera"},
    {id:375,name:"Rani ki Vav",country:"India",state:"Gujarat",city:"Patan",dynasty:"Chaulukya",year:1060,lat:23.85,lng:72.10,desc:"An incredibly ornate inverted temple functioning as a stepwell.",wiki:"https://en.wikipedia.org/wiki/Rani_ki_vav"},
    {id:376,name:"Sahastralinga Talav",country:"India",state:"Gujarat",city:"Patan",dynasty:"Chaulukya",year:1084,lat:23.85,lng:72.10,desc:"A medieval artificial water tank.",wiki:"https://en.wikipedia.org/wiki/Sahasralinga_Tank"},
    {id:377,name:"Patan Fort Remains",country:"India",state:"Gujarat",city:"Patan",dynasty:"Chaulukya",year:1000,lat:23.84,lng:72.11,desc:"The ruins of the ancient capital of Gujarat.",wiki:"https://en.wikipedia.org/wiki/Patan,_Gujarat"},
    {id:378,name:"Adalaj Stepwell",country:"India",state:"Gujarat",city:"Adalaj",dynasty:"Vaghela",year:1498,lat:23.16,lng:72.58,desc:"A beautiful five-story deep stepwell.",wiki:"https://en.wikipedia.org/wiki/Adalaj_Stepwell"},
    {id:379,name:"Rudabai Stepwell",country:"India",state:"Gujarat",city:"Adalaj",dynasty:"Vaghela",year:1498,lat:23.16,lng:72.58,desc:"The alternate historical name for the Adalaj Stepwell.",wiki:"https://en.wikipedia.org/wiki/Adalaj_Stepwell"},
    {id:380,name:"Sarkhej Roza",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1445,lat:22.98,lng:72.50,desc:"A sprawling mosque and tomb complex.",wiki:"https://en.wikipedia.org/wiki/Sarkhej_Roza"},
    {id:381,name:"Bhadra Fort",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1411,lat:23.02,lng:72.58,desc:"The historic fort marking the center of the walled city.",wiki:"https://en.wikipedia.org/wiki/Bhadra_Fort"},
    {id:382,name:"Teen Darwaza",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1415,lat:23.02,lng:72.58,desc:"A historical three-arched gateway.",wiki:"https://en.wikipedia.org/wiki/Teen_Darwaza"},
    {id:383,name:"Sidi Saiyyed Mosque",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1573,lat:23.02,lng:72.58,desc:"World famous for its exquisitely carved stone latticework.",wiki:"https://en.wikipedia.org/wiki/Sidi_Saiyyed_Mosque"},
    {id:384,name:"Jama Masjid Ahmedabad",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1424,lat:23.02,lng:72.58,desc:"One of the largest mosques in India upon construction.",wiki:"https://en.wikipedia.org/wiki/Jama_Mosque,_Ahmedabad"},
    {id:385,name:"Jhulta Minara",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1452,lat:23.02,lng:72.60,desc:"The mysterious 'Shaking Minarets'.",wiki:"https://en.wikipedia.org/wiki/Sidi_Bashir_Mosque"},
    {id:386,name:"Sabarmati Ashram",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"British Raj",year:1917,lat:23.06,lng:72.58,desc:"The historic residence of Mahatma Gandhi.",wiki:"https://en.wikipedia.org/wiki/Sabarmati_Ashram"},
    {id:387,name:"Calico Heritage Precinct",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Modern",year:1949,lat:23.04,lng:72.58,desc:"A historic textile museum.",wiki:"https://en.wikipedia.org/wiki/Calico_Museum_of_Textiles"},
    {id:388,name:"Champaner-Pavagadh Park",country:"India",state:"Gujarat",city:"Panchmahal",dynasty:"Gujarat Sultanate",year:1484,lat:22.48,lng:73.53,desc:"A UNESCO archaeological park.",wiki:"https://en.wikipedia.org/wiki/Champaner-Pavagadh_Archaeological_Park"},
    {id:389,name:"Jami Masjid Champaner",country:"India",state:"Gujarat",city:"Champaner",dynasty:"Gujarat Sultanate",year:1513,lat:22.48,lng:73.53,desc:"A majestic mosque featuring 172 pillars.",wiki:"https://en.wikipedia.org/wiki/Jama_Mosque,_Champaner"},
    {id:390,name:"Kevada Mosque",country:"India",state:"Gujarat",city:"Champaner",dynasty:"Gujarat Sultanate",year:1484,lat:22.48,lng:73.53,desc:"A 15th-century mosque.",wiki:"https://en.wikipedia.org/wiki/Kevada_Mosque"},
    {id:391,name:"Nagina Mosque",country:"India",state:"Gujarat",city:"Champaner",dynasty:"Gujarat Sultanate",year:1484,lat:22.48,lng:73.53,desc:"The 'Jewel Mosque'.",wiki:"https://en.wikipedia.org/wiki/Nagina_Mosque"},
    {id:392,name:"Pavagadh Kalika Mata",country:"India",state:"Gujarat",city:"Pavagadh",dynasty:"Hindu Religious",year:1000,lat:22.46,lng:73.52,desc:"An ancient temple atop Pavagadh Hill.",wiki:"https://en.wikipedia.org/wiki/Kalika_Mata_Temple,_Pavagadh"},
    {id:393,name:"Lakhpat Fort",country:"India",state:"Gujarat",city:"Kutch",dynasty:"Jadeja Rajput",year:1801,lat:23.82,lng:68.77,desc:"A large ruined fort marking a once-prosperous port town.",wiki:"https://en.wikipedia.org/wiki/Lakhpat"},
    {id:394,name:"Bala Hanuman Temple",country:"India",state:"Gujarat",city:"Jamnagar",dynasty:"Hindu Religious",year:1964,lat:22.46,lng:70.07,desc:"Listed in the Guinness Book for continuous chanting.",wiki:"https://en.wikipedia.org/wiki/Jamnagar"},
    {id:395,name:"Aina Mahal",country:"India",state:"Gujarat",city:"Bhuj",dynasty:"Jadeja Rajput",year:1741,lat:23.25,lng:69.66,desc:"An 18th-century palace boasting interiors of mirror work.",wiki:"https://en.wikipedia.org/wiki/Aina_Mahal"},
    {id:396,name:"Prag Mahal",country:"India",state:"Gujarat",city:"Bhuj",dynasty:"Jadeja Rajput",year:1865,lat:23.25,lng:69.66,desc:"A 19th-century palace built in a distinct Italian Gothic style.",wiki:"https://en.wikipedia.org/wiki/Prag_Mahal"},
    {id:397,name:"Mata no Madh",country:"India",state:"Gujarat",city:"Kutch",dynasty:"Hindu Religious",year:1300,lat:23.54,lng:68.95,desc:"A major temple dedicated to Ashapura Mata.",wiki:"https://en.wikipedia.org/wiki/Mata_no_Madh"},
    {id:398,name:"Somnath Temple",country:"India",state:"Gujarat",city:"Prabhas Patan",dynasty:"Post-Independence",year:1951,lat:20.88,lng:70.40,desc:"The first among the twelve Jyotirlinga shrines.",wiki:"https://en.wikipedia.org/wiki/Somnath_temple"},
    {id:399,name:"Dwarkadhish Temple",country:"India",state:"Gujarat",city:"Dwarka",dynasty:"Hindu Religious",year:1500,lat:22.23,lng:68.96,desc:"A sacred Hindu temple dedicated to Lord Krishna.",wiki:"https://en.wikipedia.org/wiki/Dwarkadhish_Temple"},
    {id:400,name:"Kirti Mandir",country:"India",state:"Gujarat",city:"Porbandar",dynasty:"Post-Independence",year:1944,lat:21.64,lng:69.60,desc:"A memorial temple built in honor of Mahatma Gandhi.",wiki:"https://en.wikipedia.org/wiki/Kirti_Mandir,_Porbandar"},
    {id:401,name:"Junagadh Uparkot Fort",country:"India",state:"Gujarat",city:"Junagadh",dynasty:"Mauryan Empire",year:-319,lat:21.52,lng:70.46,desc:"An ancient hilltop fort.",wiki:"https://en.wikipedia.org/wiki/Uparkot_Fort"},
    {id:402,name:"Mahabat Maqbara",country:"India",state:"Gujarat",city:"Junagadh",dynasty:"Nawab of Junagadh",year:1892,lat:21.52,lng:70.46,desc:"An incredibly ornate mausoleum.",wiki:"https://en.wikipedia.org/wiki/Mahabat_Maqbara"},
    {id:403,name:"Ashokan Rock Edicts",country:"India",state:"Gujarat",city:"Junagadh",dynasty:"Mauryan Empire",year:-250,lat:21.52,lng:70.46,desc:"A boulder engraved with Ashoka's edicts.",wiki:"https://en.wikipedia.org/wiki/Edicts_of_Ashoka"},
    {id:404,name:"Sidi Bashir Mosque",country:"India",state:"Gujarat",city:"Ahmedabad",dynasty:"Gujarat Sultanate",year:1452,lat:23.02,lng:72.60,desc:"Famous for its shaking minarets.",wiki:"https://en.wikipedia.org/wiki/Sidi_Bashir_Mosque"},
    {id:405,name:"Sun Temple Modhera Stepwell",country:"India",state:"Gujarat",city:"Modhera",dynasty:"Chaulukya",year:1026,lat:23.58,lng:71.99,desc:"A massive rectangular stepwell.",wiki:"https://en.wikipedia.org/wiki/Sun_Temple,_Modhera"},

    // MAHARASHTRA[cite: 10]
    {id:406,name:"Ajanta Caves",country:"India",state:"Maharashtra",city:"Sambhajinagar",dynasty:"Vakataka",year:-200,lat:20.55,lng:75.70,desc:"World famous rock-cut Buddhist caves.",wiki:"https://en.wikipedia.org/wiki/Ajanta_Caves"},
    {id:407,name:"Ellora Caves",country:"India",state:"Maharashtra",city:"Sambhajinagar",dynasty:"Rashtrakuta",year:600,lat:20.02,lng:75.17,desc:"A monolithic rock-cut temple complex.",wiki:"https://en.wikipedia.org/wiki/Ellora_Caves"},
    {id:408,name:"Elephanta Caves",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"Kalachuri",year:500,lat:18.96,lng:72.93,desc:"A network of sculpted caves located on an island.",wiki:"https://en.wikipedia.org/wiki/Elephanta_Caves"},
    {id:409,name:"Kanheri Caves",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"Buddhist",year:-100,lat:19.20,lng:72.90,desc:"Over 100 Buddhist caves carved into basalt hills.",wiki:"https://en.wikipedia.org/wiki/Kanheri_Caves"},
    {id:410,name:"Karla Caves",country:"India",state:"Maharashtra",city:"Lonavala",dynasty:"Satavahana",year:-200,lat:18.78,lng:73.47,desc:"A complex of ancient Buddhist Indian rock-cut caves.",wiki:"https://en.wikipedia.org/wiki/Karla_Caves"},
    {id:411,name:"Bhaja Caves",country:"India",state:"Maharashtra",city:"Lonavala",dynasty:"Satavahana",year:-200,lat:18.73,lng:73.48,desc:"A group of 22 rock-cut caves.",wiki:"https://en.wikipedia.org/wiki/Bhaja_Caves"},
    {id:412,name:"Bedse Caves",country:"India",state:"Maharashtra",city:"Maval",dynasty:"Satavahana",year:-100,lat:18.72,lng:73.53,desc:"Ancient Buddhist caves known for carved pillars.",wiki:"https://en.wikipedia.org/wiki/Bedse_Caves"},
    {id:413,name:"Pandavleni Caves",country:"India",state:"Maharashtra",city:"Nashik",dynasty:"Satavahana",year:-300,lat:19.96,lng:73.74,desc:"A group of 24 caves carved representing Hinayana Buddhism.",wiki:"https://en.wikipedia.org/wiki/Pandavleni_Caves"},
    {id:414,name:"Aurangabad Caves",country:"India",state:"Maharashtra",city:"Sambhajinagar",dynasty:"Vakataka",year:600,lat:19.90,lng:75.31,desc:"Twelve rock-cut Buddhist shrines located on a hill.",wiki:"https://en.wikipedia.org/wiki/Aurangabad_Caves"},
    {id:415,name:"Daulatabad Fort",country:"India",state:"Maharashtra",city:"Daulatabad",dynasty:"Yadava",year:1187,lat:19.94,lng:75.21,desc:"A dramatically located hill fortress.",wiki:"https://en.wikipedia.org/wiki/Daulatabad_Fort"},
    {id:416,name:"Bibi Ka Maqbara",country:"India",state:"Maharashtra",city:"Sambhajinagar",dynasty:"Mughal Empire",year:1660,lat:19.90,lng:75.32,desc:"A tomb built by Aurangzeb's son.",wiki:"https://en.wikipedia.org/wiki/Bibi_Ka_Maqbara"},
    {id:417,name:"Panchakki",country:"India",state:"Maharashtra",city:"Sambhajinagar",dynasty:"Mughal Empire",year:1695,lat:19.89,lng:75.31,desc:"A medieval water mill.",wiki:"https://en.wikipedia.org/wiki/Panchakki"},
    {id:418,name:"Ghrishneshwar Temple",country:"India",state:"Maharashtra",city:"Verul",dynasty:"Maratha Empire",year:1750,lat:20.02,lng:75.17,desc:"A major Shiva temple.",wiki:"https://en.wikipedia.org/wiki/Grishneshwar_Temple"},
    {id:419,name:"Shaniwar Wada",country:"India",state:"Maharashtra",city:"Pune",dynasty:"Maratha Empire",year:1732,lat:18.51,lng:73.85,desc:"The historic seat of the Peshwas.",wiki:"https://en.wikipedia.org/wiki/Shaniwar_Wada"},
    {id:420,name:"Aga Khan Palace",country:"India",state:"Maharashtra",city:"Pune",dynasty:"British Raj",year:1892,lat:18.55,lng:73.90,desc:"A palace holding immense historical significance.",wiki:"https://en.wikipedia.org/wiki/Aga_Khan_Palace"},
    {id:421,name:"Lal Mahal",country:"India",state:"Maharashtra",city:"Pune",dynasty:"Maratha Empire",year:1630,lat:18.52,lng:73.85,desc:"A reconstructed palace.",wiki:"https://en.wikipedia.org/wiki/Lal_Mahal"},
    {id:422,name:"Pataleshwar Cave Temple",country:"India",state:"Maharashtra",city:"Pune",dynasty:"Rashtrakuta",year:700,lat:18.52,lng:73.84,desc:"An 8th-century rock-cut temple.",wiki:"https://en.wikipedia.org/wiki/Pataleshwar,_Pune"},
    {id:423,name:"Sinhagad Fort",country:"India",state:"Maharashtra",city:"Pune",dynasty:"Maratha Empire",year:1350,lat:18.36,lng:73.75,desc:"The 'Lion Fort'.",wiki:"https://en.wikipedia.org/wiki/Sinhagad"},
    {id:424,name:"Shivneri Fort",country:"India",state:"Maharashtra",city:"Junnar",dynasty:"Maratha Empire",year:1600,lat:19.19,lng:73.87,desc:"The birthplace of Shivaji Maharaj.",wiki:"https://en.wikipedia.org/wiki/Shivneri"},
    {id:425,name:"Pratapgad Fort",country:"India",state:"Maharashtra",city:"Satara",dynasty:"Maratha Empire",year:1656,lat:17.92,lng:73.57,desc:"A mountain fort.",wiki:"https://en.wikipedia.org/wiki/Pratapgad"},
    {id:426,name:"Raigad Fort",country:"India",state:"Maharashtra",city:"Raigad",dynasty:"Maratha Empire",year:1030,lat:18.23,lng:73.44,desc:"The capital of the Maratha Empire.",wiki:"https://en.wikipedia.org/wiki/Raigad_Fort"},
    {id:427,name:"Rajgad Fort",country:"India",state:"Maharashtra",city:"Pune",dynasty:"Maratha Empire",year:1400,lat:18.24,lng:73.68,desc:"An almost unconquerable fort.",wiki:"https://en.wikipedia.org/wiki/Rajgad_Fort"},
    {id:428,name:"Torna Fort",country:"India",state:"Maharashtra",city:"Pune",dynasty:"Maratha Empire",year:1200,lat:18.27,lng:73.62,desc:"The first fort captured by Shivaji.",wiki:"https://en.wikipedia.org/wiki/Torna_Fort"},
    {id:429,name:"Lohagad Fort",country:"India",state:"Maharashtra",city:"Lonavala",dynasty:"Maratha Empire",year:1400,lat:18.70,lng:73.48,desc:"The 'Iron Fort'.",wiki:"https://en.wikipedia.org/wiki/Lohagad"},
    {id:430,name:"Visapur Fort",country:"India",state:"Maharashtra",city:"Lonavala",dynasty:"Maratha Empire",year:1720,lat:18.71,lng:73.49,desc:"A hill fort connected to Lohagad.",wiki:"https://en.wikipedia.org/wiki/Visapur_Fort"},
    {id:431,name:"Panhala Fort",country:"India",state:"Maharashtra",city:"Kolhapur",dynasty:"Shilahara",year:1100,lat:16.81,lng:74.10,desc:"One of the largest forts in the Deccan.",wiki:"https://en.wikipedia.org/wiki/Panhala_Fort"},
    {id:432,name:"Vijaydurg Fort",country:"India",state:"Maharashtra",city:"Sindhudurg",dynasty:"Shilahara",year:1205,lat:16.55,lng:73.33,desc:"The oldest fort on the Sindhudurg coast.",wiki:"https://en.wikipedia.org/wiki/Vijaydurg_Fort"},
    {id:433,name:"Sindhudurg Fort",country:"India",state:"Maharashtra",city:"Malvan",dynasty:"Maratha Empire",year:1664,lat:16.04,lng:73.45,desc:"A massive naval fort.",wiki:"https://en.wikipedia.org/wiki/Sindhudurg_Fort"},
    {id:434,name:"Murud-Janjira Fort",country:"India",state:"Maharashtra",city:"Murud",dynasty:"Siddi Sultanate",year:1400,lat:18.30,lng:72.96,desc:"An invincible sea fort.",wiki:"https://en.wikipedia.org/wiki/Murud-Janjira"},
    {id:435,name:"Suvarnadurg Fort",country:"India",state:"Maharashtra",city:"Harnai",dynasty:"Maratha Empire",year:1500,lat:17.81,lng:73.08,desc:"The 'Golden Fort'.",wiki:"https://en.wikipedia.org/wiki/Suvarnadurg"},
    {id:436,name:"Bassein Fort",country:"India",state:"Maharashtra",city:"Vasai",dynasty:"Portuguese",year:1532,lat:19.33,lng:72.81,desc:"The historic fort of the Portuguese.",wiki:"https://en.wikipedia.org/wiki/Fort_Bassein"},
    {id:437,name:"CSMT Terminus",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"British Raj",year:1887,lat:18.94,lng:72.83,desc:"A historic Victorian Gothic railway terminus.",wiki:"https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Terminus"},
    {id:438,name:"Gateway of India",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"British Raj",year:1924,lat:18.92,lng:72.83,desc:"An iconic arch-monument.",wiki:"https://en.wikipedia.org/wiki/Gateway_of_India"},
    {id:439,name:"Elephanta Island Monuments",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"Kalachuri",year:500,lat:18.96,lng:72.93,desc:"A UNESCO site covering the cave-temple island.",wiki:"https://en.wikipedia.org/wiki/Elephanta_Caves"},
    {id:440,name:"Dr Bhau Daji Lad Museum",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"British Raj",year:1872,lat:18.97,lng:72.83,desc:"The oldest museum in Mumbai.",wiki:"https://en.wikipedia.org/wiki/Dr._Bhau_Daji_Lad_Museum"},
    {id:441,name:"Prince of Wales Museum",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"British Raj",year:1922,lat:18.92,lng:72.83,desc:"An iconic museum of history and art.",wiki:"https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya"},
    {id:442,name:"Global Vipassana Pagoda",country:"India",state:"Maharashtra",city:"Mumbai",dynasty:"Modern Buddhist",year:2008,lat:19.22,lng:72.80,desc:"A massive monument featuring the world's largest stone dome.",wiki:"https://en.wikipedia.org/wiki/Global_Vipassana_Pagoda"},
    {id:443,name:"Deekshabhoomi",country:"India",state:"Maharashtra",city:"Nagpur",dynasty:"Modern Buddhist",year:2001,lat:21.12,lng:79.06,desc:"A sacred monument marking where Ambedkar embraced Buddhism.",wiki:"https://en.wikipedia.org/wiki/Deekshabhoomi"},
    {id:444,name:"Ramtek Temple Complex",country:"India",state:"Maharashtra",city:"Ramtek",dynasty:"Vakataka",year:400,lat:21.40,lng:79.32,desc:"An ancient hilltop temple complex.",wiki:"https://en.wikipedia.org/wiki/Ramtek"},
    {id:445,name:"Lonar Crater Lake",country:"India",state:"Maharashtra",city:"Buldhana",dynasty:"Ancient",year:-50000,lat:19.97,lng:76.50,desc:"A national geo-heritage monument formed by a meteorite.",wiki:"https://en.wikipedia.org/wiki/Lonar_Lake"},

    // GOA[cite: 10]
    {id:446,name:"Basilica of Bom Jesus",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1605,lat:15.50,lng:73.91,desc:"A UNESCO site holding the remains of St. Francis Xavier.",wiki:"https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus"},
    {id:447,name:"Se Cathedral",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1619,lat:15.50,lng:73.91,desc:"One of the largest churches in Asia.",wiki:"https://en.wikipedia.org/wiki/S%C3%A9_Catedral_de_Santa_Catarina"},
    {id:448,name:"Church of St Francis of Assisi",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1661,lat:15.50,lng:73.91,desc:"A beautiful church featuring Manueline and Baroque architecture.",wiki:"https://en.wikipedia.org/wiki/Church_and_Convent_of_St._Francis_of_Assisi"},
    {id:449,name:"Church of St Cajetan",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1661,lat:15.50,lng:73.91,desc:"Modeled after St. Peter's Basilica.",wiki:"https://en.wikipedia.org/wiki/Church_of_St._Cajetan,_Goa"},
    {id:450,name:"Church of Our Lady of the Rosary",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1543,lat:15.50,lng:73.90,desc:"One of the oldest preserved buildings in Old Goa.",wiki:"https://en.wikipedia.org/wiki/Church_of_Our_Lady_of_the_Rosary,_Goa"},
    {id:451,name:"Church of St Augustine Ruins",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1602,lat:15.49,lng:73.90,desc:"The dramatic ruins of a once massive church.",wiki:"https://en.wikipedia.org/wiki/Church_of_St._Augustine,_Goa"},
    {id:452,name:"Archaeological Museum & Gallery",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1964,lat:15.50,lng:73.91,desc:"A museum housed in the former convent.",wiki:"https://en.wikipedia.org/wiki/Archaeological_Museum_of_Goa"},
    {id:453,name:"Viceroy's Arch",country:"India",state:"Goa",city:"Old Goa",dynasty:"Portuguese",year:1599,lat:15.50,lng:73.91,desc:"The historic archway leading into the city.",wiki:"https://en.wikipedia.org/wiki/Old_Goa"},
    {id:454,name:"Adil Shah Palace Gateway",country:"India",state:"Goa",city:"Panaji",dynasty:"Bijapur Sultanate",year:1500,lat:15.49,lng:73.82,desc:"The surviving gateway of the summer palace.",wiki:"https://en.wikipedia.org/wiki/Panaji"},
    {id:455,name:"Reis Magos Fort",country:"India",state:"Goa",city:"Reis Magos",dynasty:"Portuguese",year:1551,lat:15.49,lng:73.81,desc:"A restored fort overlooking the Mandovi River.",wiki:"https://en.wikipedia.org/wiki/Reis_Magos"},
    {id:456,name:"Aguada Fort",country:"India",state:"Goa",city:"Sinquerim",dynasty:"Portuguese",year:1612,lat:15.49,lng:73.76,desc:"A well-preserved Portuguese fort.",wiki:"https://en.wikipedia.org/wiki/Fort_Aguada"},
    {id:457,name:"Chapora Fort",country:"India",state:"Goa",city:"Chapora",dynasty:"Portuguese",year:1617,lat:15.60,lng:73.73,desc:"A rugged fort offering stunning views.",wiki:"https://en.wikipedia.org/wiki/Chapora_Fort"},
    {id:458,name:"Cabo de Rama Fort",country:"India",state:"Goa",city:"Canacona",dynasty:"Portuguese",year:1763,lat:15.08,lng:73.92,desc:"A massive fort in South Goa.",wiki:"https://en.wikipedia.org/wiki/Cabo_de_Rama"},
    {id:459,name:"Corjuem Fort",country:"India",state:"Goa",city:"Corjuem",dynasty:"Portuguese",year:1705,lat:15.59,lng:73.87,desc:"A small inland island fort.",wiki:"https://en.wikipedia.org/wiki/Corjuem_Fort"},
    {id:460,name:"Palacio de Deao",country:"India",state:"Goa",city:"Quepem",dynasty:"Portuguese",year:1787,lat:15.21,lng:74.04,desc:"An elegant mansion showcasing Hindu and Portuguese architecture.",wiki:"https://en.wikipedia.org/wiki/Quepem"},

    // KARNATAKA[cite: 10]
    {id:461,name:"Badami Cave Temples",country:"India",state:"Karnataka",city:"Badami",dynasty:"Chalukya Dynasty",year:540,lat:15.91,lng:75.68,desc:"A complex of incredibly detailed rock-cut temples.",wiki:"https://en.wikipedia.org/wiki/Badami_cave_temples"},
    {id:462,name:"Agastya Lake Temples",country:"India",state:"Karnataka",city:"Badami",dynasty:"Chalukya Dynasty",year:500,lat:15.92,lng:75.68,desc:"Ancient Bhutanatha temples clustered around a lake.",wiki:"https://en.wikipedia.org/wiki/Bhutanatha_group_of_temples,_Badami"},
    {id:463,name:"Aihole Durga Temple",country:"India",state:"Karnataka",city:"Aihole",dynasty:"Chalukya Dynasty",year:700,lat:16.02,lng:75.88,desc:"An apsidal-ended stone temple.",wiki:"https://en.wikipedia.org/wiki/Durga_Temple,_Aihole"},
    {id:464,name:"Aihole Lad Khan Temple",country:"India",state:"Karnataka",city:"Aihole",dynasty:"Chalukya Dynasty",year:450,lat:16.02,lng:75.88,desc:"One of the oldest surviving Hindu temples in India.",wiki:"https://en.wikipedia.org/wiki/Lad_Khan_Temple"},
    {id:465,name:"Aihole Meguti Jain Temple",country:"India",state:"Karnataka",city:"Aihole",dynasty:"Chalukya Dynasty",year:634,lat:16.01,lng:75.88,desc:"A hilltop temple featuring the famous Aihole inscription.",wiki:"https://en.wikipedia.org/wiki/Aihole"},
    {id:466,name:"Pattadakal Virupaksha Temple",country:"India",state:"Karnataka",city:"Pattadakal",dynasty:"Chalukya Dynasty",year:740,lat:15.94,lng:75.81,desc:"The largest temple in the Pattadakal complex.",wiki:"https://en.wikipedia.org/wiki/Pattadakal"},
    {id:467,name:"Pattadakal Mallikarjuna Temple",country:"India",state:"Karnataka",city:"Pattadakal",dynasty:"Chalukya Dynasty",year:740,lat:15.94,lng:75.81,desc:"A grand temple built by the queens of Vikramaditya II.",wiki:"https://en.wikipedia.org/wiki/Pattadakal"},
    {id:468,name:"Pattadakal Papanatha Temple",country:"India",state:"Karnataka",city:"Pattadakal",dynasty:"Chalukya Dynasty",year:680,lat:15.94,lng:75.81,desc:"A temple displaying a mix of Dravidian and Nagara styles.",wiki:"https://en.wikipedia.org/wiki/Pattadakal"},
    {id:469,name:"Hampi Virupaksha Temple",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1336,lat:15.33,lng:76.46,desc:"The primary working temple in the ruined city of Vijayanagara.",wiki:"https://en.wikipedia.org/wiki/Virupaksha_Temple,_Hampi"},
    {id:470,name:"Vittala Temple",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1422,lat:15.33,lng:76.47,desc:"The most ornate temple in Hampi, famous for musical pillars.",wiki:"https://en.wikipedia.org/wiki/Vijaya_Vittala_Temple"},
    {id:471,name:"Stone Chariot",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1422,lat:15.33,lng:76.47,desc:"An iconic chariot carved out of solid stone.",wiki:"https://en.wikipedia.org/wiki/Stone_Chariot_of_Hampi"},
    {id:472,name:"Lotus Mahal",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1500,lat:15.32,lng:76.46,desc:"An elegant Indo-Islamic pavilion.",wiki:"https://en.wikipedia.org/wiki/Lotus_Mahal"},
    {id:473,name:"Elephant Stables",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1500,lat:15.32,lng:76.46,desc:"Massive domed chambers used to house royal elephants.",wiki:"https://en.wikipedia.org/wiki/Elephant_Stables,_Hampi"},
    {id:474,name:"Hazara Rama Temple",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1400,lat:15.32,lng:76.46,desc:"The private royal temple depicting scenes from the Ramayana.",wiki:"https://en.wikipedia.org/wiki/Hazara_Rama_Temple"},
    {id:475,name:"Achyutaraya Temple",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1534,lat:15.33,lng:76.46,desc:"A magnificent temple complex set in a valley.",wiki:"https://en.wikipedia.org/wiki/Achyutaraya_Temple"},
    {id:476,name:"Queen's Bath",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1500,lat:15.31,lng:76.46,desc:"A colossal aquatic enclosure built for the royal family.",wiki:"https://en.wikipedia.org/wiki/Group_of_Monuments_at_Hampi"},
    {id:477,name:"Hemakuta Hill Monuments",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1300,lat:15.33,lng:76.46,desc:"A cluster of early temples overlooking the Virupaksha complex.",wiki:"https://en.wikipedia.org/wiki/Group_of_Monuments_at_Hampi"},
    {id:478,name:"Badavilinga Temple",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1500,lat:15.33,lng:76.46,desc:"A massive monolithic Shiva Linga standing in water.",wiki:"https://en.wikipedia.org/wiki/Badavi_Linga"},
    {id:479,name:"Krishna Temple",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1515,lat:15.32,lng:76.46,desc:"Built by Krishnadevaraya.",wiki:"https://en.wikipedia.org/wiki/Krishna_Temple,_Hampi"},
    {id:480,name:"Uddhana Veerabhadra",country:"India",state:"Karnataka",city:"Hampi",dynasty:"Vijayanagara Empire",year:1545,lat:15.32,lng:76.46,desc:"Houses a giant monolithic statue.",wiki:"https://en.wikipedia.org/wiki/Group_of_Monuments_at_Hampi"},
    {id:481,name:"Belur Chennakeshava Temple",country:"India",state:"Karnataka",city:"Belur",dynasty:"Hoysala Empire",year:1117,lat:13.16,lng:75.85,desc:"An astoundingly intricate soapstone temple.",wiki:"https://en.wikipedia.org/wiki/Chennakeshava_Temple,_Belur"},
    {id:482,name:"Halebidu Hoysaleswara Temple",country:"India",state:"Karnataka",city:"Halebidu",dynasty:"Hoysala Empire",year:1121,lat:13.21,lng:75.99,desc:"An architectural masterpiece featuring countless wall sculptures.",wiki:"https://en.wikipedia.org/wiki/Hoysaleswara_Temple"},
    {id:483,name:"Halebidu Kedareshwara",country:"India",state:"Karnataka",city:"Halebidu",dynasty:"Hoysala Empire",year:1219,lat:13.21,lng:75.99,desc:"A stunning Hoysala temple.",wiki:"https://en.wikipedia.org/wiki/Kedareshwara_Temple,_Halebidu"},
    {id:484,name:"Shravanabelagola Gommateshwara",country:"India",state:"Karnataka",city:"Shravanabelagola",dynasty:"Western Ganga",year:981,lat:12.85,lng:76.48,desc:"A towering 57-foot monolithic statue of Bahubali.",wiki:"https://en.wikipedia.org/wiki/Gommateshwara_statue"},
    {id:485,name:"Mysore Palace",country:"India",state:"Karnataka",city:"Mysuru",dynasty:"Wadiyar Dynasty",year:1912,lat:12.30,lng:76.65,desc:"The incredibly ornate historical palace.",wiki:"https://en.wikipedia.org/wiki/Mysore_Palace"},
    {id:486,name:"Jaganmohan Palace",country:"India",state:"Karnataka",city:"Mysuru",dynasty:"Wadiyar Dynasty",year:1861,lat:12.30,lng:76.65,desc:"A former royal palace that now houses an extensive art gallery.",wiki:"https://en.wikipedia.org/wiki/Jaganmohan_Palace"},
    {id:487,name:"Srirangapatna Fort",country:"India",state:"Karnataka",city:"Srirangapatna",dynasty:"Kingdom of Mysore",year:1454,lat:12.42,lng:76.68,desc:"A historic fortress serving as the de facto capital.",wiki:"https://en.wikipedia.org/wiki/Srirangapatna_Fort"},
    {id:488,name:"Tipu Sultan's Palace",country:"India",state:"Karnataka",city:"Srirangapatna",dynasty:"Kingdom of Mysore",year:1784,lat:12.41,lng:76.69,desc:"The beautiful Daria Daulat Bagh.",wiki:"https://en.wikipedia.org/wiki/Daria_Daulat_Bagh"},
    {id:489,name:"Gumbaz",country:"India",state:"Karnataka",city:"Srirangapatna",dynasty:"Kingdom of Mysore",year:1784,lat:12.41,lng:76.69,desc:"The grand mausoleum holding the tombs of Tipu Sultan.",wiki:"https://en.wikipedia.org/wiki/Gumbaz,_Srirangapatna"},
    {id:490,name:"Bangalore Palace",country:"India",state:"Karnataka",city:"Bengaluru",dynasty:"Wadiyar Dynasty",year:1878,lat:12.99,lng:77.59,desc:"A majestic palace built in the Tudor Revival style.",wiki:"https://en.wikipedia.org/wiki/Bangalore_Palace"},
    {id:491,name:"Vidhana Soudha",country:"India",state:"Karnataka",city:"Bengaluru",dynasty:"Post-Independence",year:1956,lat:12.97,lng:77.59,desc:"An imposing neo-Dravidian state legislature building.",wiki:"https://en.wikipedia.org/wiki/Vidhana_Soudha"},
    {id:492,name:"Tipu Sultan's Summer Palace",country:"India",state:"Karnataka",city:"Bengaluru",dynasty:"Kingdom of Mysore",year:1791,lat:12.96,lng:77.57,desc:"A teakwood summer palace located in the heart of Bengaluru.",wiki:"https://en.wikipedia.org/wiki/Tipu_Sultan%27s_Summer_Palace"},
    {id:493,name:"Gol Gumbaz",country:"India",state:"Karnataka",city:"Vijayapura",dynasty:"Adil Shahi Dynasty",year:1656,lat:16.82,lng:75.73,desc:"The tomb of Mohammed Adil Shah.",wiki:"https://en.wikipedia.org/wiki/Gol_Gumbaz"},
    {id:494,name:"Ibrahim Rauza",country:"India",state:"Karnataka",city:"Vijayapura",dynasty:"Adil Shahi Dynasty",year:1627,lat:16.82,lng:75.70,desc:"A highly elegant tomb and mosque complex.",wiki:"https://en.wikipedia.org/wiki/Ibrahim_Rauza"},
    {id:495,name:"Bijapur Jama Masjid",country:"India",state:"Karnataka",city:"Vijayapura",dynasty:"Adil Shahi Dynasty",year:1576,lat:16.82,lng:75.72,desc:"One of the first mosques in India featuring a hemispherical dome.",wiki:"https://en.wikipedia.org/wiki/Jama_Mosque,_Bijapur"},
    {id:496,name:"Kittur Fort",country:"India",state:"Karnataka",city:"Kittur",dynasty:"Desai Dynasty",year:1650,lat:15.59,lng:74.79,desc:"The ruined stronghold of the brave Rani Chennamma.",wiki:"https://en.wikipedia.org/wiki/Kittur_Fort"},
    {id:497,name:"Bidar Fort",country:"India",state:"Karnataka",city:"Bidar",dynasty:"Bahmani Sultanate",year:1427,lat:17.92,lng:77.53,desc:"A large sprawling fort complex.",wiki:"https://en.wikipedia.org/wiki/Bidar_Fort"},
    {id:498,name:"Bahmani Tombs",country:"India",state:"Karnataka",city:"Ashtur",dynasty:"Bahmani Sultanate",year:1450,lat:17.91,lng:77.56,desc:"A cluster of royal mausoleums.",wiki:"https://en.wikipedia.org/wiki/Bidar"},
    {id:499,name:"Gulbarga Fort",country:"India",state:"Karnataka",city:"Kalaburagi",dynasty:"Bahmani Sultanate",year:1347,lat:17.33,lng:76.82,desc:"A historic fort housing an unusual fully-covered grand mosque.",wiki:"https://en.wikipedia.org/wiki/Gulbarga_Fort"},
    {id:500,name:"Buddha Vihara",country:"India",state:"Karnataka",city:"Kalaburagi",dynasty:"Modern Buddhist",year:2007,lat:17.29,lng:76.84,desc:"A magnificent modern Buddhist temple.",wiki:"https://en.wikipedia.org/wiki/Buddha_Vihara,_Gulbarga"},
    {id:501,name:"Murudeshwar Temple Complex",country:"India",state:"Karnataka",city:"Murudeshwar",dynasty:"Modern Hindu",year:2008,lat:14.09,lng:74.48,desc:"A temple complex with a towering Shiva statue.",wiki:"https://en.wikipedia.org/wiki/Murudeshwara"},
    {id:502,name:"Udupi Sri Krishna Matha",country:"India",state:"Karnataka",city:"Udupi",dynasty:"Religious",year:1200,lat:13.34,lng:74.75,desc:"A famous Hindu temple dedicated to Lord Krishna.",wiki:"https://en.wikipedia.org/wiki/Udupi_Sri_Krishna_Matha"},
    {id:503,name:"Sringeri Sharada Peetham",country:"India",state:"Karnataka",city:"Sringeri",dynasty:"Religious",year:700,lat:13.41,lng:75.25,desc:"A historic Hindu advaita matha.",wiki:"https://en.wikipedia.org/wiki/Sringeri_Sharada_Peetham"},
    {id:504,name:"Ikkeri Aghoreshwara",country:"India",state:"Karnataka",city:"Sagara",dynasty:"Keladi Nayaka",year:1500,lat:14.11,lng:75.01,desc:"An ancient temple built by the Nayakas.",wiki:"https://en.wikipedia.org/wiki/Ikkeri"},
    {id:505,name:"Chitradurga Fort",country:"India",state:"Karnataka",city:"Chitradurga",dynasty:"Nayakas",year:1100,lat:14.21,lng:76.39,desc:"A massive fort that spans several hills.",wiki:"https://en.wikipedia.org/wiki/Chitradurga_Fort"},
    {id:506,name:"Madikeri Fort",country:"India",state:"Karnataka",city:"Madikeri",dynasty:"Haleri",year:1600,lat:12.42,lng:75.74,desc:"A fort featuring two life-sized elephant statues.",wiki:"https://en.wikipedia.org/wiki/Madikeri_Fort"},

    // ANDHRA PRADESH[cite: 10]
    {id:507,name:"Amaravati Mahachaitya",country:"India",state:"Andhra Pradesh",city:"Amaravati",dynasty:"Satavahana",year:-200,lat:16.57,lng:80.35,desc:"The ruins of a massive ancient Buddhist monument.",wiki:"https://en.wikipedia.org/wiki/Amaravati_Stupa"},
    {id:508,name:"Undavalli Caves",country:"India",state:"Andhra Pradesh",city:"Guntur",dynasty:"Vishnukundina",year:400,lat:16.49,lng:80.58,desc:"A monolithic example of Indian rock-cut architecture.",wiki:"https://en.wikipedia.org/wiki/Undavalli_Caves"},
    {id:509,name:"Guntupalli Caves",country:"India",state:"Andhra Pradesh",city:"Eluru",dynasty:"Buddhist",year:-200,lat:17.01,lng:81.12,desc:"A magnificent rock-cut Buddhist cave complex.",wiki:"https://en.wikipedia.org/wiki/Guntupalli_Group_of_Buddhist_Monuments"},
    {id:510,name:"Salihundam",country:"India",state:"Andhra Pradesh",city:"Srikakulam",dynasty:"Buddhist",year:-200,lat:18.33,lng:84.04,desc:"An ancient Buddhist stupa site.",wiki:"https://en.wikipedia.org/wiki/Salihundam"},
    {id:511,name:"Bojjannakonda",country:"India",state:"Andhra Pradesh",city:"Sankaram",dynasty:"Buddhist",year:300,lat:17.70,lng:83.00,desc:"Ancient rock-cut caves on adjacent hillocks.",wiki:"https://en.wikipedia.org/wiki/Bojjannakonda"},
    {id:512,name:"Thotlakonda",country:"India",state:"Andhra Pradesh",city:"Visakhapatnam",dynasty:"Buddhist",year:-200,lat:17.82,lng:83.41,desc:"A prominent Buddhist monastic complex overlooking the sea.",wiki:"https://en.wikipedia.org/wiki/Thotlakonda"},
    {id:513,name:"Bavikonda",country:"India",state:"Andhra Pradesh",city:"Visakhapatnam",dynasty:"Buddhist",year:-200,lat:17.81,lng:83.39,desc:"A 3rd Century BCE Buddhist heritage site.",wiki:"https://en.wikipedia.org/wiki/Bavikonda"},
    {id:514,name:"Kondapalli Fort",country:"India",state:"Andhra Pradesh",city:"Kondapalli",dynasty:"Reddi Kingdom",year:1300,lat:16.63,lng:80.53,desc:"A historic fort located in the Krishna district.",wiki:"https://en.wikipedia.org/wiki/Kondapalli_Fort"},
    {id:515,name:"Gandikota Fort",country:"India",state:"Andhra Pradesh",city:"Gandikota",dynasty:"Kalyani Chalukyas",year:1100,lat:14.81,lng:78.28,desc:"A spectacular fort located at the Grand Canyon of India.",wiki:"https://en.wikipedia.org/wiki/Gandikota"},
    {id:516,name:"Lepakshi Veerabhadra",country:"India",state:"Andhra Pradesh",city:"Lepakshi",dynasty:"Vijayanagara",year:1530,lat:13.80,lng:77.60,desc:"A temple famous for its hanging pillar.",wiki:"https://en.wikipedia.org/wiki/Veerabhadra_Temple,_Lepakshi"},
    {id:517,name:"Penukonda Fort",country:"India",state:"Andhra Pradesh",city:"Penukonda",dynasty:"Vijayanagara",year:1300,lat:14.08,lng:77.58,desc:"A historic fort serving as the second capital of the Vijayanagara Empire.",wiki:"https://en.wikipedia.org/wiki/Penukonda"},
    {id:518,name:"Chandragiri Fort",country:"India",state:"Andhra Pradesh",city:"Chandragiri",dynasty:"Vijayanagara",year:1000,lat:13.58,lng:79.31,desc:"A fort holding the regal palace of the Vijayanagara emperors.",wiki:"https://en.wikipedia.org/wiki/Chandragiri_Fort,_Andhra_Pradesh"},
    {id:519,name:"Venkateswara Temple",country:"India",state:"Andhra Pradesh",city:"Tirumala",dynasty:"Religious",year:300,lat:13.68,lng:79.34,desc:"The incredibly wealthy and visited Tirupati Balaji temple.",wiki:"https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala"},
    {id:520,name:"Srikalahasti Temple",country:"India",state:"Andhra Pradesh",city:"Srikalahasti",dynasty:"Chola Dynasty",year:1000,lat:13.74,lng:79.69,desc:"A major Shiva temple.",wiki:"https://en.wikipedia.org/wiki/Srikalahasti_Temple"},
    {id:521,name:"Simhachalam Temple",country:"India",state:"Andhra Pradesh",city:"Visakhapatnam",dynasty:"Eastern Ganga",year:1000,lat:17.76,lng:83.25,desc:"An ornate Hindu temple dedicated to Narasimha.",wiki:"https://en.wikipedia.org/wiki/Varaha_Lakshmi_Narasimha_temple,_Simhachalam"},
    {id:522,name:"Draksharamam Temple",country:"India",state:"Andhra Pradesh",city:"Draksharamam",dynasty:"Eastern Chalukya",year:800,lat:16.79,lng:82.06,desc:"One of the five Pancharama Kshetras.",wiki:"https://en.wikipedia.org/wiki/Draksharama"},
    {id:523,name:"Mangalagiri Temple",country:"India",state:"Andhra Pradesh",city:"Mangalagiri",dynasty:"Vijayanagara",year:1500,lat:16.43,lng:80.56,desc:"A hilltop temple dedicated to Lord Narasimha.",wiki:"https://en.wikipedia.org/wiki/Mangalagiri"},
    {id:524,name:"Araku Tribal Museum",country:"India",state:"Andhra Pradesh",city:"Araku",dynasty:"Modern",year:1996,lat:18.33,lng:82.87,desc:"A cultural center exhibiting regional tribal heritage.",wiki:"https://en.wikipedia.org/wiki/Araku_Valley"},
    {id:525,name:"Kondaveedu Fort",country:"India",state:"Andhra Pradesh",city:"Guntur",dynasty:"Reddi Kingdom",year:1300,lat:16.25,lng:80.26,desc:"A historic hill fort spanning across a mountain range.",wiki:"https://en.wikipedia.org/wiki/Kondaveedu_Fort"},
    {id:526,name:"Machilipatnam Dutch Cemetery",country:"India",state:"Andhra Pradesh",city:"Machilipatnam",dynasty:"Colonial",year:1600,lat:16.18,lng:81.13,desc:"Historic graves dating back to the Dutch settlement.",wiki:"https://en.wikipedia.org/wiki/Machilipatnam"},

    // TELANGANA[cite: 10]
    {id:527,name:"Charminar",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Qutb Shahi",year:1591,lat:17.36,lng:78.47,desc:"The iconic mosque and monument.",wiki:"https://en.wikipedia.org/wiki/Charminar"},
    {id:528,name:"Golconda Fort",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Qutb Shahi",year:1518,lat:17.38,lng:78.40,desc:"A massive citadel and former capital.",wiki:"https://en.wikipedia.org/wiki/Golconda"},
    {id:529,name:"Qutb Shahi Tombs",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Qutb Shahi",year:1543,lat:17.39,lng:78.39,desc:"The tombs of the seven Qutb Shahi rulers.",wiki:"https://en.wikipedia.org/wiki/Qutb_Shahi_tombs"},
    {id:530,name:"Mecca Masjid",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Qutb Shahi",year:1614,lat:17.36,lng:78.47,desc:"One of the largest mosques in India.",wiki:"https://en.wikipedia.org/wiki/Makkah_Masjid,_Hyderabad"},
    {id:531,name:"Chowmahalla Palace",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Asaf Jahi",year:1750,lat:17.35,lng:78.47,desc:"The palace of the Nizams of Hyderabad.",wiki:"https://en.wikipedia.org/wiki/Chowmahalla_Palace"},
    {id:532,name:"Purani Haveli",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Asaf Jahi",year:1800,lat:17.36,lng:78.48,desc:"The official residence of the Nizam.",wiki:"https://en.wikipedia.org/wiki/Purani_Haveli"},
    {id:533,name:"Taramati Baradari",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Qutb Shahi",year:1620,lat:17.37,lng:78.37,desc:"A historic sarai featuring 12 doorways.",wiki:"https://en.wikipedia.org/wiki/Taramati_Baradari"},
    {id:534,name:"Paigah Tombs",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Paigah",year:1787,lat:17.34,lng:78.50,desc:"Intricately carved tombs of the Paigah nobility.",wiki:"https://en.wikipedia.org/wiki/Paigah_Tombs"},
    {id:535,name:"Falaknuma Palace",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Paigah / Asaf Jahi",year:1893,lat:17.33,lng:78.46,desc:"An opulent palace shaped like a scorpion.",wiki:"https://en.wikipedia.org/wiki/Falaknuma_Palace"},
    {id:536,name:"Osmania University Heritage",country:"India",state:"Telangana",city:"Hyderabad",dynasty:"Asaf Jahi",year:1918,lat:17.41,lng:78.52,desc:"The grand historic campus of the university.",wiki:"https://en.wikipedia.org/wiki/Osmania_University"},
    {id:537,name:"Warangal Fort",country:"India",state:"Telangana",city:"Warangal",dynasty:"Kakatiya",year:1100,lat:17.95,lng:79.61,desc:"The ruins of the Kakatiya capital featuring ornamental gateways.",wiki:"https://en.wikipedia.org/wiki/Warangal_Fort"},
    {id:538,name:"Thousand Pillar Temple",country:"India",state:"Telangana",city:"Hanamkonda",dynasty:"Kakatiya",year:1163,lat:18.00,lng:79.58,desc:"An intricately carved ancient Hindu temple.",wiki:"https://en.wikipedia.org/wiki/Thousand_Pillar_Temple"},
    {id:539,name:"Ramappa Temple",country:"India",state:"Telangana",city:"Palampet",dynasty:"Kakatiya",year:1213,lat:18.25,lng:79.94,desc:"A UNESCO World Heritage site known for its floating bricks.",wiki:"https://en.wikipedia.org/wiki/Ramappa_Temple"},
    {id:540,name:"Bhongir Fort",country:"India",state:"Telangana",city:"Bhongir",dynasty:"Western Chalukya",year:1000,lat:17.51,lng:78.89,desc:"An imposing fort situated on a massive monolithic rock.",wiki:"https://en.wikipedia.org/wiki/Bhongir_Fort"},
    {id:541,name:"Devarakonda Fort",country:"India",state:"Telangana",city:"Devarakonda",dynasty:"Recherla Nayakas",year:1300,lat:16.69,lng:78.92,desc:"A ruined hilltop fort.",wiki:"https://en.wikipedia.org/wiki/Devarakonda"},
    {id:542,name:"Rachakonda Fort",country:"India",state:"Telangana",city:"Rachakonda",dynasty:"Recherla Nayakas",year:1300,lat:17.17,lng:78.81,desc:"A medieval Hindu fort surrounded by hills.",wiki:"https://en.wikipedia.org/wiki/Rachakonda_Fort"},
    {id:543,name:"Kota Gullu",country:"India",state:"Telangana",city:"Ghanpur",dynasty:"Kakatiya",year:1200,lat:18.29,lng:79.83,desc:"A group of 12th century stone temples.",wiki:"https://en.wikipedia.org/wiki/Ghanpur,_Jayashankar_Bhupalpally_district"},
    {id:544,name:"Alampur Jogulamba Temple",country:"India",state:"Telangana",city:"Alampur",dynasty:"Badami Chalukyas",year:600,lat:15.87,lng:78.13,desc:"One of the Maha Shakti Peethas.",wiki:"https://en.wikipedia.org/wiki/Jogulamba_Temple"},
    {id:545,name:"Phanigiri Stupa",country:"India",state:"Telangana",city:"Suryapet",dynasty:"Buddhist",year:-200,lat:17.43,lng:79.43,desc:"An ancient Buddhist site featuring viharas and stupas.",wiki:"https://en.wikipedia.org/wiki/Phanigiri"},
    {id:546,name:"Kolanu Bharathi",country:"India",state:"Telangana",city:"Alampur",dynasty:"Badami Chalukyas",year:800,lat:15.89,lng:78.12,desc:"A temple dedicated to Goddess Saraswati.",wiki:"https://en.wikipedia.org/wiki/Alampur,_Telangana"},
// TAMIL NADU[cite: 10]
    {id:547,name:"Shore Temple",country:"India",state:"Tamil Nadu",city:"Mahabalipuram",dynasty:"Pallava",year:700,lat:12.61,lng:80.19,desc:"An ancient structural granite temple overlooking the sea.",wiki:"https://en.wikipedia.org/wiki/Shore_Temple"},
    {id:548,name:"Pancha Rathas",country:"India",state:"Tamil Nadu",city:"Mahabalipuram",dynasty:"Pallava",year:700,lat:12.61,lng:80.19,desc:"Five monolithic rock-cut temples shaped like chariots.",wiki:"https://en.wikipedia.org/wiki/Pancha_Rathas"},
    {id:549,name:"Arjuna's Penance",country:"India",state:"Tamil Nadu",city:"Mahabalipuram",dynasty:"Pallava",year:700,lat:12.61,lng:80.19,desc:"A massive open-air rock relief carved on two boulders.",wiki:"https://en.wikipedia.org/wiki/Descent_of_the_Ganges_(Mahabalipuram)"},
    {id:550,name:"Krishna's Butter Ball",country:"India",state:"Tamil Nadu",city:"Mahabalipuram",dynasty:"Pallava",year:700,lat:12.61,lng:80.19,desc:"A giant balancing rock on a smooth slope.",wiki:"https://en.wikipedia.org/wiki/Krishna%27s_Butterball"},
    {id:551,name:"Kailasanathar Temple",country:"India",state:"Tamil Nadu",city:"Kanchipuram",dynasty:"Pallava",year:700,lat:12.84,lng:79.69,desc:"The oldest structure in Kanchipuram dedicated to Lord Shiva.",wiki:"https://en.wikipedia.org/wiki/Kanchi_Kailasanathar_Temple"},
    {id:552,name:"Vaikunta Perumal Temple",country:"India",state:"Tamil Nadu",city:"Kanchipuram",dynasty:"Pallava",year:800,lat:12.84,lng:79.70,desc:"A temple dedicated to Lord Vishnu.",wiki:"https://en.wikipedia.org/wiki/Vaikunta_Perumal_Temple,_Kanchipuram"},
    {id:553,name:"Ekambareswarar Temple",country:"India",state:"Tamil Nadu",city:"Kanchipuram",dynasty:"Chola",year:600,lat:12.84,lng:79.69,desc:"One of the Pancha Bhoota Stalas.",wiki:"https://en.wikipedia.org/wiki/Ekambareswarar_Temple,_Kanchipuram"},
    {id:554,name:"Brihadisvara Temple",country:"India",state:"Tamil Nadu",city:"Thanjavur",dynasty:"Chola",year:1010,lat:10.78,lng:79.13,desc:"One of the largest South Indian temples.",wiki:"https://en.wikipedia.org/wiki/Brihadisvara_Temple,_Thanjavur"},
    {id:555,name:"Gangaikonda Cholapuram Temple",country:"India",state:"Tamil Nadu",city:"Gangaikonda Cholapuram",dynasty:"Chola",year:1035,lat:11.20,lng:79.44,desc:"A stunning Shiva temple built by Rajendra Chola I.",wiki:"https://en.wikipedia.org/wiki/Brihadisvara_Temple,_Gangaikonda_Cholapuram"},
    {id:556,name:"Airavatesvara Temple",country:"India",state:"Tamil Nadu",city:"Darasuram",dynasty:"Chola",year:1166,lat:10.94,lng:79.35,desc:"A Hindu temple of Dravidian architecture.",wiki:"https://en.wikipedia.org/wiki/Airavatesvara_Temple"},
    {id:557,name:"Chidambaram Nataraja Temple",country:"India",state:"Tamil Nadu",city:"Chidambaram",dynasty:"Chola",year:1000,lat:11.39,lng:79.69,desc:"A major Hindu temple dedicated to Nataraja.",wiki:"https://en.wikipedia.org/wiki/Nataraja_Temple,_Chidambaram"},
    {id:558,name:"Srirangam Ranganathaswamy Temple",country:"India",state:"Tamil Nadu",city:"Tiruchirappalli",dynasty:"Chola",year:1000,lat:10.86,lng:78.68,desc:"The largest functioning Hindu temple in the world.",wiki:"https://en.wikipedia.org/wiki/Ranganathaswamy_Temple,_Srirangam"},
    {id:559,name:"Rockfort Ucchi Pillayar Temple",country:"India",state:"Tamil Nadu",city:"Tiruchirappalli",dynasty:"Pallava",year:700,lat:10.82,lng:78.69,desc:"A 7th-century Hindu temple perched on a rock.",wiki:"https://en.wikipedia.org/wiki/Ucchi_Pillayar_Temple,_Rockfort"},
    {id:560,name:"Meenakshi Amman Temple",country:"India",state:"Tamil Nadu",city:"Madurai",dynasty:"Pandya",year:1190,lat:9.91,lng:78.11,desc:"A historic Hindu temple with towering gopurams.",wiki:"https://en.wikipedia.org/wiki/Meenakshi_Temple"},
    {id:561,name:"Thirumalai Nayak Palace",country:"India",state:"Tamil Nadu",city:"Madurai",dynasty:"Nayak",year:1636,lat:9.91,lng:78.12,desc:"A classic fusion of Dravidian and Rajput styles.",wiki:"https://en.wikipedia.org/wiki/Thirumalai_Nayakkar_Mahal"},
    {id:562,name:"Gingee Fort",country:"India",state:"Tamil Nadu",city:"Gingee",dynasty:"Vijayanagara",year:1190,lat:12.25,lng:79.39,desc:"Known as the 'Troy of the East'.",wiki:"https://en.wikipedia.org/wiki/Gingee_Fort"},
    {id:563,name:"Vellore Fort",country:"India",state:"Tamil Nadu",city:"Vellore",dynasty:"Vijayanagara",year:1566,lat:12.92,lng:79.13,desc:"A large 16th-century fort.",wiki:"https://en.wikipedia.org/wiki/Vellore_Fort"},
    {id:564,name:"Fort St George",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Colonial",year:1644,lat:13.08,lng:80.28,desc:"The first English fortress in India.",wiki:"https://en.wikipedia.org/wiki/Fort_St._George,_India"},
    {id:565,name:"Kapaleeshwarar Temple",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Pallava",year:700,lat:13.03,lng:80.26,desc:"A temple of Shiva located in Mylapore.",wiki:"https://en.wikipedia.org/wiki/Kapaleeshwarar_Temple"},
    {id:566,name:"San Thome Basilica",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Colonial",year:1523,lat:13.03,lng:80.27,desc:"A Catholic basilica built over the tomb of St Thomas.",wiki:"https://en.wikipedia.org/wiki/San_Thome_Basilica"},
    {id:567,name:"Government Museum",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Colonial",year:1851,lat:13.07,lng:80.25,desc:"The second oldest museum in India.",wiki:"https://en.wikipedia.org/wiki/Government_Museum,_Chennai"},
    {id:568,name:"Ripon Building",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Colonial",year:1913,lat:13.08,lng:80.27,desc:"An all-white structure in Indo-Saracenic style.",wiki:"https://en.wikipedia.org/wiki/Ripon_Building"},
    {id:569,name:"Madras High Court",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Colonial",year:1892,lat:13.08,lng:80.28,desc:"One of the largest judicial complexes in the world.",wiki:"https://en.wikipedia.org/wiki/Madras_High_Court"},
    {id:570,name:"Chepauk Palace",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Nawab of Arcot",year:1768,lat:13.06,lng:80.28,desc:"The official residence of the Nawabs of Arcot.",wiki:"https://en.wikipedia.org/wiki/Chepauk_Palace"},
    {id:571,name:"DakshinaChitra",country:"India",state:"Tamil Nadu",city:"Chennai",dynasty:"Modern",year:1996,lat:12.82,lng:80.24,desc:"A living-history museum of South India.",wiki:"https://en.wikipedia.org/wiki/DakshinaChitra"},
    {id:572,name:"Danish Fort",country:"India",state:"Tamil Nadu",city:"Tharangambadi",dynasty:"Colonial",year:1620,lat:11.02,lng:79.85,desc:"A fort built by the Danish East India Company.",wiki:"https://en.wikipedia.org/wiki/Fort_Dansborg"},
    {id:573,name:"Tranquebar Gateway",country:"India",state:"Tamil Nadu",city:"Tharangambadi",dynasty:"Colonial",year:1792,lat:11.02,lng:79.85,desc:"The town gate of the Danish settlement.",wiki:"https://en.wikipedia.org/wiki/Tharangambadi"},
    {id:574,name:"Vivekananda Rock Memorial",country:"India",state:"Tamil Nadu",city:"Kanyakumari",dynasty:"Modern",year:1970,lat:8.07,lng:77.55,desc:"A monument built on a rock in the ocean.",wiki:"https://en.wikipedia.org/wiki/Vivekananda_Rock_Memorial"},
    {id:575,name:"Padmanabhapuram Palace",country:"India",state:"Tamil Nadu",city:"Padmanabhapuram",dynasty:"Travancore",year:1601,lat:8.25,lng:77.32,desc:"A magnificent wooden palace of the Travancore rulers.",wiki:"https://en.wikipedia.org/wiki/Padmanabhapuram_Palace"},
    {id:576,name:"Thiruvalluvar Statue",country:"India",state:"Tamil Nadu",city:"Kanyakumari",dynasty:"Modern",year:2000,lat:8.07,lng:77.55,desc:"A 133-feet tall stone sculpture.",wiki:"https://en.wikipedia.org/wiki/Thiruvalluvar_Statue"},
    {id:577,name:"Chola Temple Complex",country:"India",state:"Tamil Nadu",city:"Kumbakonam",dynasty:"Chola",year:1000,lat:10.96,lng:79.38,desc:"A city famous for its multitude of Chola temples.",wiki:"https://en.wikipedia.org/wiki/Kumbakonam"},
    {id:578,name:"Ramanathaswamy Temple",country:"India",state:"Tamil Nadu",city:"Rameswaram",dynasty:"Pandya",year:1100,lat:9.28,lng:79.31,desc:"A Hindu temple holding the longest corridor.",wiki:"https://en.wikipedia.org/wiki/Ramanathaswamy_Temple"},
    {id:579,name:"Dhanushkodi Church Ruins",country:"India",state:"Tamil Nadu",city:"Dhanushkodi",dynasty:"Colonial",year:1900,lat:9.22,lng:79.40,desc:"The ruins of a town destroyed by a cyclone.",wiki:"https://en.wikipedia.org/wiki/Dhanushkodi"},
    {id:580,name:"Kalugumalai Jain Monuments",country:"India",state:"Tamil Nadu",city:"Thoothukudi",dynasty:"Pandya",year:800,lat:9.14,lng:77.70,desc:"Rock-cut Jain cave temples and sculptures.",wiki:"https://en.wikipedia.org/wiki/Kalugumalai_Jain_Beds"},
    {id:581,name:"Sittanavasal Cave Paintings",country:"India",state:"Tamil Nadu",city:"Pudukkottai",dynasty:"Pandya",year:600,lat:10.45,lng:78.72,desc:"Rock-cut Jain temples featuring early frescoes.",wiki:"https://en.wikipedia.org/wiki/Sittanavasal_Cave"},
    {id:582,name:"Narthamalai Vijayalaya",country:"India",state:"Tamil Nadu",city:"Pudukkottai",dynasty:"Chola",year:850,lat:10.51,lng:78.75,desc:"One of the oldest Chola stone temples.",wiki:"https://en.wikipedia.org/wiki/Narthamalai"},

    // KERALA[cite: 10]
    {id:583,name:"Mattancherry Palace",country:"India",state:"Kerala",city:"Kochi",dynasty:"Portuguese",year:1555,lat:9.95,lng:76.25,desc:"The Dutch Palace, featuring Kerala murals.",wiki:"https://en.wikipedia.org/wiki/Mattancherry_Palace"},
    {id:584,name:"Jewish Synagogue",country:"India",state:"Kerala",city:"Kochi",dynasty:"Colonial",year:1568,lat:9.95,lng:76.25,desc:"The oldest active synagogue in the Commonwealth.",wiki:"https://en.wikipedia.org/wiki/Paradesi_Synagogue"},
    {id:585,name:"St Francis Church",country:"India",state:"Kerala",city:"Kochi",dynasty:"Colonial",year:1503,lat:9.96,lng:76.24,desc:"One of the oldest European churches in India.",wiki:"https://en.wikipedia.org/wiki/St._Francis_Church,_Kochi"},
    {id:586,name:"Santa Cruz Basilica",country:"India",state:"Kerala",city:"Kochi",dynasty:"Colonial",year:1505,lat:9.96,lng:76.24,desc:"A historic church built by the Portuguese.",wiki:"https://en.wikipedia.org/wiki/Santa_Cruz_Basilica"},
    {id:587,name:"Bolgatty Palace",country:"India",state:"Kerala",city:"Kochi",dynasty:"Colonial",year:1744,lat:9.98,lng:76.26,desc:"A palace built by the Dutch.",wiki:"https://en.wikipedia.org/wiki/Bolgatty_Palace"},
    {id:588,name:"Hill Palace",country:"India",state:"Kerala",city:"Tripunithura",dynasty:"Cochin",year:1865,lat:9.95,lng:76.36,desc:"The largest archaeological museum in Kerala.",wiki:"https://en.wikipedia.org/wiki/Hill_Palace,_Tripunithura"},
    {id:589,name:"Paradesi Synagogue",country:"India",state:"Kerala",city:"Mattancherry",dynasty:"Colonial",year:1568,lat:9.95,lng:76.25,desc:"Located in the Jewish quarter of Kochi.",wiki:"https://en.wikipedia.org/wiki/Paradesi_Synagogue"},
    {id:590,name:"Dutch Cemetery",country:"India",state:"Kerala",city:"Kochi",dynasty:"Colonial",year:1724,lat:9.96,lng:76.23,desc:"Historic graves of Dutch settlers and soldiers.",wiki:"https://en.wikipedia.org/wiki/Kochi"},
    {id:591,name:"Bekal Fort",country:"India",state:"Kerala",city:"Kasaragod",dynasty:"Shivappa Nayaka",year:1650,lat:12.39,lng:75.03,desc:"The largest fort in Kerala, shaped like a giant keyhole.",wiki:"https://en.wikipedia.org/wiki/Bekal_Fort"},
    {id:592,name:"Palakkad Fort",country:"India",state:"Kerala",city:"Palakkad",dynasty:"Hyder Ali",year:1766,lat:10.76,lng:76.65,desc:"A beautiful granite fort.",wiki:"https://en.wikipedia.org/wiki/Palakkad_Fort"},
    {id:593,name:"Thalassery Fort",country:"India",state:"Kerala",city:"Thalassery",dynasty:"Colonial",year:1708,lat:11.74,lng:75.48,desc:"A square fort overlooking the sea.",wiki:"https://en.wikipedia.org/wiki/Thalassery_Fort"},
    {id:594,name:"St Angelo Fort",country:"India",state:"Kerala",city:"Kannur",dynasty:"Colonial",year:1505,lat:11.85,lng:75.36,desc:"A coastal fort built by the first Portuguese Viceroy.",wiki:"https://en.wikipedia.org/wiki/St._Angelo_Fort"},
    {id:595,name:"Arakkal Palace Museum",country:"India",state:"Kerala",city:"Kannur",dynasty:"Arakkal Kingdom",year:1800,lat:11.85,lng:75.36,desc:"The palace of Kerala's only Muslim royal family.",wiki:"https://en.wikipedia.org/wiki/Arakkal_Museum"},
    {id:596,name:"Muziris Heritage Site",country:"India",state:"Kerala",city:"Kodungallur",dynasty:"Chera",year:-100,lat:10.23,lng:76.19,desc:"The ancient seaport and urban center.",wiki:"https://en.wikipedia.org/wiki/Muziris"},
    {id:597,name:"Vadakkunnathan Temple",country:"India",state:"Kerala",city:"Thrissur",dynasty:"Traditional",year:800,lat:10.52,lng:76.21,desc:"An ancient Hindu temple showcasing classic Kerala architecture.",wiki:"https://en.wikipedia.org/wiki/Vadakkunnathan_Temple"},
    {id:598,name:"Koodalmanikyam Temple",country:"India",state:"Kerala",city:"Irinjalakuda",dynasty:"Traditional",year:800,lat:10.34,lng:76.20,desc:"A famous Hindu temple.",wiki:"https://en.wikipedia.org/wiki/Koodalmanikyam_Temple"},
    {id:599,name:"Sree Padmanabhaswamy Temple",country:"India",state:"Kerala",city:"Thiruvananthapuram",dynasty:"Travancore",year:800,lat:8.48,lng:76.94,desc:"An incredibly wealthy ancient temple.",wiki:"https://en.wikipedia.org/wiki/Padmanabhaswamy_Temple"},
    {id:600,name:"Kuthira Malika Palace",country:"India",state:"Kerala",city:"Thiruvananthapuram",dynasty:"Travancore",year:1840,lat:8.48,lng:76.94,desc:"The 'Mansion of Horses' featuring exquisite wood carvings.",wiki:"https://en.wikipedia.org/wiki/Kuthira_Malika"},
    {id:601,name:"Napier Museum",country:"India",state:"Kerala",city:"Thiruvananthapuram",dynasty:"Colonial",year:1880,lat:8.50,lng:76.95,desc:"An art and natural history museum.",wiki:"https://en.wikipedia.org/wiki/Napier_Museum"},
    {id:602,name:"Anchuthengu Fort",country:"India",state:"Kerala",city:"Varkala",dynasty:"Colonial",year:1695,lat:8.66,lng:76.76,desc:"The East India Company's first settlement in Kerala.",wiki:"https://en.wikipedia.org/wiki/Anchuthengu_Fort"},
    {id:603,name:"Edakkal Caves",country:"India",state:"Kerala",city:"Wayanad",dynasty:"Prehistoric",year:-6000,lat:11.62,lng:76.23,desc:"Caves featuring ancient petroglyphs.",wiki:"https://en.wikipedia.org/wiki/Edakkal_Caves"},
    {id:604,name:"Krishnapuram Palace",country:"India",state:"Kerala",city:"Kayamkulam",dynasty:"Travancore",year:1700,lat:9.15,lng:76.49,desc:"A palace and museum known for its mural paintings.",wiki:"https://en.wikipedia.org/wiki/Krishnapuram_Palace"},

    // ODISHA[cite: 10]
    {id:605,name:"Dhauli Shanti Stupa",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Mauryan",year:-260,lat:20.19,lng:85.83,desc:"Stupa marking the site of the Kalinga War.",wiki:"https://en.wikipedia.org/wiki/Dhauli"},
    {id:606,name:"Udayagiri Caves",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Mahameghavahana",year:-100,lat:20.26,lng:85.78,desc:"Partly natural and partly artificial ancient caves.",wiki:"https://en.wikipedia.org/wiki/Udayagiri_and_Khandagiri_Caves"},
    {id:607,name:"Khandagiri Caves",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Mahameghavahana",year:-100,lat:20.25,lng:85.78,desc:"Ancient Jain rock-cut caves.",wiki:"https://en.wikipedia.org/wiki/Udayagiri_and_Khandagiri_Caves"},
    {id:608,name:"Lingaraj Temple",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Somavamsi",year:1000,lat:20.23,lng:85.83,desc:"A soaring, majestic temple dominating the skyline.",wiki:"https://en.wikipedia.org/wiki/Lingaraja_Temple"},
    {id:609,name:"Mukteshwar Temple",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Somavamsi",year:950,lat:20.24,lng:85.84,desc:"A 10th-century Hindu temple dedicated to Shiva.",wiki:"https://en.wikipedia.org/wiki/Mukteshvara_Temple,_Bhubaneswar"},
    {id:610,name:"Rajarani Temple",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Somavamsi",year:1000,lat:20.24,lng:85.84,desc:"An 11th-century Hindu temple known as the 'love temple'.",wiki:"https://en.wikipedia.org/wiki/Rajarani_Temple"},
    {id:611,name:"Parashurameshvara Temple",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Shailodbhava",year:650,lat:20.24,lng:85.83,desc:"One of the oldest existing temples in Odisha.",wiki:"https://en.wikipedia.org/wiki/Parashurameshvara_Temple"},
    {id:612,name:"Brahmeswara Temple",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Somavamsi",year:1058,lat:20.23,lng:85.85,desc:"A temple noted for its iron beams.",wiki:"https://en.wikipedia.org/wiki/Brahmeswara_Temple"},
    {id:613,name:"Konark Sun Temple",country:"India",state:"Odisha",city:"Konark",dynasty:"Eastern Ganga",year:1250,lat:19.88,lng:86.09,desc:"A stunning sun temple shaped like a giant chariot.",wiki:"https://en.wikipedia.org/wiki/Konark_Sun_Temple"},
    {id:614,name:"Jagannath Temple",country:"India",state:"Odisha",city:"Puri",dynasty:"Eastern Ganga",year:1161,lat:19.80,lng:85.81,desc:"A highly sacred Hindu temple.",wiki:"https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri"},
    {id:615,name:"Puri Gundicha Temple",country:"India",state:"Odisha",city:"Puri",dynasty:"Gajapati",year:1500,lat:19.81,lng:85.83,desc:"The destination of the famous Rath Yatra.",wiki:"https://en.wikipedia.org/wiki/Gundicha_Temple"},
    {id:616,name:"Barabati Fort",country:"India",state:"Odisha",city:"Cuttack",dynasty:"Eastern Ganga",year:1300,lat:20.48,lng:85.86,desc:"The ruins of an ancient fort.",wiki:"https://en.wikipedia.org/wiki/Barabati_Fort"},
    {id:617,name:"Ananta Vasudeva Temple",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Eastern Ganga",year:1278,lat:20.24,lng:85.83,desc:"A Hindu temple dedicated to Lord Krishna.",wiki:"https://en.wikipedia.org/wiki/Ananta_Vasudeva_Temple"},
    {id:618,name:"Chausathi Yogini Temple",country:"India",state:"Odisha",city:"Hirapur",dynasty:"Bhauma-Kara",year:800,lat:20.19,lng:85.86,desc:"An ancient circular temple.",wiki:"https://en.wikipedia.org/wiki/Chausath_Yogini_Temple,_Hirapur"},
    {id:619,name:"Ratnagiri Buddhist Site",country:"India",state:"Odisha",city:"Jajpur",dynasty:"Gupta",year:400,lat:20.64,lng:86.33,desc:"A major Buddhist monastery site.",wiki:"https://en.wikipedia.org/wiki/Ratnagiri,_Odisha"},
    {id:620,name:"Udayagiri Buddhist Site",country:"India",state:"Odisha",city:"Jajpur",dynasty:"Buddhist",year:700,lat:20.62,lng:86.26,desc:"The largest Buddhist complex in Odisha.",wiki:"https://en.wikipedia.org/wiki/Udayagiri,_Odisha"},
    {id:621,name:"Lalitgiri Buddhist Site",country:"India",state:"Odisha",city:"Jajpur",dynasty:"Buddhist",year:100,lat:20.59,lng:86.25,desc:"One of the oldest Buddhist settlements in Odisha.",wiki:"https://en.wikipedia.org/wiki/Lalitgiri"},
    {id:622,name:"Sisupalgarh Archaeological Site",country:"India",state:"Odisha",city:"Bhubaneswar",dynasty:"Ancient",year:-300,lat:20.23,lng:85.85,desc:"A ruined fortification.",wiki:"https://en.wikipedia.org/wiki/Sisupalgarh"},
    {id:623,name:"Buddhist Site at Langudi",country:"India",state:"Odisha",city:"Jajpur",dynasty:"Buddhist",year:100,lat:20.73,lng:86.18,desc:"A prominent Buddhist archaeological site.",wiki:"https://en.wikipedia.org/wiki/Langudi_Hill"},
    {id:624,name:"Jagannath Temple Heritage Complex",country:"India",state:"Odisha",city:"Puri",dynasty:"Eastern Ganga",year:1161,lat:19.80,lng:85.81,desc:"The historic surroundings of the main temple.",wiki:"https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri"},

    // WEST BENGAL[cite: 10]
    {id:625,name:"Victoria Memorial",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"British Raj",year:1921,lat:22.54,lng:88.34,desc:"A vast marble building dedicated to Queen Victoria.",wiki:"https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata"},
    {id:626,name:"Howrah Bridge",country:"India",state:"West Bengal",city:"Howrah",dynasty:"British Raj",year:1943,lat:22.58,lng:88.34,desc:"An iconic balanced cantilever bridge.",wiki:"https://en.wikipedia.org/wiki/Howrah_Bridge"},
    {id:627,name:"St Paul's Cathedral",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1847,lat:22.54,lng:88.34,desc:"An Anglican cathedral known for its Gothic architecture.",wiki:"https://en.wikipedia.org/wiki/St._Paul%27s_Cathedral,_Kolkata"},
    {id:628,name:"St John's Church",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1787,lat:22.56,lng:88.34,desc:"One of the first public buildings erected by the East India Company.",wiki:"https://en.wikipedia.org/wiki/St._John%27s_Church,_Kolkata"},
    {id:629,name:"Marble Palace",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1835,lat:22.58,lng:88.36,desc:"A palatial 19th-century mansion.",wiki:"https://en.wikipedia.org/wiki/Marble_Palace_(Kolkata)"},
    {id:630,name:"Indian Museum",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1814,lat:22.55,lng:88.35,desc:"The largest and oldest museum in India.",wiki:"https://en.wikipedia.org/wiki/Indian_Museum"},
    {id:631,name:"Writer's Building",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1777,lat:22.57,lng:88.34,desc:"The historic secretariat building of the state.",wiki:"https://en.wikipedia.org/wiki/Writers%27_Building"},
    {id:632,name:"Raj Bhavan",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1803,lat:22.56,lng:88.34,desc:"The official residence of the Governor.",wiki:"https://en.wikipedia.org/wiki/Raj_Bhavan,_Kolkata"},
    {id:633,name:"General Post Office",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1868,lat:22.57,lng:88.34,desc:"The central post office known for its imposing dome.",wiki:"https://en.wikipedia.org/wiki/General_Post_Office,_Kolkata"},
    {id:634,name:"Metcalfe Hall",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1844,lat:22.57,lng:88.34,desc:"A heritage building reflective of British architecture.",wiki:"https://en.wikipedia.org/wiki/Metcalfe_Hall"},
    {id:635,name:"Fort William",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1781,lat:22.55,lng:88.33,desc:"A fort built by the East India Company.",wiki:"https://en.wikipedia.org/wiki/Fort_William,_India"},
    {id:636,name:"Belur Math",country:"India",state:"West Bengal",city:"Howrah",dynasty:"Modern",year:1938,lat:22.63,lng:88.35,desc:"The headquarters of the Ramakrishna Math.",wiki:"https://en.wikipedia.org/wiki/Belur_Math"},
    {id:637,name:"Dakshineswar Kali Temple",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Modern",year:1855,lat:22.65,lng:88.35,desc:"A famous Hindu navaratna temple.",wiki:"https://en.wikipedia.org/wiki/Dakshineswar_Kali_Temple"},
    {id:638,name:"Jorasanko Thakur Bari",country:"India",state:"West Bengal",city:"Kolkata",dynasty:"Colonial",year:1784,lat:22.58,lng:88.35,desc:"The ancestral home of the Tagore family.",wiki:"https://en.wikipedia.org/wiki/Jorasanko_Thakur_Bari"},
    {id:639,name:"Hazarduari Palace",country:"India",state:"West Bengal",city:"Murshidabad",dynasty:"Nawab of Bengal",year:1837,lat:24.18,lng:88.26,desc:"The magnificent 'Palace of a Thousand Doors'.",wiki:"https://en.wikipedia.org/wiki/Hazarduari_Palace"},
    {id:640,name:"Katra Mosque",country:"India",state:"West Bengal",city:"Murshidabad",dynasty:"Nawab of Bengal",year:1724,lat:24.18,lng:88.28,desc:"A historic mosque and tomb.",wiki:"https://en.wikipedia.org/wiki/Katra_Mosque"},
    {id:641,name:"Nizamat Imambara",country:"India",state:"West Bengal",city:"Murshidabad",dynasty:"Nawab of Bengal",year:1847,lat:24.18,lng:88.26,desc:"The largest Imambara in India.",wiki:"https://en.wikipedia.org/wiki/Nizamat_Imambara"},
    {id:642,name:"Khosh Bagh",country:"India",state:"West Bengal",city:"Murshidabad",dynasty:"Nawab of Bengal",year:1750,lat:24.16,lng:88.26,desc:"The resting place of the Nawabs.",wiki:"https://en.wikipedia.org/wiki/Khosh_Bagh"},
    {id:643,name:"Cooch Behar Palace",country:"India",state:"West Bengal",city:"Cooch Behar",dynasty:"Koch Dynasty",year:1887,lat:26.32,lng:89.43,desc:"An elegant palace modelled on Buckingham Palace.",wiki:"https://en.wikipedia.org/wiki/Cooch_Behar_Palace"},
    {id:644,name:"Bishnupur Rasmancha",country:"India",state:"West Bengal",city:"Bishnupur",dynasty:"Malla Dynasty",year:1600,lat:23.07,lng:87.32,desc:"A historical pyramidal building.",wiki:"https://en.wikipedia.org/wiki/Rasmancha"},
    {id:645,name:"Jor Bangla Temple",country:"India",state:"West Bengal",city:"Bishnupur",dynasty:"Malla Dynasty",year:1655,lat:23.07,lng:87.32,desc:"Famous for elaborate terracotta ornamentation.",wiki:"https://en.wikipedia.org/wiki/Jor_Bangla_Temple"},
    {id:646,name:"Madanmohan Temple",country:"India",state:"West Bengal",city:"Bishnupur",dynasty:"Malla Dynasty",year:1694,lat:23.08,lng:87.32,desc:"A terracotta temple dedicated to Lord Krishna.",wiki:"https://en.wikipedia.org/wiki/Bishnupur,_Bankura"},
    {id:647,name:"Mukutmanipur Heritage",country:"India",state:"West Bengal",city:"Bankura",dynasty:"Regional",year:1950,lat:22.96,lng:86.78,desc:"A serene earthen dam and heritage locale.",wiki:"https://en.wikipedia.org/wiki/Mukutmanipur"},
    {id:648,name:"Adina Mosque",country:"India",state:"West Bengal",city:"Malda",dynasty:"Sultanate of Bengal",year:1373,lat:25.14,lng:88.15,desc:"The largest mosque in the Indian subcontinent at its time.",wiki:"https://en.wikipedia.org/wiki/Adina_Mosque"},
    {id:649,name:"Gaur Archaeological Site",country:"India",state:"West Bengal",city:"Malda",dynasty:"Sultanate of Bengal",year:1400,lat:24.87,lng:88.13,desc:"The historic ruined city of Gaur.",wiki:"https://en.wikipedia.org/wiki/Gaud,_India"},
    {id:650,name:"Firoz Minar",country:"India",state:"West Bengal",city:"Malda",dynasty:"Sultanate of Bengal",year:1489,lat:24.86,lng:88.13,desc:"A 26-meter high victory tower.",wiki:"https://en.wikipedia.org/wiki/Firoz_Minar"},
    {id:651,name:"Dakhil Darwaza",country:"India",state:"West Bengal",city:"Malda",dynasty:"Sultanate of Bengal",year:1425,lat:24.87,lng:88.13,desc:"The grand surviving gateway of Gaur.",wiki:"https://en.wikipedia.org/wiki/Gaud,_India"},
    {id:652,name:"Chika Mosque",country:"India",state:"West Bengal",city:"Malda",dynasty:"Sultanate of Bengal",year:1450,lat:24.86,lng:88.13,desc:"A single-domed historic mosque.",wiki:"https://en.wikipedia.org/wiki/Gaud,_India"},
    {id:653,name:"Jalpaiguri Rajbari",country:"India",state:"West Bengal",city:"Jalpaiguri",dynasty:"Baikunthapur",year:1800,lat:26.51,lng:88.72,desc:"The historic palace of the local rajas.",wiki:"https://en.wikipedia.org/wiki/Jalpaiguri"},

    // JHARKHAND[cite: 10]
    {id:654,name:"Maluti Temple Complex",country:"India",state:"Jharkhand",city:"Dumka",dynasty:"Regional",year:1600,lat:24.15,lng:87.66,desc:"A group of 72 historic terracotta temples.",wiki:"https://en.wikipedia.org/wiki/Maluti_temples"},
    {id:655,name:"Jagannath Temple",country:"India",state:"Jharkhand",city:"Ranchi",dynasty:"Nagvanshi",year:1691,lat:23.31,lng:85.29,desc:"A hilltop temple built resembling the Puri temple.",wiki:"https://en.wikipedia.org/wiki/Jagannath_Temple,_Ranchi"},
    {id:656,name:"Pahari Mandir",country:"India",state:"Jharkhand",city:"Ranchi",dynasty:"Hindu Religious",year:1800,lat:23.37,lng:85.31,desc:"A Shiva temple accessed by 468 steps.",wiki:"https://en.wikipedia.org/wiki/Ranchi"},
    {id:657,name:"Tagore Hill Heritage Site",country:"India",state:"Jharkhand",city:"Ranchi",dynasty:"Colonial",year:1900,lat:23.40,lng:85.33,desc:"Associated with Rabindranath Tagore's brother.",wiki:"https://en.wikipedia.org/wiki/Tagore_Hill"},
    {id:658,name:"Navratangarh Fort",country:"India",state:"Jharkhand",city:"Gumla",dynasty:"Nagvanshi",year:1500,lat:23.01,lng:84.81,desc:"The ruins of the Nagvanshi kingdom.",wiki:"https://en.wikipedia.org/wiki/Navratangarh"},
    {id:659,name:"Palamu Fort",country:"India",state:"Jharkhand",city:"Latehar",dynasty:"Chero",year:1619,lat:23.89,lng:84.22,desc:"Twin historic ruined forts deep within the forest.",wiki:"https://en.wikipedia.org/wiki/Palamu_Forts"},
    {id:660,name:"Upper Fort Palamu",country:"India",state:"Jharkhand",city:"Latehar",dynasty:"Chero",year:1619,lat:23.89,lng:84.22,desc:"Part of the Palamu forts complex.",wiki:"https://en.wikipedia.org/wiki/Palamu_Forts"},
    {id:661,name:"Lower Fort Palamu",country:"India",state:"Jharkhand",city:"Latehar",dynasty:"Chero",year:1619,lat:23.89,lng:84.22,desc:"Part of the Palamu forts complex.",wiki:"https://en.wikipedia.org/wiki/Palamu_Forts"},
    {id:662,name:"Sun Temple",country:"India",state:"Jharkhand",city:"Ranchi",dynasty:"Modern",year:1990,lat:23.15,lng:85.57,desc:"A modern temple shaped like a chariot.",wiki:"https://en.wikipedia.org/wiki/Ranchi"},
    {id:663,name:"Itkhori Archaeological Site",country:"India",state:"Jharkhand",city:"Chatra",dynasty:"Ancient",year:800,lat:24.29,lng:85.15,desc:"A confluence of Hindu, Jain and Buddhist heritage.",wiki:"https://en.wikipedia.org/wiki/Itkhori"},
    {id:664,name:"Baidyanath Temple",country:"India",state:"Jharkhand",city:"Deoghar",dynasty:"Regional",year:1596,lat:24.49,lng:86.69,desc:"One of the highly revered Jyotirlingas.",wiki:"https://en.wikipedia.org/wiki/Baidyanath_Temple"},
    {id:665,name:"Basukinath Temple",country:"India",state:"Jharkhand",city:"Dumka",dynasty:"Regional",year:1500,lat:24.39,lng:87.08,desc:"A prominent Hindu pilgrimage destination.",wiki:"https://en.wikipedia.org/wiki/Basukinath"},
    {id:666,name:"Deori Temple",country:"India",state:"Jharkhand",city:"Tamar",dynasty:"Regional",year:1300,lat:23.03,lng:85.64,desc:"A historic temple dedicated to Goddess Durga.",wiki:"https://en.wikipedia.org/wiki/Deori_Temple_(Jharkhand)"},
    {id:667,name:"Jonha Falls Heritage",country:"India",state:"Jharkhand",city:"Ranchi",dynasty:"Natural",year:-1000,lat:23.35,lng:85.64,desc:"A prominent natural heritage site.",wiki:"https://en.wikipedia.org/wiki/Jonha_Falls"},
    {id:668,name:"Dassam Falls Heritage",country:"India",state:"Jharkhand",city:"Ranchi",dynasty:"Natural",year:-1000,lat:23.05,lng:85.49,desc:"A prominent natural heritage site.",wiki:"https://en.wikipedia.org/wiki/Dassam_Falls"},

    // CHHATTISGARH[cite: 10]
    {id:669,name:"Sirpur Archaeological Site",country:"India",state:"Chhattisgarh",city:"Mahasamund",dynasty:"Somavamshi",year:600,lat:21.41,lng:82.19,desc:"A vast landscape of Hindu, Jain and Buddhist ruins.",wiki:"https://en.wikipedia.org/wiki/Sirpur_Group_of_Monuments"},
    {id:670,name:"Lakshman Temple",country:"India",state:"Chhattisgarh",city:"Sirpur",dynasty:"Somavamshi",year:600,lat:21.41,lng:82.19,desc:"One of the finest brick temples of ancient India.",wiki:"https://en.wikipedia.org/wiki/Sirpur_Group_of_Monuments"},
    {id:671,name:"Surang Tila",country:"India",state:"Chhattisgarh",city:"Sirpur",dynasty:"Somavamshi",year:600,lat:21.41,lng:82.19,desc:"A large stepped temple structure.",wiki:"https://en.wikipedia.org/wiki/Sirpur_Group_of_Monuments"},
    {id:672,name:"Buddhist Monastery Site",country:"India",state:"Chhattisgarh",city:"Sirpur",dynasty:"Somavamshi",year:600,lat:21.41,lng:82.19,desc:"Ancient viharas found during excavations.",wiki:"https://en.wikipedia.org/wiki/Sirpur_Group_of_Monuments"},
    {id:673,name:"Bhoramdeo Temple",country:"India",state:"Chhattisgarh",city:"Kawardha",dynasty:"Nagvanshi",year:1089,lat:22.11,lng:81.14,desc:"Often referred to as the Khajuraho of Chhattisgarh.",wiki:"https://en.wikipedia.org/wiki/Bhoramdeo_Temple"},
    {id:674,name:"Madwa Mahal",country:"India",state:"Chhattisgarh",city:"Kawardha",dynasty:"Nagvanshi",year:1349,lat:22.10,lng:81.14,desc:"A historic stone temple near Bhoramdeo.",wiki:"https://en.wikipedia.org/wiki/Bhoramdeo_Temple"},
    {id:675,name:"Danteshwari Temple",country:"India",state:"Chhattisgarh",city:"Dantewada",dynasty:"Chalukya",year:1300,lat:18.89,lng:81.35,desc:"A highly revered Shakti Peetha.",wiki:"https://en.wikipedia.org/wiki/Danteshwari_Temple"},
    {id:676,name:"Ratanpur Fort",country:"India",state:"Chhattisgarh",city:"Ratanpur",dynasty:"Kalachuri",year:1050,lat:22.28,lng:82.16,desc:"The ruins of the ancient capital of Chhattisgarh.",wiki:"https://en.wikipedia.org/wiki/Ratanpur"},
    {id:677,name:"Mahamaya Temple",country:"India",state:"Chhattisgarh",city:"Ratanpur",dynasty:"Kalachuri",year:1045,lat:22.29,lng:82.16,desc:"A revered 11th-century temple.",wiki:"https://en.wikipedia.org/wiki/Mahamaya_Temple,_Ratanpur"},
    {id:678,name:"Tala Devrani-Jethani Temples",country:"India",state:"Chhattisgarh",city:"Bilaspur",dynasty:"Sharabhapuriya",year:500,lat:21.93,lng:82.02,desc:"Ancient twin temples of Shiva.",wiki:"https://en.wikipedia.org/wiki/Tala,_Chhattisgarh"},
    {id:679,name:"Malhar Archaeological Site",country:"India",state:"Chhattisgarh",city:"Bilaspur",dynasty:"Satavahana",year:-200,lat:21.89,lng:82.28,desc:"A major ancient town in Central India.",wiki:"https://en.wikipedia.org/wiki/Malhar,_Chhattisgarh"},
    {id:680,name:"Kondagaon Bastar Palace",country:"India",state:"Chhattisgarh",city:"Kondagaon",dynasty:"Bastar",year:1800,lat:19.59,lng:81.66,desc:"Historic palace of the Bastar royalty.",wiki:"https://en.wikipedia.org/wiki/Jagdalpur"},
    {id:681,name:"Rajim Temples",country:"India",state:"Chhattisgarh",city:"Rajim",dynasty:"Somavamshi",year:600,lat:20.96,lng:81.87,desc:"A cluster of fine historic Hindu temples.",wiki:"https://en.wikipedia.org/wiki/Rajim"},
    {id:682,name:"Rajiv Lochan Temple",country:"India",state:"Chhattisgarh",city:"Rajim",dynasty:"Somavamshi",year:600,lat:20.96,lng:81.87,desc:"The main Vishnu temple in Rajim.",wiki:"https://en.wikipedia.org/wiki/Rajim"},

    // HIMACHAL PRADESH[cite: 10]
    {id:683,name:"Kangra Fort",country:"India",state:"Himachal Pradesh",city:"Kangra",dynasty:"Katoch",year:400,lat:32.08,lng:76.25,desc:"The largest fort in the Himalayas.",wiki:"https://en.wikipedia.org/wiki/Kangra_Fort"},
    {id:684,name:"Masroor Rock Cut Temples",country:"India",state:"Himachal Pradesh",city:"Kangra",dynasty:"Katoch",year:700,lat:32.07,lng:76.14,desc:"Unique monolithic rock-cut temples.",wiki:"https://en.wikipedia.org/wiki/Masroor_Rock_Cut_Temple"},
    {id:685,name:"Chintpurni Temple",country:"India",state:"Himachal Pradesh",city:"Una",dynasty:"Hindu Religious",year:1500,lat:31.82,lng:76.11,desc:"A major pilgrimage centre.",wiki:"https://en.wikipedia.org/wiki/Chintpurni"},
    {id:686,name:"Bhuri Singh Museum",country:"India",state:"Himachal Pradesh",city:"Chamba",dynasty:"Colonial",year:1908,lat:32.55,lng:76.12,desc:"A heritage museum.",wiki:"https://en.wikipedia.org/wiki/Bhuri_Singh_Museum"},
    {id:687,name:"Lakshminarayan Temple",country:"India",state:"Himachal Pradesh",city:"Chamba",dynasty:"Rajput",year:900,lat:32.55,lng:76.12,desc:"The oldest and largest temple in Chamba.",wiki:"https://en.wikipedia.org/wiki/Chamba,_Himachal_Pradesh"},
    {id:688,name:"Champavati Temple",country:"India",state:"Himachal Pradesh",city:"Chamba",dynasty:"Rajput",year:1000,lat:32.55,lng:76.12,desc:"Temple featuring unique Shikhara style.",wiki:"https://en.wikipedia.org/wiki/Chamba,_Himachal_Pradesh"},
    {id:689,name:"Hidimba Devi Temple",country:"India",state:"Himachal Pradesh",city:"Manali",dynasty:"Rajput",year:1553,lat:32.25,lng:77.18,desc:"A historic wooden cave temple.",wiki:"https://en.wikipedia.org/wiki/Hidimba_Devi_Temple"},
    {id:690,name:"Naggar Castle",country:"India",state:"Himachal Pradesh",city:"Naggar",dynasty:"Rajput",year:1460,lat:32.11,lng:77.17,desc:"A medieval castle made of wood and stone.",wiki:"https://en.wikipedia.org/wiki/Naggar_Castle"},
    {id:691,name:"Hadimba Temple Heritage",country:"India",state:"Himachal Pradesh",city:"Manali",dynasty:"Rajput",year:1553,lat:32.25,lng:77.18,desc:"The ancient forested area surrounding the temple.",wiki:"https://en.wikipedia.org/wiki/Hidimba_Devi_Temple"},
    {id:692,name:"Viceregal Lodge",country:"India",state:"Himachal Pradesh",city:"Shimla",dynasty:"British Raj",year:1888,lat:31.10,lng:77.14,desc:"The former residence of the British Viceroy.",wiki:"https://en.wikipedia.org/wiki/Rashtrapati_Niwas"},
    {id:693,name:"Christ Church",country:"India",state:"Himachal Pradesh",city:"Shimla",dynasty:"British Raj",year:1857,lat:31.10,lng:77.17,desc:"The second oldest church in North India.",wiki:"https://en.wikipedia.org/wiki/Christ_Church,_Shimla"},
    {id:694,name:"Gaiety Theatre",country:"India",state:"Himachal Pradesh",city:"Shimla",dynasty:"British Raj",year:1887,lat:31.10,lng:77.17,desc:"A historic Gothic-style theatre.",wiki:"https://en.wikipedia.org/wiki/Gaiety_Theatre,_Shimla"},
    {id:695,name:"Jakhu Temple",country:"India",state:"Himachal Pradesh",city:"Shimla",dynasty:"Hindu Religious",year:1800,lat:31.10,lng:77.18,desc:"An ancient temple dedicated to Hanuman.",wiki:"https://en.wikipedia.org/wiki/Jakhu_Temple"},
    {id:696,name:"Kalka-Shimla Railway",country:"India",state:"Himachal Pradesh",city:"Shimla",dynasty:"British Raj",year:1903,lat:31.10,lng:77.17,desc:"A UNESCO World Heritage mountain railway.",wiki:"https://en.wikipedia.org/wiki/Kalka%E2%80%93Shimla_Railway"},
    {id:697,name:"Tabo Monastery",country:"India",state:"Himachal Pradesh",city:"Spiti",dynasty:"Tibetan Buddhist",year:996,lat:32.09,lng:78.38,desc:"One of the oldest continuously functioning Buddhist enclaves.",wiki:"https://en.wikipedia.org/wiki/Tabo_Monastery"},
    {id:698,name:"Key Monastery",country:"India",state:"Himachal Pradesh",city:"Spiti",dynasty:"Tibetan Buddhist",year:1000,lat:32.29,lng:78.01,desc:"A spectacular hilltop Tibetan Buddhist monastery.",wiki:"https://en.wikipedia.org/wiki/Key_Monastery"},

    // JAMMU & KASHMIR[cite: 10]
    {id:699,name:"Martand Sun Temple",country:"India",state:"Jammu and Kashmir",city:"Anantnag",dynasty:"Karkota",year:700,lat:33.74,lng:75.22,desc:"The grand ruins of a majestic 8th-century temple.",wiki:"https://en.wikipedia.org/wiki/Martand_Sun_Temple"},
    {id:700,name:"Awantipora Temple Ruins",country:"India",state:"Jammu and Kashmir",city:"Pulwama",dynasty:"Utpala",year:855,lat:33.92,lng:75.01,desc:"Ancient Hindu temples built by King Awantivarman.",wiki:"https://en.wikipedia.org/wiki/Awantipora"},
    {id:701,name:"Parihaspora Archaeological Site",country:"India",state:"Jammu and Kashmir",city:"Baramulla",dynasty:"Karkota",year:700,lat:34.15,lng:74.63,desc:"Ruins of an ancient capital city.",wiki:"https://en.wikipedia.org/wiki/Parihaspora"},
    {id:702,name:"Shankaracharya Temple",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Ancient",year:200,lat:34.07,lng:74.85,desc:"A historic temple perched on a hilltop.",wiki:"https://en.wikipedia.org/wiki/Shankaracharya_Temple"},
    {id:703,name:"Hari Parbat Fort",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Mughal Empire",year:1590,lat:34.08,lng:74.81,desc:"A fort overseeing Srinagar.",wiki:"https://en.wikipedia.org/wiki/Hari_Parbat"},
    {id:704,name:"Shalimar Bagh",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Mughal Empire",year:1619,lat:34.15,lng:74.87,desc:"A beautifully laid out Mughal garden.",wiki:"https://en.wikipedia.org/wiki/Shalimar_Bagh,_Srinagar"},
    {id:705,name:"Nishat Bagh",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Mughal Empire",year:1633,lat:34.12,lng:74.88,desc:"The 'Garden of Joy'.",wiki:"https://en.wikipedia.org/wiki/Nishat_Bagh"},
    {id:706,name:"Chashme Shahi",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Mughal Empire",year:1632,lat:34.08,lng:74.88,desc:"A terraced Mughal garden built around a spring.",wiki:"https://en.wikipedia.org/wiki/Chashme_Shahi"},
    {id:707,name:"Pari Mahal",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Mughal Empire",year:1650,lat:34.08,lng:74.88,desc:"The 'Palace of Fairies'.",wiki:"https://en.wikipedia.org/wiki/Pari_Mahal"},
    {id:708,name:"Jamia Masjid",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Shah Mir",year:1394,lat:34.10,lng:74.81,desc:"A historic mosque known for its wooden pillars.",wiki:"https://en.wikipedia.org/wiki/Jamia_Masjid,_Srinagar"},
    {id:709,name:"Hazratbal Shrine",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Islamic Heritage",year:1634,lat:34.13,lng:74.84,desc:"A pristine white shrine on Dal Lake.",wiki:"https://en.wikipedia.org/wiki/Hazratbal_Shrine"},
    {id:710,name:"Khanqah-e-Moula",country:"India",state:"Jammu and Kashmir",city:"Srinagar",dynasty:"Shah Mir",year:1395,lat:34.09,lng:74.80,desc:"One of the oldest Muslim shrines in Kashmir.",wiki:"https://en.wikipedia.org/wiki/Khanqah-e-Moula"},
    {id:711,name:"Akhnoor Fort",country:"India",state:"Jammu and Kashmir",city:"Akhnoor",dynasty:"Dogra",year:1762,lat:32.88,lng:74.74,desc:"A historic fort perched on the Chenab River.",wiki:"https://en.wikipedia.org/wiki/Akhnoor_Fort"},
    {id:712,name:"Bahu Fort",country:"India",state:"Jammu and Kashmir",city:"Jammu",dynasty:"Dogra",year:1800,lat:32.72,lng:74.87,desc:"An ancient fort overlooking the Tawi river.",wiki:"https://en.wikipedia.org/wiki/Bahu_Fort"},
    {id:713,name:"Mubarak Mandi Palace",country:"India",state:"Jammu and Kashmir",city:"Jammu",dynasty:"Dogra",year:1824,lat:32.73,lng:74.87,desc:"The royal residence of the maharaja of Jammu and Kashmir.",wiki:"https://en.wikipedia.org/wiki/Mubarak_Mandi_Palace"},
    {id:714,name:"Amar Mahal Palace",country:"India",state:"Jammu and Kashmir",city:"Jammu",dynasty:"Dogra",year:1890,lat:32.74,lng:74.87,desc:"A 19th-century palace converted into a museum.",wiki:"https://en.wikipedia.org/wiki/Amar_Mahal_Palace"},
    {id:715,name:"Raghunath Temple",country:"India",state:"Jammu and Kashmir",city:"Jammu",dynasty:"Dogra",year:1860,lat:32.73,lng:74.86,desc:"One of the largest temple complexes in Northern India.",wiki:"https://en.wikipedia.org/wiki/Raghunath_Temple"},
    {id:716,name:"Peer Kho Cave Temple",country:"India",state:"Jammu and Kashmir",city:"Jammu",dynasty:"Hindu Religious",year:1400,lat:32.74,lng:74.88,desc:"An ancient cave temple dedicated to Shiva.",wiki:"https://en.wikipedia.org/wiki/Jammu"},
    {id:717,name:"Purmandal Temple Complex",country:"India",state:"Jammu and Kashmir",city:"Samba",dynasty:"Hindu Religious",year:1800,lat:32.69,lng:75.05,desc:"A historic temple complex known as 'Chhota Kashi'.",wiki:"https://en.wikipedia.org/wiki/Purmandal"},

    // LADAKH[cite: 10]
    {id:718,name:"Leh Palace",country:"India",state:"Ladakh",city:"Leh",dynasty:"Namgyal",year:1600,lat:34.16,lng:77.58,desc:"A former royal palace overlooking the town.",wiki:"https://en.wikipedia.org/wiki/Leh_Palace"},
    {id:719,name:"Shanti Stupa",country:"India",state:"Ladakh",city:"Leh",dynasty:"Modern Buddhist",year:1991,lat:34.17,lng:77.57,desc:"A hilltop peace pagoda.",wiki:"https://en.wikipedia.org/wiki/Shanti_Stupa,_Leh"},
    {id:720,name:"Namgyal Tsemo Monastery",country:"India",state:"Ladakh",city:"Leh",dynasty:"Namgyal",year:1430,lat:34.16,lng:77.59,desc:"A Buddhist monastery featuring a three-story high Maitreya Buddha.",wiki:"https://en.wikipedia.org/wiki/Namgyal_Tsemo_Monastery"},
    {id:721,name:"Sankar Monastery",country:"India",state:"Ladakh",city:"Leh",dynasty:"Tibetan Buddhist",year:1850,lat:34.17,lng:77.58,desc:"A serene monastery in Leh.",wiki:"https://en.wikipedia.org/wiki/Sankar_Monastery"},
    {id:722,name:"Thiksey Monastery",country:"India",state:"Ladakh",city:"Thiksey",dynasty:"Tibetan Buddhist",year:1430,lat:34.05,lng:77.66,desc:"A spectacular 12-storey hilltop monastery.",wiki:"https://en.wikipedia.org/wiki/Thikse_Monastery"},
    {id:723,name:"Hemis Monastery",country:"India",state:"Ladakh",city:"Hemis",dynasty:"Tibetan Buddhist",year:1672,lat:33.91,lng:77.70,desc:"A wealthy Himalayan Buddhist monastery.",wiki:"https://en.wikipedia.org/wiki/Hemis_Monastery"},
    {id:724,name:"Shey Palace and Monastery",country:"India",state:"Ladakh",city:"Shey",dynasty:"Namgyal",year:1655,lat:34.07,lng:77.63,desc:"The former summer capital of Ladakh.",wiki:"https://en.wikipedia.org/wiki/Shey_Monastery"},
    {id:725,name:"Stok Palace",country:"India",state:"Ladakh",city:"Stok",dynasty:"Namgyal",year:1820,lat:34.07,lng:77.54,desc:"The residence of the displaced Ladakhi royalty.",wiki:"https://en.wikipedia.org/wiki/Stok_Palace"},
    {id:726,name:"Alchi Monastery Complex",country:"India",state:"Ladakh",city:"Alchi",dynasty:"Tibetan Buddhist",year:1000,lat:34.22,lng:77.17,desc:"One of the oldest monasteries in Ladakh.",wiki:"https://en.wikipedia.org/wiki/Alchi_Monastery"},
    {id:727,name:"Likir Monastery",country:"India",state:"Ladakh",city:"Likir",dynasty:"Tibetan Buddhist",year:1065,lat:34.29,lng:77.21,desc:"A prominent Gelugpa sect monastery.",wiki:"https://en.wikipedia.org/wiki/Likir_Monastery"},
    {id:728,name:"Lamayuru Monastery",country:"India",state:"Ladakh",city:"Lamayuru",dynasty:"Tibetan Buddhist",year:1000,lat:34.28,lng:76.77,desc:"One of the largest and oldest gompas in Ladakh.",wiki:"https://en.wikipedia.org/wiki/Lamayuru_Monastery"},
    {id:729,name:"Diskit Monastery",country:"India",state:"Ladakh",city:"Nubra",dynasty:"Tibetan Buddhist",year:1300,lat:34.55,lng:77.55,desc:"The oldest and largest Buddhist monastery in the Nubra Valley.",wiki:"https://en.wikipedia.org/wiki/Diskit_Monastery"},
    {id:730,name:"Basgo Monastery and Fort",country:"India",state:"Ladakh",city:"Basgo",dynasty:"Namgyal",year:1680,lat:34.21,lng:77.28,desc:"Historic ruins of a Ladakhi stronghold.",wiki:"https://en.wikipedia.org/wiki/Basgo_Monastery"},

    // SIKKIM[cite: 10]
    {id:731,name:"Pemayangtse Monastery",country:"India",state:"Sikkim",city:"Pelling",dynasty:"Namgyal",year:1705,lat:27.30,lng:88.24,desc:"One of the oldest premier monasteries of Sikkim.",wiki:"https://en.wikipedia.org/wiki/Pemayangtse_Monastery"},
    {id:732,name:"Rumtek Monastery",country:"India",state:"Sikkim",city:"Gangtok",dynasty:"Buddhist",year:1740,lat:27.30,lng:88.52,desc:"The largest Tibetan Buddhist monastery in Sikkim.",wiki:"https://en.wikipedia.org/wiki/Rumtek_Monastery"},
    {id:733,name:"Dubdi Monastery",country:"India",state:"Sikkim",city:"Yuksom",dynasty:"Namgyal",year:1701,lat:27.38,lng:88.22,desc:"Often referred to as the Hermit's Cell.",wiki:"https://en.wikipedia.org/wiki/Dubdi_Monastery"},
    {id:734,name:"Tashiding Monastery",country:"India",state:"Sikkim",city:"Tashiding",dynasty:"Namgyal",year:1717,lat:27.31,lng:88.29,desc:"A revered monastery sitting on a heart-shaped hill.",wiki:"https://en.wikipedia.org/wiki/Tashiding_Monastery"},
    {id:735,name:"Enchey Monastery",country:"India",state:"Sikkim",city:"Gangtok",dynasty:"Namgyal",year:1909,lat:27.33,lng:88.61,desc:"A 200-year-old Nyingma monastery.",wiki:"https://en.wikipedia.org/wiki/Enchey_Monastery"},
    {id:736,name:"Rabdentse Ruins",country:"India",state:"Sikkim",city:"Pelling",dynasty:"Namgyal",year:1670,lat:27.30,lng:88.24,desc:"The ruins of the former capital of Sikkim.",wiki:"https://en.wikipedia.org/wiki/Rabdentse"},
    {id:737,name:"Namgyal Institute of Tibetology",country:"India",state:"Sikkim",city:"Gangtok",dynasty:"Namgyal",year:1958,lat:27.31,lng:88.60,desc:"A premier institute for Tibetan research.",wiki:"https://en.wikipedia.org/wiki/Namgyal_Institute_of_Tibetology"},
    {id:738,name:"Do-Drul Chorten",country:"India",state:"Sikkim",city:"Gangtok",dynasty:"Buddhist",year:1945,lat:27.31,lng:88.60,desc:"A massive stupa built by Trulshik Rinpoche.",wiki:"https://en.wikipedia.org/wiki/Do-drul_Chorten"},

    // ASSAM[cite: 10]
    {id:739,name:"Kamakhya Temple",country:"India",state:"Assam",city:"Guwahati",dynasty:"Koch",year:800,lat:26.16,lng:91.70,desc:"One of the most revered Shakti Pithas.",wiki:"https://en.wikipedia.org/wiki/Kamakhya_Temple"},
    {id:740,name:"Umananda Temple",country:"India",state:"Assam",city:"Guwahati",dynasty:"Ahom",year:1694,lat:26.19,lng:91.74,desc:"A Shiva temple located on Peacock Island.",wiki:"https://en.wikipedia.org/wiki/Umananda_Temple"},
    {id:741,name:"Navagraha Temple",country:"India",state:"Assam",city:"Guwahati",dynasty:"Ahom",year:1752,lat:26.19,lng:91.76,desc:"An ancient temple dedicated to the nine celestial bodies.",wiki:"https://en.wikipedia.org/wiki/Navagraha_temple"},
    {id:742,name:"Rang Ghar",country:"India",state:"Assam",city:"Sivasagar",dynasty:"Ahom",year:1744,lat:26.96,lng:94.62,desc:"One of the oldest surviving amphitheaters in Asia.",wiki:"https://en.wikipedia.org/wiki/Rang_Ghar"},
    {id:743,name:"Talatal Ghar",country:"India",state:"Assam",city:"Sivasagar",dynasty:"Ahom",year:1751,lat:26.96,lng:94.62,desc:"An impressive historic palace complex.",wiki:"https://en.wikipedia.org/wiki/Talatal_Ghar"},
    {id:744,name:"Kareng Ghar",country:"India",state:"Assam",city:"Sivasagar",dynasty:"Ahom",year:1751,lat:26.96,lng:94.62,desc:"The royal palace of the Ahom kings.",wiki:"https://en.wikipedia.org/wiki/Kareng_Ghar"},
    {id:745,name:"Sivadol",country:"India",state:"Assam",city:"Sivasagar",dynasty:"Ahom",year:1734,lat:26.98,lng:94.63,desc:"A group of structures comprising three Hindu temples.",wiki:"https://en.wikipedia.org/wiki/Sivadol"},
    {id:746,name:"Joysagar Tank",country:"India",state:"Assam",city:"Sivasagar",dynasty:"Ahom",year:1697,lat:26.96,lng:94.62,desc:"A massive historic man-made lake.",wiki:"https://en.wikipedia.org/wiki/Sivasagar"},
    {id:747,name:"Charaideo Moidams",country:"India",state:"Assam",city:"Charaideo",dynasty:"Ahom",year:1228,lat:26.93,lng:94.87,desc:"The royal burial grounds of the Ahom dynasty.",wiki:"https://en.wikipedia.org/wiki/Charaideo"},
    {id:748,name:"Agni Garh",country:"India",state:"Assam",city:"Tezpur",dynasty:"Ancient",year:500,lat:26.62,lng:92.79,desc:"A historic hillock site.",wiki:"https://en.wikipedia.org/wiki/Agnigarh"},
    {id:749,name:"Da Parbatia Ruins",country:"India",state:"Assam",city:"Tezpur",dynasty:"Gupta",year:600,lat:26.63,lng:92.76,desc:"An ancient temple ruin featuring a carved stone doorframe.",wiki:"https://en.wikipedia.org/wiki/Da_Parbatia"},
    {id:750,name:"Madan Kamdev",country:"India",state:"Assam",city:"Kamrup",dynasty:"Pala",year:900,lat:26.35,lng:91.68,desc:"An archaeological site featuring erotic sculptures.",wiki:"https://en.wikipedia.org/wiki/Madan_Kamdev"},
    {id:751,name:"Surya Pahar",country:"India",state:"Assam",city:"Goalpara",dynasty:"Ancient",year:500,lat:26.11,lng:90.72,desc:"An ancient site bearing ruins of multiple faiths.",wiki:"https://en.wikipedia.org/wiki/Sri_Surya_Pahar"},
    {id:752,name:"Hajo Heritage Complex",country:"India",state:"Assam",city:"Hajo",dynasty:"Koch",year:1583,lat:26.24,lng:91.53,desc:"An ancient pilgrimage centre for Hindus, Buddhists, and Muslims.",wiki:"https://en.wikipedia.org/wiki/Hajo"},
    {id:753,name:"Poa Mecca",country:"India",state:"Assam",city:"Hajo",dynasty:"Islamic Heritage",year:1657,lat:26.24,lng:91.53,desc:"A revered Muslim shrine.",wiki:"https://en.wikipedia.org/wiki/Hajo"},
    {id:754,name:"Sankardev Kalakshetra",country:"India",state:"Assam",city:"Guwahati",dynasty:"Modern",year:1998,lat:26.13,lng:91.82,desc:"A cultural institution of Assam.",wiki:"https://en.wikipedia.org/wiki/Srimanta_Sankaradev_Kalakshetra"},

    // ARUNACHAL PRADESH[cite: 10]
    {id:755,name:"Tawang Monastery",country:"India",state:"Arunachal Pradesh",city:"Tawang",dynasty:"Tibetan Buddhist",year:1680,lat:27.58,lng:91.85,desc:"The largest Buddhist monastery in India.",wiki:"https://en.wikipedia.org/wiki/Tawang_Monastery"},
    {id:756,name:"Urgelling Monastery",country:"India",state:"Arunachal Pradesh",city:"Tawang",dynasty:"Tibetan Buddhist",year:1487,lat:27.56,lng:91.85,desc:"The birthplace of the 6th Dalai Lama.",wiki:"https://en.wikipedia.org/wiki/Tawang_district"},
    {id:757,name:"Bomdila Monastery",country:"India",state:"Arunachal Pradesh",city:"Bomdila",dynasty:"Tibetan Buddhist",year:1965,lat:27.26,lng:92.42,desc:"A prominent Buddhist monastery.",wiki:"https://en.wikipedia.org/wiki/Bomdila"},
    {id:758,name:"Malinithan Temple Ruins",country:"India",state:"Arunachal Pradesh",city:"Likabali",dynasty:"Chutiya",year:1400,lat:27.65,lng:94.67,desc:"An archaeological site consisting of ruined Hindu temples.",wiki:"https://en.wikipedia.org/wiki/Malinithan"},
    {id:759,name:"Bhismaknagar",country:"India",state:"Arunachal Pradesh",city:"Roing",dynasty:"Chutiya",year:1200,lat:28.14,lng:95.84,desc:"The ruins of a historical fort.",wiki:"https://en.wikipedia.org/wiki/Bhismaknagar"},
    {id:760,name:"Ita Fort",country:"India",state:"Arunachal Pradesh",city:"Itanagar",dynasty:"Chutiya",year:1400,lat:27.09,lng:93.62,desc:"A historic 'Fort of Bricks'.",wiki:"https://en.wikipedia.org/wiki/Ita_Fort"},
    {id:761,name:"Gompa at Dirang",country:"India",state:"Arunachal Pradesh",city:"Dirang",dynasty:"Tibetan Buddhist",year:1600,lat:27.35,lng:92.23,desc:"An ancient Buddhist dzong and monastery.",wiki:"https://en.wikipedia.org/wiki/Dirang"},

    // MEGHALAYA[cite: 10]
    {id:762,name:"Nartiang Monoliths",country:"India",state:"Meghalaya",city:"Jaintia Hills",dynasty:"Jaintia",year:1500,lat:25.57,lng:92.22,desc:"A vast collection of ancient megalithic stones.",wiki:"https://en.wikipedia.org/wiki/Nartiang_Megaliths"},
    {id:763,name:"Nartiang Durga Temple",country:"India",state:"Meghalaya",city:"Nartiang",dynasty:"Jaintia",year:1500,lat:25.57,lng:92.22,desc:"A historic Shakti Peetha.",wiki:"https://en.wikipedia.org/wiki/Nartiang_Durga_Temple"},
    {id:764,name:"Nartiang Stone Bridge",country:"India",state:"Meghalaya",city:"Nartiang",dynasty:"Jaintia",year:1500,lat:25.57,lng:92.22,desc:"A historic monolithic stone bridge.",wiki:"https://en.wikipedia.org/wiki/Nartiang_Megaliths"},
    {id:765,name:"Jaintia Palace Ruins",country:"India",state:"Meghalaya",city:"Jowai",dynasty:"Jaintia",year:1500,lat:25.44,lng:92.20,desc:"The ruins of the summer palace.",wiki:"https://en.wikipedia.org/wiki/Jowai"},
    {id:766,name:"Shillong Cathedral",country:"India",state:"Meghalaya",city:"Shillong",dynasty:"Colonial",year:1936,lat:25.57,lng:91.88,desc:"The Cathedral of Mary Help of Christians.",wiki:"https://en.wikipedia.org/wiki/Cathedral_of_Mary_Help_of_Christians,_Shillong"},
    {id:767,name:"All Saints Cathedral",country:"India",state:"Meghalaya",city:"Shillong",dynasty:"Colonial",year:1902,lat:25.57,lng:91.88,desc:"An Anglican church in Shillong.",wiki:"https://en.wikipedia.org/wiki/Shillong"},
    {id:768,name:"David Scott Trail",country:"India",state:"Meghalaya",city:"Sohra",dynasty:"Colonial",year:1800,lat:25.39,lng:91.73,desc:"A historic colonial-era horse trail.",wiki:"https://en.wikipedia.org/wiki/Cherrapunji"},
    {id:769,name:"Mawphlang Sacred Grove",country:"India",state:"Meghalaya",city:"Mawphlang",dynasty:"Cultural Heritage",year:-1000,lat:25.44,lng:91.75,desc:"An ancient preserved forest sacred to the Khasi people.",wiki:"https://en.wikipedia.org/wiki/Mawphlang"},

    // MANIPUR[cite: 10]
    {id:770,name:"Kangla Fort",country:"India",state:"Manipur",city:"Imphal",dynasty:"Meitei Kingdom",year:1632,lat:24.81,lng:93.94,desc:"The ancient seat of the Meitei rulers.",wiki:"https://en.wikipedia.org/wiki/Kangla_Palace"},
    {id:771,name:"Shri Govindajee Temple",country:"India",state:"Manipur",city:"Imphal",dynasty:"Meitei Kingdom",year:1846,lat:24.81,lng:93.95,desc:"A major historic Vaishnavite temple.",wiki:"https://en.wikipedia.org/wiki/Shree_Govindajee_Temple"},
    {id:772,name:"Andro Shree Temple",country:"India",state:"Manipur",city:"Andro",dynasty:"Cultural Heritage",year:1800,lat:24.73,lng:94.04,desc:"An ancient cultural village temple.",wiki:"https://en.wikipedia.org/wiki/Andro,_Manipur"},
    {id:773,name:"Khongjom War Memorial",country:"India",state:"Manipur",city:"Khongjom",dynasty:"Colonial",year:1891,lat:24.56,lng:94.02,desc:"A memorial to the Anglo-Manipur War.",wiki:"https://en.wikipedia.org/wiki/Khongjom"},
    {id:774,name:"INA Memorial",country:"India",state:"Manipur",city:"Moirang",dynasty:"Indian National Army",year:1944,lat:24.50,lng:93.76,desc:"The site where the INA flag was first hoisted.",wiki:"https://en.wikipedia.org/wiki/Moirang"},
    {id:775,name:"Moirang Kangla",country:"India",state:"Manipur",city:"Moirang",dynasty:"Cultural Heritage",year:1500,lat:24.50,lng:93.76,desc:"A historic Meitei heritage site.",wiki:"https://en.wikipedia.org/wiki/Moirang"},

    // MIZORAM[cite: 10]
    {id:776,name:"Sibuta Lung",country:"India",state:"Mizoram",city:"Aizawl",dynasty:"Mizo Heritage",year:1700,lat:23.73,lng:92.71,desc:"A historic memorial stone.",wiki:"https://en.wikipedia.org/wiki/Aizawl"},
    {id:777,name:"Solomon's Temple",country:"India",state:"Mizoram",city:"Aizawl",dynasty:"Modern",year:1996,lat:23.73,lng:92.74,desc:"A massive modern temple carved in marble.",wiki:"https://en.wikipedia.org/wiki/Solomon%27s_Temple,_Aizawl"},
    {id:778,name:"Mizoram State Museum",country:"India",state:"Mizoram",city:"Aizawl",dynasty:"Cultural Heritage",year:1990,lat:23.73,lng:92.71,desc:"A museum showcasing Mizo heritage.",wiki:"https://en.wikipedia.org/wiki/Mizoram_State_Museum"},
    {id:779,name:"Phulpui Grave",country:"India",state:"Mizoram",city:"Saitual",dynasty:"Mizo Heritage",year:1800,lat:23.63,lng:92.83,desc:"A historic cultural grave site.",wiki:"https://en.wikipedia.org/wiki/Mizoram"},

    // NAGALAND[cite: 10]
    {id:780,name:"Kachari Ruins",country:"India",state:"Nagaland",city:"Dimapur",dynasty:"Kachari",year:900,lat:25.90,lng:93.73,desc:"Ancient monolithic ruins.",wiki:"https://en.wikipedia.org/wiki/Kachari_Ruins"},
    {id:781,name:"Diezephe Village",country:"India",state:"Nagaland",city:"Dimapur",dynasty:"Naga Heritage",year:1800,lat:25.80,lng:93.70,desc:"A craft village maintaining ancient Naga heritage.",wiki:"https://en.wikipedia.org/wiki/Dimapur_district"},
    {id:782,name:"Kohima War Cemetery",country:"India",state:"Nagaland",city:"Kohima",dynasty:"British Raj",year:1944,lat:25.66,lng:94.10,desc:"A WWII memorial.",wiki:"https://en.wikipedia.org/wiki/Kohima_War_Cemetery"},
    {id:783,name:"Kohima Cathedral",country:"India",state:"Nagaland",city:"Kohima",dynasty:"Modern",year:1989,lat:25.65,lng:94.10,desc:"A prominent cathedral in Nagaland.",wiki:"https://en.wikipedia.org/wiki/Kohima"},
    {id:784,name:"State Museum",country:"India",state:"Nagaland",city:"Kohima",dynasty:"Modern",year:1970,lat:25.66,lng:94.10,desc:"A museum preserving Naga tribal heritage.",wiki:"https://en.wikipedia.org/wiki/Kohima"},

    // TRIPURA[cite: 10]
    {id:785,name:"Ujjayanta Palace",country:"India",state:"Tripura",city:"Agartala",dynasty:"Manikya",year:1901,lat:23.83,lng:91.28,desc:"The grand white royal palace.",wiki:"https://en.wikipedia.org/wiki/Ujjayanta_Palace"},
    {id:786,name:"Neermahal Palace",country:"India",state:"Tripura",city:"Melaghar",dynasty:"Manikya",year:1930,lat:23.49,lng:91.31,desc:"A stunning water palace located in the middle of a lake.",wiki:"https://en.wikipedia.org/wiki/Neermahal"},
    {id:787,name:"Tripura Sundari Temple",country:"India",state:"Tripura",city:"Udaipur",dynasty:"Manikya",year:1501,lat:23.51,lng:91.49,desc:"One of the 51 Shakti Peethas.",wiki:"https://en.wikipedia.org/wiki/Tripura_Sundari_Temple"},
    {id:788,name:"Bhubaneswari Temple",country:"India",state:"Tripura",city:"Udaipur",dynasty:"Manikya",year:1660,lat:23.53,lng:91.48,desc:"A historic temple.",wiki:"https://en.wikipedia.org/wiki/Bhubaneswari_Temple,_Udaipur"},
    {id:789,name:"Unakoti Sculptures",country:"India",state:"Tripura",city:"Unakoti",dynasty:"Ancient",year:700,lat:24.31,lng:92.01,desc:"A massive rock-cut ancient Shiva site.",wiki:"https://en.wikipedia.org/wiki/Unakoti"},
    {id:790,name:"Pilak Archaeological Site",country:"India",state:"Tripura",city:"South Tripura",dynasty:"Buddhist",year:800,lat:23.27,lng:91.61,desc:"An ancient Buddhist archaeological site.",wiki:"https://en.wikipedia.org/wiki/Pilak,_Tripura"},
    {id:791,name:"Sepahijala Heritage",country:"India",state:"Tripura",city:"Tripura",dynasty:"Natural",year:1970,lat:23.63,lng:91.33,desc:"A wildlife sanctuary and heritage precinct.",wiki:"https://en.wikipedia.org/wiki/Sepahijala_Wildlife_Sanctuary"},

    // PUDUCHERRY[cite: 10]
    {id:792,name:"French Quarter",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"French Colonial",year:1674,lat:11.93,lng:79.83,desc:"A preserved colonial townscape.",wiki:"https://en.wikipedia.org/wiki/Pondicherry"},
    {id:793,name:"Basilica of the Sacred Heart",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"French Colonial",year:1907,lat:11.92,lng:79.82,desc:"A gothic-style Catholic basilica.",wiki:"https://en.wikipedia.org/wiki/Basilica_of_the_Sacred_Heart_of_Jesus,_Pondicherry"},
    {id:794,name:"Immaculate Conception Cathedral",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"French Colonial",year:1791,lat:11.93,lng:79.83,desc:"The mother church of the Roman Catholic Archdiocese.",wiki:"https://en.wikipedia.org/wiki/Immaculate_Conception_Cathedral,_Pondicherry"},
    {id:795,name:"Sri Aurobindo Ashram",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"Modern",year:1926,lat:11.93,lng:79.83,desc:"A prominent spiritual community.",wiki:"https://en.wikipedia.org/wiki/Sri_Aurobindo_Ashram"},
    {id:796,name:"Raj Niwas",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"French Colonial",year:1700,lat:11.93,lng:79.83,desc:"The official residence of the Lieutenant Governor.",wiki:"https://en.wikipedia.org/wiki/Raj_Niwas,_Pondicherry"},
    {id:797,name:"French War Memorial",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"French Colonial",year:1937,lat:11.93,lng:79.83,desc:"Dedicated to residents who died in WWI.",wiki:"https://en.wikipedia.org/wiki/French_War_Memorial"},
    {id:798,name:"Arikamedu Archaeological Site",country:"India",state:"Puducherry",city:"Ariyankuppam",dynasty:"Ancient",year:-200,lat:11.88,lng:79.81,desc:"An ancient Roman trade centre.",wiki:"https://en.wikipedia.org/wiki/Arikamedu"},
    {id:799,name:"Aayi Mandapam",country:"India",state:"Puducherry",city:"Puducherry",dynasty:"French Colonial",year:1854,lat:11.93,lng:79.83,desc:"A gleaming white monument located in Bharathi Park.",wiki:"https://en.wikipedia.org/wiki/Aayi_Mandapam"},

    // DAMAN & DIU / DADRA & NAGAR HAVELI[cite: 10]
    {id:800,name:"Diu Fort",country:"India",state:"Daman and Diu",city:"Diu",dynasty:"Portuguese",year:1535,lat:20.71,lng:70.99,desc:"A massive Portuguese coastal fortress.",wiki:"https://en.wikipedia.org/wiki/Diu_Fort"},
    {id:801,name:"St Paul's Church",country:"India",state:"Daman and Diu",city:"Diu",dynasty:"Portuguese",year:1601,lat:20.71,lng:70.98,desc:"A stunning baroque architectural church.",wiki:"https://en.wikipedia.org/wiki/St._Paul%27s_Church,_Diu"},
    {id:802,name:"Naida Caves",country:"India",state:"Daman and Diu",city:"Diu",dynasty:"Natural",year:1500,lat:20.71,lng:70.98,desc:"A network of historic caves with natural skylights.",wiki:"https://en.wikipedia.org/wiki/Diu,_India"},
    {id:803,name:"St Thomas Church Museum",country:"India",state:"Daman and Diu",city:"Diu",dynasty:"Portuguese",year:1598,lat:20.71,lng:70.98,desc:"A historic church converted into a museum.",wiki:"https://en.wikipedia.org/wiki/Diu,_India"},
    {id:804,name:"Moti Daman Fort",country:"India",state:"Daman and Diu",city:"Daman",dynasty:"Portuguese",year:1559,lat:20.41,lng:72.83,desc:"A large 16th-century colonial fort.",wiki:"https://en.wikipedia.org/wiki/Daman,_India"},
    {id:805,name:"Fort Jerome",country:"India",state:"Daman and Diu",city:"Nani Daman",dynasty:"Portuguese",year:1627,lat:20.41,lng:72.83,desc:"A coastal fort facing the sea.",wiki:"https://en.wikipedia.org/wiki/Daman,_India"},
    {id:806,name:"Bom Jesus Church",country:"India",state:"Daman and Diu",city:"Daman",dynasty:"Portuguese",year:1559,lat:20.41,lng:72.83,desc:"An intricately carved Portuguese church.",wiki:"https://en.wikipedia.org/wiki/Daman,_India"},

    // ANDAMAN & NICOBAR ISLANDS[cite: 10]
    {id:807,name:"Cellular Jail",country:"India",state:"Andaman and Nicobar",city:"Port Blair",dynasty:"British Raj",year:1906,lat:11.67,lng:92.74,desc:"The infamous colonial prison.",wiki:"https://en.wikipedia.org/wiki/Cellular_Jail"},
    {id:808,name:"Ross Island Ruins",country:"India",state:"Andaman and Nicobar",city:"Port Blair",dynasty:"British Raj",year:1858,lat:11.67,lng:92.76,desc:"The ruins of the former administrative headquarters.",wiki:"https://en.wikipedia.org/wiki/Netaji_Subhash_Chandra_Bose_Island"},
    {id:809,name:"Viper Island Ruins",country:"India",state:"Andaman and Nicobar",city:"Port Blair",dynasty:"British Raj",year:1858,lat:11.66,lng:92.71,desc:"The ruins of an older British jail.",wiki:"https://en.wikipedia.org/wiki/Viper_Island"},
    {id:810,name:"Japanese Bunkers",country:"India",state:"Andaman and Nicobar",city:"Port Blair",dynasty:"WWII",year:1942,lat:11.66,lng:92.73,desc:"WWII era coastal bunkers.",wiki:"https://en.wikipedia.org/wiki/Port_Blair"},

    // CHANDIGARH[cite: 10]
    {id:811,name:"Capitol Complex",country:"India",state:"Chandigarh",city:"Chandigarh",dynasty:"Modern",year:1950,lat:30.75,lng:76.80,desc:"A modernist architectural masterclass by Le Corbusier.",wiki:"https://en.wikipedia.org/wiki/Chandigarh_Capitol_Complex"},
    {id:812,name:"Open Hand Monument",country:"India",state:"Chandigarh",city:"Chandigarh",dynasty:"Modern",year:1964,lat:30.76,lng:76.80,desc:"A symbol of peace and reconciliation.",wiki:"https://en.wikipedia.org/wiki/Open_Hand_Monument"},
    {id:813,name:"Le Corbusier Centre",country:"India",state:"Chandigarh",city:"Chandigarh",dynasty:"Modern",year:1952,lat:30.73,lng:76.79,desc:"The former office of the city's architect.",wiki:"https://en.wikipedia.org/wiki/Chandigarh"},
    {id:814,name:"Government Museum",country:"India",state:"Chandigarh",city:"Chandigarh",dynasty:"Modern",year:1968,lat:30.74,lng:76.78,desc:"A premier museum of North India.",wiki:"https://en.wikipedia.org/wiki/Government_Museum_and_Art_Gallery,_Chandigarh"},

    // LAKSHADWEEP[cite: 10]
    {id:815,name:"Kavaratti Ujra Mosque",country:"India",state:"Lakshadweep",city:"Kavaratti",dynasty:"Islamic Heritage",year:1600,lat:10.56,lng:72.63,desc:"A beautifully carved mosque.",wiki:"https://en.wikipedia.org/wiki/Kavaratti"},
    {id:816,name:"Kavaratti Lighthouse",country:"India",state:"Lakshadweep",city:"Kavaratti",dynasty:"Modern",year:1970,lat:10.55,lng:72.63,desc:"A key navigational lighthouse.",wiki:"https://en.wikipedia.org/wiki/Kavaratti"},
    {id:817,name:"Minicoy Lighthouse",country:"India",state:"Lakshadweep",city:"Minicoy",dynasty:"British Raj",year:1885,lat:8.27,lng:73.04,desc:"One of the oldest lighthouses in the region.",wiki:"https://en.wikipedia.org/wiki/Minicoy"}
];

let currentFilteredData = [...monuments];
let currentMonumentIndex = 0;
let activeMarkerId = null;

// Search DOM Elements
const searchWrapper = document.getElementById('search-wrapper');
const searchIconBtn = document.getElementById('search-icon-btn');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');

// Find oldest year per dynasty for sorting
const dynastyStartYears = {};
monuments.forEach(m => {
    if (!(m.dynasty in dynastyStartYears) || m.year < dynastyStartYears[m.dynasty]) {
        dynastyStartYears[m.dynasty] = m.year;
    }
});

// Initialize Leaflet Map
const map = L.map('map', { zoomControl: false, maxZoom: 18 }).setView([22.5, 78.5], 5);
L.control.zoom({ position: 'bottomright' }).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// NEW: Initialize MarkerCluster Group instead of standard FeatureGroup
const markersCluster = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 40,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: `<div><span>${cluster.getChildCount()}</span></div>`,
            className: 'marker-cluster-custom',
            iconSize: L.point(40, 40)
        });
    }
});
map.addLayer(markersCluster);

// Standard DOM Elements
const selectCountry = document.getElementById('filter-country');
const selectState = document.getElementById('filter-state');
const selectCity = document.getElementById('filter-city');
const selectDynasty = document.getElementById('filter-dynasty');
const inputYearStart = document.getElementById('filter-year-start');
const inputYearEnd = document.getElementById('filter-year-end');
const btnApply = document.getElementById('apply-filters');
const btnReset = document.getElementById('reset-filters');
const infoPanel = document.getElementById('info-panel');
const btnClosePanel = document.getElementById('close-panel');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');
const sidebarWrapper = document.getElementById('sidebar-wrapper');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const panelImg = document.getElementById('panel-image');
const imgContainer = document.getElementById('image-container');

// Sidebar Toggle Logic
toggleSidebarBtn.addEventListener('click', () => {
    sidebarWrapper.classList.toggle('closed');
    toggleSidebarBtn.textContent = sidebarWrapper.classList.contains('closed') ? '❯' : '❮';
});

// Search Bar Expand Logic
searchIconBtn.addEventListener('click', () => {
    searchWrapper.classList.toggle('expanded');
    if(searchWrapper.classList.contains('expanded')) {
        searchInput.focus();
    } else {
        // If closing, clear the search
        if(searchInput.value !== '') {
            searchInput.value = '';
            searchClear.style.display = 'none';
            applyFilters();
        }
    }
});

// Dropdowns
function populateSelect(element, dataArray, isDynasty = false) {
    element.innerHTML = '<option value="all">All</option>';
    if (isDynasty) {
        dataArray.sort((a, b) => dynastyStartYears[a] - dynastyStartYears[b]);
    } else {
        dataArray.sort();
    }
    dataArray.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        element.appendChild(option);
    });
}

function updateDynastyOptions(filteredData) {
    const currentDynasty = selectDynasty.value;
    const dynasties = [...new Set(filteredData.map(m => m.dynasty))];
    populateSelect(selectDynasty, dynasties, true);
    if (dynasties.includes(currentDynasty)) selectDynasty.value = currentDynasty;
}

function initDropdowns() {
    populateSelect(selectCountry, [...new Set(monuments.map(m => m.country))]);
    updateDynastyOptions(monuments);
    
    selectCountry.addEventListener('change', () => {
        const country = selectCountry.value;
        if (country === 'all') {
            selectState.innerHTML = '<option value="all">All States</option>'; selectState.disabled = true;
            selectCity.innerHTML = '<option value="all">All Cities</option>'; selectCity.disabled = true;
            updateDynastyOptions(monuments);
        } else {
            const countryData = monuments.filter(m => m.country === country);
            populateSelect(selectState, [...new Set(countryData.map(m => m.state))]); selectState.disabled = false;
            selectCity.innerHTML = '<option value="all">All Cities</option>'; selectCity.disabled = true;
            updateDynastyOptions(countryData);
        }
    });

// --- UPDATED STATE DROPDOWN (Delhi NCR Fix) ---
    selectState.addEventListener('change', () => {
        const state = selectState.value;
        if (state === 'all') {
            selectCity.innerHTML = '<option value="all">All Cities</option>'; selectCity.disabled = true;
            updateDynastyOptions(monuments.filter(m => m.country === selectCountry.value));
        } else {
            let stateData;
            // If "Delhi NCR" is selected, grab both Delhi and Delhi NCR monuments
            if (state === 'Delhi NCR') {
                stateData = monuments.filter(m => (m.state === 'Delhi NCR' || m.state === 'Delhi') && m.country === selectCountry.value);
            } else {
                stateData = monuments.filter(m => m.state === state && m.country === selectCountry.value);
            }
            populateSelect(selectCity, [...new Set(stateData.map(m => m.city))]); selectCity.disabled = false;
            updateDynastyOptions(stateData);
        }
    });
} // <-- End of initDropdowns()    });

// --- UPDATED MAP FUNCTION (Numbered Pins) ---
function updateMap(data) {
    markersCluster.clearLayers(); 
    if (data.length === 0) return;

    let newMarkers = [];

    // Notice we grab the (site, index) so we can number them 1 to X
    data.forEach((site, index) => {
        const customIcon = L.divIcon({
            className: `custom-pin-container ${site.id === activeMarkerId ? 'active-pin' : ''}`,
            html: `<svg class="map-pin-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                   </svg>
                   <span class="pin-number">${index + 1}</span>`,
            iconSize: [36, 36],
            iconAnchor: [18, 36] 
        });

        const marker = L.marker([site.lat, site.lng], { icon: customIcon, monumentId: site.id })
            .bindTooltip(`<b>${index + 1}. ${site.name}</b>`, { direction: 'top', offset: [0, -30] });

        marker.on('click', () => {
            activeMarkerId = site.id;
            updateMarkerHighlights();
            openPanel(site);
        });
        
        newMarkers.push(marker);
    });

    markersCluster.addLayers(newMarkers);
    map.flyToBounds(markersCluster.getBounds(), { padding: [50, 50], maxZoom: 13, duration: 1.5 });
}

// --- UPDATED FILTER FUNCTION (Delhi NCR Fix) ---
// (Ensure you also replace the rest of the file logic down to applyFilters)
function updateMarkerHighlights() {
    markersCluster.eachLayer(marker => {
        const iconElem = marker.getElement();
        if (iconElem) {
            if (marker.options.monumentId === activeMarkerId) {
                iconElem.classList.add('active-pin');
            } else {
                iconElem.classList.remove('active-pin');
            }
        }
    });
}

function applyFilters() {
    closePanel();
    
    let filtered = monuments;
    if (selectCountry.value !== 'all') filtered = filtered.filter(m => m.country === selectCountry.value);
    
    // Delhi NCR smart filter logic
    if (selectState.value !== 'all') {
        if (selectState.value === 'Delhi NCR') {
            filtered = filtered.filter(m => m.state === 'Delhi NCR' || m.state === 'Delhi');
        } else {
            filtered = filtered.filter(m => m.state === selectState.value);
        }
    }
    
    if (selectCity.value !== 'all') filtered = filtered.filter(m => m.city === selectCity.value);
    if (selectDynasty.value !== 'all') filtered = filtered.filter(m => m.dynasty === selectDynasty.value);

    const startYear = parseInt(inputYearStart.value);
    const endYear = parseInt(inputYearEnd.value);
    if (!isNaN(startYear)) filtered = filtered.filter(m => m.year >= startYear);
    if (!isNaN(endYear)) filtered = filtered.filter(m => m.year <= endYear);

    // Search Bar Filter
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(m => 
            m.name.toLowerCase().includes(query) || 
            m.city.toLowerCase().includes(query) ||
            m.state.toLowerCase().includes(query)
        );
    }

    currentFilteredData = filtered;
    updateMap(currentFilteredData);

    if (window.innerWidth <= 768) {
        sidebarWrapper.classList.add('closed');
        toggleSidebarBtn.textContent = '❯';
    }
}

searchInput.addEventListener('input', (e) => {
    searchClear.style.display = e.target.value.length > 0 ? 'block' : 'none';
    applyFilters();
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    applyFilters();
    searchInput.focus();
});

function resetFilters() {
    selectCountry.value = 'all';
    selectState.innerHTML = '<option value="all">All States</option>'; selectState.disabled = true;
    selectCity.innerHTML = '<option value="all">All Cities</option>'; selectCity.disabled = true;
    selectDynasty.value = 'all';
    inputYearStart.value = ''; inputYearEnd.value = '';
    searchInput.value = ''; searchClear.style.display = 'none';
    searchWrapper.classList.remove('expanded');
    
    updateDynastyOptions(monuments);
    applyFilters();
}

function openPanel(site) {
    currentMonumentIndex = currentFilteredData.findIndex(m => m.id === site.id);
    activeMarkerId = site.id;
    updateMarkerHighlights();
    
    populatePanelData(site);
    
    // Shift search bar left so it doesn't overlap the panel (desktop only)
    searchWrapper.classList.add('shifted');
    infoPanel.classList.add('open');
    
    // Auto-close the left sidebar on mobile screens when a pin is clicked
    if (window.innerWidth <= 768) {
        sidebarWrapper.classList.add('closed');
        toggleSidebarBtn.textContent = '❯';
    }
    
    // On mobile, the modal covers the center. We adjust the zoom offset 
    // so the map pans the pin slightly upwards, keeping it visible above the modal.
    const zoomOffset = window.innerWidth <= 768 ? -0.008 : 0; 
    
    markersCluster.zoomToShowLayer(markersCluster.getLayers().find(l => l.options.monumentId === site.id), () => {
        map.flyTo([site.lat + zoomOffset, site.lng], 15, { duration: 1.2 });
    });
}

async function fetchWikiImage(wikiUrl) {
    panelImg.classList.remove('loaded');
    imgContainer.classList.add('loading');
    const fallbackImage = "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop";

    try {
        const title = decodeURIComponent(wikiUrl.split('/').pop());
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=800&origin=*`);
        const data = await res.json();
        
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        
        if (pageId !== "-1" && pages[pageId].thumbnail) {
            panelImg.src = pages[pageId].thumbnail.source;
        } else {
            panelImg.src = fallbackImage; 
        }
    } catch (e) {
        panelImg.src = fallbackImage;
    }
}

panelImg.onload = () => {
    imgContainer.classList.remove('loading');
    panelImg.classList.add('loaded');
};

function populatePanelData(site) {
    fetchWikiImage(site.wiki);

    document.getElementById('panel-year').textContent = `${Math.abs(site.year)} ${site.year < 0 ? 'BCE' : 'CE'}`;
    document.getElementById('panel-dynasty').textContent = site.dynasty;
    document.getElementById('panel-title').textContent = site.name;
    document.getElementById('panel-location').textContent = `${site.city}, ${site.country}`;
    document.getElementById('panel-desc').textContent = site.desc;
    
    document.getElementById('panel-gmaps').href = site.gmaps_link || `https://www.google.com/maps/search/?api=1&query=${site.lat},${site.lng}`;
    document.getElementById('panel-wiki').href = site.wiki;

    updateNavButtons();
}

function updateNavButtons() {
    document.getElementById("counter").innerText = `${currentMonumentIndex + 1} / ${currentFilteredData.length}`;
    // Buttons are no longer disabled at the ends of the list
    btnPrev.disabled = false;
    btnNext.disabled = false;
    
    // Disable both only if there is exactly 1 or 0 items in the filtered list
    if (currentFilteredData.length <= 1) {
        btnPrev.disabled = true;
        btnNext.disabled = true;
    }
}

function showPrevMonument() {
    if (currentFilteredData.length === 0) return;
    
    // If at the first item, loop back to the last item
    if (currentMonumentIndex === 0) {
        currentMonumentIndex = currentFilteredData.length - 1;
    } else {
        currentMonumentIndex--;
    }
    
    openPanel(currentFilteredData[currentMonumentIndex]);
}

function showNextMonument() {
    if (currentFilteredData.length === 0) return;
    
    // If at the last item, loop back to the first item
    if (currentMonumentIndex === currentFilteredData.length - 1) {
        currentMonumentIndex = 0;
    } else {
        currentMonumentIndex++;
    }
    
    openPanel(currentFilteredData[currentMonumentIndex]);
}

function closePanel() {
    infoPanel.classList.remove('open');
    // Move search bar back to original position
    searchWrapper.classList.remove('shifted');
    activeMarkerId = null;
    updateMarkerHighlights();
}

btnApply.addEventListener('click', applyFilters);
btnReset.addEventListener('click', resetFilters);
btnClosePanel.addEventListener('click', closePanel);
btnPrev.addEventListener('click', showPrevMonument);
btnNext.addEventListener('click', showNextMonument);

initDropdowns();
updateMap(currentFilteredData);