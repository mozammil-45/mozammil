// Database of 77 Delhi Monuments (Chronological)
const monuments = [
    //Delhi
    { id: 1, name: "Lal Kot", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tomar Dynasty", year: 1060, lat: 28.5255, lng: 77.1854, desc: "The first documented fortified city of Delhi, built by the Tomar Rajputs.", wiki: "https://en.wikipedia.org/wiki/Lal_Kot" },
    { id: 2, name: "Anang Tal", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tomar Dynasty", year: 1060, lat: 28.5241, lng: 77.1850, desc: "An ancient reservoir built by the Tomar king Anangpal II.", wiki: "https://en.wikipedia.org/wiki/Anangpur_Dam" },
    { id: 3, name: "Suraj Kund", country: "India", state: "Haryana", city: "Faridabad", dynasty: "Tomar Dynasty", year: 1060, lat: 28.4870, lng: 77.2797, desc: "An ancient reservoir built in the backdrop of the Aravalli hills.", wiki: "https://en.wikipedia.org/wiki/Surajkund" },
    { id: 4, name: "Qila Rai Pithora", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Chauhan Dynasty", year: 1150, lat: 28.5238, lng: 77.1883, desc: "A fortified city built by Prithviraj Chauhan after capturing Lal Kot.", wiki: "https://en.wikipedia.org/wiki/Qila_Rai_Pithora" },
    { id: 5, name: "Rai Pithora's Fortifications", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Chauhan Dynasty", year: 1150, lat: 28.5230, lng: 77.1900, desc: "The expansive defensive walls surrounding the ancient city of Qila Rai Pithora.", wiki: "https://en.wikipedia.org/wiki/Qila_Rai_Pithora" },
    { id: 6, name: "Quwwat-ul-Islam Mosque (Early)", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Ghurid Empire", year: 1192, lat: 28.5247, lng: 77.1854, desc: "The first mosque built in Delhi after the Islamic conquest of India.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar_complex#Quwwat-ul-Islam_Mosque" },
    { id: 7, name: "Qutb Minar (Foundation)", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Ghurid Empire", year: 1192, lat: 28.5244, lng: 77.1855, desc: "The initial foundation and first storey of the famous victory tower.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar" },
    { id: 8, name: "Qutb Minar", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1206, lat: 28.5244, lng: 77.1855, desc: "A soaring 73-meter high tower of victory.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar" },
    { id: 9, name: "Quwwat-ul-Islam Mosque", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1206, lat: 28.5247, lng: 77.1854, desc: "Expanded mosque complex showcasing early Indo-Islamic architecture.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar_complex" },
    { id: 10, name: "Qutb Complex", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1206, lat: 28.5243, lng: 77.1856, desc: "A UNESCO World Heritage site housing multiple early Sultanate monuments.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar_complex" },
    { id: 11, name: "Sultan Ghari's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1231, lat: 28.5262, lng: 77.1352, desc: "The first Islamic mausoleum built in India, for Prince Nasiru'd-Din Mahmud.", wiki: "https://en.wikipedia.org/wiki/Sultan_Ghari" },
    { id: 12, name: "Iltutmish's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1235, lat: 28.5248, lng: 77.1849, desc: "The intricately carved tomb of the second Sultan of Delhi.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar_complex#Tomb_of_Iltutmish" },
    { id: 13, name: "Hauz-i-Shamsi", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1230, lat: 28.5152, lng: 77.1774, desc: "A historic water reservoir built by Sultan Iltutmish in Mehrauli.", wiki: "https://en.wikipedia.org/wiki/Hauz-i-Shamsi" },
    { id: 14, name: "Balban's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mamluk Dynasty", year: 1287, lat: 28.5186, lng: 77.1884, desc: "The tomb of Ghiyas ud din Balban, notable for the first true arch in India.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Balban" },
    { id: 15, name: "Siri Fort", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Khalji Dynasty", year: 1303, lat: 28.5375, lng: 77.2215, desc: "The second city of Delhi, built by Alauddin Khalji to defend against Mongols.", wiki: "https://en.wikipedia.org/wiki/Siri_Fort" },
    { id: 16, name: "Alai Darwaza", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Khalji Dynasty", year: 1311, lat: 28.5242, lng: 77.1855, desc: "A magnificent southern gateway to the Quwwat-ul-Islam Mosque.", wiki: "https://en.wikipedia.org/wiki/Alai_Darwaza" },
    { id: 17, name: "Alai Minar", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Khalji Dynasty", year: 1311, lat: 28.5255, lng: 77.1852, desc: "An unfinished tower intended to be twice the size of the Qutb Minar.", wiki: "https://en.wikipedia.org/wiki/Qutb_Minar_complex#Alai_Minar" },
    { id: 18, name: "Hauz Khas", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Khalji Dynasty", year: 1290, lat: 28.5494, lng: 77.1934, desc: "An ancient royal water tank (Hauz-i-Alai) built by Alauddin Khalji.", wiki: "https://en.wikipedia.org/wiki/Hauz_Khas_Complex" },
    { id: 19, name: "Jamat Khana Masjid", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Khalji Dynasty", year: 1315, lat: 28.5873, lng: 77.2435, desc: "The oldest mosque in the Nizamuddin Dargah complex.", wiki: "https://en.wikipedia.org/wiki/Nizamuddin_Dargah" },
    { id: 20, name: "Alauddin Khalji's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Khalji Dynasty", year: 1316, lat: 28.5240, lng: 77.1848, desc: "The tomb and accompanying madrasa of Sultan Alauddin Khalji.", wiki: "https://en.wikipedia.org/wiki/Alauddin_Khalji%27s_tomb_and_madrasa" },
    { id: 21, name: "Tughlaqabad Fort", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1321, lat: 28.5143, lng: 77.2600, desc: "A ruined fort representing the third historic city of Delhi.", wiki: "https://en.wikipedia.org/wiki/Tughlaqabad_Fort" },
    { id: 22, name: "Ghiyasuddin Tughlaq's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1325, lat: 28.5133, lng: 77.2612, desc: "A fortified tomb structure connected to Tughlaqabad via a causeway.", wiki: "https://en.wikipedia.org/wiki/Tughlaqabad_Fort" },
    { id: 23, name: "Jahanpanah Fortifications", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1326, lat: 28.5393, lng: 77.2045, desc: "The fourth city of Delhi, built to enclose the space between Siri and Lal Kot.", wiki: "https://en.wikipedia.org/wiki/Jahanpanah" },
    { id: 24, name: "Begumpuri Mosque", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1351, lat: 28.5398, lng: 77.2057, desc: "A massive mosque featuring numerous domes, built by Khan-i-Jahan Maqbul.", wiki: "https://en.wikipedia.org/wiki/Begumpur_Mosque" },
    { id: 25, name: "Khirki Mosque", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1351, lat: 28.5312, lng: 77.2198, desc: "A unique cross-axial, largely covered mosque from the Tughlaq era.", wiki: "https://en.wikipedia.org/wiki/Khirki_Mosque" },
    { id: 26, name: "Satpula", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1326, lat: 28.5298, lng: 77.2215, desc: "A seven-arched bridge and weir serving the water needs of Jahanpanah.", wiki: "https://en.wikipedia.org/wiki/Satpula" },
    { id: 27, name: "Firoz Shah Kotla", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1354, lat: 28.6365, lng: 77.2435, desc: "The fortress of Firozabad, the fifth city of Delhi.", wiki: "https://en.wikipedia.org/wiki/Feroz_Shah_Kotla" },
    { id: 28, name: "Firoz Shah's Mosque", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1354, lat: 28.6360, lng: 77.2440, desc: "The Jami Masjid inside the Firoz Shah Kotla complex.", wiki: "https://en.wikipedia.org/wiki/Feroz_Shah_Kotla" },
    { id: 29, name: "Hauz Khas Madrasa", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1352, lat: 28.5492, lng: 77.1932, desc: "A leading center of Islamic education overlooking the Hauz Khas lake.", wiki: "https://en.wikipedia.org/wiki/Hauz_Khas_Complex" },
    { id: 30, name: "Firoz Shah Tughlaq's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1388, lat: 28.5488, lng: 77.1935, desc: "The mausoleum of Sultan Firoz Shah, located in Hauz Khas.", wiki: "https://en.wikipedia.org/wiki/Hauz_Khas_Complex" },
    { id: 31, name: "Ashokan Pillar at Firoz Shah Kotla", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Tughlaq Dynasty", year: 1356, lat: 28.6368, lng: 77.2435, desc: "An ancient Mauryan pillar relocated to Delhi by Firoz Shah Tughlaq.", wiki: "https://en.wikipedia.org/wiki/Pillars_of_Ashoka" },
    { id: 32, name: "Mubarak Shah's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Sayyid Dynasty", year: 1434, lat: 28.5723, lng: 77.2201, desc: "An octagonal tomb of the second Sayyid Sultan, located in Kotla Mubarakpur.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Mubarak_Shah" },
    { id: 33, name: "Muhammad Shah's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Sayyid Dynasty", year: 1444, lat: 28.5835, lng: 77.2201, desc: "A prominent octagonal tomb located within the modern Lodi Gardens.", wiki: "https://en.wikipedia.org/wiki/Lodi_Gardens" },
    { id: 34, name: "Bahlol Lodi's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Lodi Dynasty", year: 1489, lat: 28.5874, lng: 77.2415, desc: "A simple square tomb belonging to the founder of the Lodi dynasty.", wiki: "https://en.wikipedia.org/wiki/Bahlul_Lodi" },
    { id: 35, name: "Sikandar Lodi's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Lodi Dynasty", year: 1517, lat: 28.5847, lng: 77.2195, desc: "An octagonal tomb set in a walled enclosure in Lodi Gardens.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Sikandar_Lodi" },
    { id: 36, name: "Bara Gumbad", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Lodi Dynasty", year: 1490, lat: 28.5852, lng: 77.2200, desc: "A massive dome serving as a gateway to an adjoining mosque in Lodi Gardens.", wiki: "https://en.wikipedia.org/wiki/Bara_Gumbad" },
    { id: 37, name: "Bara Gumbad Mosque", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Lodi Dynasty", year: 1494, lat: 28.5852, lng: 77.2198, desc: "A highly ornate mosque constructed during the reign of Sikandar Lodi.", wiki: "https://en.wikipedia.org/wiki/Bara_Gumbad" },
    { id: 38, name: "Sheesh Gumbad", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Lodi Dynasty", year: 1489, lat: 28.5855, lng: 77.2205, desc: "The 'Glazed Dome' tomb, noted for its blue enameled tile work.", wiki: "https://en.wikipedia.org/wiki/Sheesh_Gumbad" },
    { id: 39, name: "Moth Ki Masjid", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Lodi Dynasty", year: 1505, lat: 28.5606, lng: 77.2185, desc: "A beautiful Lodi-era mosque built by the prime minister of Sikandar Lodi.", wiki: "https://en.wikipedia.org/wiki/Moth_Ki_Masjid" },
    { id: 40, name: "Babur-era Structures", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mughal Empire", year: 1526, lat: 28.6139, lng: 77.2090, desc: "Limited surviving traces of Babur's early Mughal interventions in Delhi.", wiki: "https://en.wikipedia.org/wiki/Babur" },
    { id: 41, name: "Dinpanah", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mughal Empire", year: 1533, lat: 28.6096, lng: 77.2437, desc: "Humayun's city, which later became the site of Purana Qila.", wiki: "https://en.wikipedia.org/wiki/Purana_Qila" },
    { id: 42, name: "Purana Qila", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Sur Empire", year: 1540, lat: 28.6096, lng: 77.2437, desc: "The Old Fort, expanded by Sher Shah Suri over Humayun's Dinpanah.", wiki: "https://en.wikipedia.org/wiki/Purana_Qila" },
    { id: 43, name: "Qila-i-Kuhna Mosque", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Sur Empire", year: 1541, lat: 28.6093, lng: 77.2435, desc: "A transitional Indo-Islamic mosque inside Purana Qila.", wiki: "https://en.wikipedia.org/wiki/Qila-i-Kuhna_Mosque" },
    { id: 44, name: "Sher Mandal", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Sur Empire", year: 1541, lat: 28.6090, lng: 77.2430, desc: "An octagonal pavilion used by Humayun as a library.", wiki: "https://en.wikipedia.org/wiki/Purana_Qila#Sher_Mandal" },
    { id: 45, name: "Sher Shah Suri Gate", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Sur Empire", year: 1540, lat: 28.6110, lng: 77.2420, desc: "A massive gateway surviving from Sher Shah's walled city.", wiki: "https://en.wikipedia.org/wiki/Sher_Shah_Suri_Gate" },
    { id: 46, name: "Humayun's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mughal Empire", year: 1570, lat: 28.5933, lng: 77.2507, desc: "The magnificent garden tomb of Emperor Humayun, which inspired the Taj Mahal.", wiki: "https://en.wikipedia.org/wiki/Humayun%27s_Tomb" },
    { id: 47, name: "Jahangir-period Additions", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Mughal Empire", year: 1605, lat: 28.5870, lng: 77.2450, desc: "Various structures like Chausath Khamba around the Nizamuddin area.", wiki: "https://en.wikipedia.org/wiki/Chausath_Khamba" },
    { id: 48, name: "Red Fort", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1639, lat: 28.6562, lng: 77.2410, desc: "The majestic main residence of the Mughal emperors.", wiki: "https://en.wikipedia.org/wiki/Red_Fort" },
    { id: 49, name: "Jama Masjid", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1650, lat: 28.6507, lng: 77.2334, desc: "One of the largest mosques in India, built in red sandstone and marble.", wiki: "https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi" },
    { id: 50, name: "Shahjahanabad", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1639, lat: 28.6550, lng: 77.2300, desc: "The walled city of Delhi, serving as the Mughal capital.", wiki: "https://en.wikipedia.org/wiki/Old_Delhi" },
    { id: 51, name: "Chandni Chowk", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1650, lat: 28.6560, lng: 77.2300, desc: "The historic main street and market of Shahjahanabad.", wiki: "https://en.wikipedia.org/wiki/Chandni_Chowk" },
    { id: 52, name: "Lahori Gate", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1639, lat: 28.6558, lng: 77.2386, desc: "The main entrance to the Red Fort, facing Lahore.", wiki: "https://en.wikipedia.org/wiki/Lahori_Gate,_Delhi" },
    { id: 53, name: "Delhi Gate", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1638, lat: 28.6415, lng: 77.2405, desc: "The southern historic gateway of the walled city of Shahjahanabad.", wiki: "https://en.wikipedia.org/wiki/Delhi_Gate_(Delhi)" },
    { id: 54, name: "Moti Masjid", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Mughal Empire", year: 1659, lat: 28.6565, lng: 77.2415, desc: "The 'Pearl Mosque' built by Aurangzeb inside the Red Fort.", wiki: "https://en.wikipedia.org/wiki/Moti_Masjid_(Red_Fort)" },
    { id: 55, name: "Safdarjung's Tomb", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Later Mughal", year: 1754, lat: 28.5893, lng: 77.2106, desc: "The last monumental tomb garden of the Mughals.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Safdar_Jang" },
    { id: 56, name: "Qudsia Garden", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Later Mughal", year: 1748, lat: 28.6675, lng: 77.2285, desc: "A palace complex and garden laid out by Qudsia Begum.", wiki: "https://en.wikipedia.org/wiki/Qudsia_Bagh" },
    { id: 57, name: "Mirza Ghalib's Haveli", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "Later Mughal", year: 1800, lat: 28.6534, lng: 77.2254, desc: "The residence of the legendary 19th-century Urdu poet.", wiki: "https://en.wikipedia.org/wiki/Ghalib_ki_Haveli" },
    { id: 58, name: "St. James' Church", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "British Period", year: 1836, lat: 28.6655, lng: 77.2307, desc: "One of the oldest churches in Delhi, built by Colonel James Skinner.", wiki: "https://en.wikipedia.org/wiki/St._James%27_Church,_Delhi" },
    { id: 59, name: "Kashmere Gate", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "British Period", year: 1835, lat: 28.6667, lng: 77.2283, desc: "The northern gate of the historic walled city.", wiki: "https://en.wikipedia.org/wiki/Kashmere_Gate" },
    { id: 60, name: "Delhi Flagstaff Tower", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1828, lat: 28.6833, lng: 77.2167, desc: "A signal tower on the Delhi Ridge that played a key role during 1857.", wiki: "https://en.wikipedia.org/wiki/Flagstaff_Tower,_Delhi" },
    { id: 61, name: "Old Secretariat", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1912, lat: 28.6750, lng: 77.2200, desc: "The seat of the Government of India before New Delhi was built.", wiki: "https://en.wikipedia.org/wiki/Old_Secretariat,_Delhi" },
    { id: 62, name: "St. Stephen's Church", country: "India", state: "Delhi", city: "Old Delhi", dynasty: "British Period", year: 1862, lat: 28.6580, lng: 77.2250, desc: "A historic church built in the Romanesque style in Fatehpuri.", wiki: "https://en.wikipedia.org/wiki/St._Stephen%27s_Church,_Delhi" },
    { id: 63, name: "India Gate", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1921, lat: 28.6129, lng: 77.2295, desc: "A monumental sandstone arch honoring Indian soldiers.", wiki: "https://en.wikipedia.org/wiki/India_Gate" },
    { id: 64, name: "Rashtrapati Bhavan", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1929, lat: 28.6143, lng: 77.1994, desc: "The majestic official residence of the President of India.", wiki: "https://en.wikipedia.org/wiki/Rashtrapati_Bhavan" },
    { id: 65, name: "North Block", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1927, lat: 28.6145, lng: 77.2055, desc: "One of the two Secretariat Buildings, housing key government ministries.", wiki: "https://en.wikipedia.org/wiki/Secretariat_Building,_New_Delhi" },
    { id: 66, name: "South Block", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1927, lat: 28.6135, lng: 77.2055, desc: "Part of the Secretariat, housing the PMO and Ministry of Defence.", wiki: "https://en.wikipedia.org/wiki/Secretariat_Building,_New_Delhi" },
    { id: 67, name: "Old Parliament House", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1927, lat: 28.6172, lng: 77.2081, desc: "The historic circular building that formerly housed India's parliament.", wiki: "https://en.wikipedia.org/wiki/Old_Parliament_House,_New_Delhi" },
    { id: 68, name: "Connaught Place", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1929, lat: 28.6315, lng: 77.2167, desc: "The main commercial and financial centre of New Delhi.", wiki: "https://en.wikipedia.org/wiki/Connaught_Place,_New_Delhi" },
    { id: 69, name: "Kartavya Path", country: "India", state: "Delhi", city: "New Delhi", dynasty: "British Period", year: 1920, lat: 28.6139, lng: 77.2190, desc: "The ceremonial boulevard of New Delhi, formerly known as Rajpath.", wiki: "https://en.wikipedia.org/wiki/Kartavya_Path" },
    { id: 70, name: "Raj Ghat", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 1948, lat: 28.6406, lng: 77.2495, desc: "A memorial dedicated to Mahatma Gandhi.", wiki: "https://en.wikipedia.org/wiki/Raj_Ghat_and_associated_memorials" },
    { id: 71, name: "Lotus Temple", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 1986, lat: 28.5535, lng: 77.2588, desc: "A Baháʼí House of Worship famous for its flower-like shape.", wiki: "https://en.wikipedia.org/wiki/Lotus_Temple" },
    { id: 72, name: "Akshardham Temple", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 2005, lat: 28.6127, lng: 77.2773, desc: "A massive Hindu temple complex displaying traditional Indian culture.", wiki: "https://en.wikipedia.org/wiki/Swaminarayan_Akshardham_(New_Delhi)" },
    { id: 73, name: "Indira Gandhi Memorial", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 1984, lat: 28.6015, lng: 77.2025, desc: "A museum located at the former residence of Prime Minister Indira Gandhi.", wiki: "https://en.wikipedia.org/wiki/Indira_Gandhi_Memorial_Museum" },
    { id: 74, name: "National Police Memorial", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 2018, lat: 28.5950, lng: 77.1850, desc: "A memorial honoring police personnel who died in the line of duty.", wiki: "https://en.wikipedia.org/wiki/National_Police_Memorial_(India)" },
    { id: 75, name: "National War Memorial", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 2019, lat: 28.6139, lng: 77.2300, desc: "A monument built to honor the Indian Armed Forces.", wiki: "https://en.wikipedia.org/wiki/National_War_Memorial_(India)" },
    { id: 76, name: "Dr. Ambedkar National Memorial", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 2018, lat: 28.6360, lng: 77.2200, desc: "A memorial dedicated to the architect of the Indian Constitution.", wiki: "https://en.wikipedia.org/wiki/Dr._Ambedkar_National_Memorial" },
    { id: 77, name: "Bharat Mandapam", country: "India", state: "Delhi", city: "New Delhi", dynasty: "Republic of India", year: 2023, lat: 28.6135, lng: 77.2410, desc: "A state-of-the-art international exhibition and convention center.", wiki: "https://en.wikipedia.org/wiki/Pragati_Maidan#Bharat_Mandapam" },
    { id: 78, name: "Farmana Archaeological Site", country: "India", state: "Delhi NCR", city: "Rohtak", dynasty: "Harappan Civilization", year: -3500, lat: 29.09, lng: 76.26, desc: "An early Harappan archaeological site.", wiki: "https://en.wikipedia.org/wiki/Farmana" },
    { id: 79, name: "Rakhigarhi Archaeological Site", country: "India", state: "Delhi NCR", city: "Hisar", dynasty: "Harappan Civilization", year: -2600, lat: 29.28, lng: 76.11, desc: "One of the largest settlements of the ancient Indus Valley Civilization.", wiki: "https://en.wikipedia.org/wiki/Rakhigarhi" },
    { id: 80, name: "Kunal Archaeological Site", country: "India", state: "Delhi NCR", city: "Fatehabad", dynasty: "Harappan Civilization", year: -3500, lat: 29.62, lng: 75.64, desc: "A pre-Harappan and early Harappan site.", wiki: "https://en.wikipedia.org/wiki/Kunal,_Haryana" },
    { id: 81, name: "Banawali Archaeological Site", country: "India", state: "Delhi NCR", city: "Fatehabad", dynasty: "Harappan Civilization", year: -3000, lat: 29.62, lng: 75.39, desc: "An important Indus Valley Civilization site with a dried-up Sarasvati riverbed.", wiki: "https://en.wikipedia.org/wiki/Banawali" },
    { id: 82, name: "Bhirrana Archaeological Site", country: "India", state: "Delhi NCR", city: "Fatehabad", dynasty: "Harappan Civilization", year: -7500, lat: 29.55, lng: 75.59, desc: "One of the oldest Harappan sites in the Indian subcontinent.", wiki: "https://en.wikipedia.org/wiki/Bhirrana" },
    { id: 83, name: "Khokhrakot Archaeological Site", country: "India", state: "Delhi NCR", city: "Rohtak", dynasty: "Ancient / Early Historic", year: -800, lat: 28.89, lng: 76.57, desc: "An ancient mound revealing early historic remains.", wiki: "https://en.wikipedia.org/wiki/Rohtak" },
    { id: 84, name: "Ther Mound", country: "India", state: "Delhi NCR", city: "Sirsa", dynasty: "Ancient / Early Historic", year: -600, lat: 29.53, lng: 75.02, desc: "Ancient mound covering a long sequence from early historic to medieval times.", wiki: "https://en.wikipedia.org/wiki/Sirsa,_Haryana" },
    { id: 85, name: "Surajkund", country: "India", state: "Delhi NCR", city: "Faridabad", dynasty: "Tomar Dynasty", year: 950, lat: 28.4870, lng: 77.2797, desc: "An ancient artificial lake and amphitheater.", wiki: "https://en.wikipedia.org/wiki/Surajkund" },
    { id: 86, name: "Raja Nahar Singh Palace", country: "India", state: "Delhi NCR", city: "Faridabad", dynasty: "Ballabhgarh State", year: 1739, lat: 28.33, lng: 77.32, desc: "The historic 18th-century palace of Raja Nahar Singh.", wiki: "https://en.wikipedia.org/wiki/Nahar_Singh_Mahal" },
    { id: 87, name: "Shish Mahal", country: "India", state: "Delhi NCR", city: "Gurugram", dynasty: "Farrukhnagar State", year: 1733, lat: 28.44, lng: 76.82, desc: "An 18th-century palace built by Nawab Faujdar Khan.", wiki: "https://en.wikipedia.org/wiki/Farrukhnagar" },
    { id: 88, name: "Tomb of Khwaja Khizr", country: "India", state: "Delhi NCR", city: "Sonipat", dynasty: "Lodi Dynasty", year: 1522, lat: 28.99, lng: 77.02, desc: "A tomb built out of red sandstone in the Lodi architectural style.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Khwaja_Khizr" },
    { id: 89, name: "Kabuli Bagh Mosque", country: "India", state: "Delhi NCR", city: "Panipat", dynasty: "Mughal Empire", year: 1527, lat: 29.40, lng: 76.98, desc: "A mosque built by Babur to mark his victory in the First Battle of Panipat.", wiki: "https://en.wikipedia.org/wiki/Kabuli_Bagh_Mosque" },
    { id: 90, name: "Ibrahim Lodi's Tomb", country: "India", state: "Delhi NCR", city: "Panipat", dynasty: "Lodi Dynasty", year: 1526, lat: 29.39, lng: 76.97, desc: "The tomb of the last Sultan of Delhi, who died in the First Battle of Panipat.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Ibrahim_Lodi" },
    { id: 91, name: "Third Battle of Panipat Memorial", country: "India", state: "Delhi NCR", city: "Panipat", dynasty: "British Raj", year: 1850, lat: 29.38, lng: 76.99, desc: "A memorial obelisk marking the site of the 1761 battle.", wiki: "https://en.wikipedia.org/wiki/Third_Battle_of_Panipat" },
    { id: 92, name: "Gateway of Old Mughal Sarai", country: "India", state: "Delhi NCR", city: "Karnal", dynasty: "Mughal Empire", year: 1600, lat: 29.68, lng: 76.99, desc: "A remnant of a historic Mughal-era caravanserai.", wiki: "https://en.wikipedia.org/wiki/Karnal" },
    { id: 93, name: "Kalander Shah Tomb", country: "India", state: "Delhi NCR", city: "Karnal", dynasty: "Mughal Empire", year: 1600, lat: 29.68, lng: 76.98, desc: "The marble tomb of the revered Sufi saint.", wiki: "https://en.wikipedia.org/wiki/Karnal" },
    { id: 94, name: "Miran Sahib Tomb", country: "India", state: "Delhi NCR", city: "Karnal", dynasty: "Mughal Empire", year: 1600, lat: 29.68, lng: 76.97, desc: "The tomb of a saintly figure highly revered locally.", wiki: "https://en.wikipedia.org/wiki/Karnal" },
    { id: 95, name: "Shahjahan ki Baoli", country: "India", state: "Delhi NCR", city: "Rohtak", dynasty: "Mughal Empire", year: 1650, lat: 28.96, lng: 76.29, desc: "An ornate stepped well built during the Mughal era in Meham.", wiki: "https://en.wikipedia.org/wiki/Meham" },
    { id: 96, name: "Bada Talab", country: "India", state: "Delhi NCR", city: "Rewari", dynasty: "Rewari State", year: 1810, lat: 28.19, lng: 76.61, desc: "A historic pond built by Rao Tej Singh.", wiki: "https://en.wikipedia.org/wiki/Rewari" },
    { id: 97, name: "Fort of Bawal", country: "India", state: "Delhi NCR", city: "Rewari", dynasty: "Regional State", year: 1800, lat: 28.08, lng: 76.58, desc: "A stronghold constructed during the regional states' era.", wiki: "https://en.wikipedia.org/wiki/Bawal" },
    { id: 98, name: "Red Mosque", country: "India", state: "Delhi NCR", city: "Rewari", dynasty: "Mughal Empire", year: 1570, lat: 28.19, lng: 76.62, desc: "A Mughal mosque built during the reign of Akbar.", wiki: "https://en.wikipedia.org/wiki/Rewari" },
    { id: 99, name: "Humayun Mosque", country: "India", state: "Delhi NCR", city: "Fatehabad", dynasty: "Mughal Empire", year: 1530, lat: 29.51, lng: 75.45, desc: "A mosque traditionally associated with Mughal Emperor Humayun.", wiki: "https://en.wikipedia.org/wiki/Fatehabad,_Haryana" },
    { id: 100, name: "Fatehabad Remains", country: "India", state: "Delhi NCR", city: "Fatehabad", dynasty: "Tughlaq Dynasty", year: 1350, lat: 29.51, lng: 75.45, desc: "Historical remains of the city founded by Firoz Shah Tughlaq.", wiki: "https://en.wikipedia.org/wiki/Fatehabad,_Haryana" },
    { id: 101, name: "Tomb of Bu-Ali Shah Qalandar", country: "India", state: "Delhi NCR", city: "Panipat", dynasty: "Regional State", year: 1750, lat: 29.39, lng: 76.97, desc: "The shrine of the celebrated Sufi saint.", wiki: "https://en.wikipedia.org/wiki/Panipat" },
    { id: 102, name: "Salar Gunj Gate", country: "India", state: "Delhi NCR", city: "Panipat", dynasty: "Regional State", year: 1750, lat: 29.39, lng: 76.97, desc: "A historic city gate from the Nawab era.", wiki: "https://en.wikipedia.org/wiki/Panipat" },
    { id: 103, name: "Bab-i-Faiz Gate", country: "India", state: "Delhi NCR", city: "Panipat", dynasty: "Regional State", year: 1750, lat: 29.39, lng: 76.98, desc: "Another prominent historic gateway in Panipat.", wiki: "https://en.wikipedia.org/wiki/Panipat" },
    { id: 104, name: "Lohagarh Fort", country: "India", state: "Delhi NCR", city: "Bharatpur", dynasty: "Jat Kingdom of Bharatpur", year: 1732, lat: 27.21, lng: 77.49, desc: "The 'Iron Fort' known for successfully defending against multiple British attacks.", wiki: "https://en.wikipedia.org/wiki/Lohagarh_Fort" },
    { id: 105, name: "Bharatpur Palace & Museum", country: "India", state: "Delhi NCR", city: "Bharatpur", dynasty: "Jat Kingdom of Bharatpur", year: 1730, lat: 27.22, lng: 77.49, desc: "A rich repository of the region's royal past.", wiki: "https://en.wikipedia.org/wiki/Bharatpur,_Rajasthan" },
    { id: 106, name: "Ganga Mandir", country: "India", state: "Delhi NCR", city: "Bharatpur", dynasty: "Jat Kingdom of Bharatpur", year: 1845, lat: 27.21, lng: 77.49, desc: "A beautiful temple featuring exquisite carvings and architecture.", wiki: "https://en.wikipedia.org/wiki/Bharatpur,_Rajasthan" },
    { id: 107, name: "Bala Qila", country: "India", state: "Delhi NCR", city: "Alwar", dynasty: "Alwar State", year: 1775, lat: 27.57, lng: 76.58, desc: "A formidable fort perched on a hill above Alwar.", wiki: "https://en.wikipedia.org/wiki/Alwar_fort" },
    { id: 108, name: "Alwar City Palace", country: "India", state: "Delhi NCR", city: "Alwar", dynasty: "Alwar State", year: 1793, lat: 27.57, lng: 76.59, desc: "Also known as Vinay Vilas Palace, an architectural marvel.", wiki: "https://en.wikipedia.org/wiki/Alwar" },
    { id: 109, name: "Moosi Maharani Ki Chhatri", country: "India", state: "Delhi NCR", city: "Alwar", dynasty: "Alwar State", year: 1815, lat: 27.57, lng: 76.59, desc: "A striking cenotaph built in memory of Maharaja Bakhtawar Singh's queen.", wiki: "https://en.wikipedia.org/wiki/Alwar" },
    { id: 110, name: "Vidur Tila", country: "India", state: "Delhi NCR", city: "Meerut", dynasty: "Mahabharata", year: -1000, lat: 29.17, lng: 78.02, desc: "An ancient mound associated with Vidura from the Mahabharata.", wiki: "https://en.wikipedia.org/wiki/Hastinapur" },
    { id: 111, name: "Karna Temple", country: "India", state: "Delhi NCR", city: "Meerut", dynasty: "Mahabharata", year: -1000, lat: 29.17, lng: 78.02, desc: "A temple dedicated to Karna along the old course of the Ganges.", wiki: "https://en.wikipedia.org/wiki/Hastinapur" },
    { id: 112, name: "Pandaveshwar Temple", country: "India", state: "Delhi NCR", city: "Meerut", dynasty: "Mahabharata", year: -1000, lat: 29.17, lng: 78.02, desc: "A Shiva temple traditionally linked to the Pandavas.", wiki: "https://en.wikipedia.org/wiki/Hastinapur" },
    { id: 113, name: "Digambar Jain Bada Mandir", country: "India", state: "Delhi NCR", city: "Meerut", dynasty: "Jain religious heritage", year: 1801, lat: 29.17, lng: 78.02, desc: "A major pilgrimage center for Digambar Jains.", wiki: "https://en.wikipedia.org/wiki/Hastinapur" },
    { id: 114, name: "Shwetambar Jain Temple", country: "India", state: "Delhi NCR", city: "Meerut", dynasty: "Jain religious heritage", year: 1801, lat: 29.17, lng: 78.02, desc: "A significant Shwetambar Jain temple in Hastinapur.", wiki: "https://en.wikipedia.org/wiki/Hastinapur" },
    { id: 115, name: "Jambudweep Jain Temple", country: "India", state: "Delhi NCR", city: "Meerut", dynasty: "Jain religious heritage", year: 1985, lat: 29.17, lng: 78.02, desc: "A modern Jain temple complex depicting the Jain cosmology.", wiki: "https://en.wikipedia.org/wiki/Jambudweep" },

    // B. HARYANA — OUTSIDE NCR
    { id: 116, name: "Agroha Archaeological Site", country: "India", state: "Haryana", city: "Hisar", dynasty: "Harappan Civilization", year: -2600, lat: 29.33, lng: 75.62, desc: "The ancient capital of Maharaja Agrasen.", wiki: "https://en.wikipedia.org/wiki/Agroha_Mound" },
    { id: 117, name: "Firoz Shah Palace", country: "India", state: "Haryana", city: "Hisar", dynasty: "Tughlaq Dynasty", year: 1354, lat: 29.16, lng: 75.72, desc: "A palace complex built by Firoz Shah Tughlaq.", wiki: "https://en.wikipedia.org/wiki/Firoz_Shah_Palace_Complex" },
    { id: 118, name: "Gujari Mahal", country: "India", state: "Haryana", city: "Hisar", dynasty: "Tughlaq Dynasty", year: 1354, lat: 29.16, lng: 75.72, desc: "Built by Firoz Shah Tughlaq for his beloved Gujari queen.", wiki: "https://en.wikipedia.org/wiki/Firoz_Shah_Palace_Complex" },
    { id: 119, name: "Lat Ki Masjid", country: "India", state: "Haryana", city: "Hisar", dynasty: "Tughlaq Dynasty", year: 1354, lat: 29.16, lng: 75.72, desc: "A Tughlaq-era mosque known for its unique L-shaped structure.", wiki: "https://en.wikipedia.org/wiki/Lat_Ki_Masjid" },
    { id: 120, name: "Barsi Gate", country: "India", state: "Haryana", city: "Hisar", dynasty: "Tughlaq Dynasty", year: 1303, lat: 29.10, lng: 75.96, desc: "The southern historic gate of the Hansi fort.", wiki: "https://en.wikipedia.org/wiki/Hansi" },
    { id: 121, name: "Fort of Hansi", country: "India", state: "Haryana", city: "Hisar", dynasty: "Tughlaq Dynasty", year: 1300, lat: 29.10, lng: 75.96, desc: "The historic Asigarh Fort, also associated with Prithviraj Chauhan.", wiki: "https://en.wikipedia.org/wiki/Asigarh_Fort" },
    { id: 122, name: "Ancient Gumbad", country: "India", state: "Haryana", city: "Hisar", dynasty: "Tughlaq Dynasty", year: 1350, lat: 29.16, lng: 75.72, desc: "An old domed structure from the Sultanate period.", wiki: "https://en.wikipedia.org/wiki/Hisar_(city)" },
    { id: 123, name: "Jahaj Kothi", country: "India", state: "Haryana", city: "Hisar", dynasty: "Regional State", year: 1796, lat: 29.16, lng: 75.73, desc: "A building later used by George Thomas, an Irish mercenary.", wiki: "https://en.wikipedia.org/wiki/Jahaj_Kothi_Museum" },
    { id: 124, name: "Tomb of Khawaja Pir", country: "India", state: "Haryana", city: "Sirsa", dynasty: "Medieval Islamic", year: 1300, lat: 29.53, lng: 75.02, desc: "The tomb of a highly revered saint in Sirsa.", wiki: "https://en.wikipedia.org/wiki/Sirsa,_Haryana" },
    { id: 125, name: "Jama Masjid", country: "India", state: "Haryana", city: "Sirsa", dynasty: "Medieval Islamic", year: 1300, lat: 29.53, lng: 75.02, desc: "A historic mosque serving as a prominent landmark.", wiki: "https://en.wikipedia.org/wiki/Sirsa,_Haryana" },
    { id: 126, name: "Dera Baba Sarsai Nath", country: "India", state: "Haryana", city: "Sirsa", dynasty: "Nath tradition", year: 1300, lat: 29.53, lng: 75.02, desc: "An ancient shrine tied to the Nath yogi sect.", wiki: "https://en.wikipedia.org/wiki/Sirsa,_Haryana" },
    { id: 127, name: "Ther Mound", country: "India", state: "Haryana", city: "Sirsa", dynasty: "Ancient / Early Historic", year: -600, lat: 29.53, lng: 75.02, desc: "An ancient archaeological mound.", wiki: "https://en.wikipedia.org/wiki/Sirsa,_Haryana" },
    { id: 128, name: "Ashokan Pillar / Lat", country: "India", state: "Haryana", city: "Fatehabad", dynasty: "Tughlaq Dynasty", year: 1350, lat: 29.51, lng: 75.45, desc: "An Ashokan pillar re-erected by Firoz Shah Tughlaq.", wiki: "https://en.wikipedia.org/wiki/Fatehabad,_Haryana" },
    { id: 129, name: "Lat of Feroz Shah", country: "India", state: "Haryana", city: "Fatehabad", dynasty: "Tughlaq Dynasty", year: 1351, lat: 29.51, lng: 75.45, desc: "A victory pillar celebrating Sultan Firoz Shah's conquests.", wiki: "https://en.wikipedia.org/wiki/Fatehabad,_Haryana" },
    { id: 130, name: "Humayun Mosque", country: "India", state: "Haryana", city: "Fatehabad", dynasty: "Mughal Empire", year: 1530, lat: 29.51, lng: 75.45, desc: "A historic mosque linked to Humayun.", wiki: "https://en.wikipedia.org/wiki/Fatehabad,_Haryana" },
    { id: 131, name: "Ancient Site of Sugh", country: "India", state: "Haryana", city: "Yamunanagar", dynasty: "Ancient / Early Historic", year: -300, lat: 30.14, lng: 77.36, desc: "The ruins of the ancient town of Shrughna.", wiki: "https://en.wikipedia.org/wiki/Sugh_Ancient_Mound" },
    { id: 132, name: "Adibadri Archaeological Site", country: "India", state: "Haryana", city: "Yamunanagar", dynasty: "Ancient / Religious", year: 800, lat: 30.27, lng: 77.27, desc: "A site associated with the mythical Sarasvati river.", wiki: "https://en.wikipedia.org/wiki/Adi_Badri,_Haryana" },
    { id: 133, name: "Gurudwara Kapal Mochan", country: "India", state: "Haryana", city: "Yamunanagar", dynasty: "Sikh heritage", year: 1687, lat: 30.30, lng: 77.32, desc: "A historic Sikh shrine visited by Guru Gobind Singh.", wiki: "https://en.wikipedia.org/wiki/Kapal_Mochan" },
    { id: 134, name: "Raja Harsha ka Tila", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Early Medieval", year: 600, lat: 29.96, lng: 76.81, desc: "An extensive mound related to Emperor Harsha.", wiki: "https://en.wikipedia.org/wiki/Harsh_Ka_Tila" },
    { id: 135, name: "Raja Karna ka Qila", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Early Medieval", year: 600, lat: 29.96, lng: 76.81, desc: "A mound traditionally linked to Karna from the Mahabharata.", wiki: "https://en.wikipedia.org/wiki/Kurukshetra" },
    { id: 136, name: "Vishvamitra Ka Tila", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Gurjara-Pratihara", year: 800, lat: 29.98, lng: 76.58, desc: "An ancient mound located in Pehowa.", wiki: "https://en.wikipedia.org/wiki/Pehowa" },
    { id: 137, name: "Sheikh Chilli's Tomb", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Sultanate / Mughal", year: 1650, lat: 29.96, lng: 76.81, desc: "A beautiful marble tomb complex of the Sufi saint.", wiki: "https://en.wikipedia.org/wiki/Sheikh_Chilli's_Tomb" },
    { id: 138, name: "Pathar Masjid", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Mughal Empire", year: 1650, lat: 29.96, lng: 76.81, desc: "A small red sandstone mosque built by Sheikh Chilli.", wiki: "https://en.wikipedia.org/wiki/Thanesar" },
    { id: 139, name: "Sthaneshwara Mahadev Temple", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Hindu religious heritage", year: 1000, lat: 29.97, lng: 76.81, desc: "An ancient temple dedicated to Lord Shiva.", wiki: "https://en.wikipedia.org/wiki/Sthaneshwar_Mahadev_Temple" },
    { id: 140, name: "Brahma Sarovar", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Hindu religious heritage", year: 1000, lat: 29.96, lng: 76.82, desc: "An ancient water tank sacred to Hinduism.", wiki: "https://en.wikipedia.org/wiki/Brahma_Sarovar" },
    { id: 141, name: "Jyotisar", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Hindu religious heritage", year: 1000, lat: 29.95, lng: 76.76, desc: "The traditional site where the Bhagavad Gita was spoken.", wiki: "https://en.wikipedia.org/wiki/Jyotisar" },
    { id: 142, name: "Gurudwara Mastgarh", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Sikh heritage", year: 1700, lat: 29.96, lng: 76.82, desc: "A prominent historic Gurudwara.", wiki: "https://en.wikipedia.org/wiki/Kurukshetra" },
    { id: 143, name: "Nabha House", country: "India", state: "Haryana", city: "Kurukshetra", dynasty: "Regional State", year: 1850, lat: 29.96, lng: 76.82, desc: "A historic mansion belonging to the royal family of Nabha.", wiki: "https://en.wikipedia.org/wiki/Kurukshetra" },
    { id: 144, name: "Old Fort", country: "India", state: "Haryana", city: "Kaithal", dynasty: "Medieval / Sikh", year: 1767, lat: 29.80, lng: 76.39, desc: "Remains of an old fort dating back to the Bhai dynasty.", wiki: "https://en.wikipedia.org/wiki/Kaithal" },
    { id: 145, name: "Raja Amar Singh-era structures", country: "India", state: "Haryana", city: "Kaithal", dynasty: "Sikh / Regional", year: 1780, lat: 29.80, lng: 76.39, desc: "Historic buildings constructed by the rulers of Patiala.", wiki: "https://en.wikipedia.org/wiki/Kaithal" },
    { id: 146, name: "Fort of Loharu", country: "India", state: "Haryana", city: "Bhiwani", dynasty: "Rajput State", year: 1570, lat: 28.43, lng: 75.81, desc: "An impressive fortress built by Thakur Arjun Singh.", wiki: "https://en.wikipedia.org/wiki/Loharu" },
    { id: 147, name: "Ancient Site of Naurangabad", country: "India", state: "Haryana", city: "Bhiwani", dynasty: "Ancient / Early Historic", year: -300, lat: 28.80, lng: 76.13, desc: "An archaeological site revealing a sequence of ancient cultures.", wiki: "https://en.wikipedia.org/wiki/Bhiwani_district" },
    { id: 148, name: "Palace of Dadri", country: "India", state: "Haryana", city: "Charkhi Dadri", dynasty: "Regional State", year: 1850, lat: 28.59, lng: 76.26, desc: "The historic palace structure of Charkhi Dadri.", wiki: "https://en.wikipedia.org/wiki/Charkhi_Dadri" },
    { id: 149, name: "Prithviraj Ki Kutcheri", country: "India", state: "Haryana", city: "Bhiwani", dynasty: "Rajput / Regional", year: 1100, lat: 28.79, lng: 76.13, desc: "A historic baradari traditionally linked to Prithviraj Chauhan.", wiki: "https://en.wikipedia.org/wiki/Bhiwani" },

    // C. PUNJAB
    { id: 150, name: "Sanghol Ancient Site", country: "India", state: "Punjab", city: "Fatehgarh Sahib", dynasty: "Buddhist", year: 200, lat: 30.79, lng: 76.39, desc: "An ancient site yielding Kushan-era Buddhist sculptures.", wiki: "https://en.wikipedia.org/wiki/Sanghol" },
    { id: 151, name: "Sanghol Buddhist Stupa Site SGL-11", country: "India", state: "Punjab", city: "Fatehgarh Sahib", dynasty: "Buddhist", year: 200, lat: 30.79, lng: 76.39, desc: "A significant excavated Buddhist stupa site.", wiki: "https://en.wikipedia.org/wiki/Sanghol" },
    { id: 152, name: "Ancient Mound of Ropar", country: "India", state: "Punjab", city: "Rupnagar", dynasty: "Ancient / Early Historic", year: -2000, lat: 30.97, lng: 76.52, desc: "An important Harappan and early historic archaeological site.", wiki: "https://en.wikipedia.org/wiki/Rupnagar" },
    { id: 153, name: "Ancient Site of Sunet", country: "India", state: "Punjab", city: "Ludhiana", dynasty: "Ancient / Early Historic", year: -500, lat: 30.89, lng: 75.81, desc: "An extensive ancient mound yielding numerous historic artifacts.", wiki: "https://en.wikipedia.org/wiki/Ludhiana" },
    { id: 154, name: "Takht-i-Akbar", country: "India", state: "Punjab", city: "Gurdaspur", dynasty: "Mughal Empire", year: 1556, lat: 32.00, lng: 75.14, desc: "The coronation site of Mughal Emperor Akbar.", wiki: "https://en.wikipedia.org/wiki/Kalanaur,_Punjab" },
    { id: 155, name: "Anarkali Baradari", country: "India", state: "Punjab", city: "Gurdaspur", dynasty: "Mughal Empire", year: 1590, lat: 31.81, lng: 75.20, desc: "A Mughal-era pavilion built in Batala.", wiki: "https://en.wikipedia.org/wiki/Batala" },
    { id: 156, name: "Shamsher Khan's Tomb", country: "India", state: "Punjab", city: "Gurdaspur", dynasty: "Mughal Empire", year: 1590, lat: 31.81, lng: 75.20, desc: "The beautiful tomb of Akbar's foster brother.", wiki: "https://en.wikipedia.org/wiki/Batala" },
    { id: 157, name: "Mughal Bridge", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1610, lat: 31.13, lng: 75.39, desc: "A historic stone bridge from the Mughal era.", wiki: "https://en.wikipedia.org/wiki/Nakodar" },
    { id: 158, name: "Old Sarai & Gateway", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1610, lat: 31.13, lng: 75.39, desc: "A grand caravanserai gateway at Dakhni.", wiki: "https://en.wikipedia.org/wiki/Nakodar" },
    { id: 159, name: "Sarai & Gateway", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1618, lat: 31.09, lng: 75.58, desc: "A majestic serai built under Noor Jahan's orders.", wiki: "https://en.wikipedia.org/wiki/Nurmahal" },
    { id: 160, name: "Mughal Kos Minar", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "A Mughal milestone used to mark distance on the royal route.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 161, name: "Tombs of Muhammad Momin and Haji Jamal", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1612, lat: 31.13, lng: 75.47, desc: "Beautifully adorned Mughal-era tombs in Nakodar.", wiki: "https://en.wikipedia.org/wiki/Nakodar" },
    { id: 162, name: "Seven Kos Minar", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "Historic Mughal milestones situated along the Grand Trunk Road.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 163, name: "Seven Kos Minar (Birpind)", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 164, name: "Seven Kos Minar (Chima Kalan)", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 165, name: "Seven Kos Minar (Dakhni Jahangir)", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 166, name: "Seven Kos Minar (Tut Kalan)", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 167, name: "Seven Kos Minar (Upal)", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Mughal Empire", year: 1620, lat: 31.13, lng: 75.47, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 168, name: "Seven Kos Minar (Dhandari Kalan)", country: "India", state: "Punjab", city: "Ludhiana", dynasty: "Mughal Empire", year: 1620, lat: 30.88, lng: 75.88, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 169, name: "Kos Minar near Ghungrali Rajputan", country: "India", state: "Punjab", city: "Ludhiana", dynasty: "Mughal Empire", year: 1620, lat: 30.88, lng: 75.88, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 170, name: "Kos Minar near Lashkari Khan Sarai", country: "India", state: "Punjab", city: "Ludhiana", dynasty: "Mughal Empire", year: 1620, lat: 30.88, lng: 75.88, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 171, name: "Kos Minar near Sherpur Kalan", country: "India", state: "Punjab", city: "Ludhiana", dynasty: "Mughal Empire", year: 1620, lat: 30.88, lng: 75.88, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 172, name: "Kos Minar near Sunnahwal", country: "India", state: "Punjab", city: "Ludhiana", dynasty: "Mughal Empire", year: 1620, lat: 30.88, lng: 75.88, desc: "A historic Mughal milestone.", wiki: "https://en.wikipedia.org/wiki/Kos_Minar" },
    { id: 173, name: "Old Sarai Gateway at Amanat Khan", country: "India", state: "Punjab", city: "Tarn Taran", dynasty: "Mughal Empire", year: 1640, lat: 31.32, lng: 74.83, desc: "A Mughal serai gateway noted for its beautiful tile work.", wiki: "https://en.wikipedia.org/wiki/Sarai_Amanat_Khan" },
    { id: 174, name: "Old Sarai Gateway at Fatehabad", country: "India", state: "Punjab", city: "Tarn Taran", dynasty: "Mughal Empire", year: 1640, lat: 31.32, lng: 74.83, desc: "A grand entry to the historic serai.", wiki: "https://en.wikipedia.org/wiki/Tarn_Taran_Sahib" },
    { id: 175, name: "Maharaja Ranjit Singh Fort", country: "India", state: "Punjab", city: "Jalandhar", dynasty: "Sikh Empire", year: 1809, lat: 31.02, lng: 75.78, desc: "A fort in Phillaur used as a military training center.", wiki: "https://en.wikipedia.org/wiki/Phillaur_Fort" },
    { id: 176, name: "Ram Bagh Gate", country: "India", state: "Punjab", city: "Amritsar", dynasty: "Sikh Empire", year: 1820, lat: 31.63, lng: 74.87, desc: "The only surviving gate of Maharaja Ranjit Singh's walled city.", wiki: "https://en.wikipedia.org/wiki/Amritsar" },
    { id: 177, name: "Summer Palace of Maharaja Ranjit Singh", country: "India", state: "Punjab", city: "Amritsar", dynasty: "Sikh Empire", year: 1818, lat: 31.63, lng: 74.87, desc: "The summer residence of the Sikh Emperor in Ram Bagh.", wiki: "https://en.wikipedia.org/wiki/Amritsar" },
    { id: 178, name: "Bathinda Fort / Qila Mubarak", country: "India", state: "Punjab", city: "Bathinda", dynasty: "Sikh Empire", year: 1750, lat: 30.21, lng: 74.94, desc: "An ancient fort later utilized by the Sikh Empire.", wiki: "https://en.wikipedia.org/wiki/Qila_Mubarak" },
    { id: 179, name: "Gobindgarh Fort", country: "India", state: "Punjab", city: "Amritsar", dynasty: "Sikh Empire", year: 1760, lat: 31.63, lng: 74.87, desc: "A historic military fort in Amritsar.", wiki: "https://en.wikipedia.org/wiki/Gobindgarh_Fort" },
    { id: 180, name: "Akal Takht Sahib", country: "India", state: "Punjab", city: "Amritsar", dynasty: "Sikh Empire", year: 1606, lat: 31.62, lng: 74.87, desc: "The highest seat of earthly authority of the Khalsa.", wiki: "https://en.wikipedia.org/wiki/Akal_Takht" },
    { id: 181, name: "Golden Temple / Harmandir Sahib", country: "India", state: "Punjab", city: "Amritsar", dynasty: "Sikh religious heritage", year: 1589, lat: 31.62, lng: 74.87, desc: "The preeminent spiritual site of Sikhism.", wiki: "https://en.wikipedia.org/wiki/Golden_Temple" },
    { id: 182, name: "Durgiana Temple complex", country: "India", state: "Punjab", city: "Amritsar", dynasty: "Sikh / Regional", year: 1921, lat: 31.63, lng: 74.87, desc: "A premier Hindu temple of Punjab.", wiki: "https://en.wikipedia.org/wiki/Durgiana_Temple" },
    { id: 183, name: "Qila Mubarak / Patiala Fort", country: "India", state: "Punjab", city: "Patiala", dynasty: "Patiala State", year: 1763, lat: 30.33, lng: 76.39, desc: "The magnificent royal residence of the Patiala dynasty.", wiki: "https://en.wikipedia.org/wiki/Qila_Mubarak_(Patiala)" },
    { id: 184, name: "Moti Bagh Palace", country: "India", state: "Punjab", city: "Patiala", dynasty: "Patiala State", year: 1840, lat: 30.33, lng: 76.39, desc: "One of the largest royal residences in Asia.", wiki: "https://en.wikipedia.org/wiki/Moti_Bagh_Palace" },
    { id: 185, name: "Sheesh Mahal", country: "India", state: "Punjab", city: "Patiala", dynasty: "Patiala State", year: 1847, lat: 30.33, lng: 76.39, desc: "The 'Palace of Mirrors' built by Maharaja Narinder Singh.", wiki: "https://en.wikipedia.org/wiki/Sheesh_Mahal_(Patiala)" },
    { id: 186, name: "Baradari Gardens", country: "India", state: "Punjab", city: "Patiala", dynasty: "Patiala State", year: 1876, lat: 30.33, lng: 76.39, desc: "Lush gardens featuring colonial-era architecture.", wiki: "https://en.wikipedia.org/wiki/Baradari_Gardens_(Patiala)" },
    { id: 187, name: "Jagatjit Palace", country: "India", state: "Punjab", city: "Kapurthala", dynasty: "Kapurthala State", year: 1908, lat: 31.38, lng: 75.38, desc: "A spectacular palace inspired by the Palace of Versailles.", wiki: "https://en.wikipedia.org/wiki/Jagatjit_Palace" },
    { id: 188, name: "Christ Church", country: "India", state: "Punjab", city: "Kapurthala", dynasty: "British Period", year: 1856, lat: 31.38, lng: 75.38, desc: "A historic church serving as a monument of colonial heritage.", wiki: "https://en.wikipedia.org/wiki/Kapurthala" },
// A. UTTAR PRADESH
    { id: 189, name: "Ashoka Pillar & Archaeological Site", country: "India", state: "Uttar Pradesh", city: "Varanasi", dynasty: "Mauryan", year: -250, lat: 25.3811, lng: 83.0242, desc: "Ancient Mauryan pillar site where Buddha gave his first sermon.", wiki: "https://en.wikipedia.org/wiki/Pillars_of_Ashoka" },
    { id: 190, name: "Dhamek Stupa", country: "India", state: "Uttar Pradesh", city: "Varanasi", dynasty: "Gupta", year: 500, lat: 25.3810, lng: 83.0245, desc: "A massive stupa in Sarnath marking the spot of Buddha's first sermon.", wiki: "https://en.wikipedia.org/wiki/Dhamek_Stupa" },
    { id: 191, name: "Dharmarajika Stupa", country: "India", state: "Uttar Pradesh", city: "Varanasi", dynasty: "Mauryan", year: -250, lat: 25.3812, lng: 83.0240, desc: "The ruins of a large stupa built by Emperor Ashoka in Sarnath.", wiki: "https://en.wikipedia.org/wiki/Dharmarajika_Stupa" },
    { id: 192, name: "Chaukhandi Stupa", country: "India", state: "Uttar Pradesh", city: "Varanasi", dynasty: "Gupta", year: 500, lat: 25.3745, lng: 83.0210, desc: "An ancient Buddhist stupa in Sarnath with an octagonal tower.", wiki: "https://en.wikipedia.org/wiki/Chaukhandi_Stupa" },
    { id: 193, name: "Mahaparinirvana Temple & Stupa", country: "India", state: "Uttar Pradesh", city: "Kushinagar", dynasty: "Buddhist", year: -250, lat: 26.7397, lng: 83.8906, desc: "The sacred site marking Buddha's Mahaparinirvana.", wiki: "https://en.wikipedia.org/wiki/Kushinagar" },
    { id: 194, name: "Ramabhar Stupa", country: "India", state: "Uttar Pradesh", city: "Kushinagar", dynasty: "Buddhist", year: -250, lat: 26.7350, lng: 83.9000, desc: "A large stupa marking the cremation site of Lord Buddha.", wiki: "https://en.wikipedia.org/wiki/Ramabhar_Stupa" },
    { id: 195, name: "Jetavana Monastery", country: "India", state: "Uttar Pradesh", city: "Shravasti", dynasty: "Buddhist", year: 600, lat: 27.5110, lng: 82.0505, desc: "One of the most famous ancient Buddhist monasteries in India.", wiki: "https://en.wikipedia.org/wiki/Jetavana" },
    { id: 196, name: "Kaushambi Archaeological Site", country: "India", state: "Uttar Pradesh", city: "Kaushambi", dynasty: "Mauryan", year: -250, lat: 25.3370, lng: 81.3850, desc: "The ruins of the ancient city of Kaushambi.", wiki: "https://en.wikipedia.org/wiki/Kosambi" },
    { id: 197, name: "Ashoka Pillar at Kaushambi", country: "India", state: "Uttar Pradesh", city: "Kaushambi", dynasty: "Mauryan", year: -250, lat: 25.3375, lng: 81.3855, desc: "An ancient Ashokan edict pillar.", wiki: "https://en.wikipedia.org/wiki/Pillars_of_Ashoka" },
    { id: 198, name: "Sankisa Archaeological Site", country: "India", state: "Uttar Pradesh", city: "Farrukhabad", dynasty: "Mauryan", year: -250, lat: 27.3340, lng: 79.2630, desc: "An ancient Buddhist pilgrimage site with Mauryan ruins.", wiki: "https://en.wikipedia.org/wiki/Sankassa" },
    { id: 199, name: "Agra Fort", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1565, lat: 27.1795, lng: 78.0211, desc: "The historic main residence of the emperors of the Mughal Dynasty.", wiki: "https://en.wikipedia.org/wiki/Agra_Fort" },
    { id: 200, name: "Ram Bagh", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1528, lat: 27.2060, lng: 78.0310, desc: "The oldest Mughal garden in India, originally built by Babur.", wiki: "https://en.wikipedia.org/wiki/Ram_Bagh,_Agra" },
    { id: 201, name: "Fatehpur Sikri", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1571, lat: 27.0945, lng: 77.6679, desc: "The brief capital of the Mughal Empire built by Akbar.", wiki: "https://en.wikipedia.org/wiki/Fatehpur_Sikri" },
    { id: 202, name: "Buland Darwaza", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1575, lat: 27.0935, lng: 77.6610, desc: "The highest gateway in the world, built by Akbar to commemorate his victory over Gujarat.", wiki: "https://en.wikipedia.org/wiki/Buland_Darwaza" },
    { id: 203, name: "Jama Masjid, Fatehpur Sikri", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1571, lat: 27.0940, lng: 77.6620, desc: "A congregational mosque built by Akbar.", wiki: "https://en.wikipedia.org/wiki/Jama_Masjid,_Fatehpur_Sikri" },
    { id: 204, name: "Panch Mahal", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1575, lat: 27.0960, lng: 77.6640, desc: "A five-story palatial structure in Fatehpur Sikri.", wiki: "https://en.wikipedia.org/wiki/Panch_Mahal,_Fatehpur_Sikri" },
    { id: 205, name: "Akbar's Tomb", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1605, lat: 27.2206, lng: 77.9505, desc: "The majestic red sandstone tomb of Emperor Akbar in Sikandra.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Akbar" },
    { id: 206, name: "Itimad-ud-Daulah's Tomb", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1622, lat: 27.1928, lng: 78.0310, desc: "A delicate marble mausoleum often described as the 'Baby Taj'.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_I%27tim%C4%81d-ud-Daulah" },
    { id: 207, name: "Taj Mahal", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1632, lat: 27.1751, lng: 78.0421, desc: "The iconic ivory-white marble mausoleum on the Yamuna river.", wiki: "https://en.wikipedia.org/wiki/Taj_Mahal" },
    { id: 208, name: "Chini ka Rauza", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1635, lat: 27.1990, lng: 78.0330, desc: "A funerary monument notable for its glazed tile work.", wiki: "https://en.wikipedia.org/wiki/Chini_Ka_Rauza" },
    { id: 209, name: "Mehtab Bagh", country: "India", state: "Uttar Pradesh", city: "Agra", dynasty: "Mughal Empire", year: 1630, lat: 27.1785, lng: 78.0435, desc: "A charbagh complex perfectly aligned across the river from the Taj Mahal.", wiki: "https://en.wikipedia.org/wiki/Mehtab_Bagh" },
    { id: 210, name: "Allahabad Fort", country: "India", state: "Uttar Pradesh", city: "Prayagraj", dynasty: "Mughal Empire", year: 1583, lat: 25.4300, lng: 81.8762, desc: "A large fort built by Emperor Akbar at the confluence of the Ganges and Yamuna.", wiki: "https://en.wikipedia.org/wiki/Allahabad_Fort" },
    { id: 211, name: "Khusro Bagh", country: "India", state: "Uttar Pradesh", city: "Prayagraj", dynasty: "Mughal Empire", year: 1600, lat: 25.4415, lng: 81.8155, desc: "A large walled garden housing the tombs of Jahangir's family.", wiki: "https://en.wikipedia.org/wiki/Khusro_Bagh" },
    { id: 212, name: "Chunar Fort", country: "India", state: "Uttar Pradesh", city: "Mirzapur", dynasty: "Mughal Empire", year: 1550, lat: 25.1250, lng: 82.8750, desc: "A historic fort commanding the Ganges river.", wiki: "https://en.wikipedia.org/wiki/Chunar_Fort" },
    { id: 213, name: "Kalinjar Fort", country: "India", state: "Uttar Pradesh", city: "Banda", dynasty: "Chandela Dynasty", year: 1000, lat: 25.0130, lng: 80.4850, desc: "An ancient fortress-city historically held by the Chandelas.", wiki: "https://en.wikipedia.org/wiki/Kalinjar_Fort" },
    { id: 214, name: "Neelkanth Temple", country: "India", state: "Uttar Pradesh", city: "Banda", dynasty: "Chandela Dynasty", year: 1000, lat: 25.0125, lng: 80.4845, desc: "A revered Shiva temple located within the Kalinjar Fort.", wiki: "https://en.wikipedia.org/wiki/Kalinjar_Fort" },
    { id: 215, name: "Kakra Math", country: "India", state: "Uttar Pradesh", city: "Mahoba", dynasty: "Chandela Dynasty", year: 1000, lat: 25.2910, lng: 79.8700, desc: "An ancient Chandela era temple.", wiki: "https://en.wikipedia.org/wiki/Mahoba" },
    { id: 216, name: "Jhansi Fort", country: "India", state: "Uttar Pradesh", city: "Jhansi", dynasty: "Mughal Empire", year: 1613, lat: 25.4600, lng: 78.5830, desc: "A massive fortress situated on a large hilltop.", wiki: "https://en.wikipedia.org/wiki/Jhansi_Fort" },
    { id: 217, name: "Atala Masjid", country: "India", state: "Uttar Pradesh", city: "Jaunpur", dynasty: "Sharqi Sultanate", year: 1408, lat: 25.7530, lng: 82.6860, desc: "A distinctive 15th-century mosque built by Sultan Ibrahim Sharqi.", wiki: "https://en.wikipedia.org/wiki/Atala_Masjid,_Jaunpur" },
    { id: 218, name: "Jama Masjid, Jaunpur", country: "India", state: "Uttar Pradesh", city: "Jaunpur", dynasty: "Sharqi Sultanate", year: 1470, lat: 25.7480, lng: 82.6850, desc: "A monumental 15th-century Friday mosque.", wiki: "https://en.wikipedia.org/wiki/Jama_Masjid,_Jaunpur" },
    { id: 219, name: "Lal Darwaza Mosque", country: "India", state: "Uttar Pradesh", city: "Jaunpur", dynasty: "Sharqi Sultanate", year: 1447, lat: 25.7450, lng: 82.6830, desc: "A Sharqi-era mosque built by Queen Rajye Bibi.", wiki: "https://en.wikipedia.org/wiki/Lal_Darwaza_Masjid" },
    { id: 220, name: "Shahi Bridge", country: "India", state: "Uttar Pradesh", city: "Jaunpur", dynasty: "Sharqi Sultanate", year: 1568, lat: 25.7420, lng: 82.6870, desc: "A 16th-century bridge spanning the Gomti River.", wiki: "https://en.wikipedia.org/wiki/Shahi_Bridge,_Jaunpur" },
    { id: 221, name: "Bara Imambara", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1784, lat: 26.8693, lng: 80.9136, desc: "A grand imambara complex built by Asaf-ud-Daula, renowned for its labyrinth.", wiki: "https://en.wikipedia.org/wiki/Bara_Imambara" },
    { id: 222, name: "Rumi Darwaza", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1784, lat: 26.8680, lng: 80.9125, desc: "An imposing gateway representing Awadhi architecture.", wiki: "https://en.wikipedia.org/wiki/Rumi_Darwaza" },
    { id: 223, name: "Asafi Mosque", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1784, lat: 26.8690, lng: 80.9130, desc: "A large mosque located inside the Bara Imambara complex.", wiki: "https://en.wikipedia.org/wiki/Bara_Imambara" },
    { id: 224, name: "Shahi Baoli", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1784, lat: 26.8695, lng: 80.9140, desc: "An elaborate stepped well in the Bara Imambara complex.", wiki: "https://en.wikipedia.org/wiki/Bara_Imambara" },
    { id: 225, name: "Chota Imambara", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1838, lat: 26.8720, lng: 80.9060, desc: "An ornate imambara known as the Palace of Lights.", wiki: "https://en.wikipedia.org/wiki/Chota_Imambara" },
    { id: 226, name: "Husainabad Clock Tower", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1881, lat: 26.8710, lng: 80.9080, desc: "The tallest clock tower in India.", wiki: "https://en.wikipedia.org/wiki/Husainabad_Clock_Tower" },
    { id: 227, name: "Chattar Manzil", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1798, lat: 26.8580, lng: 80.9320, desc: "A palace characterized by its umbrella-shaped domes.", wiki: "https://en.wikipedia.org/wiki/Chattar_Manzil" },
    { id: 228, name: "Dilkusha Kothi", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1800, lat: 26.8320, lng: 80.9650, desc: "The remains of an 18th-century English baroque-style palace.", wiki: "https://en.wikipedia.org/wiki/Dilkusha_Kothi" },
    { id: 229, name: "Residency Complex", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1800, lat: 26.8610, lng: 80.9250, desc: "A group of buildings that served as the residence for the British Resident General.", wiki: "https://en.wikipedia.org/wiki/The_Residency,_Lucknow" },
    { id: 230, name: "Moti Mahal", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1800, lat: 26.8550, lng: 80.9380, desc: "The 'Pearl Palace' built on the banks of the Gomti river.", wiki: "https://en.wikipedia.org/wiki/Moti_Mahal,_Lucknow" },
    { id: 231, name: "Qaiserbagh Palace", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1850, lat: 26.8540, lng: 80.9340, desc: "A large palace complex built by Wajid Ali Shah.", wiki: "https://en.wikipedia.org/wiki/Kaiserbagh" },
    { id: 232, name: "Sikandar Bagh", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "Nawab of Awadh", year: 1800, lat: 26.8520, lng: 80.9520, desc: "A walled villa and garden famous as a site of the 1857 siege.", wiki: "https://en.wikipedia.org/wiki/Sikandar_Bagh" },
    { id: 233, name: "British Residency", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "British Raj", year: 1857, lat: 26.8615, lng: 80.9260, desc: "The ruins marking the historic 1857 Siege of Lucknow.", wiki: "https://en.wikipedia.org/wiki/The_Residency,_Lucknow" },
    { id: 234, name: "La Martiniere College", country: "India", state: "Uttar Pradesh", city: "Lucknow", dynasty: "British Raj", year: 1845, lat: 26.8400, lng: 80.9600, desc: "An educational institution established by Claude Martin.", wiki: "https://en.wikipedia.org/wiki/La_Martiniere_College,_Lucknow" },
    { id: 235, name: "All Saints Cathedral", country: "India", state: "Uttar Pradesh", city: "Prayagraj", dynasty: "British Raj", year: 1887, lat: 25.4490, lng: 81.8260, desc: "A magnificent Anglican cathedral built in Gothic style.", wiki: "https://en.wikipedia.org/wiki/All_Saints_Cathedral,_Prayagraj" },
    { id: 236, name: "Anand Bhavan", country: "India", state: "Uttar Pradesh", city: "Prayagraj", dynasty: "British Raj", year: 1930, lat: 25.4600, lng: 81.8610, desc: "The historic mansion belonging to the Nehru family.", wiki: "https://en.wikipedia.org/wiki/Anand_Bhavan" },
    { id: 237, name: "Swaraj Bhavan", country: "India", state: "Uttar Pradesh", city: "Prayagraj", dynasty: "British Raj", year: 1920, lat: 25.4610, lng: 81.8600, desc: "The original Nehru family home turned political headquarters.", wiki: "https://en.wikipedia.org/wiki/Swaraj_Bhavan" },
    { id: 238, name: "Bharat Mata Temple", country: "India", state: "Uttar Pradesh", city: "Varanasi", dynasty: "Independent India", year: 1936, lat: 25.3160, lng: 82.9890, desc: "A temple dedicated to Mother India, featuring a marble map of the country.", wiki: "https://en.wikipedia.org/wiki/Bharat_Mata_Mandir" },
    { id: 239, name: "Banaras Hindu University", country: "India", state: "Uttar Pradesh", city: "Varanasi", dynasty: "Independent India", year: 1916, lat: 25.2670, lng: 82.9910, desc: "The historic campus of the prominent Indian university.", wiki: "https://en.wikipedia.org/wiki/Banaras_Hindu_University" },

    // B. UTTARAKHAND
    { id: 240, name: "Baijnath Temple Group", country: "India", state: "Uttarakhand", city: "Bageshwar", dynasty: "Katyuri Dynasty", year: 1000, lat: 29.9140, lng: 79.6170, desc: "A complex of ancient stone temples built along the Gomati river.", wiki: "https://en.wikipedia.org/wiki/Baijnath,_Uttarakhand" },
    { id: 241, name: "Jageshwar Temple Group", country: "India", state: "Uttarakhand", city: "Almora", dynasty: "Katyuri Dynasty", year: 1000, lat: 29.6370, lng: 79.8510, desc: "A cluster of over 100 ancient stone temples in a Deodar forest.", wiki: "https://en.wikipedia.org/wiki/Jageshwar" },
    { id: 242, name: "Katarmal Sun Temple", country: "India", state: "Uttarakhand", city: "Almora", dynasty: "Katyuri Dynasty", year: 900, lat: 29.6150, lng: 79.5840, desc: "A 9th-century sun temple built by the Katyuri Kings.", wiki: "https://en.wikipedia.org/wiki/Katarmal_Sun_Temple" },
    { id: 243, name: "Adibadri Temple Group", country: "India", state: "Uttarakhand", city: "Chamoli", dynasty: "Katyuri Dynasty", year: 1000, lat: 30.1550, lng: 79.2310, desc: "A group of 16 ancient temples from the late Gupta period.", wiki: "https://en.wikipedia.org/wiki/Adi_Badri,_Uttarakhand" },
    { id: 244, name: "Baleshwar Temple Group", country: "India", state: "Uttarakhand", city: "Champawat", dynasty: "Chand Dynasty", year: 1300, lat: 29.3360, lng: 80.0910, desc: "Ancient temples known for intricate stone carvings.", wiki: "https://en.wikipedia.org/wiki/Baleshwar_Temple,_Champawat" },
    { id: 245, name: "Patal Bhubaneswar Cave Temple", country: "India", state: "Uttarakhand", city: "Pithoragarh", dynasty: "Chand Dynasty", year: 1300, lat: 29.8240, lng: 80.0460, desc: "An extensive limestone cave temple network.", wiki: "https://en.wikipedia.org/wiki/Patal_Bhuvaneshwar" },
    { id: 246, name: "Nanda Devi Temple", country: "India", state: "Uttarakhand", city: "Almora", dynasty: "Chand Dynasty", year: 1400, lat: 29.6000, lng: 79.6600, desc: "A revered temple housing the patron goddess of the Chand kings.", wiki: "https://en.wikipedia.org/wiki/Nanda_Devi_Temple,_Almora" },
    { id: 247, name: "Golu Devta Temple", country: "India", state: "Uttarakhand", city: "Almora", dynasty: "Chand Dynasty", year: 1600, lat: 29.6100, lng: 79.6900, desc: "The legendary temple of Chitai known for thousands of hanging bells.", wiki: "https://en.wikipedia.org/wiki/Golu_Devata" },
    { id: 248, name: "Kasar Devi Temple", country: "India", state: "Uttarakhand", city: "Almora", dynasty: "Chand Dynasty", year: 1600, lat: 29.6380, lng: 79.6340, desc: "An ancient shrine located on a ridge above Almora.", wiki: "https://en.wikipedia.org/wiki/Kasar_Devi" },
    { id: 249, name: "Khalanga War Memorial", country: "India", state: "Uttarakhand", city: "Dehradun", dynasty: "British Raj", year: 1815, lat: 30.3400, lng: 78.0700, desc: "A memorial to the Gurkha forces who fought the British.", wiki: "https://en.wikipedia.org/wiki/Battle_of_Nalapani" },
    { id: 250, name: "Forest Research Institute", country: "India", state: "Uttarakhand", city: "Dehradun", dynasty: "British Raj", year: 1906, lat: 30.3420, lng: 77.9980, desc: "A premier research institute housed in a sprawling colonial Greco-Roman building.", wiki: "https://en.wikipedia.org/wiki/Forest_Research_Institute_(India)" },
    { id: 251, name: "Raj Bhawan (Nainital)", country: "India", state: "Uttarakhand", city: "Nainital", dynasty: "British Raj", year: 1897, lat: 29.3800, lng: 79.4600, desc: "The Governor's House, resembling a Scottish castle.", wiki: "https://en.wikipedia.org/wiki/Raj_Bhavan_(Uttarakhand)" },
    { id: 252, name: "St. John's in the Wilderness", country: "India", state: "Uttarakhand", city: "Nainital", dynasty: "British Raj", year: 1844, lat: 29.3900, lng: 79.4500, desc: "One of the oldest churches in Nainital.", wiki: "https://en.wikipedia.org/wiki/St._John_in_the_Wilderness_Church_(Nainital)" },
    { id: 253, name: "Gurney House", country: "India", state: "Uttarakhand", city: "Nainital", dynasty: "British Raj", year: 1881, lat: 29.3850, lng: 79.4650, desc: "The historic former residence of Jim Corbett.", wiki: "https://en.wikipedia.org/wiki/Gurney_House" },
    { id: 254, name: "Landour Cantonment Heritage", country: "India", state: "Uttarakhand", city: "Mussoorie", dynasty: "British Raj", year: 1827, lat: 30.4600, lng: 78.1000, desc: "Historic colonial buildings and estates in the Cantonment town.", wiki: "https://en.wikipedia.org/wiki/Landour" },
    { id: 255, name: "Kellogg Memorial Church", country: "India", state: "Uttarakhand", city: "Mussoorie", dynasty: "British Raj", year: 1903, lat: 30.4580, lng: 78.0950, desc: "A prominent Gothic-style church in Landour.", wiki: "https://en.wikipedia.org/wiki/Landour" },
    { id: 256, name: "Christ Church, Mussoorie", country: "India", state: "Uttarakhand", city: "Mussoorie", dynasty: "British Raj", year: 1836, lat: 30.4550, lng: 78.0750, desc: "The oldest church in the Himalayan ranges.", wiki: "https://en.wikipedia.org/wiki/Mussoorie" },
    { id: 257, name: "IIT Roorkee Heritage Buildings", country: "India", state: "Uttarakhand", city: "Roorkee", dynasty: "British Raj", year: 1847, lat: 29.8640, lng: 77.8960, desc: "The historic administrative buildings of India's oldest engineering college.", wiki: "https://en.wikipedia.org/wiki/IIT_Roorkee" },
    { id: 258, name: "Old Cemetery", country: "India", state: "Uttarakhand", city: "Roorkee", dynasty: "British Raj", year: 1850, lat: 29.8600, lng: 77.8900, desc: "A historic 19th-century cemetery.", wiki: "https://en.wikipedia.org/wiki/Roorkee" },
    { id: 259, name: "Har Ki Pauri", country: "India", state: "Uttarakhand", city: "Haridwar", dynasty: "Hindu religious heritage", year: 100, lat: 29.9560, lng: 78.1700, desc: "The famous ghat on the banks of the Ganges where King Vikramaditya built steps.", wiki: "https://en.wikipedia.org/wiki/Har_Ki_Pauri" },
    { id: 260, name: "Kankhal Daksheshwar Temple", country: "India", state: "Uttarakhand", city: "Haridwar", dynasty: "Hindu religious heritage", year: 1000, lat: 29.9280, lng: 78.1480, desc: "An ancient temple associated with King Daksha.", wiki: "https://en.wikipedia.org/wiki/Daksheswara_Mahadev_Temple" },
    { id: 261, name: "Maya Devi Temple", country: "India", state: "Uttarakhand", city: "Haridwar", dynasty: "Hindu religious heritage", year: 1000, lat: 29.9480, lng: 78.1630, desc: "One of the Siddh Peethas dedicated to Goddess Maya.", wiki: "https://en.wikipedia.org/wiki/Maya_Devi_Temple,_Haridwar" },
    { id: 262, name: "Bharat Mandir", country: "India", state: "Uttarakhand", city: "Rishikesh", dynasty: "Hindu religious heritage", year: 800, lat: 30.1080, lng: 78.2950, desc: "The oldest and most sacred temple in Rishikesh.", wiki: "https://en.wikipedia.org/wiki/Rishikesh" },
    { id: 263, name: "Neelkanth Mahadev Temple", country: "India", state: "Uttarakhand", city: "Rishikesh", dynasty: "Hindu religious heritage", year: 800, lat: 30.0820, lng: 78.3420, desc: "A revered temple situated in the mountains above Rishikesh.", wiki: "https://en.wikipedia.org/wiki/Neelkanth_Mahadev_Temple" },
    { id: 264, name: "Kedarnath Temple", country: "India", state: "Uttarakhand", city: "Rudraprayag", dynasty: "Hindu religious heritage", year: 800, lat: 30.7350, lng: 79.0660, desc: "An ancient, highly revered Shiva temple in the Garhwal Himalayas.", wiki: "https://en.wikipedia.org/wiki/Kedarnath_Temple" },
    { id: 265, name: "Badrinath Temple", country: "India", state: "Uttarakhand", city: "Chamoli", dynasty: "Hindu religious heritage", year: 800, lat: 30.7440, lng: 79.4930, desc: "The historic complex and main shrine of Lord Badri.", wiki: "https://en.wikipedia.org/wiki/Badrinath_Temple" },
    { id: 266, name: "Gangotri Temple", country: "India", state: "Uttarakhand", city: "Uttarkashi", dynasty: "Hindu religious heritage", year: 1800, lat: 30.9940, lng: 78.9390, desc: "The traditional shrine dedicated to the Goddess Ganga.", wiki: "https://en.wikipedia.org/wiki/Gangotri" },
    { id: 267, name: "Yamunotri Temple", country: "India", state: "Uttarakhand", city: "Uttarkashi", dynasty: "Hindu religious heritage", year: 1800, lat: 31.0130, lng: 78.4550, desc: "The chief sanctuary of Goddess Yamuna in the Himalayas.", wiki: "https://en.wikipedia.org/wiki/Yamunotri" },
    { id: 268, name: "Tungnath Temple", country: "India", state: "Uttarakhand", city: "Rudraprayag", dynasty: "Hindu religious heritage", year: 1000, lat: 30.4880, lng: 79.2170, desc: "The highest Shiva temple in the world.", wiki: "https://en.wikipedia.org/wiki/Tungnath" },
    { id: 269, name: "Narsingh Temple", country: "India", state: "Uttarakhand", city: "Chamoli", dynasty: "Hindu religious heritage", year: 800, lat: 30.5550, lng: 79.5650, desc: "The winter seat of Lord Badrinath in Joshimath.", wiki: "https://en.wikipedia.org/wiki/Joshimath" },
    { id: 270, name: "Baijnath–Bageshwar Heritage", country: "India", state: "Uttarakhand", city: "Bageshwar", dynasty: "Hindu religious heritage", year: 1000, lat: 29.8370, lng: 79.7710, desc: "Historic religious complexes along the Saryu river.", wiki: "https://en.wikipedia.org/wiki/Bageshwar" },
// BIHAR
    { id: 271, name: "Mahabodhi Temple", country: "India", state: "Bihar", city: "Bodh Gaya", dynasty: "Mauryan Empire", year: -250, lat: 24.6959, lng: 84.9911, desc: "Ancient Buddhist temple marking the location of Buddha's enlightenment.", wiki: "https://en.wikipedia.org/wiki/Mahabodhi_Temple" },
    { id: 272, name: "Barabar Caves", country: "India", state: "Bihar", city: "Jehanabad", dynasty: "Mauryan Empire", year: -250, lat: 25.0050, lng: 85.0620, desc: "The oldest surviving rock-cut caves in India.", wiki: "https://en.wikipedia.org/wiki/Barabar_Caves" },
    { id: 273, name: "Sudama Cave", country: "India", state: "Bihar", city: "Jehanabad", dynasty: "Mauryan Empire", year: -250, lat: 25.0051, lng: 85.0621, desc: "One of the historic rock-cut chambers in the Barabar hills.", wiki: "https://en.wikipedia.org/wiki/Barabar_Caves" },
    { id: 274, name: "Lomas Rishi Cave", country: "India", state: "Bihar", city: "Jehanabad", dynasty: "Mauryan Empire", year: -250, lat: 25.0052, lng: 85.0622, desc: "Famous for its intricately carved arch-like facade.", wiki: "https://en.wikipedia.org/wiki/Lomas_Rishi_Cave" },
    { id: 275, name: "Nalanda Mahavihara", country: "India", state: "Bihar", city: "Nalanda", dynasty: "Gupta Empire", year: 427, lat: 25.1360, lng: 85.4450, desc: "The ruins of one of the world's oldest and greatest monastic universities.", wiki: "https://en.wikipedia.org/wiki/Nalanda" },
    { id: 276, name: "Rajgir Archaeological Site", country: "India", state: "Bihar", city: "Rajgir", dynasty: "Mauryan Empire", year: -250, lat: 25.0160, lng: 85.4170, desc: "The ancient capital city of the Magadha empire.", wiki: "https://en.wikipedia.org/wiki/Rajgir" },
    { id: 277, name: "Vishwa Shanti Stupa", country: "India", state: "Bihar", city: "Rajgir", dynasty: "Modern Buddhist", year: 1969, lat: 25.0060, lng: 85.4290, desc: "A large white peace pagoda perched on a hilltop.", wiki: "https://en.wikipedia.org/wiki/Vishwa_Shanti_Stupa,_Rajgir" },
    { id: 278, name: "Cyclopean Wall", country: "India", state: "Bihar", city: "Rajgir", dynasty: "Mauryan Empire", year: -500, lat: 25.0110, lng: 85.4200, desc: "A massive, ancient 40-km long stone wall encircling the city.", wiki: "https://en.wikipedia.org/wiki/Cyclopean_Wall_of_Rajgir" },
    { id: 279, name: "Ajatshatru Fort", country: "India", state: "Bihar", city: "Rajgir", dynasty: "Haryanka Dynasty", year: -490, lat: 25.0170, lng: 85.4190, desc: "The ruins of the fort built by King Ajatshatru.", wiki: "https://en.wikipedia.org/wiki/Ajatashatru" },
    { id: 280, name: "Kesaria Stupa", country: "India", state: "Bihar", city: "East Champaran", dynasty: "Mauryan Empire", year: -250, lat: 26.3380, lng: 84.8690, desc: "One of the tallest and largest Buddhist stupas in the world.", wiki: "https://en.wikipedia.org/wiki/Kesariya_stupa" },
    { id: 281, name: "Lauriya Nandangarh Ashokan Pillar", country: "India", state: "Bihar", city: "West Champaran", dynasty: "Mauryan Empire", year: -250, lat: 26.9950, lng: 84.4050, desc: "A well-preserved monolithic pillar of Emperor Ashoka.", wiki: "https://en.wikipedia.org/wiki/Lauriya_Nandangarh" },
    { id: 282, name: "Lauriya Araraj Ashokan Pillar", country: "India", state: "Bihar", city: "East Champaran", dynasty: "Mauryan Empire", year: -250, lat: 26.5560, lng: 84.6400, desc: "An inscribed sandstone pillar from the Mauryan period.", wiki: "https://en.wikipedia.org/wiki/Lauriya_Araraj" },
    { id: 283, name: "Vaishali Ashokan Pillar", country: "India", state: "Bihar", city: "Vaishali", dynasty: "Mauryan Empire", year: -250, lat: 25.9860, lng: 85.1250, desc: "A lion pillar and stupa marking the ancient city of Vaishali.", wiki: "https://en.wikipedia.org/wiki/Pillars_of_Ashoka" },
    { id: 284, name: "Vikramshila Archaeological Site", country: "India", state: "Bihar", city: "Bhagalpur", dynasty: "Pala Empire", year: 800, lat: 25.3210, lng: 87.2790, desc: "The ruins of one of the most important centers of Buddhist learning.", wiki: "https://en.wikipedia.org/wiki/Vikramashila" },
    { id: 285, name: "Maner Sharif Dargah", country: "India", state: "Bihar", city: "Patna", dynasty: "Mughal Empire", year: 1616, lat: 25.6490, lng: 84.8770, desc: "A magnificent mausoleum featuring exquisite stone carvings.", wiki: "https://en.wikipedia.org/wiki/Maner_Sharif" },
    { id: 286, name: "Golghar", country: "India", state: "Bihar", city: "Patna", dynasty: "British Raj", year: 1786, lat: 25.6200, lng: 85.1360, desc: "A massive granary built in the stupa architecture style.", wiki: "https://en.wikipedia.org/wiki/Golghar" },
    { id: 287, name: "Agam Kuan", country: "India", state: "Bihar", city: "Patna", dynasty: "Mauryan Empire", year: -250, lat: 25.6020, lng: 85.1950, desc: "An ancient, reportedly unfathomable well built by Ashoka.", wiki: "https://en.wikipedia.org/wiki/Agam_Kuan" },
    { id: 288, name: "Sher Shah Suri Masjid", country: "India", state: "Bihar", city: "Patna", dynasty: "Sur Empire", year: 1545, lat: 25.6080, lng: 85.2030, desc: "A historic Afghan-style mosque in Patna.", wiki: "https://en.wikipedia.org/wiki/Sher_Shah_Suri_Masjid" },
    { id: 289, name: "Pathar Ki Masjid", country: "India", state: "Bihar", city: "Patna", dynasty: "Mughal Empire", year: 1621, lat: 25.6200, lng: 85.2150, desc: "A stone mosque built by Parvez Shah, son of Jahangir.", wiki: "https://en.wikipedia.org/wiki/Pathar_Ki_Masjid" },
    { id: 290, name: "Takht Sri Patna Sahib", country: "India", state: "Bihar", city: "Patna", dynasty: "Sikh Heritage", year: 1954, lat: 25.5960, lng: 85.2280, desc: "A major Gurdwara marking the birthplace of Guru Gobind Singh.", wiki: "https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib" },
    { id: 291, name: "Sasaram Sher Shah Suri Tomb", country: "India", state: "Bihar", city: "Sasaram", dynasty: "Sur Empire", year: 1545, lat: 24.9490, lng: 84.0300, desc: "A majestic sandstone mausoleum standing in an artificial lake.", wiki: "https://en.wikipedia.org/wiki/Tomb_of_Sher_Shah_Suri" },
    { id: 292, name: "Rohtasgarh Fort", country: "India", state: "Bihar", city: "Rohtas", dynasty: "Sur Empire", year: 1539, lat: 24.6280, lng: 83.9160, desc: "One of the most ancient and massive hill forts of India.", wiki: "https://en.wikipedia.org/wiki/Rohtasgarh_Fort" },
    { id: 293, name: "Mundeshwari Devi Temple", country: "India", state: "Bihar", city: "Kaimur", dynasty: "Gupta Empire", year: 108, lat: 25.0450, lng: 83.5850, desc: "Often considered the oldest functional Hindu temple in India.", wiki: "https://en.wikipedia.org/wiki/Mundeshwari_Temple" },
    { id: 294, name: "Darbhanga Fort", country: "India", state: "Bihar", city: "Darbhanga", dynasty: "Khandavala Dynasty", year: 1934, lat: 26.1550, lng: 85.8970, desc: "The grand residential complex of the Darbhanga royal family.", wiki: "https://en.wikipedia.org/wiki/Darbhanga_Fort" },
    { id: 295, name: "Janki Mandir", country: "India", state: "Bihar", city: "Sitamarhi", dynasty: "Hindu Religious Heritage", year: 1900, lat: 26.5890, lng: 85.4920, desc: "A temple marking the traditional birthplace of Goddess Sita.", wiki: "https://en.wikipedia.org/wiki/Sitamarhi" },

    // RAJASTHAN
    { id: 296, name: "Chittorgarh Fort", country: "India", state: "Rajasthan", city: "Chittorgarh", dynasty: "Rajput", year: 700, lat: 24.8879, lng: 74.6450, desc: "One of the largest forts in India, symbolizing Rajput chivalry.", wiki: "https://en.wikipedia.org/wiki/Chittorgarh_Fort" },
    { id: 297, name: "Vijay Stambh", country: "India", state: "Rajasthan", city: "Chittorgarh", dynasty: "Rajput", year: 1448, lat: 24.8880, lng: 74.6460, desc: "The towering 9-story Tower of Victory.", wiki: "https://en.wikipedia.org/wiki/Vijaya_Stambha" },
    { id: 298, name: "Kirti Stambh", country: "India", state: "Rajasthan", city: "Chittorgarh", dynasty: "Rajput", year: 1150, lat: 24.8890, lng: 74.6470, desc: "A 12th-century tower dedicated to the first Jain Tirthankara.", wiki: "https://en.wikipedia.org/wiki/Kirti_Stambha" },
    { id: 299, name: "Rana Kumbha Palace", country: "India", state: "Rajasthan", city: "Chittorgarh", dynasty: "Rajput", year: 1433, lat: 24.8850, lng: 74.6450, desc: "The ruined palace where Queen Padmini committed Jauhar.", wiki: "https://en.wikipedia.org/wiki/Chittorgarh_Fort" },
    { id: 300, name: "Meera Temple", country: "India", state: "Rajasthan", city: "Chittorgarh", dynasty: "Rajput", year: 1440, lat: 24.8860, lng: 74.6450, desc: "A temple associated with the mystic poetess Meera Bai.", wiki: "https://en.wikipedia.org/wiki/Meera_Temple" },
    { id: 301, name: "Kumbhalgarh Fort", country: "India", state: "Rajasthan", city: "Rajsamand", dynasty: "Rajput", year: 1458, lat: 25.1480, lng: 73.5880, desc: "A fortress featuring the second longest continuous wall in the world.", wiki: "https://en.wikipedia.org/wiki/Kumbhalgarh" },
    { id: 302, name: "Ranakpur Jain Temple", country: "India", state: "Rajasthan", city: "Pali", dynasty: "Rajput", year: 1437, lat: 25.1150, lng: 73.4710, desc: "A magnificent marble temple supported by 1,444 intricately carved pillars.", wiki: "https://en.wikipedia.org/wiki/Ranakpur_Jain_temple" },
    { id: 303, name: "Jaisalmer Fort", country: "India", state: "Rajasthan", city: "Jaisalmer", dynasty: "Rajput", year: 1156, lat: 26.9124, lng: 70.9123, desc: "A massive, living golden fort rising from the Thar Desert.", wiki: "https://en.wikipedia.org/wiki/Jaisalmer_Fort" },
    { id: 304, name: "Patwon Ki Haveli", country: "India", state: "Rajasthan", city: "Jaisalmer", dynasty: "Rajput", year: 1805, lat: 26.9150, lng: 70.9150, desc: "The largest and most elaborately carved haveli in Jaisalmer.", wiki: "https://en.wikipedia.org/wiki/Patwon_Ki_Haveli" },
    { id: 305, name: "Salim Singh Ki Haveli", country: "India", state: "Rajasthan", city: "Jaisalmer", dynasty: "Rajput", year: 1815, lat: 26.9140, lng: 70.9160, desc: "A distinct haveli featuring a peacock-shaped roof.", wiki: "https://en.wikipedia.org/wiki/Jaisalmer" },
    { id: 306, name: "Nathmal Ki Haveli", country: "India", state: "Rajasthan", city: "Jaisalmer", dynasty: "Rajput", year: 1885, lat: 26.9160, lng: 70.9140, desc: "A unique haveli built simultaneously by two architect brothers.", wiki: "https://en.wikipedia.org/wiki/Jaisalmer" },
    { id: 307, name: "Gadisar Lake Heritage Complex", country: "India", state: "Rajasthan", city: "Jaisalmer", dynasty: "Rajput", year: 1367, lat: 26.9060, lng: 70.9230, desc: "A historic artificial lake surrounded by temples and ghats.", wiki: "https://en.wikipedia.org/wiki/Gadisar_Lake" },
    { id: 308, name: "Mehrangarh Fort", country: "India", state: "Rajasthan", city: "Jodhpur", dynasty: "Rajput", year: 1459, lat: 26.2978, lng: 73.0186, desc: "A formidable fort towering 400 feet above the Blue City.", wiki: "https://en.wikipedia.org/wiki/Mehrangarh" },
    { id: 309, name: "Jaswant Thada", country: "India", state: "Rajasthan", city: "Jodhpur", dynasty: "Rajput", year: 1899, lat: 26.3040, lng: 73.0230, desc: "A beautifully carved white marble cenotaph.", wiki: "https://en.wikipedia.org/wiki/Jaswant_Thada" },
    { id: 310, name: "Umaid Bhawan Palace", country: "India", state: "Rajasthan", city: "Jodhpur", dynasty: "Rajput", year: 1943, lat: 26.2800, lng: 73.0460, desc: "One of the world's largest private residences.", wiki: "https://en.wikipedia.org/wiki/Umaid_Bhawan_Palace" },
    { id: 311, name: "Mandore Gardens", country: "India", state: "Rajasthan", city: "Jodhpur", dynasty: "Rajput", year: 600, lat: 26.3420, lng: 73.0330, desc: "The ancient capital of Marwar, housing historic royal cenotaphs.", wiki: "https://en.wikipedia.org/wiki/Mandore" },
    { id: 312, name: "Junagarh Fort", country: "India", state: "Rajasthan", city: "Bikaner", dynasty: "Rajput", year: 1589, lat: 28.0210, lng: 73.3180, desc: "An unassailable fort that was never conquered.", wiki: "https://en.wikipedia.org/wiki/Junagarh_Fort" },
    { id: 313, name: "Lalgarh Palace", country: "India", state: "Rajasthan", city: "Bikaner", dynasty: "Rajput", year: 1902, lat: 28.0350, lng: 73.3250, desc: "An imposing red sandstone palace built by Maharaja Ganga Singh.", wiki: "https://en.wikipedia.org/wiki/Lalgarh_Palace" },
    { id: 314, name: "Karni Mata Temple", country: "India", state: "Rajasthan", city: "Deshnoke", dynasty: "Rajput", year: 1900, lat: 27.7950, lng: 73.3400, desc: "The famous 'Rat Temple' of Rajasthan.", wiki: "https://en.wikipedia.org/wiki/Karni_Mata_Temple" },
    { id: 315, name: "Amber Fort", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1592, lat: 26.9855, lng: 75.8513, desc: "An opulent Rajput palace complex overlooking Maota Lake.", wiki: "https://en.wikipedia.org/wiki/Amer_Fort" },
    { id: 316, name: "Jaigarh Fort", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1726, lat: 26.9840, lng: 75.8460, desc: "A rugged fort housing the world's largest cannon on wheels.", wiki: "https://en.wikipedia.org/wiki/Jaigarh_Fort" },
    { id: 317, name: "Nahargarh Fort", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1734, lat: 26.9370, lng: 75.8150, desc: "A historic fort standing on the edge of the Aravalli Hills.", wiki: "https://en.wikipedia.org/wiki/Nahargarh_Fort" },
    { id: 318, name: "Hawa Mahal", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1799, lat: 26.9239, lng: 75.8267, desc: "The iconic five-story pink honeycomb 'Palace of Winds'.", wiki: "https://en.wikipedia.org/wiki/Hawa_Mahal" },
    { id: 319, name: "Jantar Mantar", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1734, lat: 26.9240, lng: 75.8240, desc: "A UNESCO site featuring the world's largest stone sundial.", wiki: "https://en.wikipedia.org/wiki/Jantar_Mantar,_Jaipur" },
    { id: 320, name: "Albert Hall Museum", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1887, lat: 26.9110, lng: 75.8190, desc: "The oldest museum of the state, showcasing Indo-Saracenic architecture.", wiki: "https://en.wikipedia.org/wiki/Albert_Hall_Museum" },
    { id: 321, name: "Jal Mahal", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1799, lat: 26.9530, lng: 75.8460, desc: "A serene palace sitting in the middle of the Man Sagar Lake.", wiki: "https://en.wikipedia.org/wiki/Jal_Mahal" },
    { id: 322, name: "Galtaji Temple Complex", country: "India", state: "Rajasthan", city: "Jaipur", dynasty: "Rajput", year: 1500, lat: 26.9170, lng: 75.8580, desc: "An ancient Hindu pilgrimage site centered around natural springs.", wiki: "https://en.wikipedia.org/wiki/Galtaji" },
    { id: 323, name: "Ranthambore Fort", country: "India", state: "Rajasthan", city: "Sawai Madhopur", dynasty: "Rajput", year: 944, lat: 26.0180, lng: 76.4550, desc: "A formidable fort nestled deep within the Ranthambore National Park.", wiki: "https://en.wikipedia.org/wiki/Ranthambore_Fort" },
    { id: 324, name: "Bundi Palace", country: "India", state: "Rajasthan", city: "Bundi", dynasty: "Rajput", year: 1600, lat: 25.4490, lng: 75.6350, desc: "A masterpiece of Rajput architecture known for its traditional murals.", wiki: "https://en.wikipedia.org/wiki/Bundi" },
    { id: 325, name: "Taragarh Fort", country: "India", state: "Rajasthan", city: "Bundi", dynasty: "Rajput", year: 1354, lat: 25.4520, lng: 75.6350, desc: "A highly defensive hillside fort overlooking the city.", wiki: "https://en.wikipedia.org/wiki/Taragarh_Fort,_Bundi" },
    { id: 326, name: "Garh Palace", country: "India", state: "Rajasthan", city: "Bundi", dynasty: "Rajput", year: 1600, lat: 25.4480, lng: 75.6350, desc: "A complex of palatial structures in Bundi.", wiki: "https://en.wikipedia.org/wiki/Bundi" },
    { id: 327, name: "Dholpur Palace", country: "India", state: "Rajasthan", city: "Dholpur", dynasty: "Rajput", year: 1800, lat: 26.7000, lng: 77.8800, desc: "A royal palace featuring red sandstone architecture.", wiki: "https://en.wikipedia.org/wiki/Dholpur" },
    { id: 328, name: "Lohagarh Palace Complex", country: "India", state: "Rajasthan", city: "Bharatpur", dynasty: "Rajput", year: 1732, lat: 27.2200, lng: 77.4900, desc: "The historic administrative palace within the Lohagarh Fort.", wiki: "https://en.wikipedia.org/wiki/Lohagarh_Fort" },
    { id: 329, name: "Deeg Palace", country: "India", state: "Rajasthan", city: "Deeg", dynasty: "Rajput", year: 1772, lat: 27.4720, lng: 77.3230, desc: "A luxurious summer resort of the rulers of Bharatpur.", wiki: "https://en.wikipedia.org/wiki/Deeg_Palace" },
    { id: 330, name: "Chand Baori", country: "India", state: "Rajasthan", city: "Abhaneri", dynasty: "Rajput", year: 800, lat: 27.0070, lng: 76.6060, desc: "One of the largest and most intricately carved stepwells in India.", wiki: "https://en.wikipedia.org/wiki/Chand_Baori" },
    { id: 331, name: "Harshat Mata Temple", country: "India", state: "Rajasthan", city: "Abhaneri", dynasty: "Rajput", year: 800, lat: 27.0075, lng: 76.6065, desc: "An ancient temple located right next to the Chand Baori stepwell.", wiki: "https://en.wikipedia.org/wiki/Harshat_Mata_Temple" },
    { id: 332, name: "Pushkar Brahma Temple", country: "India", state: "Rajasthan", city: "Pushkar", dynasty: "Rajput", year: 1300, lat: 26.4880, lng: 74.5510, desc: "One of the very few existing temples dedicated to the Hindu creator-god Brahma.", wiki: "https://en.wikipedia.org/wiki/Brahma_Temple,_Pushkar" },
    { id: 333, name: "City Palace Udaipur", country: "India", state: "Rajasthan", city: "Udaipur", dynasty: "Rajput", year: 1559, lat: 24.5760, lng: 73.6830, desc: "A monumental complex of 11 palaces built over 400 years.", wiki: "https://en.wikipedia.org/wiki/City_Palace,_Udaipur" },
    { id: 334, name: "Lake Palace", country: "India", state: "Rajasthan", city: "Udaipur", dynasty: "Rajput", year: 1746, lat: 24.5750, lng: 73.6790, desc: "A stunning white marble palace floating in Lake Pichola.", wiki: "https://en.wikipedia.org/wiki/Lake_Palace" },

    // MADHYA PRADESH
    { id: 335, name: "Sanchi Stupa", country: "India", state: "Madhya Pradesh", city: "Sanchi", dynasty: "Mauryan Empire", year: -250, lat: 23.4800, lng: 77.7390, desc: "One of the oldest and most important Buddhist monuments in India.", wiki: "https://en.wikipedia.org/wiki/Sanchi" },
    { id: 336, name: "Ashokan Pillar at Sanchi", country: "India", state: "Madhya Pradesh", city: "Sanchi", dynasty: "Mauryan Empire", year: -250, lat: 23.4805, lng: 77.7395, desc: "Fragments of an original Ashokan pillar located near the main stupa.", wiki: "https://en.wikipedia.org/wiki/Pillars_of_Ashoka" },
    { id: 337, name: "Udayagiri Caves", country: "India", state: "Madhya Pradesh", city: "Vidisha", dynasty: "Gupta Empire", year: 400, lat: 23.5320, lng: 77.7810, desc: "Ancient rock-cut caves featuring some of the oldest Hindu images.", wiki: "https://en.wikipedia.org/wiki/Udayagiri_Caves" },
    { id: 338, name: "Heliodorus Pillar", country: "India", state: "Madhya Pradesh", city: "Vidisha", dynasty: "Sunga Empire", year: -113, lat: 23.5350, lng: 77.8000, desc: "A stone column erected by the Greek ambassador Heliodorus.", wiki: "https://en.wikipedia.org/wiki/Heliodorus_pillar" },
    { id: 339, name: "Bhimbetka Rock Shelters", country: "India", state: "Madhya Pradesh", city: "Raisen", dynasty: "Prehistoric", year: -8000, lat: 22.9370, lng: 77.6140, desc: "A UNESCO site featuring prehistoric cave paintings.", wiki: "https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters" },
    { id: 340, name: "Bhojeshwar Temple", country: "India", state: "Madhya Pradesh", city: "Bhojpur", dynasty: "Paramara Dynasty", year: 1010, lat: 23.1010, lng: 77.5810, desc: "An incomplete Hindu temple housing a massive 7.5-foot lingam.", wiki: "https://en.wikipedia.org/wiki/Bhojeshwar_Temple" },
    { id: 341, name: "Bhojpur Fort", country: "India", state: "Madhya Pradesh", city: "Bhojpur", dynasty: "Paramara Dynasty", year: 1010, lat: 23.1020, lng: 77.5820, desc: "The ruins of the ancient fortress surrounding the Bhojeshwar Temple.", wiki: "https://en.wikipedia.org/wiki/Bhojpur,_Madhya_Pradesh" },
    { id: 342, name: "Khajuraho Group of Monuments", country: "India", state: "Madhya Pradesh", city: "Khajuraho", dynasty: "Chandela Dynasty", year: 950, lat: 24.8318, lng: 79.9230, desc: "World-famous temples celebrated for their nagara architecture and erotic sculptures.", wiki: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments" },
    { id: 343, name: "Kandariya Mahadeva Temple", country: "India", state: "Madhya Pradesh", city: "Khajuraho", dynasty: "Chandela Dynasty", year: 1030, lat: 24.8319, lng: 79.9231, desc: "The largest and most ornate Hindu temple in the Khajuraho group.", wiki: "https://en.wikipedia.org/wiki/Kandariya_Mahadeva_Temple" },
    { id: 344, name: "Lakshmana Temple", country: "India", state: "Madhya Pradesh", city: "Khajuraho", dynasty: "Chandela Dynasty", year: 954, lat: 24.8320, lng: 79.9220, desc: "One of the best-preserved and earliest temples of Khajuraho.", wiki: "https://en.wikipedia.org/wiki/Lakshmana_Temple,_Khajuraho" },
    { id: 345, name: "Chitragupta Temple", country: "India", state: "Madhya Pradesh", city: "Khajuraho", dynasty: "Chandela Dynasty", year: 1023, lat: 24.8330, lng: 79.9230, desc: "A temple dedicated to Surya, the Sun god.", wiki: "https://en.wikipedia.org/wiki/Chitragupta_temple,_Khajuraho" },
    { id: 346, name: "Vishvanatha Temple", country: "India", state: "Madhya Pradesh", city: "Khajuraho", dynasty: "Chandela Dynasty", year: 999, lat: 24.8325, lng: 79.9240, desc: "A beautifully sculpted temple dedicated to Lord Shiva.", wiki: "https://en.wikipedia.org/wiki/Vishvanatha_Temple,_Khajuraho" },
    { id: 347, name: "Duladeo Temple", country: "India", state: "Madhya Pradesh", city: "Khajuraho", dynasty: "Chandela Dynasty", year: 1100, lat: 24.8250, lng: 79.9320, desc: "A slightly later temple noted for its unique apsara carvings.", wiki: "https://en.wikipedia.org/wiki/Duladeo_Temple" },
    { id: 348, name: "Mithawali Chausath Yogini Temple", country: "India", state: "Madhya Pradesh", city: "Morena", dynasty: "Kachchhapaghata Dynasty", year: 1323, lat: 26.4330, lng: 78.1830, desc: "A circular temple that allegedly inspired the design of the Indian Parliament.", wiki: "https://en.wikipedia.org/wiki/Chausath_Yogini_Temple,_Mitaoli" },
    { id: 349, name: "Padavali Temple", country: "India", state: "Madhya Pradesh", city: "Morena", dynasty: "Kachchhapaghata Dynasty", year: 950, lat: 26.4250, lng: 78.1880, desc: "A fortress-like temple featuring intensely elaborate 3D stone carvings.", wiki: "https://en.wikipedia.org/wiki/Bateshwar_Hindu_temples,_Madhya_Pradesh" },
    { id: 350, name: "Bateshwar Temple Group", country: "India", state: "Madhya Pradesh", city: "Morena", dynasty: "Gurjara-Pratihara", year: 800, lat: 26.4270, lng: 78.1890, desc: "A cluster of almost 200 ancient Hindu temples.", wiki: "https://en.wikipedia.org/wiki/Bateshwar_Hindu_temples,_Madhya_Pradesh" },
    { id: 351, name: "Gwalior Fort", country: "India", state: "Madhya Pradesh", city: "Gwalior", dynasty: "Rajput", year: 1000, lat: 26.2290, lng: 78.1690, desc: "An impregnable hill fort referred to as the pearl amongst fortresses.", wiki: "https://en.wikipedia.org/wiki/Gwalior_Fort" },
    { id: 352, name: "Man Singh Palace", country: "India", state: "Madhya Pradesh", city: "Gwalior", dynasty: "Tomar Dynasty", year: 1486, lat: 26.2300, lng: 78.1680, desc: "A beautifully painted palace inside the Gwalior Fort.", wiki: "https://en.wikipedia.org/wiki/Man_Singh_Tomar" },
    { id: 353, name: "Teli ka Mandir", country: "India", state: "Madhya Pradesh", city: "Gwalior", dynasty: "Gurjara-Pratihara", year: 800, lat: 26.2270, lng: 78.1650, desc: "The tallest building inside the Gwalior fort, featuring a unique vaulted roof.", wiki: "https://en.wikipedia.org/wiki/Teli_ka_Mandir" },
    { id: 354, name: "Sas-Bahu Temples", country: "India", state: "Madhya Pradesh", city: "Gwalior", dynasty: "Kachchhapaghata Dynasty", year: 1092, lat: 26.2280, lng: 78.1680, desc: "Twin intricately carved temples dedicated to Lord Vishnu.", wiki: "https://en.wikipedia.org/wiki/Sasbahu_Temple,_Gwalior" },
    { id: 355, name: "Gujari Mahal", country: "India", state: "Madhya Pradesh", city: "Gwalior", dynasty: "Tomar Dynasty", year: 1450, lat: 26.2320, lng: 78.1700, desc: "A palace built by Man Singh for his queen, now an archaeological museum.", wiki: "https://en.wikipedia.org/wiki/Gujari_Mahal" },
    { id: 356, name: "Orchha Fort Complex", country: "India", state: "Madhya Pradesh", city: "Orchha", dynasty: "Bundela Rajput", year: 1501, lat: 25.3510, lng: 78.6440, desc: "A massive fort complex situated on an island in the Betwa River.", wiki: "https://en.wikipedia.org/wiki/Orchha_Fort_complex" },
    { id: 357, name: "Jahangir Mahal", country: "India", state: "Madhya Pradesh", city: "Orchha", dynasty: "Bundela Rajput", year: 1605, lat: 25.3520, lng: 78.6450, desc: "A grand palace built exclusively to host Emperor Jahangir for one night.", wiki: "https://en.wikipedia.org/wiki/Jahangir_Mahal,_Orchha" },
    { id: 358, name: "Raja Mahal", country: "India", state: "Madhya Pradesh", city: "Orchha", dynasty: "Bundela Rajput", year: 1531, lat: 25.3500, lng: 78.6430, desc: "The former residence of the kings of Orchha, filled with ancient murals.", wiki: "https://en.wikipedia.org/wiki/Orchha_Fort_complex" },
    { id: 359, name: "Chaturbhuj Temple", country: "India", state: "Madhya Pradesh", city: "Orchha", dynasty: "Bundela Rajput", year: 1558, lat: 25.3505, lng: 78.6420, desc: "A towering temple featuring a mix of temple, fort, and palace architecture.", wiki: "https://en.wikipedia.org/wiki/Chaturbhuj_Temple,_Orchha" },
    { id: 360, name: "Ram Raja Temple", country: "India", state: "Madhya Pradesh", city: "Orchha", dynasty: "Bundela Rajput", year: 1550, lat: 25.3500, lng: 78.6420, desc: "A unique temple where Lord Rama is worshipped as a king rather than a deity.", wiki: "https://en.wikipedia.org/wiki/Ram_Raja_Temple" },
    { id: 361, name: "Datia Palace", country: "India", state: "Madhya Pradesh", city: "Datia", dynasty: "Bundela Rajput", year: 1614, lat: 25.6660, lng: 78.4610, desc: "A stunning 7-story palace built entirely of stone and brick with no wood.", wiki: "https://en.wikipedia.org/wiki/Datia_Palace" },
    { id: 362, name: "Mandu Fort Complex", country: "India", state: "Madhya Pradesh", city: "Dhar", dynasty: "Malwa Sultanate", year: 1000, lat: 22.3420, lng: 75.3940, desc: "A massive ruined fortress city celebrated for its Afghan architecture.", wiki: "https://en.wikipedia.org/wiki/Mandu,_Madhya_Pradesh" },
    { id: 363, name: "Jahaz Mahal", country: "India", state: "Madhya Pradesh", city: "Dhar", dynasty: "Malwa Sultanate", year: 1450, lat: 22.3450, lng: 75.3950, desc: "The 'Ship Palace' built between two artificial lakes.", wiki: "https://en.wikipedia.org/wiki/Jahaz_Mahal" },
    { id: 364, name: "Hindola Mahal", country: "India", state: "Madhya Pradesh", city: "Dhar", dynasty: "Malwa Sultanate", year: 1425, lat: 22.3460, lng: 75.3960, desc: "The 'Swinging Palace' known for its highly sloping sidewalls.", wiki: "https://en.wikipedia.org/wiki/Hindola_Mahal" },
    { id: 365, name: "Hoshang Shah's Tomb", country: "India", state: "Madhya Pradesh", city: "Dhar", dynasty: "Malwa Sultanate", year: 1440, lat: 22.3410, lng: 75.3900, desc: "India's first marble tomb, which served as a template for the Taj Mahal.", wiki: "https://en.wikipedia.org/wiki/Hoshang_Shah_Tomb" },
    { id: 366, name: "Rani Roopmati Pavilion", country: "India", state: "Madhya Pradesh", city: "Dhar", dynasty: "Malwa Sultanate", year: 1550, lat: 22.3250, lng: 75.3960, desc: "A romantic pavilion offering sweeping views of the Narmada valley.", wiki: "https://en.wikipedia.org/wiki/Mandu,_Madhya_Pradesh" },
    { id: 367, name: "Bawangaja Jain Monument", country: "India", state: "Madhya Pradesh", city: "Barwani", dynasty: "Jain Heritage", year: 1100, lat: 21.9960, lng: 74.8870, desc: "A famous Jain pilgrimage center featuring a massive megalithic statue.", wiki: "https://en.wikipedia.org/wiki/Bawangaja" },
    { id: 368, name: "Burhanpur Fort", country: "India", state: "Madhya Pradesh", city: "Burhanpur", dynasty: "Faruqi Dynasty", year: 1400, lat: 21.3110, lng: 76.2230, desc: "A historic fort on the banks of the Tapti River.", wiki: "https://en.wikipedia.org/wiki/Burhanpur" },
    { id: 369, name: "Asirgarh Fort", country: "India", state: "Madhya Pradesh", city: "Burhanpur", dynasty: "Faruqi Dynasty", year: 1400, lat: 21.4700, lng: 76.2900, desc: "Often called the 'Key to the Deccan', a fort controlling passage to South India.", wiki: "https://en.wikipedia.org/wiki/Asirgarh_Fort" },
    { id: 370, name: "Shahi Qila", country: "India", state: "Madhya Pradesh", city: "Burhanpur", dynasty: "Faruqi Dynasty", year: 1450, lat: 21.3120, lng: 76.2250, desc: "A majestic palace in Burhanpur known for its exquisite hammam.", wiki: "https://en.wikipedia.org/wiki/Burhanpur" },
    { id: 371, name: "Chanderi Fort", country: "India", state: "Madhya Pradesh", city: "Chanderi", dynasty: "Rajput", year: 1050, lat: 24.7170, lng: 78.1360, desc: "A sprawling fort situated on a steep hill overlooking Chanderi town.", wiki: "https://en.wikipedia.org/wiki/Chanderi" },

    // GUJARAT
    { id: 372, name: "Dholavira Archaeological Site", country: "India", state: "Gujarat", city: "Kutch", dynasty: "Harappan Civilization", year: -2650, lat: 23.8810, lng: 70.2130, desc: "An incredibly sophisticated ancient Indus Valley city.", wiki: "https://en.wikipedia.org/wiki/Dholavira" },
    { id: 373, name: "Lothal Archaeological Site", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Harappan Civilization", year: -2400, lat: 22.5230, lng: 72.2490, desc: "The site of the world's earliest known ancient dockyard.", wiki: "https://en.wikipedia.org/wiki/Lothal" },
    { id: 374, name: "Modhera Sun Temple", country: "India", state: "Gujarat", city: "Modhera", dynasty: "Chaulukya Dynasty", year: 1026, lat: 23.5830, lng: 71.9950, desc: "A stunning Hindu temple dedicated to the solar deity Surya.", wiki: "https://en.wikipedia.org/wiki/Sun_Temple,_Modhera" },
    { id: 375, name: "Rani ki Vav", country: "India", state: "Gujarat", city: "Patan", dynasty: "Chaulukya Dynasty", year: 1060, lat: 23.8580, lng: 72.1010, desc: "An incredibly ornate inverted temple functioning as a stepwell.", wiki: "https://en.wikipedia.org/wiki/Rani_ki_vav" },
    { id: 376, name: "Sahastralinga Talav", country: "India", state: "Gujarat", city: "Patan", dynasty: "Chaulukya Dynasty", year: 1084, lat: 23.8520, lng: 72.1000, desc: "A medieval artificial water tank decorated with a thousand Shiva lingas.", wiki: "https://en.wikipedia.org/wiki/Sahasralinga_Tank" },
    { id: 377, name: "Patan Fort Remains", country: "India", state: "Gujarat", city: "Patan", dynasty: "Chaulukya Dynasty", year: 1000, lat: 23.8450, lng: 72.1150, desc: "The remaining ruins of the ancient capital of Gujarat.", wiki: "https://en.wikipedia.org/wiki/Patan,_Gujarat" },
    { id: 378, name: "Adalaj Stepwell", country: "India", state: "Gujarat", city: "Adalaj", dynasty: "Vaghela Dynasty", year: 1498, lat: 23.1660, lng: 72.5800, desc: "A beautiful five-story deep stepwell integrating Hindu and Islamic architecture.", wiki: "https://en.wikipedia.org/wiki/Adalaj_Stepwell" },
    { id: 379, name: "Rudabai Stepwell", country: "India", state: "Gujarat", city: "Adalaj", dynasty: "Vaghela Dynasty", year: 1498, lat: 23.1661, lng: 72.5801, desc: "The alternate historical name for the Adalaj Stepwell.", wiki: "https://en.wikipedia.org/wiki/Adalaj_Stepwell" },
    { id: 380, name: "Sarkhej Roza", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1445, lat: 22.9810, lng: 72.5060, desc: "A sprawling mosque and tomb complex often called 'Ahmedabad's Acropolis'.", wiki: "https://en.wikipedia.org/wiki/Sarkhej_Roza" },
    { id: 381, name: "Bhadra Fort", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1411, lat: 23.0240, lng: 72.5810, desc: "The historic fort marking the center of the walled city of Ahmedabad.", wiki: "https://en.wikipedia.org/wiki/Bhadra_Fort" },
    { id: 382, name: "Teen Darwaza", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1415, lat: 23.0250, lng: 72.5830, desc: "A historical three-arched gateway leading to the Bhadra Fort.", wiki: "https://en.wikipedia.org/wiki/Teen_Darwaza" },
    { id: 383, name: "Sidi Saiyyed Mosque", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1573, lat: 23.0270, lng: 72.5810, desc: "World famous for its exquisitely carved stone latticework windows (jalis).", wiki: "https://en.wikipedia.org/wiki/Sidi_Saiyyed_Mosque" },
    { id: 384, name: "Jama Masjid Ahmedabad", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1424, lat: 23.0230, lng: 72.5860, desc: "One of the largest mosques in India at the time of its construction.", wiki: "https://en.wikipedia.org/wiki/Jama_Mosque,_Ahmedabad" },
    { id: 385, name: "Jhulta Minara", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1452, lat: 23.0250, lng: 72.6000, desc: "The mysterious 'Shaking Minarets' of the Sidi Bashir Mosque.", wiki: "https://en.wikipedia.org/wiki/Sidi_Bashir_Mosque" },
    { id: 386, name: "Sabarmati Ashram", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "British Raj", year: 1917, lat: 23.0600, lng: 72.5800, desc: "The historic residence of Mahatma Gandhi and center of the freedom struggle.", wiki: "https://en.wikipedia.org/wiki/Sabarmati_Ashram" },
    { id: 387, name: "Calico Heritage Precinct", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Modern", year: 1949, lat: 23.0400, lng: 72.5850, desc: "A historic textile museum showcasing Indian fabrics and weaving heritage.", wiki: "https://en.wikipedia.org/wiki/Calico_Museum_of_Textiles" },
    { id: 388, name: "Champaner-Pavagadh Park", country: "India", state: "Gujarat", city: "Panchmahal", dynasty: "Gujarat Sultanate", year: 1484, lat: 22.4820, lng: 73.5320, desc: "A UNESCO archaeological park featuring an unexcavated Islamic pre-Mughal city.", wiki: "https://en.wikipedia.org/wiki/Champaner-Pavagadh_Archaeological_Park" },
    { id: 389, name: "Jami Masjid Champaner", country: "India", state: "Gujarat", city: "Champaner", dynasty: "Gujarat Sultanate", year: 1513, lat: 22.4810, lng: 73.5330, desc: "A majestic mosque featuring 172 pillars and intricate minarets.", wiki: "https://en.wikipedia.org/wiki/Jama_Mosque,_Champaner" },
    { id: 390, name: "Kevada Mosque", country: "India", state: "Gujarat", city: "Champaner", dynasty: "Gujarat Sultanate", year: 1484, lat: 22.4800, lng: 73.5350, desc: "A 15th-century mosque offering nature integration within its architecture.", wiki: "https://en.wikipedia.org/wiki/Kevada_Mosque" },
    { id: 391, name: "Nagina Mosque", country: "India", state: "Gujarat", city: "Champaner", dynasty: "Gujarat Sultanate", year: 1484, lat: 22.4830, lng: 73.5360, desc: "The 'Jewel Mosque' known for its pure white stone construction.", wiki: "https://en.wikipedia.org/wiki/Nagina_Mosque" },
    { id: 392, name: "Pavagadh Kalika Mata Temple", country: "India", state: "Gujarat", city: "Pavagadh", dynasty: "Hindu Religious Heritage", year: 1000, lat: 22.4630, lng: 73.5230, desc: "An ancient temple sitting atop the dramatic Pavagadh Hill.", wiki: "https://en.wikipedia.org/wiki/Kalika_Mata_Temple,_Pavagadh" },
    { id: 393, name: "Lakhpat Fort", country: "India", state: "Gujarat", city: "Kutch", dynasty: "Jadeja Rajput", year: 1801, lat: 23.8290, lng: 68.7750, desc: "A large ruined fort marking a once-prosperous port town that lost its river.", wiki: "https://en.wikipedia.org/wiki/Lakhpat" },
    { id: 394, name: "Bala Hanuman Temple", country: "India", state: "Gujarat", city: "Jamnagar", dynasty: "Hindu Religious Heritage", year: 1964, lat: 22.4660, lng: 70.0710, desc: "Listed in the Guinness Book for continuous chanting since 1964.", wiki: "https://en.wikipedia.org/wiki/Jamnagar" },
    { id: 395, name: "Aina Mahal", country: "India", state: "Gujarat", city: "Bhuj", dynasty: "Jadeja Rajput", year: 1741, lat: 23.2550, lng: 69.6670, desc: "An 18th-century palace boasting stunning interiors of mirror work.", wiki: "https://en.wikipedia.org/wiki/Aina_Mahal" },
    { id: 396, name: "Prag Mahal", country: "India", state: "Gujarat", city: "Bhuj", dynasty: "Jadeja Rajput", year: 1865, lat: 23.2540, lng: 69.6680, desc: "A 19th-century palace built in a distinct Italian Gothic style.", wiki: "https://en.wikipedia.org/wiki/Prag_Mahal" },
    { id: 397, name: "Mata no Madh Temple", country: "India", state: "Gujarat", city: "Kutch", dynasty: "Hindu Religious Heritage", year: 1300, lat: 23.5410, lng: 68.9510, desc: "A major temple dedicated to Ashapura Mata.", wiki: "https://en.wikipedia.org/wiki/Mata_no_Madh" },
    { id: 398, name: "Somnath Temple", country: "India", state: "Gujarat", city: "Prabhas Patan", dynasty: "Post-Independence India", year: 1951, lat: 20.8880, lng: 70.4010, desc: "The first among the twelve Jyotirlinga shrines of Lord Shiva.", wiki: "https://en.wikipedia.org/wiki/Somnath_temple" },
    { id: 399, name: "Dwarkadhish Temple", country: "India", state: "Gujarat", city: "Dwarka", dynasty: "Hindu Religious Heritage", year: 1500, lat: 22.2370, lng: 68.9670, desc: "A highly sacred Hindu temple dedicated to Lord Krishna.", wiki: "https://en.wikipedia.org/wiki/Dwarkadhish_Temple" },
    { id: 400, name: "Kirti Mandir", country: "India", state: "Gujarat", city: "Porbandar", dynasty: "Post-Independence India", year: 1944, lat: 21.6420, lng: 69.6010, desc: "A memorial temple built in honor of Mahatma Gandhi.", wiki: "https://en.wikipedia.org/wiki/Kirti_Mandir,_Porbandar" },
    { id: 401, name: "Junagadh Uparkot Fort", country: "India", state: "Gujarat", city: "Junagadh", dynasty: "Mauryan Empire", year: -319, lat: 21.5240, lng: 70.4630, desc: "An ancient hilltop fort holding historical stepwells and Buddhist caves.", wiki: "https://en.wikipedia.org/wiki/Uparkot_Fort" },
    { id: 402, name: "Mahabat Maqbara", country: "India", state: "Gujarat", city: "Junagadh", dynasty: "Nawab of Junagadh", year: 1892, lat: 21.5200, lng: 70.4600, desc: "An incredibly ornate mausoleum blending Gothic and Islamic architecture.", wiki: "https://en.wikipedia.org/wiki/Mahabat_Maqbara" },
    { id: 403, name: "Ashokan Rock Edicts", country: "India", state: "Gujarat", city: "Junagadh", dynasty: "Mauryan Empire", year: -250, lat: 21.5210, lng: 70.4650, desc: "A massive boulder engraved with the 14 edicts of Ashoka.", wiki: "https://en.wikipedia.org/wiki/Edicts_of_Ashoka" },
    { id: 404, name: "Sidi Bashir Mosque", country: "India", state: "Gujarat", city: "Ahmedabad", dynasty: "Gujarat Sultanate", year: 1452, lat: 23.0250, lng: 72.6000, desc: "Famous for its shaking minarets.", wiki: "https://en.wikipedia.org/wiki/Sidi_Bashir_Mosque" },
    { id: 405, name: "Sun Temple Modhera Stepwell", country: "India", state: "Gujarat", city: "Modhera", dynasty: "Chaulukya Dynasty", year: 1026, lat: 23.5835, lng: 71.9955, desc: "A massive rectangular stepwell known as Surya Kund in front of the Sun Temple.", wiki: "https://en.wikipedia.org/wiki/Sun_Temple,_Modhera" },

    // MAHARASHTRA
    { id: 406, name: "Ajanta Caves", country: "India", state: "Maharashtra", city: "Chhatrapati Sambhajinagar", dynasty: "Vakataka", year: -200, lat: 20.5510, lng: 75.7030, desc: "World famous rock-cut Buddhist caves featuring masterful ancient paintings.", wiki: "https://en.wikipedia.org/wiki/Ajanta_Caves" },
    { id: 407, name: "Ellora Caves", country: "India", state: "Maharashtra", city: "Chhatrapati Sambhajinagar", dynasty: "Rashtrakuta", year: 600, lat: 20.0250, lng: 75.1780, desc: "A monolithic rock-cut temple complex covering Hindu, Buddhist, and Jain monuments.", wiki: "https://en.wikipedia.org/wiki/Ellora_Caves" },
    { id: 408, name: "Elephanta Caves", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "Kalachuri", year: 500, lat: 18.9630, lng: 72.9310, desc: "A network of sculpted caves located on an island off Mumbai.", wiki: "https://en.wikipedia.org/wiki/Elephanta_Caves" },
    { id: 409, name: "Kanheri Caves", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "Buddhist", year: -100, lat: 19.2080, lng: 72.9060, desc: "Over 100 Buddhist caves carved into the basalt hills of Borivali.", wiki: "https://en.wikipedia.org/wiki/Kanheri_Caves" },
    { id: 410, name: "Karla Caves", country: "India", state: "Maharashtra", city: "Lonavala", dynasty: "Satavahana", year: -200, lat: 18.7830, lng: 73.4720, desc: "A complex of ancient Buddhist Indian rock-cut caves.", wiki: "https://en.wikipedia.org/wiki/Karla_Caves" },
    { id: 411, name: "Bhaja Caves", country: "India", state: "Maharashtra", city: "Lonavala", dynasty: "Satavahana", year: -200, lat: 18.7300, lng: 73.4810, desc: "A group of 22 rock-cut caves dating back to the 2nd century BC.", wiki: "https://en.wikipedia.org/wiki/Bhaja_Caves" },
    { id: 412, name: "Bedse Caves", country: "India", state: "Maharashtra", city: "Maval", dynasty: "Satavahana", year: -100, lat: 18.7210, lng: 73.5350, desc: "Ancient Buddhist caves known for their beautifully carved pillars.", wiki: "https://en.wikipedia.org/wiki/Bedse_Caves" },
    { id: 413, name: "Pandavleni Caves", country: "India", state: "Maharashtra", city: "Nashik", dynasty: "Satavahana", year: -300, lat: 19.9670, lng: 73.7480, desc: "A group of 24 caves carved representing Hinayana Buddhism.", wiki: "https://en.wikipedia.org/wiki/Pandavleni_Caves" },
    { id: 414, name: "Aurangabad Caves", country: "India", state: "Maharashtra", city: "Chhatrapati Sambhajinagar", dynasty: "Vakataka", year: 600, lat: 19.9070, lng: 75.3120, desc: "Twelve rock-cut Buddhist shrines located on a hill.", wiki: "https://en.wikipedia.org/wiki/Aurangabad_Caves" },
    { id: 415, name: "Daulatabad (Devagiri) Fort", country: "India", state: "Maharashtra", city: "Daulatabad", dynasty: "Yadava Dynasty", year: 1187, lat: 19.9440, lng: 75.2130, desc: "A dramatically located, impregnable hill fortress.", wiki: "https://en.wikipedia.org/wiki/Daulatabad_Fort" },
    { id: 416, name: "Bibi Ka Maqbara", country: "India", state: "Maharashtra", city: "Chhatrapati Sambhajinagar", dynasty: "Mughal Empire", year: 1660, lat: 19.9010, lng: 75.3200, desc: "A tomb built by Aurangzeb's son, bearing a strong resemblance to the Taj Mahal.", wiki: "https://en.wikipedia.org/wiki/Bibi_Ka_Maqbara" },
    { id: 417, name: "Panchakki", country: "India", state: "Maharashtra", city: "Chhatrapati Sambhajinagar", dynasty: "Mughal Empire", year: 1695, lat: 19.8920, lng: 75.3160, desc: "A medieval water mill displaying advanced fluid engineering.", wiki: "https://en.wikipedia.org/wiki/Panchakki" },
    { id: 418, name: "Ghrishneshwar Temple", country: "India", state: "Maharashtra", city: "Verul", dynasty: "Maratha Empire", year: 1750, lat: 20.0240, lng: 75.1700, desc: "A major Shiva temple representing one of the 12 Jyotirlingas.", wiki: "https://en.wikipedia.org/wiki/Grishneshwar_Temple" },
    { id: 419, name: "Shaniwar Wada", country: "India", state: "Maharashtra", city: "Pune", dynasty: "Maratha Empire", year: 1732, lat: 18.5190, lng: 73.8550, desc: "The historic fortification and seat of the Peshwas of the Maratha Empire.", wiki: "https://en.wikipedia.org/wiki/Shaniwar_Wada" },
    { id: 420, name: "Aga Khan Palace", country: "India", state: "Maharashtra", city: "Pune", dynasty: "British Raj", year: 1892, lat: 18.5520, lng: 73.9010, desc: "A palace holding immense historical significance in India's freedom struggle.", wiki: "https://en.wikipedia.org/wiki/Aga_Khan_Palace" },
    { id: 421, name: "Lal Mahal", country: "India", state: "Maharashtra", city: "Pune", dynasty: "Maratha Empire", year: 1630, lat: 18.5200, lng: 73.8560, desc: "A reconstructed palace linked to the childhood of Chhatrapati Shivaji Maharaj.", wiki: "https://en.wikipedia.org/wiki/Lal_Mahal" },
    { id: 422, name: "Pataleshwar Cave Temple", country: "India", state: "Maharashtra", city: "Pune", dynasty: "Rashtrakuta", year: 700, lat: 18.5270, lng: 73.8470, desc: "An 8th-century rock-cut temple carved out of a single basalt rock.", wiki: "https://en.wikipedia.org/wiki/Pataleshwar,_Pune" },
    { id: 423, name: "Sinhagad Fort", country: "India", state: "Maharashtra", city: "Pune", dynasty: "Maratha Empire", year: 1350, lat: 18.3660, lng: 73.7550, desc: "The 'Lion Fort' known for its steep slopes and historical battles.", wiki: "https://en.wikipedia.org/wiki/Sinhagad" },
    { id: 424, name: "Shivneri Fort", country: "India", state: "Maharashtra", city: "Junnar", dynasty: "Maratha Empire", year: 1600, lat: 19.1960, lng: 73.8740, desc: "A historic military fortification and the birthplace of Shivaji Maharaj.", wiki: "https://en.wikipedia.org/wiki/Shivneri" },
    { id: 425, name: "Pratapgad Fort", country: "India", state: "Maharashtra", city: "Satara", dynasty: "Maratha Empire", year: 1656, lat: 17.9260, lng: 73.5750, desc: "A mountain fort famous for the Battle of Pratapgad.", wiki: "https://en.wikipedia.org/wiki/Pratapgad" },
    { id: 426, name: "Raigad Fort", country: "India", state: "Maharashtra", city: "Raigad", dynasty: "Maratha Empire", year: 1030, lat: 18.2340, lng: 73.4460, desc: "The capital of the Maratha Empire under Shivaji Maharaj.", wiki: "https://en.wikipedia.org/wiki/Raigad_Fort" },
    { id: 427, name: "Rajgad Fort", country: "India", state: "Maharashtra", city: "Pune", dynasty: "Maratha Empire", year: 1400, lat: 18.2460, lng: 73.6820, desc: "An almost unconquerable fort that served as the capital of the Marathas for 26 years.", wiki: "https://en.wikipedia.org/wiki/Rajgad_Fort" },
    { id: 428, name: "Torna Fort", country: "India", state: "Maharashtra", city: "Pune", dynasty: "Maratha Empire", year: 1200, lat: 18.2750, lng: 73.6220, desc: "The first fort captured by Shivaji Maharaj at age 16.", wiki: "https://en.wikipedia.org/wiki/Torna_Fort" },
    { id: 429, name: "Lohagad Fort", country: "India", state: "Maharashtra", city: "Lonavala", dynasty: "Maratha Empire", year: 1400, lat: 18.7060, lng: 73.4800, desc: "The 'Iron Fort' connected to the neighboring Visapur fort.", wiki: "https://en.wikipedia.org/wiki/Lohagad" },
    { id: 430, name: "Visapur Fort", country: "India", state: "Maharashtra", city: "Lonavala", dynasty: "Maratha Empire", year: 1720, lat: 18.7160, lng: 73.4910, desc: "A hill fort known for its large plateau and twin relationship with Lohagad.", wiki: "https://en.wikipedia.org/wiki/Visapur_Fort" },
    { id: 431, name: "Panhala Fort", country: "India", state: "Maharashtra", city: "Kolhapur", dynasty: "Shilahara Dynasty", year: 1100, lat: 16.8110, lng: 74.1080, desc: "One of the largest forts in the Deccan built strategically to oversee trade routes.", wiki: "https://en.wikipedia.org/wiki/Panhala_Fort" },
    { id: 432, name: "Vijaydurg Fort", country: "India", state: "Maharashtra", city: "Sindhudurg", dynasty: "Shilahara Dynasty", year: 1205, lat: 16.5590, lng: 73.3320, desc: "The oldest fort on the Sindhudurg coast, surrounded by sea on three sides.", wiki: "https://en.wikipedia.org/wiki/Vijaydurg_Fort" },
    { id: 433, name: "Sindhudurg Fort", country: "India", state: "Maharashtra", city: "Malvan", dynasty: "Maratha Empire", year: 1664, lat: 16.0450, lng: 73.4560, desc: "A massive naval fort built by Shivaji Maharaj on an island.", wiki: "https://en.wikipedia.org/wiki/Sindhudurg_Fort" },
    { id: 434, name: "Murud-Janjira Fort", country: "India", state: "Maharashtra", city: "Murud", dynasty: "Siddi Sultanate", year: 1400, lat: 18.3010, lng: 72.9640, desc: "An invincible sea fort that remained uncaptured throughout its history.", wiki: "https://en.wikipedia.org/wiki/Murud-Janjira" },
    { id: 435, name: "Suvarnadurg Fort", country: "India", state: "Maharashtra", city: "Harnai", dynasty: "Maratha Empire", year: 1500, lat: 17.8130, lng: 73.0880, desc: "The 'Golden Fort' situated on an island in the Arabian Sea.", wiki: "https://en.wikipedia.org/wiki/Suvarnadurg" },
    { id: 436, name: "Bassein Fort", country: "India", state: "Maharashtra", city: "Vasai", dynasty: "Portuguese", year: 1532, lat: 19.3300, lng: 72.8150, desc: "The ruined historic fort of the Portuguese northern province.", wiki: "https://en.wikipedia.org/wiki/Fort_Bassein" },
    { id: 437, name: "Chhatrapati Shivaji Maharaj Terminus", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "British Raj", year: 1887, lat: 18.9400, lng: 72.8350, desc: "A historic, UNESCO-listed Victorian Gothic railway terminus.", wiki: "https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Terminus" },
    { id: 438, name: "Gateway of India", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "British Raj", year: 1924, lat: 18.9220, lng: 72.8340, desc: "An iconic arch-monument built to commemorate the landing of King George V.", wiki: "https://en.wikipedia.org/wiki/Gateway_of_India" },
    { id: 439, name: "Elephanta Island Monuments", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "Kalachuri", year: 500, lat: 18.9631, lng: 72.9311, desc: "A UNESCO site covering the entire scope of the cave-temple island.", wiki: "https://en.wikipedia.org/wiki/Elephanta_Caves" },
    { id: 440, name: "Dr Bhau Daji Lad Museum", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "British Raj", year: 1872, lat: 18.9790, lng: 72.8340, desc: "The oldest museum in Mumbai featuring exquisite Victorian interiors.", wiki: "https://en.wikipedia.org/wiki/Dr._Bhau_Daji_Lad_Museum" },
    { id: 441, name: "Prince of Wales Museum", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "British Raj", year: 1922, lat: 18.9260, lng: 72.8320, desc: "Now the CSMVS, an iconic museum of history and art.", wiki: "https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya" },
    { id: 442, name: "Global Vipassana Pagoda", country: "India", state: "Maharashtra", city: "Mumbai", dynasty: "Modern Buddhist", year: 2008, lat: 19.2280, lng: 72.8060, desc: "A massive, modern monument of peace featuring the world's largest stone dome built without pillars.", wiki: "https://en.wikipedia.org/wiki/Global_Vipassana_Pagoda" },
    { id: 443, name: "Deekshabhoomi", country: "India", state: "Maharashtra", city: "Nagpur", dynasty: "Modern Buddhist", year: 2001, lat: 21.1270, lng: 79.0660, desc: "A sacred monument marking the spot where Dr. B.R. Ambedkar embraced Buddhism.", wiki: "https://en.wikipedia.org/wiki/Deekshabhoomi" },
    { id: 444, name: "Ramtek Temple Complex", country: "India", state: "Maharashtra", city: "Ramtek", dynasty: "Vakataka", year: 400, lat: 21.4000, lng: 79.3270, desc: "An ancient hilltop temple complex associated with Lord Rama.", wiki: "https://en.wikipedia.org/wiki/Ramtek" },
    { id: 445, name: "Lonar Crater Lake", country: "India", state: "Maharashtra", city: "Buldhana", dynasty: "Natural / Ancient", year: -50000, lat: 19.9760, lng: 76.5060, desc: "A national geo-heritage monument formed by a meteorite, surrounded by ancient temples.", wiki: "https://en.wikipedia.org/wiki/Lonar_Lake" },

    // GOA
    { id: 446, name: "Basilica of Bom Jesus", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1605, lat: 15.5000, lng: 73.9110, desc: "A UNESCO World Heritage site holding the mortal remains of St. Francis Xavier.", wiki: "https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus" },
    { id: 447, name: "Se Cathedral", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1619, lat: 15.5030, lng: 73.9110, desc: "One of the largest churches in Asia, dedicated to Catherine of Alexandria.", wiki: "https://en.wikipedia.org/wiki/S%C3%A9_Catedral_de_Santa_Catarina" },
    { id: 448, name: "Church of St Francis of Assisi", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1661, lat: 15.5035, lng: 73.9115, desc: "A beautiful church featuring a blend of Tuscan, Manueline, and Baroque architecture.", wiki: "https://en.wikipedia.org/wiki/Church_and_Convent_of_St._Francis_of_Assisi" },
    { id: 449, name: "Church of St Cajetan", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1661, lat: 15.5040, lng: 73.9150, desc: "Modeled after St. Peter's Basilica in Rome.", wiki: "https://en.wikipedia.org/wiki/Church_of_St._Cajetan,_Goa" },
    { id: 450, name: "Church of Our Lady of the Rosary", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1543, lat: 15.5020, lng: 73.9060, desc: "One of the oldest preserved buildings in Old Goa.", wiki: "https://en.wikipedia.org/wiki/Church_of_Our_Lady_of_the_Rosary,_Goa" },
    { id: 451, name: "Church of St Augustine Ruins", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1602, lat: 15.4980, lng: 73.9070, desc: "The dramatic ruins of a once massive Augustinian church.", wiki: "https://en.wikipedia.org/wiki/Church_of_St._Augustine,_Goa" },
    { id: 452, name: "Archaeological Museum & Gallery", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1964, lat: 15.5036, lng: 73.9116, desc: "A museum housed in the former convent of St. Francis of Assisi.", wiki: "https://en.wikipedia.org/wiki/Archaeological_Museum_of_Goa" },
    { id: 453, name: "Viceroy's Arch", country: "India", state: "Goa", city: "Old Goa", dynasty: "Portuguese", year: 1599, lat: 15.5050, lng: 73.9130, desc: "The historic archway leading into the city of Old Goa from the river.", wiki: "https://en.wikipedia.org/wiki/Old_Goa" },
    { id: 454, name: "Adil Shah Palace Gateway", country: "India", state: "Goa", city: "Panaji", dynasty: "Bijapur Sultanate", year: 1500, lat: 15.4980, lng: 73.8270, desc: "The surviving basalt gateway of the summer palace of Yusuf Adil Shah.", wiki: "https://en.wikipedia.org/wiki/Panaji" },
    { id: 455, name: "Reis Magos Fort", country: "India", state: "Goa", city: "Reis Magos", dynasty: "Portuguese", year: 1551, lat: 15.4990, lng: 73.8110, desc: "A restored Portuguese fort overlooking the Mandovi River.", wiki: "https://en.wikipedia.org/wiki/Reis_Magos" },
    { id: 456, name: "Aguada Fort", country: "India", state: "Goa", city: "Sinquerim", dynasty: "Portuguese", year: 1612, lat: 15.4920, lng: 73.7630, desc: "A well-preserved seventeenth-century Portuguese fort and lighthouse.", wiki: "https://en.wikipedia.org/wiki/Fort_Aguada" },
    { id: 457, name: "Chapora Fort", country: "India", state: "Goa", city: "Chapora", dynasty: "Portuguese", year: 1617, lat: 15.6050, lng: 73.7360, desc: "A rugged fort offering stunning views of Vagator beach.", wiki: "https://en.wikipedia.org/wiki/Chapora_Fort" },
    { id: 458, name: "Cabo de Rama Fort", country: "India", state: "Goa", city: "Canacona", dynasty: "Portuguese", year: 1763, lat: 15.0880, lng: 73.9210, desc: "A massive fort in South Goa claimed from the local Raja by the Portuguese.", wiki: "https://en.wikipedia.org/wiki/Cabo_de_Rama" },
    { id: 459, name: "Corjuem Fort", country: "India", state: "Goa", city: "Corjuem", dynasty: "Portuguese", year: 1705, lat: 15.5960, lng: 73.8740, desc: "A small but strategically important inland island fort.", wiki: "https://en.wikipedia.org/wiki/Corjuem_Fort" },
    { id: 460, name: "Palacio de Deao", country: "India", state: "Goa", city: "Quepem", dynasty: "Portuguese", year: 1787, lat: 15.2150, lng: 74.0410, desc: "An elegant mansion showcasing a blend of Hindu and Portuguese architecture.", wiki: "https://en.wikipedia.org/wiki/Quepem" },

    // KARNATAKA
    { id: 461, name: "Badami Cave Temples", country: "India", state: "Karnataka", city: "Badami", dynasty: "Chalukya Dynasty", year: 540, lat: 15.9180, lng: 75.6850, desc: "A complex of incredibly detailed Hindu and Jain rock-cut temples.", wiki: "https://en.wikipedia.org/wiki/Badami_cave_temples" },
    { id: 462, name: "Agastya Lake Temples", country: "India", state: "Karnataka", city: "Badami", dynasty: "Chalukya Dynasty", year: 500, lat: 15.9200, lng: 75.6880, desc: "Ancient Bhutanatha temples clustered around a scenic holy lake.", wiki: "https://en.wikipedia.org/wiki/Bhutanatha_group_of_temples,_Badami" },
    { id: 463, name: "Aihole Durga Temple", country: "India", state: "Karnataka", city: "Aihole", dynasty: "Chalukya Dynasty", year: 700, lat: 16.0200, lng: 75.8820, desc: "An apsidal-ended stone temple known for its exceptional carvings.", wiki: "https://en.wikipedia.org/wiki/Durga_Temple,_Aihole" },
    { id: 464, name: "Aihole Lad Khan Temple", country: "India", state: "Karnataka", city: "Aihole", dynasty: "Chalukya Dynasty", year: 450, lat: 16.0210, lng: 75.8830, desc: "One of the oldest surviving Hindu temples in India.", wiki: "https://en.wikipedia.org/wiki/Lad_Khan_Temple" },
    { id: 465, name: "Aihole Meguti Jain Temple", country: "India", state: "Karnataka", city: "Aihole", dynasty: "Chalukya Dynasty", year: 634, lat: 16.0150, lng: 75.8860, desc: "A hilltop temple featuring the famous Aihole inscription.", wiki: "https://en.wikipedia.org/wiki/Aihole" },
    { id: 466, name: "Pattadakal Virupaksha Temple", country: "India", state: "Karnataka", city: "Pattadakal", dynasty: "Chalukya Dynasty", year: 740, lat: 15.9490, lng: 75.8160, desc: "The largest and most sophisticated temple in the Pattadakal complex.", wiki: "https://en.wikipedia.org/wiki/Pattadakal" },
    { id: 467, name: "Pattadakal Mallikarjuna Temple", country: "India", state: "Karnataka", city: "Pattadakal", dynasty: "Chalukya Dynasty", year: 740, lat: 15.9495, lng: 75.8165, desc: "A grand temple built by the queens of Vikramaditya II.", wiki: "https://en.wikipedia.org/wiki/Pattadakal" },
    { id: 468, name: "Pattadakal Papanatha Temple", country: "India", state: "Karnataka", city: "Pattadakal", dynasty: "Chalukya Dynasty", year: 680, lat: 15.9470, lng: 75.8170, desc: "A temple displaying an unusual mix of Dravidian and Nagara styles.", wiki: "https://en.wikipedia.org/wiki/Pattadakal" },
    { id: 469, name: "Hampi Virupaksha Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1336, lat: 15.3350, lng: 76.4600, desc: "The primary working temple in the ruined city of Vijayanagara.", wiki: "https://en.wikipedia.org/wiki/Virupaksha_Temple,_Hampi" },
    { id: 470, name: "Vittala Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1422, lat: 15.3380, lng: 76.4730, desc: "The most ornate temple in Hampi, famous for its musical pillars.", wiki: "https://en.wikipedia.org/wiki/Vijaya_Vittala_Temple" },
    { id: 471, name: "Stone Chariot", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1422, lat: 15.3381, lng: 76.4731, desc: "An iconic chariot carved out of solid stone inside the Vittala complex.", wiki: "https://en.wikipedia.org/wiki/Stone_Chariot_of_Hampi" },
    { id: 472, name: "Lotus Mahal", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1500, lat: 15.3210, lng: 76.4620, desc: "An elegant Indo-Islamic pavilion located in the royal enclosure.", wiki: "https://en.wikipedia.org/wiki/Lotus_Mahal" },
    { id: 473, name: "Elephant Stables", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1500, lat: 15.3220, lng: 76.4640, desc: "Massive domed chambers used to house the royal elephants.", wiki: "https://en.wikipedia.org/wiki/Elephant_Stables,_Hampi" },
    { id: 474, name: "Hazara Rama Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1400, lat: 15.3200, lng: 76.4630, desc: "The private royal temple depicting scenes from the Ramayana.", wiki: "https://en.wikipedia.org/wiki/Hazara_Rama_Temple" },
    { id: 475, name: "Achyutaraya Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1534, lat: 15.3330, lng: 76.4680, desc: "A magnificent temple complex set in a valley below Matanga Hill.", wiki: "https://en.wikipedia.org/wiki/Achyutaraya_Temple" },
    { id: 476, name: "Queen's Bath", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1500, lat: 15.3150, lng: 76.4640, desc: "A colossal aquatic enclosure built for the royal family.", wiki: "https://en.wikipedia.org/wiki/Group_of_Monuments_at_Hampi" },
    { id: 477, name: "Hemakuta Hill Monuments", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1300, lat: 15.3340, lng: 76.4600, desc: "A cluster of early temples overlooking the Virupaksha complex.", wiki: "https://en.wikipedia.org/wiki/Group_of_Monuments_at_Hampi" },
    { id: 478, name: "Badavilinga Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1500, lat: 15.3300, lng: 76.4620, desc: "A massive monolithic Shiva Linga standing partially in water.", wiki: "https://en.wikipedia.org/wiki/Badavi_Linga" },
    { id: 479, name: "Krishna Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1515, lat: 15.3290, lng: 76.4610, desc: "Built by Krishnadevaraya to celebrate the conquest of Udayagiri.", wiki: "https://en.wikipedia.org/wiki/Krishna_Temple,_Hampi" },
    { id: 480, name: "Uddhana Veerabhadra Temple", country: "India", state: "Karnataka", city: "Hampi", dynasty: "Vijayanagara Empire", year: 1545, lat: 15.3280, lng: 76.4620, desc: "Houses a giant monolithic statue of Lord Veerabhadra.", wiki: "https://en.wikipedia.org/wiki/Group_of_Monuments_at_Hampi" },
    { id: 481, name: "Belur Chennakeshava Temple", country: "India", state: "Karnataka", city: "Belur", dynasty: "Hoysala Empire", year: 1117, lat: 13.1620, lng: 75.8580, desc: "An astoundingly intricate soapstone temple dedicated to Vishnu.", wiki: "https://en.wikipedia.org/wiki/Chennakeshava_Temple,_Belur" },
    { id: 482, name: "Halebidu Hoysaleswara Temple", country: "India", state: "Karnataka", city: "Halebidu", dynasty: "Hoysala Empire", year: 1121, lat: 13.2130, lng: 75.9930, desc: "An architectural masterpiece featuring countless intricate wall sculptures.", wiki: "https://en.wikipedia.org/wiki/Hoysaleswara_Temple" },
    { id: 483, name: "Halebidu Kedareshwara Temple", country: "India", state: "Karnataka", city: "Halebidu", dynasty: "Hoysala Empire", year: 1219, lat: 13.2100, lng: 75.9900, desc: "A stunning Hoysala temple constructed by King Veera Ballala II.", wiki: "https://en.wikipedia.org/wiki/Kedareshwara_Temple,_Halebidu" },
    { id: 484, name: "Shravanabelagola Gommateshwara", country: "India", state: "Karnataka", city: "Shravanabelagola", dynasty: "Western Ganga Dynasty", year: 981, lat: 12.8570, lng: 76.4850, desc: "A towering 57-foot monolithic statue of Bahubali.", wiki: "https://en.wikipedia.org/wiki/Gommateshwara_statue" },
    { id: 485, name: "Mysore Palace", country: "India", state: "Karnataka", city: "Mysuru", dynasty: "Wadiyar Dynasty", year: 1912, lat: 12.3050, lng: 76.6550, desc: "The incredibly ornate historical palace of the Kingdom of Mysore.", wiki: "https://en.wikipedia.org/wiki/Mysore_Palace" },
    { id: 486, name: "Jaganmohan Palace", country: "India", state: "Karnataka", city: "Mysuru", dynasty: "Wadiyar Dynasty", year: 1861, lat: 12.3070, lng: 76.6500, desc: "A former royal palace that now houses an extensive art gallery.", wiki: "https://en.wikipedia.org/wiki/Jaganmohan_Palace" },
    { id: 487, name: "Srirangapatna Fort", country: "India", state: "Karnataka", city: "Srirangapatna", dynasty: "Kingdom of Mysore", year: 1454, lat: 12.4230, lng: 76.6850, desc: "A historic fortress serving as the de facto capital under Tipu Sultan.", wiki: "https://en.wikipedia.org/wiki/Srirangapatna_Fort" },
    { id: 488, name: "Tipu Sultan's Summer Palace", country: "India", state: "Karnataka", city: "Srirangapatna", dynasty: "Kingdom of Mysore", year: 1784, lat: 12.4170, lng: 76.6900, desc: "The beautiful Daria Daulat Bagh, constructed mainly of teak.", wiki: "https://en.wikipedia.org/wiki/Daria_Daulat_Bagh" },
    { id: 489, name: "Gumbaz", country: "India", state: "Karnataka", city: "Srirangapatna", dynasty: "Kingdom of Mysore", year: 1784, lat: 12.4180, lng: 76.6950, desc: "The grand mausoleum holding the tombs of Tipu Sultan and Hyder Ali.", wiki: "https://en.wikipedia.org/wiki/Gumbaz,_Srirangapatna" },
    { id: 490, name: "Bangalore Palace", country: "India", state: "Karnataka", city: "Bengaluru", dynasty: "Wadiyar Dynasty", year: 1878, lat: 12.9980, lng: 77.5920, desc: "A majestic palace built in the Tudor Revival style.", wiki: "https://en.wikipedia.org/wiki/Bangalore_Palace" },
    { id: 491, name: "Vidhana Soudha", country: "India", state: "Karnataka", city: "Bengaluru", dynasty: "Post-Independence India", year: 1956, lat: 12.9790, lng: 77.5900, desc: "An imposing neo-Dravidian state legislature building.", wiki: "https://en.wikipedia.org/wiki/Vidhana_Soudha" },
    { id: 492, name: "Tipu Sultan's Palace", country: "India", state: "Karnataka", city: "Bengaluru", dynasty: "Kingdom of Mysore", year: 1791, lat: 12.9610, lng: 77.5740, desc: "A teakwood summer palace located in the heart of Bengaluru.", wiki: "https://en.wikipedia.org/wiki/Tipu_Sultan%27s_Summer_Palace" },
    { id: 493, name: "Gol Gumbaz", country: "India", state: "Karnataka", city: "Vijayapura", dynasty: "Adil Shahi Dynasty", year: 1656, lat: 16.8280, lng: 75.7350, desc: "The tomb of Mohammed Adil Shah, boasting an immense whispering dome.", wiki: "https://en.wikipedia.org/wiki/Gol_Gumbaz" },
    { id: 494, name: "Ibrahim Rauza", country: "India", state: "Karnataka", city: "Vijayapura", dynasty: "Adil Shahi Dynasty", year: 1627, lat: 16.8260, lng: 75.7000, desc: "A highly elegant tomb and mosque complex, sometimes called the 'Taj Mahal of the Deccan'.", wiki: "https://en.wikipedia.org/wiki/Ibrahim_Rauza" },
    { id: 495, name: "Bijapur Jama Masjid", country: "India", state: "Karnataka", city: "Vijayapura", dynasty: "Adil Shahi Dynasty", year: 1576, lat: 16.8230, lng: 75.7200, desc: "One of the first mosques in India built featuring a hemispherical dome.", wiki: "https://en.wikipedia.org/wiki/Jama_Mosque,_Bijapur" },
    { id: 496, name: "Kittur Fort", country: "India", state: "Karnataka", city: "Kittur", dynasty: "Desai Dynasty", year: 1650, lat: 15.5970, lng: 74.7930, desc: "The ruined stronghold of the brave Rani Chennamma.", wiki: "https://en.wikipedia.org/wiki/Kittur_Fort" },
    { id: 497, name: "Bidar Fort", country: "India", state: "Karnataka", city: "Bidar", dynasty: "Bahmani Sultanate", year: 1427, lat: 17.9250, lng: 77.5340, desc: "A large sprawling fort complex holding over 30 historic monuments.", wiki: "https://en.wikipedia.org/wiki/Bidar_Fort" },
    { id: 498, name: "Bahmani Tombs", country: "India", state: "Karnataka", city: "Ashtur", dynasty: "Bahmani Sultanate", year: 1450, lat: 17.9150, lng: 77.5600, desc: "A cluster of royal mausoleums featuring towering domes.", wiki: "https://en.wikipedia.org/wiki/Bidar" },
    { id: 499, name: "Gulbarga Fort", country: "India", state: "Karnataka", city: "Kalaburagi", dynasty: "Bahmani Sultanate", year: 1347, lat: 17.3390, lng: 76.8280, desc: "A historic fort housing an unusual fully-covered grand mosque.", wiki: "https://en.wikipedia.org/wiki/Gulbarga_Fort" },
    { id: 500, name: "Buddha Vihara", country: "India", state: "Karnataka", city: "Kalaburagi", dynasty: "Modern Buddhist", year: 2007, lat: 17.2910, lng: 76.8400, desc: "A magnificent modern Buddhist temple and spiritual center.", wiki: "https://en.wikipedia.org/wiki/Buddha_Vihara,_Gulbarga" }
];

let currentFilteredData = [...monuments];
let currentMonumentIndex = 0;
let activeMarkerId = null;

// Build Dynasty Chronological Order Dictionary
const dynastyStartYears = {};
monuments.forEach(m => {
    if (!(m.dynasty in dynastyStartYears) || m.year < dynastyStartYears[m.dynasty]) {
        dynastyStartYears[m.dynasty] = m.year;
    }
});

// Initialize Leaflet Map
const map = L.map('map', { zoomControl: false }).setView([28.6139, 77.2090], 11);
L.control.zoom({ position: 'bottomright' }).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

let markersLayer = L.featureGroup().addTo(map);

// DOM Elements
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

// Dropdown Logic
function populateSelect(element, dataArray, isDynasty = false) {
    element.innerHTML = '<option value="all">All</option>';
    
    // Sort chronologically for dynasties, otherwise alphabetically
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

    selectState.addEventListener('change', () => {
        const state = selectState.value;
        if (state === 'all') {
            selectCity.innerHTML = '<option value="all">All Cities</option>'; selectCity.disabled = true;
            updateDynastyOptions(monuments.filter(m => m.country === selectCountry.value));
        } else {
            const stateData = monuments.filter(m => m.state === state && m.country === selectCountry.value);
            populateSelect(selectCity, [...new Set(stateData.map(m => m.city))]); selectCity.disabled = false;
            updateDynastyOptions(stateData);
        }
    });
}

// Map Functions
function updateMap(data) {
    markersLayer.clearLayers(); 
    if (data.length === 0) return;

    data.forEach(site => {
        const customIcon = L.divIcon({
            className: `custom-pin ${site.id === activeMarkerId ? 'active-pin' : ''}`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });

        const marker = L.marker([site.lat, site.lng], { icon: customIcon, monumentId: site.id })
            .bindTooltip(`<b>${site.name}</b>`, { direction: 'top', offset: [0, -10] });

        marker.on('click', () => {
            activeMarkerId = site.id;
            updateMarkerHighlights();
            openPanel(site);
        });
        markersLayer.addLayer(marker);
    });

    map.flyToBounds(markersLayer.getBounds(), { padding: [50, 50], maxZoom: 13, duration: 1.5 });
}

function updateMarkerHighlights() {
    markersLayer.eachLayer(marker => {
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
    if (selectState.value !== 'all') filtered = filtered.filter(m => m.state === selectState.value);
    if (selectCity.value !== 'all') filtered = filtered.filter(m => m.city === selectCity.value);
    if (selectDynasty.value !== 'all') filtered = filtered.filter(m => m.dynasty === selectDynasty.value);

    const startYear = parseInt(inputYearStart.value);
    const endYear = parseInt(inputYearEnd.value);
    if (!isNaN(startYear)) filtered = filtered.filter(m => m.year >= startYear);
    if (!isNaN(endYear)) filtered = filtered.filter(m => m.year <= endYear);

    currentFilteredData = filtered;
    updateMap(currentFilteredData);

    if (window.innerWidth <= 768) {
        sidebarWrapper.classList.add('closed');
        toggleSidebarBtn.textContent = '❯';
    }
}

function resetFilters() {
    selectCountry.value = 'all';
    selectState.innerHTML = '<option value="all">All States</option>'; selectState.disabled = true;
    selectCity.innerHTML = '<option value="all">All Cities</option>'; selectCity.disabled = true;
    selectDynasty.value = 'all';
    inputYearStart.value = ''; inputYearEnd.value = '';
    
    updateDynastyOptions(monuments);
    applyFilters();
}

function openPanel(site) {
    currentMonumentIndex = currentFilteredData.findIndex(m => m.id === site.id);
    activeMarkerId = site.id;
    updateMarkerHighlights();
    
    populatePanelData(site);
    infoPanel.classList.add('open');
    
    const zoomOffset = window.innerWidth <= 768 ? -0.015 : 0; 
    map.flyTo([site.lat + zoomOffset, site.lng], 14, { duration: 1.2 });
}

// Image Auto-Fetcher & Fallback
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
    
    document.getElementById('panel-gmaps').href = `https://www.google.com/maps/search/?api=1&query=${site.lat},${site.lng}`;
    document.getElementById('panel-wiki').href = site.wiki;

    updateNavButtons();
}

function updateNavButtons() {
    document.getElementById("counter").innerText = `${currentMonumentIndex + 1} / ${currentFilteredData.length}`;
    btnPrev.disabled = currentMonumentIndex === 0;
    btnNext.disabled = currentMonumentIndex === currentFilteredData.length - 1;
}

function showPrevMonument() {
    if (currentMonumentIndex > 0) {
        currentMonumentIndex--;
        openPanel(currentFilteredData[currentMonumentIndex]);
    }
}

function showNextMonument() {
    if (currentMonumentIndex < currentFilteredData.length - 1) {
        currentMonumentIndex++;
        openPanel(currentFilteredData[currentMonumentIndex]);
    }
}

function closePanel() {
    infoPanel.classList.remove('open');
    activeMarkerId = null;
    updateMarkerHighlights();
}

// Event Listeners
btnApply.addEventListener('click', applyFilters);
btnReset.addEventListener('click', resetFilters);
btnClosePanel.addEventListener('click', closePanel);
btnPrev.addEventListener('click', showPrevMonument);
btnNext.addEventListener('click', showNextMonument);

// Boot
initDropdowns();
updateMap(currentFilteredData);