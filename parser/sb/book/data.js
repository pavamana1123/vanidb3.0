const data = [
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "1",
    "verse": "oṁ namo bhagavate vāsudevāya\njanmādy asya yato 'nvayād itarataś cārtheṣv abhijñaḥ svarāṭ\ntene brahma hṛdā ya ādi-kavaye muhyanti yat sūrayaḥ\ntejo-vāri-mṛdāṁ yathā vinimayo yatra tri-sargo 'mṛṣā\ndhāmnā svena sadā nirasta-kuhakaṁ satyaṁ paraṁ dhīmahi",
    "devanagari": "ॐ नमो भगवते वासुदेवाय\nजन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञ: स्वराट्\nतेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरय: ।\nतेजोवारिमृदां यथा विनिमयो यत्र त्रिसर्गोऽमृषा\nधाम्ना स्वेन सदा निरस्तकुहकं सत्यं परं धीमहि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "2",
    "verse": "dharmaḥ projjhita-kaitavo 'tra paramo nirmatsarāṇāṁ satāṁ\nvedyaṁ vāstavam atra vastu śivadaṁ tāpa-trayonmūlanam\nśrīmad-bhāgavate mahā-muni-kṛte kiṁ vā parair īśvaraḥ\nsadyo hṛdy avarudhyate 'tra kṛtibhiḥ śuśrūṣubhis tat-kṣaṇāt",
    "devanagari": "धर्म: प्रोज्झितकैतवोऽत्र परमो निर्मत्सराणां सतां\nवेद्यं वास्तवमत्र वस्तु शिवदं तापत्रयोन्मूलनम् ।\nश्रीमद्भागवते महामुनिकृते किं वा परैरीश्वर:\nसद्यो हृद्यवरुध्यतेऽत्र कृतिभि: शुश्रूषुभिस्तत्क्षणात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "3",
    "verse": "nigama-kalpa-taror galitaṁ phalaṁ\nśuka-mukhād amṛta-drava-saṁyutam\npibata bhāgavataṁ rasam ālayaṁ\nmuhur aho rasikā bhuvi bhāvukāḥ",
    "devanagari": "निगमकल्पतरोर्गलितं फलं\nशुकमुखादमृतद्रवसंयुतम् ।\nपिबत भागवतं रसमालयं\nमुहुरहो रसिका भुवि भावुका: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "4",
    "verse": "naimiṣe 'nimiṣa-kṣetre\nṛṣayaḥ śaunakādayaḥ\nsatraṁ svargāya lokāya\nsahasra-samam āsata",
    "devanagari": "नैमिषेऽनिमिषक्षेत्रे ऋषय: शौनकादय: ।\nसत्रं स्वर्गायलोकाय सहस्रसममासत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "5",
    "verse": "ta ekadā tu munayaḥ\nprātar huta-hutāgnayaḥ\nsat-kṛtaṁ sūtam āsīnaṁ\npapracchur idam ādarāt",
    "devanagari": "त एकदा तु मुनय: प्रातर्हुतहुताग्नय: ।\nसत्कृतं सूतमासीनं पप्रच्छुरिदमादरात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "6",
    "verse": "ṛṣaya ūcuḥ\ntvayā khalu purāṇāni\nsetihāsāni cānagha\nākhyātāny apy adhītāni\ndharma-śāstrāṇi yāny uta",
    "devanagari": "त्वया खलु पुराणानि सेतिहासानि चानघ ।\nआख्यातान्यप्यधीतानि धर्मशास्त्राणि यान्युत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "7",
    "verse": "yāni veda-vidāṁ śreṣṭho\nbhagavān bādarāyaṇaḥ\nanye ca munayaḥ sūta\nparāvara-vido viduḥ",
    "devanagari": "यानि वेदविदां श्रेष्ठो भगवान् बादरायण: ।\nअन्ये च मुनय: सूत परावरविदो विदु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "8",
    "verse": "vettha tvaṁ saumya tat sarvaṁ\ntattvatas tad-anugrahāt\nbrūyuḥ snigdhasya śiṣyasya\nguravo guhyam apy uta",
    "devanagari": "वेत्थ त्वं सौम्य तत्सर्वं तत्त्वतस्तदनुग्रहात् ।\nब्रूयु: स्‍निग्धस्य शिष्यस्य गुरवो गुह्यमप्युत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "9",
    "verse": "tatra tatrāñjasāyuṣman\nbhavatā yad viniścitam\npuṁsām ekāntataḥ śreyas\ntan naḥ śaṁsitum arhasi",
    "devanagari": "तत्र तत्राञ्जसायुष्मन् भवता यद्विनिश्चितम् ।\nपुंसामेकान्तत: श्रेयस्तन्न: शंसितुमर्हसि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "10",
    "verse": "prāyeṇālpāyuṣaḥ sabhya\nkalāv asmin yuge janāḥ\nmandāḥ sumanda-matayo\nmanda-bhāgyā hy upadrutāḥ",
    "devanagari": "प्रायेणाल्पायुष: सभ्य कलावस्मिन् युगे जना: ।\nमन्दा: सुमन्दमतयो मन्दभाग्या ह्युपद्रुता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "11",
    "verse": "bhūrīṇi bhūri-karmāṇi\nśrotavyāni vibhāgaśaḥ\nataḥ sādho 'tra yat sāraṁ\nsamuddhṛtya manīṣayā\nbrūhi bhadrāya bhūtānāṁ\nyenātmā suprasīdati",
    "devanagari": "भूरीणि भूरिकर्माणि श्रोतव्यानि विभागश: ।\nअत: साधोऽत्र यत्सारं समुद्‍धृत्य मनीषया ।\nब्रूहि भद्रायभूतानां येनात्मा सुप्रसीदति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "12",
    "verse": "sūta jānāsi bhadraṁ te\nbhagavān sātvatāṁ patiḥ\ndevakyāṁ vasudevasya\njāto yasya cikīrṣayā",
    "devanagari": "सूत जानासि भद्रं ते भगवान् सात्वतां पति: ।\nदेवक्यां वसुदेवस्य जातो यस्य चिकीर्षया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "13",
    "verse": "tan naḥ śuśrūṣamāṇānām\narhasy aṅgānuvarṇitum\nyasyāvatāro bhūtānāṁ\nkṣemāya ca bhavāya ca",
    "devanagari": "तन्न: शुश्रूषमाणानामर्हस्यङ्गानुवर्णितुम् ।\nयस्यावतारो भूतानां क्षेमाय च भवाय च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "14",
    "verse": "āpannaḥ saṁsṛtiṁ ghorāṁ\nyan-nāma vivaśo gṛṇan\ntataḥ sadyo vimucyeta\nyad bibheti svayaṁ bhayam",
    "devanagari": "आपन्न: संसृतिं घोरां यन्नाम विवशो गृणन् ।\nतत: सद्यो विमुच्येत यद्ब‍िभेति स्वयं भयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "15",
    "verse": "yat-pāda-saṁśrayāḥ sūta\nmunayaḥ praśamāyanāḥ\nsadyaḥ punanty upaspṛṣṭāḥ\nsvardhuny-āpo 'nusevayā",
    "devanagari": "यत्पादसंश्रया: सूत मुनय: प्रशमायना: ।\nसद्य: पुनन्त्युपस्पृष्टा: स्वर्धुन्यापोऽनुसेवया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "16",
    "verse": "ko vā bhagavatas tasya\npuṇya-ślokeḍya-karmaṇaḥ\nśuddhi-kāmo na śṛṇuyād\nyaśaḥ kali-malāpaham",
    "devanagari": "को वा भगवतस्तस्य पुण्यश्लोकेड्यकर्मण: ।\nशुद्धिकामो न श‍ृणुयाद्यश: कलिमलापहम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "17",
    "verse": "tasya karmāṇy udārāṇi\nparigītāni sūribhiḥ\nbrūhi naḥ śraddadhānānāṁ\nlīlayā dadhataḥ kalāḥ",
    "devanagari": "तस्य कर्माण्युदाराणि परिगीतानि सूरिभि: ।\nब्रूहि न: श्रद्दधानानां लीलया दधत: कला: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "18",
    "verse": "athākhyāhi harer dhīmann\navatāra-kathāḥ śubhāḥ\nlīlā vidadhataḥ svairam\nīśvarasyātma-māyayā",
    "devanagari": "अथाख्याहिहरेर्धीमन्नवतारकथा: शुभा: ।\nलीला विदधत: स्वैरमीश्वरस्यात्ममायया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "19",
    "verse": "vayaṁ tu na vitṛpyāma\nuttama-śloka-vikrame\nyac-chṛṇvatāṁ rasa-jñānāṁ\nsvādu svādu pade pade",
    "devanagari": "वयं तु न वितृप्याम उत्तमश्लोकविक्रमे ।\nयच्छृण्वतां रसज्ञानां स्वादु स्वादु पदे पदे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "20",
    "verse": "kṛtavān kila karmāṇi\nsaha rāmeṇa keśavaḥ\natimartyāni bhagavān\ngūḍhaḥ kapaṭa-mānuṣaḥ",
    "devanagari": "कृतवान् किल कर्माणि सह रामेण केशव: ।\nअतिमर्त्यानि भगवान् गूढ: कपटमानुष: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "21",
    "verse": "kalim āgatam ājñāya\nkṣetre 'smin vaiṣṇave vayam\nāsīnā dīrgha-satreṇa\nkathāyāṁ sakṣaṇā hareḥ",
    "devanagari": "कलिमागतमाज्ञाय क्षेत्रेऽस्मिन् वैष्णवे वयम् ।\nआसीना दीर्घसत्रेण कथायां सक्षणा हरे: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "22",
    "verse": "tvaṁ naḥ sandarśito dhātrā\ndustaraṁ nistitīrṣatām\nkaliṁ sattva-haraṁ puṁsāṁ\nkarṇa-dhāra ivārṇavam",
    "devanagari": "त्वं न: सन्दर्शितो धात्रा दुस्तरं निस्तितीर्षताम् ।\nकलिं सत्त्वहरं पुंसां कर्णधार इवार्णवम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "1",
    "text": "23",
    "verse": "brūhi yogeśvare kṛṣṇe\nbrahmaṇye dharma-varmaṇi\nsvāṁ kāṣṭhām adhunopete\ndharmaḥ kaṁ śaraṇaṁ gataḥ",
    "devanagari": "ब्रूहि योगेश्वरे कृष्णे ब्रह्मण्ये धर्मवर्मणि ।\nस्वां काष्ठामधुनोपेते धर्म: कं शरणं गत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "1",
    "verse": "vyāsa uvāca\niti sampraśna-saṁhṛṣṭo\nviprāṇāṁ raumaharṣaṇiḥ\npratipūjya vacas teṣāṁ\npravaktum upacakrame",
    "devanagari": "व्यास उवाच\nइति सम्प्रश्नसंहृष्टो विप्राणां रौमहर्षणि: ।\nप्रतिपूज्य वचस्तेषां प्रवक्तुमुपचक्रमे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "2",
    "verse": "sūta uvāca\nyaṁ pravrajantam anupetam apeta-kṛtyaṁ\ndvaipāyano viraha-kātara ājuhāva\nputreti tan-mayatayā taravo 'bhinedus\ntaṁ sarva-bhūta-hṛdayaṁ munim ānato 'smi",
    "devanagari": "सूत उवाच\nयं प्रव्रजन्तमनुपेतमपेतकृत्यं\nद्वैपायनो विरहकातर आजुहाव ।\nपुत्रेति तन्मयतया तरवोऽभिनेदु-\nस्तं सर्वभूतहृदयं मुनिमानतोऽस्मि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "3",
    "verse": "yaḥ svānubhāvam akhila-śruti-sāram ekam\nadhyātma-dīpam atititīrṣatāṁ tamo 'ndham\nsaṁsāriṇāṁ karuṇayāha purāṇa-guhyaṁ\ntaṁ vyāsa-sūnum upayāmi guruṁ munīnām",
    "devanagari": "य: स्वानुभावमखिलश्रुतिसारमेक-\nमध्यात्मदीपमतितितीर्षतां तमोऽन्धम् ।\nसंसारिणां करुणयाह पुराणगुह्यं\nतं व्याससूनुमुपयामि गुरुं मुनीनाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "4",
    "verse": "nārāyaṇaṁ namaskṛtya\nnaraṁ caiva narottamam\ndevīṁ sarasvatīṁ vyāsaṁ\ntato jayam udīrayet",
    "devanagari": "नारायणं नमस्कृत्य नरं चैव नरोत्तमम् ।\nदेवीं सरस्वतीं व्यासं ततो जयमुदीरयेत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "5",
    "verse": "munayaḥ sādhu pṛṣṭo 'haṁ\nbhavadbhir loka-maṅgalam\nyat kṛtaḥ kṛṣṇa-sampraśno\nyenātmā suprasīdati",
    "devanagari": "मुनय: साधु पृष्टोऽहं भवद्भ‍िर्लोकमङ्गलम् ।\nयत्कृत: कृष्णसम्प्रश्नो येनात्मा सुप्रसीदति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "6",
    "verse": "sa vai puṁsāṁ paro dharmo\nyato bhaktir adhokṣaje\nahaituky apratihatā\nyayātmā suprasīdati",
    "devanagari": "स वै पुंसां परो धर्मो यतो भक्तिरधोक्षजे ।\nअहैतुक्यप्रतिहता ययात्मा सुप्रसीदति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "7",
    "verse": "vāsudeve bhagavati\nbhakti-yogaḥ prayojitaḥ\njanayaty āśu vairāgyaṁ\njñānaṁ ca yad ahaitukam",
    "devanagari": "वासुदेवे भगवति भक्तियोग: प्रयोजित: ।\nजनयत्याशु वैराग्यं ज्ञानं च यदहैतुकम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "8",
    "verse": "dharmaḥ svanuṣṭhitaḥ puṁsāṁ\nviṣvaksena-kathāsu yaḥ\nnotpādayed yadi ratiṁ\nśrama eva hi kevalam",
    "devanagari": "धर्म: स्वनुष्ठित: पुंसां विष्वक्सेनकथासु य: ।\nनोत्पादयेद्यदि रतिं श्रम एव हि केवलम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "9",
    "verse": "dharmasya hy āpavargyasya\nnārtho 'rthāyopakalpate\nnārthasya dharmaikāntasya\nkāmo lābhāya hi smṛtaḥ",
    "devanagari": "धर्मस्य ह्यापवर्ग्यस्य नार्थोऽर्थायोपकल्पते ।\nनार्थस्य धर्मैकान्तस्य कामो लाभाय हि स्मृत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "10",
    "verse": "kāmasya nendriya-prītir\nlābho jīveta yāvatā\njīvasya tattva-jijñāsā\nnārtho yaś ceha karmabhiḥ",
    "devanagari": "कामस्य नेन्द्रियप्रीतिर्लाभो जीवेत यावता ।\nजीवस्य तत्त्वजिज्ञासा नार्थो यश्चेह कर्मभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "11",
    "verse": "vadanti tat tattva-vidas\ntattvaṁ yaj jñānam advayam\nbrahmeti paramātmeti\nbhagavān iti śabdyate",
    "devanagari": "वदन्ति तत्तत्त्वविदस्तत्त्वं यज्ज्ञानमद्वयम् ।\nब्रह्मेति परमात्मेति भगवानिति शब्द्यते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "12",
    "verse": "tac chraddadhānā munayo\njñāna-vairāgya-yuktayā\npaśyanty ātmani cātmānaṁ\nbhaktyā śruta-gṛhītayā",
    "devanagari": "तच्छ्रद्दधाना मुनयो ज्ञानवैराग्ययुक्तया ।\nपश्यन्त्यात्मनि चात्मानं भक्त्या श्रुतगृहीतया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "13",
    "verse": "ataḥ pumbhir dvija-śreṣṭhā\nvarṇāśrama-vibhāgaśaḥ\nsvanuṣṭhitasya dharmasya\nsaṁsiddhir hari-toṣaṇam",
    "devanagari": "अत: पुम्भिर्द्विजश्रेष्ठा वर्णाश्रमविभागश: ।\nस्वनुष्ठितस्य धर्मस्य संसिद्धिर्हरितोषणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "14",
    "verse": "tasmād ekena manasā\nbhagavān sātvatāṁ patiḥ\nśrotavyaḥ kīrtitavyaś ca\ndhyeyaḥ pūjyaś ca nityadā",
    "devanagari": "तस्मादेकेन मनसा भगवान् सात्वतां पति: ।\nश्रोतव्य: कीर्तितव्यश्च ध्येय: पूज्यश्च नित्यदा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "15",
    "verse": "yad-anudhyāsinā yuktāḥ\nkarma-granthi-nibandhanam\nchindanti kovidās tasya\nko na kuryāt kathā-ratim",
    "devanagari": "यदनुध्यासिना युक्ता: कर्मग्रन्थिनिबन्धनम् ।\nछिन्दन्ति कोविदास्तस्य को न कुर्यात्कथारतिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "16",
    "verse": "śuśrūṣoḥ śraddadhānasya\nvāsudeva-kathā-ruciḥ\nsyān mahat-sevayā viprāḥ\npuṇya-tīrtha-niṣevaṇāt",
    "devanagari": "शुश्रूषो: श्रद्दधानस्य वासुदेवकथारुचि: ।\nस्यान्महत्सेवया विप्रा: पुण्यतीर्थनिषेवणात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "17",
    "verse": "śṛṇvatāṁ sva-kathāḥ kṛṣṇaḥ\npuṇya-śravaṇa-kīrtanaḥ\nhṛdy antaḥ stho hy abhadrāṇi\nvidhunoti suhṛt satām",
    "devanagari": "श‍ृण्वतां स्वकथा: कृष्ण: पुण्यश्रवणकीर्तन: ।\nहृद्यन्त:स्थो ह्यभद्राणि विधुनोति सुहृत्सताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "18",
    "verse": "naṣṭa-prāyeṣv abhadreṣu\nnityaṁ bhāgavata-sevayā\nbhagavaty uttama-śloke\nbhaktir bhavati naiṣṭhikī",
    "devanagari": "नष्टप्रायेष्वभद्रेषु नित्यं भागवतसेवया ।\nभगवत्युत्तमश्लोके भक्तिर्भवति नैष्ठिकी ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "19",
    "verse": "tadā rajas-tamo-bhāvāḥ\nkāma-lobhādayaś ca ye\nceta etair anāviddhaṁ\nsthitaṁ sattve prasīdati",
    "devanagari": "तदा रजस्तमोभावा: कामलोभादयश्च ये ।\nचेत एतैरनाविद्धं स्थितं सत्त्वे प्रसीदति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "20",
    "verse": "evaṁ prasanna-manaso\nbhagavad-bhakti-yogataḥ\nbhagavat-tattva-vijñānaṁ\nmukta-saṅgasya jāyate",
    "devanagari": "एवं प्रसन्नमनसो भगवद्भक्तियोगत: ।\nभगवत्तत्त्वविज्ञानं मुक्तसङ्गस्य जायते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "21",
    "verse": "bhidyate hṛdaya-granthiś\nchidyante sarva-saṁśayāḥ\nkṣīyante cāsya karmāṇi\ndṛṣṭa evātmanīśvare",
    "devanagari": "भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशया: ।\nक्षीयन्ते चास्य कर्माणि द‍ृष्ट एवात्मनीश्वरे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "22",
    "verse": "ato vai kavayo nityaṁ\nbhaktiṁ paramayā mudā\nvāsudeve bhagavati\nkurvanty ātma-prasādanīm",
    "devanagari": "अतो वै कवयो नित्यं भक्तिं परमया मुदा ।\nवासुदेवे भगवति कुर्वन्त्यात्मप्रसादनीम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "23",
    "verse": "sattvaṁ rajas tama iti prakṛter guṇās tair\nyuktaḥ paraḥ puruṣa eka ihāsya dhatte\nsthity-ādaye hari-viriñci-hareti saṁjñāḥ\nśreyāṁsi tatra khalu sattva-tanor nṛṇāṁ syuḥ",
    "devanagari": "सत्त्वं रजस्तम इति प्रकृतेर्गुणास्तै-\nर्युक्त: पर: पुरुष एक इहास्य धत्ते ।\nस्थित्यादये हरिविरिञ्चिहरेति संज्ञा:\nश्रेयांसि तत्र खलु सत्त्वतनोर्नृणां स्यु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "24",
    "verse": "pārthivād dāruṇo dhūmas\ntasmād agnis trayīmayaḥ\ntamasas tu rajas tasmāt\nsattvaṁ yad brahma-darśanam",
    "devanagari": "पार्थिवाद्दारुणो धूमस्तस्मादग्निस्त्रयीमय: ।\nतमसस्तु रजस्तस्मात्सत्त्वं यद्ब्रह्मदर्शनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "25",
    "verse": "bhejire munayo 'thāgre\nbhagavantam adhokṣajam\nsattvaṁ viśuddhaṁ kṣemāya\nkalpante ye 'nu tān iha",
    "devanagari": "भेजिरे मुनयोऽथाग्रे भगवन्तमधोक्षजम् ।\nसत्त्वं विशुद्धं क्षेमाय कल्पन्ते येऽनु तानिह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "26",
    "verse": "mumukṣavo ghora-rūpān\nhitvā bhūta-patīn atha\nnārāyaṇa-kalāḥ śāntā\nbhajanti hy anasūyavaḥ",
    "devanagari": "मुमुक्षवो घोररूपान् हित्वा भूतपतीनथ ।\nनारायणकला: शान्ता भजन्ति ह्यनसूयव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "27",
    "verse": "rajas-tamaḥ-prakṛtayaḥ\nsama-śīlā bhajanti vai\npitṛ-bhūta-prajeśādīn\nśriyaiśvarya-prajepsavaḥ",
    "devanagari": "रजस्तम:प्रकृतय: समशीला भजन्ति वै ।\nपितृभूतप्रजेशादीन्श्रियैश्वर्यप्रजेप्सव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "28",
    "verse": "vāsudeva-parā vedā\nvāsudeva-parā makhāḥ\nvāsudeva-parā yogā\nvāsudeva-parāḥ kriyāḥ",
    "devanagari": "वासुदेवपरा वेदा वासुदेवपरा मखा: ।\nवासुदेवपरा योगा वासुदेवपरा: क्रिया: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "29",
    "verse": "vāsudeva-paraṁ jñānaṁ\nvāsudeva-paraṁ tapaḥ\nvāsudeva-paro dharmo\nvāsudeva-parā gatiḥ",
    "devanagari": "वासुदेवपरं ज्ञानं वासुदेवपरं तप: ।\nवासुदेवपरो धर्मो वासुदेवपरा गति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "30",
    "verse": "sa evedaṁ sasarjāgre\nbhagavān ātma-māyayā\nsad-asad-rūpayā cāsau\nguṇamayāguṇo vibhuḥ",
    "devanagari": "स एवेदं ससर्जाग्रे भगवानात्ममायया ।\nसदसद्रूपया चासौ गुणमयागुणो विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "31",
    "verse": "tayā vilasiteṣv eṣu\nguṇeṣu guṇavān iva\nantaḥ-praviṣṭa ābhāti\nvijñānena vijṛmbhitaḥ",
    "devanagari": "तया विलसितेष्वेषु गुणेषु गुणवानिव ।\nअन्त:प्रविष्ट आभाति विज्ञानेन विजृम्भित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "32",
    "verse": "yathā hy avahito vahnir\ndāruṣv ekaḥ sva-yoniṣu\nnāneva bhāti viśvātmā\nbhūteṣu ca tathā pumān",
    "devanagari": "यथा ह्यवहितो वह्निर्दारुष्वेक: स्वयोनिषु ।\nनानेव भाति विश्वात्मा भूतेषु च तथा पुमान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "33",
    "verse": "asau guṇamayair bhāvair\nbhūta-sūkṣmendriyātmabhiḥ\nsva-nirmiteṣu nirviṣṭo\nbhuṅkte bhūteṣu tad-guṇān",
    "devanagari": "असौ गुणमयैर्भावैर्भूतसूक्ष्मेन्द्रियात्मभि: ।\nस्वनिर्मितेषु निर्विष्टो भुङ्क्ते भूतेषु तद्गुणान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "2",
    "text": "34",
    "verse": "bhāvayaty eṣa sattvena\nlokān vai loka-bhāvanaḥ\nlīlāvatārānurato\ndeva-tiryaṅ-narādiṣu",
    "devanagari": "भावयत्येष सत्त्वेन लोकान् वै लोकभावन: ।\nलीलावतारानुरतो देवतिर्यङ्‍नरादिषु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "1",
    "verse": "sūta uvāca\njagṛhe pauruṣaṁ rūpaṁ\nbhagavān mahad-ādibhiḥ\nsambhūtaṁ ṣoḍaśa-kalam\nādau loka-sisṛkṣayā",
    "devanagari": "सूत उवाच\nजगृहे पौरुषं रूपं भगवान्महदादिभि: ।\nसम्भूतं षोडशकलमादौ लोकसिसृक्षया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "2",
    "verse": "yasyāmbhasi śayānasya\nyoga-nidrāṁ vitanvataḥ\nnābhi-hradāmbujād āsīd\nbrahmā viśva-sṛjāṁ patiḥ",
    "devanagari": "यस्याम्भसि शयानस्य योगनिद्रां वितन्वत: ।\nनाभिह्रदाम्बुजादासीद्ब्रह्मा विश्वसृजां पति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "3",
    "verse": "yasyāvayava-saṁsthānaiḥ\nkalpito loka-vistaraḥ\ntad vai bhagavato rūpaṁ\nviśuddhaṁ sattvam ūrjitam",
    "devanagari": "यस्यावयवसंस्थानै: कल्पितो लोकविस्तर: ।\nतद्वै भगवतो रूपं विशुद्धं सत्त्वमूर्जितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "4",
    "verse": "paśyanty ado rūpam adabhra-cakṣuṣā\nsahasra-pādoru-bhujānanādbhutam\nsahasra-mūrdha-śravaṇākṣi-nāsikaṁ\nsahasra-mauly-ambara-kuṇḍalollasat",
    "devanagari": "पश्यन्त्यदो रूपमदभ्रचक्षुषा\nसहस्रपादोरुभुजाननाद्भुतम् ।\nसहस्रमूर्धश्रवणाक्षिनासिकं\nसहस्रमौल्यम्बरकुण्डलोल्लसत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "5",
    "verse": "etan nānāvatārāṇāṁ\nnidhānaṁ bījam avyayam\nyasyāṁśāṁśena sṛjyante\ndeva-tiryaṅ-narādayaḥ",
    "devanagari": "एतन्नानावताराणां निधानं बीजमव्ययम् ।\nयस्यांशांशेन सृज्यन्ते देवतिर्यङ्‍नरादय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "6",
    "verse": "sa eva prathamaṁ devaḥ\nkaumāraṁ sargam āśritaḥ\ncacāra duścaraṁ brahmā\nbrahmacaryam akhaṇḍitam",
    "devanagari": "स एव प्रथमं देव: कौमारं सर्गमाश्रित: ।\nचचार दुश्चरं ब्रह्मा ब्रह्मचर्यमखण्डितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "7",
    "verse": "dvitīyaṁ tu bhavāyāsya\nrasātala-gatāṁ mahīm\nuddhariṣyann upādatta\nyajñeśaḥ saukaraṁ vapuḥ",
    "devanagari": "द्वितीयं तु भवायास्य रसातलगतां महीम् ।\nउद्धरिष्यन्नुपादत्त यज्ञेश: सौकरं वपु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "8",
    "verse": "tṛtīyam ṛṣi-sargaṁ vai\ndevarṣitvam upetya saḥ\ntantraṁ sātvatam ācaṣṭa\nnaiṣkarmyaṁ karmaṇāṁ yataḥ",
    "devanagari": "तृतीयमृषिसर्गं वै देवर्षित्वमुपेत्य स: ।\nतन्त्रं सात्वतमाचष्ट नैष्कर्म्यं कर्मणां यत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "9",
    "verse": "turye dharma-kalā-sarge\nnara-nārāyaṇāv ṛṣī\nbhūtvātmopaśamopetam\nakarod duścaraṁ tapaḥ",
    "devanagari": "तुर्ये धर्मकलासर्गे नरनारायणावृषी ।\nभूत्वात्मोपशमोपेतमकरोद्दुश्चरं तप: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "10",
    "verse": "pañcamaḥ kapilo nāma\nsiddheśaḥ kāla-viplutam\nprovācāsuraye sāṅkhyaṁ\ntattva-grāma-vinirṇayam",
    "devanagari": "पञ्चम: कपिलो नाम सिद्धेश: कालविप्लुतम् ।\nप्रोवाचासुरये साङ्ख्यं तत्त्वग्रामविनिर्णयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "11",
    "verse": "ṣaṣṭham atrer apatyatvaṁ\nvṛtaḥ prāpto 'nasūyayā\nānvīkṣikīm alarkāya\nprahlādādibhya ūcivān",
    "devanagari": "षष्ठमत्रेरपत्यत्वं वृत: प्राप्तोऽनसूयया ।\nआन्वीक्षिकीमलर्काय प्रह्लादादिभ्य ऊचिवान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "12",
    "verse": "tataḥ saptama ākūtyāṁ\nrucer yajño 'bhyajāyata\nsa yāmādyaiḥ sura-gaṇair\napāt svāyambhuvāntaram",
    "devanagari": "तत: सप्तम आकूत्यां रुचेर्यज्ञोऽभ्यजायत ।\nस यामाद्यै: सुरगणैरपात्स्वायम्भुवान्तरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "13",
    "verse": "aṣṭame merudevyāṁ tu\nnābher jāta urukramaḥ\ndarśayan vartma dhīrāṇāṁ\nsarvāśrama-namaskṛtam",
    "devanagari": "अष्टमे मेरुदेव्यां तु नाभेर्जात उरुक्रम: ।\nदर्शयन् वर्त्म धीराणां सर्वाश्रमनमस्कृतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "14",
    "verse": "ṛṣibhir yācito bheje\nnavamaṁ pārthivaṁ vapuḥ\ndugdhemām oṣadhīr viprās\ntenāyaṁ sa uśattamaḥ",
    "devanagari": "ऋषिभिर्याचितो भेजे नवमं पार्थिवं वपु: ।\nदुग्धेमामोषधीर्विप्रास्तेनायं स उशत्तम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "15",
    "verse": "rūpaṁ sa jagṛhe mātsyaṁ\ncākṣuṣodadhi-samplave\nnāvy āropya mahī-mayyām\napād vaivasvataṁ manum",
    "devanagari": "रूपं स जगृहे मात्स्यं चाक्षुषोदधिसम्प्लवे ।\nनाव्यारोप्य महीमय्यामपाद्वैवस्वतं मनुम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "16",
    "verse": "surāsurāṇām udadhiṁ\nmathnatāṁ mandarācalam\ndadhre kamaṭha-rūpeṇa\npṛṣṭha ekādaśe vibhuḥ",
    "devanagari": "सुरासुराणामुदधिं मथ्नतां मन्दराचलम् ।\nदध्रे कमठरूपेण पृष्ठ एकादशे विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "17",
    "verse": "dhānvantaraṁ dvādaśamaṁ\ntrayodaśamam eva ca\napāyayat surān anyān\nmohinyā mohayan striyā",
    "devanagari": "धान्वन्तरं द्वादशमं त्रयोदशममेव च ।\nअपाययत्सुरानन्यान्मोहिन्या मोहयन् स्त्रिया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "18",
    "verse": "caturdaśaṁ nārasiṁhaṁ\nbibhrad daityendram ūrjitam\ndadāra karajair ūrāv\nerakāṁ kaṭa-kṛd yathā",
    "devanagari": "चतुर्दशं नारसिंहं बिभ्रद्दैत्येन्द्रमूर्जितम् ।\nददार करजैरूरावेरकां कटकृद्यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "19",
    "verse": "pañcadaśaṁ vāmanakaṁ\nkṛtvāgād adhvaraṁ baleḥ\npada-trayaṁ yācamānaḥ\npratyāditsus tri-piṣṭapam",
    "devanagari": "पञ्चदशं वामनकं कृत्वागादध्वरं बले: ।\nपदत्रयं याचमान: प्रत्यादित्सुस्त्रिपिष्टपम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "20",
    "verse": "avatāre ṣoḍaśame\npaśyan brahma-druho nṛpān\ntriḥ-sapta-kṛtvaḥ kupito\nniḥ-kṣatrām akaron mahīm",
    "devanagari": "अवतारे षोडशमे पश्यन् ब्रह्मद्रुहो नृपान् ।\nत्रि:सप्तकृत्व: कुपितो नि:क्षत्रामकरोन्महीम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "21",
    "verse": "tataḥ saptadaśe jātaḥ\nsatyavatyāṁ parāśarāt\ncakre veda-taroḥ śākhā\ndṛṣṭvā puṁso 'lpa-medhasaḥ",
    "devanagari": "तत: सप्तदशे जात: सत्यवत्यां पराशरात् ।\nचक्रे वेदतरो: शाखा द‍ृष्ट्वा पुंसोऽल्पमेधस: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "22",
    "verse": "nara-devatvam āpannaḥ\nsura-kārya-cikīrṣayā\nsamudra-nigrahādīni\ncakre vīryāṇy ataḥ param",
    "devanagari": "नरदेवत्वमापन्न: सुरकार्यचिकीर्षया ।\nसमुद्रनिग्रहादीनि चक्रे वीर्याण्यत: परम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "23",
    "verse": "ekonaviṁśe viṁśatime\nvṛṣṇiṣu prāpya janmanī\nrāma-kṛṣṇāv iti bhuvo\nbhagavān aharad bharam",
    "devanagari": "एकोनविंशे विंशतिमे वृष्णिषु प्राप्य जन्मनी ।\nरामकृष्णाविति भुवो भगवानहरद्भ‍रम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "24",
    "verse": "tataḥ kalau sampravṛtte\nsammohāya sura-dviṣām\nbuddho nāmnāñjana-sutaḥ\nkīkaṭeṣu bhaviṣyati",
    "devanagari": "तत: कलौ सम्प्रवृत्ते सम्मोहाय सुरद्विषाम् ।\nबुद्धो नाम्नाञ्जनसुत: कीकटेषु भविष्यति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "25",
    "verse": "athāsau yuga-sandhyāyāṁ\ndasyu-prāyeṣu rājasu\njanitā viṣṇu-yaśaso\nnāmnā kalkir jagat-patiḥ",
    "devanagari": "अथासौ युगसन्ध्यायां दस्युप्रायेषु राजसु ।\nजनिता विष्णुयशसो नाम्ना कल्किर्जगत्पति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "26",
    "verse": "avatārā hy asaṅkhyeyā\nhareḥ sattva-nidher dvijāḥ\nyathāvidāsinaḥ kulyāḥ\nsarasaḥ syuḥ sahasraśaḥ",
    "devanagari": "अवतारा ह्यसङ्ख्येया हरे: सत्त्वनिधेर्द्विजा: ।\nयथाविदासिन: कुल्या: सरस: स्यु: सहस्रश: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "27",
    "verse": "ṛṣayo manavo devā\nmanu-putrā mahaujasaḥ\nkalāḥ sarve harer eva\nsaprajāpatayaḥ smṛtāḥ",
    "devanagari": "ऋषयो मनवो देवा मनुपुत्रा महौजस: ।\nकला: सर्वे हरेरेव सप्रजापतय: स्मृता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "28",
    "verse": "ete cāṁśa-kalāḥ puṁsaḥ\nkṛṣṇas tu bhagavān svayam\nindrāri-vyākulaṁ lokaṁ\nmṛḍayanti yuge yuge",
    "devanagari": "एते चांशकला: पुंस: कृष्णस्तु भगवान् स्वयम् ।\nइन्द्रारिव्याकुलं लोकं मृडयन्ति युगे युगे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "29",
    "verse": "janma guhyaṁ bhagavato\nya etat prayato naraḥ\nsāyaṁ prātar gṛṇan bhaktyā\nduḥkha-grāmād vimucyate",
    "devanagari": "जन्म गुह्यं भगवतो य एतत्प्रयतो नर: ।\nसायं प्रातर्गृणन् भक्त्या दु:खग्रामाद्विमुच्यते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "30",
    "verse": "etad rūpaṁ bhagavato\nhy arūpasya cid-ātmanaḥ\nmāyā-guṇair viracitaṁ\nmahadādibhir ātmani",
    "devanagari": "एतद्रूपं भगवतो ह्यरूपस्य चिदात्मन: ।\nमायागुणैर्विरचितं महदादिभिरात्मनि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "31",
    "verse": "yathā nabhasi meghaugho\nreṇur vā pārthivo 'nile\nevaṁ draṣṭari dṛśyatvam\nāropitam abuddhibhiḥ",
    "devanagari": "यथा नभसि मेघौघो रेणुर्वा पार्थिवोऽनिले ।\nएवं द्रष्टरि द‍ृश्यत्वमारोपितमबुद्धिभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "32",
    "verse": "ataḥ paraṁ yad avyaktam\navyūḍha-guṇa-bṛṁhitam\nadṛṣṭāśruta-vastutvāt\nsa jīvo yat punar-bhavaḥ",
    "devanagari": "अत: परं यदव्यक्तमव्यूढगुणबृंहितम् ।\nअद‍ृष्टाश्रुतवस्तुत्वात्स जीवो यत्पुनर्भव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "33",
    "verse": "yatreme sad-asad-rūpe\npratiṣiddhe sva-saṁvidā\navidyayātmani kṛte\niti tad brahma-darśanam",
    "devanagari": "यत्रेमे सदसद्रूपे प्रतिषिद्धे स्वसंविदा ।\nअविद्ययात्मनि कृते इति तद्ब्रह्मदर्शनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "34",
    "verse": "yady eṣoparatā devī\nmāyā vaiśāradī matiḥ\nsampanna eveti vidur\nmahimni sve mahīyate",
    "devanagari": "यद्येषोपरता देवी माया वैशारदी मति: ।\nसम्पन्न एवेति विदुर्महिम्नि स्वे महीयते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "35",
    "verse": "evaṁ janmāni karmāṇi\nhy akartur ajanasya ca\nvarṇayanti sma kavayo\nveda-guhyāni hṛt-pateḥ",
    "devanagari": "एवं जन्मानि कर्माणि ह्यकर्तुरजनस्य च ।\nवर्णयन्ति स्म कवयो वेदगुह्यानि हृत्पते: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "36",
    "verse": "sa vā idaṁ viśvam amogha-līlaḥ\nsṛjaty avaty atti na sajjate 'smin\nbhūteṣu cāntarhita ātma-tantraḥ\nṣāḍ-vargikaṁ jighrati ṣaḍ-guṇeśaḥ",
    "devanagari": "स वा इदं विश्वममोघलील:\nसृजत्यवत्यत्ति न सज्जतेऽस्मिन् ।\nभूतेषु चान्तर्हित आत्मतन्त्र:\nषाड्‍वर्गिकं जिघ्रति षड्‍गुणेश: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "37",
    "verse": "na cāsya kaścin nipuṇena dhātur\navaiti jantuḥ kumanīṣa ūtīḥ\nnāmāni rūpāṇi mano-vacobhiḥ\nsantanvato naṭa-caryām ivājñaḥ",
    "devanagari": "न चास्य कश्चिन्निपुणेन धातु-\nरवैति जन्तु: कुमनीष ऊती: ।\nनामानि रूपाणि मनोवचोभि:\nसन्तन्वतो नटचर्यामिवाज्ञ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "38",
    "verse": "sa veda dhātuḥ padavīṁ parasya\nduranta-vīryasya rathāṅga-pāṇeḥ\nyo 'māyayā santatayānuvṛttyā\nbhajeta tat-pāda-saroja-gandham",
    "devanagari": "स वेद धातु: पदवीं परस्य\nदुरन्तवीर्यस्य रथाङ्गपाणे: ।\nयोऽमायया सन्ततयानुवृत्त्या\nभजेत तत्पादसरोजगन्धम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "39",
    "verse": "atheha dhanyā bhagavanta itthaṁ\nyad vāsudeve 'khila-loka-nāthe\nkurvanti sarvātmakam ātma-bhāvaṁ\nna yatra bhūyaḥ parivarta ugraḥ",
    "devanagari": "अथेह धन्या भगवन्त इत्थं\nयद्वासुदेवेऽखिललोकनाथे ।\nकुर्वन्ति सर्वात्मकमात्मभावं\nन यत्र भूय: परिवर्त उग्र: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "40",
    "verse": "idaṁ bhāgavataṁ nāma\npurāṇaṁ brahma-sammitam\nuttama-śloka-caritaṁ\ncakāra bhagavān ṛṣiḥ\nniḥśreyasāya lokasya\ndhanyaṁ svasty-ayanaṁ mahat",
    "devanagari": "इदं भागवतं नाम पुराणं ब्रह्मसम्मितम् ।\nउत्तमश्लोकचरितं चकार भगवानृषि: ।\nनि:श्रेयसाय लोकस्य धन्यं स्वस्त्ययनं महत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "41",
    "verse": "tad idaṁ grāhayām āsa\nsutam ātmavatāṁ varam\nsarva-vedetihāsānāṁ\nsāraṁ sāraṁ samuddhṛtam",
    "devanagari": "तदिदं ग्राहयामास सुतमात्मवतां वरम् ।\nसर्ववेदेतिहासानां सारं सारं समुद्‍धृतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "42",
    "verse": "sa tu saṁśrāvayām āsa\nmahārājaṁ parīkṣitam\nprāyopaviṣṭaṁ gaṅgāyāṁ\nparītaṁ paramarṣibhiḥ",
    "devanagari": "स तु संश्रावयामास महाराजं परीक्षितम् ।\nप्रायोपविष्टं गङ्गायां परीतं परमर्षिभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "43",
    "verse": "kṛṣṇe sva-dhāmopagate\ndharma-jñānādibhiḥ saha\nkalau naṣṭa-dṛśām eṣa\npurāṇārko 'dhunoditaḥ",
    "devanagari": "कृष्णे स्वधामोपगते धर्मज्ञानादिभि: सह ।\nकलौ नष्टद‍ृशामेष पुराणार्कोऽधुनोदित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "3",
    "text": "44",
    "verse": "tatra kīrtayato viprā\nviprarṣer bhūri-tejasaḥ\nahaṁ cādhyagamaṁ tatra\nniviṣṭas tad-anugrahāt\nso 'haṁ vaḥ śrāvayiṣyāmi\nyathādhītaṁ yathā-mati",
    "devanagari": "तत्र कीर्तयतो विप्रा विप्रर्षेर्भूरितेजस: ।\nअहं चाध्यगमं तत्र निविष्टस्तदनुग्रहात् ।\nसोऽहं व: श्रावयिष्यामि यथाधीतं यथामति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "1",
    "verse": "vyāsa uvāca\niti bruvāṇaṁ saṁstūya\nmunīnāṁ dīrgha-satriṇām\nvṛddhaḥ kula-patiḥ sūtaṁ\nbahvṛcaḥ śaunako 'bravīt",
    "devanagari": "व्यास उवाच\nइति ब्रुवाणं संस्तूय मुनीनां दीर्घसत्रिणाम् ।\nवृद्ध: कुलपति: सूतं बह्‌वृच: शौनकोऽब्रवीत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "2",
    "verse": "śaunaka uvāca\nsūta sūta mahā-bhāga\nvada no vadatāṁ vara\nkathāṁ bhāgavatīṁ puṇyāṁ\nyad āha bhagavāñ chukaḥ",
    "devanagari": "शौनक उवाच\nसूत सूत महाभाग वद नो वदतां वर ।\nकथां भागवतीं पुण्यां यदाह भगवाञ्छुक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "3",
    "verse": "kasmin yuge pravṛtteyaṁ\nsthāne vā kena hetunā\nkutaḥ sañcoditaḥ kṛṣṇaḥ\nkṛtavān saṁhitāṁ muniḥ",
    "devanagari": "कस्मिन् युगे प्रवृत्तेयं स्थाने वा केन हेतुना ।\nकुत: सञ्चोदित: कृष्ण: कृतवान् संहितां मुनि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "4",
    "verse": "tasya putro mahā-yogī\nsama-dṛṅ nirvikalpakaḥ\nekānta-matir unnidro\ngūḍho mūḍha iveyate",
    "devanagari": "तस्य पुत्रो महायोगी समद‍ृङ्‍‌निर्विकल्पक: ।\nएकान्तमतिरुन्निद्रो गूढो मूढ इवेयते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "5",
    "verse": "dṛṣṭvānuyāntam ṛṣim ātmajam apy anagnaṁ\ndevyo hriyā paridadhur na sutasya citram\ntad vīkṣya pṛcchati munau jagadus tavāsti\nstrī-pum-bhidā na tu sutasya vivikta-dṛṣṭeḥ",
    "devanagari": "द‍ृष्ट्वानुयान्तमृषिमात्मजमप्यनग्नं\nदेव्यो ह्रिया परिदधुर्न सुतस्य चित्रम् ।\nतद्वीक्ष्य पृच्छति मुनौ जगदुस्तवास्ति\nस्त्रीपुम्भिदा न तु सुतस्य विविक्तद‍ृष्टे: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "6",
    "verse": "katham ālakṣitaḥ pauraiḥ\nsamprāptaḥ kuru-jāṅgalān\nunmatta-mūka-jaḍavad\nvicaran gaja-sāhvaye",
    "devanagari": "कथमालक्षित: पौरै: सम्प्राप्त: कुरुजाङ्गलान् ।\nउन्मत्तमूकजडवद्विचरन् गजसाह्वये ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "7",
    "verse": "kathaṁ vā pāṇḍaveyasya\nrājarṣer muninā saha\nsaṁvādaḥ samabhūt tāta\nyatraiṣā sātvatī śrutiḥ",
    "devanagari": "कथं वा पाण्डवेयस्य राजर्षेर्मुनिना सह ।\nसंवाद: समभूत्तात यत्रैषा सात्वती श्रुति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "8",
    "verse": "sa go-dohana-mātraṁ hi\ngṛheṣu gṛha-medhinām\navekṣate mahā-bhāgas\ntīrthī-kurvaṁs tad āśramam",
    "devanagari": "स गोदोहनमात्रं हि गृहेषु गृहमेधिनाम् ।\nअवेक्षते महाभागस्तीर्थीकुर्वंस्तदाश्रमम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "9",
    "verse": "abhimanyu-sutaṁ sūta\nprāhur bhāgavatottamam\ntasya janma mahāścaryaṁ\nkarmāṇi ca gṛṇīhi naḥ",
    "devanagari": "अभिमन्युसुतं सूत प्राहुर्भागवतोत्तमम् ।\nतस्य जन्म महाश्चर्यं कर्माणि च गृणीहि न: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "10",
    "verse": "sa samrāṭ kasya vā hetoḥ\npāṇḍūnāṁ māna-vardhanaḥ\nprāyopaviṣṭo gaṅgāyām\nanādṛtyādhirāṭ-śriyam",
    "devanagari": "स सम्राट् कस्य वा हेतो: पाण्डूनां मानवर्धन: ।\nप्रायोपविष्टो गङ्गायामनाद‍ृत्याधिराट्‌श्रियम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "11",
    "verse": "namanti yat-pāda-niketam ātmanaḥ\nśivāya hānīya dhanāni śatravaḥ\nkathaṁ sa vīraḥ śriyam aṅga dustyajāṁ\nyuvaiṣatotsraṣṭum aho sahāsubhiḥ",
    "devanagari": "नमन्ति यत्पादनिकेतमात्मन:\nशिवायहानीय धनानि शत्रव: ।\nकथं स वीर: श्रियमङ्ग दुस्त्यजां\nयुवैषतोत्स्रष्टुमहो सहासुभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "12",
    "verse": "śivāya lokasya bhavāya bhūtaye\nya uttama-śloka-parāyaṇā janāḥ\njīvanti nātmārtham asau parāśrayaṁ\nmumoca nirvidya kutaḥ kalevaram",
    "devanagari": "शिवाय लोकस्य भवाय भूतये\nय उत्तमश्लोकपरायणा जना: ।\nजीवन्ति नात्मार्थमसौ पराश्रयं\nमुमोच निर्विद्य कुत: कलेवरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "13",
    "verse": "tat sarvaṁ naḥ samācakṣva\npṛṣṭo yad iha kiñcana\nmanye tvāṁ viṣaye vācāṁ\nsnātam anyatra chāndasāt",
    "devanagari": "तत्सर्वं न: समाचक्ष्व पृष्टो यदिह किञ्चन ।\nमन्ये त्वां विषये वाचां स्‍नातमन्यत्र छान्दसात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "14",
    "verse": "sūta uvāca\ndvāpare samanuprāpte\ntṛtīye yuga-paryaye\njātaḥ parāśarād yogī\nvāsavyāṁ kalayā hareḥ",
    "devanagari": "सूत उवाच\nद्वापरे समनुप्राप्ते तृतीये युगपर्यये ।\nजात: पराशराद्योगी वासव्यां कलया हरे: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "15",
    "verse": "sa kadācit sarasvatyā\nupaspṛśya jalaṁ śuciḥ\nvivikta eka āsīna\nudite ravi-maṇḍale",
    "devanagari": "स कदाचित्सरस्वत्या उपस्पृश्य जलं शुचि: ।\nविविक्त एक आसीन उदिते रविमण्डले ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "16",
    "verse": "parāvara-jñaḥ sa ṛṣiḥ\nkālenāvyakta-raṁhasā\nyuga-dharma-vyatikaraṁ\nprāptaṁ bhuvi yuge yuge",
    "devanagari": "परावरज्ञ: स ऋषि: कालेनाव्यक्तरंहसा ।\nयुगधर्मव्यतिकरं प्राप्तं भुवि युगे युगे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "17",
    "verse": "bhautikānāṁ ca bhāvānāṁ\nśakti-hrāsaṁ ca tat-kṛtam\naśraddadhānān niḥsattvān\ndurmedhān hrasitāyuṣaḥ",
    "devanagari": "भौतिकानां च भावानां शक्तिह्रासं च तत्कृतम् ।\nअश्रद्दधानान्नि:सत्त्वान्दुर्मेधान् ह्रसितायुष: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "18",
    "verse": "durbhagāṁś ca janān vīkṣya\nmunir divyena cakṣuṣā\nsarva-varṇāśramāṇāṁ yad\ndadhyau hitam amogha-dṛk",
    "devanagari": "दुर्भगांश्च जनान् वीक्ष्य मुनिर्दिव्येन चक्षुषा ।\nसर्ववर्णाश्रमाणां यद्दध्यौ हितममोघद‍ृक् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "19",
    "verse": "cātur-hotraṁ karma śuddhaṁ\nprajānāṁ vīkṣya vaidikam\nvyadadhād yajña-santatyai\nvedam ekaṁ catur-vidham",
    "devanagari": "चातुर्होत्रं कर्म शुद्धं प्रजानां वीक्ष्य वैदिकम् ।\nव्यदधाद्यज्ञसन्तत्यै वेदमेकं चतुर्विधम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "20",
    "verse": "ṛg-yajuḥ-sāmātharvākhyā\nvedāś catvāra uddhṛtāḥ\nitihāsa-purāṇaṁ ca\npañcamo veda ucyate",
    "devanagari": "ऋग्यजु:सामाथर्वाख्या वेदाश्चत्वार उद्‍धृता: ।\nइतिहासपुराणं च पञ्चमो वेद उच्यते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "21",
    "verse": "tatrarg-veda-dharaḥ pailaḥ\nsāmago jaiminiḥ kaviḥ\nvaiśampāyana evaiko\nniṣṇāto yajuṣām uta",
    "devanagari": "तत्रर्ग्वेदधर: पैल: सामगो जैमिनि: कवि: ।\nवैशम्पायन एवैको निष्णातो यजुषामुत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "22",
    "verse": "atharvāṅgirasām āsīt\nsumantur dāruṇo muniḥ\nitihāsa-purāṇānāṁ\npitā me romaharṣaṇaḥ",
    "devanagari": "अथर्वाङ्गिरसामासीत्सुमन्तुर्दारुणो मुनि: ।\nइतिहासपुराणानां पिता मे रोमहर्षण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "23",
    "verse": "ta eta ṛṣayo vedaṁ\nsvaṁ svaṁ vyasyann anekadhā\nśiṣyaiḥ praśiṣyais tac-chiṣyair\nvedās te śākhino 'bhavan",
    "devanagari": "त एत ऋषयो वेदं स्वं स्वं व्यस्यन्ननेकधा ।\nशिष्यै: प्रशिष्यैस्तच्छिष्यैर्वेदास्ते शाखिनोऽभवन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "24",
    "verse": "ta eva vedā durmedhair\ndhāryante puruṣair yathā\nevaṁ cakāra bhagavān\nvyāsaḥ kṛpaṇa-vatsalaḥ",
    "devanagari": "त एव वेदा दुर्मेधैर्धार्यन्ते पुरुषैर्यथा ।\nएवं चकार भगवान् व्यास: कृपणवत्सल: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "25",
    "verse": "strī-śūdra-dvijabandhūnāṁ\ntrayī na śruti-gocarā\nkarma-śreyasi mūḍhānāṁ\nśreya evaṁ bhaved iha\niti bhāratam ākhyānaṁ\nkṛpayā muninā kṛtam",
    "devanagari": "स्त्रीशूद्रद्विजबन्धूनां त्रयी न श्रुतिगोचरा ।\nकर्मश्रेयसि मूढानां श्रेय एवं भवेदिह ।\nइति भारतमाख्यानं कृपया मुनिना कृतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "26",
    "verse": "evaṁ pravṛttasya sadā\nbhūtānāṁ śreyasi dvijāḥ\nsarvātmakenāpi yadā\nnātuṣyad dhṛdayaṁ tataḥ",
    "devanagari": "एवं प्रवृत्तस्य सदा भूतानां श्रेयसि द्विजा: ।\nसर्वात्मकेनापि यदा नातुष्यद्‍धृदयं तत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "27",
    "verse": "nātiprasīdad dhṛdayaḥ\nsarasvatyās taṭe śucau\nvitarkayan vivikta-stha\nidaṁ covāca dharma-vit",
    "devanagari": "नातिप्रसीदद्‍धृदय: सरस्वत्यास्तटे शुचौ ।\nवितर्कयन् विविक्तस्थ इदं चोवाच धर्मवित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "28",
    "verse": "dhṛta-vratena hi mayā\nchandāṁsi guravo 'gnayaḥ\nmānitā nirvyalīkena\ngṛhītaṁ cānuśāsanam",
    "devanagari": "धृतव्रतेन हि मया छन्दांसि गुरवोऽग्नय: ।\nमानिता निर्व्यलीकेन गृहीतं चानुशासनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "29",
    "verse": "bhārata-vyapadeśena\nhy āmnāyārthaś ca pradarśitaḥ\ndṛśyate yatra dharmādi\nstrī-śūdrādibhir apy uta",
    "devanagari": "भारतव्यपदेशेन ह्याम्नायार्थश्च प्रदर्शित: ।\nद‍ृश्यते यत्र धर्मादि स्त्रीशूद्रादिभिरप्युत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "30",
    "verse": "tathāpi bata me daihyo\nhy ātmā caivātmanā vibhuḥ\nasampanna ivābhāti\nbrahma-varcasya sattamaḥ",
    "devanagari": "तथापि बत मे दैह्यो ह्यात्मा चैवात्मना विभु: ।\nअसम्पन्न इवाभाति ब्रह्मवर्चस्य सत्तम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "31",
    "verse": "kiṁ vā bhāgavatā dharmā\nna prāyeṇa nirūpitāḥ\npriyāḥ paramahaṁsānāṁ\nta eva hy acyuta-priyāḥ",
    "devanagari": "किं वा भागवता धर्मा न प्रायेण निरूपिता: ।\nप्रिया: परमहंसानां त एव ह्यच्युतप्रिया: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "32",
    "verse": "tasyaivaṁ khilam ātmānaṁ\nmanyamānasya khidyataḥ\nkṛṣṇasya nārado 'bhyāgād\nāśramaṁ prāg udāhṛtam",
    "devanagari": "तस्यैवं खिलमात्मानं मन्यमानस्य खिद्यत: ।\nकृष्णस्य नारदोऽभ्यागादाश्रमं प्रागुदाहृतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "4",
    "text": "33",
    "verse": "tam abhijñāya sahasā\npratyutthāyāgataṁ muniḥ\npūjayām āsa vidhivan\nnāradaṁ sura-pūjitam",
    "devanagari": "तमभिज्ञाय सहसा प्रत्युत्थायागतं मुनि: ।\nपूजयामास विधिवन्नारदं सुरपूजितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "1",
    "verse": "sūta uvāca\natha taṁ sukham āsīna\nupāsīnaṁ bṛhac-chravāḥ\ndevarṣiḥ prāha viprarṣiṁ\nvīṇā-pāṇiḥ smayann iva",
    "devanagari": "सूत उवाच\nअथ तं सुखमासीन उपासीनं बृहच्छ्रवा: ।\nदेवर्षि: प्राह विप्रर्षिं वीणापाणि: स्मयन्निव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "2",
    "verse": "nārada uvāca\npārāśarya mahā-bhāga\nbhavataḥ kaccid ātmanā\nparituṣyati śārīra\nātmā mānasa eva vā",
    "devanagari": "नारद उवाच\nपाराशर्य महाभाग भवत: कच्चिदात्मना ।\nपरितुष्यति शारीर आत्मा मानस एव वा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "3",
    "verse": "jijñāsitaṁ susampannam\napi te mahad-adbhutam\nkṛtavān bhārataṁ yas tvaṁ\nsarvārtha-paribṛṁhitam",
    "devanagari": "जिज्ञासितं सुसम्पन्नमपि ते महदद्भ‍ुतम् ।\nकृतवान् भारतं यस्त्वं सर्वार्थपरिबृंहितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "4",
    "verse": "jijñāsitam adhītaṁ ca\nbrahma yat tat sanātanam\ntathāpi śocasy ātmānam\nakṛtārtha iva prabho",
    "devanagari": "जिज्ञासितमधीतं च ब्रह्म यत्तत्सनातनम् ।\nतथापि शोचस्यात्मानमकृतार्थ इव प्रभो ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "5",
    "verse": "vyāsa uvāca\nasty eva me sarvam idaṁ tvayoktaṁ\ntathāpi nātmā parituṣyate me\ntan-mūlam avyaktam agādha-bodhaṁ\npṛcchāmahe tvātma-bhavātma-bhūtam",
    "devanagari": "व्यास उवाच\nअस्त्येव मे सर्वमिदं त्वयोक्तं\nतथापि नात्मा परितुष्यते मे ।\nतन्मूलमव्यक्तमगाधबोधं\nपृच्छामहे त्वात्मभवात्मभूतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "6",
    "verse": "sa vai bhavān veda samasta-guhyam\nupāsito yat puruṣaḥ purāṇaḥ\nparāvareśo manasaiva viśvaṁ\nsṛjaty avaty atti guṇair asaṅgaḥ",
    "devanagari": "स वै भवान् वेद समस्तगुह्य-\nमुपासितो यत्पुरुष: पुराण: ।\nपरावरेशो मनसैव विश्वं\nसृजत्यवत्यत्ति गुणैरसङ्ग: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "7",
    "verse": "tvaṁ paryaṭann arka iva tri-lokīm\nantaś-caro vāyur ivātma-sākṣī\nparāvare brahmaṇi dharmato vrataiḥ\nsnātasya me nyūnam alaṁ vicakṣva",
    "devanagari": "त्वं पर्यटन्नर्क इव त्रिलोकी-\nमन्तश्चरो वायुरिवात्मसाक्षी ।\nपरावरे ब्रह्मणि धर्मतो व्रतै:\nस्‍नातस्य मे न्यूनमलं विचक्ष्व ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "8",
    "verse": "śrī-nārada uvāca\nbhavatānudita-prāyaṁ\nyaśo bhagavato 'malam\nyenaivāsau na tuṣyeta\nmanye tad darśanaṁ khilam",
    "devanagari": "श्रीनारद उवाच\nभवतानुदितप्रायं यशो भगवतोऽमलम् ।\nयेनैवासौ न तुष्येत मन्ये तद्दर्शनं खिलम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "9",
    "verse": "yathā dharmādayaś cārthā\nmuni-varyānukīrtitāḥ\nna tathā vāsudevasya\nmahimā hy anuvarṇitaḥ",
    "devanagari": "यथा धर्मादयश्चार्था मुनिवर्यानुकीर्तिता: ।\nन तथा वासुदेवस्य महिमा ह्यनुवर्णित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "10",
    "verse": "na yad vacaś citra-padaṁ harer yaśo\njagat-pavitraṁ pragṛṇīta karhicit\ntad vāyasaṁ tīrtham uśanti mānasā\nna yatra haṁsā niramanty uśik-kṣayāḥ",
    "devanagari": "न यद्वचश्चित्रपदं हरेर्यशो\nजगत्पवित्रं प्रगृणीत कर्हिचित् ।\nतद्वायसं तीर्थमुशन्ति मानसा\nन यत्र हंसा निरमन्त्युशिक्क्षया: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "11",
    "verse": "tad-vāg-visargo janatāgha-viplavo\nyasmin prati-ślokam abaddhavaty api\nnāmāny anantasya yaśo 'ṅkitāni yat\nśṛṇvanti gāyanti gṛṇanti sādhavaḥ",
    "devanagari": "तद्वाग्विसर्गो जनताघविप्लवो\nयस्मिन् प्रतिश्लोकमबद्धवत्यपि ।\nनामान्यनन्तस्य यशोऽङ्कितानि यत्\nश‍ृण्वन्ति गायन्ति गृणन्ति साधव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "12",
    "verse": "naiṣkarmyam apy acyuta-bhāva-varjitaṁ\nna śobhate jñānam alaṁ nirañjanam\nkutaḥ punaḥ śaśvad abhadram īśvare\nna cārpitaṁ karma yad apy akāraṇam",
    "devanagari": "नैष्कर्म्यमप्यच्युतभाववर्जितं\nन शोभते ज्ञानमलं निरञ्जनम् ।\nकुत: पुन: शश्वदभद्रमीश्वरे\nन चार्पितं कर्म यदप्यकारणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "13",
    "verse": "atho mahā-bhāga bhavān amogha-dṛk\nśuci-śravāḥ satya-rato dhṛta-vrataḥ\nurukramasyākhila-bandha-muktaye\nsamādhinānusmara tad-viceṣṭitam",
    "devanagari": "अथो महाभाग भवानमोघद‍ृक्\nशुचिश्रवा: सत्यरतो धृतव्रत: ।\nउरुक्रमस्याखिलबन्धमुक्तये\nसमाधिनानुस्मर तद्विचेष्टितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "14",
    "verse": "tato 'nyathā kiñcana yad vivakṣataḥ\npṛthag dṛśas tat-kṛta-rūpa-nāmabhiḥ\nna karhicit kvāpi ca duḥsthitā matir\nlabheta vātāhata-naur ivāspadam",
    "devanagari": "ततोऽन्यथा किञ्चन यद्विवक्षत:\nपृथग्दृशस्तत्कृतरूपनामभि: ।\nन कर्हिचित्क्वापि च दु:स्थिता मति-\nर्लभेत वाताहतनौरिवास्पदम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "15",
    "verse": "jugupsitaṁ dharma-kṛte 'nuśāsataḥ\nsvabhāva-raktasya mahān vyatikramaḥ\nyad-vākyato dharma itītaraḥ sthito\nna manyate tasya nivāraṇaṁ janaḥ",
    "devanagari": "जुगुप्सितं धर्मकृतेऽनुशासत:\nस्वभावरक्तस्य महान् व्यतिक्रम: ।\nयद्वाक्यतो धर्म इतीतर: स्थितो\nन मन्यते तस्य निवारणं जन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "16",
    "verse": "vicakṣaṇo 'syārhati vedituṁ vibhor\nananta-pārasya nivṛttitaḥ sukham\npravartamānasya guṇair anātmanas\ntato bhavān darśaya ceṣṭitaṁ vibhoḥ",
    "devanagari": "विचक्षणोऽस्यार्हति वेदितुं विभो-\nरनन्तपारस्य निवृत्तित: सुखम् ।\nप्रवर्तमानस्य गुणैरनात्मन-\nस्ततो भवान्दर्शय चेष्टितं विभो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "17",
    "verse": "tyaktvā sva-dharmaṁ caraṇāmbujaṁ harer\nbhajann apakvo 'tha patet tato yadi\nyatra kva vābhadram abhūd amuṣya kiṁ\nko vārtha āpto 'bhajatāṁ sva-dharmataḥ",
    "devanagari": "त्यक्त्वा स्वधर्मं चरणाम्बुजं हरे-\nर्भजन्नपक्‍वोऽथ पतेत्ततो यदि ।\nयत्र क्‍व वाभद्रमभूदमुष्य किं\nको वार्थ आप्तोऽभजतां स्वधर्मत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "18",
    "verse": "tasyaiva hetoḥ prayateta kovido\nna labhyate yad bhramatām upary adhaḥ\ntal labhyate duḥkhavad anyataḥ sukhaṁ\nkālena sarvatra gabhīra-raṁhasā",
    "devanagari": "तस्यैव हेतो: प्रयतेत कोविदो\nन लभ्यते यद्भ्रमतामुपर्यध: ।\nतल्लभ्यते दु:खवदन्यत: सुखं\nकालेन सर्वत्र गभीररंहसा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "19",
    "verse": "na vai jano jātu kathañcanāvrajen\nmukunda-sevy anyavad aṅga saṁsṛtim\nsmaran mukundāṅghry-upagūhanaṁ punar\nvihātum icchen na rasa-graho janaḥ",
    "devanagari": "न वै जनो जातु कथञ्चनाव्रजे-\nन्मुकुन्दसेव्यन्यवदङ्ग संसृतिम् ।\nस्मरन्मुकुन्दाङ्‌घ्र्युरपगूहनं पुन-\nर्विहातुमिच्छेन्न रसग्रहो जन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "20",
    "verse": "idaṁ hi viśvaṁ bhagavān ivetaro\nyato jagat-sthāna-nirodha-sambhavāḥ\ntad dhi svayaṁ veda bhavāṁs tathāpi te\nprādeśa-mātraṁ bhavataḥ pradarśitam",
    "devanagari": "इदं हि विश्वं भगवानिवेतरो\nयतो जगत्स्थाननिरोधसम्भवा: ।\nतद्धि स्वयं वेद भवांस्तथापि ते\nप्रादेशमात्रं भवत: प्रदर्शितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "21",
    "verse": "tvam ātmanātmānam avehy amogha-dṛk\nparasya puṁsaḥ paramātmanaḥ kalām\najaṁ prajātaṁ jagataḥ śivāya tan\nmahānubhāvābhyudayo 'dhigaṇyatām",
    "devanagari": "त्वमात्मनात्मानमवेह्यमोघद‍ृक्\nपरस्य पुंस: परमात्मन: कलाम् ।\nअजं प्रजातं जगत: शिवाय त-\nन्महानुभावाभ्युदयोऽधिगण्यताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "22",
    "verse": "idaṁ hi puṁsas tapasaḥ śrutasya vā\nsviṣṭasya sūktasya ca buddhi-dattayoḥ\navicyuto 'rthaḥ kavibhir nirūpito\nyad-uttamaśloka-guṇānuvarṇanam",
    "devanagari": "इदं हि पुंसस्तपस: श्रुतस्य वा\nस्विष्टस्य सूक्तस्य च बुद्धिदत्तयो: ।\nअविच्युतोऽर्थ: कविभिर्निरूपितो\nयदुत्तमश्लोकगुणानुवर्णनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "23",
    "verse": "ahaṁ purātīta-bhave 'bhavaṁ mune\ndāsyās tu kasyāścana veda-vādinām\nnirūpito bālaka eva yogināṁ\nśuśrūṣaṇe prāvṛṣi nirvivikṣatām",
    "devanagari": "अहं पुरातीतभवेऽभवं मुने\nदास्यास्तु कस्याश्चन वेदवादिनाम् ।\nनिरूपितो बालक एव योगिनां\nशुश्रूषणे प्रावृषि निर्विविक्षताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "24",
    "verse": "te mayy apetākhila-cāpale 'rbhake\ndānte 'dhṛta-krīḍanake 'nuvartini\ncakruḥ kṛpāṁ yadyapi tulya-darśanāḥ\nśuśrūṣamāṇe munayo 'lpa-bhāṣiṇi",
    "devanagari": "ते मय्यपेताखिलचापलेऽर्भके\nदान्तेऽधृतक्रीडनकेऽनुवर्तिनि ।\nचक्रु: कृपां यद्यपि तुल्यदर्शना:\nशुश्रूषमाणे मुनयोऽल्पभाषिणि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "25",
    "verse": "ucchiṣṭa-lepān anumodito dvijaiḥ\nsakṛt sma bhuñje tad-apāsta-kilbiṣaḥ\nevaṁ pravṛttasya viśuddha-cetasas\ntad-dharma evātma-ruciḥ prajāyate",
    "devanagari": "उच्छिष्टलेपाननुमोदितो द्विजै:\nसकृत्स्म भुञ्जे तदपास्तकिल्बिष: ।\nएवं प्रवृत्तस्य विशुद्धचेतस-\nस्तद्धर्म एवात्मरुचि: प्रजायते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "26",
    "verse": "tatrānvahaṁ kṛṣṇa-kathāḥ pragāyatām\nanugraheṇāśṛṇavaṁ manoharāḥ\ntāḥ śraddhayā me 'nupadaṁ viśṛṇvataḥ\npriyaśravasy aṅga mamābhavad ruciḥ",
    "devanagari": "तत्रान्वहं कृष्णकथा: प्रगायता-\nमनुग्रहेणाश‍ृणवं मनोहरा: ।\nता: श्रद्धया मेऽनुपदं विश‍ृण्वत:\nप्रियश्रवस्यङ्ग ममाभवद्रुचि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "27",
    "verse": "tasmiṁs tadā labdha-rucer mahā-mate\npriyaśravasy askhalitā matir mama\nyayāham etat sad-asat sva-māyayā\npaśye mayi brahmaṇi kalpitaṁ pare",
    "devanagari": "तस्मिंस्तदा लब्धरुचेर्महामते\nप्रियश्रवस्यस्खलिता मतिर्मम ।\nययाहमेतत्सदसत्स्वमायया\nपश्ये मयि ब्रह्मणि कल्पितं परे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "28",
    "verse": "itthaṁ śarat-prāvṛṣikāv ṛtū harer\nviśṛṇvato me 'nusavaṁ yaśo 'malam\nsaṅkīrtyamānaṁ munibhir mahātmabhir\nbhaktiḥ pravṛttātma-rajas-tamopahā",
    "devanagari": "इत्थं शरत्प्रावृषिकावृतू हरे-\nर्विश‍ृण्वतो मेऽनुसवं यशोऽमलम् ।\nसङ्कीर्त्यमानं मुनिभिर्महात्मभि-\nर्भक्ति: प्रवृत्तात्मरजस्तमोपहा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "29",
    "verse": "tasyaivaṁ me 'nuraktasya\npraśritasya hatainasaḥ\nśraddadhānasya bālasya\ndāntasyānucarasya ca",
    "devanagari": "तस्यैवं मेऽनुरक्तस्य प्रश्रितस्य हतैनस: ।\nश्रद्दधानस्य बालस्य दान्तस्यानुचरस्य च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "30",
    "verse": "jñānaṁ guhyatamaṁ yat tat\nsākṣād bhagavatoditam\nanvavocan gamiṣyantaḥ\nkṛpayā dīna-vatsalāḥ",
    "devanagari": "ज्ञानं गुह्यतमं यत्तत्साक्षाद्भ‍गवतोदितम् । अन्ववोचन् गमिष्यन्त: कृपया दीनवत्सला: ।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "31",
    "verse": "yenaivāhaṁ bhagavato\nvāsudevasya vedhasaḥ\nmāyānubhāvam avidaṁ\nyena gacchanti tat-padam",
    "devanagari": "येनैवाहं भगवतो वासुदेवस्य वेधस: । मायानुभावमविदं येन गच्छन्ति तत्पदम् ।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "32",
    "verse": "etat saṁsūcitaṁ brahmaṁs\ntāpa-traya-cikitsitam\nyad īśvare bhagavati\nkarma brahmaṇi bhāvitam",
    "devanagari": "एतत्संसूचितं ब्रह्मंस्तापत्रयचिकित्सितम् ।\nयदीश्वरे भगवति कर्म ब्रह्मणि भावितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "33",
    "verse": "āmayo yaś ca bhūtānāṁ\njāyate yena suvrata\ntad eva hy āmayaṁ dravyaṁ\nna punāti cikitsitam",
    "devanagari": "आमयो यश्च भूतानां जायते येन सुव्रत ।\nतदेव ह्यामयं द्रव्यं न पुनाति चिकित्सितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "34",
    "verse": "evaṁ nṛṇāṁ kriyā-yogāḥ\nsarve saṁsṛti-hetavaḥ\nta evātma-vināśāya\nkalpante kalpitāḥ pare",
    "devanagari": "एवं नृणां क्रियायोगा: सर्वे संसृतिहेतव: ।\nत एवात्मविनाशाय कल्पन्ते कल्पिता: परे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "35",
    "verse": "yad atra kriyate karma\nbhagavat-paritoṣaṇam\njñānaṁ yat tad adhīnaṁ hi\nbhakti-yoga-samanvitam",
    "devanagari": "यदत्र क्रियते कर्म भगवत्परितोषणम् ।\nज्ञानं यत्तदधीनं हि भक्तियोगसमन्वितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "36",
    "verse": "kurvāṇā yatra karmāṇi\nbhagavac-chikṣayāsakṛt\ngṛṇanti guṇa-nāmāni\nkṛṣṇasyānusmaranti ca",
    "devanagari": "कुर्वाणा यत्र कर्माणि भगवच्छिक्षयासकृत् ।\nगृणन्ति गुणनामानि कृष्णस्यानुस्मरन्ति च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "37",
    "verse": "oṁ namo bhagavate tubhyaṁ\nvāsudevāya dhīmahi\npradyumnāyāniruddhāya\nnamaḥ saṅkarṣaṇāya ca",
    "devanagari": "ॐ नमो भगवते तुभ्यं वासुदेवाय धीमहि ।\nप्रद्युम्नायानिरुद्धाय नम: सङ्कर्षणाय च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "38",
    "verse": "iti mūrty-abhidhānena\nmantra-mūrtim amūrtikam\nyajate yajña-puruṣaṁ\nsa samyag darśanaḥ pumān",
    "devanagari": "इति मूर्त्यभिधानेन मन्त्रमूर्तिममूर्तिकम् ।\nयजते यज्ञपुरुषं स सम्यग्दर्शन: पुमान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "39",
    "verse": "imaṁ sva-nigamaṁ brahmann\navetya mad-anuṣṭhitam\nadān me jñānam aiśvaryaṁ\nsvasmin bhāvaṁ ca keśavaḥ",
    "devanagari": "इमं स्वनिगमं ब्रह्मन्नवेत्य मदनुष्ठितम् ।\nअदान्मे ज्ञानमैश्वर्यं स्वस्मिन् भावं च केशव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "5",
    "text": "40",
    "verse": "tvam apy adabhra-śruta viśrutaṁ vibhoḥ\nsamāpyate yena vidāṁ bubhutsitam\nprākhyāhi duḥkhair muhur arditātmanāṁ\nsaṅkleśa-nirvāṇam uśanti nānyathā",
    "devanagari": "त्वमप्यदभ्रश्रुत विश्रुतं विभो:\nसमाप्यते येन विदां बुभुत्सितम् ।\nप्राख्याहि दु:खैर्मुहुरर्दितात्मनां\nसङ्‍क्लेशनिर्वाणमुशन्ति नान्यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "1",
    "verse": "sūta uvāca\nevaṁ niśamya bhagavān\ndevarṣer janma karma ca\nbhūyaḥ papraccha taṁ brahman\nvyāsaḥ satyavatī-sutaḥ",
    "devanagari": "सूत उवाच\nएवं निशम्य भगवान्देवर्षेर्जन्म कर्म च ।\nभूय: पप्रच्छ तं ब्रह्मन् व्यास: सत्यवतीसुत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "2",
    "verse": "vyāsa uvāca\nbhikṣubhir vipravasite\nvijñānādeṣṭṛbhis tava\nvartamāno vayasy ādye\ntataḥ kim akarod bhavān",
    "devanagari": "व्यास उवाच\nभिक्षुभिर्विप्रवसिते विज्ञानादेष्टृभिस्तव ।\nवर्तमानो वयस्याद्ये तत: किमकरोद्भ‍वान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "3",
    "verse": "svāyambhuva kayā vṛttyā\nvartitaṁ te paraṁ vayaḥ\nkathaṁ cedam udasrākṣīḥ\nkāle prāpte kalevaram",
    "devanagari": "स्वायम्भुव कया वृत्त्या वर्तितं ते परं वय: ।\nकथं चेदमुदस्राक्षी: काले प्राप्ते कलेवरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "4",
    "verse": "prāk-kalpa-viṣayām etāṁ\nsmṛtiṁ te muni-sattama\nna hy eṣa vyavadhāt kāla\neṣa sarva-nirākṛtiḥ",
    "devanagari": "प्राक्कल्पविषयामेतां स्मृतिं ते मुनिसत्तम ।\nन ह्येष व्यवधात्काल एष सर्वनिराकृति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "5",
    "verse": "nārada uvāca\nbhikṣubhir vipravasite\nvijñānādeṣṭṛbhir mama\nvartamāno vayasy ādye\ntata etad akāraṣam",
    "devanagari": "नारद उवाच\nभिक्षुभिर्विप्रवसिते विज्ञानादेष्टृभिर्मम ।\nवर्तमानो वयस्याद्ये तत एतदकारषम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "6",
    "verse": "ekātmajā me jananī\nyoṣin mūḍhā ca kiṅkarī\nmayy ātmaje 'nanya-gatau\ncakre snehānubandhanam",
    "devanagari": "एकात्मजा मे जननी योषिन्मूढा च किङ्करी ।\nमय्यात्मजेऽनन्यगतौ चक्रे स्‍नेहानुबन्धनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "7",
    "verse": "sāsvatantrā na kalpāsīd\nyoga-kṣemaṁ mamecchatī\nīśasya hi vaśe loko\nyoṣā dārumayī yathā",
    "devanagari": "सास्वतन्त्रा न कल्पासीद्योगक्षेमं ममेच्छती ।\nईशस्य हि वशे लोको योषा दारुमयी यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "8",
    "verse": "ahaṁ ca tad-brahma-kule\nūṣivāṁs tad-upekṣayā\ndig-deśa-kālāvyutpanno\nbālakaḥ pañca-hāyanaḥ",
    "devanagari": "अहं च तद्ब्रह्मकुले ऊषिवांस्तदुपेक्षया ।\nदिग्देशकालाव्युत्पन्नो बालक: पञ्चहायन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "9",
    "verse": "ekadā nirgatāṁ gehād\nduhantīṁ niśi gāṁ pathi\nsarpo 'daśat padā spṛṣṭaḥ\nkṛpaṇāṁ kāla-coditaḥ",
    "devanagari": "एकदा निर्गतां गेहाद्दुहन्तीं निशि गां पथि ।\nसर्पोऽदशत्पदा स्पृष्ट: कृपणां कालचोदित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "10",
    "verse": "tadā tad aham īśasya\nbhaktānāṁ śam abhīpsataḥ\nanugrahaṁ manyamānaḥ\nprātiṣṭhaṁ diśam uttarām",
    "devanagari": "तदा तदहमीशस्य भक्तानां शमभीप्सत: ।\nअनुग्रहं मन्यमान: प्रातिष्ठं दिशमुत्तराम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "11",
    "verse": "sphītāñ janapadāṁs tatra\npura-grāma-vrajākarān\nkheṭa-kharvaṭa-vāṭīś ca\nvanāny upavanāni ca",
    "devanagari": "स्फीताञ्जनपदांस्तत्र पुरग्रामव्रजाकरान् ।\nखेटखर्वटवाटीश्च वनान्युपवनानि च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "12",
    "verse": "citra-dhātu-vicitrādrīn\nibha-bhagna-bhuja-drumān\njalāśayāñ chiva-jalān\nnalinīḥ sura-sevitāḥ\ncitra-svanaiḥ patra-rathair\nvibhramad bhramara-śriyaḥ",
    "devanagari": "चित्रधातुविचित्राद्रीनिभभग्नभुजद्रुमान् ।\nजलाशयाञ्छिवजलान्नलिनी: सुरसेविता: ।\nचित्रस्वनै: पत्ररथैर्विभ्रमद्भ्रमरश्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "13",
    "verse": "nala-veṇu-śaras-tanba-\nkuśa-kīcaka-gahvaram\neka evātiyāto 'ham\nadrākṣaṁ vipinaṁ mahat\nghoraṁ pratibhayākāraṁ\nvyālolūka-śivājiram",
    "devanagari": "नलवेणुशरस्तन्बकुशकीचकगह्वरम् ।\nएक एवातियातोऽहमद्राक्षं विपिनं महत् ।\nघोरं प्रतिभयाकारं व्यालोलूकशिवाजिरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "14",
    "verse": "pariśrāntendriyātmāhaṁ\ntṛṭ-parīto bubhukṣitaḥ\nsnātvā pītvā hrade nadyā\nupaspṛṣṭo gata-śramaḥ",
    "devanagari": "परिश्रान्तेन्द्रियात्माहं तृट्परीतो बुभुक्षित: ।\nस्‍नात्वा पीत्वा ह्रदे नद्या उपस्पृष्टो गतश्रम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "15",
    "verse": "tasmin nirmanuje 'raṇye\npippalopastha āśritaḥ\nātmanātmānam ātmasthaṁ\nyathā-śrutam acintayam",
    "devanagari": "तस्मिन्निर्मनुजेऽरण्ये पिप्पलोपस्थ आश्रित: ।\nआत्मनात्मानमात्मस्थं यथाश्रुतमचिन्तयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "16",
    "verse": "dhyāyataś caraṇāmbhojaṁ\nbhāva-nirjita-cetasā\nautkaṇṭhyāśru-kalākṣasya\nhṛdy āsīn me śanair hariḥ",
    "devanagari": "ध्यायतश्चरणाम्भोजं भावनिर्जितचेतसा ।\nऔत्कण्ठ्याश्रुकलाक्षस्य हृद्यासीन्मे शनैर्हरि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "17",
    "verse": "premātibhara-nirbhinna-\npulakāṅgo 'tinirvṛtaḥ\nānanda-samplave līno\nnāpaśyam ubhayaṁ mune",
    "devanagari": "प्रेमातिभरनिर्भिन्नपुलकाङ्गोऽतिनिर्वृत: ।\nआनन्दसम्प्लवे लीनो नापश्यमुभयं मुने ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "18",
    "verse": "rūpaṁ bhagavato yat tan\nmanaḥ-kāntaṁ śucāpaham\napaśyan sahasottasthe\nvaiklavyād durmanā iva",
    "devanagari": "रूपं भगवतो यत्तन्मन:कान्तं शुचापहम् ।\nअपश्यन् सहसोत्तस्थे वैक्लव्याद्दुर्मना इव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "19",
    "verse": "didṛkṣus tad ahaṁ bhūyaḥ\npraṇidhāya mano hṛdi\nvīkṣamāṇo 'pi nāpaśyam\navitṛpta ivāturaḥ",
    "devanagari": "दिद‍ृक्षुस्तदहं भूय: प्रणिधाय मनो हृदि ।\nवीक्षमाणोऽपि नापश्यमवितृप्त इवातुर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "20",
    "verse": "evaṁ yatantaṁ vijane\nmām āhāgocaro girām\ngambhīra-ślakṣṇayā vācā\nśucaḥ praśamayann iva",
    "devanagari": "एवं यतन्तं विजने मामाहागोचरो गिराम् ।\nगम्भीरश्लक्ष्णया वाचा शुच: प्रशमयन्निव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "21",
    "verse": "hantāsmiñ janmani bhavān\nmā māṁ draṣṭum ihārhati\navipakva-kaṣāyāṇāṁ\ndurdarśo 'haṁ kuyoginām",
    "devanagari": "हन्तास्मिञ्जन्मनि भवान्मा मां द्रष्टुमिहार्हति ।\nअविपक्‍वकषायाणां दुर्दर्शोऽहं कुयोगिनाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "22",
    "verse": "sakṛd yad darśitaṁ rūpam\netat kāmāya te 'nagha\nmat-kāmaḥ śanakaiḥ sādhu\nsarvān muñcati hṛc-chayān",
    "devanagari": "सकृद् यद्दर्शितं रूपमेतत्कामाय तेऽनघ ।\nमत्काम: शनकै: साधु सर्वान्मुञ्चति हृच्छयान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "23",
    "verse": "sat-sevayādīrghayāpi\njātā mayi dṛḍhā matiḥ\nhitvāvadyam imaṁ lokaṁ\ngantā maj-janatām asi",
    "devanagari": "सत्सेवयादीर्घयापि जाता मयि द‍ृढा मति: ।\nहित्वावद्यमिमं लोकं गन्ता मज्जनतामसि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "24",
    "verse": "matir mayi nibaddheyaṁ\nna vipadyeta karhicit\nprajā-sarga-nirodhe 'pi\nsmṛtiś ca mad-anugrahāt",
    "devanagari": "मतिर्मयि निबद्धेयं न विपद्येत कर्हिचित् ।\nप्रजासर्गनिरोधेऽपि स्मृतिश्च मदनुग्रहात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "25",
    "verse": "etāvad uktvopararāma tan mahad\nbhūtaṁ nabho-liṅgam aliṅgam īśvaram\nahaṁ ca tasmai mahatāṁ mahīyase\nśīrṣṇāvanāmaṁ vidadhe 'nukampitaḥ",
    "devanagari": "एतावदुक्त्वोपरराम तन्महद्\nभूतं नभोलिङ्गमलिङ्गमीश्वरम् ।\nअहं च तस्मै महतां महीयसे\nशीर्ष्णावनामं विदधेऽनुकम्पित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "26",
    "verse": "nāmāny anantasya hata-trapaḥ paṭhan\nguhyāni bhadrāṇi kṛtāni ca smaran\ngāṁ paryaṭaṁs tuṣṭa-manā gata-spṛhaḥ\nkālaṁ pratīkṣan vimado vimatsaraḥ",
    "devanagari": "नामान्यनन्तस्य हतत्रप: पठन्\nगुह्यानि भद्राणि कृतानि च स्मरन् ।\nगां पर्यटंस्तुष्टमना गतस्पृह:\nकालं प्रतीक्षन् विमदो विमत्सर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "27",
    "verse": "evaṁ kṛṣṇa-mater brahman\nnāsaktasyāmalātmanaḥ\nkālaḥ prādurabhūt kāle\ntaḍit saudāmanī yathā",
    "devanagari": "एवं कृष्णमतेर्ब्रह्मन्नासक्तस्यामलात्मन: ।\nकाल: प्रादुरभूत्काले तडित्सौदामनी यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "28",
    "verse": "prayujyamāne mayi tāṁ\nśuddhāṁ bhāgavatīṁ tanum\nārabdha-karma-nirvāṇo\nnyapatat pāñca-bhautikaḥ",
    "devanagari": "प्रयुज्यमाने मयि तां शुद्धां भागवतीं तनुम् ।\nआरब्धकर्मनिर्वाणो न्यपतत् पाञ्चभौतिक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "29",
    "verse": "kalpānta idam ādāya\nśayāne 'mbhasy udanvataḥ\nśiśayiṣor anuprāṇaṁ\nviviśe 'ntar ahaṁ vibhoḥ",
    "devanagari": "कल्पान्त इदमादाय शयानेऽम्भस्युदन्वत: ।\nशिशयिषोरनुप्राणं विविशेऽन्तरहं विभो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "30",
    "verse": "sahasra-yuga-paryante\nutthāyedaṁ sisṛkṣataḥ\nmarīci-miśrā ṛṣayaḥ\nprāṇebhyo 'haṁ ca jajñire",
    "devanagari": "सहस्रयुगपर्यन्ते उत्थायेदं सिसृक्षत: ।\nमरीचिमिश्रा ऋषय: प्राणेभ्योऽहं च जज्ञिरे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "31",
    "verse": "antar bahiś ca lokāṁs trīn\nparyemy askandita-vrataḥ\nanugrahān mahā-viṣṇor\navighāta-gatiḥ kvacit",
    "devanagari": "अन्तर्बहिश्च लोकांस्त्रीन् पर्येम्यस्कन्दितव्रत: ।\nअनुग्रहान्महाविष्णोरविघातगति: क्‍वचित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "32",
    "verse": "deva-dattām imāṁ vīṇāṁ\nsvara-brahma-vibhūṣitām\nmūrcchayitvā hari-kathāṁ\ngāyamānaś carāmy aham",
    "devanagari": "देवदत्तामिमां वीणां स्वरब्रह्मविभूषिताम् ।\nमूर्च्छयित्वा हरिकथां गायमानश्चराम्यहम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "33",
    "verse": "pragāyataḥ sva-vīryāṇi\ntīrtha-pādaḥ priya-śravāḥ\nāhūta iva me śīghraṁ\ndarśanaṁ yāti cetasi",
    "devanagari": "प्रगायत: स्ववीर्याणि तीर्थपाद: प्रियश्रवा: ।\nआहूत इव मे शीघ्रं दर्शनं याति चेतसि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "34",
    "verse": "etad dhy ātura-cittānāṁ\nmātrā-sparśecchayā muhuḥ\nbhava-sindhu-plavo dṛṣṭo\nhari-caryānuvarṇanam",
    "devanagari": "एतद्ध्यातुरचित्तानां मात्रास्पर्शेच्छया मुहु: ।\nभवसिन्धुप्लवो द‍ृष्टो हरिचर्यानुवर्णनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "35",
    "verse": "yamādibhir yoga-pathaiḥ\nkāma-lobha-hato muhuḥ\nmukunda-sevayā yadvat\ntathātmāddhā na śāmyati",
    "devanagari": "यमादिभिर्योगपथै: कामलोभहतो मुहु: ।\nमुकुन्दसेवया यद्वत्तथात्माद्धा न शाम्यति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "36",
    "verse": "sarvaṁ tad idam ākhyātaṁ\nyat pṛṣṭo 'haṁ tvayānagha\njanma-karma-rahasyaṁ me\nbhavataś cātma-toṣaṇam",
    "devanagari": "सर्वं तदिदमाख्यातं यत्पृष्टोऽहं त्वयानघ ।\nजन्मकर्मरहस्यं मे भवतश्चात्मतोषणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "37",
    "verse": "sūta uvāca\nevaṁ sambhāṣya bhagavān\nnārado vāsavī-sutam\nāmantrya vīṇāṁ raṇayan\nyayau yādṛcchiko muniḥ",
    "devanagari": "सूत उवाच\nएवं सम्भाष्य भगवान्नारदो वासवीसुतम् ।\nआमन्‍त्र्य वीणां रणयन् ययौ याद‍ृच्छिको मुनि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "6",
    "text": "38",
    "verse": "aho devarṣir dhanyo 'yaṁ\nyat-kīrtiṁ śārṅgadhanvanaḥ\ngāyan mādyann idaṁ tantryā\nramayaty āturaṁ jagat",
    "devanagari": "अहो देवर्षिर्धन्योऽयं यत्कीर्तिं शार्ङ्गधन्वन: ।\nगायन्माद्यन्निदं तन्‍त्र्या रमयत्यातुरं जगत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "1",
    "verse": "śaunaka uvāca\nnirgate nārade sūta\nbhagavān bādarāyaṇaḥ\nśrutavāṁs tad-abhipretaṁ\ntataḥ kim akarod vibhuḥ",
    "devanagari": "शौनक उवाच\nनिर्गते नारदे सूत भगवान् बादरायण: ।\nश्रुतवांस्तदभिप्रेतं तत: किमकरोद्विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "2",
    "verse": "sūta uvāca\nbrahma-nadyāṁ sarasvatyām\nāśramaḥ paścime taṭe\nśamyāprāsa iti prokta\nṛṣīṇāṁ satra-vardhanaḥ",
    "devanagari": "सूत उवाच\nब्रह्मनद्यां सरस्वत्यामाश्रम: पश्चिमे तटे ।\nशम्याप्रास इति प्रोक्त ऋषीणां सत्रवर्धन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "3",
    "verse": "tasmin sva āśrame vyāso\nbadarī-ṣaṇḍa-maṇḍite\nāsīno 'pa upaspṛśya\npraṇidadhyau manaḥ svayam",
    "devanagari": "तस्मिन् स्व आश्रमे व्यासो बदरीषण्डमण्डिते ।\nआसीनोऽप उपस्पृश्य प्रणिदध्यौ मन: स्वयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "4",
    "verse": "bhakti-yogena manasi\nsamyak praṇihite 'male\napaśyat puruṣaṁ pūrṇaṁ\nmāyāṁ ca tad-apāśrayam",
    "devanagari": "भक्तियोगेन मनसि सम्यक् प्रणिहितेऽमले ।\nअपश्यत्पुरुषं पूर्णं मायां च तदपाश्रयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "5",
    "verse": "yayā sammohito jīva\nātmānaṁ tri-guṇātmakam\nparo 'pi manute 'narthaṁ\ntat-kṛtaṁ cābhipadyate",
    "devanagari": "यया सम्मोहितो जीव आत्मानं त्रिगुणात्मकम् ।\nपरोऽपि मनुतेऽनर्थं तत्कृतं चाभिपद्यते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "6",
    "verse": "anarthopaśamaṁ sākṣād\nbhakti-yogam adhokṣaje\nlokasyājānato vidvāṁś\ncakre sātvata-saṁhitām",
    "devanagari": "अनर्थोपशमं साक्षाद्भक्तियोगमधोक्षजे ।\nलोकस्याजानतो विद्वांश्चक्रे सात्वतसंहिताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "7",
    "verse": "yasyāṁ vai śrūyamāṇāyāṁ\nkṛṣṇe parama-pūruṣe\nbhaktir utpadyate puṁsaḥ\nśoka-moha-bhayāpahā",
    "devanagari": "यस्यां वै श्रूयमाणायां कृष्णे परमपूरुषे ।\nभक्तिरुत्पद्यते पुंस: शोकमोहभयापहा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "8",
    "verse": "sa saṁhitāṁ bhāgavatīṁ\nkṛtvānukramya cātma-jam\nśukam adhyāpayām āsa\nnivṛtti-nirataṁ muniḥ",
    "devanagari": "स संहितां भागवतीं कृत्वानुक्रम्य चात्मजम् ।\nशुकमध्यापयामास निवृत्तिनिरतं मुनि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "9",
    "verse": "śaunaka uvāca\nsa vai nivṛtti-nirataḥ\nsarvatropekṣako muniḥ\nkasya vā bṛhatīm etām\nātmārāmaḥ samabhyasat",
    "devanagari": "शौनक उवाच\nस वै निवृत्तिनिरत: सर्वत्रोपेक्षको मुनि: ।\nकस्य वा बृहतीमेतामात्माराम: समभ्यसत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "10",
    "verse": "sūta uvāca\nātmārāmāś ca munayo\nnirgranthā apy urukrame\nkurvanty ahaitukīṁ bhaktim\nittham-bhūta-guṇo hariḥ",
    "devanagari": "सूत उवाच\nआत्मारामाश्च मुनयो निर्ग्रन्था अप्युरुक्रमे ।\nकुर्वन्त्यहैतुकीं भक्तिमित्थम्भूतगुणो हरि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "11",
    "verse": "harer guṇākṣipta-matir\nbhagavān bādarāyaṇiḥ\nadhyagān mahad ākhyānaṁ\nnityaṁ viṣṇu-jana-priyaḥ",
    "devanagari": "हरेर्गुणाक्षिप्तमतिर्भगवान् बादरायणि: ।\nअध्यगान्महदाख्यानं नित्यं विष्णुजनप्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "12",
    "verse": "parīkṣito 'tha rājarṣer\njanma-karma-vilāpanam\nsaṁsthāṁ ca pāṇḍu-putrāṇāṁ\nvakṣye kṛṣṇa-kathodayam",
    "devanagari": "परीक्षितोऽथ राजर्षेर्जन्मकर्मविलापनम् ।\nसंस्थां च पाण्डुपुत्राणां वक्ष्ये कृष्णकथोदयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "13",
    "verse": "yadā mṛdhe kaurava-sṛñjayānāṁ\nvīreṣv atho vīra-gatiṁ gateṣu\nvṛkodarāviddha-gadābhimarśa-\nbhagnoru-daṇḍe dhṛtarāṣṭra-putre",
    "devanagari": "यदा मृधे कौरवसृञ्जयानां\nवीरेष्वथो वीरगतिं गतेषु ।\nवृकोदराविद्धगदाभिमर्श-\nभग्नोरुदण्डे धृतराष्ट्रपुत्रे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "14",
    "verse": "bhartuḥ priyaṁ drauṇir iti sma paśyan\nkṛṣṇā-sutānāṁ svapatāṁ śirāṁsi\nupāharad vipriyam eva tasya\njugupsitaṁ karma vigarhayanti",
    "devanagari": "भर्तु: प्रियं द्रौणिरिति स्म पश्यन्\nकृष्णासुतानां स्वपतां शिरांसि ।\nउपाहरद्विप्रियमेव तस्य\nजुगुप्सितं कर्म विगर्हयन्ति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "15",
    "verse": "mātā śiśūnāṁ nidhanaṁ sutānāṁ\nniśamya ghoraṁ paritapyamānā\ntadārudad vāṣpa-kalākulākṣī\ntāṁ sāntvayann āha kirīṭamālī",
    "devanagari": "माता शिशूनां निधनं सुतानां\nनिशम्य घोरं परितप्यमाना ।\nतदारुदद्वाष्पकलाकुलाक्षी\nतां सान्‍त्वयन्नाह किरीटमाली ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "16",
    "verse": "tadā śucas te pramṛjāmi bhadre\nyad brahma-bandhoḥ śira ātatāyinaḥ\ngāṇḍīva-muktair viśikhair upāhare\ntvākramya yat snāsyasi dagdha-putrā",
    "devanagari": "तदा शुचस्ते प्रमृजामि भद्रे\nयद्ब्रह्मबन्धो: शिर आततायिन: ।\nगाण्डीवमुक्तैर्विशिखैरुपाहरे\nत्वाक्रम्य यत्‍स्‍नास्यसि दग्धपुत्रा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "17",
    "verse": "iti priyāṁ valgu-vicitra-jalpaiḥ\nsa sāntvayitvācyuta-mitra-sūtaḥ\nanvādravad daṁśita ugra-dhanvā\nkapi-dhvajo guru-putraṁ rathena",
    "devanagari": "इति प्रियां वल्गुविचित्रजल्पै:\nस सान्‍त्वयित्वाच्युतमित्रसूत: ।\nअन्वाद्रवद्दंशित उग्रधन्वा\nकपिध्वजो गुरुपुत्रं रथेन ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "18",
    "verse": "tam āpatantaṁ sa vilakṣya dūrāt\nkumāra-hodvigna-manā rathena\nparādravat prāṇa-parīpsur urvyāṁ\nyāvad-gamaṁ rudra-bhayād yathā kaḥ",
    "devanagari": "तमापतन्तं स विलक्ष्य दूरात्\nकुमारहोद्विग्नमना रथेन ।\nपराद्रवत्प्राणपरीप्सुरुर्व्यां\nयावद्गमं रुद्रभयाद्यथा क: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "19",
    "verse": "yadāśaraṇam ātmānam\naikṣata śrānta-vājinam\nastraṁ brahma-śiro mene\nātma-trāṇaṁ dvijātmajaḥ",
    "devanagari": "यदाशरणमात्मानमैक्षत श्रान्तवाजिनम् ।\nअस्त्रं ब्रह्मशिरो मेने आत्मत्राणं द्विजात्मज: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "20",
    "verse": "athopaspṛśya salilaṁ\nsandadhe tat samāhitaḥ\najānann api saṁhāraṁ\nprāṇa-kṛcchra upasthite",
    "devanagari": "अथोपस्पृश्य सलिलं सन्दधे तत्समाहित: ।\nअजानन्नपि संहारं प्राणकृच्छ्र उपस्थिते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "21",
    "verse": "tataḥ prāduṣkṛtaṁ tejaḥ\npracaṇḍaṁ sarvato diśam\nprāṇāpadam abhiprekṣya\nviṣṇuṁ jiṣṇur uvāca ha",
    "devanagari": "तत: प्रादुष्कृतं तेज: प्रचण्डं सर्वतोदिशम् ।\nप्राणापदमभिप्रेक्ष्य विष्णुं जिष्णुरुवाच ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "22",
    "verse": "arjuna uvāca\nkṛṣṇa kṛṣṇa mahā-bāho\nbhaktānām abhayaṅkara\ntvam eko dahyamānānām\napavargo 'si saṁsṛteḥ",
    "devanagari": "अर्जुन उवाच\nकृष्ण कृष्ण महाबाहो भक्तानामभयङ्कर ।\nत्वमेको दह्यमानानामपवर्गोऽसि संसृते: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "23",
    "verse": "tvam ādyaḥ puruṣaḥ sākṣād\nīśvaraḥ prakṛteḥ paraḥ\nmāyāṁ vyudasya cic-chaktyā\nkaivalye sthita ātmani",
    "devanagari": "त्वमाद्य: पुरुष: साक्षादीश्वर: प्रकृते: पर: ।\nमायां व्युदस्य चिच्छक्त्या कैवल्ये स्थित आत्मनि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "24",
    "verse": "sa eva jīva-lokasya\nmāyā-mohita-cetasaḥ\nvidhatse svena vīryeṇa\nśreyo dharmādi-lakṣaṇam",
    "devanagari": "स एव जीवलोकस्य मायामोहितचेतस: ।\nविधत्से स्वेन वीर्येण श्रेयो धर्मादिलक्षणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "25",
    "verse": "tathāyaṁ cāvatāras te\nbhuvo bhāra-jihīrṣayā\nsvānāṁ cānanya-bhāvānām\nanudhyānāya cāsakṛt",
    "devanagari": "तथायं चावतारस्ते भुवो भारजिहीर्षया ।\nस्वानां चानन्यभावानामनुध्यानाय चासकृत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "26",
    "verse": "kim idaṁ svit kuto veti\ndeva-deva na vedmy aham\nsarvato mukham āyāti\ntejaḥ parama-dāruṇam",
    "devanagari": "किमिदं स्वित्कुतो वेति देवदेव न वेद्‍म्यहम् ।\nसर्वतोमुखमायाति तेज: परमदारुणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "27",
    "verse": "śrī-bhagavān uvāca\nvetthedaṁ droṇa-putrasya\nbrāhmam astraṁ pradarśitam\nnaivāsau veda saṁhāraṁ\nprāṇa-bādha upasthite",
    "devanagari": "श्रीभगवानुवाच\nवेत्थेदं द्रोणपुत्रस्य ब्राह्ममस्त्रं प्रदर्शितम् ।\nनैवासौ वेद संहारं प्राणबाध उपस्थिते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "28",
    "verse": "na hy asyānyatamaṁ kiñcid\nastraṁ pratyavakarśanam\njahy astra-teja unnaddham\nastra-jño hy astra-tejasā",
    "devanagari": "न ह्यस्यान्यतमं किञ्चिदस्त्रं प्रत्यवकर्शनम् ।\nजह्यस्त्रतेज उन्नद्धमस्त्रज्ञो ह्यस्त्रतेजसा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "29",
    "verse": "sūta uvāca\nśrutvā bhagavatā proktaṁ\nphālgunaḥ para-vīra-hā\nspṛṣṭvāpas taṁ parikramya\nbrāhmaṁ brāhmāstraṁ sandadhe",
    "devanagari": "सूत उवाच\nश्रुत्वा भगवता प्रोक्तं फाल्गुन: परवीरहा ।\nस्पृष्ट्वापस्तं परिक्रम्य ब्राह्मं ब्राह्मास्त्रं सन्दधे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "30",
    "verse": "saṁhatyānyonyam ubhayos\ntejasī śara-saṁvṛte\nāvṛtya rodasī khaṁ ca\nvavṛdhāte 'rka-vahnivat",
    "devanagari": "संहत्यान्योन्यमुभयोस्तेजसी शरसंवृते ।\nआवृत्य रोदसी खं च ववृधातेऽर्कवह्निवत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "31",
    "verse": "dṛṣṭvāstra-tejas tu tayos\ntrīl lokān pradahan mahat\ndahyamānāḥ prajāḥ sarvāḥ\nsāṁvartakam amaṁsata",
    "devanagari": "द‍ृष्ट्वास्त्रतेजस्तु तयोस्त्रील्लोकान् प्रदहन्महत् ।\nदह्यमाना: प्रजा: सर्वा: सांवर्तकममंसत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "32",
    "verse": "prajopadravam ālakṣya\nloka-vyatikaraṁ ca tam\nmataṁ ca vāsudevasya\nsañjahārārjuno dvayam",
    "devanagari": "प्रजोपद्रवमालक्ष्य लोकव्यतिकरं च तम् ।\nमतं च वासुदेवस्य सञ्जहारार्जुनो द्वयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "33",
    "verse": "tata āsādya tarasā\ndāruṇaṁ gautamī-sutam\nbabandhāmarṣa-tāmrākṣaḥ\npaśuṁ raśanayā yathā",
    "devanagari": "तत आसाद्य तरसा दारुणं गौतमीसुतम् ।\nबबन्धामर्षताम्राक्ष: पशुं रशनया यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "34",
    "verse": "śibirāya ninīṣantaṁ\nrajjvā baddhvā ripuṁ balāt\nprāhārjunaṁ prakupito\nbhagavān ambujekṣaṇaḥ",
    "devanagari": "शिबिराय निनीषन्तं रज्ज्वा बद्ध्वा रिपुं बलात् ।\nप्राहार्जुनं प्रकुपितो भगवानम्बुजेक्षण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "35",
    "verse": "mainaṁ pārthārhasi trātuṁ\nbrahma-bandhum imaṁ jahi\nyo 'sāv anāgasaḥ suptān\navadhīn niśi bālakān",
    "devanagari": "मैनं पार्थार्हसि त्रातुं ब्रह्मबन्धुमिमं जहि ।\nयोऽसावनागस: सुप्तानवधीन्निशि बालकान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "36",
    "verse": "mattaṁ pramattam unmattaṁ\nsuptaṁ bālaṁ striyaṁ jaḍam\nprapannaṁ virathaṁ bhītaṁ\nna ripuṁ hanti dharma-vit",
    "devanagari": "मत्तं प्रमत्तमुन्मत्तं सुप्तं बालं स्त्रियं जडम् ।\nप्रपन्नं विरथं भीतं न रिपुं हन्ति धर्मवित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "37",
    "verse": "sva-prāṇān yaḥ para-prāṇaiḥ\nprapuṣṇāty aghṛṇaḥ khalaḥ\ntad-vadhas tasya hi śreyo\nyad-doṣād yāty adhaḥ pumān",
    "devanagari": "स्वप्राणान् य: परप्राणै: प्रपुष्णात्यघृण: खल: ।\nतद्वधस्तस्य हि श्रेयो यद्दोषाद्यात्यध: पुमान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "38",
    "verse": "pratiśrutaṁ ca bhavatā\npāñcālyai śṛṇvato mama\nāhariṣye śiras tasya\nyas te mānini putra-hā",
    "devanagari": "प्रतिश्रुतं च भवता पाञ्चाल्यै श‍ृण्वतो मम ।\nआहरिष्ये शिरस्तस्य यस्ते मानिनि पुत्रहा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "39",
    "verse": "tad asau vadhyatāṁ pāpa\nātatāyy ātma-bandhu-hā\nbhartuś ca vipriyaṁ vīra\nkṛtavān kula-pāṁsanaḥ",
    "devanagari": "तदसौ वध्यतां पाप आतताय्यात्मबन्धुहा ।\nभर्तुश्च विप्रियं वीर कृतवान् कुलपांसन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "40",
    "verse": "sūta uvāca\nevaṁ parīkṣatā dharmaṁ\npārthaḥ kṛṣṇena coditaḥ\nnaicchad dhantuṁ guru-sutaṁ\nyadyapy ātma-hanaṁ mahān",
    "devanagari": "सूत उवाच\nएवं परीक्षता धर्मं पार्थ: कृष्णेन चोदित: ।\nनैच्छद्धन्तुं गुरुसुतं यद्यप्यात्महनं महान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "41",
    "verse": "athopetya sva-śibiraṁ\ngovinda-priya-sārathiḥ\nnyavedayat taṁ priyāyai\nśocantyā ātma-jān hatān",
    "devanagari": "अथोपेत्य स्वशिबिरं गोविन्दप्रियसारथि: ।\nन्यवेदयत्तं प्रियायै शोचन्त्या आत्मजान् हतान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "42",
    "verse": "tathāhṛtaṁ paśuvat pāśa-baddham\navāṅ-mukhaṁ karma-jugupsitena\nnirīkṣya kṛṣṇāpakṛtaṁ guroḥ sutaṁ\nvāma-svabhāvā kṛpayā nanāma ca",
    "devanagari": "तथाहृतं पशुवत् पाशबद्ध-\nमवाङ्‍मुखं कर्मजुगुप्सितेन ।\nनिरीक्ष्य कृष्णापकृतं गुरो: सुतं\nवामस्वभावा कृपया ननाम च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "43",
    "verse": "uvāca cāsahanty asya\nbandhanānayanaṁ satī\nmucyatāṁ mucyatām eṣa\nbrāhmaṇo nitarāṁ guruḥ",
    "devanagari": "उवाच चासहन्त्यस्य बन्धनानयनं सती ।\nमुच्यतां मुच्यतामेष ब्राह्मणो नितरां गुरु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "44",
    "verse": "sarahasyo dhanur-vedaḥ\nsavisargopasaṁyamaḥ\nastra-grāmaś ca bhavatā\nśikṣito yad-anugrahāt",
    "devanagari": "सरहस्यो धनुर्वेद: सविसर्गोपसंयम: ।\nअस्त्रग्रामश्च भवता शिक्षितो यदनुग्रहात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "45",
    "verse": "sa eṣa bhagavān droṇaḥ\nprajā-rūpeṇa vartate\ntasyātmano 'rdhaṁ patny āste\nnānvagād vīrasūḥ kṛpī",
    "devanagari": "स एष भगवान्द्रोण: प्रजारूपेण वर्तते ।\nतस्यात्मनोऽर्धं पत्‍न्‍यास्ते नान्वगाद्वीरसू: कृपी ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "46",
    "verse": "tad dharmajña mahā-bhāga\nbhavadbhir gauravaṁ kulam\nvṛjinaṁ nārhati prāptuṁ\npūjyaṁ vandyam abhīkṣṇaśaḥ",
    "devanagari": "तद् धर्मज्ञ महाभाग भवद्भ‍िर्गौरवं कुलम् ।\nवृजिनं नार्हति प्राप्तुं पूज्यं वन्द्यमभीक्ष्णश: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "47",
    "verse": "mā rodīd asya jananī\ngautamī pati-devatā\nyathāhaṁ mṛta-vatsārtā\nrodimy aśru-mukhī muhuḥ",
    "devanagari": "मा रोदीदस्य जननी गौतमी पतिदेवता ।\nयथाहं मृतवत्सार्ता रोदिम्यश्रुमुखी मुहु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "48",
    "verse": "yaiḥ kopitaṁ brahma-kulaṁ\nrājanyair ajitātmabhiḥ\ntat kulaṁ pradahaty āśu\nsānubandhaṁ śucārpitam",
    "devanagari": "यै: कोपितं ब्रह्मकुलं राजन्यैरजितात्मभि: ।\nतत् कुलं प्रदहत्याशु सानुबन्धं शुचार्पितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "49",
    "verse": "sūta uvāca\ndharmyaṁ nyāyyaṁ sakaruṇaṁ\nnirvyalīkaṁ samaṁ mahat\nrājā dharma-suto rājñyāḥ\npratyanandad vaco dvijāḥ",
    "devanagari": "सूत उवाच\nधर्म्यं न्याय्यं सकरुणं निर्व्यलीकं समं महत् ।\nराजा धर्मसुतो राज्ञ्या: प्रत्यनन्दद्वचो द्विजा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "50",
    "verse": "nakulaḥ sahadevaś ca\nyuyudhāno dhanañjayaḥ\nbhagavān devakī-putro\nye cānye yāś ca yoṣitaḥ",
    "devanagari": "नकुल: सहदेवश्च युयुधानो धनञ्जय: ।\nभगवान् देवकीपुत्रो ये चान्ये याश्च योषित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "51",
    "verse": "tatrāhāmarṣito bhīmas\ntasya śreyān vadhaḥ smṛtaḥ\nna bhartur nātmanaś cārthe\nyo 'han suptān śiśūn vṛthā",
    "devanagari": "तत्राहामर्षितो भीमस्तस्य श्रेयान् वध: स्मृत: ।\nन भर्तुर्नात्मनश्चार्थे योऽहन् सुप्तान् शिशून् वृथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "52",
    "verse": "niśamya bhīma-gaditaṁ\ndraupadyāś ca catur-bhujaḥ\nālokya vadanaṁ sakhyur\nidam āha hasann iva",
    "devanagari": "निशम्य भीमगदितं द्रौपद्याश्च चतुर्भुज: ।\nआलोक्य वदनं सख्युरिदमाहहसन्निव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "53",
    "verse": "śrī-bhagavān uvāca\nbrahma-bandhur na hantavya\nātatāyī vadhārhaṇaḥ\nmayaivobhayam āmnātaṁ\nparipāhy anuśāsanam",
    "devanagari": "श्रीभगवानुवाच\nब्रह्मबन्धुर्न हन्तव्य आततायी वधार्हण: ।\nमयैवोभयमाम्नातं परिपाह्यनुशासनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "54",
    "verse": "kuru pratiśrutaṁ satyaṁ\nyat tat sāntvayatā priyām\npriyaṁ ca bhīmasenasya\npāñcālyā mahyam eva ca",
    "devanagari": "कुरु प्रतिश्रुतं सत्यं यत्तत्सान्‍त्वयता प्रियाम् ।\nप्रियं च भीमसेनस्य पाञ्चाल्या मह्यमेव च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "55",
    "verse": "sūta uvāca\narjunaḥ sahasājñāya\nharer hārdam athāsinā\nmaṇiṁ jahāra mūrdhanyaṁ\ndvijasya saha-mūrdhajam",
    "devanagari": "सूत उवाच\nअर्जुन: सहसाज्ञाय हरेर्हार्दमथासिना ।\nमणिं जहार मूर्धन्यं द्विजस्य सहमूर्धजम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "56",
    "verse": "vimucya raśanā-baddhaṁ\nbāla-hatyā-hata-prabham\ntejasā maṇinā hīnaṁ\nśibirān nirayāpayat",
    "devanagari": "विमुच्य रशनाबद्धं बालहत्याहतप्रभम् ।\nतेजसा मणिना हीनं शिबिरान्निरयापयत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "57",
    "verse": "vapanaṁ draviṇādānaṁ\nsthānān niryāpaṇaṁ tathā\neṣa hi brahma-bandhūnāṁ\nvadho nānyo 'sti daihikaḥ",
    "devanagari": "वपनं द्रविणादानं स्थानान्निर्यापणं तथा ।\nएष हि ब्रह्मबन्धूनां वधो नान्योऽस्ति दैहिक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "7",
    "text": "58",
    "verse": "putra-śokāturāḥ sarve\npāṇḍavāḥ saha kṛṣṇayā\nsvānāṁ mṛtānāṁ yat kṛtyaṁ\ncakrur nirharaṇādikam",
    "devanagari": "पुत्रशोकातुरा: सर्वे पाण्डवा: सह कृष्णया ।\nस्वानां मृतानां यत्कृत्यं चक्रुर्निर्हरणादिकम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "1",
    "verse": "sūta uvāca\natha te samparetānāṁ\nsvānām udakam icchatām\ndātuṁ sakṛṣṇā gaṅgāyāṁ\npuraskṛtya yayuḥ striyaḥ",
    "devanagari": "सूत उवाच\nअथ ते सम्परेतानां स्वानामुदकमिच्छताम् ।\nदातुं सकृष्णा गङ्गायां पुरस्कृत्य ययु: स्त्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "2",
    "verse": "te ninīyodakaṁ sarve\nvilapya ca bhṛśaṁ punaḥ\nāplutā hari-pādābja-\nrajaḥ-pūta-sarij-jale",
    "devanagari": "ते निनीयोदकं सर्वे विलप्य च भृशं पुन: ।\nआप्लुता हरिपादाब्जरज:पूतसरिज्जले ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "3",
    "verse": "tatrāsīnaṁ kuru-patiṁ\ndhṛtarāṣṭraṁ sahānujam\ngāndhārīṁ putra-śokārtāṁ\npṛthāṁ kṛṣṇāṁ ca mādhavaḥ",
    "devanagari": "तत्रासीनं कुरुपतिं धृतराष्ट्रं सहानुजम् ।\nगान्धारीं पुत्रशोकार्तां पृथां कृष्णां च माधव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "4",
    "verse": "sāntvayām āsa munibhir\nhata-bandhūñ śucārpitān\nbhūteṣu kālasya gatiṁ\ndarśayan na pratikriyām",
    "devanagari": "सान्‍त्वयामास मुनिभिर्हतबन्धूञ्शुचार्पितान् ।\nभूतेषु कालस्य गतिं दर्शयन्न प्रतिक्रियाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "5",
    "verse": "sādhayitvājāta-śatroḥ\nsvaṁ rājyaṁ kitavair hṛtam\nghātayitvāsato rājñaḥ\nkaca-sparśa-kṣatāyuṣaḥ",
    "devanagari": "साधयित्वाजातशत्रो: स्वं राज्यं कितवैर्हृतम् ।\nघातयित्वासतो राज्ञ: कचस्पर्शक्षतायुष: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "6",
    "verse": "yājayitvāśvamedhais taṁ\ntribhir uttama-kalpakaiḥ\ntad-yaśaḥ pāvanaṁ dikṣu\nśata-manyor ivātanot",
    "devanagari": "याजयित्वाश्वमेधैस्तं त्रिभिरुत्तमकल्पकै: ।\nतद्यश: पावनं दिक्षु शतमन्योरिवातनोत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "7",
    "verse": "āmantrya pāṇḍu-putrāṁś ca\nśaineyoddhava-saṁyutaḥ\ndvaipāyanādibhir vipraiḥ\npūjitaiḥ pratipūjitaḥ",
    "devanagari": "आमन्‍त्र्य पाण्डुपुत्रांश्च शैनेयोद्धवसंयुत: ।\nद्वैपायनादिभिर्विप्रै: पूजितै: प्रतिपूजित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "8",
    "verse": "gantuṁ kṛtamatir brahman\ndvārakāṁ ratham āsthitaḥ\nupalebhe 'bhidhāvantīm\nuttarāṁ bhaya-vihvalām",
    "devanagari": "गन्तुं कृतमतिर्ब्रह्मन् द्वारकां रथमास्थित: ।\nउपलेभेऽभिधावन्तीमुत्तरां भयविह्वलाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "9",
    "verse": "uttarovāca\npāhi pāhi mahā-yogin\ndeva-deva jagat-pate\nnānyaṁ tvad abhayaṁ paśye\nyatra mṛtyuḥ parasparam",
    "devanagari": "उत्तरोवाच\nपाहि पाहि महायोगिन् देवदेव जगत्पते ।\nनान्यं त्वदभयं पश्ये यत्र मृत्यु: परस्परम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "10",
    "verse": "abhidravati mām īśa\nśaras taptāyaso vibho\nkāmaṁ dahatu māṁ nātha\nmā me garbho nipātyatām",
    "devanagari": "अभिद्रवति मामीश शरस्तप्तायसो विभो ।\nकामं दहतु मां नाथ मा मे गर्भो निपात्यताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "11",
    "verse": "sūta uvāca\nupadhārya vacas tasyā\nbhagavān bhakta-vatsalaḥ\napāṇḍavam idaṁ kartuṁ\ndrauṇer astram abudhyata",
    "devanagari": "सूत उवाच\nउपधार्य वचस्तस्या भगवान् भक्तवत्सल: ।\nअपाण्डवमिदं कर्तुं द्रौणेरस्त्रमबुध्यत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "12",
    "verse": "tarhy evātha muni-śreṣṭha\npāṇḍavāḥ pañca sāyakān\nātmano 'bhimukhān dīptān\nālakṣyāstrāṇy upādaduḥ",
    "devanagari": "तर्ह्येवाथ मुनिश्रेष्ठ पाण्डवा: पञ्च सायकान् ।\nआत्मनोऽभिमुखान्दीप्तानालक्ष्यास्त्राण्युपाददु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "13",
    "verse": "vyasanaṁ vīkṣya tat teṣām\nananya-viṣayātmanām\nsudarśanena svāstreṇa\nsvānāṁ rakṣāṁ vyadhād vibhuḥ",
    "devanagari": "व्यसनं वीक्ष्य तत्तेषामनन्यविषयात्मनाम् ।\nसुदर्शनेन स्वास्त्रेण स्वानां रक्षां व्यधाद्विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "14",
    "verse": "antaḥsthaḥ sarva-bhūtānām\nātmā yogeśvaro hariḥ\nsva-māyayāvṛṇod garbhaṁ\nvairāṭyāḥ kuru-tantave",
    "devanagari": "अन्त:स्थ: सर्वभूतानामात्मा योगेश्वरोहरि: ।\nस्वमाययावृणोद्गर्भं वैराट्या: कुरुतन्तवे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "15",
    "verse": "yadyapy astraṁ brahma-śiras\ntv amoghaṁ cāpratikriyam\nvaiṣṇavaṁ teja āsādya\nsamaśāmyad bhṛgūdvaha",
    "devanagari": "यद्यप्यस्त्रं ब्रह्मशिरस्त्वमोघं चाप्रतिक्रियम् ।\nवैष्णवं तेज आसाद्य समशाम्यद् भृगूद्वह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "16",
    "verse": "mā maṁsthā hy etad āścaryaṁ\nsarvāścaryamaye 'cyute\nya idaṁ māyayā devyā\nsṛjaty avati hanty ajaḥ",
    "devanagari": "मा मंस्था ह्येतदाश्चर्यं सर्वाश्चर्यमयेऽच्युते ।\nय इदं मायया देव्या सृजत्यवति हन्त्यज: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "17",
    "verse": "brahma-tejo-vinirmuktair\nātmajaiḥ saha kṛṣṇayā\nprayāṇābhimukhaṁ kṛṣṇam\nidam āha pṛthā satī",
    "devanagari": "ब्रह्मतेजोविनिर्मुक्तैरात्मजै: सह कृष्णया ।\nप्रयाणाभिमुखं कृष्णमिदमाह पृथा सती ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "18",
    "verse": "kunty uvāca\nnamasye puruṣaṁ tvādyam\nīśvaraṁ prakṛteḥ param\nalakṣyaṁ sarva-bhūtānām\nantar bahir avasthitam",
    "devanagari": "कुन्त्युवाच\nनमस्ये पुरुषं त्वाद्यमीश्वरं प्रकृते: परम् ।\nअलक्ष्यं सर्वभूतानामन्तर्बहिरवस्थितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "19",
    "verse": "māyā-javanikācchannam\najñādhokṣajam avyayam\nna lakṣyase mūḍha-dṛśā\nnaṭo nāṭyadharo yathā",
    "devanagari": "मायाजवनिकाच्छन्नमज्ञाधोक्षजमव्ययम् ।\nन लक्ष्यसे मूढद‍ृशा नटो नाट्यधरो यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "20",
    "verse": "tathā paramahaṁsānāṁ\nmunīnām amalātmanām\nbhakti-yoga-vidhānārthaṁ\nkathaṁ paśyema hi striyaḥ",
    "devanagari": "तथा परमहंसानां मुनीनाममलात्मनाम् ।\nभक्तियोगविधानार्थं कथं पश्येम हि स्त्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "21",
    "verse": "kṛṣṇāya vāsudevāya\ndevakī-nandanāya ca\nnanda-gopa-kumārāya\ngovindāya namo namaḥ",
    "devanagari": "कृष्णाय वासुदेवाय देवकीनन्दनाय च ।\nनन्दगोपकुमाराय गोविन्दाय नमो नम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "22",
    "verse": "namaḥ paṅkaja-nābhāya\nnamaḥ paṅkaja-māline\nnamaḥ paṅkaja-netrāya\nnamas te paṅkajāṅghraye",
    "devanagari": "नम: पङ्कजनाभाय नम: पङ्कजमालिने ।\nनम: पङ्कजनेत्राय नमस्ते पङ्कजाङ्‍घ्रये ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "23",
    "verse": "yathā hṛṣīkeśa khalena devakī\nkaṁsena ruddhāticiraṁ śucārpitā\nvimocitāhaṁ ca sahātmajā vibho\ntvayaiva nāthena muhur vipad-gaṇāt",
    "devanagari": "यथा हृषीकेश खलेन देवकी\nकंसेन रुद्धातिचिरं शुचार्पिता ।\nविमोचिताहं च सहात्मजा विभो\nत्वयैव नाथेन मुहुर्विपद्गणात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "24",
    "verse": "viṣān mahāgneḥ puruṣāda-darśanād\nasat-sabhāyā vana-vāsa-kṛcchrataḥ\nmṛdhe mṛdhe 'neka-mahārathāstrato\ndrauṇy-astrataś cāsma hare 'bhirakṣitāḥ",
    "devanagari": "विषान्महाग्ने: पुरुषाददर्शना-\nदसत्सभाया वनवासकृच्छ्रत: ।\nमृधे मृधेऽनेकमहारथास्त्रतो\nद्रौण्यस्त्रतश्चास्म हरेऽभिरक्षिता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "25",
    "verse": "vipadaḥ santu tāḥ śaśvat\ntatra tatra jagad-guro\nbhavato darśanaṁ yat syād\napunar bhava-darśanam",
    "devanagari": "विपद: सन्तु ता: शश्वत्तत्र तत्र जगद्गुरो ।\nभवतो दर्शनं यत्स्यादपुनर्भवदर्शनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "26",
    "verse": "janmaiśvarya-śruta-śrībhir\nedhamāna-madaḥ pumān\nnaivārhaty abhidhātuṁ vai\ntvām akiñcana-gocaram",
    "devanagari": "जन्मैश्वर्यश्रुतश्रीभिरेधमानमद: पुमान् ।\nनैवार्हत्यभिधातुं वै त्वामकिञ्चनगोचरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "27",
    "verse": "namo 'kiñcana-vittāya\nnivṛtta-guṇa-vṛttaye\nātmārāmāya śāntāya\nkaivalya-pataye namaḥ",
    "devanagari": "नमोऽकिञ्चनवित्ताय निवृत्तगुणवृत्तये ।\nआत्मारामाय शान्ताय कैवल्यपतये नम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "28",
    "verse": "manye tvāṁ kālam īśānam\nanādi-nidhanaṁ vibhum\nsamaṁ carantaṁ sarvatra\nbhūtānāṁ yan mithaḥ kaliḥ",
    "devanagari": "मन्ये त्वां कालमीशानमनादिनिधनं विभुम् ।\nसमं चरन्तं सर्वत्र भूतानां यन्मिथ: कलि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "29",
    "verse": "na veda kaścid bhagavaṁś cikīrṣitaṁ\ntavehamānasya nṛṇāṁ viḍambanam\nna yasya kaścid dayito 'sti karhicid\ndveṣyaś ca yasmin viṣamā matir nṛṇām",
    "devanagari": "न वेद कश्चिद्भगवंश्चिकीर्षितं\nतवेहमानस्य नृणां विडम्बनम् ।\nन यस्य कश्चिद्दयितोऽस्ति कर्हिचिद्\nद्वेष्यश्च यस्मिन् विषमा मतिर्नृणाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "30",
    "verse": "janma karma ca viśvātmann\najasyākartur ātmanaḥ\ntiryaṅ-nṟṣiṣu yādaḥsu\ntad atyanta-viḍambanam",
    "devanagari": "जन्म कर्म च विश्वात्मन्नजस्याकर्तुरात्मन: ।\nतिर्यङ्‍नृषिषु याद:सु तदत्यन्तविडम्बनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "31",
    "verse": "gopy ādade tvayi kṛtāgasi dāma tāvad\nyā te daśāśru-kalilāñjana-sambhramākṣam\nvaktraṁ ninīya bhaya-bhāvanayā sthitasya\nsā māṁ vimohayati bhīr api yad bibheti",
    "devanagari": "गोप्याददे त्वयि कृतागसि दाम तावद्\nया ते दशाश्रुकलिलाञ्जनसम्भ्रमाक्षम् ।\nवक्त्रं निनीय भयभावनया स्थितस्य\nसा मां विमोहयति भीरपि यद्ब‍िभेति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "32",
    "verse": "kecid āhur ajaṁ jātaṁ\npuṇya-ślokasya kīrtaye\nyadoḥ priyasyānvavāye\nmalayasyeva candanam",
    "devanagari": "केचिदाहुरजं जातं पुण्यश्लोकस्य कीर्तये ।\nयदो: प्रियस्यान्ववाये मलयस्येव चन्दनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "33",
    "verse": "apare vasudevasya\ndevakyāṁ yācito 'bhyagāt\najas tvam asya kṣemāya\nvadhāya ca sura-dviṣām",
    "devanagari": "अपरे वसुदेवस्य देवक्यां याचितोऽभ्यगात् ।\nअजस्त्वमस्य क्षेमाय वधाय च सुरद्विषाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "34",
    "verse": "bhārāvatāraṇāyānye\nbhuvo nāva ivodadhau\nsīdantyā bhūri-bhāreṇa\njāto hy ātma-bhuvārthitaḥ",
    "devanagari": "भारावतारणायान्ये भुवो नाव इवोदधौ ।\nसीदन्त्या भूरिभारेण जातो ह्यात्मभुवार्थित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "35",
    "verse": "bhave 'smin kliśyamānānām\navidyā-kāma-karmabhiḥ\nśravaṇa-smaraṇārhāṇi\nkariṣyann iti kecana",
    "devanagari": "भवेऽस्मिन् क्लिश्यमानानामविद्याकामकर्मभि: ।\nश्रवणस्मरणार्हाणि करिष्यन्निति केचन ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "36",
    "verse": "śṛṇvanti gāyanti gṛṇanty abhīkṣṇaśaḥ\nsmaranti nandanti tavehitaṁ janāḥ\nta eva paśyanty acireṇa tāvakaṁ\nbhava-pravāhoparamaṁ padāmbujam",
    "devanagari": "श‍ृण्वन्ति गायन्ति गृणन्त्यभीक्ष्णश:\nस्मरन्ति नन्दन्ति तवेहितं जना: ।\nत एव पश्यन्त्यचिरेण तावकं\nभवप्रवाहोपरमं पदाम्बुजम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "37",
    "verse": "apy adya nas tvaṁ sva-kṛtehita prabho\njihāsasi svit suhṛdo 'nujīvinaḥ\nyeṣāṁ na cānyad bhavataḥ padāmbujāt\nparāyaṇaṁ rājasu yojitāṁhasām",
    "devanagari": "अप्यद्य नस्त्वं स्वकृतेहित प्रभो\nजिहाससि स्वित्सुहृदोऽनुजीविन: ।\nयेषां न चान्यद्भवत: पदाम्बुजात्\nपरायणं राजसु योजितांहसाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "38",
    "verse": "ke vayaṁ nāma-rūpābhyāṁ\nyadubhiḥ saha pāṇḍavāḥ\nbhavato 'darśanaṁ yarhi\nhṛṣīkāṇām iveśituḥ",
    "devanagari": "के वयं नामरूपाभ्यां यदुभि: सह पाण्डवा: ।\nभवतोऽदर्शनं यर्हि हृषीकाणामिवेशितु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "39",
    "verse": "neyaṁ śobhiṣyate tatra\nyathedānīṁ gadādhara\ntvat-padair aṅkitā bhāti\nsva-lakṣaṇa-vilakṣitaiḥ",
    "devanagari": "नेयं शोभिष्यते तत्र यथेदानीं गदाधर ।\nत्वत्पदैरङ्किता भाति स्वलक्षणविलक्षितै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "40",
    "verse": "ime jana-padāḥ svṛddhāḥ\nsupakvauṣadhi-vīrudhaḥ\nvanādri-nady-udanvanto\nhy edhante tava vīkṣitaiḥ",
    "devanagari": "इमे जनपदा: स्वृद्धा: सुपक्‍वौषधिवीरुध: ।\nवनाद्रिनद्युदन्वन्तो ह्येधन्ते तव वीक्षितै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "41",
    "verse": "atha viśveśa viśvātman\nviśva-mūrte svakeṣu me\nsneha-pāśam imaṁ chindhi\ndṛḍhaṁ pāṇḍuṣu vṛṣṇiṣu",
    "devanagari": "अथ विश्वेश विश्वात्मन् विश्वमूर्ते स्वकेषु मे ।\nस्‍नेहपाशमिमं छिन्धि द‍ृढं पाण्डुषु वृष्णिषु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "42",
    "verse": "tvayi me 'nanya-viṣayā\nmatir madhu-pate 'sakṛt\nratim udvahatād addhā\ngaṅgevaugham udanvati",
    "devanagari": "त्वयि मेऽनन्यविषया मतिर्मधुपतेऽसकृत् ।\nरतिमुद्वहतादद्धा गङ्गेवौघमुदन्वति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "43",
    "verse": "śrī-kṛṣṇa kṛṣṇa-sakha vṛṣṇy-ṛṣabhāvani-dhrug-\nrājanya-vaṁśa-dahanānapavarga-vīrya\ngovinda go-dvija-surārti-harāvatāra\nyogeśvarākhila-guro bhagavan namas te",
    "devanagari": "श्रीकृष्ण कृष्णसख वृष्ण्यृषभावनिध्रुग्\nराजन्यवंशदहनानपवर्गवीर्य ।\nगोविन्द गोद्विजसुरार्तिहरावतार\nयोगेश्वराखिलगुरो भगवन्नमस्ते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "44",
    "verse": "sūta uvāca\npṛthayetthaṁ kala-padaiḥ\npariṇūtākhilodayaḥ\nmandaṁ jahāsa vaikuṇṭho\nmohayann iva māyayā",
    "devanagari": "सूत उवाच\nपृथयेत्थं कलपदै: परिणूताखिलोदय: ।\nमन्दं जहास वैकुण्ठो मोहयन्निव मायया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "45",
    "verse": "tāṁ bāḍham ity upāmantrya\npraviśya gajasāhvayam\nstriyaś ca sva-puraṁ yāsyan\npremṇā rājñā nivāritaḥ",
    "devanagari": "तां बाढमित्युपामन्‍त्र्य प्रविश्य गजसाह्वयम् ।\nस्त्रियश्च स्वपुरं यास्यन् प्रेम्णा राज्ञा निवारित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "46",
    "verse": "vyāsādyair īśvarehājñaiḥ\nkṛṣṇenādbhuta-karmaṇā\nprabodhito 'pītihāsair\nnābudhyata śucārpitaḥ",
    "devanagari": "व्यासाद्यैरीश्वरेहाज्ञै: कृष्णेनाद्भुतकर्मणा ।\nप्रबोधितोऽपीतिहासैर्नाबुध्यत शुचार्पित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "47",
    "verse": "āha rājā dharma-sutaś\ncintayan suhṛdāṁ vadham\nprākṛtenātmanā viprāḥ\nsneha-moha-vaśaṁ gataḥ",
    "devanagari": "आह राजा धर्मसुतश्चिन्तयन् सुहृदां वधम् ।\nप्राकृतेनात्मना विप्रा: स्‍नेहमोहवशं गत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "48",
    "verse": "aho me paśyatājñānaṁ\nhṛdi rūḍhaṁ durātmanaḥ\npārakyasyaiva dehasya\nbahvyo me 'kṣauhiṇīr hatāḥ",
    "devanagari": "अहो मे पश्यताज्ञानं हृदि रूढं दुरात्मन: ।\nपारक्यस्यैव देहस्य बह्‍व्यो मेऽक्षौहिणीर्हता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "49",
    "verse": "bāla-dvija-suhṛn-mitra-\npitṛ-bhrātṛ-guru-druhaḥ\nna me syān nirayān mokṣo\nhy api varṣāyutāyutaiḥ",
    "devanagari": "बालद्विजसुहृन्मित्रपितृभ्रातृगुरुद्रुह: ।\nन मे स्यान्निरयान्मोक्षो ह्यपि वर्षायुतायुतै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "50",
    "verse": "naino rājñaḥ prajā-bhartur\ndharma-yuddhe vadho dviṣām\niti me na tu bodhāya\nkalpate śāsanaṁ vacaḥ",
    "devanagari": "नैनो राज्ञ: प्रजाभर्तुर्धर्मयुद्धे वधो द्विषाम् ।\nइति मे न तु बोधाय कल्पते शासनं वच: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "51",
    "verse": "strīṇāṁ mad-dhata-bandhūnāṁ\ndroho yo 'sāv ihotthitaḥ\nkarmabhir gṛhamedhīyair\nnāhaṁ kalpo vyapohitum",
    "devanagari": "स्त्रीणां मद्धतबन्धूनां द्रोहो योऽसाविहोत्थित: ।\nकर्मभिर्गृहमेधीयैर्नाहं कल्पो व्यपोहितुम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "8",
    "text": "52",
    "verse": "yathā paṅkena paṅkāmbhaḥ\nsurayā vā surākṛtam\nbhūta-hatyāṁ tathaivaikāṁ\nna yajñair mārṣṭum arhati",
    "devanagari": "यथा पङ्केन पङ्काम्भ: सुरया वा सुराकृतम् ।\nभूतहत्यां तथैवैकां न यज्ञैर्मार्ष्टुमर्हति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "1",
    "verse": "sūta uvāca\niti bhītaḥ prajā-drohāt\nsarva-dharma-vivitsayā\ntato vinaśanaṁ prāgād\nyatra deva-vrato 'patat",
    "devanagari": "सूत उवाच\nइति भीत: प्रजाद्रोहात्सर्वधर्मविवित्सया ।\nततो विनशनं प्रागाद् यत्र देवव्रतोऽपतत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "2",
    "verse": "tadā te bhrātaraḥ sarve\nsadaśvaiḥ svarṇa-bhūṣitaiḥ\nanvagacchan rathair viprā\nvyāsa-dhaumyādayas tathā",
    "devanagari": "तदा ते भ्रातर: सर्वे सदश्वै: स्वर्णभूषितै: ।\nअन्वगच्छन् रथैर्विप्रा व्यासधौम्यादयस्तथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "3",
    "verse": "bhagavān api viprarṣe\nrathena sa-dhanañjayaḥ\nsa tair vyarocata nṛpaḥ\nkuvera iva guhyakaiḥ",
    "devanagari": "भगवानपि विप्रर्षे रथेन सधनञ्जय: ।\nस तैर्व्यरोचत नृप: कुवेर इव गुह्यकै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "4",
    "verse": "dṛṣṭvā nipatitaṁ bhūmau\ndivaś cyutam ivāmaram\npraṇemuḥ pāṇḍavā bhīṣmaṁ\nsānugāḥ saha cakriṇā",
    "devanagari": "द‍ृष्ट्वा निपतितं भूमौ दिवश्‍च्युतमिवामरम् ।\nप्रणेमु: पाण्डवा भीष्मं सानुगा: सह चक्रिणा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "5",
    "verse": "tatra brahmarṣayaḥ sarve\ndevarṣayaś ca sattama\nrājarṣayaś ca tatrāsan\ndraṣṭuṁ bharata-puṅgavam",
    "devanagari": "तत्र ब्रह्मर्षय: सर्वे देवर्षयश्च सत्तम ।\nराजर्षयश्च तत्रासन् द्रष्टुं भरतपुङ्गवम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "6",
    "verse": "parvato nārado dhaumyo\nbhagavān bādarāyaṇaḥ\nbṛhadaśvo bharadvājaḥ\nsaśiṣyo reṇukā-sutaḥ",
    "devanagari": "पर्वतो नारदो धौम्यो भगवान् बादरायण: ।\nबृहदश्वो भरद्वाज: सशिष्यो रेणुकासुत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "7",
    "verse": "vasiṣṭha indrapramadas\ntrito gṛtsamado 'sitaḥ\nkakṣīvān gautamo 'triś ca\nkauśiko 'tha sudarśanaḥ",
    "devanagari": "वसिष्ठ इन्द्रप्रमदस्त्रितो गृत्समदोऽसित: ।\nकक्षीवान् गौतमोऽत्रिश्च कौशिकोऽथ सुदर्शन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "8",
    "verse": "anye ca munayo brahman\nbrahmarātādayo 'malāḥ\nśiṣyair upetā ājagmuḥ\nkaśyapāṅgirasādayaḥ",
    "devanagari": "अन्ये च मुनयो ब्रह्मन् ब्रह्मरातादयोऽमला: ।\nशिष्यैरुपेता आजग्मु: कश्यपाङ्गिरसादय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "9",
    "verse": "tān sametān mahā-bhāgān\nupalabhya vasūttamaḥ\npūjayām āsa dharma-jño\ndeśa-kāla-vibhāgavit",
    "devanagari": "तान् समेतान् महाभागानुपलभ्य वसूत्तम: ।\nपूजयामास धर्मज्ञो देशकालविभागवित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "10",
    "verse": "kṛṣṇaṁ ca tat-prabhāva-jña\nāsīnaṁ jagad-īśvaram\nhṛdi-sthaṁ pūjayām āsa\nmāyayopātta-vigraham",
    "devanagari": "कृष्णं च तत्प्रभावज्ञ आसीनं जगदीश्वरम् ।\nहृदिस्थं पूजयामास माययोपात्तविग्रहम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "11",
    "verse": "pāṇḍu-putrān upāsīnān\npraśraya-prema-saṅgatān\nabhyācaṣṭānurāgāśrair\nandhībhūtena cakṣuṣā",
    "devanagari": "पाण्डुपुत्रानुपासीनान् प्रश्रयप्रेमसङ्गतान् ।\nअभ्याचष्टानुरागाश्रैरन्धीभूतेन चक्षुषा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "12",
    "verse": "aho kaṣṭam aho 'nyāyyaṁ\nyad yūyaṁ dharma-nandanāḥ\njīvituṁ nārhatha kliṣṭaṁ\nvipra-dharmācyutāśrayāḥ",
    "devanagari": "अहो कष्टमहोऽन्याय्यं यद्यूयं धर्मनन्दना: ।\nजीवितुं नार्हथ क्लिष्टं विप्रधर्माच्युताश्रया: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "13",
    "verse": "saṁsthite 'tirathe pāṇḍau\npṛthā bāla-prajā vadhūḥ\nyuṣmat-kṛte bahūn kleśān\nprāptā tokavatī muhuḥ",
    "devanagari": "संस्थितेऽतिरथे पाण्डौ पृथा बालप्रजा वधू: ।\nयुष्मत्कृते बहून् क्लेशान् प्राप्ता तोकवती मुहु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "14",
    "verse": "sarvaṁ kāla-kṛtaṁ manye\nbhavatāṁ ca yad-apriyam\nsapālo yad-vaśe loko\nvāyor iva ghanāvaliḥ",
    "devanagari": "सर्वं कालकृतं मन्ये भवतां च यदप्रियम् ।\nसपालो यद्वशे लोको वायोरिव घनावलि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "15",
    "verse": "yatra dharma-suto rājā\ngadā-pāṇir vṛkodaraḥ\nkṛṣṇo 'strī gāṇḍivaṁ cāpaṁ\nsuhṛt kṛṣṇas tato vipat",
    "devanagari": "यत्र धर्मसुतो राजा गदापाणिर्वृकोदर: ।\nकृष्णोऽस्त्री गाण्डिवं चापं सुहृत्कृष्णस्ततो विपत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "16",
    "verse": "na hy asya karhicid rājan\npumān veda vidhitsitam\nyad vijijñāsayā yuktā\nmuhyanti kavayo 'pi hi",
    "devanagari": "न ह्यस्य कर्हिचिद्राजन् पुमान् वेद विधित्सितम् ।\nयद्विजिज्ञासया युक्ता मुह्यन्ति कवयोऽपि हि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "17",
    "verse": "tasmād idaṁ daiva-tantraṁ\nvyavasya bharatarṣabha\ntasyānuvihito 'nāthā\nnātha pāhi prajāḥ prabho",
    "devanagari": "तस्मादिदं दैवतन्त्रं व्यवस्य भरतर्षभ ।\nतस्यानुविहितोऽनाथा नाथ पाहि प्रजा: प्रभो ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "18",
    "verse": "eṣa vai bhagavān sākṣād\nādyo nārāyaṇaḥ pumān\nmohayan māyayā lokaṁ\ngūḍhaś carati vṛṣṇiṣu",
    "devanagari": "एष वै भगवान्साक्षादाद्यो नारायण: पुमान् ।\nमोहयन्मायया लोकं गूढश्चरति वृष्णिषु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "19",
    "verse": "asyānubhāvaṁ bhagavān\nveda guhyatamaṁ śivaḥ\ndevarṣir nāradaḥ sākṣād\nbhagavān kapilo nṛpa",
    "devanagari": "अस्यानुभावं भगवान् वेद गुह्यतमं शिव: ।\nदेवर्षिर्नारद: साक्षाद्भगवान् कपिलो नृप ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "20",
    "verse": "yaṁ manyase mātuleyaṁ\npriyaṁ mitraṁ suhṛttamam\nakaroḥ sacivaṁ dūtaṁ\nsauhṛdād atha sārathim",
    "devanagari": "यं मन्यसे मातुलेयं प्रियं मित्रं सुहृत्तमम् ।\nअकरो: सचिवं दूतं सौहृदादथ सारथिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "21",
    "verse": "sarvātmanaḥ sama-dṛśo\nhy advayasyānahaṅkṛteḥ\ntat-kṛtaṁ mati-vaiṣamyaṁ\nniravadyasya na kvacit",
    "devanagari": "सर्वात्मन: समद‍ृशो ह्यद्वयस्यानहङ्‍कृते: ।\nतत्कृतं मतिवैषम्यं निरवद्यस्य न क्‍वचित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "22",
    "verse": "tathāpy ekānta-bhakteṣu\npaśya bhūpānukampitam\nyan me 'sūṁs tyajataḥ sākṣāt\nkṛṣṇo darśanam āgataḥ",
    "devanagari": "तथाप्येकान्तभक्तेषु पश्य भूपानुकम्पितम् ।\nयन्मेऽसूंस्त्यजत: साक्षात्कृष्णो दर्शनमागत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "23",
    "verse": "bhaktyāveśya mano yasmin\nvācā yan-nāma kīrtayan\ntyajan kalevaraṁ yogī\nmucyate kāma-karmabhiḥ",
    "devanagari": "भक्त्यावेश्य मनो यस्मिन् वाचा यन्नाम कीर्तयन् ।\nत्यजन् कलेवरं योगी मुच्यते कामकर्मभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "24",
    "verse": "sa deva-devo bhagavān pratīkṣatāṁ\nkalevaraṁ yāvad idaṁ hinomy aham\nprasanna-hāsāruṇa-locanollasan-\nmukhāmbujo dhyāna-pathaś catur-bhujaḥ",
    "devanagari": "स देवदेवो भगवान् प्रतीक्षतां\nकलेवरं यावदिदं हिनोम्यहम् ।\nप्रसन्नहासारुणलोचनोल्लस-\nन्मुखाम्बुजो ध्यानपथश्चतुर्भुज: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "25",
    "verse": "sūta uvāca\nyudhiṣṭhiras tad ākarṇya\nśayānaṁ śara-pañjare\napṛcchad vividhān dharmān\nṛṣīṇāṁ cānuśṛṇvatām",
    "devanagari": "सूत उवाच\nयुधिष्ठिरस्तदाकर्ण्य शयानं शरपञ्जरे ।\nअपृच्छद्विविधान्धर्मानृषीणां चानुश‍ृण्वताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "26",
    "verse": "puruṣa-sva-bhāva-vihitān\nyathā-varṇaṁ yathāśramam\nvairāgya-rāgopādhibhyām\nāmnātobhaya-lakṣaṇān",
    "devanagari": "पुरुषस्वभावविहितान् यथावर्णं यथाश्रमम् ।\nवैराग्यरागोपाधिभ्यामाम्नातोभयलक्षणान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "27",
    "verse": "dāna-dharmān rāja-dharmān\nmokṣa-dharmān vibhāgaśaḥ\nstrī-dharmān bhagavad-dharmān\nsamāsa-vyāsa-yogataḥ",
    "devanagari": "दानधर्मान् राजधर्मान् मोक्षधर्मान् विभागश: ।\nस्त्रीधर्मान् भगवद्धर्मान् समासव्यासयोगत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "28",
    "verse": "dharmārtha-kāma-mokṣāṁś ca\nsahopāyān yathā mune\nnānākhyānetihāseṣu\nvarṇayām āsa tattvavit",
    "devanagari": "धर्मार्थकाममोक्षांश्च सहोपायान् यथा मुने ।\nनानाख्यानेतिहासेषु वर्णयामास तत्त्ववित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "29",
    "verse": "dharmaṁ pravadatas tasya\nsa kālaḥ pratyupasthitaḥ\nyo yoginaś chanda-mṛtyor\nvāñchitas tūttarāyaṇaḥ",
    "devanagari": "धर्मं प्रवदतस्तस्य स काल: प्रत्युपस्थित: ।\nयो योगिनश्छन्दमृत्योर्वाञ्छितस्तूत्तरायण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "30",
    "verse": "tadopasaṁhṛtya giraḥ sahasraṇīr\nvimukta-saṅgaṁ mana ādi-pūruṣe\nkṛṣṇe lasat-pīta-paṭe catur-bhuje\npuraḥ sthite 'mīlita-dṛg vyadhārayat",
    "devanagari": "तदोपसंहृत्य गिर: सहस्रणी-\nर्विमुक्तसङ्गं मन आदिपूरुषे ।\nकृष्णे लसत्पीतपटे चतुर्भुजे\nपुर:स्थितेऽमीलितद‍ृग्व्यधारयत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "31",
    "verse": "viśuddhayā dhāraṇayā hatāśubhas\ntad-īkṣayaivāśu gatā-yudha-śramaḥ\nnivṛtta-sarvendriya-vṛtti-vibhramas\ntuṣṭāva janyaṁ visṛjañ janārdanam",
    "devanagari": "विशुद्धया धारणया हताशुभ-\nस्तदीक्षयैवाशु गतायुधश्रम: ।\nनिवृत्तसर्वेन्द्रियवृत्तिविभ्रम-\nस्तुष्टाव जन्यं विसृजञ्जनार्दनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "32",
    "verse": "śrī-bhīṣma uvāca\niti matir upakalpitā vitṛṣṇā\nbhagavati sātvata-puṅgave vibhūmni\nsva-sukham upagate kvacid vihartuṁ\nprakṛtim upeyuṣi yad-bhava-pravāhaḥ",
    "devanagari": "श्रीभीष्म उवाच\nइति मतिरुपकल्पिता वितृष्णा\nभगवति सात्वतपुङ्गवे विभूम्नि ।\nस्वसुखमुपगते क्‍वचिद्विहर्तुं\nप्रकृतिमुपेयुषि यद्भ‍वप्रवाह: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "33",
    "verse": "tri-bhuvana-kamanaṁ tamāla-varṇaṁ\nravi-kara-gaura-varāmbaraṁ dadhāne\nvapur alaka-kulāvṛtānanābjaṁ\nvijaya-sakhe ratir astu me 'navadyā",
    "devanagari": "त्रिभुवनकमनं तमालवर्णं\nरविकरगौरवराम्बरं दधाने ।\nवपुरलककुलावृताननाब्जं\nविजयसखे रतिरस्तु मेऽनवद्या ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "34",
    "verse": "yudhi turaga-rajo-vidhūmra-viṣvak-\nkaca-lulita-śramavāry-alaṅkṛtāsye\nmama niśita-śarair vibhidyamāna-\ntvaci vilasat-kavace 'stu kṛṣṇa ātmā",
    "devanagari": "युधि तुरगरजोविधूम्रविष्वक्-\nकचलुलितश्रमवार्यलङ्‍कृतास्ये ।\nमम निशितशरैर्विभिद्यमान-\nत्वचि विलसत्कवचेऽस्तु कृष्ण आत्मा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "35",
    "verse": "sapadi sakhi-vaco niśamya madhye\nnija-parayor balayo rathaṁ niveśya\nsthitavati para-sainikāyur akṣṇā\nhṛtavati pārtha-sakhe ratir mamāstu",
    "devanagari": "सपदि सखिवचो निशम्य मध्ये\nनिजपरयोर्बलयो रथं निवेश्य ।\nस्थितवति परसैनिकायुरक्ष्णा\nहृतवति पार्थसखे रतिर्ममास्तु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "36",
    "verse": "vyavahita-pṛtanā-mukhaṁ nirīkṣya\nsva-jana-vadhād vimukhasya doṣa-buddhyā\nkumatim aharad ātma-vidyayā yaś\ncaraṇa-ratiḥ paramasya tasya me 'stu",
    "devanagari": "व्यवहितपृतनामुखं निरीक्ष्य\nस्वजनवधाद्विमुखस्य दोषबुद्ध्या ।\nकुमतिमहरदात्मविद्यया य-\nश्चरणरति: परमस्य तस्य मेऽस्तु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "37",
    "verse": "sva-nigamam apahāya mat-pratijñām\nṛtam adhikartum avapluto rathasthaḥ\ndhṛta-ratha-caraṇo 'bhyayāc caladgur\nharir iva hantum ibhaṁ gatottarīyaḥ",
    "devanagari": "स्वनिगममपहाय मत्प्रतिज्ञा-\nमृतमधिकर्तुमवप्लुतो रथस्थ: ।\nधृतरथचरणोऽभ्ययाच्चलद्गु-\nर्हरिरिव हन्तुमिभं गतोत्तरीय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "38",
    "verse": "śita-viśikha-hato viśīrṇa-daṁśaḥ\nkṣataja-paripluta ātatāyino me\nprasabham abhisasāra mad-vadhārthaṁ\nsa bhavatu me bhagavān gatir mukundaḥ",
    "devanagari": "शितविशिखहतो विशीर्णदंश:\nक्षतजपरिप्लुत आततायिनो मे ।\nप्रसभमभिससार मद्वधार्थं\nस भवतु मे भगवान् गतिर्मुकुन्द: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "39",
    "verse": "vijaya-ratha-kuṭumba ātta-totre\ndhṛta-haya-raśmini tac-chriyekṣaṇīye\nbhagavati ratir astu me mumūrṣor\nyam iha nirīkṣya hatā gatāḥ sva-rūpam",
    "devanagari": "विजयरथकुटुम्ब आत्ततोत्रे\nधृतहयरश्मिनि तच्छ्रियेक्षणीये ।\nभगवति रतिरस्तु मे मुमूर्षो-\nर्यमिह निरीक्ष्य हता गता: स्वरूपम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "40",
    "verse": "lalita-gati-vilāsa-valguhāsa-\npraṇaya-nirīkṣaṇa-kalpitorumānāḥ\nkṛta-manu-kṛta-vatya unmadāndhāḥ\nprakṛtim agan kila yasya gopa-vadhvaḥ",
    "devanagari": "ललितगतिविलासवल्गुहास-\nप्रणयनिरीक्षणकल्पितोरुमाना: ।\nकृतमनुकृतवत्य उन्मदान्धा:\nप्रकृतिमगन् किल यस्य गोपवध्व: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "41",
    "verse": "muni-gaṇa-nṛpa-varya-saṅkule 'ntaḥ-\nsadasi yudhiṣṭhira-rājasūya eṣām\narhaṇam upapeda īkṣaṇīyo\nmama dṛśi-gocara eṣa āvir ātmā",
    "devanagari": "मुनिगणनृपवर्यसङ्कुलेऽन्त:\nसदसि युधिष्ठिरराजसूय एषाम् ।\nअर्हणमुपपेद ईक्षणीयो\nमम द‍ृशिगोचर एष आविरात्मा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "42",
    "verse": "tam imam aham ajaṁ śarīra-bhājāṁ\nhṛdi hṛdi dhiṣṭhitam ātma-kalpitānām\npratidṛśam iva naikadhārkam ekaṁ\nsamadhi-gato 'smi vidhūta-bheda-mohaḥ",
    "devanagari": "तमिममहमजं शरीरभाजां\nहृदि हृदि धिष्ठितमात्मकल्पितानाम् ।\nप्रतिद‍ृशमिव नैकधार्कमेकं\nसमधिगतोऽस्मि विधूतभेदमोह: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "43",
    "verse": "sūta uvāca\nkṛṣṇa evaṁ bhagavati\nmano-vāg-dṛṣṭi-vṛttibhiḥ\nātmany ātmānam āveśya\nso 'ntaḥśvāsa upāramat",
    "devanagari": "सूत उवाच\nकृष्ण एवं भगवति मनोवाग्द‍ृष्टिवृत्तिभि: ।\nआत्मन्यात्मानमावेश्य सोऽन्त:श्वास उपारमत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "44",
    "verse": "sampadyamānam ājñāya\nbhīṣmaṁ brahmaṇi niṣkale\nsarve babhūvus te tūṣṇīṁ\nvayāṁsīva dinātyaye",
    "devanagari": "सम्पद्यमानमाज्ञाय भीष्मं ब्रह्मणि निष्कले ।\nसर्वे बभूवुस्ते तूष्णीं वयांसीव दिनात्यये ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "45",
    "verse": "tatra dundubhayo nedur\ndeva-mānava-vāditāḥ\nśaśaṁsuḥ sādhavo rājñāṁ\nkhāt petuḥ puṣpa-vṛṣṭayaḥ",
    "devanagari": "तत्र दुन्दुभयो नेदुर्देवमानववादिता: ।\nशशंसु: साधवो राज्ञां खात्पेतु: पुष्पवृष्टय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "46",
    "verse": "tasya nirharaṇādīni\nsamparetasya bhārgava\nyudhiṣṭhiraḥ kārayitvā\nmuhūrtaṁ duḥkhito 'bhavat",
    "devanagari": "तस्य निर्हरणादीनि सम्परेतस्य भार्गव ।\nयुधिष्ठिर: कारयित्वा मुहूर्तं दु:खितोऽभवत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "47",
    "verse": "tuṣṭuvur munayo hṛṣṭāḥ\nkṛṣṇaṁ tad-guhya-nāmabhiḥ\ntatas te kṛṣṇa-hṛdayāḥ\nsvāśramān prayayuḥ punaḥ",
    "devanagari": "तुष्टुवुर्मुनयो हृष्टा: कृष्णं तद्गुह्यनामभि: ।\nततस्ते कृष्णहृदया: स्वाश्रमान् प्रययु: पुन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "48",
    "verse": "tato yudhiṣṭhiro gatvā\nsaha-kṛṣṇo gajāhvayam\npitaraṁ sāntvayām āsa\ngāndhārīṁ ca tapasvinīm",
    "devanagari": "ततो युधिष्ठिरो गत्वा सहकृष्णो गजाह्वयम् ।\nपितरं सान्‍त्वयामास गान्धारीं च तपस्विनीम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "9",
    "text": "49",
    "verse": "pitrā cānumato rājā\nvāsudevānumoditaḥ\ncakāra rājyaṁ dharmeṇa\npitṛ-paitāmahaṁ vibhuḥ",
    "devanagari": "पित्रा चानुमतो राजा वासुदेवानुमोदित: ।\nचकार राज्यं धर्मेण पितृपैतामहं विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "1",
    "verse": "śaunaka uvāca\nhatvā svariktha-spṛdha ātatāyino\nyudhiṣṭhiro dharma-bhṛtāṁ variṣṭhaḥ\nsahānujaiḥ pratyavaruddha-bhojanaḥ\nkathaṁ pravṛttaḥ kim akāraṣīt tataḥ",
    "devanagari": "शौनक उवाच\nहत्वा स्वरिक्थस्पृध आततायिनो\nयुधिष्ठिरो धर्मभृतां वरिष्ठ: ।\nसहानुजै: प्रत्यवरुद्धभोजन:\nकथं प्रवृत्त: किमकारषीत्तत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "2",
    "verse": "sūta uvāca\nvaṁśaṁ kuror vaṁśa-davāgni-nirhṛtaṁ\nsaṁrohayitvā bhava-bhāvano hariḥ\nniveśayitvā nija-rājya īśvaro\nyudhiṣṭhiraṁ prīta-manā babhūva ha",
    "devanagari": "सूत उवाच\nवंशं कुरोर्वंशदवाग्निनिर्हृतं\nसंरोहयित्वा भवभावनो हरि: ।\nनिवेशयित्वा निजराज्य ईश्वरो\nयुधिष्ठिरं प्रीतमना बभूव ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "3",
    "verse": "niśamya bhīṣmoktam athācyutoktaṁ\npravṛtta-vijñāna-vidhūta-vibhramaḥ\nśaśāsa gām indra ivājitāśrayaḥ\nparidhyupāntām anujānuvartitaḥ",
    "devanagari": "निशम्य भीष्मोक्तमथाच्युतोक्तं\nप्रवृत्तविज्ञानविधूतविभ्रम: ।\nशशास गामिन्द्र इवाजिताश्रय:\nपरिध्युपान्तामनुजानुवर्तित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "4",
    "verse": "kāmaṁ vavarṣa parjanyaḥ\nsarva-kāma-dughā mahī\nsiṣicuḥ sma vrajān gāvaḥ\npayasodhasvatīr mudā",
    "devanagari": "कामं ववर्ष पर्जन्य: सर्वकामदुघा मही ।\nसिषिचु: स्म व्रजान् गाव: पयसोधस्वतीर्मुदा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "5",
    "verse": "nadyaḥ samudrā girayaḥ\nsavanaspati-vīrudhaḥ\nphalanty oṣadhayaḥ sarvāḥ\nkāmam anvṛtu tasya vai",
    "devanagari": "नद्य: समुद्रा गिरय: सवनस्पतिवीरुध: ।\nफलन्त्योषधय: सर्वा: काममन्वृतु तस्य वै ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "6",
    "verse": "nādhayo vyādhayaḥ kleśā\ndaiva-bhūtātma-hetavaḥ\najāta-śatrāv abhavan\njantūnāṁ rājñi karhicit",
    "devanagari": "नाधयो व्याधय: क्लेशा दैवभूतात्महेतव: ।\nअजातशत्रावभवन् जन्तूनां राज्ञि कर्हिचित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "7",
    "verse": "uṣitvā hāstinapure\nmāsān katipayān hariḥ\nsuhṛdāṁ ca viśokāya\nsvasuś ca priya-kāmyayā",
    "devanagari": "उषित्वा हास्तिनपुरे मासान् कतिपयान् हरि: ।\nसुहृदां च विशोकाय स्वसुश्च प्रियकाम्यया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "8",
    "verse": "āmantrya cābhyanujñātaḥ\npariṣvajyābhivādya tam\nāruroha rathaṁ kaiścit\npariṣvakto 'bhivāditaḥ",
    "devanagari": "आमन्‍त्र्य चाभ्यनुज्ञात: परिष्वज्याभिवाद्य तम् ।\nआरुरोह रथं कैश्चित्परिष्वक्तोऽभिवादित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "10",
    "verse": "vṛkodaraś ca dhaumyaś ca\nstriyo matsya-sutādayaḥ\nna sehire vimuhyanto\nvirahaṁ śārṅga-dhanvanaḥ",
    "devanagari": "सुभद्रा द्रौपदी कुन्ती विराटतनया तथा ।\nगान्धारी धृतराष्ट्रश्च युयुत्सुर्गौतमो यमौ ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "9",
    "verse": "subhadrā draupadī kuntī\nvirāṭa-tanayā tathā\ngāndhārī dhṛtarāṣṭraś ca\nyuyutsur gautamo yamau",
    "devanagari": "वृकोदरश्च धौम्यश्च स्त्रियो मत्स्यसुतादय: ।\nन सेहिरे विमुह्यन्तो विरहं शार्ङ्गधन्वन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "11",
    "verse": "sat-saṅgān mukta-duḥsaṅgo\nhātuṁ notsahate budhaḥ\nkīrtyamānaṁ yaśo yasya\nsakṛd ākarṇya rocanam",
    "devanagari": "सत्सङ्गान्मुक्तदु:सङ्गो हातुं नोत्सहते बुध: ।\nकीर्त्यमानं यशो यस्य सकृदाकर्ण्य रोचनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "12",
    "verse": "tasmin nyasta-dhiyaḥ pārthāḥ\nsaheran virahaṁ katham\ndarśana-sparśa-saṁlāpa-\nśayanāsana-bhojanaiḥ",
    "devanagari": "तस्मिन्न्यस्तधिय: पार्था: सहेरन् विरहं कथम् ।\nदर्शनस्पर्शसंलापशयनासनभोजनै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "13",
    "verse": "sarve te 'nimiṣair akṣais\ntam anu druta-cetasaḥ\nvīkṣantaḥ sneha-sambaddhā\nvicelus tatra tatra ha",
    "devanagari": "सर्वे तेऽनिमिषैरक्षैस्तमनुद्रुतचेतस: ।\nवीक्षन्त: स्‍नेहसम्बद्धा विचेलुस्तत्र तत्र ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "14",
    "verse": "nyarundhann udgalad bāṣpam\nautkaṇṭhyād devakī-sute\nniryāty agārān no 'bhadram\niti syād bāndhava-striyaḥ",
    "devanagari": "न्यरुन्धन्नुद्गलद्बाष्पमौत्कण्ठ्याद्देवकीसुते ।\nनिर्यात्यगारान्नोऽभद्रमिति स्याद्ब‍ान्धवस्त्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "15",
    "verse": "mṛdaṅga-śaṅkha-bheryaś ca\nvīṇā-paṇava-gomukhāḥ\ndhundhury-ānaka-ghaṇṭādyā\nnedur dundubhayas tathā",
    "devanagari": "मृदङ्गशङ्खभेर्यश्च वीणापणवगोमुखा: ।\nधुन्धुर्यानकघण्टाद्या नेदुर्दुन्दुभयस्तथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "16",
    "verse": "prāsāda-śikharārūḍhāḥ\nkuru-nāryo didṛkṣayā\nvavṛṣuḥ kusumaiḥ kṛṣṇaṁ\nprema-vrīḍā-smitekṣaṇāḥ",
    "devanagari": "प्रासादशिखरारूढा: कुरुनार्यो दिद‍ृक्षया ।\nववृषु: कुसुमै: कृष्णं प्रेमव्रीडास्मितेक्षणा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "17",
    "verse": "sitātapatraṁ jagrāha\nmuktādāma-vibhūṣitam\nratna-daṇḍaṁ guḍākeśaḥ\npriyaḥ priyatamasya ha",
    "devanagari": "सितातपत्रं जग्राह मुक्तादामविभूषितम् ।\nरत्नदण्डं गुडाकेश: प्रिय: प्रियतमस्य ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "18",
    "verse": "uddhavaḥ sātyakiś caiva\nvyajane paramādbhute\nvikīryamāṇaḥ kusumai\nreje madhu-patiḥ pathi",
    "devanagari": "उद्धव: सात्यकिश्चैव व्यजने परमाद्भुते ।\nविकीर्यमाण: कुसुमै रेजे मधुपति: पथि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "19",
    "verse": "aśrūyantāśiṣaḥ satyās\ntatra tatra dvijeritāḥ\nnānurūpānurūpāś ca\nnirguṇasya guṇātmanaḥ",
    "devanagari": "अश्रूयन्ताशिष: सत्यास्तत्र तत्र द्विजेरिता: ।\nनानुरूपानुरूपाश्च निर्गुणस्य गुणात्मन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "20",
    "verse": "anyonyam āsīt sañjalpa\nuttama-śloka-cetasām\nkauravendra-pura-strīṇāṁ\nsarva-śruti-mano-haraḥ",
    "devanagari": "अन्योन्यमासीत्सञ्जल्प उत्तमश्लोकचेतसाम् ।\nकौरवेन्द्रपुरस्त्रीणां सर्वश्रुतिमनोहर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "21",
    "verse": "sa vai kilāyaṁ puruṣaḥ purātano\nya eka āsīd aviśeṣa ātmani\nagre guṇebhyo jagad-ātmanīśvare\nnimīlitātman niśi supta-śaktiṣu",
    "devanagari": "स वै किलायं पुरुष: पुरातनो\nय एक आसीदविशेष आत्मनि ।\nअग्रे गुणेभ्यो जगदात्मनीश्वरे\nनिमीलितात्मन्निशि सुप्तशक्तिषु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "22",
    "verse": "sa eva bhūyo nija-vīrya-coditāṁ\nsva-jīva-māyāṁ prakṛtiṁ sisṛkṣatīm\nanāma-rūpātmani rūpa-nāmanī\nvidhitsamāno 'nusasāra śāstra-kṛt",
    "devanagari": "स एव भूयो निजवीर्यचोदितां\nस्वजीवमायां प्रकृतिं सिसृक्षतीम् ।\nअनामरूपात्मनि रूपनामनी\nविधित्समानोऽनुससार शास्त्रकृत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "23",
    "verse": "sa vā ayaṁ yat padam atra sūrayo\njitendriyā nirjita-mātariśvanaḥ\npaśyanti bhakty-utkalitāmalātmanā\nnanv eṣa sattvaṁ parimārṣṭum arhati",
    "devanagari": "स वा अयं यत्पदमत्र सूरयो\nजितेन्द्रिया निर्जितमातरिश्वन: ।\nपश्यन्ति भक्त्युत्कलितामलात्मना\nनन्वेष सत्त्वं परिमार्ष्टुमर्हति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "24",
    "verse": "sa vā ayaṁ sakhy anugīta-sat-katho\nvedeṣu guhyeṣu ca guhya-vādibhiḥ\nya eka īśo jagad-ātma-līlayā\nsṛjaty avaty atti na tatra sajjate",
    "devanagari": "स वा अयं सख्यनुगीतसत्कथो\nवेदेषु गुह्येषु च गुह्यवादिभि: ।\nय एक ईशो जगदात्मलीलया\nसृजत्यवत्यत्ति न तत्र सज्जते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "25",
    "verse": "yadā hy adharmeṇa tamo-dhiyo nṛpā\njīvanti tatraiṣa hi sattvataḥ kila\ndhatte bhagaṁ satyam ṛtaṁ dayāṁ yaśo\nbhavāya rūpāṇi dadhad yuge yuge",
    "devanagari": "यदा ह्यधर्मेण तमोधियो नृपा\nजीवन्ति तत्रैष हि सत्त्वत: किल ।\nधत्ते भगं सत्यमृतं दयां यशो\nभवाय रूपाणि दधद्युगे युगे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "26",
    "verse": "aho alaṁ ślāghyatamaṁ yadoḥ kulam\naho alaṁ puṇyatamaṁ madhor vanam\nyad eṣa puṁsām ṛṣabhaḥ śriyaḥ patiḥ\nsva-janmanā caṅkramaṇena cāñcati",
    "devanagari": "अहो अलं श्लाघ्यतमं यदो: कुल-\nमहो अलं पुण्यतमं मधोर्वनम् ।\nयदेष पुंसामृषभ: श्रिय: पति:\nस्वजन्मना चङ्‍क्रमणेन चाञ्चति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "27",
    "verse": "aho bata svar-yaśasas tiraskarī\nkuśasthalī puṇya-yaśaskarī bhuvaḥ\npaśyanti nityaṁ yad anugraheṣitaṁ\nsmitāvalokaṁ sva-patiṁ sma yat-prajāḥ",
    "devanagari": "अहो बत स्वर्यशसस्तिरस्करी\nकुशस्थली पुण्ययशस्करी भुव: ।\nपश्यन्ति नित्यं यदनुग्रहेषितं\nस्मितावलोकं स्वपतिं स्म यत्प्रजा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "28",
    "verse": "nūnaṁ vrata-snāna-hutādineśvaraḥ\nsamarcito hy asya gṛhīta-pāṇibhiḥ\npibanti yāḥ sakhy adharāmṛtaṁ muhur\nvraja-striyaḥ sammumuhur yad-āśayāḥ",
    "devanagari": "नूनं व्रतस्‍नानहुतादिनेश्वर:\nसमर्चितो ह्यस्य गृहीतपाणिभि: ।\nपिबन्ति या: सख्यधरामृतं मुहु-\nर्व्रजस्त्रिय: सम्मुमुहुर्यदाशया: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "29",
    "verse": "yā vīrya-śulkena hṛtāḥ svayaṁvare\npramathya caidya-pramukhān hi śuṣmiṇaḥ\npradyumna-sāmbāmba-sutādayo 'parā\nyāś cāhṛtā bhauma-vadhe sahasraśaḥ",
    "devanagari": "या वीर्यशुल्केन हृता: स्वयंवरे\nप्रमथ्य चैद्यप्रमुखान् हि शुष्मिण: ।\nप्रद्युम्नसाम्बाम्बसुतादयोऽपरा\nयाश्चाहृता भौमवधे सहस्रश: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "30",
    "verse": "etāḥ paraṁ strītvam apāstapeśalaṁ\nnirasta-śaucaṁ bata sādhu kurvate\nyāsāṁ gṛhāt puṣkara-locanaḥ patir\nna jātv apaity āhṛtibhir hṛdi spṛśan",
    "devanagari": "एता: परं स्त्रीत्वमपास्तपेशलं\nनिरस्तशौचं बत साधु कुर्वते ।\nयासां गृहात्पुष्करलोचन: पति-\nर्न जात्वपैत्याहृतिभिर्हृदि स्पृशन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "31",
    "verse": "evaṁvidhā gadantīnāṁ\nsa giraḥ pura-yoṣitām\nnirīkṣaṇenābhinandan\nsasmitena yayau hariḥ",
    "devanagari": "एवंविधा गदन्तीनां स गिर: पुरयोषिताम् ।\nनिरीक्षणेनाभिनन्दन् सस्मितेन ययौ हरि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "32",
    "verse": "ajāta-śatruḥ pṛtanāṁ\ngopīthāya madhu-dviṣaḥ\nparebhyaḥ śaṅkitaḥ snehāt\nprāyuṅkta catur-aṅgiṇīm",
    "devanagari": "अजातशत्रु: पृतनां गोपीथाय मधुद्विष: ।\nपरेभ्य: शङ्कित: स्‍नेहात्प्रायुङ्क्त चतुरङ्गिणीम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "33",
    "verse": "atha dūrāgatān śauriḥ\nkauravān virahāturān\nsannivartya dṛḍhaṁ snigdhān\nprāyāt sva-nagarīṁ priyaiḥ",
    "devanagari": "अथ दूरागतान् शौरि: कौरवान् विरहातुरान् ।\nसन्निवर्त्य द‍ृढं स्‍निग्धान् प्रायात्स्वनगरीं प्रियै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "34",
    "verse": "kuru-jāṅgala-pāñcālān\nśūrasenān sayāmunān\nbrahmāvartaṁ kurukṣetraṁ\nmatsyān sārasvatān atha",
    "devanagari": "कुरुजाङ्गलपाञ्चालान् शूरसेनान् सयामुनान् ।\nब्रह्मावर्तं कुरुक्षेत्रं मत्स्यान् सारस्वतानथ ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "35",
    "verse": "maru-dhanvam atikramya\nsauvīrābhīrayoḥ parān\nānartān bhārgavopāgāc\nchrāntavāho manāg vibhuḥ",
    "devanagari": "मरुधन्वमतिक्रम्य सौवीराभीरयो: परान् ।\nआनर्तान् भार्गवोपागाच्छ्रान्तवाहो मनाग्विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "10",
    "text": "36",
    "verse": "tatra tatra ha tatratyair\nhariḥ pratyudyatārhaṇaḥ\nsāyaṁ bheje diśaṁ paścād\ngaviṣṭho gāṁ gatas tadā",
    "devanagari": "तत्र तत्र ह तत्रत्यैर्हरि: प्रत्युद्यतार्हण: ।\nसायं भेजे दिशं पश्चाद्गविष्ठो गां गतस्तदा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "1",
    "verse": "sūta uvāca\nānartān sa upavrajya\nsvṛddhāñ jana-padān svakān\ndadhmau daravaraṁ teṣāṁ\nviṣādaṁ śamayann iva",
    "devanagari": "सूत उवाच\nआनर्तान् स उपव्रज्य स्वृद्धाञ्जनपदान्स्वकान् ।\nदध्मौ दरवरं तेषां विषादं शमयन्निव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "2",
    "verse": "sa uccakāśe dhavalodaro daro\n'py urukramasyādharaśoṇa-śoṇimā\ndādhmāyamānaḥ kara-kañja-sampuṭe\nyathābja-khaṇḍe kala-haṁsa utsvanaḥ",
    "devanagari": "स उच्चकाशे धवलोदरो दरो-\nऽप्युरुक्रमस्याधरशोणशोणिमा ।\nदाध्मायमान: करकञ्जसम्पुटे\nयथाब्जखण्डे कलहंस उत्स्वन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "3",
    "verse": "tam upaśrutya ninadaṁ\njagad-bhaya-bhayāvaham\npratyudyayuḥ prajāḥ sarvā\nbhartṛ-darśana-lālasāḥ",
    "devanagari": "तमुपश्रुत्य निनदं जगद्भयभयावहम् ।\nप्रत्युद्ययु: प्रजा: सर्वा भर्तृदर्शनलालसा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "4",
    "verse": "tatropanīta-balayo\nraver dīpam ivādṛtāḥ\nātmārāmaṁ pūrṇa-kāmaṁ\nnija-lābhena nityadā",
    "devanagari": "तत्रोपनीतबलयो रवेर्दीपमिवाद‍ृता: ।\nआत्मारामं पूर्णकामं निजलाभेन नित्यदा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "5",
    "verse": "prīty-utphulla-mukhāḥ procur\nharṣa-gadgadayā girā\npitaraṁ sarva-suhṛdam\navitāram ivārbhakāḥ",
    "devanagari": "प्रीत्युत्फुल्लमुखा: प्रोचुर्हर्षगद्गदया गिरा ।\nपितरं सर्वसुहृदमवितारमिवार्भका: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "6",
    "verse": "natāḥ sma te nātha sadāṅghri-paṅkajaṁ\nviriñca-vairiñcya-surendra-vanditam\nparāyaṇaṁ kṣemam ihecchatāṁ paraṁ\nna yatra kālaḥ prabhavet paraḥ prabhuḥ",
    "devanagari": "नता: स्म ते नाथ सदाङ्‌घ्रिपङ्कजं\nविरिञ्चवैरिञ्च्यसुरेन्द्रवन्दितम् ।\nपरायणं क्षेममिहेच्छतां परं\nन यत्र काल: प्रभवेत् पर: प्रभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "7",
    "verse": "bhavāya nas tvaṁ bhava viśva-bhāvana\ntvam eva mātātha suhṛt-patiḥ pitā\ntvaṁ sad-gurur naḥ paramaṁ ca daivataṁ\nyasyānuvṛttyā kṛtino babhūvima",
    "devanagari": "भवाय नस्त्वं भव विश्वभावन\nत्वमेव माताथ सुहृत्पति: पिता ।\nत्वं सद्गुरुर्न: परमं च दैवतं\nयस्यानुवृत्त्या कृतिनो बभूविम ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "8",
    "verse": "aho sanāthā bhavatā sma yad vayaṁ\ntraiviṣṭapānām api dūra-darśanam\nprema-smita-snigdha-nirīkṣaṇānanaṁ\npaśyema rūpaṁ tava sarva-saubhagam",
    "devanagari": "अहो सनाथा भवता स्म यद्वयं\nत्रैविष्टपानामपि दूरदर्शनम् ।\nप्रेमस्मितस्‍निग्धनिरीक्षणाननं\nपश्येम रूपं तव सर्वसौभगम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "9",
    "verse": "yarhy ambujākṣāpasasāra bho bhavān\nkurūn madhūn vātha suhṛd-didṛkṣayā\ntatrābda-koṭi-pratimaḥ kṣaṇo bhaved\nraviṁ vinākṣṇor iva nas tavācyuta",
    "devanagari": "यर्ह्यम्बुजाक्षापससार भो भवान्\nकुरून् मधून् वाथ सुहृद्दिद‍ृक्षया ।\nतत्राब्दकोटिप्रतिम: क्षणो भवेद्\nरविं विनाक्ष्णोरिव नस्तवाच्युत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "10",
    "verse": "kathaṁ vayaṁ nātha ciroṣite tvayi\nprasanna-dṛṣṭyākhila-tāpa-śoṣaṇam\njīvema te sundara-hāsa-śobhitam\napaśyamānā vadanaṁ manoharam\niti codīritā vācaḥ\nprajānāṁ bhakta-vatsalaḥ\nśṛṇvāno 'nugrahaṁ dṛṣṭyā\nvitanvan prāviśat puram",
    "devanagari": "कथं वयं नाथ चिरोषिते त्वयि प्रसन्नद‍ृष्टय‍ाखिलतापशोषणम ।\nजीवेम ते सुन्दरहासशोभितमपश्यमाना वदनं मनोहरम ।\nइति चोदीरिता वाच: प्रजानां भक्तवत्सल ।\nश‍ृण्वानोऽनुग्रहं द‍ृष्टय‍ा वितन्वन् प्राविशत् पुरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "11",
    "verse": "madhu-bhoja-daśārhārha-\nkukurāndhaka-vṛṣṇibhiḥ\nātma-tulya-balair guptāṁ\nnāgair bhogavatīm iva",
    "devanagari": "मधुभोजदशार्हार्हकुकुरान्धकवृष्णिभि: ।\nआत्मतुल्यबलैर्गुप्तां नागैर्भोगवतीमिव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "12",
    "verse": "sarvartu-sarva-vibhava-\npuṇya-vṛkṣa-latāśramaiḥ\nudyānopavanārāmair\nvṛta-padmākara-śriyam",
    "devanagari": "सर्वर्तुसर्वविभवपुण्यवृक्षलताश्रमै: ।\nउद्यानोपवनारामैर्वृतपद्माकरश्रियम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "13",
    "verse": "gopura-dvāra-mārgeṣu\nkṛta-kautuka-toraṇām\ncitra-dhvaja-patākāgrair\nantaḥ pratihatātapām",
    "devanagari": "गोपुरद्वारमार्गेषु कृतकौतुकतोरणाम् ।\nचित्रध्वजपताकाग्रैरन्त: प्रतिहतातपाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "14",
    "verse": "sammārjita-mahā-mārga-\nrathyāpaṇaka-catvarām\nsiktāṁ gandha-jalair uptāṁ\nphala-puṣpākṣatāṅkuraiḥ",
    "devanagari": "सम्मार्जितमहामार्गरथ्यापणकचत्वराम् ।\nसिक्तां गन्धजलैरुप्तां फलपुष्पाक्षताङ्कुरै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "15",
    "verse": "dvāri dvāri gṛhāṇāṁ ca\ndadhy-akṣata-phalekṣubhiḥ\nalaṅkṛtāṁ pūrṇa-kumbhair\nbalibhir dhūpa-dīpakaiḥ",
    "devanagari": "द्वारि द्वारि गृहाणां च दध्यक्षतफलेक्षुभि: ।\nअलङ्‍कृतां पूर्णकुम्भैर्बलिभिर्धूपदीपकै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "16",
    "verse": "niśamya preṣṭham āyāntaṁ\nvasudevo mahā-manāḥ\nakrūraś cograsenaś ca\nrāmaś cādbhuta-vikramaḥ",
    "devanagari": "निशम्य प्रेष्ठमायान्तं वसुदेवो महामना: ।\nअक्रूरश्चोग्रसेनश्च रामश्चाद्भुतविक्रम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "17",
    "verse": "pradyumnaś cārudeṣṇaś ca\nsāmbo jāmbavatī-sutaḥ\npraharṣa-vegocchaśita-\nśayanāsana-bhojanāḥ",
    "devanagari": "प्रद्युम्नश्चारुदेष्णश्च साम्बो जाम्बवतीसुत: ।\nप्रहर्षवेगोच्छशितशयनासनभोजना: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "18",
    "verse": "vāraṇendraṁ puraskṛtya\nbrāhmaṇaiḥ sasumaṅgalaiḥ\nśaṅkha-tūrya-ninādena\nbrahma-ghoṣeṇa cādṛtāḥ\npratyujjagmū rathair hṛṣṭāḥ\npraṇayāgata-sādhvasāḥ",
    "devanagari": "वारणेन्द्रं पुरस्कृत्य ब्राह्मणै: ससुमङ्गलै: ।\nशङ्खतूर्यनिनादेन ब्रह्मघोषेण चाद‍ृता: ।\nप्रत्युज्जग्मू रथैर्हृष्टा: प्रणयागतसाध्वसा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "19",
    "verse": "vāramukhyāś ca śataśo\nyānais tad-darśanotsukāḥ\nlasat-kuṇḍala-nirbhāta-\nkapola-vadana-śriyaḥ",
    "devanagari": "वारमुख्याश्च शतशो यानैस्तद्दर्शनोत्सुका: ।\nलसत्कुण्डलनिर्भातकपोलवदनश्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "20",
    "verse": "naṭa-nartaka-gandharvāḥ\nsūta-māgadha-vandinaḥ\ngāyanti cottamaśloka-\ncaritāny adbhutāni ca",
    "devanagari": "नटनर्तकगन्धर्वा: सूतमागधवन्दिन: ।\nगायन्ति चोत्तमश्लोकचरितान्यद्भुतानि च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "21",
    "verse": "bhagavāṁs tatra bandhūnāṁ\npaurāṇām anuvartinām\nyathā-vidhy upasaṅgamya\nsarveṣāṁ mānam ādadhe",
    "devanagari": "भगवांस्तत्र बन्धूनां पौराणामनुवर्तिनाम् ।\nयथाविध्युपसङ्गम्य सर्वेषां मानमादधे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "22",
    "verse": "prahvābhivādanāśleṣa-\nkara-sparśa-smitekṣaṇaiḥ\nāśvāsya cāśvapākebhyo\nvaraiś cābhimatair vibhuḥ",
    "devanagari": "प्रह्वाभिवादनाश्लेषकरस्पर्शस्मितेक्षणै: ।\nआश्वास्य चाश्वपाकेभ्यो वरैश्चाभिमतैर्विभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "23",
    "verse": "svayaṁ ca gurubhir vipraiḥ\nsadāraiḥ sthavirair api\nāśīrbhir yujyamāno 'nyair\nvandibhiś cāviśat puram",
    "devanagari": "स्वयं च गुरुभिर्विप्रै: सदारै: स्थविरैरपि ।\nआशीर्भिर्युज्यमानोऽन्यैर्वन्दिभिश्चाविशत्पुरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "24",
    "verse": "rāja-mārgaṁ gate kṛṣṇe\ndvārakāyāḥ kula-striyaḥ\nharmyāṇy āruruhur vipra\ntad-īkṣaṇa-mahotsavāḥ",
    "devanagari": "राजमार्गं गते कृष्णे द्वारकाया: कुलस्त्रिय: ।\nहर्म्याण्यारुरुहुर्विप्र तदीक्षणमहोत्सवा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "25",
    "verse": "nityaṁ nirīkṣamāṇānāṁ\nyad api dvārakaukasām\nna vitṛpyanti hi dṛśaḥ\nśriyo dhāmāṅgam acyutam",
    "devanagari": "नित्यं निरीक्षमाणानां यदपि द्वारकौकसाम् ।\nन वितृप्यन्ति हि द‍ृश: श्रियो धामाङ्गमच्युतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "26",
    "verse": "śriyo nivāso yasyoraḥ\npāna-pātraṁ mukhaṁ dṛśām\nbāhavo loka-pālānāṁ\nsāraṅgāṇāṁ padāmbujam",
    "devanagari": "श्रियो निवासो यस्योर: पानपात्रं मुखं द‍ृशाम् ।\nबाहवो लोकपालानां सारङ्गाणां पदाम्बुजम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "27",
    "verse": "sitātapatra-vyajanair upaskṛtaḥ\nprasūna-varṣair abhivarṣitaḥ pathi\npiśaṅga-vāsā vana-mālayā babhau\nghano yathārkoḍupa-cāpa-vaidyutaiḥ",
    "devanagari": "सितातपत्रव्यजनैरुपस्कृत:\nप्रसूनवर्षैरभिवर्षित: पथि ।\nपिशङ्गवासा वनमालया बभौ\nघनो यथार्कोडुपचापवैद्युतै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "28",
    "verse": "praviṣṭas tu gṛhaṁ pitroḥ\npariṣvaktaḥ sva-mātṛbhiḥ\nvavande śirasā sapta\ndevakī-pramukhā mudā",
    "devanagari": "प्रविष्टस्तु गृहं पित्रो: परिष्वक्त: स्वमातृभि: ।\nववन्दे शिरसा सप्त देवकीप्रमुखा मुदा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "29",
    "verse": "tāḥ putram aṅkam āropya\nsneha-snuta-payodharāḥ\nharṣa-vihvalitātmānaḥ\nsiṣicur netrajair jalaiḥ",
    "devanagari": "ता: पुत्रमङ्कमारोप्य स्‍नेहस्‍नुतपयोधरा: ।\nहर्षविह्वलितात्मान: सिषिचुर्नेत्रजैर्जलै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "30",
    "verse": "athāviśat sva-bhavanaṁ\nsarva-kāmam anuttamam\nprāsādā yatra patnīnāṁ\nsahasrāṇi ca ṣoḍaśa",
    "devanagari": "अथाविशत् स्वभवनं सर्वकाममनुत्तमम् ।\nप्रासादा यत्र पत्नीनां सहस्राणि च षोडश ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "31",
    "verse": "patnyaḥ patiṁ proṣya gṛhānupāgataṁ\nvilokya sañjāta-mano-mahotsavāḥ\nuttasthur ārāt sahasāsanāśayāt\nsākaṁ vratair vrīḍita-locanānanāḥ",
    "devanagari": "पत्न्य: पतिं प्रोष्य गृहानुपागतं\nविलोक्य सञ्जातमनोमहोत्सवा: ।\nउत्तस्थुरारात् सहसासनाशयात्\nसाकं व्रतैर्व्रीडितलोचनानना: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "32",
    "verse": "tam ātmajair dṛṣṭibhir antarātmanā\nduranta-bhāvāḥ parirebhire patim\nniruddham apy āsravad ambu netrayor\nvilajjatīnāṁ bhṛgu-varya vaiklavāt",
    "devanagari": "तमात्मजैर्द‍ृष्टिभिरन्तरात्मना\nदुरन्तभावा: परिरेभिरे पतिम् ।\nनिरुद्धमप्यास्रवदम्बु नेत्रयो-\nर्विलज्जतीनां भृगुवर्य वैक्लवात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "33",
    "verse": "yadyapy asau pārśva-gato raho-gatas\ntathāpi tasyāṅghri-yugaṁ navaṁ navam\npade pade kā virameta tat-padāc\ncalāpi yac chrīr na jahāti karhicit",
    "devanagari": "यद्यप्यसौ पार्श्वगतो रहोगत-\nस्तथापि तस्याङ्‌घ्रियुगं नवं नवम् ।\nपदे पदे का विरमेत तत्पदा-\nच्चलापि यच्छ्रीर्न जहाति कर्हिचित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "34",
    "verse": "evaṁ nṛpāṇāṁ kṣiti-bhāra-janmanām\nakṣauhiṇībhiḥ parivṛtta-tejasām\nvidhāya vairaṁ śvasano yathānalaṁ\nmitho vadhenoparato nirāyudhaḥ",
    "devanagari": "एवं नृपाणां क्षितिभारजन्मना-\nमक्षौहिणीभि: परिवृत्ततेजसाम् ।\nविधाय वैरं श्वसनो यथानलं\nमिथो वधेनोपरतो निरायुध: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "35",
    "verse": "sa eṣa nara-loke 'sminn\navatīrṇaḥ sva-māyayā\nreme strī-ratna-kūṭastho\nbhagavān prākṛto yathā",
    "devanagari": "स एष नरलोकेऽस्मिन्नवतीर्ण: स्वमायया ।\nरेमे स्त्रीरत्नकूटस्थो भगवान् प्राकृतो यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "36",
    "verse": "uddāma-bhāva-piśunāmala-valgu-hāsa-\nvrīḍāvaloka-nihato madano 'pi yāsām\nsammuhya cāpam ajahāt pramadottamās tā\nyasyendriyaṁ vimathituṁ kuhakair na śekuḥ",
    "devanagari": "उद्दामभावपिशुनामलवल्गुहास-\nव्रीडावलोकनिहतो मदनोऽपि यासाम् ।\nसम्मुह्य चापमजहात्प्रमदोत्तमास्ता\nयस्येन्द्रियं विमथितुं कुहकैर्न शेकु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "37",
    "verse": "tam ayaṁ manyate loko\nhy asaṅgam api saṅginam\nātmaupamyena manujaṁ\nvyāpṛṇvānaṁ yato 'budhaḥ",
    "devanagari": "तमयं मन्यते लोको ह्यसङ्गमपि सङ्गिनम् ।\nआत्मौपम्येन मनुजं व्यापृण्वानं यतोऽबुध: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "38",
    "verse": "etad īśanam īśasya\nprakṛti-stho 'pi tad-guṇaiḥ\nna yujyate sadātma-sthair\nyathā buddhis tad-āśrayā",
    "devanagari": "एतदीशनमीशस्य प्रकृतिस्थोऽपि तद्गुणै: ।\nन युज्यते सदात्मस्थैर्यथा बुद्धिस्तदाश्रया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "11",
    "text": "39",
    "verse": "taṁ menire 'balā mūḍhāḥ\nstraiṇaṁ cānuvrataṁ rahaḥ\napramāṇa-vido bhartur\nīśvaraṁ matayo yathā",
    "devanagari": "तं मेनिरेऽबला मूढा: स्त्रैणं चानुव्रतं रह: ।\nअप्रमाणविदो भर्तुरीश्वरं मतयो यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "1",
    "verse": "śaunaka uvāca\naśvatthāmnopasṛṣṭena\nbrahma-śīrṣṇoru-tejasā\nuttarāyā hato garbha\nīśenājīvitaḥ punaḥ",
    "devanagari": "शौनक उवाच\nअश्वत्थाम्नोपसृष्टेन ब्रह्मशीर्ष्णोरुतेजसा ।\nउत्तराया हतो गर्भ ईशेनाजीवित: पुन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "2",
    "verse": "tasya janma mahā-buddheḥ\nkarmāṇi ca mahātmanaḥ\nnidhanaṁ ca yathaivāsīt\nsa pretya gatavān yathā",
    "devanagari": "तस्य जन्म महाबुद्धे: कर्माणि च महात्मन: ।\nनिधनं च यथैवासीत्स प्रेत्य गतवान् यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "3",
    "verse": "tad idaṁ śrotum icchāmo\ngadituṁ yadi manyase\nbrūhi naḥ śraddadhānānāṁ\nyasya jñānam adāc chukaḥ",
    "devanagari": "तदिदं श्रोतुमिच्छामो गदितुं यदि मन्यसे ।\nब्रूहि न: श्रद्दधानानां यस्य ज्ञानमदाच्छुक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "4",
    "verse": "sūta uvāca\napīpalad dharma-rājaḥ\npitṛvad rañjayan prajāḥ\nniḥspṛhaḥ sarva-kāmebhyaḥ\nkṛṣṇa-pādānusevayā",
    "devanagari": "सूत उवाच\nअपीपलद्धर्मराज: पितृवद् रञ्जयन् प्रजा: ।\nनि:स्पृह: सर्वकामेभ्य: कृष्णपादानुसेवया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "5",
    "verse": "sampadaḥ kratavo lokā\nmahiṣī bhrātaro mahī\njambūdvīpādhipatyaṁ ca\nyaśaś ca tri-divaṁ gatam",
    "devanagari": "सम्पद: क्रतवो लोका महिषी भ्रातरो मही ।\nजम्बूद्वीपाधिपत्यं च यशश्च त्रिदिवं गतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "6",
    "verse": "kiṁ te kāmāḥ sura-spārhā\nmukunda-manaso dvijāḥ\nadhijahrur mudaṁ rājñaḥ\nkṣudhitasya yathetare",
    "devanagari": "किं ते कामा: सुरस्पार्हा मुकुन्दमनसो द्विजा: ।\nअधिजह्रुर्मुदं राज्ञ: क्षुधितस्य यथेतरे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "7",
    "verse": "mātur garbha-gato vīraḥ\nsa tadā bhṛgu-nandana\ndadarśa puruṣaṁ kañcid\ndahyamāno 'stra-tejasā",
    "devanagari": "मातुर्गर्भगतो वीर: स तदा भृगुनन्दन ।\nददर्श पुरुषं कञ्चिद्दह्यमानोऽस्त्रतेजसा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "8",
    "verse": "aṅguṣṭha-mātram amalaṁ\nsphurat-puraṭa-maulinam\napīvya-darśanaṁ śyāmaṁ\ntaḍid vāsasam acyutam",
    "devanagari": "अङ्गुष्ठमात्रममलं स्फुरत्पुरटमौलिनम् ।\nअपीव्यदर्शनं श्यामं तडिद्वाससमच्युतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "9",
    "verse": "śrīmad-dīrgha-catur-bāhuṁ\ntapta-kāñcana-kuṇḍalam\nkṣatajākṣaṁ gadā-pāṇim\nātmanaḥ sarvato diśam\nparibhramantam ulkābhāṁ\nbhrāmayantaṁ gadāṁ muhuḥ",
    "devanagari": "श्रीमद्दीर्घचतुर्बाहुं तप्तकाञ्चनकुण्डलम् ।\nक्षतजाक्षं गदापाणिमात्मन: सर्वतोदिशम् ।\nपरिभ्रमन्तमुल्काभां भ्रामयन्तं गदां मुहु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "10",
    "verse": "astra-tejaḥ sva-gadayā\nnīhāram iva gopatiḥ\nvidhamantaṁ sannikarṣe\nparyaikṣata ka ity asau",
    "devanagari": "अस्त्रतेज: स्वगदया नीहारमिव गोपति: ।\nविधमन्तं सन्निकर्षे पर्यैक्षत क इत्यसौ ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "11",
    "verse": "vidhūya tad ameyātmā\nbhagavān dharma-gub vibhuḥ\nmiṣato daśamāsasya\ntatraivāntardadhe hariḥ",
    "devanagari": "विधूय तदमेयात्मा भगवान्धर्मगुब् विभु: ।\nमिषतो दशमासस्य तत्रैवान्तर्दधे हरि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "12",
    "verse": "tataḥ sarva-guṇodarke\nsānukūla-grahodaye\njajñe vaṁśa-dharaḥ pāṇḍor\nbhūyaḥ pāṇḍur ivaujasā",
    "devanagari": "तत: सर्वगुणोदर्के सानुकूलग्रहोदये ।\nजज्ञे वंशधर: पाण्डोर्भूय: पाण्डुरिवौजसा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "13",
    "verse": "tasya prīta-manā rājā\nviprair dhaumya-kṛpādibhiḥ\njātakaṁ kārayām āsa\nvācayitvā ca maṅgalam",
    "devanagari": "तस्य प्रीतमना राजा विप्रैर्धौम्यकृपादिभि: ।\nजातकं कारयामास वाचयित्वा च मङ्गलम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "14",
    "verse": "hiraṇyaṁ gāṁ mahīṁ grāmān\nhasty-aśvān nṛpatir varān\nprādāt svannaṁ ca viprebhyaḥ\nprajā-tīrthe sa tīrthavit",
    "devanagari": "हिरण्यं गां महीं ग्रामान् हस्त्यश्वान्नृपतिर्वरान् ।\nप्रादात्स्वन्नं च विप्रेभ्य: प्रजातीर्थे स तीर्थवित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "15",
    "verse": "tam ūcur brāhmaṇās tuṣṭā\nrājānaṁ praśrayānvitam\neṣa hy asmin prajā-tantau\npurūṇāṁ pauravarṣabha",
    "devanagari": "तमूचुर्ब्राह्मणास्तुष्टा राजानं प्रश्रयान्वितम् ।\nएष ह्यस्मिन् प्रजातन्तौ पुरूणां पौरवर्षभ ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "16",
    "verse": "daivenāpratighātena\nśukle saṁsthām upeyuṣi\nrāto vo 'nugrahārthāya\nviṣṇunā prabhaviṣṇunā",
    "devanagari": "दैवेनाप्रतिघातेन शुक्ले संस्थामुपेयुषि ।\nरातो वोऽनुग्रहार्थाय विष्णुना प्रभविष्णुना ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "17",
    "verse": "tasmān nāmnā viṣṇu-rāta\niti loke bhaviṣyati\nna sandeho mahā-bhāga\nmahā-bhāgavato mahān",
    "devanagari": "तस्मान्नाम्ना विष्णुरात इति लोके भविष्यति ।\nन सन्देहो महाभाग महाभागवतो महान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "18",
    "verse": "śrī-rājovāca\napy eṣa vaṁśyān rājarṣīn\npuṇya-ślokān mahātmanaḥ\nanuvartitā svid yaśasā\nsādhu-vādena sattamāḥ",
    "devanagari": "श्रीराजोवाच\nअप्येष वंश्यान् राजर्षीन् पुण्यश्लोकान् महात्मन: ।\nअनुवर्तिता स्विद्यशसा साधुवादेन सत्तमा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "19",
    "verse": "brāhmaṇā ūcuḥ\npārtha prajāvitā sākṣād\nikṣvākur iva mānavaḥ\nbrahmaṇyaḥ satya-sandhaś ca\nrāmo dāśarathir yathā",
    "devanagari": "ब्राह्मणा ऊचु:\nपार्थ प्रजाविता साक्षादिक्ष्वाकुरिव मानव: ।\nब्रह्मण्य: सत्यसन्धश्च रामो दाशरथिर्यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "20",
    "verse": "eṣa dātā śaraṇyaś ca\nyathā hy auśīnaraḥ śibiḥ\nyaśo vitanitā svānāṁ\ndauṣyantir iva yajvanām",
    "devanagari": "एष दाता शरण्यश्च यथा ह्यौशीनर: शिबि: ।\nयशो वितनिता स्वानां दौष्यन्तिरिव यज्वनाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "21",
    "verse": "dhanvinām agraṇīr eṣa\ntulyaś cārjunayor dvayoḥ\nhutāśa iva durdharṣaḥ\nsamudra iva dustaraḥ",
    "devanagari": "धन्विनामग्रणीरेष तुल्यश्चार्जुनयोर्द्वयो: ।\nहुताश इव दुर्धर्ष: समुद्र इव दुस्तर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "22",
    "verse": "mṛgendra iva vikrānto\nniṣevyo himavān iva\ntitikṣur vasudhevāsau\nsahiṣṇuḥ pitarāv iva",
    "devanagari": "मृगेन्द्र इव विक्रान्तो निषेव्यो हिमवानिव ।\nतितिक्षुर्वसुधेवासौ सहिष्णु: पितराविव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "23",
    "verse": "pitāmaha-samaḥ sāmye\nprasāde giriśopamaḥ\nāśrayaḥ sarva-bhūtānāṁ\nyathā devo ramāśrayaḥ",
    "devanagari": "पितामहसम: साम्ये प्रसादे गिरिशोपम: ।\nआश्रय: सर्वभूतानां यथा देवो रमाश्रय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "24",
    "verse": "sarva-sad-guṇa-māhātmye\neṣa kṛṣṇam anuvrataḥ\nrantideva ivodāro\nyayātir iva dhārmikaḥ",
    "devanagari": "सर्वसद्गुणमाहात्म्ये एष कृष्णमनुव्रत: ।\nरन्तिदेव इवोदारो ययातिरिव धार्मिक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "25",
    "verse": "dhṛtyā bali-samaḥ kṛṣṇe\nprahrāda iva sad-grahaḥ\nāhartaiṣo 'śvamedhānāṁ\nvṛddhānāṁ paryupāsakaḥ",
    "devanagari": "धृत्या बलिसम: कृष्णे प्रह्राद इव सद्ग्रह: ।\nआहर्तैषोऽश्वमेधानां वृद्धानां पर्युपासक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "26",
    "verse": "rājarṣīṇāṁ janayitā\nśāstā cotpatha-gāminām\nnigrahītā kaler eṣa\nbhuvo dharmasya kāraṇāt",
    "devanagari": "राजर्षीणां जनयिता शास्ता चोत्पथगामिनाम् ।\nनिग्रहीता कलेरेष भुवो धर्मस्य कारणात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "27",
    "verse": "takṣakād ātmano mṛtyuṁ\ndvija-putropasarjitāt\nprapatsyata upaśrutya\nmukta-saṅgaḥ padaṁ hareḥ",
    "devanagari": "तक्षकादात्मनो मृत्युं द्विजपुत्रोपसर्जितात् ।\nप्रपत्स्यत उपश्रुत्य मुक्तसङ्ग: पदं हरे: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "28",
    "verse": "jijñāsitātma-yāthārthyo\nmuner vyāsa-sutād asau\nhitvedaṁ nṛpa gaṅgāyāṁ\nyāsyaty addhākutobhayam",
    "devanagari": "जिज्ञासितात्मयाथार्थ्यो मुनेर्व्याससुतादसौ ।\nहित्वेदं नृप गङ्गायां यास्यत्यद्धाकुतोभयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "29",
    "verse": "iti rājña upādiśya\nviprā jātaka-kovidāḥ\nlabdhāpacitayaḥ sarve\npratijagmuḥ svakān gṛhān",
    "devanagari": "इति राज्ञ उपादिश्य विप्रा जातककोविदा: ।\nलब्धापचितय: सर्वे प्रतिजग्मु: स्वकान् गृहान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "30",
    "verse": "sa eṣa loke vikhyātaḥ\nparīkṣid iti yat prabhuḥ\npūrvaṁ dṛṣṭam anudhyāyan\nparīkṣeta nareṣv iha",
    "devanagari": "स एष लोके विख्यात: परीक्षिदिति यत्प्रभु: ।\nपूर्वं द‍ृष्टमनुध्यायन् परीक्षेत नरेष्विह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "31",
    "verse": "sa rāja-putro vavṛdhe\nāśu śukla ivoḍupaḥ\nāpūryamāṇaḥ pitṛbhiḥ\nkāṣṭhābhir iva so 'nvaham",
    "devanagari": "स राजपुत्रो ववृधे आशु शुक्ल इवोडुप: ।\nआपूर्यमाण: पितृभि: काष्ठाभिरिव सोऽन्वहम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "32",
    "verse": "yakṣyamāṇo 'śvamedhena\njñāti-droha-jihāsayā\nrājā labdha-dhano dadhyau\nnānyatra kara-daṇḍayoḥ",
    "devanagari": "यक्ष्यमाणोऽश्वमेधेन ज्ञातिद्रोहजिहासया ।\nराजा लब्धधनो दध्यौ नान्यत्र करदण्डयो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "33",
    "verse": "tad abhipretam ālakṣya\nbhrātaro 'cyuta-coditāḥ\ndhanaṁ prahīṇam ājahrur\nudīcyāṁ diśi bhūriśaḥ",
    "devanagari": "तदभिप्रेतमालक्ष्य भ्रातरोऽच्युतचोदिता: ।\nधनं प्रहीणमाजह्रुरुदीच्यां दिशि भूरिश: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "34",
    "verse": "tena sambhṛta-sambhāro\ndharma-putro yudhiṣṭhiraḥ\nvājimedhais tribhir bhīto\nyajñaiḥ samayajad dharim",
    "devanagari": "तेन सम्भृतसम्भारो धर्मपुत्रो युधिष्ठिर: ।\nवाजिमेधैस्त्रिभिर्भीतो यज्ञै: समयजद्धरिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "35",
    "verse": "āhūto bhagavān rājñā\nyājayitvā dvijair nṛpam\nuvāsa katicin māsān\nsuhṛdāṁ priya-kāmyayā",
    "devanagari": "आहूतो भगवान् राज्ञा याजयित्वा द्विजैर्नृपम् ।\nउवास कतिचिन्मासान् सुहृदां प्रियकाम्यया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "12",
    "text": "36",
    "verse": "tato rājñābhyanujñātaḥ\nkṛṣṇayā saha-bandhubhiḥ\nyayau dvāravatīṁ brahman\nsārjuno yadubhir vṛtaḥ",
    "devanagari": "ततो राज्ञाभ्यनुज्ञात: कृष्णया सह बन्धुभि: ।\nययौ द्वारवतीं ब्रह्मन् सार्जुनो यदुभिर्वृत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "1",
    "verse": "sūta uvāca\nviduras tīrtha-yātrāyāṁ\nmaitreyād ātmano gatim\njñātvāgād dhāstinapuraṁ\ntayāvāpta-vivitsitaḥ",
    "devanagari": "सूत उवाच\nविदुरस्तीर्थयात्रायां मैत्रेयादात्मनो गतिम् ।\nज्ञात्वागाद्धास्तिनपुरं तयावाप्तविवित्सित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "2",
    "verse": "yāvataḥ kṛtavān praśnān\nkṣattā kauṣāravāgrataḥ\njātaika-bhaktir govinde\ntebhyaś copararāma ha",
    "devanagari": "यावत: कृतवान् प्रश्नान् क्षत्ता कौषारवाग्रत: ।\nजातैकभक्तिर्गोविन्दे तेभ्यश्चोपरराम ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "3",
    "verse": "taṁ bandhum āgataṁ dṛṣṭvā\ndharma-putraḥ sahānujaḥ\ndhṛtarāṣṭro yuyutsuś ca\nsūtaḥ śāradvataḥ pṛthā",
    "devanagari": "तं बन्धुमागतं द‍ृष्ट्वा धर्मपुत्र: सहानुज: ।\nधृतराष्ट्रो युयुत्सुश्च सूत: शारद्वत: पृथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "4",
    "verse": "gāndhārī draupadī brahman\nsubhadrā cottarā kṛpī\nanyāś ca jāmayaḥ pāṇḍor\njñātayaḥ sasutāḥ striyaḥ",
    "devanagari": "गान्धारी द्रौपदी ब्रह्मन् सुभद्रा चोत्तरा कृपी ।\nअन्याश्च जामय: पाण्डोर्ज्ञातय: ससुता: स्त्रिय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "5",
    "verse": "pratyujjagmuḥ praharṣeṇa\nprāṇaṁ tanva ivāgatam\nabhisaṅgamya vidhivat\npariṣvaṅgābhivādanaiḥ",
    "devanagari": "प्रत्युज्जग्मु: प्रहर्षेण प्राणं तन्व इवागतम् ।\nअभिसङ्गम्य विधिवत् परिष्वङ्गाभिवादनै: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "6",
    "verse": "mumucuḥ prema-bāṣpaughaṁ\nvirahautkaṇṭhya-kātarāḥ\nrājā tam arhayāṁ cakre\nkṛtāsana-parigraham",
    "devanagari": "मुमुचु: प्रेमबाष्पौघं विरहौत्कण्ठ्यकातरा: ।\nराजा तमर्हयाञ्चक्रे कृतासनपरिग्रहम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "7",
    "verse": "taṁ bhuktavantaṁ viśrāntam\nāsīnaṁ sukham āsane\npraśrayāvanato rājā\nprāha teṣāṁ ca śṛṇvatām",
    "devanagari": "तं भुक्तवन्तं विश्रान्तमासीनं सुखमासने ।\nप्रश्रयावनतो राजा प्राह तेषां च श‍ृण्वताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "8",
    "verse": "yudhiṣṭhira uvāca\napi smaratha no yuṣmat-\npakṣa-cchāyā-samedhitān\nvipad-gaṇād viṣāgnyāder\nmocitā yat samātṛkāḥ",
    "devanagari": "युधिष्ठिर उवाच\nअपि स्मरथ नो युष्मत्पक्षच्छायासमेधितान् ।\nविपद्गणाद्विषाग्‍न्‍यादेर्मोचिता यत्समातृका: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "9",
    "verse": "kayā vṛttyā vartitaṁ vaś\ncaradbhiḥ kṣiti-maṇḍalam\ntīrthāni kṣetra-mukhyāni\nsevitānīha bhūtale",
    "devanagari": "कया वृत्त्या वर्तितं वश्चरद्भ‍ि: क्षितिमण्डलम् ।\nतीर्थानि क्षेत्रमुख्यानि सेवितानीह भूतले ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "10",
    "verse": "bhavad-vidhā bhāgavatās\ntīrtha-bhūtāḥ svayaṁ vibho\ntīrthī-kurvanti tīrthāni\nsvāntaḥ-sthena gadābhṛtā",
    "devanagari": "भवद्विधा भागवतास्तीर्थभूता: स्वयं विभो ।\nतीर्थीकुर्वन्ति तीर्थानि स्वान्त:स्थेन गदाभृता ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "11",
    "verse": "api naḥ suhṛdas tāta\nbāndhavāḥ kṛṣṇa-devatāḥ\ndṛṣṭāḥ śrutā vā yadavaḥ\nsva-puryāṁ sukham āsate",
    "devanagari": "अपि न: सुहृदस्तात बान्धवा: कृष्णदेवता: ।\nद‍ृष्टा: श्रुता वा यदव: स्वपुर्यां सुखमासते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "12",
    "verse": "ity ukto dharma-rājena\nsarvaṁ tat samavarṇayat\nyathānubhūtaṁ kramaśo\nvinā yadu-kula-kṣayam",
    "devanagari": "इत्युक्तो धर्मराजेन सर्वं तत् समवर्णयत् ।\nयथानुभूतं\nक्रमशो विना यदुकुलक्षयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "13",
    "verse": "nanv apriyaṁ durviṣahaṁ\nnṛṇāṁ svayam upasthitam\nnāvedayat sakaruṇo\nduḥkhitān draṣṭum akṣamaḥ",
    "devanagari": "नन्वप्रियं दुर्विषहं नृणां\nस्वयमुपस्थितम् ।\nनावेदयत् सकरुणो दु:खितान् द्रष्टुमक्षम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "14",
    "verse": "kañcit kālam athāvātsīt\nsat-kṛto devavat sukham\nbhrātur jyeṣṭhasya śreyas-kṛt\nsarveṣāṁ sukham āvahan",
    "devanagari": "कञ्चित्कालमथावात्सीत्सत्कृतो देववत्सुखम् ।\nभ्रातुर्ज्येष्ठस्य श्रेयस्कृत्सर्वेषां सुखमावहन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "15",
    "verse": "abibhrad aryamā daṇḍaṁ\nyathāvad agha-kāriṣu\nyāvad dadhāra śūdratvaṁ\nśāpād varṣa-śataṁ yamaḥ",
    "devanagari": "अबिभ्रदर्यमा दण्डं यथावदघकारिषु ।\nयावद्दधार शूद्रत्वं शापाद्वर्षशतं यम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "16",
    "verse": "yudhiṣṭhiro labdha-rājyo\ndṛṣṭvā pautraṁ kulan-dharam\nbhrātṛbhir loka-pālābhair\nmumude parayā śriyā",
    "devanagari": "युधिष्ठिरो लब्धराज्यो द‍ृष्ट्वा पौत्रं कुलन्धरम् ।\nभ्रातृभिर्लोकपालाभैर्मुमुदे परया श्रिया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "17",
    "verse": "evaṁ gṛheṣu saktānāṁ\npramattānāṁ tad-īhayā\natyakrāmad avijñātaḥ\nkālaḥ parama-dustaraḥ",
    "devanagari": "एवं गृहेषु सक्तानां प्रमत्तानां तदीहया ।\nअत्यक्रामदविज्ञात: काल: परमदुस्तर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "18",
    "verse": "viduras tad abhipretya\ndhṛtarāṣṭram abhāṣata\nrājan nirgamyatāṁ śīghraṁ\npaśyedaṁ bhayam āgatam",
    "devanagari": "विदुरस्तदभिप्रेत्य धृतराष्ट्रमभाषत ।\nराजन्निर्गम्यतां शीघ्रं पश्येदं भयमागतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "19",
    "verse": "pratikriyā na yasyeha\nkutaścit karhicit prabho\nsa eṣa bhagavān kālaḥ\nsarveṣāṁ naḥ samāgataḥ",
    "devanagari": "प्रतिक्रिया न यस्येह कुतश्चित्कर्हिचित्प्रभो ।\nस एष भगवान् काल: सर्वेषां न: समागत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "20",
    "verse": "yena caivābhipanno 'yaṁ\nprāṇaiḥ priyatamair api\njanaḥ sadyo viyujyeta\nkim utānyair dhanādibhiḥ",
    "devanagari": "येन चैवाभिपन्नोऽयं प्राणै: प्रियतमैरपि ।\nजन: सद्यो वियुज्येत किमुतान्यैर्धनादिभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "21",
    "verse": "pitṛ-bhrātṛ-suhṛt-putrā\nhatās te vigataṁ vayam\nātmā ca jarayā grastaḥ\npara-geham upāsase",
    "devanagari": "पितृभ्रातृसुहृत्पुत्रा हतास्ते विगतं वयम् ।\nआत्मा च जरया ग्रस्त: परगेहमुपाससे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "22",
    "verse": "andhaḥ puraiva vadhiro\nmanda-prajñāś ca sāmpratam\nviśīrṇa-danto mandāgniḥ\nsarāgaḥ kapham udvahan",
    "devanagari": "अन्ध: पुरैव वधिरो मन्दप्रज्ञाश्च साम्प्रतम् ।\nविशीर्णदन्तो मन्दाग्नि: सराग: कफमुद्वहन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "23",
    "verse": "aho mahīyasī jantor\njīvitāśā yathā bhavān\nbhīmāpavarjitaṁ piṇḍam\nādatte gṛha-pālavat",
    "devanagari": "अहो महीयसी जन्तोर्जीविताशा यथा भवान् ।\nभीमापवर्जितं\nपिण्डमादत्ते गृहपालवत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "24",
    "verse": "agnir nisṛṣṭo dattaś ca\ngaro dārāś ca dūṣitāḥ\nhṛtaṁ kṣetraṁ dhanaṁ yeṣāṁ\ntad-dattair asubhiḥ kiyat",
    "devanagari": "अग्निर्निसृष्टो दत्तश्च गरो दाराश्च\nदूषिता: ।\nहृतं क्षेत्रं धनं येषां तद्दत्तैरसुभि: कियत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "25",
    "verse": "tasyāpi tava deho 'yaṁ\nkṛpaṇasya jijīviṣoḥ\nparaity anicchato jīrṇo\njarayā vāsasī iva",
    "devanagari": "तस्यापि तव देहोऽयं कृपणस्य जिजीविषो: ।\nपरैत्यनिच्छतो जीर्णो जरया वाससी इव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "26",
    "verse": "gata-svārtham imaṁ dehaṁ\nvirakto mukta-bandhanaḥ\navijñāta-gatir jahyāt\nsa vai dhīra udāhṛtaḥ",
    "devanagari": "गतस्वार्थमिमं देहं विरक्तो मुक्तबन्धन: ।\nअविज्ञातगतिर्जह्यात् स वै धीर उदाहृत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "27",
    "verse": "yaḥ svakāt parato veha\njāta-nirveda ātmavān\nhṛdi kṛtvā hariṁ gehāt\npravrajet sa narottamaḥ",
    "devanagari": "य: स्वकात्परतो वेह जातनिर्वेद आत्मवान् ।\nहृदि कृत्वा हरिं गेहात्प्रव्रजेत्स नरोत्तम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "28",
    "verse": "athodīcīṁ diśaṁ yātu\nsvair ajñāta-gatir bhavān\nito 'rvāk prāyaśaḥ kālaḥ\npuṁsāṁ guṇa-vikarṣaṇaḥ",
    "devanagari": "अथोदीचीं दिशं यातु स्वैरज्ञातगतिर्भवान् ।\nइतोऽर्वाक्प्रायश: काल: पुंसां गुणविकर्षण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "29",
    "verse": "evaṁ rājā vidureṇānujena\nprajñā-cakṣur bodhita ājamīḍhaḥ\nchittvā sveṣu sneha-pāśān draḍhimno\nniścakrāma bhrātṛ-sandarśitādhvā",
    "devanagari": "एवं राजा विदुरेणानुजेन\nप्रज्ञाचक्षुर्बोधित आजमीढ: ।\nछित्त्वा स्वेषु स्‍नेहपाशान्द्रढिम्नो\nनिश्चक्राम भ्रातृसन्दर्शिताध्वा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "30",
    "verse": "patiṁ prayāntaṁ subalasya putrī\npati-vratā cānujagāma sādhvī\nhimālayaṁ nyasta-daṇḍa-praharṣaṁ\nmanasvinām iva sat-samprahāraḥ",
    "devanagari": "पतिं प्रयान्तं सुबलस्य पुत्री\nपतिव्रता चानुजगाम साध्वी ।\nहिमालयं न्यस्तदण्डप्रहर्षं\nमनस्विनामिव सत्सम्प्रहार: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "31",
    "verse": "ajāta-śatruḥ kṛta-maitro hutāgnir\nviprān natvā tila-go-bhūmi-rukmaiḥ\ngṛhaṁ praviṣṭo guru-vandanāya\nna cāpaśyat pitarau saubalīṁ ca",
    "devanagari": "अजातशत्रु: कृतमैत्रो हुताग्नि-\nर्विप्रान्नत्वा\nतिलगोभूमिरुक्‍मै: ।\nगृहं प्रविष्टो गुरुवन्दनाय\nन चापश्यत्पितरौ\nसौबलीं च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "32",
    "verse": "tatra sañjayam āsīnaṁ\npapracchodvigna-mānasaḥ\ngāvalgaṇe kva nas tāto\nvṛddho hīnaś ca netrayoḥ",
    "devanagari": "तत्र सञ्जयमासीनं पप्रच्छोद्विग्नमानस: ।\nगावल्गणे क्‍व नस्तातो वृद्धो हीनश्च नेत्रयो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "33",
    "verse": "ambā ca hata-putrārtā\npitṛvyaḥ kva gataḥ suhṛt\napi mayy akṛta-prajñe\nhata-bandhuḥ sa bhāryayā\nāśaṁsamānaḥ śamalaṁ\ngaṅgāyāṁ duḥkhito 'patat",
    "devanagari": "अम्बा च हतपुत्रार्ता पितृव्य: क्‍व गत: सुहृत् ।\nअपि मय्यकृतप्रज्ञे हतबन्धु: स भार्यया ।\nआशंसमान: शमलं गङ्गायां दु:खितोऽपतत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "34",
    "verse": "pitary uparate pāṇḍau\nsarvān naḥ suhṛdaḥ śiśūn\narakṣatāṁ vyasanataḥ\npitṛvyau kva gatāv itaḥ",
    "devanagari": "पितर्युपरते पाण्डौ सर्वान्न: सुहृद: शिशून् ।\nअरक्षतां व्यसनत: पितृव्यौ क्‍व गतावित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "35",
    "verse": "sūta uvāca\nkṛpayā sneha-vaiklavyāt\nsūto viraha-karśitaḥ\nātmeśvaram acakṣāṇo\nna pratyāhātipīḍitaḥ",
    "devanagari": "सूत उवाच\nकृपया स्नेडहवैक्लव्यात्सूतो विरहकर्शित: ।\nआत्मेश्वरमचक्षाणो न प्रत्याहातिपीडित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "36",
    "verse": "vimṛjyāśrūṇi pāṇibhyāṁ\nviṣṭabhyātmānam ātmanā\najāta-śatruṁ pratyūce\nprabhoḥ pādāv anusmaran",
    "devanagari": "विमृज्याश्रूणि पाणिभ्यां\nविष्टभ्यात्मानमात्मना ।\nअजातशत्रुं प्रत्यूचे प्रभो: पादावनुस्मरन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "37",
    "verse": "sañjaya uvāca\nnāhaṁ veda vyavasitaṁ\npitror vaḥ kula-nandana\ngāndhāryā vā mahā-bāho\nmuṣito 'smi mahātmabhiḥ",
    "devanagari": "सञ्जय उवाच\nनाहं वेद व्यवसितं पित्रोर्व: कुलनन्दन ।\nगान्धार्या\nवा महाबाहो मुषितोऽस्मि महात्मभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "38",
    "verse": "athājagāma bhagavān\nnāradaḥ saha-tumburuḥ\npratyutthāyābhivādyāha\nsānujo 'bhyarcayan munim",
    "devanagari": "अथाजगाम भगवान् नारद: सहतुम्बुरु: ।\nप्रत्युत्थायाभिवाद्याह सानुजोऽभ्यर्चयन्मुनिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "39",
    "verse": "yudhiṣṭhira uvāca\nnāhaṁ veda gatiṁ pitror\nbhagavan kva gatāv itaḥ\nambā vā hata-putrārtā\nkva gatā ca tapasvinī",
    "devanagari": "युधिष्ठिर उवाच\nनाहं वेद गतिं पित्रोर्भगवन् क्‍व\nगतावित: ।\nअम्बा वा हतपुत्रार्ता क्‍व गता च तपस्विनी ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "40",
    "verse": "karṇadhāra ivāpāre\nbhagavān pāra-darśakaḥ\nathābabhāṣe bhagavān\nnārado muni-sattamaḥ",
    "devanagari": "कर्णधार इवापारे भगवान् पारदर्शक: ।\nअथाबभाषे\nभगवान् नारदो मुनिसत्तम: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "41",
    "verse": "nārada uvāca\nmā kañcana śuco rājan\nyad īśvara-vaśaṁ jagat\nlokāḥ sapālā yasyeme\nvahanti balim īśituḥ\nsa saṁyunakti bhūtāni\nsa eva viyunakti ca",
    "devanagari": "नारद उवाच\nमा कञ्चन शुचो राजन् यदीश्वरवशं जगत् ।\nलोका: सपाला यस्येमे वहन्ति बलिमीशितु: ।\nस संयुनक्ति भूतानि स एव वियुनक्ति च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "42",
    "verse": "yathā gāvo nasi protās\ntantyāṁ baddhāś ca dāmabhiḥ\nvāk-tantyāṁ nāmabhir baddhā\nvahanti balim īśituḥ",
    "devanagari": "यथा गावो नसि प्रोतास्तन्त्यां बद्धाश्च दामभि: ।\nवाक्तन्त्यां नामभिर्बद्धा वहन्ति बलिमीशितु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "43",
    "verse": "yathā krīḍopaskarāṇāṁ\nsaṁyoga-vigamāv iha\nicchayā krīḍituḥ syātāṁ\ntathaiveśecchayā nṛṇām",
    "devanagari": "यथा क्रीडोपस्कराणां संयोगविगमाविह ।\nइच्छया क्रीडितु: स्यातां तथैवेशेच्छया नृणाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "44",
    "verse": "yan manyase dhruvaṁ lokam\nadhruvaṁ vā na cobhayam\nsarvathā na hi śocyās te\nsnehād anyatra mohajāt",
    "devanagari": "यन्मन्यसे ध्रुवं लोकमध्रुवं वा न चोभयम् ।\nसर्वथा न हि शोच्यास्ते स्‍नेहादन्यत्र मोहजात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "45",
    "verse": "tasmāj jahy aṅga vaiklavyam\najñāna-kṛtam ātmanaḥ\nkathaṁ tv anāthāḥ kṛpaṇā\nvarteraṁs te ca māṁ vinā",
    "devanagari": "तस्माज्जह्यङ्ग वैक्लव्यमज्ञानकृतमात्मन: ।\nकथं त्वनाथा: कृपणा वर्तेरंस्ते च मां विना ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "46",
    "verse": "kāla-karma-guṇādhīno\ndeho 'yaṁ pāñca-bhautikaḥ\nkatham anyāṁs tu gopāyet\nsarpa-grasto yathā param",
    "devanagari": "कालकर्मगुणाधीनो देहोऽयं पाञ्चभौतिक: ।\nकथमन्यांस्तु गोपायेत्सर्पग्रस्तो यथा परम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "47",
    "verse": "ahastāni sahastānām\napadāni catuṣ-padām\nphalgūni tatra mahatāṁ\njīvo jīvasya jīvanam",
    "devanagari": "अहस्तानि सहस्तानामपदानि चतुष्पदाम् ।\nफल्गूनि तत्र महतां जीवो जीवस्य जीवनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "48",
    "verse": "tad idaṁ bhagavān rājann\neka ātmātmanāṁ sva-dṛk\nantaro 'nantaro bhāti\npaśya taṁ māyayorudhā",
    "devanagari": "तदिदं भगवान् राजन्नेक आत्मात्मनां स्वद‍ृक् ।\nअन्तरोऽनन्तरो भाति पश्य तं माययोरुधा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "49",
    "verse": "so 'yam adya mahārāja\nbhagavān bhūta-bhāvanaḥ\nkāla-rūpo 'vatīrṇo 'syām\nabhāvāya sura-dviṣām",
    "devanagari": "सोऽयमद्य महाराज भगवान् भूतभावन: ।\nकालरूपोऽवतीर्णोऽस्यामभावाय सुरद्विषाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "50",
    "verse": "niṣpāditaṁ deva-kṛtyam\navaśeṣaṁ pratīkṣate\ntāvad yūyam avekṣadhvaṁ\nbhaved yāvad iheśvaraḥ",
    "devanagari": "निष्पादितं देवकृत्यमवशेषं प्रतीक्षते ।\nतावद् यूयमवेक्षध्वं भवेद् यावदिहेश्वर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "51",
    "verse": "dhṛtarāṣṭraḥ saha bhrātrā\ngāndhāryā ca sva-bhāryayā\ndakṣiṇena himavata\nṛṣīṇām āśramaṁ gataḥ",
    "devanagari": "धृतराष्ट्र: सह भ्रात्रा गान्धार्या च स्वभार्यया ।\nदक्षिणेन हिमवत ऋषीणामाश्रमं गत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "52",
    "verse": "srotobhiḥ saptabhir yā vai\nsvardhunī saptadhā vyadhāt\nsaptānāṁ prītaye nānā\nsapta-srotaḥ pracakṣate",
    "devanagari": "स्रोतोभि: सप्तभिर्या वै स्वर्धुनी सप्तधा व्यधात् ।\nसप्तानां प्रीतये नाना सप्तस्रोत: प्रचक्षते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "53",
    "verse": "snātvānusavanaṁ tasmin\nhutvā cāgnīn yathā-vidhi\nab-bhakṣa upaśāntātmā\nsa āste vigataiṣaṇaḥ",
    "devanagari": "स्‍नात्वानुसवनं तस्मिन्हुत्वा चाग्नीन्यथाविधि ।\nअब्भक्ष उपशान्तात्मा स आस्ते विगतैषण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "54",
    "verse": "jitāsano jita-śvāsaḥ\npratyāhṛta-ṣaḍ-indriyaḥ\nhari-bhāvanayā dhvasta-\nrajaḥ-sattva-tamo-malaḥ",
    "devanagari": "जितासनो जितश्वास: प्रत्याहृतषडिन्द्रिय: ।\nहरिभावनया ध्वस्तरज:सत्त्वतमोमल: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "55",
    "verse": "vijñānātmani saṁyojya\nkṣetrajñe pravilāpya tam\nbrahmaṇy ātmānam ādhāre\nghaṭāmbaram ivāmbare",
    "devanagari": "विज्ञानात्मनि संयोज्य क्षेत्रज्ञे प्रविलाप्य तम् ।\nब्रह्मण्यात्मानमाधारे घटाम्बरमिवाम्बरे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "56",
    "verse": "dhvasta-māyā-guṇodarko\nniruddha-karaṇāśayaḥ\nnivartitākhilāhāra\nāste sthāṇur ivācalaḥ\ntasyāntarāyo maivābhūḥ\nsannyastākhila-karmaṇaḥ",
    "devanagari": "ध्वस्तमायागुणोदर्को निरुद्धकरणाशय: ।\nनिवर्तिताखिलाहार आस्ते स्थाणुरिवाचल: ।\nतस्यान्तरायो मैवाभू: सन्न्यस्ताखिलकर्मण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "57",
    "verse": "sa vā adyatanād rājan\nparataḥ pañcame 'hani\nkalevaraṁ hāsyati svaṁ\ntac ca bhasmī-bhaviṣyati",
    "devanagari": "स वा अद्यतनाद् राजन् परत: पञ्चमेऽहनि ।\nकलेवरं हास्यति स्वं तच्च भस्मीभविष्यति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "58",
    "verse": "dahyamāne 'gnibhir dehe\npatyuḥ patnī sahoṭaje\nbahiḥ sthitā patiṁ sādhvī\ntam agnim anu vekṣyati",
    "devanagari": "दह्यमानेऽग्निभिर्देहे पत्यु: पत्नी सहोटजे ।\nबहि: स्थिता पतिं साध्वी तमग्निमनु वेक्ष्यति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "59",
    "verse": "viduras tu tad āścaryaṁ\nniśāmya kuru-nandana\nharṣa-śoka-yutas tasmād\ngantā tīrtha-niṣevakaḥ",
    "devanagari": "विदुरस्तु तदाश्चर्यं निशाम्य कुरुनन्दन ।\nहर्षशोकयुतस्तस्माद् गन्ता तीर्थनिषेवक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "13",
    "text": "60",
    "verse": "ity uktvāthāruhat svargaṁ\nnāradaḥ saha-tumburuḥ\nyudhiṣṭhiro vacas tasya\nhṛdi kṛtvājahāc chucaḥ",
    "devanagari": "इत्युक्त्वाथारुहत् स्वर्गं नारद: सहतुम्बुरु: ।\nयुधिष्ठिरो वचस्तस्य हृदि कृत्वाजहाच्छुच: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "1",
    "verse": "sūta uvāca\nsamprasthite dvārakāyāṁ\njiṣṇau bandhu-didṛkṣayā\njñātuṁ ca puṇya-ślokasya\nkṛṣṇasya ca viceṣṭitam",
    "devanagari": "सूत उवाच\nसम्प्रस्थिते द्वारकायां जिष्णौ बन्धुदिद‍ृक्षया ।\nज्ञातुं च पुण्यश्लोकस्य कृष्णस्य च विचेष्टितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "2",
    "verse": "vyatītāḥ katicin māsās\ntadā nāyāt tato 'rjunaḥ\ndadarśa ghora-rūpāṇi\nnimittāni kurūdvahaḥ",
    "devanagari": "व्यतीता: कतिचिन्मासास्तदा नायात्ततोऽर्जुन: ।\nददर्श घोररूपाणि निमित्तानि कुरूद्वह: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "3",
    "verse": "kālasya ca gatiṁ raudrāṁ\nviparyastartu-dharmiṇaḥ\npāpīyasīṁ nṛṇāṁ vārtāṁ\nkrodha-lobhānṛtātmanām",
    "devanagari": "कालस्य च गतिं रौद्रां विपर्यस्तर्तुधर्मिण: ।\nपापीयसीं नृणां वार्तां क्रोधलोभानृतात्मनाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "4",
    "verse": "jihma-prāyaṁ vyavahṛtaṁ\nśāṭhya-miśraṁ ca sauhṛdam\npitṛ-mātṛ-suhṛd-bhrātṛ-\ndam-patīnāṁ ca kalkanam",
    "devanagari": "जिह्मप्रायं व्यवहृतं शाठ्यमिश्रं च सौहृदम् ।\nपितृमातृसुहृद्भ्रातृदम्पतीनां च कल्कनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "5",
    "verse": "nimittāny atyariṣṭāni\nkāle tv anugate nṛṇām\nlobhādy-adharma-prakṛtiṁ\ndṛṣṭvovācānujaṁ nṛpaḥ",
    "devanagari": "निमित्तान्यत्यरिष्टानि काले त्वनुगते नृणाम् ।\nलोभाद्यधर्मप्रकृतिं द‍ृष्ट्वोवाचानुजं नृप: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "6",
    "verse": "yudhiṣṭhira uvāca\nsampreṣito dvārakāyāṁ\njiṣṇur bandhu-didṛkṣayā\njñātuṁ ca puṇya-ślokasya\nkṛṣṇasya ca viceṣṭitam",
    "devanagari": "युधिष्ठिर उवाच\nसम्प्रेषितो द्वारकायां जिष्णुर्बन्धुदिद‍ृक्षया ।\nज्ञातुं च पुण्यश्लोकस्य कृष्णस्य च विचेष्टितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "7",
    "verse": "gatāḥ saptādhunā māsā\nbhīmasena tavānujaḥ\nnāyāti kasya vā hetor\nnāhaṁ vededam añjasā",
    "devanagari": "गता: सप्ताधुना मासा भीमसेन तवानुज: ।\nनायाति कस्य वा हेतोर्नाहं वेदेदमञ्जसा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "8",
    "verse": "api devarṣiṇādiṣṭaḥ\nsa kālo 'yam upasthitaḥ\nyadātmano 'ṅgam ākrīḍaṁ\nbhagavān utsisṛkṣati",
    "devanagari": "अपि देवर्षिणादिष्ट: स कालोऽयमुपस्थित: ।\nयदात्मनोऽङ्गमाक्रीडं भगवानुत्सिसृक्षति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "9",
    "verse": "yasmān naḥ sampado rājyaṁ\ndārāḥ prāṇāḥ kulaṁ prajāḥ\nāsan sapatna-vijayo\nlokāś ca yad-anugrahāt",
    "devanagari": "यस्मान्न: सम्पदो राज्यं दारा: प्राणा: कुलं प्रजा: ।\nआसन्सपत्नविजयो लोकाश्च यदनुग्रहात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "10",
    "verse": "paśyotpātān nara-vyāghra\ndivyān bhaumān sadaihikān\ndāruṇān śaṁsato 'dūrād\nbhayaṁ no buddhi-mohanam",
    "devanagari": "पश्योत्पातान्नरव्याघ्र दिव्यान् भौमान् सदैहिकान् ।\nदारुणान् शंसतोऽदूराद्भयं नो बुद्धिमोहनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "11",
    "verse": "ūrv-akṣi-bāhavo mahyaṁ\nsphuranty aṅga punaḥ punaḥ\nvepathuś cāpi hṛdaye\nārād dāsyanti vipriyam",
    "devanagari": "ऊर्वक्षिबाहवो मह्यं स्फुरन्त्यङ्ग पुन: पुन: ।\nवेपथुश्चापि हृदये आराद्दास्यन्ति विप्रियम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "12",
    "verse": "śivaiṣodyantam ādityam\nabhirauty analānanā\nmām aṅga sārameyo 'yam\nabhirebhaty abhīruvat",
    "devanagari": "शिवैषोद्यन्तमादित्यमभिरौत्यनलानना ।\nमामङ्ग सारमेयोऽयमभिरेभत्यभीरुवत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "13",
    "verse": "śastāḥ kurvanti māṁ savyaṁ\ndakṣiṇaṁ paśavo 'pare\nvāhāṁś ca puruṣa-vyāghra\nlakṣaye rudato mama",
    "devanagari": "शस्ता: कुर्वन्ति मां सव्यं दक्षिणं पशवोऽपरे ।\nवाहांश्च पुरुषव्याघ्र लक्षये रुदतो मम ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "14",
    "verse": "mṛtyu-dūtaḥ kapoto 'yam\nulūkaḥ kampayan manaḥ\npratyulūkaś ca kuhvānair\nviśvaṁ vai śūnyam icchataḥ",
    "devanagari": "मृत्युदूत: कपोतोऽयमुलूक: कम्पयन् मन: ।\nप्रत्युलूकश्च कुह्वानैर्विश्वं वै शून्यमिच्छत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "15",
    "verse": "dhūmrā diśaḥ paridhayaḥ\nkampate bhūḥ sahādribhiḥ\nnirghātaś ca mahāṁs tāta\nsākaṁ ca stanayitnubhiḥ",
    "devanagari": "धूम्रा दिश: परिधय: कम्पते भू: सहाद्रिभि: ।\nनिर्घातश्च महांस्तात साकं च स्तनयित्नुभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "16",
    "verse": "vāyur vāti khara-sparśo\nrajasā visṛjaṁs tamaḥ\nasṛg varṣanti jaladā\nbībhatsam iva sarvataḥ",
    "devanagari": "वायुर्वाति खरस्पर्शो रजसा विसृजंस्तम: ।\nअसृग् वर्षन्ति जलदा बीभत्समिव सर्वत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "17",
    "verse": "sūryaṁ hata-prabhaṁ paśya\ngraha-mardaṁ mitho divi\nsasaṅkulair bhūta-gaṇair\njvalite iva rodasī",
    "devanagari": "सूर्यं हतप्रभं पश्य ग्रहमर्दं मिथो दिवि ।\nससङ्कुलैर्भूतगणैर्ज्वलिते इव रोदसी ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "18",
    "verse": "nadyo nadāś ca kṣubhitāḥ\nsarāṁsi ca manāṁsi ca\nna jvalaty agnir ājyena\nkālo 'yaṁ kiṁ vidhāsyati",
    "devanagari": "नद्यो नदाश्च क्षुभिता: सरांसि च मनांसि च ।\nन ज्वलत्यग्निराज्येन कालोऽयं किं विधास्यति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "19",
    "verse": "na pibanti stanaṁ vatsā\nna duhyanti ca mātaraḥ\nrudanty aśru-mukhā gāvo\nna hṛṣyanty ṛṣabhā vraje",
    "devanagari": "न पिबन्ति स्तनं वत्सा न दुह्यन्ति च मातर: ।\nरुदन्त्यश्रुमुखा गावो न हृष्यन्त्यृषभा व्रजे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "20",
    "verse": "daivatāni rudantīva\nsvidyanti hy uccalanti ca\nime jana-padā grāmāḥ\npurodyānākarāśramāḥ\nbhraṣṭa-śriyo nirānandāḥ\nkim aghaṁ darśayanti naḥ",
    "devanagari": "दैवतानि रुदन्तीव स्विद्यन्ति ह्युच्चलन्ति च ।\nइमे जनपदा ग्रामा: पुरोद्यानाकराश्रमा: ।\nभ्रष्टश्रियो निरानन्दा: किमघं दर्शयन्ति न: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "21",
    "verse": "manya etair mahotpātair\nnūnaṁ bhagavataḥ padaiḥ\nananya-puruṣa-śrībhir\nhīnā bhūr hata-saubhagā",
    "devanagari": "मन्य एतैर्महोत्पातैर्नूनं भगवत: पदै: ।\nअनन्यपुरुषश्रीभिर्हीना भूर्हतसौभगा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "22",
    "verse": "iti cintayatas tasya\ndṛṣṭāriṣṭena cetasā\nrājñaḥ pratyāgamad brahman\nyadu-puryāḥ kapi-dhvajaḥ",
    "devanagari": "इति चिन्तयतस्तस्य द‍ृष्टारिष्टेन चेतसा ।\nराज्ञ: प्रत्यागमद् ब्रह्मन् यदुपुर्या: कपिध्वज: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "23",
    "verse": "taṁ pādayor nipatitam\nayathā-pūrvam āturam\nadho-vadanam ab-bindūn\nsṛjantaṁ nayanābjayoḥ",
    "devanagari": "तं पादयोर्निपतितमयथापूर्वमातुरम् ।\nअधोवदनमब्बिन्दून् सृजन्तं नयनाब्जयो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "24",
    "verse": "vilokyodvigna-hṛdayo\nvicchāyam anujaṁ nṛpaḥ\npṛcchati sma suhṛn madhye\nsaṁsmaran nāraderitam",
    "devanagari": "विलोक्योद्विग्नहृदयो विच्छायमनुजं नृप: ।\nपृच्छति स्म सुहृन्मध्ये संस्मरन्नारदेरितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "25",
    "verse": "yudhiṣṭhira uvāca\nkaccid ānarta-puryāṁ naḥ\nsva-janāḥ sukham āsate\nmadhu-bhoja-daśārhārha-\nsātvatāndhaka-vṛṣṇayaḥ",
    "devanagari": "युधिष्ठिर उवाच\nकच्चिदानर्तपुर्यां न: स्वजना: सुखमासते ।\nमधुभोजदशार्हार्हसात्वतान्धकवृष्णय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "26",
    "verse": "śūro mātāmahaḥ kaccit\nsvasty āste vātha māriṣaḥ\nmātulaḥ sānujaḥ kaccit\nkuśaly ānakadundubhiḥ",
    "devanagari": "शूरो मातामह: कच्चित्स्वस्त्यास्ते वाथ मारिष: ।\nमातुल: सानुज: कच्चित्कुशल्यानकदुन्दुभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "27",
    "verse": "sapta sva-sāras tat-patnyo\nmātulānyaḥ sahātmajāḥ\nāsate sasnuṣāḥ kṣemaṁ\ndevakī-pramukhāḥ svayam",
    "devanagari": "सप्त स्वसारस्तत्पत्न्यो मातुलान्य: सहात्मजा: ।\nआसते सस्‍नुषा: क्षेमं देवकीप्रमुखा: स्वयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "28",
    "verse": "kaccid rājāhuko jīvaty\nasat-putro 'sya cānujaḥ\nhṛdīkaḥ sasuto 'krūro\njayanta-gada-sāraṇāḥ",
    "devanagari": "कच्चिद्राजाहुको जीवत्यसत्पुत्रोऽस्य चानुज: ।\nहृदीक: ससुतोऽक्रूरो जयन्तगदसारणा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "29",
    "verse": "āsate kuśalaṁ kaccid\nye ca śatrujid-ādayaḥ\nkaccid āste sukhaṁ rāmo\nbhagavān sātvatāṁ prabhuḥ",
    "devanagari": "आसते कुशलं कच्चिद्ये च शत्रुजिदादय: ।\nकच्चिदास्ते सुखं रामो भगवान् सात्वतां प्रभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "30",
    "verse": "pradyumnaḥ sarva-vṛṣṇīnāṁ\nsukham āste mahā-rathaḥ\ngambhīra-rayo 'niruddho\nvardhate bhagavān uta",
    "devanagari": "प्रद्युम्न: सर्ववृष्णीनां सुखमास्ते महारथ: ।\nगम्भीररयोऽनिरुद्धो वर्धते भगवानुत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "31",
    "verse": "suṣeṇaś cārudeṣṇaś ca\nsāmbo jāmbavatī-sutaḥ\nanye ca kārṣṇi-pravarāḥ\nsaputrā ṛṣabhādayaḥ",
    "devanagari": "सुषेणश्चारुदेष्णश्च साम्बो जाम्बवतीसुत: ।\nअन्ये च कार्ष्णिप्रवरा: सपुत्रा ऋषभादय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "32",
    "verse": "tathaivānucarāḥ śaureḥ\nśrutadevoddhavādayaḥ\nsunanda-nanda-śīrṣaṇyā\nye cānye sātvatarṣabhāḥ",
    "devanagari": "तथैवानुचरा: शौरे: श्रुतदेवोद्धवादय: ।\nसुनन्दनन्दशीर्षण्या ये चान्ये सात्वतर्षभा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "33",
    "verse": "api svasty āsate sarve\nrāma-kṛṣṇa-bhujāśrayāḥ\napi smaranti kuśalam\nasmākaṁ baddha-sauhṛdāḥ",
    "devanagari": "अपि स्वस्त्यासते सर्वे रामकृष्णभुजाश्रया: ।\nअपि स्मरन्ति कुशलमस्माकं बद्धसौहृदा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "34",
    "verse": "bhagavān api govindo\nbrahmaṇyo bhakta-vatsalaḥ\nkaccit pure sudharmāyāṁ\nsukham āste suhṛd-vṛtaḥ",
    "devanagari": "भगवानपि गोविन्दो ब्रह्मण्यो भक्तवत्सल: ।\nकच्चित्पुरे सुधर्मायां सुखमास्ते सुहृद्‍वृत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "35",
    "verse": "maṅgalāya ca lokānāṁ\nkṣemāya ca bhavāya ca\nāste yadu-kulāmbhodhāv\nādyo 'nanta-sakhaḥ pumān",
    "devanagari": "मङ्गलाय च लोकानां क्षेमाय च भवाय च ।\nआस्ते यदुकुलाम्भोधावाद्योऽनन्तसख: पुमान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "36",
    "verse": "yad bāhu-daṇḍa-guptāyāṁ\nsva-puryāṁ yadavo 'rcitāḥ\nkrīḍanti paramānandaṁ\nmahā-pauruṣikā iva",
    "devanagari": "यद्बाहुदण्डगुप्तायां स्वपुर्यां यदवोऽर्चिता: ।\nक्रीडन्ति परमानन्दं महापौरुषिका इव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "37",
    "verse": "yat-pāda-śuśrūṣaṇa-mukhya-karmaṇā\nsatyādayo dvy-aṣṭa-sahasra-yoṣitaḥ\nnirjitya saṅkhye tri-daśāṁs tad-āśiṣo\nharanti vajrāyudha-vallabhocitāḥ",
    "devanagari": "यत्पादशुश्रूषणमुख्यकर्मणा\nसत्यादयो द्व्यष्टसहस्रयोषित: ।\nनिर्जित्य सङ्ख्ये त्रिदशांस्तदाशिषो\nहरन्ति वज्रायुधवल्लभोचिता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "38",
    "verse": "yad bāhu-daṇḍābhyudayānujīvino\nyadu-pravīrā hy akutobhayā muhuḥ\nadhikramanty aṅghribhir āhṛtāṁ balāt\nsabhāṁ sudharmāṁ sura-sattamocitām",
    "devanagari": "यद्बाहुदण्डाभ्युदयानुजीविनो\nयदुप्रवीरा ह्यकुतोभया मुहु: ।\nअधिक्रमन्त्यङ्‌घ्रिभिराहृतां बलात्\nसभां सुधर्मां सुरसत्तमोचिताम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "39",
    "verse": "kaccit te 'nāmayaṁ tāta\nbhraṣṭa-tejā vibhāsi me\nalabdha-māno 'vajñātaḥ\nkiṁ vā tāta ciroṣitaḥ",
    "devanagari": "कच्चित्तेऽनामयं तात भ्रष्टतेजा विभासि मे ।\nअलब्धमानोऽवज्ञात: किं वा तात चिरोषित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "40",
    "verse": "kaccin nābhihato 'bhāvaiḥ\nśabdādibhir amaṅgalaiḥ\nna dattam uktam arthibhya\nāśayā yat pratiśrutam",
    "devanagari": "कच्चिन्नाभिहतोऽभावै: शब्दादिभिरमङ्गलै: ।\nन दत्तमुक्तमर्थिभ्य आशया यत्प्रतिश्रुतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "41",
    "verse": "kaccit tvaṁ brāhmaṇaṁ bālaṁ\ngāṁ vṛddhaṁ rogiṇaṁ striyam\nśaraṇopasṛtaṁ sattvaṁ\nnātyākṣīḥ śaraṇa-pradaḥ",
    "devanagari": "कच्चित्त्वं ब्राह्मणं बालं गां वृद्धं रोगिणं स्त्रियम् ।\nशरणोपसृतं सत्त्वं नात्याक्षी: शरणप्रद: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "42",
    "verse": "kaccit tvaṁ nāgamo 'gamyāṁ\ngamyāṁ vāsat-kṛtāṁ striyam\nparājito vātha bhavān\nnottamair nāsamaiḥ pathi",
    "devanagari": "कच्चित्त्वं नागमोऽगम्यां गम्यां वासत्कृतां स्त्रियम् ।\nपराजितो वाथ भवान्नोत्तमैर्नासमै: पथि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "43",
    "verse": "api svit parya-bhuṅkthās tvaṁ\nsambhojyān vṛddha-bālakān\njugupsitaṁ karma kiñcit\nkṛtavān na yad akṣamam",
    "devanagari": "अपि स्वित्पर्यभुङ्‍क्‍थास्त्वं सम्भोज्यान् वृद्धबालकान् ।\nजुगुप्सितं कर्म किञ्चित्कृतवान्न यदक्षमम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "14",
    "text": "44",
    "verse": "kaccit preṣṭhatamenātha\nhṛdayenātma-bandhunā\nśūnyo 'smi rahito nityaṁ\nmanyase te 'nyathā na ruk",
    "devanagari": "कच्चित् प्रेष्ठतमेनाथ हृदयेनात्मबन्धुना ।\nशून्योऽस्मि रहितो नित्यं मन्यसे तेऽन्यथा न रुक् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "1",
    "verse": "sūta uvāca\nevaṁ kṛṣṇa-sakhaḥ kṛṣṇo\nbhrātrā rājñā vikalpitaḥ\nnānā-śaṅkāspadaṁ rūpaṁ\nkṛṣṇa-viśleṣa-karśitaḥ",
    "devanagari": "सूत उवाच\nएवं कृष्णसख: कृष्णो भ्रात्रा राज्ञा विकल्पित: ।\nनानाशङ्कास्पदं रूपं कृष्णविश्लेषकर्शित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "2",
    "verse": "śokena śuṣyad-vadana-\nhṛt-sarojo hata-prabhaḥ\nvibhuṁ tam evānusmaran\nnāśaknot pratibhāṣitum",
    "devanagari": "शोकेन शुष्यद्वदनहृत्सरोजो हतप्रभ: ।\nविभुं तमेवानुस्मरन्नाशक्नोत्प्रतिभाषितुम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "3",
    "verse": "kṛcchreṇa saṁstabhya śucaḥ\npāṇināmṛjya netrayoḥ\nparokṣeṇa samunnaddha-\npraṇayautkaṇṭhya-kātaraḥ",
    "devanagari": "कृच्छ्रेण संस्तभ्य शुच: पाणिनामृज्य नेत्रयो: ।\nपरोक्षेण समुन्नद्धप्रणयौत्कण्ठ्यकातर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "4",
    "verse": "sakhyaṁ maitrīṁ sauhṛdaṁ ca\nsārathyādiṣu saṁsmaran\nnṛpam agrajam ity āha\nbāṣpa-gadgadayā girā",
    "devanagari": "सख्यं मैत्रीं सौहृदं च सारथ्यादिषु संस्मरन् ।\nनृपमग्रजमित्याह बाष्पगद्गदया गिरा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "5",
    "verse": "arjuna uvāca\nvañcito 'haṁ mahā-rāja\nhariṇā bandhu-rūpiṇā\nyena me 'pahṛtaṁ tejo\ndeva-vismāpanaṁ mahat",
    "devanagari": "अर्जुन उवाच\nवञ्चितोऽहं महाराज हरिणा बन्धुरूपिणा ।\nयेन मेऽपहृतं तेजो देवविस्मापनं महत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "6",
    "verse": "yasya kṣaṇa-viyogena\nloko hy apriya-darśanaḥ\nukthena rahito hy eṣa\nmṛtakaḥ procyate yathā",
    "devanagari": "यस्य क्षणवियोगेन लोको ह्यप्रियदर्शन: ।\nउक्थेन रहितो ह्येष मृतक: प्रोच्यते यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "7",
    "verse": "yat-saṁśrayād drupada-geham upāgatānāṁ\nrājñāṁ svayaṁvara-mukhe smara-durmadānām\ntejo hṛtaṁ khalu mayābhihataś ca matsyaḥ\nsajjīkṛtena dhanuṣādhigatā ca kṛṣṇā",
    "devanagari": "यत्संश्रयाद् द्रुपदगेहमुपागतानां\nराज्ञां स्वयंवरमुखे स्मरदुर्मदानाम् ।\nतेजो हृतं खलु मयाभिहतश्च मत्स्य:\nसज्जीकृतेन धनुषाधिगता च कृष्णा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "8",
    "verse": "yat-sannidhāv aham u khāṇḍavam agnaye 'dām\nindraṁ ca sāmara-gaṇaṁ tarasā vijitya\nlabdhā sabhā maya-kṛtādbhuta-śilpa-māyā\ndigbhyo 'haran nṛpatayo balim adhvare te",
    "devanagari": "यत्सन्निधावहमु खांडवमग्नयेऽदा-\nमिन्द्रं च सामरगणं तरसा विजित्य ।\nलब्धा सभा मयकृताद्भुतशिल्पमाया\nदिग्भ्योऽहरन्नृपतयो बलिमध्वरे ते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "9",
    "verse": "yat-tejasā nṛpa-śiro-'ṅghrim ahan makhārtham\nāryo 'nujas tava gajāyuta-sattva-vīryaḥ\ntenāhṛtāḥ pramatha-nātha-makhāya bhūpā\nyan-mocitās tad-anayan balim adhvare te",
    "devanagari": "यत्तेजसा नृपशिरोऽङ्‌घ्रिमहन्मखार्थम्\nआर्योऽनुजस्तव गजायुतसत्त्ववीर्य: ।\nतेनाहृता: प्रमथनाथमखाय भूपा\nयन्मोचितास्तदनयन्बलिमध्वरे ते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "10",
    "verse": "patnyās tavādhimakha-kḷpta-mahābhiṣeka-\nślāghiṣṭha-cāru-kabaraṁ kitavaiḥ sabhāyām\nspṛṣṭaṁ vikīrya padayoḥ patitāśru-mukhyā\nyas tat-striyo 'kṛta-hateśa-vimukta-keśāḥ",
    "devanagari": "पत्‍न्‍यास्तवाधिमखक्लृप्तमहाभिषेक-\nश्लाघिष्ठचारुकबरं कितवै: सभायाम् ।\nस्पृष्टं विकीर्य पदयो: पतिताश्रुमुख्या\nयस्तत्स्त्रियोऽकृतहतेशविमुक्तकेशा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "11",
    "verse": "yo no jugopa vana etya duranta-kṛcchrād\ndurvāsaso 'ri-racitād ayutāgra-bhug yaḥ\nśākānna-śiṣṭam upayujya yatas tri-lokīṁ\ntṛptām amaṁsta salile vinimagna-saṅghaḥ",
    "devanagari": "यो नो जुगोप वन एत्य दुरन्तकृच्छ्राद्\nदुर्वाससोऽरिरचितादयुताग्रभुग् य: ।\nशाकान्नशिष्टमुपयुज्य यतस्त्रिलोकीं\nतृप्ताममंस्त सलिले विनिमग्नसङ्घ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "12",
    "verse": "yat-tejasātha bhagavān yudhi śūla-pāṇir\nvismāpitaḥ sagirijo 'stram adān nijaṁ me\nanye 'pi cāham amunaiva kalevareṇa\nprāpto mahendra-bhavane mahad-āsanārdham",
    "devanagari": "यत्तेजसाथ भगवान् युधि शूलपाणि-\nर्विस्मापित: सगिरिजोऽस्त्रमदान्निजं मे ।\nअन्येऽपि चाहममुनैव कलेवरेण\nप्राप्तो महेन्द्रभवने महदासनार्धम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "13",
    "verse": "tatraiva me viharato bhuja-daṇḍa-yugmaṁ\ngāṇḍīva-lakṣaṇam arāti-vadhāya devāḥ\nsendrāḥ śritā yad-anubhāvitam ājamīḍha\ntenāham adya muṣitaḥ puruṣeṇa bhūmnā",
    "devanagari": "तत्रैव मे विहरतो भुजदण्डयुग्मं\nगाण्डीवलक्षणमरातिवधाय देवा: ।\nसेन्द्रा: श्रिता यदनुभावितमाजमीढ\nतेनाहमद्य मुषित: पुरुषेण भूम्ना ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "14",
    "verse": "yad-bāndhavaḥ kuru-balābdhim ananta-pāram\neko rathena tatare 'ham atīrya-sattvam\npratyāhṛtaṁ bahu dhanaṁ ca mayā pareṣāṁ\ntejāspadaṁ maṇimayaṁ ca hṛtaṁ śirobhyaḥ",
    "devanagari": "यद्बान्धव: कुरुबलाब्धिमनन्तपार-\nमेको रथेन ततरेऽहमतीर्यसत्त्वम् ।\nप्रत्याहृतं बहु धनं च मया परेषां\nतेजास्पदं मणिमयं च हृतं शिरोभ्य: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "15",
    "verse": "yo bhīṣma-karṇa-guru-śalya-camūṣv adabhra-\nrājanya-varya-ratha-maṇḍala-maṇḍitāsu\nagrecaro mama vibho ratha-yūthapānām\nāyur manāṁsi ca dṛśā saha oja ārcchat",
    "devanagari": "यो भीष्मकर्णगुरुशल्यचमूष्वदभ्र-\nराजन्यवर्यरथमण्डलमण्डितासु ।\nअग्रेचरो मम विभो रथयूथपाना-\nमायुर्मनांसि च द‍ृशा सह ओज आर्च्छत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "16",
    "verse": "yad-doḥṣu mā praṇihitaṁ guru-bhīṣma-karṇa-\nnaptṛ-trigarta-śalya-saindhava-bāhlikādyaiḥ\nastrāṇy amogha-mahimāni nirūpitāni\nnopaspṛśur nṛhari-dāsam ivāsurāṇi",
    "devanagari": "यद्दो:षु मा प्रणिहितं गुरुभीष्मकर्ण-\nनप्तृत्रिगर्तशल्यसैन्धवबाह्लिकाद्यै: ।\nअस्‍त्राण्यमोघमहिमानि निरूपितानि\nनोपस्पृशुर्नृहरिदासमिवासुराणि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "17",
    "verse": "sautye vṛtaḥ kumatinātmada īśvaro me\nyat-pāda-padmam abhavāya bhajanti bhavyāḥ\nmāṁ śrānta-vāham arayo rathino bhuvi-ṣṭhaṁ\nna prāharan yad-anubhāva-nirasta-cittāḥ",
    "devanagari": "सौत्ये वृत: कुमतिनात्मद ईश्वरो मे\nयत्पादपद्ममभवाय भजन्ति भव्या: ।\nमां श्रान्तवाहमरयो रथिनो भुविष्ठं\nन प्राहरन् यदनुभावनिरस्तचित्ता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "18",
    "verse": "narmāṇy udāra-rucira-smita-śobhitāni\nhe pārtha he 'rjuna sakhe kuru-nandaneti\nsañjalpitāni nara-deva hṛdi-spṛśāni\nsmartur luṭhanti hṛdayaṁ mama mādhavasya",
    "devanagari": "नर्माण्युदाररुचिरस्मितशोभितानि हे पार्थ हेऽर्जुन सखे कुरुनन्दनेति ।\nसञ्जल्पितानि नरदेव हृदिस्पृशानि स्मर्तुर्लुठन्ति हृदयं मम माधवस्य ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "19",
    "verse": "śayyāsanāṭana-vikatthana-bhojanādiṣv\naikyād vayasya ṛtavān iti vipralabdhaḥ\nsakhyuḥ sakheva pitṛvat tanayasya sarvaṁ\nsehe mahān mahitayā kumater aghaṁ me",
    "devanagari": "शय्यासनाटनविकत्थनभोजनादि ष्वैक्याद्वयस्य ऋतवानिति विप्रलब्ध: ।\nसख्यु: सखेव पितृवत्तनयस्य सर्वं सेहे महान्महितया कुमतेरघं मे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "20",
    "verse": "so 'haṁ nṛpendra rahitaḥ puruṣottamena\nsakhyā priyeṇa suhṛdā hṛdayena śūnyaḥ\nadhvany urukrama-parigraham aṅga rakṣan\ngopair asadbhir abaleva vinirjito 'smi",
    "devanagari": "सोऽहं नृपेन्द्र रहित: पुरुषोत्तमेन\nसख्या प्रियेण सुहृदा हृदयेन शून्य: ।\nअध्वन्युरुक्रमपरिग्रहमङ्ग रक्षन्\nगोपैरसद्भ‍िरबलेव विनिर्जितोऽस्मि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "21",
    "verse": "tad vai dhanus ta iṣavaḥ sa ratho hayās te\nso 'haṁ rathī nṛpatayo yata ānamanti\nsarvaṁ kṣaṇena tad abhūd asad īśa-riktaṁ\nbhasman hutaṁ kuhaka-rāddham ivoptam ūṣyām",
    "devanagari": "तद्वै धनुस्त इषव: स रथो हयास्ते\nसोऽहं रथी नृपतयो यत आनमन्ति ।\nसर्वं क्षणेन तदभूदसदीशरिक्तं\nभस्मन्हुतं कुहकराद्धमिवोप्तमूष्याम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "22",
    "verse": "rājaṁs tvayānupṛṣṭānāṁ\nsuhṛdāṁ naḥ suhṛt-pure\nvipra-śāpa-vimūḍhānāṁ\nnighnatāṁ muṣṭibhir mithaḥ",
    "devanagari": "राजंस्त्वयानुपृष्टानां सुहृदां न: सुहृत्पुरे ।\nविप्रशापविमूढानां निघ्नतां मुष्टिभिर्मिथ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "23",
    "verse": "vāruṇīṁ madirāṁ pītvā\nmadonmathita-cetasām\najānatām ivānyonyaṁ\ncatuḥ-pañcāvaśeṣitāḥ",
    "devanagari": "वारुणीं मदिरां पीत्वा मदोन्मथितचेतसाम् ।\nअजानतामिवान्योन्यं चतु:पञ्चावशेषिता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "24",
    "verse": "prāyeṇaitad bhagavata\nīśvarasya viceṣṭitam\nmitho nighnanti bhūtāni\nbhāvayanti ca yan mithaḥ",
    "devanagari": "प्रायेणैतद् भगवत ईश्वरस्य विचेष्टितम् ।\nमिथो निघ्नन्ति भूतानि भावयन्ति च यन्मिथ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "25",
    "verse": "jalaukasāṁ jale yadvan\nmahānto 'danty aṇīyasaḥ\ndurbalān balino rājan\nmahānto balino mithaḥ",
    "devanagari": "जलौकसां जले यद्वन्महान्तोऽदन्त्यणीयस: ।\nदुर्बलान्बलिनो राजन्महान्तो बलिनो मिथ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "26",
    "verse": "evaṁ baliṣṭhair yadubhir\nmahadbhir itarān vibhuḥ\nyadūn yadubhir anyonyaṁ\nbhū-bhārān sañjahāra ha",
    "devanagari": "एवं बलिष्ठैर्यदुभिर्महद्भ‍िरितरान् विभु: ।\nयदून्यदुभिरन्योन्यं भूभारान् सञ्जहार ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "27",
    "verse": "deśa-kālārtha-yuktāni\nhṛt-tāpopaśamāni ca\nharanti smarataś cittaṁ\ngovindābhihitāni me",
    "devanagari": "देशकालार्थयुक्तानि हृत्तापोपशमानि च ।\nहरन्ति स्मरतश्चित्तं गोविन्दाभिहितानि मे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "28",
    "verse": "sūta uvāca\nevaṁ cintayato jiṣṇoḥ\nkṛṣṇa-pāda-saroruham\nsauhārdenātigāḍhena\nśāntāsīd vimalā matiḥ",
    "devanagari": "सूत उवाच\nएवं चिन्तयतो जिष्णो: कृष्णपादसरोरुहम् ।\nसौहार्देनातिगाढेन शान्तासीद्विमला मति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "29",
    "verse": "vāsudevāṅghry-anudhyāna-\nparibṛṁhita-raṁhasā\nbhaktyā nirmathitāśeṣa-\nkaṣāya-dhiṣaṇo 'rjunaḥ",
    "devanagari": "वासुदेवाङ्घ्र्यनुध्यानपरिबृंहितरंहसा ।\nभक्त्या निर्मथिताशेषकषायधिषणोऽर्जुन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "30",
    "verse": "gītaṁ bhagavatā jñānaṁ\nyat tat saṅgrāma-mūrdhani\nkāla-karma-tamo-ruddhaṁ\npunar adhyagamat prabhuḥ",
    "devanagari": "गीतं भगवता ज्ञानं यत् तत् सङ्ग्राममूर्धनि ।\nकालकर्मतमोरुद्धं पुनरध्यगमत् प्रभु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "31",
    "verse": "viśoko brahma-sampattyā\nsañchinna-dvaita-saṁśayaḥ\nlīna-prakṛti-nairguṇyād\naliṅgatvād asambhavaḥ",
    "devanagari": "विशोको ब्रह्मसम्पत्त्या सञ्छिन्नद्वैतसंशय: ।\nलीनप्रकृतिनैर्गुण्यादलिङ्गत्वादसम्भव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "32",
    "verse": "niśamya bhagavan-mārgaṁ\nsaṁsthāṁ yadu-kulasya ca\nsvaḥ-pathāya matiṁ cakre\nnibhṛtātmā yudhiṣṭhiraḥ",
    "devanagari": "निशम्य भगवन्मार्गं संस्थां यदुकुलस्य च ।\nस्व:पथाय मतिं चक्रे निभृतात्मा युधिष्ठिर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "33",
    "verse": "pṛthāpy anuśrutya dhanañjayoditaṁ\nnāśaṁ yadūnāṁ bhagavad-gatiṁ ca tām\nekānta-bhaktyā bhagavaty adhokṣaje\nniveśitātmopararāma saṁsṛteḥ",
    "devanagari": "पृथाप्यनुश्रुत्य धनञ्जयोदितं\nनाशं यदूनां भगवद्गतिं च ताम् ।\nएकान्तभक्त्या भगवत्यधोक्षजे\nनिवेशितात्मोपरराम संसृते: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "34",
    "verse": "yayāharad bhuvo bhāraṁ\ntāṁ tanuṁ vijahāv ajaḥ\nkaṇṭakaṁ kaṇṭakeneva\ndvayaṁ cāpīśituḥ samam",
    "devanagari": "ययाहरद् भुवो भारं तां तनुं विजहावज: ।\nकण्टकं कण्टकेनेव द्वयं चापीशितु: समम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "35",
    "verse": "yathā matsyādi-rūpāṇi\ndhatte jahyād yathā naṭaḥ\nbhū-bhāraḥ kṣapito yena\njahau tac ca kalevaram",
    "devanagari": "यथा मत्स्यादिरूपाणि धत्ते जह्याद् यथा नट: ।\nभूभार: क्षपितो येन जहौ तच्च कलेवरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "36",
    "verse": "yadā mukundo bhagavān imāṁ mahīṁ\njahau sva-tanvā śravaṇīya-sat-kathaḥ\ntadāhar evāpratibuddha-cetasām\nabhadra-hetuḥ kalir anvavartata",
    "devanagari": "यदा मुकुन्दो भगवानिमां महीं\nजहौ स्वतन्वा श्रवणीयसत्कथ: ।\nतदाहरेवाप्रतिबुद्धचेतसा-\nमभद्रहेतु: कलिरन्ववर्तत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "37",
    "verse": "yudhiṣṭhiras tat parisarpaṇaṁ budhaḥ\npure ca rāṣṭre ca gṛhe tathātmani\nvibhāvya lobhānṛta-jihma-hiṁsanādy-\nadharma-cakraṁ gamanāya paryadhāt",
    "devanagari": "युधिष्ठिरस्तत्परिसर्पणं बुध:\nपुरे च राष्ट्रे च गृहे तथात्मनि ।\nविभाव्य लोभानृतजिह्महिंसना-\nद्यधर्मचक्रं गमनाय पर्यधात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "38",
    "verse": "sva-rāṭ pautraṁ vinayinam\nātmanaḥ susamaṁ guṇaiḥ\ntoya-nīvyāḥ patiṁ bhūmer\nabhyaṣiñcad gajāhvaye",
    "devanagari": "स्वराट् पौत्रं विनयिनमात्मन: सुसमं गुणै: ।\nतोयनीव्या: पतिं भूमेरभ्यषिञ्चद्गजाह्वये ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "39",
    "verse": "mathurāyāṁ tathā vajraṁ\nśūrasena-patiṁ tataḥ\nprājāpatyāṁ nirūpyeṣṭim\nagnīn apibad īśvaraḥ",
    "devanagari": "मथुरायां तथा वज्रं शूरसेनपतिं तत: ।\nप्राजापत्यां निरूप्येष्टिमग्नीनपिबदीश्वर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "40",
    "verse": "visṛjya tatra tat sarvaṁ\ndukūla-valayādikam\nnirmamo nirahaṅkāraḥ\nsañchinnāśeṣa-bandhanaḥ",
    "devanagari": "विसृज्य तत्र तत् सर्वं दुकूलवलयादिकम् ।\nनिर्ममो निरहङ्कार: सञ्छिन्नाशेषबन्धन: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "41",
    "verse": "vācaṁ juhāva manasi\ntat prāṇa itare ca tam\nmṛtyāv apānaṁ sotsargaṁ\ntaṁ pañcatve hy ajohavīt",
    "devanagari": "वाचं जुहाव मनसि तत्प्राण इतरे च तम् ।\nमृत्यावपानं सोत्सर्गं तं पञ्चत्वे ह्यजोहवीत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "42",
    "verse": "tritve hutvā ca pañcatvaṁ\ntac caikatve 'juhon muniḥ\nsarvam ātmany ajuhavīd\nbrahmaṇy ātmānam avyaye",
    "devanagari": "त्रित्वे हुत्वा च पञ्चत्वं तच्चैकत्वेऽजुहोन्मुनि: ।\nसर्वमात्मन्यजुहवीद्ब्रह्मण्यात्मानमव्यये ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "43",
    "verse": "cīra-vāsā nirāhāro\nbaddha-vāṅ mukta-mūrdhajaḥ\ndarśayann ātmano rūpaṁ\njaḍonmatta-piśācavat\nanavekṣamāṇo niragād\naśṛṇvan badhiro yathā",
    "devanagari": "चीरवासा निराहारो बद्धवाङ्‍मुक्तमूर्धज: ।\nदर्शयन्नात्मनो रूपं जडोन्मत्तपिशाचवत् ।\nअनवेक्षमाणो निरगादश‍ृण्वन्बधिरो यथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "44",
    "verse": "udīcīṁ praviveśāśāṁ\ngata-pūrvāṁ mahātmabhiḥ\nhṛdi brahma paraṁ dhyāyan\nnāvarteta yato gataḥ",
    "devanagari": "उदीचीं प्रविवेशाशां गतपूर्वां महात्मभि: ।\nहृदि ब्रह्म परं ध्यायन्नावर्तेत यतो गत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "45",
    "verse": "sarve tam anunirjagmur\nbhrātaraḥ kṛta-niścayāḥ\nkalinādharma-mitreṇa\ndṛṣṭvā spṛṣṭāḥ prajā bhuvi",
    "devanagari": "सर्वे तमनुनिर्जग्मुर्भ्रातर: कृतनिश्चया: ।\nकलिनाधर्ममित्रेण द‍ृष्ट्वा स्पृष्टा: प्रजा भुवि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "46",
    "verse": "te sādhu-kṛta-sarvārthā\njñātvātyantikam ātmanaḥ\nmanasā dhārayām āsur\nvaikuṇṭha-caraṇāmbujam",
    "devanagari": "ते साधुकृतसर्वार्था ज्ञात्वात्यन्तिकमात्मन: ।\nमनसा धारयामासुर्वैकुण्ठचरणाम्बुजम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "47",
    "verse": "tad-dhyānodriktayā bhaktyā\nviśuddha-dhiṣaṇāḥ pare\ntasmin nārāyaṇa-pade\nekānta-matayo gatim",
    "devanagari": "तद्ध्यानोद्रिक्तया भक्त्या विशुद्धधिषणा: परे ।\nतस्मिन् नारायणपदे एकान्तमतयो गतिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "48",
    "verse": "avāpur duravāpāṁ te\nasadbhir viṣayātmabhiḥ\nvidhūta-kalmaṣā sthānaṁ\nvirajenātmanaiva hi",
    "devanagari": "अवापुर्दुरवापां ते असद्भ‍िर्विषयात्मभि: ।\nविधूतकल्मषा स्थानं विरजेनात्मनैव हि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "49",
    "verse": "viduro 'pi parityajya\nprabhāse deham ātmanaḥ\nkṛṣṇāveśena tac-cittaḥ\npitṛbhiḥ sva-kṣayaṁ yayau",
    "devanagari": "विदुरोऽपि परित्यज्य प्रभासे देहमात्मन: ।\nकृष्णावेशेन तच्चित्त: पितृभि: स्वक्षयं ययौ ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "50",
    "verse": "draupadī ca tadājñāya\npatīnām anapekṣatām\nvāsudeve bhagavati\nhy ekānta-matir āpa tam",
    "devanagari": "द्रौपदी च तदाज्ञाय पतीनामनपेक्षताम् ।\nवासुदेवे भगवति ह्येकान्तमतिराप तम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "15",
    "text": "51",
    "verse": "yaḥ śraddhayaitad bhagavat-priyāṇāṁ\npāṇḍoḥ sutānām iti samprayāṇam\nśṛṇoty alaṁ svastyayanaṁ pavitraṁ\nlabdhvā harau bhaktim upaiti siddhim",
    "devanagari": "य: श्रद्धयैतद् भगवत्प्रियाणां\nपाण्डो: सुतानामिति सम्प्रयाणम् ।\nश‍ृणोत्यलं स्वस्त्ययनं पवित्रं\nलब्ध्वा हरौ भक्तिमुपैति सिद्धिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "1",
    "verse": "sūta uvāca\ntataḥ parīkṣid dvija-varya-śikṣayā\nmahīṁ mahā-bhāgavataḥ śaśāsa ha\nyathā hi sūtyām abhijāta-kovidāḥ\nsamādiśan vipra mahad-guṇas tathā",
    "devanagari": "सूत उवाच\nतत: परीक्षिद् द्विजवर्यशिक्षया\nमहीं महाभागवत: शशास ह ।\nयथा हि सूत्यामभिजातकोविदा:\nसमादिशन् विप्र महद्गुणस्तथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "2",
    "verse": "sa uttarasya tanayām\nupayema irāvatīm\njanamejayādīṁś caturas\ntasyām utpādayat sutān",
    "devanagari": "स उत्तरस्य तनयामुपयेम इरावतीम् ।\nजनमेजयादींश्चतुरस्तस्यामुत्पादयत् सुतान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "3",
    "verse": "ājahārāśva-medhāṁs trīn\ngaṅgāyāṁ bhūri-dakṣiṇān\nśāradvataṁ guruṁ kṛtvā\ndevā yatrākṣi-gocarāḥ",
    "devanagari": "आजहाराश्वमेधांस्त्रीन् गङ्गायां भूरिदक्षिणान् ।\nशारद्वतं गुरुं कृत्वा देवा यत्राक्षिगोचरा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "4",
    "verse": "nijagrāhaujasā vīraḥ\nkaliṁ digvijaye kvacit\nnṛpa-liṅga-dharaṁ śūdraṁ\nghnantaṁ go-mithunaṁ padā",
    "devanagari": "निजग्राहौजसा वीर: कलिं दिग्विजये क्‍वचित् ।\nनृपलिङ्गधरं शूद्रं घ्नन्तं गोमिथुनं पदा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "5",
    "verse": "śaunaka uvāca\nkasya hetor nijagrāha\nkaliṁ digvijaye nṛpaḥ\nnṛdeva-cihna-dhṛk śūdra-\nko 'sau gāṁ yaḥ padāhanat\ntat kathyatāṁ mahā-bhāga\nyadi kṛṣṇa-kathāśrayam",
    "devanagari": "शौनक उवाच\nकस्य हेतोर्निजग्राह कलिं दिग्विजये नृप: ।\nनृदेवचिह्नधृक्‍शूद्रकोऽसौ गां य: पदाहनत् ।\nतत्कथ्यतां महाभाग यदि कृष्णकथाश्रयम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "6",
    "verse": "athavāsya padāmbhoja-\nmakaranda-lihāṁ satām\nkim anyair asad-ālāpair\nāyuṣo yad asad-vyayaḥ",
    "devanagari": "अथवास्य पदाम्भोजमकरन्दलिहां सताम् ।\nकिमन्यैरसदालापैरायुषो यदसद्व्यय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "7",
    "verse": "kṣudrāyuṣāṁ nṛṇām aṅga\nmartyānām ṛtam icchatām\nihopahūto bhagavān\nmṛtyuḥ śāmitra-karmaṇi",
    "devanagari": "क्षुद्रायुषां नृणामङ्ग मर्त्यानामृतमिच्छताम् ।\nइहोपहूतो भगवान्मृत्यु: शामित्रकर्मणि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "8",
    "verse": "na kaścin mriyate tāvad\nyāvad āsta ihāntakaḥ\netad-arthaṁ hi bhagavān\nāhūtaḥ paramarṣibhiḥ\naho nṛ-loke pīyeta\nhari-līlāmṛtaṁ vacaḥ",
    "devanagari": "न कश्चिन्म्रियते तावद् यावदास्त इहान्तक: ।\nएतदर्थं हि भगवानाहूत: परमर्षिभि: ।\nअहो नृलोके पीयेत हरिलीलामृतं वच: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "9",
    "verse": "mandasya manda-prajñasya\nvayo mandāyuṣaś ca vai\nnidrayā hriyate naktaṁ\ndivā ca vyartha-karmabhiḥ",
    "devanagari": "मन्दस्य मन्दप्रज्ञस्य वयो मन्दायुषश्च वै ।\nनिद्रया ह्रियते नक्तं दिवा च व्यर्थकर्मभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "10",
    "verse": "sūta uvāca\nyadā parīkṣit kuru-jāṅgale 'vasat\nkaliṁ praviṣṭaṁ nija-cakravartite\nniśamya vārtām anatipriyāṁ tataḥ\nśarāsanaṁ saṁyuga-śauṇḍir ādade",
    "devanagari": "सूत उवाच\nयदा परीक्षित् कुरुजाङ्गलेऽवसत्\nकलिं प्रविष्टं निजचक्रवर्तिते ।\nनिशम्य वार्तामनतिप्रियां तत:\nशरासनं संयुगशौण्डिराददे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "11",
    "verse": "svalaṅkṛtaṁ śyāma-turaṅga-yojitaṁ\nrathaṁ mṛgendra-dhvajam āśritaḥ purāt\nvṛto rathāśva-dvipa-patti-yuktayā\nsva-senayā digvijayāya nirgataḥ",
    "devanagari": "स्वलङ्‍कृतं श्यामतुरङ्गयोजितं\nरथं मृगेन्द्रध्वजमाश्रित: पुरात् ।\nवृतो रथाश्वद्विपपत्तियुक्तया\nस्वसेनया दिग्विजयाय निर्गत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "12",
    "verse": "bhadrāśvaṁ ketumālaṁ ca\nbhārataṁ cottarān kurūn\nkimpuruṣādīni varṣāṇi\nvijitya jagṛhe balim",
    "devanagari": "भद्राश्वं केतुमालं च भारतं चोत्तरान् कुरून् ।\nकिम्पुरुषादीनि वर्षाणि विजित्य जगृहे बलिम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "13",
    "verse": "tatra tatropaśṛṇvānaḥ\nsva-pūrveṣāṁ mahātmanām\npragīyamāṇaṁ ca yaśaḥ\nkṛṣṇa-māhātmya-sūcakam",
    "devanagari": "तत्र तत्रोपश‍ृण्वान: स्वपूर्वेषां महात्मनाम् ।\nप्रगीयमाणं च यश: कृष्णमाहात्म्यसूचकम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "14",
    "verse": "ātmānaṁ ca paritrātam\naśvatthāmno 'stra-tejasaḥ\nsnehaṁ ca vṛṣṇi-pārthānāṁ\nteṣāṁ bhaktiṁ ca keśave",
    "devanagari": "आत्मानं च परित्रातमश्वत्थाम्नोऽस्त्रतेजस: ।\nस्‍नेहं च वृष्णिपार्थानां तेषां भक्तिं च केशवे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "15",
    "verse": "tebhyaḥ parama-santuṣṭaḥ\nprīty-ujjṛmbhita-locanaḥ\nmahā-dhanāni vāsāṁsi\ndadau hārān mahā-manāḥ",
    "devanagari": "तेभ्य: परमसन्तुष्ट: प्रीत्युज्जृम्भितलोचन: ।\nमहाधनानि वासांसि ददौ हारान् महामना: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "16",
    "verse": "sārathya-pāraṣada-sevana-sakhya-dautya-\nvīrāsanānugamana-stavana-praṇāmān\nsnigdheṣu pāṇḍuṣu jagat-praṇatiṁ ca viṣṇor\nbhaktiṁ karoti nṛ-patiś caraṇāravinde",
    "devanagari": "सारथ्यपारषदसेवनसख्यदौत्य-\nवीरासनानुगमनस्तवनप्रणामान् ।\nस्‍निग्धेषु पाण्डुषु जगत्प्रणतिं च विष्णो-\nर्भक्तिं करोति नृपतिश्चरणारविन्दे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "17",
    "verse": "tasyaivaṁ vartamānasya\npūrveṣāṁ vṛttim anvaham\nnātidūre kilāścaryaṁ\nyad āsīt tan nibodha me",
    "devanagari": "तस्यैवं वर्तमानस्य पूर्वेषां वृत्तिमन्वहम् ।\nनातिदूरे किलाश्चर्यं यदासीत् तन्निबोध मे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "18",
    "verse": "dharmaḥ padaikena caran\nvicchāyām upalabhya gām\npṛcchati smāśru-vadanāṁ\nvivatsām iva mātaram",
    "devanagari": "धर्म: पदैकेन चरन् विच्छायामुपलभ्य गाम् ।\nपृच्छति स्माश्रुवदनां विवत्सामिव मातरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "19",
    "verse": "dharma uvāca\nkaccid bhadre 'nāmayam ātmanas te\nvicchāyāsi mlāyateṣan mukhena\nālakṣaye bhavatīm antar-ādhiṁ\ndūre bandhuṁ śocasi kañcanāmba",
    "devanagari": "धर्म उवाच\nकच्चिद्भद्रेऽनामयमात्मनस्ते\nविच्छायासि म्‍लायतेषन्मुखेन ।\nआलक्षये भवतीमन्तराधिं\nदूरे बन्धुं शोचसि कञ्चनाम्ब ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "20",
    "verse": "pādair nyūnaṁ śocasi maika-pādam\nātmānaṁ vā vṛṣalair bhokṣyamāṇam\nāho surādīn hṛta-yajña-bhāgān\nprajā uta svin maghavaty avarṣati",
    "devanagari": "पादैर्न्यूनं शोचसि मैकपाद-\nमात्मानं वा वृषलैर्भोक्ष्यमाणम् ।\nआहो सुरादीन् हृतयज्ञभागान्\nप्रजा उत स्विन्मघवत्यवर्षति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "21",
    "verse": "arakṣyamāṇāḥ striya urvi bālān\nśocasy atho puruṣādair ivārtān\nvācaṁ devīṁ brahma-kule kukarmaṇy\nabrahmaṇye rāja-kule kulāgryān",
    "devanagari": "अरक्ष्यमाणा: स्त्रिय उर्वि बालान्\nशोचस्यथो पुरुषादैरिवार्तान् ।\nवाचं देवीं ब्रह्मकुले कुकर्म-\nण्यब्रह्मण्ये राजकुले कुलाग्रयान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "22",
    "verse": "kiṁ kṣatra-bandhūn kalinopasṛṣṭān\nrāṣṭrāṇi vā tair avaropitāni\nitas tato vāśana-pāna-vāsaḥ-\nsnāna-vyavāyonmukha-jīva-lokam",
    "devanagari": "किं क्षत्रबन्धून् कलिनोपसृष्टान्\nराष्ट्राणि वा तैरवरोपितानि ।\nइतस्ततो वाशनपानवास:\nस्‍नानव्यवायोन्मुखजीवलोकम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "23",
    "verse": "yadvāmba te bhūri-bharāvatāra-\nkṛtāvatārasya harer dharitri\nantarhitasya smaratī visṛṣṭā\nkarmāṇi nirvāṇa-vilambitāni",
    "devanagari": "यद्वाम्ब ते भूरिभरावतार\nकृतावतारस्य हरेर्धरित्रि ।\nअन्तर्हितस्य स्मरती विसृष्टा\nकर्माणि निर्वाणविलम्बितानि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "24",
    "verse": "idaṁ mamācakṣva tavādhi-mūlaṁ\nvasundhare yena vikarśitāsi\nkālena vā te balināṁ balīyasā\nsurārcitaṁ kiṁ hṛtam amba saubhagam",
    "devanagari": "इदं ममाचक्ष्व तवाधिमूलं\nवसुन्धरे येन विकर्शितासि ।\nकालेन वा ते बलिनां बलीयसा सुरार्चितं\nकिं हृतमम्ब सौभगम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "25",
    "verse": "dharaṇy uvāca\nbhavān hi veda tat sarvaṁ\nyan māṁ dharmānupṛcchasi\ncaturbhir vartase yena\npādair loka-sukhāvahaiḥ",
    "devanagari": "धरण्युवाच\nभवान् हि वेद तत् सर्वं यन्मां धर्मानुपृच्छसि ।\nचतुर्भिर्वर्तसे येन पादैर् लोक-सुखावहैः ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "26",
    "verse": "satyaṁ śaucaṁ dayā kṣāntis\ntyāgaḥ santoṣa ārjavam\nśamo damas tapaḥ sāmyaṁ\ntitikṣoparatiḥ śrutam",
    "devanagari": "सत्यं शौचं दया क्षान्तिस्त्याग: सन्तोष आर्जवम् ।\nशमो दमस्तप: साम्यं तितिक्षोपरति: श्रुतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "27",
    "verse": "jñānaṁ viraktir aiśvaryaṁ\nśauryaṁ tejo balaṁ smṛtiḥ\nsvātantryaṁ kauśalaṁ kāntir\ndhairyaṁ mārdavam eva ca",
    "devanagari": "ज्ञानं विरक्तिरैश्वर्यं शौर्यं तेजो बलं स्मृति: ।\nस्वातन्त्र्यं कौशलं कान्तिर्धैर्यं मार्दवमेव च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "28",
    "verse": "prāgalbhyaṁ praśrayaḥ śīlaṁ\nsaha ojo balaṁ bhagaḥ\ngāmbhīryaṁ sthairyam āstikyaṁ\nkīrtir māno 'nahaṅkṛtiḥ",
    "devanagari": "प्रागल्भ्यं प्रश्रय: शीलं सह ओजो बलं भग: ।\nगाम्भीर्यं स्थैर्यमास्तिक्यं कीर्तिर्मानोऽनहङ्‍कृति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "29",
    "verse": "ete cānye ca bhagavan\nnityā yatra mahā-guṇāḥ\nprārthyā mahattvam icchadbhir\nna viyanti sma karhicit",
    "devanagari": "एते चान्ये च भगवन्नित्या यत्र महागुणा: ।\nप्रार्थ्या महत्त्वमिच्छद्भ‍िर्न वियन्ति स्म कर्हिचित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "30",
    "verse": "tenāhaṁ guṇa-pātreṇa\nśrī-nivāsena sāmpratam\nśocāmi rahitaṁ lokaṁ\npāpmanā kalinekṣitam",
    "devanagari": "तेनाहं गुणपात्रेण श्रीनिवासेन साम्प्रतम् ।\nशोचामि रहितं लोकं पाप्मना कलिनेक्षितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "31",
    "verse": "ātmānaṁ cānuśocāmi\nbhavantaṁ cāmarottamam\ndevān pitṟn ṛṣīn sādhūn\nsarvān varṇāṁs tathāśramān",
    "devanagari": "आत्मानं चानुशोचामि भवन्तं चामरोत्तमम् ।\nदेवान् पितृनृषीन् साधून् सर्वान् वर्णांस्तथाश्रमान् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "32",
    "verse": "brahmādayo bahu-tithaṁ yad-apāṅga-mokṣa-\nkāmās tapaḥ samacaran bhagavat-prapannāḥ\nsā śrīḥ sva-vāsam aravinda-vanaṁ vihāya\nyat-pāda-saubhagam alaṁ bhajate 'nuraktā",
    "devanagari": "ब्रह्मादयो बहुतिथं यदपाङ्गमोक्ष-\nकामास्तप: समचरन् भगवत्प्रपन्ना: ।\nसा श्री: स्ववासमरविन्दवनं विहाय\nयत्पादसौभगमलं भजतेऽनुरक्ता ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "33",
    "verse": "tasyāham abja-kuliśāṅkuśa-ketu-ketaiḥ\nśrīmat-padair bhagavataḥ samalaṅkṛtāṅgī\ntrīn atyaroca upalabhya tato vibhūtiṁ\nlokān sa māṁ vyasṛjad utsmayatīṁ tad-ante",
    "devanagari": "तस्याहमब्जकुलिशाङ्‍कुशकेतुकेतै:\nश्रीमत्पदैर्भगवत: समलङ्‍कृताङ्गी ।\nत्रीनत्यरोच उपलभ्य ततो विभूतिं\nलोकान् स मां व्यसृजदुत्स्मयतीं तदन्ते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "34",
    "verse": "yo vai mamātibharam āsura-vaṁśa-rājñām\nakṣauhiṇī-śatam apānudad ātma-tantraḥ\ntvāṁ duḥstham ūna-padam ātmani pauruṣeṇa\nsampādayan yaduṣu ramyam abibhrad aṅgam",
    "devanagari": "यो वै ममातिभरमासुरवंशराज्ञा-\nमक्षौहिणीशतमपानुददात्मतन्त्र: ।\nत्वां दु:स्थमूनपदमात्मनि पौरुषेण\nसम्पादयन् यदुषु रम्यमबिभ्रदङ्गम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "35",
    "verse": "kā vā saheta virahaṁ puruṣottamasya\npremāvaloka-rucira-smita-valgu-jalpaiḥ\nsthairyaṁ samānam aharan madhu-māninīnāṁ\nromotsavo mama yad-aṅghri-viṭaṅkitāyāḥ",
    "devanagari": "का वा सहेत विरहं\nपुरुषोत्तमस्य प्रेमावलोकरुचिरस्मितवल्गुजल्पै: ।\nस्थैर्यं समानमहरन्मधुमानिनीनां\nरोमोत्सवो मम यदङ्‌घ्रिविटङ्किताया: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "16",
    "text": "36",
    "verse": "tayor evaṁ kathayatoḥ\npṛthivī-dharmayos tadā\nparīkṣin nāma rājarṣiḥ\nprāptaḥ prācīṁ sarasvatīm",
    "devanagari": "तयोरेवं कथयतो: पृथिवीधर्मयोस्तदा ।\nपरीक्षिन्नाम राजर्षि: प्राप्त: प्राचीं सरस्वतीम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "1",
    "verse": "sūta uvāca\ntatra go-mithunaṁ rājā\nhanyamānam anāthavat\ndaṇḍa-hastaṁ ca vṛṣalaṁ\ndadṛśe nṛpa-lāñchanam",
    "devanagari": "सूत उवाच\nतत्र गोमिथुनं राजा हन्यमानमनाथवत् ।\nदण्डहस्तं च वृषलं दद‍ृशे नृपलाञ्छनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "2",
    "verse": "vṛṣaṁ mṛṇāla-dhavalaṁ\nmehantam iva bibhyatam\nvepamānaṁ padaikena\nsīdantaṁ śūdra-tāḍitam",
    "devanagari": "वृषं मृणालधवलं मेहन्तमिव बिभ्यतम् ।\nवेपमानं पदैकेन सीदन्तं शूद्रताडितम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "3",
    "verse": "gāṁ ca dharma-dughāṁ dīnāṁ\nbhṛśaṁ śūdra-padāhatām\nvivatsām āśru-vadanāṁ\nkṣāmāṁ yavasam icchatīm",
    "devanagari": "गां च धर्मदुघां दीनां भृशं शूद्रपदाहताम् ।\nविवत्सामाश्रुवदनां क्षामां यवसमिच्छतीम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "4",
    "verse": "papraccha ratham ārūḍhaḥ\nkārtasvara-paricchadam\nmegha-gambhīrayā vācā\nsamāropita-kārmukaḥ",
    "devanagari": "पप्रच्छ रथमारूढ: कार्तस्वरपरिच्छदम् ।\nमेघगम्भीरया वाचा समारोपितकार्मुक: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "5",
    "verse": "kas tvaṁ mac-charaṇe loke\nbalād dhaṁsy abalān balī\nnara-devo 'si veṣeṇa\nnaṭavat karmaṇādvijaḥ",
    "devanagari": "कस्त्वं मच्छरणे लोके बलाद्धंस्यबलान् बली ।\nनरदेवोऽसि वेशेण नटवत्कर्मणाद्विज: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "6",
    "verse": "yas tvaṁ kṛṣṇe gate dūraṁ\nsaha-gāṇḍīva-dhanvanā\nśocyo 'sy aśocyān rahasi\npraharan vadham arhasi",
    "devanagari": "यस्त्वं कृष्णे गते दूरं सहगाण्डीवधन्वना ।\nशोच्योऽस्यशोच्यान् रहसि प्रहरन् वधमर्हसि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "7",
    "verse": "tvaṁ vā mṛṇāla-dhavalaḥ\npādair nyūnaḥ padā caran\nvṛṣa-rūpeṇa kiṁ kaścid\ndevo naḥ parikhedayan",
    "devanagari": "त्वं वा मृणालधवल: पादैर्न्यून: पदा चरन् ।\nवृषरूपेण किं कश्चिद् देवो न: परिखेदयन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "8",
    "verse": "na jātu kauravendrāṇāṁ\ndordaṇḍa-parirambhite\nbhū-tale 'nupatanty asmin\nvinā te prāṇināṁ śucaḥ",
    "devanagari": "न जातु कौरवेन्द्राणां दोर्दण्डपरिरम्भिते ।\nभूतलेऽनुपतन्त्यस्मिन् विना ते प्राणिनां शुच: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "9",
    "verse": "mā saurabheyātra śuco\nvyetu te vṛṣalād bhayam\nmā rodīr amba bhadraṁ te\nkhalānāṁ mayi śāstari",
    "devanagari": "मा सौरभेयात्र शुचो व्येतु ते वृषलाद् भयम् ।\nमा रोदीरम्ब भद्रं ते खलानां मयि शास्तरि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "10",
    "verse": "yasya rāṣṭre prajāḥ sarvās\ntrasyante sādhvy asādhubhiḥ\ntasya mattasya naśyanti\nkīrtir āyur bhago gatiḥ",
    "devanagari": "यस्य राष्ट्रे प्रजा: सर्वास्त्रस्यन्ते साध्व्यसाधुभि: ।\nतस्य मत्तस्य नश्यन्ति कीर्तिरायुर्भगो गति: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "11",
    "verse": "eṣa rājñāṁ paro dharmo\nhy ārtānām ārti-nigrahaḥ\nata enaṁ vadhiṣyāmi\nbhūta-druham asattamam",
    "devanagari": "एष राज्ञां परो धर्मो ह्यार्तानामार्तिनिग्रह: ।\nअत एनं वधिष्यामि भूतद्रुहमसत्तमम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "12",
    "verse": "ko 'vṛścat tava pādāṁs trīn\nsaurabheya catuṣ-pada\nmā bhūvaṁs tvādṛśā rāṣṭre\nrājñāṁ kṛṣṇānuvartinām",
    "devanagari": "कोऽवृश्चत् तव पादांस्त्रीन् सौरभेय चतुष्पद ।\nमा भूवंस्त्वाद‍ृशा राष्ट्रे राज्ञां कृष्णानुवर्तिनाम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "13",
    "verse": "ākhyāhi vṛṣa bhadraṁ vaḥ\nsādhūnām akṛtāgasām\nātma-vairūpya-kartāraṁ\npārthānāṁ kīrti-dūṣaṇam",
    "devanagari": "आख्याहि वृष भद्रं व: साधूनामकृतागसाम् ।\nआत्मवैरूप्यकर्तारं पार्थानां कीर्तिदूषणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "14",
    "verse": "jane 'nāgasy aghaṁ yuñjan\nsarvato 'sya ca mad-bhayam\nsādhūnāṁ bhadram eva syād\nasādhu-damane kṛte",
    "devanagari": "जनेऽनागस्यघं युञ्जन् सर्वतोऽस्य च मद्भयम् ।\nसाधूनां भद्रमेव स्यादसाधुदमने कृते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "15",
    "verse": "anāgaḥsv iha bhūteṣu\nya āgas-kṛn niraṅkuśaḥ\nāhartāsmi bhujaṁ sākṣād\namartyasyāpi sāṅgadam",
    "devanagari": "अनाग:स्विह भूतेषु य आगस्कृन्निरङ्कुश: ।\nआहर्तास्मि भुजं साक्षादमर्त्यस्यापि साङ्गदम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "16",
    "verse": "rājño hi paramo dharmaḥ\nsva-dharma-sthānupālanam\nśāsato 'nyān yathā-śāstram\nanāpady utpathān iha",
    "devanagari": "राज्ञो हि परमो धर्म: स्वधर्मस्थानुपालनम् ।\nशासतोऽन्यान् यथाशास्त्रमनापद्युत्पथानिह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "17",
    "verse": "dharma uvāca\netad vaḥ pāṇḍaveyānāṁ\nyuktam ārtābhayaṁ vacaḥ\nyeṣāṁ guṇa-gaṇaiḥ kṛṣṇo\ndautyādau bhagavān kṛtaḥ",
    "devanagari": "धर्म उवाच\nएतद् व: पाण्डवेयानां युक्तमार्ताभयं वच: ।\nयेषां गुणगणै: कृष्णो दौत्यादौ भगवान् कृत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "18",
    "verse": "na vayaṁ kleśa-bījāni\nyataḥ syuḥ puruṣarṣabha\npuruṣaṁ taṁ vijānīmo\nvākya-bheda-vimohitāḥ",
    "devanagari": "न वयं क्लेशबीजानि यत: स्यु: पुरुषर्षभ ।\nपुरुषं तं विजानीमो वाक्यभेदविमोहिता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "19",
    "verse": "kecid vikalpa-vasanā\nāhur ātmānam ātmanaḥ\ndaivam anye 'pare karma\nsvabhāvam apare prabhum",
    "devanagari": "केचिद् विकल्पवसना आहुरात्मानमात्मन: ।\nदैवमन्येऽपरे कर्म स्वभावमपरे प्रभुम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "20",
    "verse": "apratarkyād anirdeśyād\niti keṣv api niścayaḥ\natrānurūpaṁ rājarṣe\nvimṛśa sva-manīṣayā",
    "devanagari": "अप्रतर्क्यादनिर्देश्यादिति केष्वपि निश्चय: ।\nअत्रानुरूपं राजर्षे विमृश स्वमनीषया ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "21",
    "verse": "sūta uvāca\nevaṁ dharme pravadati\nsa samrāḍ dvija-sattamāḥ\nsamāhitena manasā\nvikhedaḥ paryacaṣṭa tam",
    "devanagari": "सूत उवाच\nएवं धर्मे प्रवदति स सम्राड् द्विजसत्तमा: ।\nसमाहितेन मनसा विखेद: पर्यचष्ट तम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "22",
    "verse": "rājovāca\ndharmaṁ bravīṣi dharma-jña\ndharmo 'si vṛṣa-rūpa-dhṛk\nyad adharma-kṛtaḥ sthānaṁ\nsūcakasyāpi tad bhavet",
    "devanagari": "राजोवाच\nधर्मं ब्रवीषि धर्मज्ञ धर्मोऽसि वृषरूपधृक् ।\nयदधर्मकृत: स्थानं सूचकस्यापि तद्भवेत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "23",
    "verse": "athavā deva-māyāyā\nnūnaṁ gatir agocarā\ncetaso vacasaś cāpi\nbhūtānām iti niścayaḥ",
    "devanagari": "अथवा देवमायाया नूनं गतिरगोचरा ।\nचेतसो वचसश्चापि भूतानामिति निश्चय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "24",
    "verse": "tapaḥ śaucaṁ dayā satyam\niti pādāḥ kṛte kṛtāḥ\nadharmāṁśais trayo bhagnāḥ\nsmaya-saṅga-madais tava",
    "devanagari": "तप: शौचं दया सत्यमिति पादा: कृते कृता: ।\nअधर्मांशैस्त्रयो भग्ना: स्मयसङ्गमदैस्तव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "25",
    "verse": "idānīṁ dharma pādas te\nsatyaṁ nirvartayed yataḥ\ntaṁ jighṛkṣaty adharmo 'yam\nanṛtenaidhitaḥ kaliḥ",
    "devanagari": "इदानीं धर्म पादस्ते सत्यं निर्वर्तयेद्यत: ।\nतं जिघृक्षत्यधर्मोऽयमनृतेनैधित: कलि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "26",
    "verse": "iyaṁ ca bhūmir bhagavatā\nnyāsitoru-bharā satī\nśrīmadbhis tat-pada-nyāsaiḥ\nsarvataḥ kṛta-kautukā",
    "devanagari": "इयं च भूमिर्भगवता न्यासितोरुभरा सती ।\nश्रीमद्भ‍िस्तत्पदन्यासै: सर्वत: कृतकौतुका ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "27",
    "verse": "śocaty aśru-kalā sādhvī\ndurbhagevojjhitā satī\nabrahmaṇyā nṛpa-vyājāḥ\nśūdrā bhokṣyanti mām iti",
    "devanagari": "शोचत्यश्रुकला साध्वी दुर्भगेवोज्झिता सती ।\nअब्रह्मण्या नृपव्याजा: शूद्रा भोक्ष्यन्ति मामिति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "28",
    "verse": "iti dharmaṁ mahīṁ caiva\nsāntvayitvā mahā-rathaḥ\nniśātam ādade khaḍgaṁ\nkalaye 'dharma-hetave",
    "devanagari": "इति धर्मं महीं चैव सान्‍त्वयित्वा महारथ: ।\nनिशातमाददे खड्गं कलयेऽधर्महेतवे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "29",
    "verse": "taṁ jighāṁsum abhipretya\nvihāya nṛpa-lāñchanam\ntat-pāda-mūlaṁ śirasā\nsamagād bhaya-vihvalaḥ",
    "devanagari": "तं जिघांसुमभिप्रेत्य विहाय नृपलाञ्छनम् ।\nतत्पादमूलं शिरसा समगाद् भयविह्वल: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "30",
    "verse": "patitaṁ pādayor vīraḥ\nkṛpayā dīna-vatsalaḥ\nśaraṇyo nāvadhīc chlokya\nāha cedaṁ hasann iva",
    "devanagari": "पतितं पादयोर्वीर: कृपया\nदीनवत्सल: ।\nशरण्यो\nनावधीच्छ्‍लोक्य आह चेदं हसन्निव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "31",
    "verse": "rājovāca\nna te guḍākeśa-yaśo-dharāṇāṁ\nbaddhāñjaler vai bhayam asti kiñcit\nna vartitavyaṁ bhavatā kathañcana\nkṣetre madīye tvam adharma-bandhuḥ",
    "devanagari": "राजोवाच\nन ते गुडाकेशयशोधराणां\nबद्धाञ्जलेर्वै भयमस्ति किञ्चित् ।\nन वर्तितव्यं भवता कथञ्चन\nक्षेत्रे मदीये त्वमधर्मबन्धु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "32",
    "verse": "tvāṁ vartamānaṁ nara-deva-deheṣv\nanupravṛtto 'yam adharma-pūgaḥ\nlobho 'nṛtaṁ cauryam anāryam aṁho\njyeṣṭhā ca māyā kalahaś ca dambhaḥ",
    "devanagari": "त्वां वर्तमानं नरदेवदेहे-\nष्वनुप्रवृत्तोऽयमधर्मपूग: ।\nलोभोऽनृतं चौर्यमनार्यमंहो\nज्येष्ठा च माया कलहश्च दम्भ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "33",
    "verse": "na vartitavyaṁ tad adharma-bandho\ndharmeṇa satyena ca vartitavye\nbrahmāvarte yatra yajanti yajñair\nyajñeśvaraṁ yajña-vitāna-vijñāḥ",
    "devanagari": "न वर्तितव्यं तदधर्मबन्धो\nधर्मेण सत्येन च वर्तितव्ये ।\nब्रह्मावर्ते यत्र यजन्ति यज्ञै-\nर्यज्ञेश्वरं यज्ञवितानविज्ञा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "34",
    "verse": "yasmin harir bhagavān ijyamāna\nijyātma-mūrtir yajatāṁ śaṁ tanoti\nkāmān amoghān sthira-jaṅgamānām\nantar bahir vāyur ivaiṣa ātmā",
    "devanagari": "यस्मिन् हरिर्भगवानिज्यमान\nइज्यात्ममूर्तिर्यजतां शं तनोति ।\nकामानमोघान् स्थिरजङ्गमाना-\nमन्तर्बहिर्वायुरिवैष आत्मा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "35",
    "verse": "sūta uvāca\nparīkṣitaivam ādiṣṭaḥ\nsa kalir jāta-vepathuḥ\ntam udyatāsim āhedaṁ\ndaṇḍa-pāṇim ivodyatam",
    "devanagari": "सूत उवाच\nपरीक्षितैवमादिष्ट: स कलिर्जातवेपथु: ।\nतमुद्यतासिमाहेदं दण्डपाणिमिवोद्यतम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "36",
    "verse": "kalir uvāca\nyatra kva vātha vatsyāmi\nsārva-bhauma tavājñayā\nlakṣaye tatra tatrāpi\ntvām ātteṣu-śarāsanam",
    "devanagari": "कलिरुवाच\nयत्र क्‍व वाथ वत्स्यामि सार्वभौम तवाज्ञया ।\nलक्षये तत्र तत्रापि त्वामात्तेषुशरासनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "37",
    "verse": "tan me dharma-bhṛtāṁ śreṣṭha\nsthānaṁ nirdeṣṭum arhasi\nyatraiva niyato vatsya\nātiṣṭhaṁs te 'nuśāsanam",
    "devanagari": "तन्मे धर्मभृतां श्रेष्ठ स्थानं निर्देष्टुमर्हसि ।\nयत्रैव नियतो वत्स्य आतिष्ठंस्तेऽनुशासनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "38",
    "verse": "sūta uvāca\nabhyarthitas tadā tasmai\nsthānāni kalaye dadau\ndyūtaṁ pānaṁ striyaḥ sūnā\nyatrādharmaś catur-vidhaḥ",
    "devanagari": "सूत उवाच\nअभ्यर्थितस्तदा तस्मै स्थानानि कलये ददौ ।\nद्यूतं पानं स्त्रिय: सूना यत्राधर्मश्चतुर्विध: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "39",
    "verse": "punaś ca yācamānāya\njāta-rūpam adāt prabhuḥ\ntato 'nṛtaṁ madaṁ kāmaṁ\nrajo vairaṁ ca pañcamam",
    "devanagari": "पुनश्च याचमानाय जातरूपमदात्प्रभु: ।\nततोऽनृतं मदं कामं रजो वैरं च पञ्चमम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "40",
    "verse": "amūni pañca sthānāni\nhy adharma-prabhavaḥ kaliḥ\nauttareyeṇa dattāni\nnyavasat tan-nideśa-kṛt",
    "devanagari": "अमूनि पञ्च स्थानानि ह्यधर्मप्रभव: कलि: ।\nऔत्तरेयेण दत्तानि न्यवसत् तन्निदेशकृत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "41",
    "verse": "athaitāni na seveta\nbubhūṣuḥ puruṣaḥ kvacit\nviśeṣato dharma-śīlo\nrājā loka-patir guruḥ",
    "devanagari": "अथैतानि न सेवेत बुभूषु: पुरुष: क्‍वचित् ।\nविशेषतो धर्मशीलो राजा लोकपतिर्गुरु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "42",
    "verse": "vṛṣasya naṣṭāṁs trīn pādān\ntapaḥ śaucaṁ dayām iti\npratisandadha āśvāsya\nmahīṁ ca samavardhayat",
    "devanagari": "वृषस्य नष्टांस्त्रीन् पादान् तप: शौचं दयामिति ।\nप्रतिसन्दध आश्वास्य महीं च समवर्धयत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "43",
    "verse": "sa eṣa etarhy adhyāsta\nāsanaṁ pārthivocitam\npitāmahenopanyastaṁ\nrājñāraṇyaṁ vivikṣatā",
    "devanagari": "स एष एतर्ह्यध्यास्त आसनं पार्थिवोचितम् ।\nपितामहेनोपन्यस्तं राज्ञारण्यं विविक्षता ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "44",
    "verse": "āste 'dhunā sa rājarṣiḥ\nkauravendra-śriyollasan\ngajāhvaye mahā-bhāgaś\ncakravartī bṛhac-chravāḥ",
    "devanagari": "आस्तेऽधुना स राजर्षि: कौरवेन्द्रश्रियोल्लसन् ।\nगजाह्वये महाभागश्चक्रवर्ती बृहच्छ्रवा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "17",
    "text": "45",
    "verse": "ittham-bhūtānubhāvo 'yam\nabhimanyu-suto nṛpaḥ\nyasya pālayataḥ kṣauṇīṁ\nyūyaṁ satrāya dīkṣitāḥ",
    "devanagari": "इत्थम्भूतानुभावोऽयमभिमन्युसुतो नृप: ।\nयस्य पालयत: क्षौणीं यूयं सत्राय दीक्षिता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "1",
    "verse": "sūta uvāca\nyo vai drauṇy-astra-vipluṣṭo\nna mātur udare mṛtaḥ\nanugrahād bhagavataḥ\nkṛṣṇasyādbhuta-karmaṇaḥ",
    "devanagari": "सूत उवाच\nयो वै द्रौण्यस्त्रविप्लुष्टो न मातुरुदरे मृत: ।\nअनुग्रहाद् भगवत:\nकृष्णस्याद्भुतकर्मण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "2",
    "verse": "brahma-kopotthitād yas tu\ntakṣakāt prāṇa-viplavāt\nna sammumohorubhayād\nbhagavaty arpitāśayaḥ",
    "devanagari": "ब्रह्मकोपोत्थिताद् यस्तु तक्षकात्प्राणविप्लवात् ।\nन\nसम्मुमोहोरुभयाद् भगवत्यर्पिताशय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "3",
    "verse": "utsṛjya sarvataḥ saṅgaṁ\nvijñātājita-saṁsthitiḥ\nvaiyāsaker jahau śiṣyo\ngaṅgāyāṁ svaṁ kalevaram",
    "devanagari": "उत्सृज्य सर्वत: सङ्गं विज्ञाताजितसंस्थिति: ।\nवैयासकेर्जहौ शिष्यो गङ्गायां स्वं कलेवरम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "4",
    "verse": "nottamaśloka-vārtānāṁ\njuṣatāṁ tat-kathāmṛtam\nsyāt sambhramo 'nta-kāle 'pi\nsmaratāṁ tat-padāmbujam",
    "devanagari": "नोत्तमश्लोकवार्तानां जुषतां तत्कथामृतम् ।\nस्यात्सम्भ्रमोऽन्तकालेऽपि स्मरतां तत्पदाम्बुजम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "5",
    "verse": "tāvat kalir na prabhavet\npraviṣṭo 'pīha sarvataḥ\nyāvad īśo mahān urvyām\nābhimanyava eka-rāṭ",
    "devanagari": "तावत्कलिर्न प्रभवेत् प्रविष्टोऽपीह सर्वत: ।\nयावदीशो महानुर्व्यामाभिमन्यव\nएकराट् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "6",
    "verse": "yasminn ahani yarhy eva\nbhagavān utsasarja gām\ntadaivehānuvṛtto 'sāv\nadharma-prabhavaḥ kaliḥ",
    "devanagari": "यस्मिन्नहनि यर्ह्येव भगवानुत्ससर्ज गाम् ।\nतदैवेहानुवृत्तोऽसावधर्मप्रभव:\nकलि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "7",
    "verse": "nānudveṣṭi kaliṁ samrāṭ\nsāraṅga iva sāra-bhuk\nkuśalāny āśu siddhyanti\nnetarāṇi kṛtāni yat",
    "devanagari": "नानुद्वेष्टि कलिं सम्राट् सारङ्ग इव सारभुक् ।\nकुशलान्याशु सिद्ध्यन्ति नेतराणि कृतानि यत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "8",
    "verse": "kiṁ nu bāleṣu śūreṇa\nkalinā dhīra-bhīruṇā\napramattaḥ pramatteṣu\nyo vṛko nṛṣu vartate",
    "devanagari": "किं नु बालेषु शूरेण कलिना धीरभीरुणा ।\nअप्रमत्त: प्रमत्तेषु यो वृको नृषु वर्तते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "9",
    "verse": "upavarṇitam etad vaḥ\npuṇyaṁ pārīkṣitaṁ mayā\nvāsudeva-kathopetam\nākhyānaṁ yad apṛcchata",
    "devanagari": "उपवर्णितमेतद्व: पुण्यं पारीक्षितं मया ।\nवासुदेवकथोपेतमाख्यानं\nयदपृच्छत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "10",
    "verse": "yā yāḥ kathā bhagavataḥ\nkathanīyoru-karmaṇaḥ\nguṇa-karmāśrayāḥ pumbhiḥ\nsaṁsevyās tā bubhūṣubhiḥ",
    "devanagari": "या या: कथा भगवत: कथनीयोरुकर्मण: ।\nगुणकर्माश्रया: पुम्भि: संसेव्यास्ता\nबुभूषुभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "11",
    "verse": "ṛṣaya ūcuḥ\nsūta jīva samāḥ saumya\nśāśvatīr viśadaṁ yaśaḥ\nyas tvaṁ śaṁsasi kṛṣṇasya\nmartyānām amṛtaṁ hi naḥ",
    "devanagari": "ऋषय ऊचु:\nसूत जीव समा: सौम्य शाश्वतीर्विशदं यश: ।\nयस्त्वं शंससि कृष्णस्य मर्त्यानाममृतं हि न: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "12",
    "verse": "karmaṇy asminn anāśvāse\ndhūma-dhūmrātmanāṁ bhavān\nāpāyayati govinda-\npāda-padmāsavaṁ madhu",
    "devanagari": "कर्मण्यस्मिन्ननाश्वासे धूमधूम्रात्मनां भवान् ।\nआपाययति गोविन्दपादपद्मासवं मधु ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "13",
    "verse": "tulayāma lavenāpi\nna svargaṁ nāpunar-bhavam\nbhagavat-saṅgi-saṅgasya\nmartyānāṁ kim utāśiṣaḥ",
    "devanagari": "तुलयाम लवेनापि न स्वर्गं नापुनर्भवम् ।\nभगवत्सङ्गिसङ्गस्य मर्त्यानां किमुताशिष: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "14",
    "verse": "ko nāma tṛpyed rasavit kathāyāṁ\nmahattamaikānta-parāyaṇasya\nnāntaṁ guṇānām aguṇasya jagmur\nyogeśvarā ye bhava-pādma-mukhyāḥ",
    "devanagari": "को नाम तृप्येद् रसवित्कथायां\nमहत्तमैकान्तपरायणस्य ।\nनान्तं गुणानामगुणस्य जग्मु-\nर्योगेश्वरा ये भवपाद्ममुख्या: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "15",
    "verse": "tan no bhavān vai bhagavat-pradhāno\nmahattamaikānta-parāyaṇasya\nharer udāraṁ caritaṁ viśuddhaṁ\nśuśrūṣatāṁ no vitanotu vidvan",
    "devanagari": "तन्नो भवान् वै भगवत्प्रधानो\nमहत्तमैकान्तपरायणस्य ।\nहरेरुदारं चरितं विशुद्धं\nशुश्रूषतां नो वितनोतु विद्वन् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "16",
    "verse": "sa vai mahā-bhāgavataḥ parīkṣid\nyenāpavargākhyam adabhra-buddhiḥ\njñānena vaiyāsaki-śabditena\nbheje khagendra-dhvaja-pāda-mūlam",
    "devanagari": "स वै महाभागवत: परीक्षिद्\nयेनापवर्गाख्यमदभ्रबुद्धि: ।\nज्ञानेन वैयासकिशब्दितेन\nभेजे खगेन्द्रध्वजपादमूलम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "17",
    "verse": "tan naḥ paraṁ puṇyam asaṁvṛtārtham\nākhyānam atyadbhuta-yoga-niṣṭham\nākhyāhy anantācaritopapannaṁ\npārīkṣitaṁ bhāgavatābhirāmam",
    "devanagari": "तन्न: परं पुण्यमसंवृतार्थ-\nमाख्यानमत्यद्भुतयोगनिष्ठम् ।\nआख्याह्यनन्ताचरितोपपन्नं\nपारीक्षितं भागवताभिरामम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "18",
    "verse": "sūta uvāca\naho vayaṁ janma-bhṛto 'dya hāsma\nvṛddhānuvṛttyāpi viloma-jātāḥ\ndauṣkulyam ādhiṁ vidhunoti śīghraṁ\nmahattamānām abhidhāna-yogaḥ",
    "devanagari": "सूत उवाच\nअहो वयं जन्मभृतोऽद्य हास्म\nवृद्धानुवृत्त्यापि विलोमजाता: ।\nदौष्कुल्यमाधिं विधुनोति शीघ्रं\nमहत्तमानामभिधानयोग: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "19",
    "verse": "kutaḥ punar gṛṇato nāma tasya\nmahattamaikānta-parāyaṇasya\nyo 'nanta-śaktir bhagavān ananto\nmahad-guṇatvād yam anantam āhuḥ",
    "devanagari": "कुत: पुनर्गृणतो नाम तस्य\nमहत्तमैकान्तपरायणस्य ।\nयोऽनन्तशक्तिर्भगवाननन्तो\nमहद्गुणत्वाद् यमनन्तमाहु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "20",
    "verse": "etāvatālaṁ nanu sūcitena\nguṇair asāmyānatiśāyanasya\nhitvetarān prārthayato vibhūtir\nyasyāṅghri-reṇuṁ juṣate 'nabhīpsoḥ",
    "devanagari": "एतावतालं ननु सूचितेन\nगुणैरसाम्यानतिशायनस्य ।\nहित्वेतरान् प्रार्थयतो विभूति-\nर्यस्याङ्‌घ्रिरेणुं जुषतेऽनभीप्सो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "21",
    "verse": "athāpi yat-pāda-nakhāvasṛṣṭaṁ\njagad viriñcopahṛtārhaṇāmbhaḥ\nseśaṁ punāty anyatamo mukundāt\nko nāma loke bhagavat-padārthaḥ",
    "devanagari": "अथापि यत्पादनखावसृष्टं\nजगद्विरिञ्चोपहृतार्हणाम्भ: ।\nसेशं पुनात्यन्यतमो मुकुन्दात्\nको नाम लोके भगवत्पदार्थ: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "22",
    "verse": "yatrānuraktāḥ sahasaiva dhīrā\nvyapohya dehādiṣu saṅgam ūḍham\nvrajanti tat pārama-haṁsyam antyaṁ\nyasminn ahiṁsopaśamaḥ sva-dharmaḥ",
    "devanagari": "यत्रानुरक्ता: सहसैव धीरा\nव्यपोह्य देहादिषु सङ्गमूढम् ।\nव्रजन्ति तत्पारमहंस्यमन्त्यं\nयस्मिन्नहिंसोपशम: स्वधर्म: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "23",
    "verse": "ahaṁ hi pṛṣṭo 'ryamaṇo bhavadbhir\nācakṣa ātmāvagamo 'tra yāvān\nnabhaḥ patanty ātma-samaṁ patattriṇas\ntathā samaṁ viṣṇu-gatiṁ vipaścitaḥ",
    "devanagari": "अहं हि पृष्टोऽर्यमणो भवद्भ‍ि-\nराचक्ष आत्मावगमोऽत्र यावान् ।\nनभ: पतन्त्यात्मसमं पतत्‍त्रिण-\nस्तथा समं विष्णुगतिं विपश्चित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "24",
    "verse": "ekadā dhanur udyamya\nvicaran mṛgayāṁ vane\nmṛgān anugataḥ śrāntaḥ\nkṣudhitas tṛṣito bhṛśam",
    "devanagari": "एकदा धनुरुद्यम्य विचरन् मृगयां वने ।\nमृगाननुगत: श्रान्त: क्षुधितस्तृषितो भृशम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "25",
    "verse": "jalāśayam acakṣāṇaḥ\npraviveśa tam āśramam\ndadarśa munim āsīnaṁ\nśāntaṁ mīlita-locanam",
    "devanagari": "जलाशयमचक्षाण: प्रविवेश तमाश्रमम् ।\nददर्श मुनिमासीनं शान्तं मीलितलोचनम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "26",
    "verse": "pratiruddhendriya-prāṇa-\nmano-buddhim upāratam\nsthāna-trayāt paraṁ prāptaṁ\nbrahma-bhūtam avikriyam",
    "devanagari": "प्रतिरुद्धेन्द्रियप्राणमनोबुद्धिमुपारतम् ।\nस्थानत्रयात्परं प्राप्तं ब्रह्मभूतमविक्रियम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "27",
    "verse": "viprakīrṇa-jaṭācchannaṁ\nrauraveṇājinena ca\nviśuṣyat-tālur udakaṁ\ntathā-bhūtam ayācata",
    "devanagari": "विप्रकीर्णजटाच्छन्नं रौरवेणाजिनेन च ।\nविशुष्यत्तालुरुदकं तथाभूतमयाचत ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "28",
    "verse": "alabdha-tṛṇa-bhūmy-ādir\nasamprāptārghya-sūnṛtaḥ\navajñātam ivātmānaṁ\nmanyamānaś cukopa ha",
    "devanagari": "अलब्धतृणभूम्यादिरसम्प्राप्तार्घ्यसूनृत: ।\nअवज्ञातमिवात्मानं मन्यमानश्चुकोप ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "29",
    "verse": "abhūta-pūrvaḥ sahasā\nkṣut-tṛḍbhyām arditātmanaḥ\nbrāhmaṇaṁ praty abhūd brahman\nmatsaro manyur eva ca",
    "devanagari": "अभूतपूर्व: सहसा क्षुत्तृड्भ्यामर्दितात्मन: ।\nब्राह्मणं प्रत्यभूद् ब्रह्मन् मत्सरो मन्युरेव च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "30",
    "verse": "sa tu brahma-ṛṣer aṁse\ngatāsum uragaṁ ruṣā\nvinirgacchan dhanuṣ-koṭyā\nnidhāya puram āgataḥ",
    "devanagari": "स तु ब्रह्मऋषेरंसे गतासुमुरगं रुषा ।\nविनिर्गच्छन्धनुष्कोट्या निधाय\nपुरमागत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "31",
    "verse": "eṣa kiṁ nibhṛtāśeṣa-\nkaraṇo mīlitekṣaṇaḥ\nmṛṣā-samādhir āhosvit\nkiṁ nu syāt kṣatra-bandhubhiḥ",
    "devanagari": "एष किं निभृताशेषकरणो मीलितेक्षण: ।\nमृषासमाधिराहोस्वित्किं नु\nस्यात्क्षत्रबन्धुभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "32",
    "verse": "tasya putro 'titejasvī\nviharan bālako 'rbhakaiḥ\nrājñāghaṁ prāpitaṁ tātaṁ\nśrutvā tatredam abravīt",
    "devanagari": "तस्य पुत्रोऽतितेजस्वी विहरन् बालकोऽर्भकै: ।\nराज्ञाघं प्रापितं तातं श्रुत्वा तत्रेदमब्रवीत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "33",
    "verse": "aho adharmaḥ pālānāṁ\npīvnāṁ bali-bhujām iva\nsvāminy aghaṁ yad dāsānāṁ\ndvāra-pānāṁ śunām iva",
    "devanagari": "अहो अधर्म: पालानां पीव्‍नां बलिभुजामिव ।\nस्वामिन्यघं यद् दासानां द्वारपानां शुनामिव ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "34",
    "verse": "brāhmaṇaiḥ kṣatra-bandhur hi\ngṛha-pālo nirūpitaḥ\nsa kathaṁ tad-gṛhe dvāḥ-sthaḥ\nsabhāṇḍaṁ bhoktum arhati",
    "devanagari": "ब्राह्मणै: क्षत्रबन्धुर्हि गृहपालो निरूपित: ।\nस कथं तद्गृहे द्वा:स्थ: सभाण्डं भोक्तुमर्हति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "35",
    "verse": "kṛṣṇe gate bhagavati\nśāstary utpatha-gāminām\ntad bhinna-setūn adyāhaṁ\nśāsmi paśyata me balam",
    "devanagari": "कृष्णे गते भगवति शास्तर्युत्पथगामिनाम् ।\nतद्भ‍िन्नसेतूनद्याहं शास्मि पश्यत मे बलम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "36",
    "verse": "ity uktvā roṣa-tāmrākṣo\nvayasyān ṛṣi-bālakaḥ\nkauśiky-āpa upaspṛśya\nvāg-vajraṁ visasarja ha",
    "devanagari": "इत्युक्त्वा रोषताम्राक्षो वयस्यानृषिबालक: ।\nकौशिक्याप उपस्पृश्य वाग्वज्रं विससर्ज ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "37",
    "verse": "iti laṅghita-maryādaṁ\ntakṣakaḥ saptame 'hani\ndaṅkṣyati sma kulāṅgāraṁ\ncodito me tata-druham",
    "devanagari": "इति लङ्घितमर्यादं तक्षक: सप्तमेऽहनि ।\nदङ्‍क्ष्यति स्म कुलाङ्गारं चोदितो मे ततद्रुहम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "38",
    "verse": "tato 'bhyetyāśramaṁ bālo\ngale sarpa-kalevaram\npitaraṁ vīkṣya duḥkhārto\nmukta-kaṇṭho ruroda ha",
    "devanagari": "ततोऽभ्येत्याश्रमं बालो गले सर्पकलेवरम् ।\nपितरं वीक्ष्य दु:खार्तो मुक्तकण्ठो रुरोद ह ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "39",
    "verse": "sa vā āṅgiraso brahman\nśrutvā suta-vilāpanam\nunmīlya śanakair netre\ndṛṣṭvā cāṁse mṛtoragam",
    "devanagari": "स वा आङ्गिरसो ब्रह्मन् श्रुत्वा सुतविलापनम् ।\nउन्मील्य शनकैर्नेत्रे द‍ृष्ट्वा\nचांसे मृतोरगम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "40",
    "verse": "visṛjya taṁ ca papraccha\nvatsa kasmād dhi rodiṣi\nkena vā te 'pakṛtam\nity uktaḥ sa nyavedayat",
    "devanagari": "विसृज्य तं च पप्रच्छ वत्स कस्माद्धि रोदिषि ।\nकेन वा तेऽपकृतमित्युक्त: स\nन्यवेदयत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "41",
    "verse": "niśamya śaptam atad-arhaṁ narendraṁ\nsa brāhmaṇo nātmajam abhyanandat\naho batāṁho mahad adya te kṛtam\nalpīyasi droha urur damo dhṛtaḥ",
    "devanagari": "निशम्य शप्तमतदर्हं नरेन्द्रं\nस ब्राह्मणो नात्मजमभ्यनन्दत् ।\nअहो बतांहो महदद्य ते कृत-\nमल्पीयसि द्रोह उरुर्दमो धृत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "42",
    "verse": "na vai nṛbhir nara-devaṁ parākhyaṁ\nsammātum arhasy avipakva-buddhe\nyat-tejasā durviṣaheṇa guptā\nvindanti bhadrāṇy akutobhayāḥ prajāḥ",
    "devanagari": "न वै नृभिर्नरदेवं पराख्यं\nसम्मातुमर्हस्यविपक्‍वबुद्धे ।\nयत्तेजसा दुर्विषहेण गुप्ता\nविन्दन्ति भद्राण्यकुतोभया: प्रजा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "43",
    "verse": "alakṣyamāṇe nara-deva-nāmni\nrathāṅga-pāṇāv ayam aṅga lokaḥ\ntadā hi caura-pracuro vinaṅkṣyaty\narakṣyamāṇo 'vivarūthavat kṣaṇāt",
    "devanagari": "अलक्ष्यमाणे नरदेवनाम्नि\nरथाङ्गपाणावयमङ्ग लोक: ।\nतदा हि चौरप्रचुरो विनङ्‍क्ष्य-\nत्यरक्ष्यमाणोऽविवरूथवत् क्षणात् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "44",
    "verse": "tad adya naḥ pāpam upaity ananvayaṁ\nyan naṣṭa-nāthasya vasor vilumpakāt\nparasparaṁ ghnanti śapanti vṛñjate\npaśūn striyo 'rthān puru-dasyavo janāḥ",
    "devanagari": "तदद्य न: पापमुपैत्यनन्वयं\nयन्नष्टनाथस्य वसोर्विलुम्पकात् ।\nपरस्परं घ्नन्ति शपन्ति वृञ्जते\nपशून् स्त्रियोऽर्थान् पुरुदस्यवो जना: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "45",
    "verse": "tadārya-dharmaḥ pravilīyate nṛṇāṁ\nvarṇāśramācāra-yutas trayīmayaḥ\ntato 'rtha-kāmābhiniveśitātmanāṁ\nśunāṁ kapīnām iva varṇa-saṅkaraḥ",
    "devanagari": "तदार्यधर्म: प्रविलीयते नृणां\nवर्णाश्रमाचारयुतस्त्रयीमय: ।\nततोऽर्थकामाभिनिवेशितात्मनां\nशुनां कपीनामिव वर्णसङ्कर: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "46",
    "verse": "dharma-pālo nara-patiḥ\nsa tu samrāḍ bṛhac-chravāḥ\nsākṣān mahā-bhāgavato\nrājarṣir haya-medhayāṭ\nkṣut-tṛṭ-śrama-yuto dīno\nnaivāsmac chāpam arhati",
    "devanagari": "धर्मपालो नरपति: स तु सम्राड् बृहच्छ्रवा: ।\nसाक्षान्महाभागवतो राजर्षिर्हयमेधयाट् ।\nक्षुत्तृट्‍श्रमयुतो दीनो नैवास्मच्छापमर्हति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "47",
    "verse": "apāpeṣu sva-bhṛtyeṣu\nbālenāpakva-buddhinā\npāpaṁ kṛtaṁ tad bhagavān\nsarvātmā kṣantum arhati",
    "devanagari": "अपापेषु स्वभृत्येषु बालेनापक्‍वबुद्धिना ।\nपापं कृतं तद्भगवान् सर्वात्मा क्षन्तुमर्हति ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "48",
    "verse": "tiraskṛtā vipralabdhāḥ\nśaptāḥ kṣiptā hatā api\nnāsya tat pratikurvanti\ntad-bhaktāḥ prabhavo 'pi hi",
    "devanagari": "तिरस्कृता विप्रलब्धा: शप्ता: क्षिप्ता हता अपि ।\nनास्य तत् प्रतिकुर्वन्ति तद्भक्ता: प्रभवोऽपि हि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "49",
    "verse": "iti putra-kṛtāghena\nso 'nutapto mahā-muniḥ\nsvayaṁ viprakṛto rājñā\nnaivāghaṁ tad acintayat",
    "devanagari": "इति पुत्रकृताघेन सोऽनुतप्तो महामुनि: ।\nस्वयं विप्रकृतो राज्ञा नैवाघं तदचिन्तयत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "18",
    "text": "50",
    "verse": "prāyaśaḥ sādhavo loke\nparair dvandveṣu yojitāḥ\nna vyathanti na hṛṣyanti\nyata ātmāguṇāśrayaḥ",
    "devanagari": "प्रायश: साधवो लोके परैर्द्वन्द्वेषु योजिता: ।\nन व्यथन्ति न हृष्यन्ति यत आत्माऽगुणाश्रय: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "1",
    "verse": "sūta uvāca\nmahī-patis tv atha tat-karma garhyaṁ\nvicintayann ātma-kṛtaṁ sudurmanāḥ\naho mayā nīcam anārya-vat kṛtaṁ\nnirāgasi brahmaṇi gūḍha-tejasi",
    "devanagari": "सूत उवाच\nमहीपतिस्त्वथ तत्कर्म गर्ह्यं\nविचिन्तयन्नात्मकृतं सुदुर्मना: ।\nअहो मया नीचमनार्यवत्कृतं\nनिरागसि ब्रह्मणि गूढतेजसि ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "2",
    "verse": "dhruvaṁ tato me kṛta-deva-helanād\nduratyayaṁ vyasanaṁ nāti-dīrghāt\ntad astu kāmaṁ hy agha-niṣkṛtāya me\nyathā na kuryāṁ punar evam addhā",
    "devanagari": "ध्रुवं ततो मे कृतदेवहेलनाद्\nदुरत्ययं व्यसनं नातिदीर्घात् ।\nतदस्तु कामं ह्यघनिष्कृताय मे\nयथा न कुर्यां पुनरेवमद्धा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "3",
    "verse": "adyaiva rājyaṁ balam ṛddha-kośaṁ\nprakopita-brahma-kulānalo me\ndahatv abhadrasya punar na me 'bhūt\npāpīyasī dhīr dvija-deva-gobhyaḥ",
    "devanagari": "अद्यैव राज्यं बलमृद्धकोशं\nप्रकोपितब्रह्मकुलानलो मे ।\nदहत्वभद्रस्य पुनर्न मेऽभूत्\nपापीयसी धीर्द्विजदेवगोभ्य: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "4",
    "verse": "sa cintayann ittham athāśṛṇod yathā\nmuneḥ sutokto nirṛtis takṣakākhyaḥ\nsa sādhu mene na cireṇa takṣakā-\nnalaṁ prasaktasya virakti-kāraṇam",
    "devanagari": "स चिन्तयन्नित्थमथाश‍ृणोद् यथा\nमुने: सुतोक्तो निऋर्तिस्तक्षकाख्य: ।\nस साधु मेने न चिरेण तक्षका-\nनलं प्रसक्तस्य विरक्तिकारणम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "5",
    "verse": "atho vihāyemam amuṁ ca lokaṁ\nvimarśitau heyatayā purastāt\nkṛṣṇāṅghri-sevām adhimanyamāna\nupāviśat prāyam amartya-nadyām",
    "devanagari": "अथो विहायेमममुं च लोकं\nविमर्शितौ हेयतया पुरस्तात् ।\nकृष्णाङ्‌घ्रिसेवामधिमन्यमान\nउपाविशत् प्रायममर्त्यनद्याम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "6",
    "verse": "yā vai lasac-chrī-tulasī-vimiśra-\nkṛṣṇāṅghri-reṇv-abhyadhikāmbu-netrī\npunāti lokān ubhayatra seśān\nkas tāṁ na seveta mariṣyamāṇaḥ",
    "devanagari": "या वै लसच्छ्रीतुलसीविमिश्र-\nकृष्णाङ्‌घ्रिरेण्वभ्यधिकाम्बुनेत्री ।\nपुनाति लोकानुभयत्र सेशान्\nकस्तां न सेवेत मरिष्यमाण: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "7",
    "verse": "iti vyavacchidya sa pāṇḍaveyaḥ\nprāyopaveśaṁ prati viṣṇu-padyām\ndadhau mukundāṅghrim ananya-bhāvo\nmuni-vrato mukta-samasta-saṅgaḥ",
    "devanagari": "इति व्यवच्छिद्य स पाण्डवेय:\nप्रायोपवेशं प्रति विष्णुपद्याम् ।\nदधौ मुकुन्दाङ्‌घ्रिमनन्यभावो\nमुनिव्रतो मुक्तसमस्तसङ्ग: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "8",
    "verse": "tatropajagmur bhuvanaṁ punānā\nmahānubhāvā munayaḥ sa-śiṣyāḥ\nprāyeṇa tīrthābhigamāpadeśaiḥ\nsvayaṁ hi tīrthāni punanti santaḥ",
    "devanagari": "तत्रोपजग्मुर्भुवनं पुनाना\nमहानुभावा मुनय: सशिष्या: ।\nप्रायेण\nतीर्थाभिगमापदेशै:\nस्वयं हि तीर्थानि पुनन्ति सन्त: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "10",
    "verse": "medhātithir devala ārṣṭiṣeṇo\nbhāradvājo gautamaḥ pippalādaḥ\nmaitreya aurvaḥ kavaṣaḥ kumbhayonir\ndvaipāyano bhagavān nāradaś ca",
    "devanagari": "अत्रिर्वसिष्ठश्‍च्यवन: शरद्वा-\nनरिष्टनेमिर्भृगुरङ्गिराश्च ।\nपराशरो गाधिसुतोऽथ राम\nउतथ्य इन्द्रप्रमदेध्मवाहौ ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "9",
    "verse": "atrir vasiṣṭhaś cyavanaḥ śaradvān\nariṣṭanemir bhṛgur aṅgirāś ca\nparāśaro gādhi-suto 'tha rāma\nutathya indrapramadedhmavāhau",
    "devanagari": "मेधातिथिर्देवल आर्ष्टिषेणो\nभारद्वाजो गौतम: पिप्पलाद: ।\nमैत्रेय और्व: कवष: कुम्भयोनि-\nर्द्वैपायनो भगवान्नारदश्च ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "11",
    "verse": "anye ca devarṣi-brahmarṣi-varyā\nrājarṣi-varyā aruṇādayaś ca\nnānārṣeya-pravarān sametān\nabhyarcya rājā śirasā vavande",
    "devanagari": "अन्ये च देवर्षिब्रह्मर्षिवर्या\nराजर्षिवर्या अरुणादयश्च ।\nनानार्षेयप्रवरान् समेता-\nनभ्यर्च्य राजा शिरसा ववन्दे ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "12",
    "verse": "sukhopaviṣṭeṣv atha teṣu bhūyaḥ\nkṛta-praṇāmaḥ sva-cikīrṣitaṁ yat\nvijñāpayām āsa vivikta-cetā\nupasthito 'gre 'bhigṛhīta-pāṇiḥ",
    "devanagari": "सुखोपविष्टेष्वथ तेषु भूय:\nकृतप्रणाम: स्वचिकीर्षितं यत् ।\nविज्ञापयामास\nविविक्तचेता\nउपस्थितोऽग्रेऽभिगृहीतपाणि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "13",
    "verse": "rājovāca\naho vayaṁ dhanyatamā nṛpāṇāṁ\nmahattamānugrahaṇīya-śīlāḥ\nrājñāṁ kulaṁ brāhmaṇa-pāda-śaucād\ndūrād visṛṣṭaṁ bata garhya-karma",
    "devanagari": "राजोवाच ।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "14",
    "verse": "tasyaiva me 'ghasya parāvareśo\nvyāsakta-cittasya gṛheṣv abhīkṣṇam\nnirveda-mūlo dvija-śāpa-rūpo\nyatra prasakto bhayam āśu dhatte",
    "devanagari": "तस्यैव मेऽघस्य परावरेशो\nव्यासक्तचित्तस्य गृहेष्वभीक्ष्णम् ।\nनिर्वेदमूलो द्विजशापरूपो\nयत्र प्रसक्तो भयमाशु धत्ते ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "15",
    "verse": "taṁ mopayātaṁ pratiyantu viprā\ngaṅgā ca devī dhṛta-cittam īśe\ndvijopasṛṣṭaḥ kuhakas takṣako vā\ndaśatv alaṁ gāyata viṣṇu-gāthāḥ",
    "devanagari": "तं मोपयातं प्रतियन्तु विप्रा\nगङ्गा च देवी धृतचित्तमीशे ।\nद्विजोपसृष्ट: कुहकस्तक्षको वा\nदशत्वलं गायत विष्णुगाथा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "16",
    "verse": "punaś ca bhūyād bhagavaty anante\nratiḥ prasaṅgaś ca tad-āśrayeṣu\nmahatsu yāṁ yām upayāmi sṛṣṭiṁ\nmaitry astu sarvatra namo dvijebhyaḥ",
    "devanagari": "पुनश्च भूयाद्भगवत्यनन्ते\nरति: प्रसङ्गश्च तदाश्रयेषु ।\nमहत्सु यां यामुपयामि सृष्टिं\nमैत्र्यस्तु सर्वत्र नमो द्विजेभ्य: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "17",
    "verse": "iti sma rājādhyavasāya-yuktaḥ\nprācīna-mūleṣu kuśeṣu dhīraḥ\nudaṅ-mukho dakṣiṇa-kūla āste\nsamudra-patnyāḥ sva-suta-nyasta-bhāraḥ",
    "devanagari": "इति स्म राजाध्यवसाययुक्त:\nप्राचीनमूलेषु कुशेषु धीर: ।\nउदङ्‍मुखो\nदक्षिणकूल आस्ते\nसमुद्रपत्‍न्‍या: स्वसुतन्यस्तभार: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "18",
    "verse": "evaṁ ca tasmin nara-deva-deve\nprāyopaviṣṭe divi deva-saṅghāḥ\npraśasya bhūmau vyakiran prasūnair\nmudā muhur dundubhayaś ca neduḥ",
    "devanagari": "एवं च तस्मिन्नरदेवदेवे\nप्रायोपविष्टे दिवि देवसङ्घा: ।\nप्रशस्य\nभूमौ व्यकिरन् प्रसूनै-\nर्मुदा मुहुर्दुन्दुभयश्च नेदु: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "19",
    "verse": "maharṣayo vai samupāgatā ye\npraśasya sādhv ity anumodamānāḥ\nūcuḥ prajānugraha-śīla-sārā\nyad uttama-śloka-guṇābhirūpam",
    "devanagari": "महर्षयो वै समुपागता ये\nप्रशस्य साध्वित्यनुमोदमाना: ।\nऊचु: प्रजानुग्रहशीलसारा\nयदुत्तमश्लोकगुणाभिरूपम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "20",
    "verse": "na vā idaṁ rājarṣi-varya citraṁ\nbhavatsu kṛṣṇaṁ samanuvrateṣu\nye 'dhyāsanaṁ rāja-kirīṭa-juṣṭaṁ\nsadyo jahur bhagavat-pārśva-kāmāḥ",
    "devanagari": "न वा इदं राजर्षिवर्य चित्रं\nभवत्सु कृष्णं समनुव्रतेषु ।\nयेऽध्यासनं राजकिरीटजुष्टं\nसद्यो जहुर्भगवत्पार्श्वकामा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "21",
    "verse": "sarve vayaṁ tāvad ihāsmahe 'tha\nkalevaraṁ yāvad asau vihāya\nlokaṁ paraṁ virajaskaṁ viśokaṁ\nyāsyaty ayaṁ bhāgavata-pradhānaḥ",
    "devanagari": "सर्वे वयं तावदिहास्महेऽथ\nकलेवरं यावदसौ विहाय ।\nलोकं परं विरजस्कं विशोकं\nयास्यत्ययं भागवतप्रधान: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "22",
    "verse": "āśrutya tad ṛṣi-gaṇa-vacaḥ parīkṣit\nsamaṁ madhu-cyud guru cāvyalīkam\nābhāṣatainān abhinandya yuktān\nśuśrūṣamāṇaś caritāni viṣṇoḥ",
    "devanagari": "आश्रुत्य तद‍ृषिगणवच: परीक्षित्\nसमं मधुच्युद् गुरु चाव्यलीकम् ।\nआभाषतैनानभिनन्द्य युक्तान्\nशुश्रूषमाणश्चरितानि विष्णो: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "23",
    "verse": "samāgatāḥ sarvata eva sarve\nvedā yathā mūrti-dharās tri-pṛṣṭhe\nnehātha nāmutra ca kaścanārtha\nṛte parānugraham ātma-śīlam",
    "devanagari": "समागता: सर्वत एव सर्वे\nवेदा यथा मूर्तिधरास्त्रिपृष्ठे ।\nनेहाथ नामुत्र च कश्चनार्थ\nऋते परानुग्रहमात्मशीलम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "24",
    "verse": "tataś ca vaḥ pṛcchyam imaṁ vipṛcche\nviśrabhya viprā iti kṛtyatāyām\nsarvātmanā mriyamāṇaiś ca kṛtyaṁ\nśuddhaṁ ca tatrāmṛśatābhiyuktāḥ",
    "devanagari": "ततश्च व: पृच्छ्‍यमिमं विपृच्छे\nविश्रभ्य विप्रा इति कृत्यतायाम् ।\nसर्वात्मना म्रियमाणैश्च कृत्यं\nशुद्धं च तत्रामृशताभियुक्ता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "25",
    "verse": "tatrābhavad bhagavān vyāsa-putro\nyadṛcchayā gām aṭamāno 'napekṣaḥ\nalakṣya-liṅgo nija-lābha-tuṣṭo\nvṛtaś ca bālair avadhūta-veṣaḥ",
    "devanagari": "तत्राभवद्भगवान् व्यासपुत्रो\nयद‍ृच्छया गामटमानोऽनपेक्ष: ।\nअलक्ष्यलिङ्गो निजलाभतुष्टो\nवृतश्च बालैरवधूतवेष: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "26",
    "verse": "taṁ dvyaṣṭa-varṣaṁ su-kumāra-pāda-\nkaroru-bāhv-aṁsa-kapola-gātram\ncārv-āyatākṣonnasa-tulya-karṇa-\nsubhrv-ānanaṁ kambu-sujāta-kaṇṭham",
    "devanagari": "तं द्व‌्यष्टवर्षं\nसुकुमारपाद-\nकरोरुबाह्वंसकपोलगात्रम् ।\nचार्वायताक्षोन्नसतुल्यकर्ण-\nसुभ्र्वाननं\nकम्बुसुजातकण्ठम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "27",
    "verse": "nigūḍha-jatruṁ pṛthu-tuṅga-vakṣasam\nāvarta-nābhiṁ vali-valgūdaraṁ ca\ndig-ambaraṁ vaktra-vikīrṇa-keśaṁ\npralamba-bāhuṁ svamarottamābham",
    "devanagari": "निगूढजत्रुं पृथुतुङ्गवक्षस-\nमावर्तनाभिं वलिवल्गूदरं च ।\nदिगम्बरं वक्त्रविकीर्णकेशं\nप्रलम्बबाहुं स्वमरोत्तमाभम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "28",
    "verse": "śyāmaṁ sadāpīvya-vayo-'ṅga-lakṣmyā\nstrīṇāṁ mano-jñaṁ rucira-smitena\npratyutthitās te munayaḥ svāsanebhyas\ntal-lakṣaṇa-jñā api gūḍha-varcasam",
    "devanagari": "श्यामं सदापीव्यवयोऽङ्गलक्ष्म्या\nस्त्रीणां मनोज्ञं रुचिरस्मितेन ।\nप्रत्युत्थितास्ते मुनय: स्वासनेभ्य-\nस्तल्लक्षणज्ञा अपि गूढवर्चसम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "29",
    "verse": "sa viṣṇu-rāto 'tithaya āgatāya\ntasmai saparyāṁ śirasājahāra\ntato nivṛttā hy abudhāḥ striyo 'rbhakā\nmahāsane sopaviveśa pūjitaḥ",
    "devanagari": "स विष्णुरातोऽतिथय आगताय\nतस्मै सपर्यां शिरसाजहार ।\nततो निवृत्ता ह्यबुधा: स्त्रियोऽर्भका\nमहासने सोपविवेश पूजित: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "30",
    "verse": "sa saṁvṛtas tatra mahān mahīyasāṁ\nbrahmarṣi-rājarṣi-devarṣi-saṅghaiḥ\nvyarocatālaṁ bhagavān yathendur\ngraharkṣa-tārā-nikaraiḥ parītaḥ",
    "devanagari": "स संवृतस्तत्र महान् महीयसां\nब्रह्मर्षिराजर्षिदेवर्षिसङ्घै: ।\nव्यरोचतालं भगवान् यथेन्दु-\nर्ग्रहर्क्षतारानिकरै: परीत: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "31",
    "verse": "praśāntam āsīnam akuṇṭha-medhasaṁ\nmuniṁ nṛpo bhāgavato 'bhyupetya\npraṇamya mūrdhnāvahitaḥ kṛtāñjalir\nnatvā girā sūnṛtayānvapṛcchat",
    "devanagari": "प्रशान्तमासीनमकुण्ठमेधसं\nमुनिं नृपो भागवतोऽभ्युपेत्य ।\nप्रणम्य मूर्ध्नावहित: कृताञ्जलि-\nर्नत्वा गिरा सूनृतयान्वपृच्छत् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "32",
    "verse": "parīkṣid uvāca\naho adya vayaṁ brahman\nsat-sevyāḥ kṣatra-bandhavaḥ\nkṛpayātithi-rūpeṇa\nbhavadbhis tīrthakāḥ kṛtāḥ",
    "devanagari": "परीक्षिदुवाच\nअहो अद्य वयं ब्रह्मन् सत्सेव्या: क्षत्रबन्धव: ।\nकृपयातिथिरूपेण भवद्भ‍िस्तीर्थका: कृता: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "33",
    "verse": "yeṣāṁ saṁsmaraṇāt puṁsāṁ\nsadyaḥ śuddhyanti vai gṛhāḥ\nkiṁ punar darśana-sparśa-\npāda-śaucāsanādibhiḥ",
    "devanagari": "येषां संस्मरणात्पुंसां सद्य: शुद्ध्यन्ति वै गृहा: ।\nकिं पुनर्दर्शनस्पर्शपादशौचासनादिभि: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "34",
    "verse": "sānnidhyāt te mahā-yogin\npātakāni mahānty api\nsadyo naśyanti vai puṁsāṁ\nviṣṇor iva suretarāḥ",
    "devanagari": "सान्निध्यात्ते महायोगिन्पातकानि महान्त्यपि ।\nसद्यो नश्यन्ति वै पुंसां विष्णोरिव सुरेतरा: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "35",
    "verse": "api me bhagavān prītaḥ\nkṛṣṇaḥ pāṇḍu-suta-priyaḥ\npaitṛ-ṣvaseya-prīty-arthaṁ\ntad-gotrasyātta-bāndhavaḥ",
    "devanagari": "अपि मे भगवान् प्रीत: कृष्ण: पाण्डुसुतप्रिय: ।\nपैतृष्वसेयप्रीत्यर्थं तद्गोत्रस्यात्तबान्धव: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "36",
    "verse": "anyathā te 'vyakta-gater\ndarśanaṁ naḥ kathaṁ nṛṇām\nnitarāṁ mriyamāṇānāṁ\nsaṁsiddhasya vanīyasaḥ",
    "devanagari": "अन्यथा तेऽव्यक्तगतेर्दर्शनं न: कथं नृणाम् ।\nनितरां म्रियमाणानां संसिद्धस्य वनीयस: ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "37",
    "verse": "ataḥ pṛcchāmi saṁsiddhiṁ\nyogināṁ paramaṁ gurum\npuruṣasyeha yat kāryaṁ\nmriyamāṇasya sarvathā",
    "devanagari": "अत: पृच्छामि संसिद्धिं योगिनां परमं गुरुम् ।\nपुरुषस्येह यत्कार्यं म्रियमाणस्य सर्वथा ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "38",
    "verse": "yac chrotavyam atho japyaṁ\nyat kartavyaṁ nṛbhiḥ prabho\nsmartavyaṁ bhajanīyaṁ vā\nbrūhi yad vā viparyayam",
    "devanagari": "यच्छ्रोतव्यमथो जप्यं यत्कर्तव्यं नृभि: प्रभो ।\nस्मर्तव्यं भजनीयं वा ब्रूहि यद्वा विपर्ययम् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "39",
    "verse": "nūnaṁ bhagavato brahman\ngṛheṣu gṛha-medhinām\nna lakṣyate hy avasthānam\napi go-dohanaṁ kvacit",
    "devanagari": "नूनं भगवतो ब्रह्मन् गृहेषु गृहमेधिनाम् ।\nन लक्ष्यते ह्यवस्थानमपि गोदोहनं क्‍वचित् ।।"
  },
  {
    "book": "SB",
    "canto": "1",
    "chapter": "19",
    "text": "40",
    "verse": "sūta uvāca\nevam ābhāṣitaḥ pṛṣṭaḥ\nsa rājñā ślakṣṇayā girā\npratyabhāṣata dharma-jño\nbhagavān bādarāyaṇiḥ",
    "devanagari": "सूत उवाच\nएवमाभाषित: पृष्ट: स राज्ञा श्लक्ष्णया गिरा ।\nप्रत्यभाषत धर्मज्ञो भगवान् बादरायणि: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "Invocation",
    "verse": "oṁ namo bhagavate vāsudevāya",
    "devanagari": "ॐ नमो भगवते वासुदेवाय । ।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "1",
    "verse": "śrī-śuka uvāca\nvarīyān eṣa te praśnaḥ\nkṛto loka-hitaṁ nṛpa\nātmavit-sammataḥ puṁsāṁ\nśrotavyādiṣu yaḥ paraḥ",
    "devanagari": "श्रीशुक उवाच\nवरीयानेष ते प्रश्न: कृतो लोकहितं\nनृप ।\nआत्मवित्सम्मत: पुंसां श्रोतव्यादिषु य: पर: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "2",
    "verse": "śrotavyādīni rājendra\nnṛṇāṁ santi sahasraśaḥ\napaśyatām ātma-tattvaṁ\ngṛheṣu gṛha-medhinām",
    "devanagari": "श्रोतव्यादीनि राजेन्द्र नृणां सन्ति\nसहस्रश: ।\nअपश्यतामात्मतत्त्वं गृहेषु गृहमेधिनाम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "3",
    "verse": "nidrayā hriyate naktaṁ\nvyavāyena ca vā vayaḥ\ndivā cārthehayā rājan\nkuṭumba-bharaṇena vā",
    "devanagari": "निद्रया ह्रियते नक्तं व्यवायेन च वा वय: ।\nदिवा चार्थेहया राजन् कुटुम्बभरणेन वा ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "4",
    "verse": "dehāpatya-kalatrādiṣu\nātma-sainyeṣv asatsv api\nteṣāṁ pramatto nidhanaṁ\npaśyann api na paśyati",
    "devanagari": "देहापत्यकलत्रादिष्वात्मसैन्येष्वसत्स्वपि ।\nतेषां प्रमत्तो निधनं पश्यन्नपि न पश्यति ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "5",
    "verse": "tasmād bhārata sarvātmā\nbhagavān īśvaro hariḥ\nśrotavyaḥ kīrtitavyaś ca\nsmartavyaś cecchatābhayam",
    "devanagari": "तस्माद्भारत सर्वात्मा भगवानीश्वरो हरि: ।\nश्रोतव्य: कीर्तितव्यश्च स्मर्तव्यश्चेच्छताभयम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "6",
    "verse": "etāvān sāṅkhya-yogābhyāṁ\nsva-dharma-pariniṣṭhayā\njanma-lābhaḥ paraḥ puṁsām\nante nārāyaṇa-smṛtiḥ",
    "devanagari": "एतावान् सांख्ययोगाभ्यां स्वधर्मपरिनिष्ठया ।\nजन्मलाभ: पर: पुंसामन्ते नारायणस्मृति: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "7",
    "verse": "prāyeṇa munayo rājan\nnivṛttā vidhi-ṣedhataḥ\nnairguṇya-sthā ramante sma\nguṇānukathane hareḥ",
    "devanagari": "प्रायेण मुनयो राजन्निवृत्ता विधिषेधत: ।\nनैर्गुण्यस्था रमन्ते स्म गुणानुकथने हरे: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "8",
    "verse": "idaṁ bhāgavataṁ nāma\npurāṇaṁ brahma-sammitam\nadhītavān dvāparādau\npitur dvaipāyanād aham",
    "devanagari": "इदं भागवतं नाम पुराणं ब्रह्मसम्मितम् ।\nअधीतवान् द्वापरादौ पितुर्द्वैपायनादहम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "9",
    "verse": "pariniṣṭhito 'pi nairguṇya\nuttama-śloka-līlayā\ngṛhīta-cetā rājarṣe\nākhyānaṁ yad adhītavān",
    "devanagari": "परिनिष्ठितोऽपि नैर्गुण्य उत्तमश्लोकलीलया ।\nगृहीतचेता राजर्षे आख्यानं यदधीतवान् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "10",
    "verse": "tad ahaṁ te 'bhidhāsyāmi\nmahā-pauruṣiko bhavān\nyasya śraddadhatām āśu\nsyān mukunde matiḥ satī",
    "devanagari": "तदहं तेऽभिधास्यामि महापौरुषिको भवान् ।\nयस्य श्रद्दधतामाशु स्यान्मुकुन्दे मति: सती ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "11",
    "verse": "etan nirvidyamānānām\nicchatām akuto-bhayam\nyogināṁ nṛpa nirṇītaṁ\nharer nāmānukīrtanam",
    "devanagari": "एतन्निर्विद्यमानानामिच्छतामकुतोभयम् ।\nयोगिनां नृप निर्णीतं हरेर्नामानुकीर्तनम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "12",
    "verse": "kiṁ pramattasya bahubhiḥ\nparokṣair hāyanair iha\nvaraṁ muhūrtaṁ viditaṁ\nghaṭate śreyase yataḥ",
    "devanagari": "किं प्रमत्तस्य बहुभि: परोक्षैर्हायनैरिह ।\nवरं मुहूर्तं विदितं घटते श्रेयसे यत: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "13",
    "verse": "khaṭvāṅgo nāma rājarṣir\njñātveyattām ihāyuṣaḥ\nmuhūrtāt sarvam utsṛjya\ngatavān abhayaṁ harim",
    "devanagari": "खट्‍वाङ्गो नाम राजर्षिर्ज्ञात्वेयत्तामिहायुष: ।\nमुहूर्तात्सर्वमुत्सृज्य गतवानभयं हरिम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "14",
    "verse": "tavāpy etarhi kauravya\nsaptāhaṁ jīvitāvadhiḥ\nupakalpaya tat sarvaṁ\ntāvad yat sāmparāyikam",
    "devanagari": "तवाप्येतर्हि कौरव्य सप्ताहं जीवितावधि: ।\nउपकल्पय तत्सर्वं तावद्यत्साम्परायिकम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "15",
    "verse": "anta-kāle tu puruṣa\nāgate gata-sādhvasaḥ\nchindyād asaṅga-śastreṇa\nspṛhāṁ dehe 'nu ye ca tam",
    "devanagari": "अन्तकाले तु पुरुष आगते गतसाध्वस: ।\nछिन्द्यादसङ्गशस्त्रेण स्पृहां देहेऽनु ये च तम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "16",
    "verse": "gṛhāt pravrajito dhīraḥ\npuṇya-tīrtha-jalāplutaḥ\nśucau vivikta āsīno\nvidhivat kalpitāsane",
    "devanagari": "गृहात् प्रव्रजितो धीर: पुण्यतीर्थजलाप्लुत: ।\nशुचौ विविक्त आसीनो विधिवत्कल्पितासने ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "17",
    "verse": "abhyasen manasā śuddhaṁ\ntrivṛd-brahmākṣaraṁ param\nmano yacchej jita-śvāso\nbrahma-bījam avismaran",
    "devanagari": "अभ्यसेन्मनसा शुद्धं त्रिवृद्ब्रह्माक्षरं परम् ।\nमनो यच्छेज्जितश्वासो ब्रह्मबीजमविस्मरन् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "18",
    "verse": "niyacched viṣayebhyo 'kṣān\nmanasā buddhi-sārathiḥ\nmanaḥ karmabhir ākṣiptaṁ\nśubhārthe dhārayed dhiyā",
    "devanagari": "नियच्छेद्विषयेभ्योऽक्षान्मनसा बुद्धिसारथि: ।\nमन: कर्मभिराक्षिप्तं शुभार्थे धारयेद्धिया ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "19",
    "verse": "tatraikāvayavaṁ dhyāyed\navyucchinnena cetasā\nmano nirviṣayaṁ yuktvā\ntataḥ kiñcana na smaret\npadaṁ tat paramaṁ viṣṇor\nmano yatra prasīdati",
    "devanagari": "तत्रैकावयवं ध्यायेदव्युच्छिन्नेन चेतसा ।\nमनो निर्विषयं युक्त्वा तत: किञ्चन न स्मरेत् ।\nपदं तत्परमं विष्णोर्मनो यत्र प्रसीदति ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "20",
    "verse": "rajas-tamobhyām ākṣiptaṁ\nvimūḍhaṁ mana ātmanaḥ\nyacched dhāraṇayā dhīro\nhanti yā tat-kṛtaṁ malam",
    "devanagari": "रजस्तमोभ्यामाक्षिप्तं विमूढं मन आत्मन: ।\nयच्छेद्धारणया धीरो हन्ति या तत्कृतं मलम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "21",
    "verse": "yasyāṁ sandhāryamāṇāyāṁ\nyogino bhakti-lakṣaṇaḥ\nāśu sampadyate yoga\nāśrayaṁ bhadram īkṣataḥ",
    "devanagari": "यस्यां सन्धार्यमाणायां योगिनो भक्तिलक्षण: ।\nआशु सम्पद्यते योग आश्रयं भद्रमीक्षत: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "22",
    "verse": "rājovāca\nyathā sandhāryate brahman\ndhāraṇā yatra sammatā\nyādṛśī vā hared āśu\npuruṣasya mano-malam",
    "devanagari": "राजोवाच\nयथा सन्धार्यते ब्रह्मन् धारणा यत्र सम्मता ।\nयाद‍ृशी वा हरेदाशु पुरुषस्य मनोमलम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "23",
    "verse": "śrī-śuka uvāca\njitāsano jita-śvāso\njita-saṅgo jitendriyaḥ\nsthūle bhagavato rūpe\nmanaḥ sandhārayed dhiyā",
    "devanagari": "श्रीशुक उवाच\nजितासनो जितश्वासो जितसङ्गो जितेन्द्रिय: ।\nस्थूले भगवतो रूपे मन: सन्धारयेद्धिया ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "24",
    "verse": "viśeṣas tasya deho 'yaṁ\nsthaviṣṭhaś ca sthavīyasām\nyatredaṁ vyajyate viśvaṁ\nbhūtaṁ bhavyaṁ bhavac ca sat",
    "devanagari": "विशेषस्तस्य देहोऽयं स्थविष्ठश्च स्थवीयसाम् ।\nयत्रेदं व्यज्यते विश्वं भूतं भव्यं भवच्च सत् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "25",
    "verse": "aṇḍa-kośe śarīre 'smin\nsaptāvaraṇa-saṁyute\nvairājaḥ puruṣo yo 'sau\nbhagavān dhāraṇāśrayaḥ",
    "devanagari": "अण्डकोशे शरीरेऽस्मिन् सप्तावरणसंयुते ।\nवैराज: पुरुषो योऽसौ भगवान् धारणाश्रय: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "26",
    "verse": "pātālam etasya hi pāda-mūlaṁ\npaṭhanti pārṣṇi-prapade rasātalam\nmahātalaṁ viśva-sṛjo 'tha gulphau\ntalātalaṁ vai puruṣasya jaṅghe",
    "devanagari": "पातालमेतस्य हि पादमूलं\nपठन्ति पार्ष्णिप्रपदे रसातलम् ।\nमहातलं विश्वसृजोऽथ गुल्फौ\nतलातलं वै पुरुषस्य जङ्घे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "27",
    "verse": "dve jānunī sutalaṁ viśva-mūrter\nūru-dvayaṁ vitalaṁ cātalaṁ ca\nmahītalaṁ taj-jaghanaṁ mahīpate\nnabhastalaṁ nābhi-saro gṛṇanti",
    "devanagari": "द्वे जानुनी सुतलं विश्वमूर्ते-\nरूरुद्वयं वितलं चातलं च ।\nमहीतलं तज्जघनं महीपते\nनभस्तलं नाभिसरो गृणन्ति ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "28",
    "verse": "uraḥ-sthalaṁ jyotir-anīkam asya\ngrīvā mahar vadanaṁ vai jano 'sya\ntapo varāṭīṁ vidur ādi-puṁsaḥ\nsatyaṁ tu śīrṣāṇi sahasra-śīrṣṇaḥ",
    "devanagari": "उर:स्थलं ज्योतिरनीकमस्य\nग्रीवा महर्वदनं वै जनोऽस्य ।\nतपो वराटीं विदुरादिपुंस:\nसत्यं तु शीर्षाणि सहस्रशीर्ष्ण: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "29",
    "verse": "indrādayo bāhava āhur usrāḥ\nkarṇau diśaḥ śrotram amuṣya śabdaḥ\nnāsatya-dasrau paramasya nāse\nghrāṇo 'sya gandho mukham agnir iddhaḥ",
    "devanagari": "इन्द्रादयो बाहव आहुरुस्रा:\nकर्णौ दिश:श्रोत्रममुष्य शब्द: ।\nनासत्यदस्रौ परमस्य नासे\nघ्राणोऽस्य गन्धो मुखमग्निरिद्ध: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "30",
    "verse": "dyaur akṣiṇī cakṣur abhūt pataṅgaḥ\npakṣmāṇi viṣṇor ahanī ubhe ca\ntad-bhrū-vijṛmbhaḥ parameṣṭhi-dhiṣṇyam\nāpo 'sya tālū rasa eva jihvā",
    "devanagari": "द्यौरक्षिणी चक्षुरभूत्पतङ्ग:\nपक्ष्माणि विष्णोरहनी उभे च ।\nतद्भ्रूविजृम्भ: परमेष्ठिधिष्ण्य-\nमापोऽस्य तालु रस एव जिह्वा ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "31",
    "verse": "chandāṁsy anantasya śiro gṛṇanti\ndaṁṣṭrā yamaḥ sneha-kalā dvijāni\nhāso janonmāda-karī ca māyā\nduranta-sargo yad-apāṅga-mokṣaḥ",
    "devanagari": "छन्दांस्यनन्तस्य शिरो गृणन्ति\nदंष्ट्रा यम: स्‍नेहकला द्विजानि ।\nहासो जनोन्मादकरी च माया\nदुरन्तसर्गो यदपाङ्गमोक्ष: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "32",
    "verse": "vrīḍottarauṣṭho 'dhara eva lobho\ndharmaḥ stano 'dharma-patho 'sya pṛṣṭham\nkas tasya meḍhraṁ vṛṣaṇau ca mitrau\nkukṣiḥ samudrā girayo 'sthi-saṅghāḥ",
    "devanagari": "व्रीडोत्तरौष्ठोऽधर एव लोभो\nधर्म: स्तनोऽधर्मपथोऽस्य पृष्ठम् ।\nकस्तस्य मेढ्रं वृषणौ च मित्रौ\nकुक्षि: समुद्रा गिरयोऽस्थिसङ्घा: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "33",
    "verse": "nadyo 'sya nāḍyo 'tha tanū-ruhāṇi\nmahī-ruhā viśva-tanor nṛpendra\nananta-vīryaḥ śvasitaṁ mātariśvā\ngatir vayaḥ karma guṇa-pravāhaḥ",
    "devanagari": "नद्योऽस्य नाड्योऽथ तनूरुहाणि\nमहीरुहा विश्वतनोर्नृपेन्द्र ।\nअनन्तवीर्य: श्वसितं मातरिश्वा\nगतिर्वय: कर्म गुणप्रवाह: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "34",
    "verse": "īśasya keśān vidur ambuvāhān\nvāsas tu sandhyāṁ kuru-varya bhūmnaḥ\navyaktam āhur hṛdayaṁ manaś ca\nsa candramāḥ sarva-vikāra-kośaḥ",
    "devanagari": "ईशस्य केशान् विदुरम्बुवाहान्\nवासस्तु सन्ध्यां कुरुवर्य भूम्न: ।\nअव्यक्तमाहुर्हृदयं मनश्च\nस चन्द्रमा: सर्वविकारकोश: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "35",
    "verse": "vijñāna-śaktiṁ mahim āmananti\nsarvātmano 'ntaḥ-karaṇaṁ giritram\naśvāśvatary-uṣṭra-gajā nakhāni\nsarve mṛgāḥ paśavaḥ śroṇi-deśe",
    "devanagari": "विज्ञानशक्तिं महिमामनन्ति\nसर्वात्मनोऽन्त:करणं गिरित्रम् ।\nअश्वाश्वतर्युष्ट्रगजा नखानि\nसर्वे मृगा: पशव: श्रोणिदेशे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "36",
    "verse": "vayāṁsi tad-vyākaraṇaṁ vicitraṁ\nmanur manīṣā manujo nivāsaḥ\ngandharva-vidyādhara-cāraṇāpsaraḥ\nsvara-smṛtīr asurānīka-vīryaḥ",
    "devanagari": "वयांसि तद्व्याकरणं विचित्रं\nमनुर्मनीषा मनुजो निवास: ।\nगन्धर्वविद्याधरचारणाप्सर:\nस्वरस्मृतीरसुरानीकवीर्य: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "37",
    "verse": "brahmānanaṁ kṣatra-bhujo mahātmā\nviḍ ūrur aṅghri-śrita-kṛṣṇa-varṇaḥ\nnānābhidhābhījya-gaṇopapanno\ndravyātmakaḥ karma vitāna-yogaḥ",
    "devanagari": "ब्रह्माननं क्षत्रभुजो महात्मा\nविडूरुरङ्‌घ्रिश्रितकृष्णवर्ण: ।\nनानाभिधाभीज्यगणोपपन्नो\nद्रव्यात्मक: कर्म वितानयोग: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "38",
    "verse": "iyān asāv īśvara-vigrahasya\nyaḥ sanniveśaḥ kathito mayā te\nsandhāryate 'smin vapuṣi sthaviṣṭhe\nmanaḥ sva-buddhyā na yato 'sti kiñcit",
    "devanagari": "इयानसावीश्वरविग्रहस्य\nय: सन्निवेष: कथितो मया ते ।\nसन्धार्यतेऽस्मिन् वपुषि स्थविष्ठे\nमन: स्वबुद्ध्या न यतोऽस्ति किञ्चित् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "1",
    "text": "39",
    "verse": "sa sarva-dhī-vṛtty-anubhūta-sarva\nātmā yathā svapna-janekṣitaikaḥ\ntaṁ satyam ānanda-nidhiṁ bhajeta\nnānyatra sajjed yata ātma-pātaḥ",
    "devanagari": "स सर्वधीवृत्त्यनुभूतसर्व\nआत्मा यथा स्वप्नजनेक्षितैक: ।\nतं सत्यमानन्दनिधिं भजेत\nनान्यत्र सज्जेद् यत आत्मपात: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "1",
    "verse": "śrī-śuka uvāca\nevaṁ purā dhāraṇayātma-yonir\nnaṣṭāṁ smṛtiṁ pratyavarudhya tuṣṭāt\ntathā sasarjedam amogha-dṛṣṭir\nyathāpyayāt prāg vyavasāya-buddhiḥ",
    "devanagari": "श्रीशुक उवाच\nएवं पुरा धारणयात्मयोनि-\nर्नष्टां स्मृतिं प्रत्यवरुध्य तुष्टात् ।\nतथा ससर्जेदममोघद‍ृष्टि-\nर्यथाप्ययात् प्राग् व्यवसायबुद्धि: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "2",
    "verse": "śābdasya hi brahmaṇa eṣa panthā\nyan nāmabhir dhyāyati dhīr apārthaiḥ\nparibhramaṁs tatra na vindate 'rthān\nmāyāmaye vāsanayā śayānaḥ",
    "devanagari": "शाब्दस्य हि ब्रह्मण एष पन्था\nयन्नामभिर्ध्यायति धीरपार्थै: ।\nपरिभ्रमंस्तत्र न विन्दतेऽर्थान्\nमायामये वासनया शयान: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "3",
    "verse": "ataḥ kavir nāmasu yāvad arthaḥ\nsyād apramatto vyavasāya-buddhiḥ\nsiddhe 'nyathārthe na yateta tatra\npariśramaṁ tatra samīkṣamāṇaḥ",
    "devanagari": "अत: कविर्नामसु यावदर्थ:\nस्यादप्रमत्तो व्यवसायबुद्धि: ।\nसिद्धेऽन्यथार्थे न यतेत तत्र\nपरिश्रमं तत्र समीक्षमाण: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "4",
    "verse": "satyāṁ kṣitau kiṁ kaśipoḥ prayāsair\nbāhau svasiddhe hy upabarhaṇaiḥ kim\nsaty añjalau kiṁ purudhānna-pātryā\ndig-valkalādau sati kiṁ dukūlaiḥ",
    "devanagari": "सत्यां क्षितौ किं कशिपो: प्रयासै-\nर्बाहौ स्वसिद्धे ह्युपबर्हणै: किम् ।\nसत्यञ्जलौ किं पुरुधान्नपात्र्या\nदिग्वल्कलादौ सति किं दुकूलै: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "5",
    "verse": "cīrāṇi kiṁ pathi na santi diśanti bhikṣāṁ\nnaivāṅghripāḥ para-bhṛtaḥ sarito 'py aśuṣyan\nruddhā guhāḥ kim ajito 'vati nopasannān\nkasmād bhajanti kavayo dhana-durmadāndhān",
    "devanagari": "चीराणि किं पथि न सन्ति दिशन्ति भिक्षां\nनैवाङ्‌घ्रिपा: परभृत: सरितोऽप्यशुष्यन् ।\nरुद्धा गुहा: किमजितोऽवति नोपसन्नान्\nकस्माद् भजन्ति कवयो धनदुर्मदान्धान् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "6",
    "verse": "evaṁ sva-citte svata eva siddha\nātmā priyo 'rtho bhagavān anantaḥ\ntaṁ nirvṛto niyatārtho bhajeta\nsaṁsāra-hetūparamaś ca yatra",
    "devanagari": "एवं स्वचित्ते स्वत एव सिद्ध\nआत्मा प्रियोऽर्थो भगवाननन्त: ।\nतं निर्वृतो नियतार्थो भजेत\nसंसारहेतूपरमश्च यत्र ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "7",
    "verse": "kas tāṁ tv anādṛtya parānucintām\nṛte paśūn asatīṁ nāma kuryāt\npaśyañ janaṁ patitaṁ vaitaraṇyāṁ\nsva-karmajān paritāpāñ juṣāṇam",
    "devanagari": "कस्तां त्वनाद‍ृत्य परानुचिन्ता-\nमृते पशूनसतीं नाम कुर्यात् ।\nपश्यञ्जनं पतितं वैतरण्यां\nस्वकर्मजान् परितापाञ्जुषाणम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "8",
    "verse": "kecit sva-dehāntar-hṛdayāvakāśe\nprādeśa-mātraṁ puruṣaṁ vasantam\ncatur-bhujaṁ kañja-rathāṅga-śaṅkha-\ngadā-dharaṁ dhāraṇayā smaranti",
    "devanagari": "केचित् स्वदेहान्तर्हृदयावकाशे\nप्रादेशमात्रं पुरुषं वसन्तम् ।\nचतुर्भुजं कञ्जरथाङ्गशङ्ख-\nगदाधरं धारणया स्मरन्ति ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "9",
    "verse": "prasanna-vaktraṁ nalināyatekṣaṇaṁ\nkadamba-kiñjalka-piśaṅga-vāsasam\nlasan-mahā-ratna-hiraṇmayāṅgadaṁ\nsphuran-mahā-ratna-kirīṭa-kuṇḍalam",
    "devanagari": "प्रसन्नवक्त्रं नलिनायतेक्षणं\nकदम्बकिञ्जल्कपिशङ्गवाससम् ।\nलसन्महारत्नहिरण्मयाङ्गदं\nस्फुरन्महारत्नकिरीटकुण्डलम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "10",
    "verse": "unnidra-hṛt-paṅkaja-karṇikālaye\nyogeśvarāsthāpita-pāda-pallavam\nśrī-lakṣaṇaṁ kaustubha-ratna-kandharam\namlāna-lakṣmyā vana-mālayācitam",
    "devanagari": "उन्निद्रहृत्पङ्कजकर्णिकालये\nयोगेश्वरास्थापितपादपल्लवम् ।\nश्रीलक्षणं कौस्तुभरत्नकन्धर-\nमम्‍लानलक्ष्म्या वनमालयाचितम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "11",
    "verse": "vibhūṣitaṁ mekhalayāṅgulīyakair\nmahā-dhanair nūpura-kaṅkaṇādibhiḥ\nsnigdhāmalākuñcita-nīla-kuntalair\nvirocamānānana-hāsa-peśalam",
    "devanagari": "विभूषितं मेखलयाङ्गुलीयकै-\nर्महाधनैर्नूपुरकङ्कणादिभि: ।\nस्निग्धामलाकुञ्चितनीलकुन्तलै-\nर्विरोचमानाननहासपेशलम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "12",
    "verse": "adīna-līlā-hasitekṣaṇollasad-\nbhrū-bhaṅga-saṁsūcita-bhūry-anugraham\nīkṣeta cintāmayam enam īśvaraṁ\nyāvan mano dhāraṇayāvatiṣṭhate",
    "devanagari": "अदीनलीलाहसितेक्षणोल्लसद्-\nभ्रूभङ्गसंसूचितभूर्यनुग्रहम् ।\nईक्षेत चिन्तामयमेनमीश्वरं\nयावन्मनो धारणयावतिष्ठते ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "13",
    "verse": "ekaikaśo 'ṅgāni dhiyānubhāvayet\npādādi yāvad dhasitaṁ gadābhṛtaḥ\njitaṁ jitaṁ sthānam apohya dhārayet\nparaṁ paraṁ śuddhyati dhīr yathā yathā",
    "devanagari": "एकैकशोऽङ्गानि धियानुभावयेत्\nपादादि यावद्धसितं गदाभृत: ।\nजितं जितं स्थानमपोह्य धारयेत्\nपरं परं शुद्ध्यति धीर्यथा यथा ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "14",
    "verse": "yāvan na jāyeta parāvare 'smin\nviśveśvare draṣṭari bhakti-yogaḥ\ntāvat sthavīyaḥ puruṣasya rūpaṁ\nkriyāvasāne prayataḥ smareta",
    "devanagari": "यावन्न जायेत परावरेऽस्मिन्\nविश्वेश्वरे द्रष्टरि भक्तियोग: ।\nतावत् स्थवीय: पुरुषस्य रूपं\nक्रियावसाने प्रयत: स्मरेत ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "15",
    "verse": "sthiraṁ sukhaṁ cāsanam āsthito yatir\nyadā jihāsur imam aṅga lokam\nkāle ca deśe ca mano na sajjayet\nprāṇān niyacchen manasā jitāsuḥ",
    "devanagari": "स्थिरं सुखं चासनमास्थितो यति-\nर्यदा जिहासुरिममङ्ग लोकम् ।\nकाले च देशे च मनो न सज्जयेत्\nप्राणान् नियच्छेन्मनसा जितासु: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "16",
    "verse": "manaḥ sva-buddhyāmalayā niyamya\nkṣetra-jña etāṁ ninayet tam ātmani\nātmānam ātmany avarudhya dhīro\nlabdhopaśāntir virameta kṛtyāt",
    "devanagari": "मन: स्वबुद्ध्यामलया नियम्य\nक्षेत्रज्ञ एतां निनयेत् तमात्मनि ।\nआत्मानमात्मन्यवरुध्य धीरो\nलब्धोपशान्तिर्विरमेत कृत्यात् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "17",
    "verse": "na yatra kālo 'nimiṣāṁ paraḥ prabhuḥ\nkuto nu devā jagatāṁ ya īśire\nna yatra sattvaṁ na rajas tamaś ca\nna vai vikāro na mahān pradhānam",
    "devanagari": "न यत्र कालोऽनिमिषां पर: प्रभु:\nकुतो नु देवा जगतां य ईशिरे ।\nन यत्र सत्त्वं न रजस्तमश्च\nन वै विकारो न महान् प्रधानम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "18",
    "verse": "paraṁ padaṁ vaiṣṇavam āmananti tad\nyan neti netīty atad utsisṛkṣavaḥ\nvisṛjya daurātmyam ananya-sauhṛdā\nhṛdopaguhyārha-padaṁ pade pade",
    "devanagari": "परं पदं वैष्णवमामनन्ति तद्\nयन्नेति नेतीत्यतदुत्सिसृक्षव: ।\nविसृज्य दौरात्म्यमनन्यसौहृदा\nहृदोपगुह्यार्हपदं पदे पदे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "19",
    "verse": "itthaṁ munis tūparamed vyavasthito\nvijñāna-dṛg-vīrya-surandhitāśayaḥ\nsva-pārṣṇināpīḍya gudaṁ tato 'nilaṁ\nsthāneṣu ṣaṭsūnnamayej jita-klamaḥ",
    "devanagari": "इत्थं मुनिस्तूपरमेद् व्यवस्थितो\nविज्ञानद‍ृग्वीर्यसुरन्धिताशय: ।\nस्वपार्ष्णिनापीड्य गुदं ततोऽनिलं\nस्थानेषु षट्‍सून्नमयेज्जितक्लम: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "20",
    "verse": "nābhyāṁ sthitaṁ hṛdy adhiropya tasmād\nudāna-gatyorasi taṁ nayen muniḥ\ntato 'nusandhāya dhiyā manasvī\nsva-tālu-mūlaṁ śanakair nayeta",
    "devanagari": "नाभ्यां स्थितं हृद्यधिरोप्य तस्मा-\nदुदानगत्योरसि तं नयेन्मुनि: ।\nततोऽनुसन्धाय धिया मनस्वी\nस्वतालुमूलं शनकैर्नयेत् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "21",
    "verse": "tasmād bhruvor antaram unnayeta\nniruddha-saptāyatano 'napekṣaḥ\nsthitvā muhūrtārdham akuṇṭha-dṛṣṭir\nnirbhidya mūrdhan visṛjet paraṁ gataḥ",
    "devanagari": "तस्माद् भ्रुवोरन्तरमुन्नयेत\nनिरुद्धसप्तायतनोऽनपेक्ष: ।\nस्थित्वा मुहूर्तार्धमकुण्ठद‍ृष्टि-\nर्निर्भिद्य मूर्धन् विसृजेत्परं गत: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "22",
    "verse": "yadi prayāsyan nṛpa pārameṣṭhyaṁ\nvaihāyasānām uta yad vihāram\naṣṭādhipatyaṁ guṇa-sannivāye\nsahaiva gacchen manasendriyaiś ca",
    "devanagari": "यदि प्रयास्यन् नृप पारमेष्ठ्यं\nवैहायसानामुत यद् विहारम् ।\nअष्टाधिपत्यं गुणसन्निवाये\nसहैव गच्छेन्मनसेन्द्रियैश्च ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "23",
    "verse": "yogeśvarāṇāṁ gatim āhur antar-\nbahis-tri-lokyāḥ pavanāntar-ātmanām\nna karmabhis tāṁ gatim āpnuvanti\nvidyā-tapo-yoga-samādhi-bhājām",
    "devanagari": "योगेश्वराणां गतिमाहुरन्त-\nर्बहिस्त्रिलोक्या: पवनान्तरात्मनाम् ।\nन कर्मभिस्तां गतिमाप्नुवन्ति\nविद्यातपोयोगसमाधिभाजाम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "24",
    "verse": "vaiśvānaraṁ yāti vihāyasā gataḥ\nsuṣumṇayā brahma-pathena śociṣā\nvidhūta-kalko 'tha harer udastāt\nprayāti cakraṁ nṛpa śaiśumāram",
    "devanagari": "वैश्वानरं याति विहायसा गत:\nसुषुम्णया ब्रह्मपथेन शोचिषा ।\nविधूतकल्कोऽथ हरेरुदस्तात्\nप्रयाति चक्रं नृप शैशुमारम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "25",
    "verse": "tad viśva-nābhiṁ tv ativartya viṣṇor\naṇīyasā virajenātmanaikaḥ\nnamaskṛtaṁ brahma-vidām upaiti\nkalpāyuṣo yad vibudhā ramante",
    "devanagari": "तद् विश्वनाभिं त्वतिवर्त्य विष्णो-\nरणीयसा विरजेनात्मनैक: ।\nनमस्कृतं ब्रह्मविदामुपैति\nकल्पायुषो यद् विबुधा रमन्ते ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "26",
    "verse": "atho anantasya mukhānalena\ndandahyamānaṁ sa nirīkṣya viśvam\nniryāti siddheśvara-yuṣṭa-dhiṣṇyaṁ\nyad dvai-parārdhyaṁ tad u pārameṣṭhyam",
    "devanagari": "अथो अनन्तस्य मुखानलेन\nदन्दह्यमानं स निरीक्ष्य विश्वम् ।\nनिर्याति सिद्धेश्वरयुष्टधिष्ण्यं\nयद् द्वैपरार्ध्यं तदु पारमेष्ठ्यम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "27",
    "verse": "na yatra śoko na jarā na mṛtyur\nnārtir na codvega ṛte kutaścit\nyac cit tato 'daḥ kṛpayānidaṁ-vidāṁ\nduranta-duḥkha-prabhavānudarśanāt",
    "devanagari": "न यत्र शोको न जरा न मृत्यु-\nर्नार्तिर्न चोद्वेग ऋते कुतश्चित् ।\nयच्चित्ततोऽद: कृपयानिदंविदां\nदुरन्तदु:खप्रभवानुदर्शनात् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "28",
    "verse": "tato viśeṣaṁ pratipadya nirbhayas\ntenātmanāpo 'nala-mūrtir atvaran\njyotirmayo vāyum upetya kāle\nvāyv-ātmanā khaṁ bṛhad ātma-liṅgam",
    "devanagari": "ततो विशेषं प्रतिपद्य निर्भय-\nस्तेनात्मनापोऽनलमूर्तिरत्वरन् ।\nज्योतिर्मयो वायुमुपेत्य काले\nवाय्वात्मना खं बृहदात्मलिङ्गम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "29",
    "verse": "ghrāṇena gandhaṁ rasanena vai rasaṁ\nrūpaṁ ca dṛṣṭyā śvasanaṁ tvacaiva\nśrotreṇa copetya nabho-guṇatvaṁ\nprāṇena cākūtim upaiti yogī",
    "devanagari": "घ्राणेन गन्धं रसनेन वै रसं\nरूपं च द‍ृष्टय‍ा श्वसनं त्वचैव ।\nश्रोत्रेण चोपेत्य नभोगुणत्वं\nप्राणेन चाकूतिमुपैति योगी ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "30",
    "verse": "sa bhūta-sūkṣmendriya-sannikarṣaṁ\nmanomayaṁ devamayaṁ vikāryam\nsaṁsādya gatyā saha tena yāti\nvijñāna-tattvaṁ guṇa-sannirodham",
    "devanagari": "स भूतसूक्ष्मेन्द्रियसंनिकर्षं\nमनोमयं देवमयं विकार्यम् ।\nसंसाद्य गत्या सह तेन याति\nविज्ञानतत्त्वं गुणसंनिरोधम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "31",
    "verse": "tenātmanātmānam upaiti śāntam\nānandam ānandamayo 'vasāne\netāṁ gatiṁ bhāgavatīṁ gato yaḥ\nsa vai punar neha viṣajjate 'ṅga",
    "devanagari": "तेनात्मनात्मानमुपैति शान्त-\nमानन्दमानन्दमयोऽवसाने ।\nएतां गतिं भागवतीं गतो य:\nस वै पुनर्नेह विषज्जतेऽङ्ग ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "32",
    "verse": "ete sṛtī te nṛpa veda-gīte\ntvayābhipṛṣṭe ca sanātane ca\nye vai purā brahmaṇa āha tuṣṭa\nārādhito bhagavān vāsudevaḥ",
    "devanagari": "एते सृती ते नृप वेदगीते\nत्वयाभिपृष्टे च सनातने च ।\nये वै पुरा ब्रह्मण आह तुष्ट\nआराधितो भगवान् वासुदेव: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "33",
    "verse": "na hy ato 'nyaḥ śivaḥ panthā\nviśataḥ saṁsṛtāv iha\nvāsudeve bhagavati\nbhakti-yogo yato bhavet",
    "devanagari": "न ह्यतोऽन्य: शिव: पन्था विशत: संसृताविह ।\nवासुदेवे भगवति भक्तियोगो यतो भवेत् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "34",
    "verse": "bhagavān brahma kārtsnyena\ntrir anvīkṣya manīṣayā\ntad adhyavasyat kūṭa-stho\nratir ātman yato bhavet",
    "devanagari": "भगवान् ब्रह्म कार्त्स्‍न्येन त्रिरन्वीक्ष्य मनीषया ।\nतदध्यवस्यत् कूटस्थो रतिरात्मन् यतो भवेत् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "35",
    "verse": "bhagavān sarva-bhūteṣu\nlakṣitaḥ svātmanā hariḥ\ndṛśyair buddhy-ādibhir draṣṭā\nlakṣaṇair anumāpakaiḥ",
    "devanagari": "भगवान् सर्वभूतेषु लक्षित: स्वात्मना हरि: ।\nद‍ृश्यैर्बुद्ध्यादिभिर्द्रष्टा लक्षणैरनुमापकै: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "36",
    "verse": "tasmāt sarvātmanā rājan\nhariḥ sarvatra sarvadā\nśrotavyaḥ kīrtitavyaś ca\nsmartavyo bhagavān nṛṇām",
    "devanagari": "तस्मात् सर्वात्मना राजन् हरि: सर्वत्र सर्वदा ।\nश्रोतव्य: कीर्तितव्यश्च स्मर्तव्यो भगवान्नृणाम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "2",
    "text": "37",
    "verse": "pibanti ye bhagavata ātmanaḥ satāṁ\nkathāmṛtaṁ śravaṇa-puṭeṣu sambhṛtam\npunanti te viṣaya-vidūṣitāśayaṁ\nvrajanti tac-caraṇa-saroruhāntikam",
    "devanagari": "पिबन्ति ये भगवत आत्मन: सतां\nकथामृतं श्रवणपुटेषु सम्भृतम् ।\nपुनन्ति ते विषयविदूषिताशयं\nव्रजन्ति तच्चरणसरोरुहान्तिकम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "1",
    "verse": "śrī-śuka uvāca\nevam etan nigaditaṁ\npṛṣṭavān yad bhavān mama\nnṛṇāṁ yan mriyamāṇānāṁ\nmanuṣyeṣu manīṣiṇām",
    "devanagari": "श्री शुक उवाच\nएवमेतन्निगदितं पृष्टवान् यद्भवान् मम ।\nनृणां यन्म्रियमाणानां मनुष्येषु मनीषिणाम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "2",
    "verse": "brahma-varcasa-kāmas tu\nyajeta brahmaṇaḥ patim\nindram indriya-kāmas tu\nprajā-kāmaḥ prajāpatīn",
    "devanagari": "ब्रह्मवर्चसकामस्तु यजेत ब्रह्मण: पतिम् ।\nइन्द्रमिन्द्रियकामस्तु प्रजाकाम: प्रजापतीन् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "3",
    "verse": "devīṁ māyāṁ tu śrī-kāmas\ntejas-kāmo vibhāvasum\nvasu-kāmo vasūn rudrān\nvīrya-kāmo 'tha vīryavān",
    "devanagari": "देवीं मायां तु श्रीकामस्तेजस्कामो विभावसुम् ।\nवसुकामो वसून रुद्रान् वीर्यकामोऽथ वीर्यवान् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "4",
    "verse": "annādya-kāmas tv aditiṁ\nsvarga-kāmo 'diteḥ sutān\nviśvān devān rājya-kāmaḥ\nsādhyān saṁsādhako viśām",
    "devanagari": "अन्नाद्यकामस्त्वदितिं स्वर्गकामोऽदिते:सुतान् ।\nविश्वान्देवान् राज्यकाम: साध्यान्संसाधको विशाम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "5",
    "verse": "āyuṣ-kāmo 'śvinau devau\npuṣṭi-kāma ilāṁ yajet\npratiṣṭhā-kāmaḥ puruṣo\nrodasī loka-mātarau",
    "devanagari": "आयुष्कामोऽश्विनौ देवौ पुष्टिकाम इलां यजेत् ।\nप्रतिष्ठाकाम: पुरुषो रोदसी लोकमातरौ ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "6",
    "verse": "rūpābhikāmo gandharvān\nstrī-kāmo 'psara urvaśīm\nādhipatya-kāmaḥ sarveṣāṁ\nyajeta parameṣṭhinam",
    "devanagari": "रूपाभिकामो गन्धर्वान् स्त्रीकामोऽप्सर उर्वशीम् ।\nआधिपत्यकाम: सर्वेषां यजेत परमेष्ठिनम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "7",
    "verse": "yajñaṁ yajed yaśas-kāmaḥ\nkośa-kāmaḥ pracetasam\nvidyā-kāmas tu giriśaṁ\ndāmpatyārtha umāṁ satīm",
    "devanagari": "यज्ञं यजेद् यशस्काम: कोशकाम: प्रचेतसम् ।\nविद्याकामस्तु गिरिशं दाम्पत्यार्थ उमां सतीम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "8",
    "verse": "dharmārtha uttama-ślokaṁ\ntantuḥ tanvan pitṟn yajet\nrakṣā-kāmaḥ puṇya-janān\nojas-kāmo marud-gaṇān",
    "devanagari": "धर्मार्थ उत्तमश्लोकं तन्तु: तन्वन् पितृन् यजेत् ।\nरक्षाकाम: पुण्यजनानोजस्कामो मरुद्गणान् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "9",
    "verse": "rājya-kāmo manūn devān\nnirṛtiṁ tv abhicaran yajet\nkāma-kāmo yajet somam\nakāmaḥ puruṣaṁ param",
    "devanagari": "राज्यकामो मनून् देवान् निऋर्तिं त्वभिचरन् यजेत् ।\nकामकामो यजेत् सोममकाम: पुरुषं परम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "10",
    "verse": "akāmaḥ sarva-kāmo vā\nmokṣa-kāma udāra-dhīḥ\ntīvreṇa bhakti-yogena\nyajeta puruṣaṁ param",
    "devanagari": "अकाम: सर्वकामो वा मोक्षकाम उदारधी: ।\nतीव्रेण भक्तियोगेन यजेत पुरुषं परम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "11",
    "verse": "etāvān eva yajatām\niha niḥśreyasodayaḥ\nbhagavaty acalo bhāvo\nyad bhāgavata-saṅgataḥ",
    "devanagari": "एतावानेव यजतामिह नि:श्रेयसोदय: ।\nभगवत्यचलो भावो यद् भागवतसंगत: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "12",
    "verse": "jñānaṁ yad āpratinivṛtta-guṇormi-cakram\nātma-prasāda uta yatra guṇeṣv asaṅgaḥ\nkaivalya-sammata-pathas tv atha bhakti-yogaḥ\nko nirvṛto hari-kathāsu ratiṁ na kuryāt",
    "devanagari": "ज्ञानं यदाप्रतिनिवृत्तगुणोर्मिचक्र -\nमात्मप्रसाद उत यत्र गुणेष्वसङ्ग: ।\nकैवल्यसम्मतपथस्त्वथ भक्तियोग:\nको निर्वृतो हरिकथासु रतिं न कुर्यात् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "13",
    "verse": "śaunaka uvāca\nity abhivyāhṛtaṁ rājā\nniśamya bharatarṣabhaḥ\nkim anyat pṛṣṭavān bhūyo\nvaiyāsakim ṛṣiṁ kavim",
    "devanagari": "शौनक उवाच\nइत्यभिव्याहृतं राजा निशम्य भरतर्षभ: ।\nकिमन्यत्पृष्टवान् भूयो वैयासकिमृषिं कविम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "14",
    "verse": "etac chuśrūṣatāṁ vidvan\nsūta no 'rhasi bhāṣitum\nkathā hari-kathodarkāḥ\nsatāṁ syuḥ sadasi dhruvam",
    "devanagari": "एतच्छुश्रूषतां विद्वन् सूत नोऽर्हसि भाषितुम् ।\nकथा हरिकथोदर्का: सतां स्यु: सदसि ध्रुवम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "15",
    "verse": "sa vai bhāgavato rājā\npāṇḍaveyo mahā-rathaḥ\nbāla-krīḍanakaiḥ krīḍan\nkṛṣṇa-krīḍāṁ ya ādade",
    "devanagari": "स वै भागवतो राजा पाण्डवेयो महारथ: ।\nबालक्रीडनकै: क्रीडन् कृष्णक्रीडां य आददे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "16",
    "verse": "vaiyāsakiś ca bhagavān\nvāsudeva-parāyaṇaḥ\nurugāya-guṇodārāḥ\nsatāṁ syur hi samāgame",
    "devanagari": "वैयासकिश्च भगवान् वासुदेवपरायण: ।\nउरुगायगुणोदारा: सतां स्युर्हि समागमे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "17",
    "verse": "āyur harati vai puṁsām\nudyann astaṁ ca yann asau\ntasyarte yat-kṣaṇo nīta\nuttama-śloka-vārtayā",
    "devanagari": "आयुर्हरति वै पुंसामुद्यन्नस्तं च यन्नसौ ।\nतस्यर्ते यत्क्षणो नीत उत्तमश्लोकवार्तया ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "18",
    "verse": "taravaḥ kiṁ na jīvanti\nbhastrāḥ kiṁ na śvasanty uta\nna khādanti na mehanti\nkiṁ grāme paśavo 'pare",
    "devanagari": "तरव: किं न जीवन्ति भस्त्रा: किं न श्वसन्त्युत ।\nन खादन्ति न मेहन्ति किं ग्रामे पशवोऽपरे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "19",
    "verse": "śva-viḍ-varāhoṣṭra-kharaiḥ\nsaṁstutaḥ puruṣaḥ paśuḥ\nna yat-karṇa-pathopeto\njātu nāma gadāgrajaḥ",
    "devanagari": "श्वविड्‍वराहोष्ट्रखरै: संस्तुत: पुरुष: पशु: ।\nन यत्कर्णपथोपेतो जातु नाम गदाग्रज: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "20",
    "verse": "bile batorukrama-vikramān ye\nna śṛṇvataḥ karṇa-puṭe narasya\njihvāsatī dārdurikeva sūta\nna copagāyaty urugāya-gāthāḥ",
    "devanagari": "बिले बतोरुक्रमविक्रमान् ये\nन श‍ृण्वत: कर्णपुटे नरस्य ।\nजिह्वासती दार्दुरिकेव सूत\nन चोपगायत्युरुगायगाथा: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "21",
    "verse": "bhāraḥ paraṁ paṭṭa-kirīṭa-juṣṭam\napy uttamāṅgaṁ na namen mukundam\nśāvau karau no kurute saparyāṁ\nharer lasat-kāñcana-kaṅkaṇau vā",
    "devanagari": "भार: परं पट्टकिरीटजुष्ट -\nमप्युत्तमाङ्गं न नमेन्मुकुन्दम् ।\nशावौ करौ नो कुरुते सपर्यां\nहरेर्लसत्काञ्चनकङ्कणौ वा ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "22",
    "verse": "barhāyite te nayane narāṇāṁ\nliṅgāni viṣṇor na nirīkṣato ye\npādau nṛṇāṁ tau druma-janma-bhājau\nkṣetrāṇi nānuvrajato harer yau",
    "devanagari": "बर्हायिते ते नयने नराणां\nलिङ्गानि विष्णोर्न निरीक्षतो ये ।\nपादौ नृणां तौ द्रुमजन्मभाजौ\nक्षेत्राणि नानुव्रजतो हरेर्यौ ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "23",
    "verse": "jīvañ chavo bhāgavatāṅghri-reṇuṁ\nna jātu martyo 'bhilabheta yas tu\nśrī-viṣṇu-padyā manujas tulasyāḥ\nśvasañ chavo yas tu na veda gandham",
    "devanagari": "जीवञ्छवो भागवताङ्‌घ्रिरेणुं\nन जातु मर्त्योऽभिलभेत यस्तु ।\nश्रीविष्णुपद्या मनुजस्तुलस्या:\nश्वसञ्छवो यस्तु न वेद गन्धम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "24",
    "verse": "tad aśma-sāraṁ hṛdayaṁ batedaṁ\nyad gṛhyamāṇair hari-nāma-dheyaiḥ\nna vikriyetātha yadā vikāro\nnetre jalaṁ gātra-ruheṣu harṣaḥ",
    "devanagari": "तदश्मसारं हृदयं बतेदं\nयद् गृह्यमाणैर्हरिनामधेयै: ।\nन विक्रियेताथ यदा विकारो\nनेत्रे जलं गात्ररुहेषु हर्ष: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "3",
    "text": "25",
    "verse": "athābhidhehy aṅga mano-'nukūlaṁ\nprabhāṣase bhāgavata-pradhānaḥ\nyad āha vaiyāsakir ātma-vidyā-\nviśārado nṛpatiṁ sādhu pṛṣṭaḥ",
    "devanagari": "अथाभिधेह्यङ्ग मनोऽनुकूलं\nप्रभाषसे भागवतप्रधान: ।\nयदाह वैयासकिरात्मविद्या-\nविशारदो नृपतिं साधु पृष्ट: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "1",
    "verse": "sūta uvāca\nvaiyāsaker iti vacas\ntattva-niścayam ātmanaḥ\nupadhārya matiṁ kṛṣṇe\nauttareyaḥ satīṁ vyadhāt",
    "devanagari": "सूत उवाच\nवैयासकेरिति वचस्तत्त्वनिश्चयमात्मन: ।\nउपधार्य मतिं कृष्णे औत्तरेय: सतीं व्यधात् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "2",
    "verse": "ātma-jāyā-sutāgāra-\npaśu-draviṇa-bandhuṣu\nrājye cāvikale nityaṁ\nvirūḍhāṁ mamatāṁ jahau",
    "devanagari": "आत्मजायासुतागारपशुद्रविणबन्धुषु ।\nराज्ये चाविकले नित्यं विरूढां ममतां जहौ ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "3",
    "verse": "papraccha cemam evārthaṁ\nyan māṁ pṛcchatha sattamāḥ\nkṛṣṇānubhāva-śravaṇe\nśraddadhāno mahā-manāḥ",
    "devanagari": "पप्रच्छ चेममेवार्थं यन्मां पृच्छथ सत्तमा: ।\nकृष्णानुभावश्रवणे श्रद्दधानो महामना: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "4",
    "verse": "saṁsthāṁ vijñāya sannyasya\nkarma trai-vargikaṁ ca yat\nvāsudeve bhagavati\nātma-bhāvaṁ dṛḍhaṁ gataḥ",
    "devanagari": "संस्थां विज्ञाय संन्यस्य कर्म त्रैवर्गिकं च यत् ।\nवासुदेवे भगवति आत्मभावं द‍ृढं गत: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "5",
    "verse": "rājovāca\nsamīcīnaṁ vaco brahman\nsarva-jñasya tavānagha\ntamo viśīryate mahyaṁ\nhareḥ kathayataḥ kathām",
    "devanagari": "राजोवाच\nसमीचीनं वचो ब्रह्मन् सर्वज्ञस्य तवानघ ।\nतमो विशीर्यते मह्यं हरे: कथयत: कथाम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "6",
    "verse": "bhūya eva vivitsāmi\nbhagavān ātma-māyayā\nyathedaṁ sṛjate viśvaṁ\ndurvibhāvyam adhīśvaraiḥ",
    "devanagari": "भूय एव विवित्सामि भगवानात्ममायया ।\nयथेदं सृजते विश्वं दुर्विभाव्यमधीश्वरै: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "7",
    "verse": "yathā gopāyati vibhur\nyathā saṁyacchate punaḥ\nyāṁ yāṁ śaktim upāśritya\npuru-śaktiḥ paraḥ pumān\nātmānaṁ krīḍayan krīḍan\nkaroti vikaroti ca",
    "devanagari": "यथा गोपायति विभुर्यथा संयच्छते पुन: ।\nयां यां शक्तिमुपाश्रित्य पुरुशक्ति: पर: पुमान् ।\nआत्मानं क्रीडयन् क्रीडन् करोति विकरोति च ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "8",
    "verse": "nūnaṁ bhagavato brahman\nharer adbhuta-karmaṇaḥ\ndurvibhāvyam ivābhāti\nkavibhiś cāpi ceṣṭitam",
    "devanagari": "नूनं भगवतो ब्रह्मन् हरेरद्भुतकर्मण: ।\nदुर्विभाव्यमिवाभाति कविभिश्चापि चेष्टितम् ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "9",
    "verse": "yathā guṇāṁs tu prakṛter\nyugapat kramaśo 'pi vā\nbibharti bhūriśas tv ekaḥ\nkurvan karmāṇi janmabhiḥ",
    "devanagari": "यथा गुणांस्तु प्रकृतेर्युगपत् क्रमशोऽपि वा ।\nबिभर्ति भूरिशस्त्वेक: कुर्वन् कर्माणि जन्मभि: ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "10",
    "verse": "vicikitsitam etan me\nbravītu bhagavān yathā\nśābde brahmaṇi niṣṇātaḥ\nparasmiṁś ca bhavān khalu",
    "devanagari": "विचिकित्सितमेतन्मे ब्रवीतु भगवान् यथा ।\nशाब्दे ब्रह्मणि निष्णात: परस्मिंश्च भवान्खलु ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "11",
    "verse": "sūta uvāca\nity upāmantrito rājñā\nguṇānukathane hareḥ\nhṛṣīkeśam anusmṛtya\nprativaktuṁ pracakrame",
    "devanagari": "सूत उवाच\nइत्युपामन्त्रितो राज्ञा गुणानुकथने हरे: ।\nहृषीकेशमनुस्मृत्य प्रतिवक्तुं प्रचक्रमे ।।"
  },
  {
    "book": "SB",
    "canto": "2",
    "chapter": "4",
    "text": "12",
    "verse": "śrī-śuka uvāca\nnamaḥ parasmai puruṣāya bhūyase\nsad-udbhava-sthāna-nirodha-līlayā\ngṛhīta-śakti-tritayāya dehinām\nantarbhavāyānupalakṣya-vartmane",
    "devanagari": "श्री शुक उवाच\nनम: परस्मै पुरुषाय भूयसे\nसदुद्भवस्थाननिरोधलीलया ।\nगृहीतशक्तित्रितयाय देहिना-\nमन्तर्भवायानुपलक्ष्यवर्त्मने ।।"
  }
]