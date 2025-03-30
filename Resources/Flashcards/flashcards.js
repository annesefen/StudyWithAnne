// Cleaned version of flashcards-scripts.js for biology decks

document.addEventListener('DOMContentLoaded', () => {
    // Search Decks
    const searchBar = document.getElementById('deck-search');
    const decks = document.querySelectorAll('.deck');

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        decks.forEach(deck => {
            const deckName = deck.getAttribute('data-name').toLowerCase();
            deck.style.display = deckName.includes(query) ? 'block' : 'none';
        });
    });

    // Flashcard Data - add tags like ['#biology', '#ch1']
    const flashcardData = {
		
		'top-200' : [
		  
		{
		  "question": "Lexapro",
		  "answer": "<strong>Description:</strong> Treats depression and anxiety disorders.<br><strong>Mechanism:</strong> Inhibits serotonin reuptake to increase serotonin levels in the brain.<br><strong>Active Ingredient(s):</strong> Escitalopram<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> Depression, Generalized Anxiety Disorder (GAD)<br><strong>Side Effects:</strong> Nausea, insomnia, sexual dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
		  "tags": ["#all", "#medications", "#top200"]
		},
		{
		  "question": "Vicodin",
		  "answer": "<strong>Description:</strong> Provides relief for moderate to severe pain.<br><strong>Mechanism:</strong> Hydrocodone activates opioid receptors; acetaminophen inhibits prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Acetaminophen, Hydrocodone<br><strong>Drug Class:</strong> Analgesic/antipyretic, Opioid<br><strong>Use:</strong> Pain relief<br><strong>Side Effects:</strong> Drowsiness, constipation, nausea<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Oral",
		  "tags": ["#all", "#medications", "#top200"]
		},
		{
		  "question": "Prinivil / Qbrelis",
		  "answer": "<strong>Description:</strong> Used to treat high blood pressure and heart failure.<br><strong>Mechanism:</strong> Inhibits ACE to lower angiotensin II levels and reduce blood pressure.<br><strong>Active Ingredient(s):</strong> Lisinopril<br><strong>Drug Class:</strong> ACE inhibitor<br><strong>Use:</strong> Hypertension, Heart failure<br><strong>Side Effects:</strong> Dry cough, dizziness, hyperkalemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
		  "tags": ["#all", "#medications", "#top200"]
		},
		{
		  "question": "Zocor",
		  "answer": "<strong>Description:</strong> Lowers LDL cholesterol and reduces risk of cardiovascular events.<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase enzyme in cholesterol biosynthesis.<br><strong>Active Ingredient(s):</strong> Simvastatin<br><strong>Drug Class:</strong> Statin<br><strong>Use:</strong> Hyperlipidemia, Cardiovascular risk reduction<br><strong>Side Effects:</strong> Muscle pain, liver enzyme elevation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
		  "tags": ["#all", "#medications", "#top200"]
		},
		{
		  "question": "Synthroid",
		  "answer": "<strong>Description:</strong> Replaces deficient thyroid hormone in patients with hypothyroidism.<br><strong>Mechanism:</strong> Synthetic T4 hormone increases cellular metabolism.<br><strong>Active Ingredient(s):</strong> Levothyroxine<br><strong>Drug Class:</strong> Thyroid hormone<br><strong>Use:</strong> Hypothyroidism<br><strong>Side Effects:</strong> Palpitations, weight loss, anxiety<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
		  "tags": ["#all", "#medications", "#top200"]
		}, 
			{
  "question": "Amoxil / Trimox",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic used for various bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins.<br><strong>Active Ingredient(s):</strong> Amoxicillin<br><strong>Drug Class:</strong> Penicillin antibiotic<br><strong>Use:</strong> Ear infections, strep throat, urinary tract infections<br><strong>Side Effects:</strong> Diarrhea, rash, allergic reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zithromax",
  "answer": "<strong>Description:</strong> Used to treat a variety of bacterial infections, including respiratory and skin infections.<br><strong>Mechanism:</strong> Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.<br><strong>Active Ingredient(s):</strong> Azithromycin<br><strong>Drug Class:</strong> Macrolide antibiotic<br><strong>Use:</strong> Respiratory infections, STIs, skin infections<br><strong>Side Effects:</strong> Diarrhea, nausea, abdominal pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Microzide / Aquazide",
  "answer": "<strong>Description:</strong> Diuretic that helps lower blood pressure and reduce fluid retention.<br><strong>Mechanism:</strong> Inhibits sodium reabsorption in the distal tubules, promoting diuresis.<br><strong>Active Ingredient(s):</strong> Hydrochlorothiazide<br><strong>Drug Class:</strong> Thiazide diuretic<br><strong>Use:</strong> Hypertension, edema<br><strong>Side Effects:</strong> Dizziness, low potassium, increased urination<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Norvasc",
  "answer": "<strong>Description:</strong> Lowers blood pressure and improves blood flow.<br><strong>Mechanism:</strong> Inhibits calcium ion influx into vascular smooth muscle and myocardium.<br><strong>Active Ingredient(s):</strong> Amlodipine<br><strong>Drug Class:</strong> Calcium channel blocker<br><strong>Use:</strong> Hypertension, angina<br><strong>Side Effects:</strong> Swelling, dizziness, flushing<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Xanax",
  "answer": "<strong>Description:</strong> Provides short-term relief of anxiety and panic disorders.<br><strong>Mechanism:</strong> Enhances GABA activity at the GABA-A receptor to produce calming effects.<br><strong>Active Ingredient(s):</strong> Alprazolam<br><strong>Drug Class:</strong> Benzodiazepine<br><strong>Use:</strong> Anxiety, panic disorder<br><strong>Side Effects:</strong> Drowsiness, fatigue, dependence<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
			{
  "question": "Glucophage",
  "answer": "<strong>Description:</strong> First-line medication for type 2 diabetes to control blood sugar levels.<br><strong>Mechanism:</strong> Decreases hepatic glucose production and increases insulin sensitivity.<br><strong>Active Ingredient(s):</strong> Metformin<br><strong>Drug Class:</strong> Biguanide<br><strong>Use:</strong> Type 2 diabetes mellitus<br><strong>Side Effects:</strong> Nausea, diarrhea, lactic acidosis (rare)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lipitor",
  "answer": "<strong>Description:</strong> Reduces cholesterol and lowers risk of heart disease.<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase, decreasing cholesterol synthesis in the liver.<br><strong>Active Ingredient(s):</strong> Atorvastatin<br><strong>Drug Class:</strong> Statin<br><strong>Use:</strong> Hyperlipidemia, cardiovascular risk reduction<br><strong>Side Effects:</strong> Muscle pain, liver enzyme elevation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Prilosec",
  "answer": "<strong>Description:</strong> Relieves symptoms of GERD and acid reflux.<br><strong>Mechanism:</strong> Irreversibly inhibits the H+/K+ ATPase pump in gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Omeprazole<br><strong>Drug Class:</strong> Proton-pump inhibitor<br><strong>Use:</strong> GERD, ulcers<br><strong>Side Effects:</strong> Headache, nausea, vitamin B12 deficiency (long-term)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Cipro / Proquin",
  "answer": "<strong>Description:</strong> Treats serious bacterial infections like UTIs and respiratory infections.<br><strong>Mechanism:</strong> Inhibits bacterial DNA gyrase and topoisomerase IV, preventing replication.<br><strong>Active Ingredient(s):</strong> Ciprofloxacin<br><strong>Drug Class:</strong> Fluoroquinolone<br><strong>Use:</strong> UTIs, respiratory infections<br><strong>Side Effects:</strong> Tendon rupture, GI upset, photosensitivity<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zofran",
  "answer": "<strong>Description:</strong> Prevents and treats nausea and vomiting from various causes.<br><strong>Mechanism:</strong> Blocks serotonin (5-HT3) receptors in the central nervous system and GI tract.<br><strong>Active Ingredient(s):</strong> Ondansetron<br><strong>Drug Class:</strong> Antiemetic<br><strong>Use:</strong> Nausea and vomiting (chemo, radiation, post-op)<br><strong>Side Effects:</strong> Headache, constipation, QT prolongation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV, IM",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Clozaril",
  "answer": "<strong>Description:</strong> Treats schizophrenia when other medications have failed.<br><strong>Mechanism:</strong> Blocks dopamine and serotonin receptors in the brain.<br><strong>Active Ingredient(s):</strong> Clozapine<br><strong>Drug Class:</strong> Antipsychotic<br><strong>Use:</strong> Schizophrenia<br><strong>Side Effects:</strong> Agranulocytosis, sedation, weight gain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lasix",
  "answer": "<strong>Description:</strong> Powerful diuretic used to treat fluid retention and hypertension.<br><strong>Mechanism:</strong> Inhibits sodium and chloride reabsorption in the loop of Henle.<br><strong>Active Ingredient(s):</strong> Furosemide<br><strong>Drug Class:</strong> Loop diuretic<br><strong>Use:</strong> Edema, hypertension<br><strong>Side Effects:</strong> Dehydration, low potassium, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Levitra",
  "answer": "<strong>Description:</strong> Treats erectile dysfunction by improving blood flow.<br><strong>Mechanism:</strong> Inhibits PDE5 enzyme, enhancing nitric oxide activity in penile tissue.<br><strong>Active Ingredient(s):</strong> Vardenafil<br><strong>Drug Class:</strong> PDE5 inhibitor<br><strong>Use:</strong> Erectile dysfunction<br><strong>Side Effects:</strong> Headache, flushing, nasal congestion<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Sumycin / Ala-Tet / Brodspec",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic effective against various bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit.<br><strong>Active Ingredient(s):</strong> Tetracycline<br><strong>Drug Class:</strong> Tetracycline antibiotic<br><strong>Use:</strong> Acne, respiratory infections, STIs<br><strong>Side Effects:</strong> Photosensitivity, GI upset, tooth discoloration (in children)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Heparin Sodium",
  "answer": "<strong>Description:</strong> Prevents and treats blood clots in veins, arteries, or lungs.<br><strong>Mechanism:</strong> Activates antithrombin III, inhibiting thrombin and factor Xa.<br><strong>Active Ingredient(s):</strong> Heparin<br><strong>Drug Class:</strong> Anticoagulant<br><strong>Use:</strong> Deep vein thrombosis (DVT), pulmonary embolism, clot prevention<br><strong>Side Effects:</strong> Bleeding, low platelets (HIT)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV, Subcutaneous",
  "tags": ["#all", "#medications", "#top200"]
},
			{
  "question": "Valcyte",
  "answer": "<strong>Description:</strong> Antiviral medication used to treat CMV infections, especially in immunocompromised patients.<br><strong>Mechanism:</strong> Inhibits viral DNA polymerase, preventing viral replication.<br><strong>Active Ingredient(s):</strong> Valganciclovir<br><strong>Drug Class:</strong> Antiviral drug<br><strong>Use:</strong> Cytomegalovirus (CMV) infections<br><strong>Side Effects:</strong> Anemia, neutropenia, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lamictal",
  "answer": "<strong>Description:</strong> Used to treat epilepsy and bipolar disorder.<br><strong>Mechanism:</strong> Inhibits voltage-sensitive sodium channels, stabilizing neuronal membranes.<br><strong>Active Ingredient(s):</strong> Lamotrigine<br><strong>Drug Class:</strong> Anticonvulsant<br><strong>Use:</strong> Seizures, bipolar disorder<br><strong>Side Effects:</strong> Rash, dizziness, blurred vision<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Diflucan",
  "answer": "<strong>Description:</strong> Treats fungal infections including yeast infections.<br><strong>Mechanism:</strong> Inhibits fungal cytochrome P450 enzyme, blocking ergosterol synthesis.<br><strong>Active Ingredient(s):</strong> Fluconazole<br><strong>Drug Class:</strong> Antifungal<br><strong>Use:</strong> Candidiasis, cryptococcal meningitis<br><strong>Side Effects:</strong> Nausea, headache, liver toxicity<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Tenormin",
  "answer": "<strong>Description:</strong> Beta-blocker used to manage hypertension and angina.<br><strong>Mechanism:</strong> Blocks beta-1 receptors, reducing heart rate and cardiac output.<br><strong>Active Ingredient(s):</strong> Atenolol<br><strong>Drug Class:</strong> Beta-blocker<br><strong>Use:</strong> Hypertension, angina, post-MI<br><strong>Side Effects:</strong> Bradycardia, fatigue, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Singulair",
  "answer": "<strong>Description:</strong> Prevents asthma attacks and treats allergic rhinitis.<br><strong>Mechanism:</strong> Blocks leukotriene receptors to reduce inflammation and bronchoconstriction.<br><strong>Active Ingredient(s):</strong> Montelukast<br><strong>Drug Class:</strong> Leukotriene inhibitor<br><strong>Use:</strong> Asthma, allergic rhinitis<br><strong>Side Effects:</strong> Headache, mood changes, abdominal pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Flonase Nasal Spray",
  "answer": "<strong>Description:</strong> Treats nasal symptoms of allergies such as congestion and sneezing.<br><strong>Mechanism:</strong> Reduces inflammation by inhibiting multiple inflammatory cytokines.<br><strong>Active Ingredient(s):</strong> Fluticasone propionate<br><strong>Drug Class:</strong> Corticosteroid<br><strong>Use:</strong> Allergic rhinitis<br><strong>Side Effects:</strong> Nasal irritation, nosebleeds, sore throat<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Nasal",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zyloprim",
  "answer": "<strong>Description:</strong> Prevents gout attacks by lowering uric acid levels.<br><strong>Mechanism:</strong> Inhibits xanthine oxidase, reducing uric acid production.<br><strong>Active Ingredient(s):</strong> Allopurinol<br><strong>Drug Class:</strong> Anti-gout<br><strong>Use:</strong> Gout, kidney stones, hyperuricemia<br><strong>Side Effects:</strong> Rash, liver toxicity, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Fosamax",
  "answer": "<strong>Description:</strong> Prevents and treats osteoporosis by increasing bone mass.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Alendronate<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis, Paget’s disease<br><strong>Side Effects:</strong> GI upset, esophageal irritation, bone pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Pepcid",
  "answer": "<strong>Description:</strong> Reduces stomach acid to treat ulcers and GERD.<br><strong>Mechanism:</strong> Blocks histamine H2 receptors on gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Famotidine<br><strong>Drug Class:</strong> H2 antagonist<br><strong>Use:</strong> GERD, ulcers, acid reflux<br><strong>Side Effects:</strong> Headache, constipation, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Omnicef",
  "answer": "<strong>Description:</strong> Broad-spectrum cephalosporin antibiotic for bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis.<br><strong>Active Ingredient(s):</strong> Cefdinir<br><strong>Drug Class:</strong> Cephalosporin<br><strong>Use:</strong> Respiratory tract infections, sinusitis, skin infections<br><strong>Side Effects:</strong> Diarrhea, rash, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Yaz",
  "answer": "<strong>Description:</strong> A combination birth control pill that prevents ovulation.<br><strong>Mechanism:</strong> Suppresses ovulation and alters cervical mucus and endometrial lining.<br><strong>Active Ingredient(s):</strong> Ethinyl estradiol, Drospirenone<br><strong>Drug Class:</strong> Birth control medicine<br><strong>Use:</strong> Contraception, acne, PMDD<br><strong>Side Effects:</strong> Nausea, headache, mood changes, blood clots<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Apresoline",
  "answer": "<strong>Description:</strong> Used to lower high blood pressure.<br><strong>Mechanism:</strong> Directly relaxes arteriolar smooth muscle.<br><strong>Active Ingredient(s):</strong> Hydralazine<br><strong>Drug Class:</strong> Antihypertensive drug<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Tachycardia, headache, lupus-like syndrome<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Cogentin",
  "answer": "<strong>Description:</strong> Used to treat Parkinson’s disease and side effects of antipsychotic medications.<br><strong>Mechanism:</strong> Blocks central cholinergic receptors to restore dopamine balance.<br><strong>Active Ingredient(s):</strong> Benztropine<br><strong>Drug Class:</strong> Antiparkinsonian drug<br><strong>Use:</strong> Parkinsonism, extrapyramidal symptoms<br><strong>Side Effects:</strong> Dry mouth, blurred vision, constipation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IM, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Tussionex PennKinetic",
  "answer": "<strong>Description:</strong> Treats cough and upper respiratory symptoms.<br><strong>Mechanism:</strong> Hydrocodone acts on the cough center; chlorpheniramine blocks histamine receptors.<br><strong>Active Ingredient(s):</strong> Chlorpheniramine, Hydrocodone<br><strong>Drug Class:</strong> Antihistamine, Narcotic<br><strong>Use:</strong> Cough relief<br><strong>Side Effects:</strong> Drowsiness, constipation, dizziness<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Paxil",
  "answer": "<strong>Description:</strong> Treats depression, anxiety, and other mental health disorders.<br><strong>Mechanism:</strong> Inhibits reuptake of serotonin in the brain.<br><strong>Active Ingredient(s):</strong> Paroxetine<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> Depression, OCD, anxiety disorders<br><strong>Side Effects:</strong> Nausea, sexual dysfunction, insomnia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ativan",
  "answer": "<strong>Description:</strong> Used for anxiety relief and sedation.<br><strong>Mechanism:</strong> Enhances the effect of GABA at GABA-A receptors.<br><strong>Active Ingredient(s):</strong> Lorazepam<br><strong>Drug Class:</strong> Benzodiazepine<br><strong>Use:</strong> Anxiety, insomnia, seizures<br><strong>Side Effects:</strong> Drowsiness, dizziness, dependence<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral, IM, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Pyridium",
  "answer": "<strong>Description:</strong> Relieves urinary tract pain, burning, and discomfort.<br><strong>Mechanism:</strong> Exerts local analgesic effect on the urinary tract mucosa.<br><strong>Active Ingredient(s):</strong> Phenazopyridine<br><strong>Drug Class:</strong> Analgesic<br><strong>Use:</strong> Urinary tract discomfort<br><strong>Side Effects:</strong> Urine discoloration, stomach upset<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Plaquenil",
  "answer": "<strong>Description:</strong> Used to treat malaria and autoimmune diseases.<br><strong>Mechanism:</strong> Inhibits lysosomal activity and antigen processing.<br><strong>Active Ingredient(s):</strong> Hydroxychloroquine<br><strong>Drug Class:</strong> Anti-malarial<br><strong>Use:</strong> Malaria, lupus, rheumatoid arthritis<br><strong>Side Effects:</strong> Retinal damage, nausea, rash<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lidoderm",
  "answer": "<strong>Description:</strong> Provides topical pain relief, especially for nerve pain.<br><strong>Mechanism:</strong> Blocks sodium channels in neuronal membranes.<br><strong>Active Ingredient(s):</strong> Lidocaine<br><strong>Drug Class:</strong> Local anesthetic<br><strong>Use:</strong> Postherpetic neuralgia<br><strong>Side Effects:</strong> Skin irritation, numbness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical (patch)",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Cataflam",
  "answer": "<strong>Description:</strong> Nonsteroidal anti-inflammatory drug for pain and inflammation.<br><strong>Mechanism:</strong> Inhibits cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Diclofenac<br><strong>Drug Class:</strong> NSAID<br><strong>Use:</strong> Pain, inflammation, arthritis<br><strong>Side Effects:</strong> GI upset, increased bleeding risk<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,{
  "question": "Rayos / Deltasone",
  "answer": "<strong>Description:</strong> A corticosteroid used to treat inflammation and immune-related conditions.<br><strong>Mechanism:</strong> Suppresses inflammation and the immune response by modifying gene expression.<br><strong>Active Ingredient(s):</strong> Prednisone<br><strong>Drug Class:</strong> Corticosteroid<br><strong>Use:</strong> Allergies, asthma, autoimmune disorders<br><strong>Side Effects:</strong> Weight gain, mood changes, increased infection risk<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zetia",
  "answer": "<strong>Description:</strong> Lowers cholesterol levels by reducing intestinal absorption.<br><strong>Mechanism:</strong> Inhibits absorption of cholesterol at the small intestine brush border.<br><strong>Active Ingredient(s):</strong> Ezetimibe<br><strong>Drug Class:</strong> Antihyperlipidemic<br><strong>Use:</strong> Hyperlipidemia<br><strong>Side Effects:</strong> Diarrhea, fatigue, muscle pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Evista",
  "answer": "<strong>Description:</strong> Treats and prevents osteoporosis in postmenopausal women.<br><strong>Mechanism:</strong> Selectively modulates estrogen receptors to improve bone density.<br><strong>Active Ingredient(s):</strong> Raloxifene<br><strong>Drug Class:</strong> Estrogen modulator<br><strong>Use:</strong> Osteoporosis prevention<br><strong>Side Effects:</strong> Hot flashes, leg cramps, blood clots<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Dilantin",
  "answer": "<strong>Description:</strong> Used to prevent and control seizures.<br><strong>Mechanism:</strong> Stabilizes neuronal membranes by inhibiting sodium channels.<br><strong>Active Ingredient(s):</strong> Phenytoin<br><strong>Drug Class:</strong> Anticonvulsant<br><strong>Use:</strong> Epilepsy, seizures<br><strong>Side Effects:</strong> Gingival hyperplasia, drowsiness, ataxia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lovaza",
  "answer": "<strong>Description:</strong> Reduces triglyceride levels in the blood.<br><strong>Mechanism:</strong> Decreases hepatic triglyceride synthesis.<br><strong>Active Ingredient(s):</strong> Omega-3 fatty acids<br><strong>Drug Class:</strong> Anti-triglyceride drug<br><strong>Use:</strong> Hypertriglyceridemia<br><strong>Side Effects:</strong> Burping, fishy aftertaste, GI upset<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zanaflex",
  "answer": "<strong>Description:</strong> Treats muscle spasms and spasticity.<br><strong>Mechanism:</strong> Alpha-2 adrenergic agonist that reduces nerve signals causing muscle tightness.<br><strong>Active Ingredient(s):</strong> Tizanidine<br><strong>Drug Class:</strong> Muscle relaxant<br><strong>Use:</strong> Muscle spasticity<br><strong>Side Effects:</strong> Drowsiness, dry mouth, hypotension<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Hytrin",
  "answer": "<strong>Description:</strong> Used to treat hypertension and enlarged prostate.<br><strong>Mechanism:</strong> Blocks alpha-1 receptors, relaxing blood vessels and bladder muscles.<br><strong>Active Ingredient(s):</strong> Terazosin<br><strong>Drug Class:</strong> Alpha-1 blocker<br><strong>Use:</strong> Hypertension, BPH<br><strong>Side Effects:</strong> Dizziness, fatigue, nasal congestion<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Dyrenium",
  "answer": "<strong>Description:</strong> Helps treat fluid retention (edema) and high blood pressure.<br><strong>Mechanism:</strong> Inhibits sodium reabsorption in the distal tubules, conserving potassium.<br><strong>Active Ingredient(s):</strong> Triamterene<br><strong>Drug Class:</strong> Potassium-sparing diuretic<br><strong>Use:</strong> Edema, hypertension<br><strong>Side Effects:</strong> Hyperkalemia, nausea, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Altace",
  "answer": "<strong>Description:</strong> Lowers blood pressure and improves survival after heart attacks.<br><strong>Mechanism:</strong> Inhibits angiotensin-converting enzyme (ACE).<br><strong>Active Ingredient(s):</strong> Ramipril<br><strong>Drug Class:</strong> ACE inhibitor<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Cough, dizziness, hyperkalemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Pravachol",
  "answer": "<strong>Description:</strong> Reduces cholesterol and triglycerides in the blood.<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase, the enzyme needed for cholesterol production.<br><strong>Active Ingredient(s):</strong> Pravastatin<br><strong>Drug Class:</strong> Statin<br><strong>Use:</strong> Hyperlipidemia, cardiovascular prevention<br><strong>Side Effects:</strong> Muscle pain, headache, liver issues<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
			{
  "question": "Risperdal",
  "answer": "<strong>Description:</strong> Treats schizophrenia, bipolar disorder, and irritability in autism.<br><strong>Mechanism:</strong> Blocks dopamine D2 and serotonin 5-HT2 receptors in the brain.<br><strong>Active Ingredient(s):</strong> Risperidone<br><strong>Drug Class:</strong> Antipsychotic drug<br><strong>Use:</strong> Schizophrenia, bipolar disorder, autism-related irritability<br><strong>Side Effects:</strong> Weight gain, sedation, extrapyramidal symptoms<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lunesta",
  "answer": "<strong>Description:</strong> Helps with falling and staying asleep.<br><strong>Mechanism:</strong> Binds to GABA receptors to induce sedation.<br><strong>Active Ingredient(s):</strong> Eszopiclone<br><strong>Drug Class:</strong> Z-drug / hypnotic<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Dizziness, dry mouth, headache<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Celebrex",
  "answer": "<strong>Description:</strong> Treats pain and inflammation from arthritis.<br><strong>Mechanism:</strong> Selectively inhibits COX-2 enzyme to reduce inflammation.<br><strong>Active Ingredient(s):</strong> Celecoxib<br><strong>Drug Class:</strong> COX-inhibitor / NSAID<br><strong>Use:</strong> Osteoarthritis, rheumatoid arthritis, acute pain<br><strong>Side Effects:</strong> Stomach upset, headache, increased cardiovascular risk<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Premarin",
  "answer": "<strong>Description:</strong> Hormone replacement therapy for menopausal symptoms.<br><strong>Mechanism:</strong> Replaces estrogen in women with decreased levels.<br><strong>Active Ingredient(s):</strong> Conjugated estrogens<br><strong>Drug Class:</strong> Estrogen replacement<br><strong>Use:</strong> Menopausal symptoms, osteoporosis prevention<br><strong>Side Effects:</strong> Breast tenderness, nausea, blood clots<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, vaginal, injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Avelox",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic used to treat bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial DNA gyrase and topoisomerase IV.<br><strong>Active Ingredient(s):</strong> Moxifloxacin<br><strong>Drug Class:</strong> Fluoroquinolone<br><strong>Use:</strong> Respiratory infections, skin infections<br><strong>Side Effects:</strong> Nausea, dizziness, tendon rupture risk<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Aricept",
  "answer": "<strong>Description:</strong> Improves cognition in patients with Alzheimer’s disease.<br><strong>Mechanism:</strong> Inhibits acetylcholinesterase to increase acetylcholine in the brain.<br><strong>Active Ingredient(s):</strong> Donepezil<br><strong>Drug Class:</strong> Acetylcholinesterase inhibitor<br><strong>Use:</strong> Alzheimer’s disease<br><strong>Side Effects:</strong> Nausea, insomnia, muscle cramps<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Macrobid / Macrodantin",
  "answer": "<strong>Description:</strong> Treats urinary tract infections (UTIs).<br><strong>Mechanism:</strong> Damages bacterial DNA and inhibits vital enzymes.<br><strong>Active Ingredient(s):</strong> Nitrofurantoin<br><strong>Drug Class:</strong> Antibacterial drug<br><strong>Use:</strong> UTIs<br><strong>Side Effects:</strong> GI upset, headache, urine discoloration<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Duragesic Skin Patch",
  "answer": "<strong>Description:</strong> Provides long-term pain relief through skin absorption.<br><strong>Mechanism:</strong> Binds to opioid receptors in the CNS to block pain signals.<br><strong>Active Ingredient(s):</strong> Fentanyl<br><strong>Drug Class:</strong> Opioid narcotic<br><strong>Use:</strong> Chronic pain<br><strong>Side Effects:</strong> Respiratory depression, constipation, sedation<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Transdermal patch",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Imdur",
  "answer": "<strong>Description:</strong> Prevents chest pain (angina) by dilating blood vessels.<br><strong>Mechanism:</strong> Releases nitric oxide, causing vasodilation.<br><strong>Active Ingredient(s):</strong> Isosorbide mononitrate<br><strong>Drug Class:</strong> Nitrate<br><strong>Use:</strong> Angina prevention<br><strong>Side Effects:</strong> Headache, dizziness, hypotension<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Prozac / Sarafem",
  "answer": "<strong>Description:</strong> Treats depression, OCD, and premenstrual dysphoric disorder.<br><strong>Mechanism:</strong> Inhibits reuptake of serotonin in the brain.<br><strong>Active Ingredient(s):</strong> Fluoxetine<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> Depression, OCD, PMDD<br><strong>Side Effects:</strong> Insomnia, nausea, anxiety<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
, 
			{
  "question": "Aristocort",
  "answer": "<strong>Description:</strong> Reduces inflammation and treats various skin conditions.<br><strong>Mechanism:</strong> Modulates gene expression to reduce inflammation via glucocorticoid receptors.<br><strong>Active Ingredient(s):</strong> Triamcinolone<br><strong>Drug Class:</strong> Corticosteroid<br><strong>Use:</strong> Skin inflammation, allergic reactions<br><strong>Side Effects:</strong> Skin thinning, irritation, dryness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical, injection, oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Suboxone",
  "answer": "<strong>Description:</strong> Treats opioid dependence and prevents withdrawal symptoms.<br><strong>Mechanism:</strong> Buprenorphine is a partial opioid agonist; naloxone is an opioid antagonist that deters abuse.<br><strong>Active Ingredient(s):</strong> Buprenorphine, Naloxone<br><strong>Drug Class:</strong> Narcotic / Opioid blocker<br><strong>Use:</strong> Opioid use disorder<br><strong>Side Effects:</strong> Headache, withdrawal symptoms, insomnia<br><strong>Controlled Substance:</strong> Yes (CIII)<br><strong>Route:</strong> Sublingual",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Vyvanse",
  "answer": "<strong>Description:</strong> Treats ADHD and binge eating disorder.<br><strong>Mechanism:</strong> Prodrug converted to dextroamphetamine, which increases dopamine and norepinephrine.<br><strong>Active Ingredient(s):</strong> Lisdexamfetamine<br><strong>Drug Class:</strong> CNS Stimulant<br><strong>Use:</strong> ADHD, binge eating disorder<br><strong>Side Effects:</strong> Insomnia, anxiety, appetite loss<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Pamelor",
  "answer": "<strong>Description:</strong> Used to treat depression and certain types of chronic pain.<br><strong>Mechanism:</strong> Inhibits reuptake of norepinephrine and serotonin.<br><strong>Active Ingredient(s):</strong> Nortriptyline<br><strong>Drug Class:</strong> Tricyclic antidepressant<br><strong>Use:</strong> Depression, chronic pain<br><strong>Side Effects:</strong> Drowsiness, dry mouth, constipation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "HumaLOG",
  "answer": "<strong>Description:</strong> Rapid-acting insulin that controls blood sugar in diabetes.<br><strong>Mechanism:</strong> Stimulates peripheral glucose uptake and inhibits hepatic glucose production.<br><strong>Active Ingredient(s):</strong> Insulin lispro<br><strong>Drug Class:</strong> Rapid-acting insulin<br><strong>Use:</strong> Type 1 and 2 diabetes<br><strong>Side Effects:</strong> Hypoglycemia, injection site reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Depacon / Depakote",
  "answer": "<strong>Description:</strong> Controls seizures and treats bipolar disorder and migraines.<br><strong>Mechanism:</strong> Increases GABA levels and blocks sodium channels.<br><strong>Active Ingredient(s):</strong> Valproate sodium<br><strong>Drug Class:</strong> Anticonvulsant drug<br><strong>Use:</strong> Epilepsy, bipolar disorder, migraine prevention<br><strong>Side Effects:</strong> Liver toxicity, weight gain, tremor<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "BetaSept / ChloraPrep",
  "answer": "<strong>Description:</strong> Used to disinfect skin before surgery or injections.<br><strong>Mechanism:</strong> Disrupts microbial cell membranes and precipitates cellular contents.<br><strong>Active Ingredient(s):</strong> Chlorhexidine<br><strong>Drug Class:</strong> Disinfectant / Antiseptic<br><strong>Use:</strong> Skin disinfection<br><strong>Side Effects:</strong> Skin irritation, allergic reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Bentyl",
  "answer": "<strong>Description:</strong> Treats irritable bowel syndrome (IBS) by reducing muscle spasms.<br><strong>Mechanism:</strong> Blocks acetylcholine on smooth muscle.<br><strong>Active Ingredient(s):</strong> Dicyclomine<br><strong>Drug Class:</strong> Anti-spasmodic drug<br><strong>Use:</strong> Irritable bowel syndrome<br><strong>Side Effects:</strong> Dry mouth, dizziness, blurred vision<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Imitrex",
  "answer": "<strong>Description:</strong> Relieves migraine headaches.<br><strong>Mechanism:</strong> Stimulates serotonin (5-HT1) receptors to constrict blood vessels.<br><strong>Active Ingredient(s):</strong> Sumatriptan<br><strong>Drug Class:</strong> Anti-migraine drug<br><strong>Use:</strong> Acute migraine<br><strong>Side Effects:</strong> Tingling, chest tightness, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, injection, nasal spray",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Protonix",
  "answer": "<strong>Description:</strong> Reduces stomach acid to treat GERD and ulcers.<br><strong>Mechanism:</strong> Inhibits H+/K+ ATPase enzyme in gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Pantoprazole<br><strong>Drug Class:</strong> Proton-pump inhibitor<br><strong>Use:</strong> GERD, erosive esophagitis<br><strong>Side Effects:</strong> Headache, diarrhea, abdominal pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Lopressor",
  "answer": "<strong>Description:</strong> Lowers blood pressure and heart rate.<br><strong>Mechanism:</strong> Selectively blocks beta-1 adrenergic receptors.<br><strong>Active Ingredient(s):</strong> Metoprolol<br><strong>Drug Class:</strong> Beta-blocker<br><strong>Use:</strong> Hypertension, angina, heart failure<br><strong>Side Effects:</strong> Fatigue, dizziness, bradycardia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Robitussin",
  "answer": "<strong>Description:</strong> Relieves cough and loosens mucus.<br><strong>Mechanism:</strong> Dextromethorphan suppresses cough reflex; guaifenesin thins mucus.<br><strong>Active Ingredient(s):</strong> Dextromethorphan, Guaifenesin<br><strong>Drug Class:</strong> Antitussive, Expectorant<br><strong>Use:</strong> Cough, chest congestion<br><strong>Side Effects:</strong> Drowsiness, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral (liquid, tablets)",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Valium",
  "answer": "<strong>Description:</strong> Treats anxiety, seizures, and muscle spasms.<br><strong>Mechanism:</strong> Enhances GABA activity at the GABA-A receptor.<br><strong>Active Ingredient(s):</strong> Diazepam<br><strong>Drug Class:</strong> Benzodiazepine<br><strong>Use:</strong> Anxiety, muscle spasms, seizures<br><strong>Side Effects:</strong> Drowsiness, dependence, dizziness<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral, IV, rectal",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Viagra",
  "answer": "<strong>Description:</strong> Treats erectile dysfunction (ED).<br><strong>Mechanism:</strong> Inhibits PDE5, increasing cGMP and blood flow to the penis.<br><strong>Active Ingredient(s):</strong> Sildenafil<br><strong>Drug Class:</strong> PDE5 inhibitor<br><strong>Use:</strong> Erectile dysfunction<br><strong>Side Effects:</strong> Headache, flushing, vision changes<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Bactroban",
  "answer": "<strong>Description:</strong> Treats skin infections such as impetigo.<br><strong>Mechanism:</strong> Inhibits bacterial isoleucyl tRNA synthetase.<br><strong>Active Ingredient(s):</strong> Mupirocin<br><strong>Drug Class:</strong> Antibacterial drug<br><strong>Use:</strong> Impetigo, skin infections<br><strong>Side Effects:</strong> Burning, stinging, itching<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Januvia",
  "answer": "<strong>Description:</strong> Lowers blood sugar in type 2 diabetes.<br><strong>Mechanism:</strong> Inhibits DPP-4 enzyme, increasing incretin levels.<br><strong>Active Ingredient(s):</strong> Sitagliptin<br><strong>Drug Class:</strong> Antidiabetic drug<br><strong>Use:</strong> Type 2 diabetes<br><strong>Side Effects:</strong> Headache, upper respiratory infection<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Reglan",
  "answer": "<strong>Description:</strong> Treats nausea, vomiting, and gastroparesis.<br><strong>Mechanism:</strong> Dopamine antagonist that enhances GI motility.<br><strong>Active Ingredient(s):</strong> Metoclopramide<br><strong>Drug Class:</strong> Dopamine antagonist<br><strong>Use:</strong> GERD, nausea, gastroparesis<br><strong>Side Effects:</strong> Drowsiness, restlessness, tardive dyskinesia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV, IM",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Relafen",
  "answer": "<strong>Description:</strong> Reduces inflammation and pain in arthritis.<br><strong>Mechanism:</strong> Inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Nabumetone<br><strong>Drug Class:</strong> NSAID<br><strong>Use:</strong> Osteoarthritis, rheumatoid arthritis<br><strong>Side Effects:</strong> GI upset, headache, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Keflex",
  "answer": "<strong>Description:</strong> Treats a wide range of bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis.<br><strong>Active Ingredient(s):</strong> Cephalexin<br><strong>Drug Class:</strong> Cephalosporin<br><strong>Use:</strong> Respiratory tract, skin, bone, and urinary tract infections<br><strong>Side Effects:</strong> Diarrhea, nausea, rash<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Effexor",
  "answer": "<strong>Description:</strong> Treats major depression, anxiety, and panic disorder.<br><strong>Mechanism:</strong> Inhibits reuptake of serotonin and norepinephrine (SNRI).<br><strong>Active Ingredient(s):</strong> Venlafaxine<br><strong>Drug Class:</strong> SNRI<br><strong>Use:</strong> Depression, anxiety disorders<br><strong>Side Effects:</strong> Nausea, dry mouth, increased blood pressure<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Boniva",
  "answer": "<strong>Description:</strong> Prevents and treats osteoporosis in postmenopausal women.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Ibandronate<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis<br><strong>Side Effects:</strong> Bone pain, GI upset, esophageal irritation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zantac",
  "answer": "<strong>Description:</strong> Relieves and prevents heartburn and ulcers.<br><strong>Mechanism:</strong> Blocks H2 receptors in stomach lining to reduce acid.<br><strong>Active Ingredient(s):</strong> Ranitidine<br><strong>Drug Class:</strong> H2 antagonist<br><strong>Use:</strong> GERD, ulcers<br><strong>Side Effects:</strong> Headache, constipation, diarrhea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ex-Lax / Senna Lax",
  "answer": "<strong>Description:</strong> Stimulates bowel movement for constipation relief.<br><strong>Mechanism:</strong> Stimulates peristalsis by irritating bowel tissues.<br><strong>Active Ingredient(s):</strong> Senna<br><strong>Drug Class:</strong> Laxative<br><strong>Use:</strong> Constipation<br><strong>Side Effects:</strong> Abdominal cramps, diarrhea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "NovoLog",
  "answer": "<strong>Description:</strong> Rapid-acting insulin for blood sugar control.<br><strong>Mechanism:</strong> Mimics natural insulin to promote glucose uptake.<br><strong>Active Ingredient(s):</strong> Insulin aspart<br><strong>Drug Class:</strong> Rapid-acting insulin<br><strong>Use:</strong> Diabetes mellitus<br><strong>Side Effects:</strong> Hypoglycemia, weight gain, injection site reaction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Bayer / Ecotrin / Bufferin",
  "answer": "<strong>Description:</strong> Reduces pain, fever, and inflammation; prevents blood clots.<br><strong>Mechanism:</strong> Inhibits cyclooxygenase (COX), reducing prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Aspirin<br><strong>Drug Class:</strong> Analgesic, Antipyretic, Antiplatelet<br><strong>Use:</strong> Pain, fever, heart attack and stroke prevention<br><strong>Side Effects:</strong> GI bleeding, ulcers, tinnitus<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lioresal",
  "answer": "<strong>Description:</strong> Treats muscle spasticity.<br><strong>Mechanism:</strong> Activates GABA-B receptors to inhibit spinal reflexes.<br><strong>Active Ingredient(s):</strong> Baclofen<br><strong>Drug Class:</strong> Muscle relaxant<br><strong>Use:</strong> Spasticity from MS or spinal cord injury<br><strong>Side Effects:</strong> Drowsiness, weakness, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, intrathecal",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Flagyl",
  "answer": "<strong>Description:</strong> Treats bacterial and protozoal infections.<br><strong>Mechanism:</strong> Disrupts DNA synthesis in microbes.<br><strong>Active Ingredient(s):</strong> Metronidazole<br><strong>Drug Class:</strong> Antibacterial, Antiprotozoal<br><strong>Use:</strong> Bacterial vaginosis, trichomoniasis, C. diff<br><strong>Side Effects:</strong> Metallic taste, nausea, disulfiram-like reaction with alcohol<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV, topical, vaginal",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Keppra",
  "answer": "<strong>Description:</strong> Controls seizures in epilepsy.<br><strong>Mechanism:</strong> Modulates neurotransmitter release by binding to SV2A protein.<br><strong>Active Ingredient(s):</strong> Levetiracetam<br><strong>Drug Class:</strong> Anticonvulsant<br><strong>Use:</strong> Partial-onset, tonic-clonic, myoclonic seizures<br><strong>Side Effects:</strong> Fatigue, dizziness, mood changes<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Colcrys / Mitigare",
  "answer": "<strong>Description:</strong> Prevents and treats gout attacks.<br><strong>Mechanism:</strong> Inhibits microtubule polymerization and neutrophil activity.<br><strong>Active Ingredient(s):</strong> Colchicine<br><strong>Drug Class:</strong> Anti-gout drug<br><strong>Use:</strong> Gout, familial Mediterranean fever<br><strong>Side Effects:</strong> Diarrhea, nausea, abdominal pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zyprexa",
  "answer": "<strong>Description:</strong> Treats schizophrenia and bipolar disorder.<br><strong>Mechanism:</strong> Blocks dopamine and serotonin receptors.<br><strong>Active Ingredient(s):</strong> Olanzapine<br><strong>Drug Class:</strong> Antipsychotic<br><strong>Use:</strong> Schizophrenia, bipolar disorder<br><strong>Side Effects:</strong> Weight gain, drowsiness, metabolic syndrome<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IM",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Avodart",
  "answer": "<strong>Description:</strong> Treats symptoms of benign prostatic hyperplasia (BPH).<br><strong>Mechanism:</strong> Inhibits 5-alpha reductase, preventing conversion of testosterone to DHT.<br><strong>Active Ingredient(s):</strong> Dutasteride<br><strong>Drug Class:</strong> 5-alpha reductase inhibitor<br><strong>Use:</strong> BPH<br><strong>Side Effects:</strong> Decreased libido, impotence, breast tenderness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "TriCor / Antara",
  "answer": "<strong>Description:</strong> Lowers triglycerides and increases HDL.<br><strong>Mechanism:</strong> Activates PPAR-alpha to reduce triglyceride synthesis.<br><strong>Active Ingredient(s):</strong> Fenofibrate<br><strong>Drug Class:</strong> Fibrate<br><strong>Use:</strong> Hypertriglyceridemia, hypercholesterolemia<br><strong>Side Effects:</strong> Muscle pain, liver dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Cardura",
  "answer": "<strong>Description:</strong> Treats high blood pressure and symptoms of BPH.<br><strong>Mechanism:</strong> Blocks alpha-1 adrenergic receptors, causing vasodilation.<br><strong>Active Ingredient(s):</strong> Doxazosin<br><strong>Drug Class:</strong> Alpha-1 blocker<br><strong>Use:</strong> Hypertension, BPH<br><strong>Side Effects:</strong> Dizziness, fatigue, hypotension<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Aleve",
  "answer": "<strong>Description:</strong> Reduces pain, inflammation, and fever.<br><strong>Mechanism:</strong> Inhibits COX enzymes, decreasing prostaglandin production.<br><strong>Active Ingredient(s):</strong> Naproxen<br><strong>Drug Class:</strong> NSAID<br><strong>Use:</strong> Pain, inflammation, arthritis<br><strong>Side Effects:</strong> GI upset, ulcers, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Aldactone",
  "answer": "<strong>Description:</strong> Treats hypertension and fluid retention.<br><strong>Mechanism:</strong> Antagonizes aldosterone at distal renal tubules.<br><strong>Active Ingredient(s):</strong> Spironolactone<br><strong>Drug Class:</strong> Potassium-sparing diuretic<br><strong>Use:</strong> Hypertension, heart failure, edema<br><strong>Side Effects:</strong> Hyperkalemia, gynecomastia, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Namenda",
  "answer": "<strong>Description:</strong> Treats moderate to severe Alzheimer's disease.<br><strong>Mechanism:</strong> Blocks NMDA receptors to reduce glutamate activity.<br><strong>Active Ingredient(s):</strong> Memantine<br><strong>Drug Class:</strong> NMDA antagonist<br><strong>Use:</strong> Alzheimer's dementia<br><strong>Side Effects:</strong> Dizziness, confusion, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Methadose",
  "answer": "<strong>Description:</strong> Used for chronic pain or opioid dependence treatment.<br><strong>Mechanism:</strong> Binds to opioid receptors and blocks withdrawal symptoms.<br><strong>Active Ingredient(s):</strong> Methadone<br><strong>Drug Class:</strong> Opioid analgesic<br><strong>Use:</strong> Pain, opioid dependence<br><strong>Side Effects:</strong> Respiratory depression, sedation, constipation<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Vasotec / Epaned",
  "answer": "<strong>Description:</strong> Lowers blood pressure and protects kidneys in diabetic patients.<br><strong>Mechanism:</strong> Inhibits ACE enzyme, lowering angiotensin II levels.<br><strong>Active Ingredient(s):</strong> Enalapril<br><strong>Drug Class:</strong> ACE inhibitor<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Cough, dizziness, hyperkalemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Tamiflu",
  "answer": "<strong>Description:</strong> Treats and prevents influenza virus infection.<br><strong>Mechanism:</strong> Inhibits neuraminidase, preventing viral replication.<br><strong>Active Ingredient(s):</strong> Oseltamivir<br><strong>Drug Class:</strong> Antiviral drug<br><strong>Use:</strong> Influenza A and B<br><strong>Side Effects:</strong> Nausea, vomiting, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Requip",
  "answer": "<strong>Description:</strong> Treats Parkinson’s disease and restless legs syndrome.<br><strong>Mechanism:</strong> Dopamine agonist that stimulates dopamine receptors.<br><strong>Active Ingredient(s):</strong> Ropinirole<br><strong>Drug Class:</strong> Antiparkinsonian drug<br><strong>Use:</strong> Parkinson’s, restless legs syndrome<br><strong>Side Effects:</strong> Drowsiness, nausea, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			
			

			]

	}
	
    // Modal Elements
    const modal = document.getElementById('flashcard-modal');
    const modalClose = modal.querySelector('.close-btn');
    const flashcardElement = modal.querySelector('.flashcard');
    const flashcardFront = modal.querySelector('.front p');
    const flashcardBack = modal.querySelector('.back p');
    const prevCardBtn = document.getElementById('prev-card');
    const nextCardBtn = document.getElementById('next-card');
    const shuffleBtn = document.getElementById('shuffle-deck');

	const gotItBtn = document.getElementById('got-it-btn');
let completedCards = JSON.parse(localStorage.getItem("completedCards")) || [];

    let currentDeck = [];
    let currentCardIndex = 0;
    let isFlipped = false;

    // Load Flashcard
function loadCard() {
    if (!currentDeck.length) return;

    // Skip over any cards marked as completed
    let attempts = 0;
    while (completedCards.includes(currentDeck[currentCardIndex].question) && attempts < currentDeck.length) {
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
        attempts++;
    }

    const card = currentDeck[currentCardIndex];
    flashcardFront.textContent = card.question;
    flashcardBack.innerHTML = card.answer;
    isFlipped = false;
    flashcardElement.classList.remove('flipped');
}


    // Open Deck
    document.querySelectorAll('.view-deck-btn').forEach(button => {
        button.addEventListener('click', () => {
            const deckName = button.getAttribute('data-deck');
            currentDeck = flashcardData[deckName] || [];
            currentCardIndex = 0;
            loadCard();
            modal.classList.remove('hidden');
        });
    });

    // Modal Controls
    modalClose.addEventListener('click', () => modal.classList.add('hidden'));

    flashcardElement.addEventListener('click', () => {
        isFlipped = !isFlipped;
        flashcardElement.classList.toggle('flipped', isFlipped);
    });

    prevCardBtn.addEventListener('click', () => {
        if (!currentDeck.length) return;
        currentCardIndex = (currentCardIndex - 1 + currentDeck.length) % currentDeck.length;
        loadCard();
    });

    nextCardBtn.addEventListener('click', () => {
        if (!currentDeck.length) return;
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
        loadCard();
    });

    shuffleBtn.addEventListener('click', () => {
        if (!currentDeck.length) return;
        currentDeck = [...currentDeck].sort(() => Math.random() - 0.5);
        currentCardIndex = 0;
        loadCard();
    });
	    // ✅ Got It Button logic
    gotItBtn.addEventListener('click', () => {
        const card = currentDeck[currentCardIndex];
        const id = card.question;

        if (!completedCards.includes(id)) {
            completedCards.push(id);
            localStorage.setItem("completedCards", JSON.stringify(completedCards));
        }

        // Move to the next card
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
        loadCard();
    });
    // 🔄 Reset function
    window.resetProgress = function () {
        localStorage.removeItem("completedCards");
        location.reload();
    };

	
});
