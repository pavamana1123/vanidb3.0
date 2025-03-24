const data = [
  {
    "canto": "1",
    "chapter": "0",
    "title": "Creation"
  },
  {
    "canto": "1",
    "chapter": "1",
    "title": "Questions by the Sages"
  },
  {
    "canto": "1",
    "chapter": "10",
    "title": "Departure of Lord Kṛṣṇa for Dvārakā"
  },
  {
    "canto": "1",
    "chapter": "11",
    "title": "Lord Kṛṣṇa’s Entrance into Dvārakā"
  },
  {
    "canto": "1",
    "chapter": "12",
    "title": "Birth of Emperor Parīkṣit"
  },
  {
    "canto": "1",
    "chapter": "13",
    "title": "Dhṛtarāṣṭra Quits Home"
  },
  {
    "canto": "1",
    "chapter": "14",
    "title": "The Disappearance of Lord Kṛṣṇa"
  },
  {
    "canto": "1",
    "chapter": "15",
    "title": "The Pāṇḍavas Retire Timely"
  },
  {
    "canto": "1",
    "chapter": "16",
    "title": "How Parīkṣit Received the Age of Kali"
  },
  {
    "canto": "1",
    "chapter": "17",
    "title": "Punishment and Reward of Kali"
  },
  {
    "canto": "1",
    "chapter": "18",
    "title": "Mahārāja Parīkṣit Cursed by a Brāhmaṇa Boy"
  },
  {
    "canto": "1",
    "chapter": "19",
    "title": "The Appearance of Śukadeva Gosvāmī"
  },
  {
    "canto": "1",
    "chapter": "2",
    "title": "Divinity and Divine Service"
  },
  {
    "canto": "1",
    "chapter": "3",
    "title": "Kṛṣṇa Is the Source of All Incarnations"
  },
  {
    "canto": "1",
    "chapter": "4",
    "title": "The Appearance of Śrī Nārada"
  },
  {
    "canto": "1",
    "chapter": "5",
    "title": "Nārada’s Instructions on Śrīmad-Bhāgavatam for Vyāsadeva"
  },
  {
    "canto": "1",
    "chapter": "6",
    "title": "Conversation Between Nārada and Vyāsadeva"
  },
  {
    "canto": "1",
    "chapter": "7",
    "title": "The Son of Droṇa Punished"
  },
  {
    "canto": "1",
    "chapter": "8",
    "title": "Prayers by Queen Kuntī and Parīkṣit Saved"
  },
  {
    "canto": "1",
    "chapter": "9",
    "title": "The Passing Away of Bhīṣmadeva in the Presence of Lord Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "0",
    "title": "The Summum Bonum"
  },
  {
    "canto": "10",
    "chapter": "1",
    "title": "The Advent of Lord Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "10",
    "title": "The Deliverance of the Yamala-arjuna Trees"
  },
  {
    "canto": "10",
    "chapter": "11",
    "title": "The Childhood Pastimes of Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "12",
    "title": "The Killing of the Demon Aghāsura"
  },
  {
    "canto": "10",
    "chapter": "13",
    "title": "The Stealing of the Boys and Calves by Brahmā"
  },
  {
    "canto": "10",
    "chapter": "14",
    "title": "Brahmā’s Prayers to Lord Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "15",
    "title": "The Killing of Dhenuka, the Ass Demon"
  },
  {
    "canto": "10",
    "chapter": "16",
    "title": "Kṛṣṇa Chastises the Serpent Kāliya"
  },
  {
    "canto": "10",
    "chapter": "17",
    "title": "The History of Kāliya"
  },
  {
    "canto": "10",
    "chapter": "18",
    "title": "Lord Balarāma Slays the Demon Pralamba"
  },
  {
    "canto": "10",
    "chapter": "19",
    "title": "Swallowing the Forest Fire"
  },
  {
    "canto": "10",
    "chapter": "2",
    "title": "Prayers by the Demigods for Lord Kṛṣṇa in the Womb"
  },
  {
    "canto": "10",
    "chapter": "20",
    "title": "The Rainy Season and Autumn in Vṛndāvana"
  },
  {
    "canto": "10",
    "chapter": "21",
    "title": "The Gopīs Glorify the Song of Kṛṣṇa’s Flute"
  },
  {
    "canto": "10",
    "chapter": "22",
    "title": "Kṛṣṇa Steals the Garments of the Unmarried Gopīs"
  },
  {
    "canto": "10",
    "chapter": "23",
    "title": "The Brāhmaṇas’ Wives Blessed"
  },
  {
    "canto": "10",
    "chapter": "24",
    "title": "Worshiping Govardhana Hill"
  },
  {
    "canto": "10",
    "chapter": "25",
    "title": "Lord Kṛṣṇa Lifts Govardhana Hill"
  },
  {
    "canto": "10",
    "chapter": "26",
    "title": "Wonderful Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "27",
    "title": "Lord Indra and Mother Surabhi Offer Prayers"
  },
  {
    "canto": "10",
    "chapter": "28",
    "title": "Kṛṣṇa Rescues Nanda Mahārāja from the Abode of Varuṇa"
  },
  {
    "canto": "10",
    "chapter": "29",
    "title": "Kṛṣṇa and the Gopīs Meet for the Rāsa Dance"
  },
  {
    "canto": "10",
    "chapter": "3",
    "title": "The Birth of Lord Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "30",
    "title": "The Gopīs Search for Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "31",
    "title": "The Gopīs’ Songs of Separation"
  },
  {
    "canto": "10",
    "chapter": "32",
    "title": "The Reunion"
  },
  {
    "canto": "10",
    "chapter": "33",
    "title": "The Rāsa Dance"
  },
  {
    "canto": "10",
    "chapter": "34",
    "title": "Nanda Mahārāja Saved and Śaṅkhacūḍa Slain"
  },
  {
    "canto": "10",
    "chapter": "35",
    "title": "The Gopīs Sing of Kṛṣṇa as He Wanders in the Forest"
  },
  {
    "canto": "10",
    "chapter": "36",
    "title": "The Slaying of Ariṣṭā, the Bull Demon"
  },
  {
    "canto": "10",
    "chapter": "37",
    "title": "The Killing of the Demons Keśi and Vyoma"
  },
  {
    "canto": "10",
    "chapter": "38",
    "title": "Akrūra’s Arrival in Vṛndāvana"
  },
  {
    "canto": "10",
    "chapter": "39",
    "title": "Akrūra’s Vision"
  },
  {
    "canto": "10",
    "chapter": "4",
    "title": "The Atrocities of King Kaṁsa"
  },
  {
    "canto": "10",
    "chapter": "40",
    "title": "The Prayers of Akrūra"
  },
  {
    "canto": "10",
    "chapter": "41",
    "title": "Kṛṣṇa and Balarāma Enter Mathurā"
  },
  {
    "canto": "10",
    "chapter": "42",
    "title": "The Breaking of the Sacrificial Bow"
  },
  {
    "canto": "10",
    "chapter": "43",
    "title": "Kṛṣṇa Kills the Elephant Kuvalayāpīḍa"
  },
  {
    "canto": "10",
    "chapter": "44",
    "title": "The Killing of Kaṁsa"
  },
  {
    "canto": "10",
    "chapter": "45",
    "title": "Kṛṣṇa Rescues His Teacher’s Son"
  },
  {
    "canto": "10",
    "chapter": "46",
    "title": "Uddhava Visits Vṛndāvana"
  },
  {
    "canto": "10",
    "chapter": "47",
    "title": "The Song of the Bee"
  },
  {
    "canto": "10",
    "chapter": "48",
    "title": "Kṛṣṇa Pleases His Devotees"
  },
  {
    "canto": "10",
    "chapter": "49",
    "title": "Akrūra’s Mission in Hastināpura"
  },
  {
    "canto": "10",
    "chapter": "5",
    "title": "The Meeting of Nanda Mahārāja and Vasudeva"
  },
  {
    "canto": "10",
    "chapter": "50",
    "title": "Kṛṣṇa Establishes the City of Dvārakā"
  },
  {
    "canto": "10",
    "chapter": "51",
    "title": "The Deliverance of Mucukunda"
  },
  {
    "canto": "10",
    "chapter": "52",
    "title": "Rukmiṇī’s Message to Lord Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "53",
    "title": "Kṛṣṇa Kidnaps Rukmiṇī"
  },
  {
    "canto": "10",
    "chapter": "54",
    "title": "The Marriage of Kṛṣṇa and Rukmiṇī"
  },
  {
    "canto": "10",
    "chapter": "55",
    "title": "The History of Pradyumna"
  },
  {
    "canto": "10",
    "chapter": "56",
    "title": "The Syamantaka Jewel"
  },
  {
    "canto": "10",
    "chapter": "57",
    "title": "Satrājit Murdered, the Jewel Returned"
  },
  {
    "canto": "10",
    "chapter": "58",
    "title": "Kṛṣṇa Marries Five Princesses"
  },
  {
    "canto": "10",
    "chapter": "59",
    "title": "The Killing of the Demon Naraka"
  },
  {
    "canto": "10",
    "chapter": "6",
    "title": "The Killing of the Demon Pūtanā"
  },
  {
    "canto": "10",
    "chapter": "60",
    "title": "Lord Kṛṣṇa Teases Queen Rukmiṇī."
  },
  {
    "canto": "10",
    "chapter": "61",
    "title": "Lord Balarāma Slays Rukmī"
  },
  {
    "canto": "10",
    "chapter": "62",
    "title": "The Meeting of Ūṣā and Aniruddha"
  },
  {
    "canto": "10",
    "chapter": "63",
    "title": "Lord Kṛṣṇa Fights with Bāṇāsura"
  },
  {
    "canto": "10",
    "chapter": "64",
    "title": "The Deliverance of King Nṛga"
  },
  {
    "canto": "10",
    "chapter": "65",
    "title": "Lord Balarāma Visits Vṛndāvana"
  },
  {
    "canto": "10",
    "chapter": "66",
    "title": "Pauṇḍraka, the False Vāsudeva"
  },
  {
    "canto": "10",
    "chapter": "67",
    "title": "Lord Balarāma Slays Dvivida Gorilla"
  },
  {
    "canto": "10",
    "chapter": "68",
    "title": "The Marriage of Sāmba"
  },
  {
    "canto": "10",
    "chapter": "69",
    "title": "Nārada Muni Visits Lord Kṛṣṇa’s Palaces in Dvārakā"
  },
  {
    "canto": "10",
    "chapter": "7",
    "title": "The Killing of the Demon Tṛṇāvarta"
  },
  {
    "canto": "10",
    "chapter": "70",
    "title": "Lord Kṛṣṇa’s Daily Activities"
  },
  {
    "canto": "10",
    "chapter": "71",
    "title": "The Lord Travels to Indraprastha"
  },
  {
    "canto": "10",
    "chapter": "72",
    "title": "The Slaying of the Demon Jarāsandha"
  },
  {
    "canto": "10",
    "chapter": "73",
    "title": "Lord Kṛṣṇa Blesses the Liberated Kings"
  },
  {
    "canto": "10",
    "chapter": "74",
    "title": "The Deliverance of Śiśupāla at the Rājasūya Sacrifice"
  },
  {
    "canto": "10",
    "chapter": "75",
    "title": "Duryodhana Humiliated"
  },
  {
    "canto": "10",
    "chapter": "76",
    "title": "The Battle Between Śālva and the Vṛṣṇis"
  },
  {
    "canto": "10",
    "chapter": "77",
    "title": "Lord Kṛṣṇa Slays the Demon Śālva"
  },
  {
    "canto": "10",
    "chapter": "78",
    "title": "The Killing of Dantavakra, Vidūratha and Romaharṣaṇa"
  },
  {
    "canto": "10",
    "chapter": "79",
    "title": "Lord Balarāma Goes on Pilgrimage"
  },
  {
    "canto": "10",
    "chapter": "8",
    "title": "Lord Kṛṣṇa Shows the Universal Form Within His Mouth"
  },
  {
    "canto": "10",
    "chapter": "80",
    "title": "The Brāhmaṇa Sudāmā Visits Lord Kṛṣṇa in Dvārakā"
  },
  {
    "canto": "10",
    "chapter": "81",
    "title": "The Lord Blesses Sudāmā Brāhmaṇa"
  },
  {
    "canto": "10",
    "chapter": "82",
    "title": "Kṛṣṇa and Balarāma Meet the Inhabitants of Vṛndāvana"
  },
  {
    "canto": "10",
    "chapter": "83",
    "title": "Draupadī Meets the Queens of Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "84",
    "title": "The Sages’ Teachings at Kurukṣetra"
  },
  {
    "canto": "10",
    "chapter": "85",
    "title": "Lord Kṛṣṇa Instructs Vasudeva and Retrieves Devakī’s Sons"
  },
  {
    "canto": "10",
    "chapter": "86",
    "title": "Arjuna Kidnaps Subhadrā, and Kṛṣṇa Blesses His Devotees"
  },
  {
    "canto": "10",
    "chapter": "87",
    "title": "The Prayers of the Personified Vedas"
  },
  {
    "canto": "10",
    "chapter": "88",
    "title": "Lord Śiva Saved from Vṛkāsura"
  },
  {
    "canto": "10",
    "chapter": "89",
    "title": "Kṛṣṇa and Arjuna Retrieve a Brāhmaṇa’s Sons"
  },
  {
    "canto": "10",
    "chapter": "9",
    "title": "Mother Yaśodā Binds Lord Kṛṣṇa"
  },
  {
    "canto": "10",
    "chapter": "90",
    "title": "Summary of Lord Kṛṣṇa’s Glories"
  },
  {
    "canto": "11",
    "chapter": "0",
    "title": "General History"
  },
  {
    "canto": "11",
    "chapter": "1",
    "title": "The Curse upon the Yadu Dynasty"
  },
  {
    "canto": "11",
    "chapter": "10",
    "title": "The Nature of Fruitive Activity"
  },
  {
    "canto": "11",
    "chapter": "11",
    "title": "The Symptoms of Conditioned and Liberated Living Entities"
  },
  {
    "canto": "11",
    "chapter": "12",
    "title": "Beyond Renunciation and Knowledge"
  },
  {
    "canto": "11",
    "chapter": "13",
    "title": "The Haṁsa-avatāra Answers the Questions of the Sons of Brahmā"
  },
  {
    "canto": "11",
    "chapter": "14",
    "title": "Lord Kṛṣṇa Explains the Yoga System to Śrī Uddhava"
  },
  {
    "canto": "11",
    "chapter": "15",
    "title": "Lord Kṛṣṇa’s Description of Mystic Yoga Perfections"
  },
  {
    "canto": "11",
    "chapter": "16",
    "title": "The Lord’s Opulence"
  },
  {
    "canto": "11",
    "chapter": "17",
    "title": "Lord Kṛṣṇa’s Description of the Varṇāśrama System"
  },
  {
    "canto": "11",
    "chapter": "18",
    "title": "Description of Varṇāśrama-dharma"
  },
  {
    "canto": "11",
    "chapter": "19",
    "title": "The Perfection of Spiritual Knowledge"
  },
  {
    "canto": "11",
    "chapter": "2",
    "title": "Mahārāja Nimi Meets the Nine Yogendras"
  },
  {
    "canto": "11",
    "chapter": "20",
    "title": "Pure Devotional Service Surpasses Knowledge and Detachment"
  },
  {
    "canto": "11",
    "chapter": "21",
    "title": "Lord Kṛṣṇa’s Explanation of the Vedic Path"
  },
  {
    "canto": "11",
    "chapter": "22",
    "title": "Enumeration of the Elements of Material Creation"
  },
  {
    "canto": "11",
    "chapter": "23",
    "title": "The Song of the Avantī Brāhmaṇa"
  },
  {
    "canto": "11",
    "chapter": "24",
    "title": "The Philosophy of Sāṅkhya"
  },
  {
    "canto": "11",
    "chapter": "25",
    "title": "The Three Modes of Nature and Beyond"
  },
  {
    "canto": "11",
    "chapter": "26",
    "title": "The Aila-gītā"
  },
  {
    "canto": "11",
    "chapter": "27",
    "title": "Lord Kṛṣṇa’s Instructions on the Process of Deity Worship"
  },
  {
    "canto": "11",
    "chapter": "28",
    "title": "Jñāna-yoga"
  },
  {
    "canto": "11",
    "chapter": "29",
    "title": "Bhakti-yoga"
  },
  {
    "canto": "11",
    "chapter": "3",
    "title": "Liberation from the Illusory Energy"
  },
  {
    "canto": "11",
    "chapter": "30",
    "title": "The Disappearance of the Yadu Dynasty"
  },
  {
    "canto": "11",
    "chapter": "31",
    "title": "The Disappearance of Lord Śrī Kṛṣṇa"
  },
  {
    "canto": "11",
    "chapter": "4",
    "title": "Drumila Explains the Incarnations of Godhead to King Nimi"
  },
  {
    "canto": "11",
    "chapter": "5",
    "title": "Nārada Concludes His Teachings to Vasudeva"
  },
  {
    "canto": "11",
    "chapter": "6",
    "title": "The Yadu Dynasty Retires to Prabhāsa"
  },
  {
    "canto": "11",
    "chapter": "7",
    "title": "Lord Kṛṣṇa Instructs Uddhava"
  },
  {
    "canto": "11",
    "chapter": "8",
    "title": "The Story of Piṅgalā"
  },
  {
    "canto": "11",
    "chapter": "9",
    "title": "Detachment from All that Is Material"
  },
  {
    "canto": "12",
    "chapter": "0",
    "title": "The Age of Deterioration"
  },
  {
    "canto": "12",
    "chapter": "1",
    "title": "The Degraded Dynasties of Kali-yuga"
  },
  {
    "canto": "12",
    "chapter": "10",
    "title": "Lord Śiva and Umā Glorify Mārkaṇḍeya Ṛṣi"
  },
  {
    "canto": "12",
    "chapter": "11",
    "title": "Summary Description of the Mahāpuruṣa"
  },
  {
    "canto": "12",
    "chapter": "12",
    "title": "The Topics of Śrīmad-Bhāgavatam Summarized"
  },
  {
    "canto": "12",
    "chapter": "13",
    "title": "The Glories of Śrīmad-Bhāgavatam"
  },
  {
    "canto": "12",
    "chapter": "2",
    "title": "The Symptoms of Kali-yuga"
  },
  {
    "canto": "12",
    "chapter": "3",
    "title": "The Bhūmi-gītā"
  },
  {
    "canto": "12",
    "chapter": "4",
    "title": "The Four Categories of Universal Annihilation"
  },
  {
    "canto": "12",
    "chapter": "5",
    "title": "Śukadeva Gosvāmī’s Final Instructions to Mahārāja Parīkṣit"
  },
  {
    "canto": "12",
    "chapter": "6",
    "title": "Mahārāja Parīkṣit Passes Away"
  },
  {
    "canto": "12",
    "chapter": "7",
    "title": "The Purāṇic Literatures"
  },
  {
    "canto": "12",
    "chapter": "8",
    "title": "Mārkaṇḍeya’s Prayers to Nara-Nārāyaṇa Ṛṣi"
  },
  {
    "canto": "12",
    "chapter": "9",
    "title": "Mārkaṇḍeya Ṛṣi Sees the Illusory Potency of the Lord"
  },
  {
    "canto": "2",
    "chapter": "0",
    "title": "The Cosmic Manifestation"
  },
  {
    "canto": "2",
    "chapter": "1",
    "title": "The First Step in God Realization"
  },
  {
    "canto": "2",
    "chapter": "10",
    "title": "Bhāgavatam Is the Answer to All Questions"
  },
  {
    "canto": "2",
    "chapter": "2",
    "title": "The Lord in the Heart"
  },
  {
    "canto": "2",
    "chapter": "3",
    "title": "Pure Devotional Service"
  },
  {
    "canto": "2",
    "chapter": "4",
    "title": "The Process of Creation"
  },
  {
    "canto": "2",
    "chapter": "5",
    "title": "The Cause of All Causes"
  },
  {
    "canto": "2",
    "chapter": "6",
    "title": "Puruṣa-sūkta Confirmed"
  },
  {
    "canto": "2",
    "chapter": "7",
    "title": "Scheduled Incarnations with Specific Functions"
  },
  {
    "canto": "2",
    "chapter": "8",
    "title": "Questions by King Parīkṣit"
  },
  {
    "canto": "2",
    "chapter": "9",
    "title": "Answers by Citing the Lord’s Version"
  },
  {
    "canto": "3",
    "chapter": "0",
    "title": "The Status Quo"
  },
  {
    "canto": "3",
    "chapter": "1",
    "title": "Questions by Vidura"
  },
  {
    "canto": "3",
    "chapter": "10",
    "title": "Divisions of the Creation"
  },
  {
    "canto": "3",
    "chapter": "11",
    "title": "Calculation of Time, from the Atom"
  },
  {
    "canto": "3",
    "chapter": "12",
    "title": "Creation of the Kumāras and Others"
  },
  {
    "canto": "3",
    "chapter": "13",
    "title": "The Appearance of Lord Varāha"
  },
  {
    "canto": "3",
    "chapter": "14",
    "title": "Pregnancy of Diti in the Evening"
  },
  {
    "canto": "3",
    "chapter": "15",
    "title": "Description of the Kingdom of God"
  },
  {
    "canto": "3",
    "chapter": "16",
    "title": "The Two Doorkeepers of Vaikuṇṭha, Jaya and Vijaya, Cursed by the Sages"
  },
  {
    "canto": "3",
    "chapter": "17",
    "title": "Victory of Hiraṇyākṣa Over All the Directions of the Universe"
  },
  {
    "canto": "3",
    "chapter": "18",
    "title": "The Battle Between Lord Boar and the Demon Hiraṇyākṣa"
  },
  {
    "canto": "3",
    "chapter": "19",
    "title": "The Killing of the Demon Hiraṇyākṣa"
  },
  {
    "canto": "3",
    "chapter": "2",
    "title": "Remembrance of Lord Kṛṣṇa"
  },
  {
    "canto": "3",
    "chapter": "20",
    "title": "Conversation Between Maitreya and Vidura"
  },
  {
    "canto": "3",
    "chapter": "21",
    "title": "Conversation Between Manu and Kardama"
  },
  {
    "canto": "3",
    "chapter": "22",
    "title": "The Marriage of Kardama Muni and Devahūti"
  },
  {
    "canto": "3",
    "chapter": "23",
    "title": "Devahūti’s Lamentation"
  },
  {
    "canto": "3",
    "chapter": "24",
    "title": "The Renunciation of Kardama Muni"
  },
  {
    "canto": "3",
    "chapter": "25",
    "title": "The Glories of Devotional Service"
  },
  {
    "canto": "3",
    "chapter": "26",
    "title": "Fundamental Principles of Material Nature"
  },
  {
    "canto": "3",
    "chapter": "27",
    "title": "Understanding Material Nature"
  },
  {
    "canto": "3",
    "chapter": "28",
    "title": "Kapila’s Instructions on the Execution of Devotional Service"
  },
  {
    "canto": "3",
    "chapter": "29",
    "title": "Explanation of Devotional Service by Lord Kapila"
  },
  {
    "canto": "3",
    "chapter": "3",
    "title": "The Lord’s Pastimes Out of Vṛndāvana"
  },
  {
    "canto": "3",
    "chapter": "30",
    "title": "Description by Lord Kapila of Adverse Fruitive Activities"
  },
  {
    "canto": "3",
    "chapter": "31",
    "title": "Lord Kapila’s Instructions on the Movements of the Living Entities"
  },
  {
    "canto": "3",
    "chapter": "32",
    "title": "Entanglement in Fruitive Activities"
  },
  {
    "canto": "3",
    "chapter": "33",
    "title": "Activities of Kapila"
  },
  {
    "canto": "3",
    "chapter": "4",
    "title": "Vidura Approaches Maitreya"
  },
  {
    "canto": "3",
    "chapter": "5",
    "title": "Vidura’s Talks with Maitreya"
  },
  {
    "canto": "3",
    "chapter": "6",
    "title": "Creation of the Universal Form"
  },
  {
    "canto": "3",
    "chapter": "7",
    "title": "Further Inquires by Vidura"
  },
  {
    "canto": "3",
    "chapter": "8",
    "title": "Manifestation of Brahmā from Garbhodakaśāyī Viṣṇu"
  },
  {
    "canto": "3",
    "chapter": "9",
    "title": "Brahmā’s Prayers for Creative Energy"
  },
  {
    "canto": "4",
    "chapter": "0",
    "title": "The Creation of the Fourth Order"
  },
  {
    "canto": "4",
    "chapter": "1",
    "title": "Genealogical Table of the Daughters of Manu"
  },
  {
    "canto": "4",
    "chapter": "10",
    "title": "Dhruva Mahārāja’s Fight with the Yakṣas"
  },
  {
    "canto": "4",
    "chapter": "11",
    "title": "Svāyambhuva Manu Advises Dhruva Mahārāja to Stop Fighting"
  },
  {
    "canto": "4",
    "chapter": "12",
    "title": "Dhruva Mahārāja Goes Back to Godhead"
  },
  {
    "canto": "4",
    "chapter": "13",
    "title": "Description of the Descendants of Dhruva Mahārāja"
  },
  {
    "canto": "4",
    "chapter": "14",
    "title": "The Story of King Vena"
  },
  {
    "canto": "4",
    "chapter": "15",
    "title": "King Pṛthu’s Appearance and Coronation"
  },
  {
    "canto": "4",
    "chapter": "16",
    "title": "Praise of King Pṛthu by the Professional Reciters"
  },
  {
    "canto": "4",
    "chapter": "17",
    "title": "Mahārāja Pṛthu Becomes Angry at the Earth"
  },
  {
    "canto": "4",
    "chapter": "18",
    "title": "Pṛthu Mahārāja Milks the Earth Planet"
  },
  {
    "canto": "4",
    "chapter": "19",
    "title": "King Pṛthu’s One Hundred Horse Sacrifices"
  },
  {
    "canto": "4",
    "chapter": "2",
    "title": "Dakṣa Curses Lord Śiva"
  },
  {
    "canto": "4",
    "chapter": "20",
    "title": "Lord Viṣṇu’s Appearance in the Sacrificial Arena of Mahārāja Pṛthu"
  },
  {
    "canto": "4",
    "chapter": "21",
    "title": "Instructions by Mahārāja Pṛthu"
  },
  {
    "canto": "4",
    "chapter": "22",
    "title": "Pṛthu Mahārāja’s Meeting with the Four Kumāras"
  },
  {
    "canto": "4",
    "chapter": "23",
    "title": "Mahārāja Pṛthu’s Going Back Home"
  },
  {
    "canto": "4",
    "chapter": "24",
    "title": "Chanting the Song Sung by Lord Śiva"
  },
  {
    "canto": "4",
    "chapter": "25",
    "title": "The Descriptions of the Characteristics of King Purañjana"
  },
  {
    "canto": "4",
    "chapter": "26",
    "title": "King Purañjana Goes to the Forest to Hunt, and His Queen Becomes Angry"
  },
  {
    "canto": "4",
    "chapter": "27",
    "title": "Attack by Caṇḍavega on the City of King Purañjana; the Character of Kālakanyā"
  },
  {
    "canto": "4",
    "chapter": "28",
    "title": "Purañjana Becomes a Woman in the Next Life"
  },
  {
    "canto": "4",
    "chapter": "29",
    "title": "Talks Between Nārada and King Prācīnabarhi"
  },
  {
    "canto": "4",
    "chapter": "3",
    "title": "Talks Between Lord Śiva and Satī"
  },
  {
    "canto": "4",
    "chapter": "30",
    "title": "The Activities of the Pracetās"
  },
  {
    "canto": "4",
    "chapter": "31",
    "title": "Nārada Instructs the Pracetās"
  },
  {
    "canto": "4",
    "chapter": "4",
    "title": "Satī Quits Her Body"
  },
  {
    "canto": "4",
    "chapter": "5",
    "title": "Frustration of the Sacrifice of Dakṣa"
  },
  {
    "canto": "4",
    "chapter": "6",
    "title": "Brahmā Satisfies Lord Śiva"
  },
  {
    "canto": "4",
    "chapter": "7",
    "title": "The Sacrifice Performed by Dakṣa"
  },
  {
    "canto": "4",
    "chapter": "8",
    "title": "Dhruva Mahārāja Leaves Home for the Forest"
  },
  {
    "canto": "4",
    "chapter": "9",
    "title": "Dhruva Mahārāja Returns Home"
  },
  {
    "canto": "5",
    "chapter": "0",
    "title": "The Creative Impetus"
  },
  {
    "canto": "5",
    "chapter": "1",
    "title": "The Activities of Mahārāja Priyavrata"
  },
  {
    "canto": "5",
    "chapter": "10",
    "title": "The Discussion Between Jaḍa Bharata and Mahārāja Rahūgaṇa"
  },
  {
    "canto": "5",
    "chapter": "11",
    "title": "Jaḍa Bharata Instructs King Rahūgaṇa"
  },
  {
    "canto": "5",
    "chapter": "12",
    "title": "Conversation Between Mahārāja Rahūgaṇa and Jaḍa Bharata"
  },
  {
    "canto": "5",
    "chapter": "13",
    "title": "Further Talks Between King Rahūgaṇa and Jaḍa Bharata"
  },
  {
    "canto": "5",
    "chapter": "14",
    "title": "The Material World as the Great Forest of Enjoyment"
  },
  {
    "canto": "5",
    "chapter": "15",
    "title": "The Glories of the Descendants of King Priyavrata"
  },
  {
    "canto": "5",
    "chapter": "16",
    "title": "A Description of Jambūdvīpa"
  },
  {
    "canto": "5",
    "chapter": "17",
    "title": "The Descent of the River Ganges"
  },
  {
    "canto": "5",
    "chapter": "18",
    "title": "The Prayers Offered to the Lord by the Residents of Jambūdvīpa"
  },
  {
    "canto": "5",
    "chapter": "19",
    "title": "A Description of the Island of Jambūdvīpa"
  },
  {
    "canto": "5",
    "chapter": "2",
    "title": "The Activities of Mahārāja Āgnīdhra"
  },
  {
    "canto": "5",
    "chapter": "20",
    "title": "Studying the Structure of the Universe"
  },
  {
    "canto": "5",
    "chapter": "21",
    "title": "The Movements of the Sun"
  },
  {
    "canto": "5",
    "chapter": "22",
    "title": "The Orbits of the Planets"
  },
  {
    "canto": "5",
    "chapter": "23",
    "title": "The Śiśumāra Planetary Systems"
  },
  {
    "canto": "5",
    "chapter": "24",
    "title": "The Subterranean Heavenly Planets"
  },
  {
    "canto": "5",
    "chapter": "25",
    "title": "The Glories of Lord Ananta"
  },
  {
    "canto": "5",
    "chapter": "26",
    "title": "A Description of the Hellish Planets"
  },
  {
    "canto": "5",
    "chapter": "3",
    "title": "Ṛṣabhadeva’s Appearance in the Womb of Merudevī, the Wife of King Nābhi"
  },
  {
    "canto": "5",
    "chapter": "4",
    "title": "The Characteristics of Ṛṣabhadeva, the Supreme Personality of Godhead"
  },
  {
    "canto": "5",
    "chapter": "5",
    "title": "Lord Ṛṣabhadeva’s Teachings to His Sons"
  },
  {
    "canto": "5",
    "chapter": "6",
    "title": "The Activities of Lord Ṛṣabhadeva"
  },
  {
    "canto": "5",
    "chapter": "7",
    "title": "The Activities of King Bharata"
  },
  {
    "canto": "5",
    "chapter": "8",
    "title": "A Description of the Character of Bharata Mahārāja"
  },
  {
    "canto": "5",
    "chapter": "9",
    "title": "The Supreme Character of Jaḍa Bharata"
  },
  {
    "canto": "6",
    "chapter": "0",
    "title": "Prescribed Duties for Mankind"
  },
  {
    "canto": "6",
    "chapter": "1",
    "title": "The History of the Life of Ajāmila"
  },
  {
    "canto": "6",
    "chapter": "10",
    "title": "The Battle Between the Demigods and Vṛtrāsura"
  },
  {
    "canto": "6",
    "chapter": "11",
    "title": "The Transcendental Qualities of Vṛtrāsura"
  },
  {
    "canto": "6",
    "chapter": "12",
    "title": "Vṛtrāsura’s Glorious Death"
  },
  {
    "canto": "6",
    "chapter": "13",
    "title": "King Indra Afflicted by Sinful Reaction"
  },
  {
    "canto": "6",
    "chapter": "14",
    "title": "King Citraketu’s Lamentation"
  },
  {
    "canto": "6",
    "chapter": "15",
    "title": "The Saints Nārada and Aṅgirā Instruct King Citraketu"
  },
  {
    "canto": "6",
    "chapter": "16",
    "title": "King Citraketu Meets the Supreme Lord"
  },
  {
    "canto": "6",
    "chapter": "17",
    "title": "Mother Pārvatī Curses Citraketu"
  },
  {
    "canto": "6",
    "chapter": "18",
    "title": "Diti Vows to Kill King Indra"
  },
  {
    "canto": "6",
    "chapter": "19",
    "title": "Performing the Puṁsavana Ritualistic Ceremony"
  },
  {
    "canto": "6",
    "chapter": "2",
    "title": "Ajāmila Delivered by the Viṣṇudūtas"
  },
  {
    "canto": "6",
    "chapter": "3",
    "title": "Yamarāja Instructs His Messengers"
  },
  {
    "canto": "6",
    "chapter": "4",
    "title": "The Haṁsa-guhya Prayers Offered to the Lord by Prajāpati Dakṣa"
  },
  {
    "canto": "6",
    "chapter": "5",
    "title": "Nārada Muni Cursed by Prajāpati Dakṣa"
  },
  {
    "canto": "6",
    "chapter": "6",
    "title": "The Progeny of the Daughters of Dakṣa"
  },
  {
    "canto": "6",
    "chapter": "7",
    "title": "Indra Offends His Spiritual Master, Bṛhaspati."
  },
  {
    "canto": "6",
    "chapter": "8",
    "title": "The Nārāyaṇa-kavaca Shield"
  },
  {
    "canto": "6",
    "chapter": "9",
    "title": "Appearance of the Demon Vṛtrāsura"
  },
  {
    "canto": "7",
    "chapter": "0",
    "title": "The Science of God"
  },
  {
    "canto": "7",
    "chapter": "1",
    "title": "The Supreme Lord Is Equal to Everyone"
  },
  {
    "canto": "7",
    "chapter": "10",
    "title": "Prahlāda, the Best Among Exalted Devotees"
  },
  {
    "canto": "7",
    "chapter": "11",
    "title": "The Perfect Society"
  },
  {
    "canto": "7",
    "chapter": "12",
    "title": "The Perfect Society"
  },
  {
    "canto": "7",
    "chapter": "13",
    "title": "The Behavior of a Perfect Person"
  },
  {
    "canto": "7",
    "chapter": "14",
    "title": "Ideal Family Life"
  },
  {
    "canto": "7",
    "chapter": "15",
    "title": "Instructions for Civilized Human Beings"
  },
  {
    "canto": "7",
    "chapter": "2",
    "title": "Hiraṇyakaśipu, King of the Demons"
  },
  {
    "canto": "7",
    "chapter": "3",
    "title": "Hiraṇyakaśipu’s Plan to Become Immortal"
  },
  {
    "canto": "7",
    "chapter": "4",
    "title": "Hiraṇyakaśipu Terrorizes the Universe"
  },
  {
    "canto": "7",
    "chapter": "5",
    "title": "Prahlāda Mahārāja, the Saintly Son of Hiraṇyakaśipu"
  },
  {
    "canto": "7",
    "chapter": "6",
    "title": "Prahlāda Instructs His Demoniac Schoolmates"
  },
  {
    "canto": "7",
    "chapter": "7",
    "title": "What Prahlāda Learned in the Womb"
  },
  {
    "canto": "7",
    "chapter": "8",
    "title": "Lord Nṛsiṁhadeva Slays the King of the Demons"
  },
  {
    "canto": "7",
    "chapter": "9",
    "title": "Prahlāda Pacifies Lord Nṛsiṁhadeva with Prayers"
  },
  {
    "canto": "8",
    "chapter": "0",
    "title": "Withdrawal of the Cosmic Creations"
  },
  {
    "canto": "8",
    "chapter": "1",
    "title": "The Manus, Administrators of the Universe"
  },
  {
    "canto": "8",
    "chapter": "10",
    "title": "The Battle Between the Demigods and the Demons"
  },
  {
    "canto": "8",
    "chapter": "11",
    "title": "King Indra Annihilates the Demons"
  },
  {
    "canto": "8",
    "chapter": "12",
    "title": "The Mohinī-mūrti Incarnation Bewilders Lord Śiva"
  },
  {
    "canto": "8",
    "chapter": "13",
    "title": "Description of Future Manus"
  },
  {
    "canto": "8",
    "chapter": "14",
    "title": "The System of Universal Management"
  },
  {
    "canto": "8",
    "chapter": "15",
    "title": "Bali Mahārāja Conquers the Heavenly Planets"
  },
  {
    "canto": "8",
    "chapter": "16",
    "title": "Executing the Payo-vrata Process of Worship"
  },
  {
    "canto": "8",
    "chapter": "17",
    "title": "The Supreme Lord Agrees to Become Aditi’s Son"
  },
  {
    "canto": "8",
    "chapter": "18",
    "title": "Lord Vāmanadeva, the Dwarf Incarnation"
  },
  {
    "canto": "8",
    "chapter": "19",
    "title": "Lord Vāmanadeva Begs Charity from Bali Mahārāja"
  },
  {
    "canto": "8",
    "chapter": "2",
    "title": "The Elephant Gajendra’s Crisis"
  },
  {
    "canto": "8",
    "chapter": "20",
    "title": "Bali Mahārāja Surrenders the Universe"
  },
  {
    "canto": "8",
    "chapter": "21",
    "title": "Bali Mahārāja Arrested by the Lord"
  },
  {
    "canto": "8",
    "chapter": "22",
    "title": "Bali Mahārāja Surrenders His Life"
  },
  {
    "canto": "8",
    "chapter": "23",
    "title": "The Demigods Regain the Heavenly Planets"
  },
  {
    "canto": "8",
    "chapter": "24",
    "title": "Matsya, the Lord’s Fish Incarnation"
  },
  {
    "canto": "8",
    "chapter": "3",
    "title": "Gajendra’s Prayers of Surrender"
  },
  {
    "canto": "8",
    "chapter": "4",
    "title": "Gajendra Returns to the Spiritual World"
  },
  {
    "canto": "8",
    "chapter": "5",
    "title": "The Demigods Appeal to the Lord for Protection"
  },
  {
    "canto": "8",
    "chapter": "6",
    "title": "The Demigods and Demons Declare a Truce"
  },
  {
    "canto": "8",
    "chapter": "7",
    "title": "Lord Śiva Saves the Universe by Drinking Poison"
  },
  {
    "canto": "8",
    "chapter": "8",
    "title": "The Churning of the Milk Ocean"
  },
  {
    "canto": "8",
    "chapter": "9",
    "title": "The Lord Incarnates as Mohinī-Mūrti"
  },
  {
    "canto": "9",
    "chapter": "0",
    "title": "Liberation"
  },
  {
    "canto": "9",
    "chapter": "1",
    "title": "King Sudyumna Becomes a Woman"
  },
  {
    "canto": "9",
    "chapter": "10",
    "title": "The Pastimes of the Supreme Lord, Rāmacandra"
  },
  {
    "canto": "9",
    "chapter": "11",
    "title": "Lord Rāmacandra Rules the World"
  },
  {
    "canto": "9",
    "chapter": "12",
    "title": "The Dynasty of Kuśa, the Son of Lord Rāmacandra"
  },
  {
    "canto": "9",
    "chapter": "13",
    "title": "The Dynasty of Mahārāja Nimi"
  },
  {
    "canto": "9",
    "chapter": "14",
    "title": "King Purūravā Enchanted by Urvaśī"
  },
  {
    "canto": "9",
    "chapter": "15",
    "title": "Paraśurāma, the Lord’s Warrior Incarnation"
  },
  {
    "canto": "9",
    "chapter": "16",
    "title": "Lord Paraśurāma Destroys the World’s Ruling Class"
  },
  {
    "canto": "9",
    "chapter": "17",
    "title": "The Dynasties of the Sons of Purūravā"
  },
  {
    "canto": "9",
    "chapter": "18",
    "title": "King Yayāti Regains His Youth"
  },
  {
    "canto": "9",
    "chapter": "19",
    "title": "King Yayāti Achieves Liberation"
  },
  {
    "canto": "9",
    "chapter": "2",
    "title": "The Dynasties of the Sons of Manu"
  },
  {
    "canto": "9",
    "chapter": "20",
    "title": "The Dynasty of Pūru"
  },
  {
    "canto": "9",
    "chapter": "21",
    "title": "The Dynasty of Bharata"
  },
  {
    "canto": "9",
    "chapter": "22",
    "title": "The Descendants of Ajamīḍha"
  },
  {
    "canto": "9",
    "chapter": "23",
    "title": "The Dynasties of the Sons of Yayāti"
  },
  {
    "canto": "9",
    "chapter": "24",
    "title": "Kṛṣṇa, the Supreme Personality of Godhead"
  },
  {
    "canto": "9",
    "chapter": "3",
    "title": "The Marriage of Sukanyā and Cyavana Muni"
  },
  {
    "canto": "9",
    "chapter": "4",
    "title": "Ambarīṣa Mahārāja Offended by Durvāsā Muni"
  },
  {
    "canto": "9",
    "chapter": "5",
    "title": "Durvāsā Muni’s Life Spared"
  },
  {
    "canto": "9",
    "chapter": "6",
    "title": "The Downfall of Saubhari Muni"
  },
  {
    "canto": "9",
    "chapter": "7",
    "title": "The Descendants of King Māndhātā"
  },
  {
    "canto": "9",
    "chapter": "8",
    "title": "The Sons of Sagara Meet Lord Kapiladeva"
  },
  {
    "canto": "9",
    "chapter": "9",
    "title": "The Dynasty of Aṁśumān"
  }
]