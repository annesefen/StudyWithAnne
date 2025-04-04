// flashcards-test.js - Isolated test version of your flashcard system

document.addEventListener('DOMContentLoaded', () => {
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
    const flashcardData = {		'biology': [
			  {
				"question": "Prokaryotic Organelles",
				"answer": "<strong>Capsule:</strong> Layer of carbohydrates that surrounds the cell wall of some bacteria and helps them attach to surfaces.<br><strong>Cell wall:</strong> Consists of peptidoglycans that give the cell structure and protection.<br><strong>Cell membrane:</strong> Also known as the plasma membrane, which encloses the cytoplasm and separates the cell from the environment.<br><strong>Cytoplasm:</strong> Region enclosed by the cell membrane.<br><strong>Nucleoid:</strong> Region that contains DNA.<br><strong>Plasmids:</strong> Independently reproducing DNA.<br><strong>Ribosome:</strong> Performs protein synthesis.<br><strong>Flagella:</strong> Thin, tail-like structures that aid movement.<br><strong>Pili:</strong> Short, rod-shaped structures involved in attachment to surfaces and DNA transfer.<br><strong>Fimbriae:</strong> Thin, hair-like structures used for attachment.<br><strong>Vesicles:</strong> Sacs released by the membrane that perform a variety of functions.<br><strong>Vacuoles:</strong> Storage sacs found in some bacterial cells.<br><br><img src='Images_Flash/Prokaryotic-Cell-Diagram-768x709.jpg' alt='Prokaryotic Cell Diagram'>",
				"tags": ["#all", "#biology", "#lecture1"]
			  }, 
		{
		  "question": "Eukaryotic Cell Structure",
		  "answer": "<strong>Nucleus:</strong> Control center of the cell that contains DNA.<br><strong>Nucleolis:</strong>Produces and assembles ribosomal RNA (rRNA) and combines it with proteins to form ribosome subunits. <br><strong>Cell membrane:</strong> Outer boundary that controls what enters and leaves the cell.<br><strong>Cytoplasm:</strong> Jelly-like fluid that holds organelles.<br><strong>Mitochondria:</strong> Produces energy (ATP) through cellular respiration.<br><strong>Ribosome:</strong> Makes proteins; can be free-floating or attached to rough ER.<br><strong>Rough ER:</strong> Makes and processes proteins; has ribosomes on its surface.<br><strong>Smooth ER:</strong> Makes lipids and detoxifies harmful substances.<br><strong>Golgi apparatus:</strong> Sorts, modifies, and packages proteins and lipids for transport.<br><strong>Lysosome:</strong> Contains enzymes that break down waste and cell debris.<br><strong>Vacuole:</strong> Stores water, nutrients, and waste; large in plant cells.<br><strong>Cytoskeleton:</strong> Provides structure and helps with movement.<br><strong>Centrioles:</strong> Help with cell division in animal cells.<br><strong>Chloroplast:</strong> (Plants only) Uses sunlight to make food through photosynthesis.<br><strong>Cell wall:</strong> (Plants only) Rigid outer layer that gives structure and support.<br> <img src = 'Images_Flash/Eukaryotic-Cell-Diagram-768x610.jpg' alt = 'Eukaryotic Cell Diagram'>",
		  "tags": ["#all", "#biology", "#lecture1"]
		}, 
				  {
					"question": "What is the primary structural difference between prokaryotic and eukaryotic cells?",
					"answer": "Prokaryotic cells lack a membrane-bound nucleus and organelles. Eukaryotic cells have both.",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "Which cell types contain circular DNA and which contain linear DNA?",
					"answer": "Prokaryotes typically have circular DNA; eukaryotes have linear chromosomes wrapped around histone proteins.",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "Where does transcription and translation occur in prokaryotes?",
					"answer": "Both occur in the cytoplasm and are often coupled (happen simultaneously).",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "Which organelles are membrane-bound and found only in eukaryotes?",
					"answer": "Examples include nucleus, mitochondria, chloroplasts, Golgi apparatus, ER, lysosomes, and peroxisomes.",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "What structures are involved in movement in both prokaryotic and eukaryotic cells?",
					"answer": "Both may have flagella, but prokaryotic flagella are made of flagellin, while eukaryotic flagella are made of microtubules (9+2 arrangement).",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "Compare ribosomes in prokaryotic vs. eukaryotic cells.",
					"answer": "Prokaryotic ribosomes are 70S (50S + 30S), eukaryotic ribosomes are 80S (60S + 40S).",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "What kind of organisms are classified as prokaryotic?",
					"answer": "Bacteria and Archaea.",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "What kind of organisms are made of eukaryotic cells?",
					"answer": "Protists, fungi, plants, and animals (including humans).",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
				  {
					"question": "What type of cell division do prokaryotes use?",
					"answer": "Binary fission.",
					"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
				  },
  {
	"question": "What types of reproduction are used by eukaryotic cells?",
	"answer": "Asexual (mitosis) and sexual (meiosis).",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "Do prokaryotic cells contain histone proteins?",
	"answer": "No, they usually lack histones (except some archaea). Eukaryotic DNA is wrapped around histones.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "What does the presence of mitochondria indicate about a cell?",
	"answer": "It is eukaryotic. Prokaryotic cells do not have mitochondria.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "Which type of cell has greater internal complexity and why?",
	"answer": "Eukaryotic cells, due to the presence of membrane-bound organelles and compartmentalized functions.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "What evidence supports that mitochondria and chloroplasts evolved from prokaryotes?",
	"answer": "They have their own circular DNA, reproduce independently, and have prokaryote-like ribosomes (endosymbiotic theory).",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "Do both cell types have vesicles and vacuoles?",
	"answer": "Yes, both have membrane sacs for transport and storage, although they are more developed in eukaryotes.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "How does cell size compare between prokaryotes and eukaryotes?",
	"answer": "Prokaryotes are smaller (~1–5 µm), eukaryotes are larger (~10–100 µm).",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "Do all eukaryotic cells have cell walls?",
	"answer": "No. Plant and fungi cells do, but animal cells do not.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "How do prokaryotic and eukaryotic cells differ in chromosome structure?",
	"answer": "Prokaryotes usually have a single circular chromosome; eukaryotes have multiple linear chromosomes.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  },
  {
	"question": "What is the role of the nucleoid in a prokaryotic cell?",
	"answer": "It contains the cell's genetic material in a non-membrane-bound region.",
	"tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
  }, 
  {
    "question": "What does the term 'prokaryote' mean?",
    "answer": "It means 'before nucleus'; prokaryotic cells lack a membrane-bound nucleus.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the main defining feature of eukaryotic cells?",
    "answer": "They contain a true nucleus and membrane-bound organelles.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What are examples of prokaryotic organisms?",
    "answer": "Bacteria and Archaea.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What are examples of eukaryotic organisms?",
    "answer": "Protists, fungi, plants, and animals.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the size range of prokaryotic cells?",
    "answer": "Approximately 1–5 micrometers.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the size range of eukaryotic cells?",
    "answer": "Approximately 10–100 micrometers.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the shape of DNA in prokaryotes?",
    "answer": "Usually circular, located in the nucleoid region.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What type of chromosomes do eukaryotes have?",
    "answer": "Linear chromosomes associated with histone proteins.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Where do transcription and translation occur in prokaryotes?",
    "answer": "Both happen in the cytoplasm and are often coupled.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Where does RNA synthesis occur in eukaryotes?",
    "answer": "In the nucleus; translation occurs in the cytoplasm.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What size ribosomes are found in prokaryotes?",
    "answer": "70S ribosomes (50S + 30S subunits).",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What size ribosomes are found in eukaryotes?",
    "answer": "80S ribosomes (60S + 40S subunits).",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "How do prokaryotic cells divide?",
    "answer": "Through binary fission.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "How do eukaryotic cells divide?",
    "answer": "Through mitosis and meiosis.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "How are prokaryotic and eukaryotic membranes different?",
    "answer": "Prokaryotes only have a plasma membrane; eukaryotes also have internal membrane-bound organelles.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What types of cellular organization are found in prokaryotes?",
    "answer": "Mostly unicellular; some form colonies.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What types of organization are found in eukaryotes?",
    "answer": "Unicellular, colonial, or multicellular.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What structures do prokaryotes use for movement?",
    "answer": "Flagella made of flagellin.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What structures do eukaryotes use for movement?",
    "answer": "Flagella (microtubules), cilia, lamellipodia, and filopodia.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Do prokaryotes have mitochondria or chloroplasts?",
    "answer": "No, they do not have membrane-bound organelles.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Do eukaryotic cells have mitochondria and chloroplasts?",
    "answer": "Yes; mitochondria are found in nearly all, chloroplasts in plants and algae.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the function of the capsule in some prokaryotes?",
    "answer": "It helps with surface attachment and protects against desiccation and immune defenses.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the difference between pili and fimbriae in prokaryotic cells?",
    "answer": "Pili assist in DNA transfer; fimbriae help in attachment to surfaces.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What role do vesicles and vacuoles play in both cell types?",
    "answer": "They store and transport substances inside the cell.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What are plasmids and which cells have them?",
    "answer": "Plasmids are small, circular DNA found in prokaryotes; they carry extra genes.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Which type of chromosome is haploid and which is diploid?",
    "answer": "Prokaryotes usually have a single haploid (n) chromosome; eukaryotes often have diploid (2n) chromosomes.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the endosymbiotic theory?",
    "answer": "It suggests that mitochondria and chloroplasts evolved from prokaryotes engulfed by ancestral eukaryotic cells.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "What are key similarities between prokaryotic and eukaryotic cells?",
    "answer": "Both have DNA, ribosomes, cytoplasm, vesicles, vacuoles, and a cell membrane.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "How are prokaryotic and eukaryotic cell walls different?",
    "answer": "Prokaryotic cell walls contain peptidoglycan; eukaryotic plant/fungi cell walls are made of cellulose or chitin and are simpler.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Which type of reproduction is more common in eukaryotes?",
    "answer": "Sexual reproduction (meiosis).",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Which came first: prokaryotes or eukaryotes?",
    "answer": "Prokaryotes. They appeared over 3.5 billion years ago and gave rise to eukaryotes.",
    "tags": ["#biology", "#APBio", "#lecture1"]
  },
  {
    "question": "Eukaryotic cells contain membrane-bound organelles that are absent in prokaryotic cells. A. Explain how compartmentalization gives eukaryotic cells a functional advantage over prokaryotic cells. B. Identify one specific eukaryotic organelle and describe its role in compartmentalized function. C. Discuss how the absence of compartmentalization in prokaryotes affects their metabolic efficiency and flexibility.",
    "answer": "<strong>A:</strong> Compartmentalization allows eukaryotic cells to separate incompatible chemical reactions into different organelles. This spatial separation increases efficiency and allows cells to specialize in complex functions.<br><strong>B:</strong> The mitochondrion is a membrane-bound organelle that carries out aerobic respiration. It produces ATP by creating a proton gradient across its inner membrane, an environment that wouldn't exist without compartmentalization.<br><strong>C:</strong> Without internal membranes, prokaryotes rely on the cytoplasm for all reactions. While this allows for rapid gene expression, it limits the cell's ability to isolate and regulate processes, reducing complexity and efficiency.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Cellular structures reflect both function and evolutionary history. A. Describe one structural feature unique to prokaryotic cells and explain its function. B. Describe one structural feature unique to eukaryotic cells and explain its function. C. Use the endosymbiotic theory to explain how mitochondria and chloroplasts support the evolutionary transition from prokaryotes to eukaryotes.",
    "answer": "<strong>A:</strong> Prokaryotes have a nucleoid region instead of a nucleus. It contains their circular DNA and allows fast gene expression since transcription and translation are coupled.<br><strong>B:</strong> Eukaryotic cells have a nucleus with a double membrane that protects DNA and separates transcription from translation, enabling more regulation of gene expression.<br><strong>C:</strong> The endosymbiotic theory suggests mitochondria and chloroplasts originated from free-living prokaryotes engulfed by an ancestral cell. These organelles have circular DNA, prokaryotic ribosomes, and divide independently - evidence of their evolutionary past.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Both prokaryotic and eukaryotic cells carry and express genetic material, but their systems differ. A. Compare the organization of DNA in prokaryotic and eukaryotic cells. B. Explain how transcription and translation differ in location and coordination between the two cell types. C. Discuss the evolutionary significance of histone-associated linear chromosomes in eukaryotic cells.",
    "answer": "<strong>A:</strong> Prokaryotes typically have a single circular chromosome in the cytoplasm. Eukaryotes have multiple linear chromosomes enclosed in the nucleus.<br><strong>B:</strong> In prokaryotes, transcription and translation occur simultaneously in the cytoplasm. In eukaryotes, transcription occurs in the nucleus and translation occurs in the cytoplasm, allowing greater control over gene regulation.<br><strong>C:</strong> The association of eukaryotic DNA with histones helps organize and compact large genomes. It also allows for gene regulation through chromatin remodeling, supporting cellular differentiation and complexity in multicellular organisms.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Prokaryotic and eukaryotic cells reproduce using different mechanisms. A. Describe how binary fission differs from mitosis. B. Explain how the simpler division process in prokaryotes affects their evolutionary adaptability. C. Contrast how sexual reproduction in eukaryotes contributes to genetic diversity, while prokaryotes rely on horizontal gene transfer.",
    "answer": "<strong>A:</strong> Binary fission is a simpler, asexual process where a prokaryotic cell duplicates its DNA and splits into two identical cells. Mitosis in eukaryotes involves multiple phases and ensures even chromosome distribution.<br><strong>B:</strong> The simplicity of binary fission allows prokaryotes to reproduce rapidly, enabling fast adaptation through high mutation rates and selection.<br><strong>C:</strong> Eukaryotes generate genetic diversity through meiosis and recombination. Prokaryotes rely on horizontal gene transfer (conjugation, transformation, transduction) to introduce genetic variation without sexual reproduction.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Cell type plays a key role in an organism’s overall structure and complexity. A. Compare the organizational potential (unicellular vs. multicellular) of prokaryotic and eukaryotic organisms. B. Explain how compartmentalization supports the development of multicellularity in eukaryotes. C. Provide an example of a multicellular eukaryotic function that could not occur in a prokaryotic cell and justify why.",
    "answer": "<strong>A:</strong> Prokaryotes are mostly unicellular, sometimes forming colonies. Eukaryotes can be unicellular, but many are multicellular with specialized tissues.<br><strong>B:</strong> Compartmentalization allows eukaryotic cells to specialize and perform distinct functions, which is essential for tissue differentiation and multicellular organization.<br><strong>C:</strong> Nerve impulse transmission requires specialized cells (neurons) with complex ion channels and organelles. Prokaryotes lack the internal structure to support such high-speed, compartmentalized signaling.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  }, 
  {
    "question": "Compare and contrast the structure and chemical composition of the cell walls in prokaryotic and eukaryotic cells. A. Identify the primary chemical components of bacterial cell walls and plant cell walls. B. Explain how differences in cell wall composition affect the function of these cells. C. Discuss how cell wall composition in archaea differs from both bacteria and eukaryotes.",
    "answer": "<strong>A:</strong> Bacterial cell walls are made of peptidoglycan. Plant cell walls are made of cellulose. Fungal walls (eukaryotic) are made of chitin.<br><strong>B:</strong> Peptidoglycan provides strength and protection in harsh environments, while cellulose supports rigidity and structure in plant tissue. Fungal chitin offers structural protection.<br><strong>C:</strong> Archaeal cell walls lack peptidoglycan. Instead, they may contain pseudopeptidoglycan or protein-based S-layers, allowing them to survive extreme environments.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Gene expression is essential to all cells. A. Explain how the coupling of transcription and translation in prokaryotes impacts gene expression speed. B. Contrast this with eukaryotic gene expression and its level of regulation. C. Describe one benefit and one drawback of each system.",
    "answer": "<strong>A:</strong> In prokaryotes, transcription and translation occur simultaneously in the cytoplasm, enabling rapid protein production.<br><strong>B:</strong> In eukaryotes, transcription occurs in the nucleus and translation in the cytoplasm, allowing for regulatory steps such as RNA splicing and capping.<br><strong>C:</strong> Prokaryotic speed supports fast adaptation but limits control. Eukaryotic regulation allows gene fine-tuning but slows expression and response time.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Despite differences, prokaryotic and eukaryotic cells share some features. A. Identify three structures found in both cell types and describe their function. B. Explain how their shared features support the idea of common ancestry. C. Discuss one structural feature that evolved only in eukaryotes and how it enabled cellular complexity.",
    "answer": "<strong>A:</strong> Both cell types have DNA (stores genetic info), ribosomes (build proteins), and plasma membranes (control transport).<br><strong>B:</strong> Shared structures suggest a common ancestor that had these fundamental cellular components.<br><strong>C:</strong> The nucleus evolved in eukaryotes, enabling separation of transcription and translation, which allows complex gene regulation and supports multicellularity.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Energy generation is essential for cell survival. A. Compare ATP production in prokaryotes and eukaryotes. B. Explain how the lack of mitochondria in prokaryotes influences where respiration occurs. C. Justify how eukaryotic organelles contribute to efficient energy metabolism.",
    "answer": "<strong>A:</strong> Both produce ATP, but eukaryotes use mitochondria for aerobic respiration, while prokaryotes rely on their plasma membrane.<br><strong>B:</strong> In prokaryotes, the electron transport chain is embedded in the inner cell membrane.<br><strong>C:</strong> Mitochondria create an internal environment ideal for efficient ATP production, enhancing energy yield per glucose molecule.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Prokaryotes and eukaryotes differ in complexity and evolutionary history. A. State one reason prokaryotes are considered more ancient than eukaryotes. B. Explain how structural simplicity benefits prokaryotes. C. Discuss how complexity allows eukaryotic cells to perform specialized functions.",
    "answer": "<strong>A:</strong> Prokaryotes appear in the fossil record ~3.5 billion years ago, before eukaryotes.<br><strong>B:</strong> Their simplicity allows rapid reproduction, adaptability, and survival in varied environments.<br><strong>C:</strong> Eukaryotic complexity enables compartmentalization, which allows for specialization such as photosynthesis in chloroplasts or protein modification in the Golgi apparatus.",
    "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
  },
  {
  "question": "Prokaryotic and eukaryotic cells are found in different types of organisms. A. Identify the two major domains that contain prokaryotic cells and give one distinguishing feature of each. B. List the four main kingdoms that contain eukaryotic organisms and provide one representative example for each. C. Explain how structural differences between these cell types support their diversity of life.",
  "answer": "<strong>A:</strong> The two domains with prokaryotic cells are Bacteria and Archaea. Bacteria have peptidoglycan in their cell walls, while Archaea lack peptidoglycan and often live in extreme environments.<br><strong>B:</strong> The four eukaryotic kingdoms are Protista (e.g., amoeba), Fungi (e.g., yeast), Plantae (e.g., moss), and Animalia (e.g., human).<br><strong>C:</strong> Prokaryotic simplicity allows for rapid reproduction and metabolic flexibility, supporting survival in diverse niches. Eukaryotic complexity allows for specialized cells, enabling multicellular organisms and higher functions like movement, photosynthesis, and digestion.",
  "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1", "#frq"]
}, 
  {
  "question": "Compare and contrast prokaryotic and eukaryotic cells.",
  "answer": "<strong>Similarities:</strong> Both have DNA, ribosomes, cytoplasm, a cell (plasma) membrane, vesicles, and vacuoles.<br><br><strong>Differences:</strong><br><strong>Nucleus:</strong> Prokaryotes lack a true nucleus; eukaryotes have a membrane-bound nucleus.<br><strong>DNA:</strong> Prokaryotes have circular DNA; eukaryotes have linear chromosomes with histone proteins.<br><strong>Size:</strong> Prokaryotes (~1–5 µm); eukaryotes (~10–100 µm).<br><strong>Organelles:</strong> Prokaryotes lack membrane-bound organelles; eukaryotes have them (e.g., mitochondria, ER, Golgi).<br><strong>Cell division:</strong> Prokaryotes divide by binary fission; eukaryotes use mitosis and meiosis.<br><strong>Complexity:</strong> Prokaryotes are simpler and usually unicellular; eukaryotes are more complex and often multicellular.<br><strong>Flagella:</strong> Prokaryotic flagella are made of flagellin; eukaryotic ones are made of microtubules.",
  "tags": ["#all", "#biology", "#cells", "#APBio", "#lecture1"]
}

				]
				, 
		'classes' : [
					 {
    "question": "Analgesic",
    "answer": "<strong>Indication:</strong> Pain relief<br><strong>Mechanism:</strong> Varies by type; includes inhibition of prostaglandin synthesis or binding to opioid receptors to alter pain perception.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Acetaminophen, Codeine, Morphine, Oxycodone",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antacid",
    "answer": "<strong>Indication:</strong> Heartburn, acid reflux<br><strong>Mechanism:</strong> Neutralizes stomach acid to reduce acidity in the stomach.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Magnesium hydroxide, Aluminum hydroxide",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antianginal",
    "answer": "<strong>Indication:</strong> Chest pain due to reduced oxygen supply<br><strong>Mechanism:</strong> Dilates blood vessels and reduces cardiac workload to improve oxygen supply to the heart.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Nitroglycerin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Anticonvulsant / Antiepileptic",
    "answer": "<strong>Indication:</strong> Epilepsy, seizures<br><strong>Mechanism:</strong> Stabilizes neuronal membranes and inhibits abnormal electrical activity in the brain.<br><strong>Common Suffix:</strong> -toin, -pine (varies)<br><strong>Examples:</strong> Valproate, Carbamazepine, Ethosuximide",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "SSRI (Selective Serotonin Reuptake Inhibitor)",
    "answer": "<strong>Indication:</strong> Depression, anxiety disorders<br><strong>Mechanism:</strong> Increases serotonin levels in the brain by inhibiting its reuptake into presynaptic cells.<br><strong>Common Suffix:</strong> -oxetine, -pram<br><strong>Examples:</strong> Fluoxetine, Paroxetine, Sertraline, Citalopram, Escitalopram, Fluvoxamine",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antipsychotic",
    "answer": "<strong>Indication:</strong> Schizophrenia, bipolar disorder<br><strong>Mechanism:</strong> Blocks dopamine receptors to regulate mood and perception.<br><strong>Common Suffix:</strong> -apine, -idone<br><strong>Examples:</strong> Lithium, Clozapine, Risperidone, Olanzapine, Aripiprazole",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Anticoagulant",
    "answer": "<strong>Indication:</strong> Prevent formation of blood clots<br><strong>Mechanism:</strong> Inhibits clotting factors in the coagulation cascade.<br><strong>Common Suffix:</strong> -arin<br><strong>Examples:</strong> Warfarin, Heparin, Enoxaparin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antihistamine",
    "answer": "<strong>Indication:</strong> Allergies<br><strong>Mechanism:</strong> Blocks histamine receptors to prevent allergy symptoms.<br><strong>Common Suffix:</strong> -ine<br><strong>Examples:</strong> Cetirizine, Diphenhydramine, Fexofenadine, Chlorpheniramine, Loratadine",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antihypertensive",
    "answer": "<strong>Indication:</strong> Hypertension (high blood pressure)<br><strong>Mechanism:</strong> Various, depending on class (e.g., beta blockers, calcium channel blockers, ACE inhibitors, diuretics, alpha blockers).<br><strong>Common Suffix:</strong> -olol (beta blockers), -pril (ACE inhibitors), -dipine (calcium channel blockers)<br><strong>Examples:</strong> Metoprolol, Verapamil, Ramipril, Hydrochlorothiazide, Terazosin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antibiotic",
    "answer": "<strong>Indication:</strong> Bacterial infections<br><strong>Mechanism:</strong> Kills or inhibits the growth of bacteria by various mechanisms depending on the class (e.g., cell wall synthesis inhibition, protein synthesis inhibition).<br><strong>Common Suffix:</strong> -cillin, -cycline, -mycin, -floxacin<br><strong>Examples:</strong> Amoxicillin, Ceftriaxone, Clarithromycin, Tetracycline, Amikacin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antineoplastic",
    "answer": "<strong>Indication:</strong> Cancer<br><strong>Mechanism:</strong> Interferes with DNA replication and cell division in rapidly growing cells.<br><strong>Common Suffix:</strong> -platin, -rubicin (varies)<br><strong>Examples:</strong> Cyclophosphamide, Etoposide, Doxorubicin, Cisplatin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "NSAID (Non-steroidal anti-inflammatory drug)",
    "answer": "<strong>Indication:</strong> Inflammation, pain<br><strong>Mechanism:</strong> Inhibits cyclooxygenase (COX) enzymes to reduce prostaglandin synthesis.<br><strong>Common Suffix:</strong> -profen, -cam<br><strong>Examples:</strong> Ibuprofen, Aspirin, Naproxen, Celecoxib, Meloxicam",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antitussive",
    "answer": "<strong>Indication:</strong> Cough suppression<br><strong>Mechanism:</strong> Suppresses cough reflex in the brain (medulla).<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Dextromethorphan",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antiviral",
    "answer": "<strong>Indication:</strong> Viral infections<br><strong>Mechanism:</strong> Inhibits viral replication by targeting specific stages of the viral life cycle.<br><strong>Common Suffix:</strong> -vir<br><strong>Examples:</strong> Acyclovir, Oseltamivir",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
			
  {
    "question": "Bronchodilator",
    "answer": "<strong>Indication:</strong> Asthma, COPD<br><strong>Mechanism:</strong> Relaxes bronchial smooth muscle to open airways.<br><strong>Common Suffix:</strong> -terol<br><strong>Examples:</strong> Albuterol, Salmeterol",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Decongestant",
    "answer": "<strong>Indication:</strong> Nasal congestion<br><strong>Mechanism:</strong> Constricts nasal blood vessels via alpha-adrenergic receptor activation.<br><strong>Common Suffix:</strong> -ephrine, -zoline<br><strong>Examples:</strong> Pseudoephedrine, Phenylephrine, Xylometazoline",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Diuretic",
    "answer": "<strong>Indication:</strong> Hypertension, edema<br><strong>Mechanism:</strong> Increases urine output by promoting excretion of water and electrolytes.<br><strong>Common Suffix:</strong> -ide, -one<br><strong>Examples:</strong> Furosemide, Hydrochlorothiazide, Amiloride",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Hormone Replacement",
    "answer": "<strong>Indication:</strong> Hormone deficiency<br><strong>Mechanism:</strong> Replaces deficient endogenous hormones.<br><strong>Common Suffix:</strong> -one, -troxine<br><strong>Examples:</strong> Conjugated estrogens, Levothyroxine, Medroxyprogesterone",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Hypnotic",
    "answer": "<strong>Indication:</strong> Insomnia<br><strong>Mechanism:</strong> Enhances GABA activity to induce sedation and sleep.<br><strong>Common Suffix:</strong> -pidem, -plon<br><strong>Examples:</strong> Zolpidem, Zaleplon, Zopiclone",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Sedative",
    "answer": "<strong>Indication:</strong> Irritability, anxiety<br><strong>Mechanism:</strong> Depresses CNS activity to calm or induce sleep.<br><strong>Common Suffix:</strong> -azepam, -zolam<br><strong>Examples:</strong> Diazepam, Lorazepam",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Anxiolytic",
    "answer": "<strong>Indication:</strong> Anxiety<br><strong>Mechanism:</strong> Modulates GABA or serotonin pathways to reduce anxiety.<br><strong>Common Suffix:</strong> -pam, -lam<br><strong>Examples:</strong> Diazepam, Sertraline, Alprazolam",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Proton-Pump Inhibitor (PPI)",
    "answer": "<strong>Indication:</strong> Acid reflux, GERD<br><strong>Mechanism:</strong> Irreversibly inhibits the H+/K+ ATPase pump in the stomach lining.<br><strong>Common Suffix:</strong> -prazole<br><strong>Examples:</strong> Omeprazole, Pantoprazole, Rabeprazole",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antiarrhythmic",
    "answer": "<strong>Indication:</strong> Arrhythmias<br><strong>Mechanism:</strong> Modifies ion flow in cardiac tissues to restore normal heart rhythm.<br><strong>Common Suffix:</strong> -arone, -idine<br><strong>Examples:</strong> Amiodarone, Lidocaine, Verapamil, Diltiazem",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Biguanide",
    "answer": "<strong>Indication:</strong> Type 2 diabetes<br><strong>Mechanism:</strong> Decreases hepatic glucose production and increases insulin sensitivity.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Metformin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
				
			
  {
    "question": "Taxane",
    "answer": "<strong>Indication:</strong> Cancer (chemotherapy)<br><strong>Mechanism:</strong> Stabilizes microtubules to inhibit cell division.<br><strong>Common Suffix:</strong> -taxel<br><strong>Examples:</strong> Paclitaxel, Docetaxel",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Nootropic",
    "answer": "<strong>Indication:</strong> Cognitive enhancement, ADHD<br><strong>Mechanism:</strong> Enhances neurotransmitter activity (dopamine, norepinephrine).<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Caffeine, Amphetamine, Methylphenidate",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Eugeroic",
    "answer": "<strong>Indication:</strong> Excessive sleepiness, narcolepsy<br><strong>Mechanism:</strong> Promotes wakefulness by affecting dopamine reuptake.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Modafinil",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "MAO Inhibitor",
    "answer": "<strong>Indication:</strong> Depression<br><strong>Mechanism:</strong> Inhibits monoamine oxidase enzyme, increasing neurotransmitter levels.<br><strong>Common Suffix:</strong> -giline, -zid<br><strong>Examples:</strong> Isocarboxazid, Selegiline, Tranylcypromine",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Statin (HMG-CoA Reductase Inhibitor)",
    "answer": "<strong>Indication:</strong> Hyperlipidemia, high cholesterol<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase to reduce cholesterol synthesis.<br><strong>Common Suffix:</strong> -statin<br><strong>Examples:</strong> Atorvastatin, Simvastatin, Pravastatin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "PDE5 Inhibitor",
    "answer": "<strong>Indication:</strong> Erectile dysfunction<br><strong>Mechanism:</strong> Enhances nitric oxide effect by inhibiting phosphodiesterase type 5 (PDE5).<br><strong>Common Suffix:</strong> -afil<br><strong>Examples:</strong> Sildenafil, Tadalafil",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Expectorant",
    "answer": "<strong>Indication:</strong> Productive cough, mucus clearance<br><strong>Mechanism:</strong> Increases respiratory tract fluid to loosen mucus.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Guaifenesin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antidote",
    "answer": "<strong>Indication:</strong> Reversal of drug toxicity<br><strong>Mechanism:</strong> Neutralizes or counteracts toxic agents.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> N-acetylcysteine, Activated charcoal",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Opioid",
    "answer": "<strong>Indication:</strong> Moderate to severe pain<br><strong>Mechanism:</strong> Binds to opioid receptors in the CNS to block pain signals.<br><strong>Common Suffix:</strong> -codone, -morphone<br><strong>Examples:</strong> Codeine, Morphine, Oxycodone, Tramadol",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Laxative",
    "answer": "<strong>Indication:</strong> Constipation<br><strong>Mechanism:</strong> Stimulates bowel movement or softens stool, depending on type.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Lactulose, Senna, Bisacodyl",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  }
,
		
  {
    "question": "H2 Antagonist",
    "answer": "<strong>Indication:</strong> Excessive stomach acid, GERD, ulcers<br><strong>Mechanism:</strong> Blocks histamine H2 receptors in gastric parietal cells, reducing acid secretion.<br><strong>Common Suffix:</strong> -tidine<br><strong>Examples:</strong> Ranitidine, Famotidine",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Dopaminergic Drug",
    "answer": "<strong>Indication:</strong> Parkinson’s disease<br><strong>Mechanism:</strong> Stimulates dopamine receptors or increases dopamine availability.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Levodopa, Ropinirole, Pramipexole",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Corticosteroid",
    "answer": "<strong>Indication:</strong> Inflammation, autoimmune conditions, asthma, skin disorders<br><strong>Mechanism:</strong> Suppresses inflammation and immune response by mimicking cortisol.<br><strong>Common Suffix:</strong> -sone, -olone<br><strong>Examples:</strong> Prednisolone, Dexamethasone, Hydrocortisone, Beclometasone",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Bisphosphonate",
    "answer": "<strong>Indication:</strong> Osteoporosis, bone disorders<br><strong>Mechanism:</strong> Inhibits bone resorption by osteoclasts.<br><strong>Common Suffix:</strong> -dronate<br><strong>Examples:</strong> Alendronic acid, Zoledronic acid, Pamidronate",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Benzodiazepine",
    "answer": "<strong>Indication:</strong> Anxiety, seizures, insomnia, muscle spasms<br><strong>Mechanism:</strong> Enhances GABA activity in the CNS.<br><strong>Common Suffix:</strong> -pam, -lam<br><strong>Examples:</strong> Diazepam, Midazolam, Nitrazepam",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antimuscarinic",
    "answer": "<strong>Indication:</strong> Overactive bladder, urinary incontinence<br><strong>Mechanism:</strong> Blocks muscarinic receptors in bladder smooth muscle to reduce urgency and frequency.<br><strong>Common Suffix:</strong> -fenacin, -terodine<br><strong>Examples:</strong> Oxybutynin, Solifenacin, Tolterodine",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antifungal Drug",
    "answer": "<strong>Indication:</strong> Fungal infections<br><strong>Mechanism:</strong> Disrupts fungal cell membrane or inhibits fungal enzymes.<br><strong>Common Suffix:</strong> -azole<br><strong>Examples:</strong> Clotrimazole, Fluconazole, Ketoconazole",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antiemetic",
    "answer": "<strong>Indication:</strong> Nausea, vomiting<br><strong>Mechanism:</strong> Varies; may block dopamine, serotonin, or histamine receptors in CNS.<br><strong>Common Suffix:</strong> -setron, -azine<br><strong>Examples:</strong> Cyclizine, Promethazine, Prochlorperazine, Ondansetron",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "ACE Inhibitor",
    "answer": "<strong>Indication:</strong> Hypertension, heart failure<br><strong>Mechanism:</strong> Inhibits angiotensin-converting enzyme (ACE), reducing blood pressure.<br><strong>Common Suffix:</strong> -pril<br><strong>Examples:</strong> Ramipril, Perindopril, Lisinopril",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Xanthine Oxidase Inhibitor",
    "answer": "<strong>Indication:</strong> Gout<br><strong>Mechanism:</strong> Inhibits xanthine oxidase enzyme, decreasing uric acid production.<br><strong>Common Suffix:</strong> -xostat<br><strong>Examples:</strong> Allopurinol, Febuxostat",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
			
  {
    "question": "Fluoroquinolone",
    "answer": "<strong>Indication:</strong> Bacterial infections<br><strong>Mechanism:</strong> Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.<br><strong>Common Suffix:</strong> -floxacin<br><strong>Examples:</strong> Ciprofloxacin, Moxifloxacin, Levofloxacin",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Antiretroviral Drug",
    "answer": "<strong>Indication:</strong> HIV infection<br><strong>Mechanism:</strong> Inhibits various stages of HIV replication depending on drug class (e.g., reverse transcriptase, protease, integrase).<br><strong>Common Suffix:</strong> -vir (general)<br><strong>Examples:</strong> Tenofovir, Lamivudine, Efavirenz, Dolutegravir",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Phosphate Binder",
    "answer": "<strong>Indication:</strong> High blood phosphate in chronic kidney disease<br><strong>Mechanism:</strong> Binds phosphate in the gut to reduce absorption.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Sevelamer",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Fibrate",
    "answer": "<strong>Indication:</strong> Hyperlipidemia, high triglycerides<br><strong>Mechanism:</strong> Activates PPAR-alpha to increase lipid metabolism.<br><strong>Common Suffix:</strong> -fibrate<br><strong>Examples:</strong> Fenofibrate, Gemfibrozil",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "Immunosuppressant",
    "answer": "<strong>Indication:</strong> Autoimmune disease, organ transplant<br><strong>Mechanism:</strong> Suppresses immune system activity to prevent rejection or reduce inflammation.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Azathioprine, Cyclosporine",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  },
  {
    "question": "DMARD (Disease-Modifying Anti-Rheumatic Drug)",
    "answer": "<strong>Indication:</strong> Rheumatoid arthritis, Crohn’s disease<br><strong>Mechanism:</strong> Modulates immune response and inflammation to slow disease progression.<br><strong>Common Suffix:</strong> None<br><strong>Examples:</strong> Methotrexate, Leflunomide, Rituximab, Infliximab",
    "tags": ["#all", "#medications", "#drugclasses", "#ptcb"]
  }
			
		], 
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
  "answer": "<strong>Description:</strong> Prevents and treats osteoporosis by increasing bone mass.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Alendronate<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis, Pagetâ€™s disease<br><strong>Side Effects:</strong> GI upset, esophageal irritation, bone pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
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
  "answer": "<strong>Description:</strong> Used to treat Parkinsonâ€™s disease and side effects of antipsychotic medications.<br><strong>Mechanism:</strong> Blocks central cholinergic receptors to restore dopamine balance.<br><strong>Active Ingredient(s):</strong> Benztropine<br><strong>Drug Class:</strong> Antiparkinsonian drug<br><strong>Use:</strong> Parkinsonism, extrapyramidal symptoms<br><strong>Side Effects:</strong> Dry mouth, blurred vision, constipation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IM, IV",
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
  "answer": "<strong>Description:</strong> Improves cognition in patients with Alzheimerâ€™s disease.<br><strong>Mechanism:</strong> Inhibits acetylcholinesterase to increase acetylcholine in the brain.<br><strong>Active Ingredient(s):</strong> Donepezil<br><strong>Drug Class:</strong> Acetylcholinesterase inhibitor<br><strong>Use:</strong> Alzheimerâ€™s disease<br><strong>Side Effects:</strong> Nausea, insomnia, muscle cramps<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
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
  "answer": "<strong>Description:</strong> Treats Parkinsonâ€™s disease and restless legs syndrome.<br><strong>Mechanism:</strong> Dopamine agonist that stimulates dopamine receptors.<br><strong>Active Ingredient(s):</strong> Ropinirole<br><strong>Drug Class:</strong> Antiparkinsonian drug<br><strong>Use:</strong> Parkinsonâ€™s, restless legs syndrome<br><strong>Side Effects:</strong> Drowsiness, nausea, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "PC Pen VK / Pen V",
  "answer": "<strong>Description:</strong> Treats bacterial infections including strep and skin infections.<br><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins.<br><strong>Active Ingredient(s):</strong> Penicillin<br><strong>Drug Class:</strong> Beta-lactam antibacterial<br><strong>Use:</strong> Bacterial infections<br><strong>Side Effects:</strong> Diarrhea, allergic reactions, rash<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Strattera",
  "answer": "<strong>Description:</strong> Non-stimulant medication for ADHD.<br><strong>Mechanism:</strong> Inhibits norepinephrine reuptake in the brain.<br><strong>Active Ingredient(s):</strong> Atomoxetine<br><strong>Drug Class:</strong> Norepinephrine reuptake inhibitor<br><strong>Use:</strong> Attention-deficit hyperactivity disorder (ADHD)<br><strong>Side Effects:</strong> Dry mouth, insomnia, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ambien",
  "answer": "<strong>Description:</strong> Helps with short-term treatment of insomnia.<br><strong>Mechanism:</strong> Binds GABA-A receptors to produce sedative effects.<br><strong>Active Ingredient(s):</strong> Zolpidem<br><strong>Drug Class:</strong> Z-drug / hypnotic<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Drowsiness, dizziness, sleepwalking<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Advair",
  "answer": "<strong>Description:</strong> Prevents symptoms of asthma and COPD.<br><strong>Mechanism:</strong> Salmeterol stimulates beta-2 receptors; fluticasone reduces inflammation.<br><strong>Active Ingredient(s):</strong> Salmeterol, Fluticasone<br><strong>Drug Class:</strong> Bronchodilators<br><strong>Use:</strong> Asthma, COPD<br><strong>Side Effects:</strong> Throat irritation, hoarseness, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Levaquin",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic for various bacterial infections.<br><strong>Mechanism:</strong> Inhibits DNA gyrase and topoisomerase IV.<br><strong>Active Ingredient(s):</strong> Levofloxacin<br><strong>Drug Class:</strong> Fluoroquinolone<br><strong>Use:</strong> Respiratory, urinary, skin infections<br><strong>Side Effects:</strong> Tendon rupture, nausea, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Tofranil",
  "answer": "<strong>Description:</strong> Treats depression and sometimes bedwetting.<br><strong>Mechanism:</strong> Inhibits reuptake of norepinephrine and serotonin.<br><strong>Active Ingredient(s):</strong> Imipramine<br><strong>Drug Class:</strong> Tricyclic antidepressant<br><strong>Use:</strong> Depression, enuresis<br><strong>Side Effects:</strong> Drowsiness, dry mouth, constipation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Reclast / Zometa",
  "answer": "<strong>Description:</strong> Prevents bone loss and treats osteoporosis.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Zoledronic acid<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis, hypercalcemia<br><strong>Side Effects:</strong> Flu-like symptoms, bone pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Glucotrol",
  "answer": "<strong>Description:</strong> Lowers blood sugar in type 2 diabetes.<br><strong>Mechanism:</strong> Stimulates insulin release from pancreatic beta cells.<br><strong>Active Ingredient(s):</strong> Glipizide<br><strong>Drug Class:</strong> Antidiabetic drug<br><strong>Use:</strong> Type 2 diabetes mellitus<br><strong>Side Effects:</strong> Hypoglycemia, weight gain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Constulose",
  "answer": "<strong>Description:</strong> Treats constipation and hepatic encephalopathy.<br><strong>Mechanism:</strong> Reduces blood ammonia by acidifying colon contents and trapping NH4+.<br><strong>Active Ingredient(s):</strong> Lactulose<br><strong>Drug Class:</strong> Laxative<br><strong>Use:</strong> Constipation, hepatic encephalopathy<br><strong>Side Effects:</strong> Bloating, gas, diarrhea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "AcipHex",
  "answer": "<strong>Description:</strong> Reduces stomach acid production for GERD and ulcers.<br><strong>Mechanism:</strong> Irreversibly inhibits H+/K+ ATPase in gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Rabeprazole<br><strong>Drug Class:</strong> Proton-pump inhibitor<br><strong>Use:</strong> GERD, ulcers<br><strong>Side Effects:</strong> Headache, abdominal pain, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Otrexup",
  "answer": "<strong>Description:</strong> Treats rheumatoid arthritis and some cancers.<br><strong>Mechanism:</strong> Inhibits dihydrofolate reductase, reducing DNA synthesis.<br><strong>Active Ingredient(s):</strong> Methotrexate<br><strong>Drug Class:</strong> DMARD<br><strong>Use:</strong> Rheumatoid arthritis, psoriasis, certain cancers<br><strong>Side Effects:</strong> Mouth sores, liver toxicity, bone marrow suppression<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, Subcutaneous, IM",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Cleocin",
  "answer": "<strong>Description:</strong> Antibiotic used for serious bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial protein synthesis by binding to 50S ribosomal subunit.<br><strong>Active Ingredient(s):</strong> Clindamycin<br><strong>Drug Class:</strong> Antibacterial drug<br><strong>Use:</strong> Skin, respiratory, intra-abdominal infections<br><strong>Side Effects:</strong> Diarrhea, nausea, C. difficile colitis<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, Topical, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Tylenol",
  "answer": "<strong>Description:</strong> Relieves pain and reduces fever.<br><strong>Mechanism:</strong> Inhibits prostaglandin synthesis in the CNS.<br><strong>Active Ingredient(s):</strong> Acetaminophen<br><strong>Drug Class:</strong> Analgesic / antipyretic<br><strong>Use:</strong> Pain, fever<br><strong>Side Effects:</strong> Liver toxicity at high doses<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Feosol",
  "answer": "<strong>Description:</strong> Treats or prevents iron-deficiency anemia.<br><strong>Mechanism:</strong> Replaces iron necessary for hemoglobin production.<br><strong>Active Ingredient(s):</strong> Ferrous sulfate<br><strong>Drug Class:</strong> Iron supplement<br><strong>Use:</strong> Iron deficiency anemia<br><strong>Side Effects:</strong> Constipation, dark stools, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Relpax",
  "answer": "<strong>Description:</strong> Treats migraines by narrowing brain blood vessels.<br><strong>Mechanism:</strong> Agonist at serotonin 5-HT1B/1D receptors.<br><strong>Active Ingredient(s):</strong> Eletriptan<br><strong>Drug Class:</strong> Antimigraine drug<br><strong>Use:</strong> Acute migraine attacks<br><strong>Side Effects:</strong> Dizziness, chest tightness, fatigue<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Carbacot / Robaxi",
  "answer": "<strong>Description:</strong> Used to relieve muscle pain and spasms.<br><strong>Mechanism:</strong> Depresses CNS activity, though exact mechanism unknown.<br><strong>Active Ingredient(s):</strong> Methocarbamol<br><strong>Drug Class:</strong> Muscle relaxant<br><strong>Use:</strong> Muscle spasm, pain<br><strong>Side Effects:</strong> Drowsiness, dizziness, blurred vision<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IM, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "DiaBeta",
  "answer": "<strong>Description:</strong> Controls blood sugar in type 2 diabetes.<br><strong>Mechanism:</strong> Stimulates insulin release from pancreatic beta cells.<br><strong>Active Ingredient(s):</strong> Glyburide<br><strong>Drug Class:</strong> Antidiabetic drug<br><strong>Use:</strong> Type 2 diabetes mellitus<br><strong>Side Effects:</strong> Hypoglycemia, weight gain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Celexa",
  "answer": "<strong>Description:</strong> Treats depression by increasing serotonin.<br><strong>Mechanism:</strong> Inhibits serotonin reuptake in the brain.<br><strong>Active Ingredient(s):</strong> Citalopram<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> Depression<br><strong>Side Effects:</strong> Nausea, dry mouth, sexual dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Benicar",
  "answer": "<strong>Description:</strong> Lowers blood pressure by relaxing blood vessels.<br><strong>Mechanism:</strong> Blocks angiotensin II receptors; also includes a diuretic (HCTZ).<br><strong>Active Ingredient(s):</strong> Hydrochlorothiazide, Olmesartan<br><strong>Drug Class:</strong> Thiazide diuretic, Angiotensin II blocker<br><strong>Use:</strong> Hypertension<br><strong>Side Effects:</strong> Dizziness, low potassium, increased urination<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Coreg",
  "answer": "<strong>Description:</strong> Treats high blood pressure and heart failure.<br><strong>Mechanism:</strong> Blocks beta-adrenergic receptors and alpha-1 receptors.<br><strong>Active Ingredient(s):</strong> Carvedilol<br><strong>Drug Class:</strong> Beta-blocker<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Dizziness, fatigue, low blood pressure<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Spiriva",
  "answer": "<strong>Description:</strong> Maintains control of bronchospasm in COPD.<br><strong>Mechanism:</strong> Blocks muscarinic receptors in airway smooth muscle to prevent bronchoconstriction.<br><strong>Active Ingredient(s):</strong> Tiotropium<br><strong>Drug Class:</strong> Anticholinergic<br><strong>Use:</strong> COPD, asthma maintenance<br><strong>Side Effects:</strong> Dry mouth, constipation, urinary retention<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Xolair",
  "answer": "<strong>Description:</strong> Used to treat moderate to severe asthma and chronic hives.<br><strong>Mechanism:</strong> Binds to IgE, preventing allergic inflammation.<br><strong>Active Ingredient(s):</strong> Omalizumab<br><strong>Drug Class:</strong> Monoclonal antibody<br><strong>Use:</strong> Asthma, chronic urticaria<br><strong>Side Effects:</strong> Injection site reactions, headache, risk of anaphylaxis<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "NitroStat Sublingual",
  "answer": "<strong>Description:</strong> Relieves acute chest pain (angina).<br><strong>Mechanism:</strong> Releases nitric oxide, relaxing vascular smooth muscle and dilating blood vessels.<br><strong>Active Ingredient(s):</strong> Nitroglycerin<br><strong>Drug Class:</strong> Nitrate<br><strong>Use:</strong> Angina pectoris<br><strong>Side Effects:</strong> Headache, dizziness, hypotension<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Sublingual",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Eliquis",
  "answer": "<strong>Description:</strong> Prevents blood clots and stroke in patients with atrial fibrillation.<br><strong>Mechanism:</strong> Inhibits Factor Xa to reduce thrombin formation.<br><strong>Active Ingredient(s):</strong> Apixaban<br><strong>Drug Class:</strong> Anticoagulant<br><strong>Use:</strong> Stroke prevention, DVT, PE<br><strong>Side Effects:</strong> Bleeding, anemia, bruising<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Neurontin",
  "answer": "<strong>Description:</strong> Treats seizures and nerve pain.<br><strong>Mechanism:</strong> Modulates calcium channels to reduce neurotransmitter release.<br><strong>Active Ingredient(s):</strong> Gabapentin<br><strong>Drug Class:</strong> Anticonvulsant drug<br><strong>Use:</strong> Epilepsy, neuropathic pain<br><strong>Side Effects:</strong> Dizziness, drowsiness, fatigue<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Enbrel",
  "answer": "<strong>Description:</strong> Treats autoimmune diseases by reducing inflammation.<br><strong>Mechanism:</strong> Inhibits TNF-alpha, reducing inflammatory response.<br><strong>Active Ingredient(s):</strong> Etanercept<br><strong>Drug Class:</strong> DMARD<br><strong>Use:</strong> Rheumatoid arthritis, psoriasis, ankylosing spondylitis<br><strong>Side Effects:</strong> Infection risk, injection site reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Herceptin",
  "answer": "<strong>Description:</strong> Used for HER2-positive breast cancer.<br><strong>Mechanism:</strong> Binds to HER2 receptors and inhibits cell proliferation.<br><strong>Active Ingredient(s):</strong> Trastuzumab<br><strong>Drug Class:</strong> Monoclonal antibody<br><strong>Use:</strong> Breast cancer, gastric cancer<br><strong>Side Effects:</strong> Heart problems, fever, chills<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Atripla",
  "answer": "<strong>Description:</strong> Combination drug for HIV treatment.<br><strong>Mechanism:</strong> Inhibits reverse transcriptase to prevent viral replication.<br><strong>Active Ingredient(s):</strong> Emtricitabine, Tenofovir, Efavirenz<br><strong>Drug Class:</strong> Antiretroviral drugs<br><strong>Use:</strong> HIV-1 infection<br><strong>Side Effects:</strong> Dizziness, insomnia, rash<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Xarelto",
  "answer": "<strong>Description:</strong> Reduces risk of stroke and blood clots.<br><strong>Mechanism:</strong> Inhibits Factor Xa to prevent clot formation.<br><strong>Active Ingredient(s):</strong> Rivaroxaban<br><strong>Drug Class:</strong> Anticoagulant drug<br><strong>Use:</strong> Stroke prevention, DVT, PE<br><strong>Side Effects:</strong> Bleeding, bruising, back pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Stalevo 50",
  "answer": "<strong>Description:</strong> Treats Parkinsonâ€™s disease symptoms.<br><strong>Mechanism:</strong> Provides dopamine precursor and reduces its breakdown.<br><strong>Active Ingredient(s):</strong> Levodopa, Carbidopa, Entacapone<br><strong>Drug Class:</strong> Antiparkinsonian medicine<br><strong>Use:</strong> Parkinsonâ€™s disease<br><strong>Side Effects:</strong> Dyskinesia, nausea, hallucinations<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Fioricet",
  "answer": "<strong>Description:</strong> Treats tension headaches and migraines.<br><strong>Mechanism:</strong> Butalbital acts as a sedative, acetaminophen reduces pain, caffeine enhances effectiveness.<br><strong>Active Ingredient(s):</strong> Acetaminophen, Butalbital, Caffeine<br><strong>Drug Class:</strong> Analgesic / Antipyretic, Barbiturate<br><strong>Use:</strong> Headache relief<br><strong>Side Effects:</strong> Drowsiness, dizziness, upset stomach<br><strong>Controlled Substance:</strong> Yes (CIII)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Levemir",
  "answer": "<strong>Description:</strong> Long-acting insulin for blood sugar control in diabetes.<br><strong>Mechanism:</strong> Regulates glucose metabolism by facilitating cellular glucose uptake.<br><strong>Active Ingredient(s):</strong> Insulin detemir<br><strong>Drug Class:</strong> Long-acting insulin<br><strong>Use:</strong> Diabetes mellitus<br><strong>Side Effects:</strong> Hypoglycemia, injection site reaction, weight gain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lovenox",
  "answer": "<strong>Description:</strong> Prevents and treats blood clots.<br><strong>Mechanism:</strong> Inhibits Factor Xa and thrombin by potentiating antithrombin III.<br><strong>Active Ingredient(s):</strong> Enoxaparin<br><strong>Drug Class:</strong> Low-molecular weight heparin (LMWH)<br><strong>Use:</strong> DVT, PE prevention<br><strong>Side Effects:</strong> Bleeding, anemia, injection site pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ritalin / Concerta",
  "answer": "<strong>Description:</strong> Treats ADHD and narcolepsy.<br><strong>Mechanism:</strong> Blocks reuptake of norepinephrine and dopamine in the brain.<br><strong>Active Ingredient(s):</strong> Methylphenidate<br><strong>Drug Class:</strong> CNS Stimulant<br><strong>Use:</strong> ADHD, narcolepsy<br><strong>Side Effects:</strong> Insomnia, appetite loss, increased heart rate<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Crestor",
  "answer": "<strong>Description:</strong> Lowers LDL cholesterol and raises HDL.<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase, reducing cholesterol synthesis.<br><strong>Active Ingredient(s):</strong> Rosuvastatin<br><strong>Drug Class:</strong> Statin<br><strong>Use:</strong> Hyperlipidemia, atherosclerosis prevention<br><strong>Side Effects:</strong> Muscle pain, headache, liver enzyme elevation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Xgeva / Prolia",
  "answer": "<strong>Description:</strong> Prevents bone loss and skeletal-related events in cancer.<br><strong>Mechanism:</strong> Binds RANKL, inhibiting osteoclast formation and activity.<br><strong>Active Ingredient(s):</strong> Denosumab<br><strong>Drug Class:</strong> Monoclonal antibody<br><strong>Use:</strong> Osteoporosis, bone metastases<br><strong>Side Effects:</strong> Fatigue, hypocalcemia, joint pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Pradaxa",
  "answer": "<strong>Description:</strong> Reduces risk of stroke and embolism.<br><strong>Mechanism:</strong> Direct thrombin inhibitor preventing clot formation.<br><strong>Active Ingredient(s):</strong> Dabigatran<br><strong>Drug Class:</strong> Anticoagulant drug<br><strong>Use:</strong> Stroke prevention, DVT, PE<br><strong>Side Effects:</strong> Bleeding, stomach pain, indigestion<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Sensipar",
  "answer": "<strong>Description:</strong> Lowers parathyroid hormone (PTH) levels.<br><strong>Mechanism:</strong> Increases sensitivity of calcium-sensing receptors in the parathyroid gland.<br><strong>Active Ingredient(s):</strong> Cinacalcet<br><strong>Drug Class:</strong> Calcimimetic<br><strong>Use:</strong> Secondary hyperparathyroidism<br><strong>Side Effects:</strong> Nausea, vomiting, hypocalcemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Vesicare",
  "answer": "<strong>Description:</strong> Treats overactive bladder symptoms.<br><strong>Mechanism:</strong> Blocks muscarinic receptors to reduce bladder muscle contractions.<br><strong>Active Ingredient(s):</strong> Solifenacin<br><strong>Drug Class:</strong> Antimuscarinic drug<br><strong>Use:</strong> Urinary incontinence, overactive bladder<br><strong>Side Effects:</strong> Dry mouth, constipation, blurred vision<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Haldol",
  "answer": "<strong>Description:</strong> Controls symptoms of schizophrenia and acute psychosis.<br><strong>Mechanism:</strong> Blocks dopamine receptors in the brain.<br><strong>Active Ingredient(s):</strong> Haloperidol<br><strong>Drug Class:</strong> Antipsychotic drug<br><strong>Use:</strong> Schizophrenia, Touretteâ€™s syndrome<br><strong>Side Effects:</strong> Extrapyramidal symptoms, drowsiness, QT prolongation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IM, IV",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Ala-Cort",
  "answer": "<strong>Description:</strong> Reduces inflammation and treats various skin conditions.<br><strong>Mechanism:</strong> Suppresses migration of polymorphonuclear leukocytes and reverses capillary permeability.<br><strong>Active Ingredient(s):</strong> Hydrocortisone<br><strong>Drug Class:</strong> Corticosteroid<br><strong>Use:</strong> Skin inflammation, itching<br><strong>Side Effects:</strong> Burning, dryness, irritation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "HumuLIN",
  "answer": "<strong>Description:</strong> Controls blood glucose levels in diabetes.<br><strong>Mechanism:</strong> Stimulates peripheral glucose uptake and inhibits hepatic glucose production.<br><strong>Active Ingredient(s):</strong> Insulin isophane (NPH)<br><strong>Drug Class:</strong> Intermediate-acting insulin<br><strong>Use:</strong> Diabetes mellitus<br><strong>Side Effects:</strong> Hypoglycemia, weight gain, injection site reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Isentress",
  "answer": "<strong>Description:</strong> Used in combination to treat HIV infection.<br><strong>Mechanism:</strong> Inhibits HIV integrase enzyme, preventing viral replication.<br><strong>Active Ingredient(s):</strong> Raltegravir<br><strong>Drug Class:</strong> Integrase inhibitor<br><strong>Use:</strong> HIV infection<br><strong>Side Effects:</strong> Nausea, headache, fatigue<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Stelara",
  "answer": "<strong>Description:</strong> Treats psoriasis, psoriatic arthritis, and Crohnâ€™s disease.<br><strong>Mechanism:</strong> Targets interleukin-12 and -23 to reduce inflammation.<br><strong>Active Ingredient(s):</strong> Ustekinumab<br><strong>Drug Class:</strong> Monoclonal antibody<br><strong>Use:</strong> Psoriasis, Crohnâ€™s disease<br><strong>Side Effects:</strong> Upper respiratory infection, headache, fatigue<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Mobic",
  "answer": "<strong>Description:</strong> Treats pain or inflammation caused by arthritis.<br><strong>Mechanism:</strong> Inhibits COX-2 enzyme, reducing prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Meloxicam<br><strong>Drug Class:</strong> NSAID<br><strong>Use:</strong> Osteoarthritis, rheumatoid arthritis<br><strong>Side Effects:</strong> GI upset, dizziness, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Remicade",
  "answer": "<strong>Description:</strong> Reduces inflammation in autoimmune conditions.<br><strong>Mechanism:</strong> Binds and inhibits tumor necrosis factor-alpha (TNF-Î±).<br><strong>Active Ingredient(s):</strong> Infliximab<br><strong>Drug Class:</strong> Monoclonal antibody<br><strong>Use:</strong> Crohnâ€™s disease, rheumatoid arthritis<br><strong>Side Effects:</strong> Infusion reaction, infections, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV infusion",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Night Time",
  "answer": "<strong>Description:</strong> Relieves nighttime pain and helps with sleep.<br><strong>Mechanism:</strong> Acetaminophen reduces fever/pain; diphenhydramine blocks histamine receptors causing sedation.<br><strong>Active Ingredient(s):</strong> Acetaminophen, Diphenhydramine<br><strong>Drug Class:</strong> Analgesic / Antipyretic, Antihistamine<br><strong>Use:</strong> Pain relief and sleep aid<br><strong>Side Effects:</strong> Drowsiness, dry mouth, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Renvela",
  "answer": "<strong>Description:</strong> Controls serum phosphorus in patients with chronic kidney disease.<br><strong>Mechanism:</strong> Binds dietary phosphate in the GI tract to prevent absorption.<br><strong>Active Ingredient(s):</strong> Sevelamer<br><strong>Drug Class:</strong> Phosphate binder<br><strong>Use:</strong> Hyperphosphatemia in CKD<br><strong>Side Effects:</strong> Nausea, vomiting, constipation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Fragmin",
  "answer": "<strong>Description:</strong> Prevents and treats deep vein thrombosis.<br><strong>Mechanism:</strong> Enhances inhibition of Factor Xa and thrombin via antithrombin III.<br><strong>Active Ingredient(s):</strong> Dalteparin<br><strong>Drug Class:</strong> Low-molecular weight heparin (LMWH)<br><strong>Use:</strong> DVT, PE prevention<br><strong>Side Effects:</strong> Bleeding, injection site pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zoloft",
  "answer": "<strong>Description:</strong> Treats depression, anxiety, PTSD, and OCD.<br><strong>Mechanism:</strong> Inhibits reuptake of serotonin in the brain, enhancing mood.<br><strong>Active Ingredient(s):</strong> Sertraline<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> Depression, anxiety disorders<br><strong>Side Effects:</strong> Insomnia, nausea, sexual dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Klonopin",
  "answer": "<strong>Description:</strong> Treats seizures and panic disorders.<br><strong>Mechanism:</strong> Enhances GABA activity at GABA-A receptors in the brain.<br><strong>Active Ingredient(s):</strong> Clonazepam<br><strong>Drug Class:</strong> Benzodiazepine<br><strong>Use:</strong> Seizures, panic disorder<br><strong>Side Effects:</strong> Drowsiness, dizziness, impaired coordination<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Avalide",
  "answer": "<strong>Description:</strong> Lowers blood pressure and reduces risk of stroke.<br><strong>Mechanism:</strong> Olmesartan blocks angiotensin II; hydrochlorothiazide promotes sodium/water excretion.<br><strong>Active Ingredient(s):</strong> Hydrochlorothiazide, Irbesartan<br><strong>Drug Class:</strong> Thiazide diuretic, Angiotensin II blocker<br><strong>Use:</strong> Hypertension<br><strong>Side Effects:</strong> Dizziness, fatigue, electrolyte imbalance<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ceftin",
  "answer": "<strong>Description:</strong> Treats a variety of bacterial infections.<br><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis.<br><strong>Active Ingredient(s):</strong> Cefuroxime<br><strong>Drug Class:</strong> Cephalosporin<br><strong>Use:</strong> Respiratory and skin infections<br><strong>Side Effects:</strong> Diarrhea, nausea, rash<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Nizoral Topical",
  "answer": "<strong>Description:</strong> Treats fungal skin infections such as athleteâ€™s foot and ringworm.<br><strong>Mechanism:</strong> Inhibits synthesis of ergosterol, damaging the fungal cell membrane.<br><strong>Active Ingredient(s):</strong> Ketoconazole<br><strong>Drug Class:</strong> Antifungal drug<br><strong>Use:</strong> Fungal infections<br><strong>Side Effects:</strong> Itching, stinging, dryness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lyrica",
  "answer": "<strong>Description:</strong> Relieves nerve pain and treats certain types of seizures.<br><strong>Mechanism:</strong> Binds to calcium channels in CNS, modulating neurotransmitter release.<br><strong>Active Ingredient(s):</strong> Pregabalin<br><strong>Drug Class:</strong> Anticonvulsant drug<br><strong>Use:</strong> Neuropathic pain, fibromyalgia, seizures<br><strong>Side Effects:</strong> Dizziness, sleepiness, weight gain<br><strong>Controlled Substance:</strong> Yes (CV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Nexium",
  "answer": "<strong>Description:</strong> Treats acid reflux and GERD by reducing stomach acid.<br><strong>Mechanism:</strong> Inhibits the H+/K+ ATPase enzyme in gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Esomeprazole<br><strong>Drug Class:</strong> Proton-pump inhibitor<br><strong>Use:</strong> GERD, ulcers<br><strong>Side Effects:</strong> Headache, diarrhea, abdominal pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Combivent Respimat",
  "answer": "<strong>Description:</strong> Treats chronic obstructive pulmonary disease (COPD).<br><strong>Mechanism:</strong> Albuterol stimulates beta-2 receptors; ipratropium blocks muscarinic receptors in the lungs.<br><strong>Active Ingredient(s):</strong> Albuterol, Ipratropium<br><strong>Drug Class:</strong> Beta-2 agonist, Anticholinergic drug<br><strong>Use:</strong> COPD<br><strong>Side Effects:</strong> Cough, dry mouth, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Niaspan",
  "answer": "<strong>Description:</strong> Helps lower LDL and triglycerides, while increasing HDL cholesterol.<br><strong>Mechanism:</strong> Reduces hepatic synthesis of VLDL and LDL.<br><strong>Active Ingredient(s):</strong> Niacin<br><strong>Drug Class:</strong> Form of vitamin B3<br><strong>Use:</strong> Hyperlipidemia<br><strong>Side Effects:</strong> Flushing, itching, upset stomach<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Uroxatral",
  "answer": "<strong>Description:</strong> Relieves symptoms of benign prostatic hyperplasia (BPH).<br><strong>Mechanism:</strong> Blocks alpha-1 receptors in the lower urinary tract to relax muscles.<br><strong>Active Ingredient(s):</strong> Alfuzosin<br><strong>Drug Class:</strong> Alpha-1 blocker<br><strong>Use:</strong> BPH<br><strong>Side Effects:</strong> Dizziness, fatigue, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Biaxin",
  "answer": "<strong>Description:</strong> Treats a variety of bacterial infections including respiratory and skin infections.<br><strong>Mechanism:</strong> Inhibits protein synthesis by binding to 50S ribosomal subunit.<br><strong>Active Ingredient(s):</strong> Clarithromycin<br><strong>Drug Class:</strong> Macrolide antibacterial<br><strong>Use:</strong> Bacterial infections<br><strong>Side Effects:</strong> GI upset, taste changes, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Zomig",
  "answer": "<strong>Description:</strong> Treats acute migraines with or without aura.<br><strong>Mechanism:</strong> Activates serotonin receptors to cause cranial vasoconstriction.<br><strong>Active Ingredient(s):</strong> Zolmitriptan<br><strong>Drug Class:</strong> Anti-migraine drug<br><strong>Use:</strong> Migraine headaches<br><strong>Side Effects:</strong> Dizziness, drowsiness, chest pressure<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, nasal",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Invokana",
  "answer": "<strong>Description:</strong> Treats type 2 diabetes by lowering blood glucose levels.<br><strong>Mechanism:</strong> Inhibits SGLT2 to increase urinary glucose excretion.<br><strong>Active Ingredient(s):</strong> Canagliflozin<br><strong>Drug Class:</strong> SGLT-2 inhibitor<br><strong>Use:</strong> Type 2 diabetes<br><strong>Side Effects:</strong> UTI, increased urination, ketoacidosis<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Saxenda / Victoza",
  "answer": "<strong>Description:</strong> Treats type 2 diabetes and chronic weight management.<br><strong>Mechanism:</strong> GLP-1 receptor agonist increases insulin secretion and delays gastric emptying.<br><strong>Active Ingredient(s):</strong> Liraglutide<br><strong>Drug Class:</strong> GLP-1 agonist<br><strong>Use:</strong> Type 2 diabetes, weight loss<br><strong>Side Effects:</strong> Nausea, vomiting, diarrhea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous injection",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Alimta",
  "answer": "<strong>Description:</strong> Chemotherapy drug for lung and mesothelioma cancers.<br><strong>Mechanism:</strong> Inhibits folate-dependent enzymes essential for DNA synthesis.<br><strong>Active Ingredient(s):</strong> Pemetrexed<br><strong>Drug Class:</strong> Anticancer drug<br><strong>Use:</strong> Non-small cell lung cancer, mesothelioma<br><strong>Side Effects:</strong> Fatigue, nausea, low blood cell counts<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lotrisone",
  "answer": "<strong>Description:</strong> Treats fungal skin infections with inflammation.<br><strong>Mechanism:</strong> Clotrimazole disrupts fungal membranes; betamethasone reduces inflammation.<br><strong>Active Ingredient(s):</strong> Clotrimazole, Betamethasone<br><strong>Drug Class:</strong> Antifungal drug, Corticosteroid<br><strong>Use:</strong> Athleteâ€™s foot, jock itch, ringworm<br><strong>Side Effects:</strong> Burning, dryness, skin thinning<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Topical",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Avastin",
  "answer": "<strong>Description:</strong> Treats various cancers by inhibiting blood vessel growth.<br><strong>Mechanism:</strong> Binds to VEGF and inhibits angiogenesis in tumors.<br><strong>Active Ingredient(s):</strong> Bevacizumab<br><strong>Drug Class:</strong> Anticancer drug<br><strong>Use:</strong> Colorectal, lung, brain, and kidney cancers<br><strong>Side Effects:</strong> Bleeding, hypertension, impaired wound healing<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Sovaldi",
  "answer": "<strong>Description:</strong> Antiviral drug used to treat chronic hepatitis C infection.<br><strong>Mechanism:</strong> Inhibits HCV NS5B RNA polymerase to prevent viral replication.<br><strong>Active Ingredient(s):</strong> Sofosbuvir<br><strong>Drug Class:</strong> Hepatitis C drug<br><strong>Use:</strong> Hepatitis C<br><strong>Side Effects:</strong> Fatigue, headache, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Gilenya",
  "answer": "<strong>Description:</strong> Treats relapsing forms of multiple sclerosis (MS).<br><strong>Mechanism:</strong> Retains lymphocytes in lymph nodes, reducing CNS inflammation.<br><strong>Active Ingredient(s):</strong> Fingolimod<br><strong>Drug Class:</strong> Immunomodulator<br><strong>Use:</strong> Multiple sclerosis<br><strong>Side Effects:</strong> Headache, diarrhea, increased liver enzymes<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Epogen",
  "answer": "<strong>Description:</strong> Stimulates red blood cell production in anemia.<br><strong>Mechanism:</strong> Mimics erythropoietin to stimulate bone marrow activity.<br><strong>Active Ingredient(s):</strong> Epoetin alfa<br><strong>Drug Class:</strong> Human erythropoietin<br><strong>Use:</strong> Anemia due to CKD or chemotherapy<br><strong>Side Effects:</strong> Hypertension, fever, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> IV, Subcutaneous",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Seroquel",
  "answer": "<strong>Description:</strong> Antipsychotic used to treat schizophrenia and bipolar disorder.<br><strong>Mechanism:</strong> Antagonizes dopamine and serotonin receptors in the brain.<br><strong>Active Ingredient(s):</strong> Quetiapine<br><strong>Drug Class:</strong> Antipsychotic drug<br><strong>Use:</strong> Schizophrenia, bipolar disorder<br><strong>Side Effects:</strong> Drowsiness, weight gain, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Amaryl",
  "answer": "<strong>Description:</strong> Lowers blood sugar in people with type 2 diabetes.<br><strong>Mechanism:</strong> Stimulates insulin release from pancreatic beta cells.<br><strong>Active Ingredient(s):</strong> Glimepiride<br><strong>Drug Class:</strong> Antidiabetic medicine<br><strong>Use:</strong> Type 2 diabetes mellitus<br><strong>Side Effects:</strong> Hypoglycemia, weight gain, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Percocet",
  "answer": "<strong>Description:</strong> Relieves moderate to severe pain.<br><strong>Mechanism:</strong> Oxycodone binds to opioid receptors; acetaminophen inhibits prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Acetaminophen, Oxycodone<br><strong>Drug Class:</strong> Analgesic / antipyretic, Opioid<br><strong>Use:</strong> Pain relief<br><strong>Side Effects:</strong> Constipation, drowsiness, nausea<br><strong>Controlled Substance:</strong> Yes (CII)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "SandIMMUNE / Neoral",
  "answer": "<strong>Description:</strong> Prevents organ rejection and treats autoimmune disorders.<br><strong>Mechanism:</strong> Inhibits calcineurin to suppress immune response.<br><strong>Active Ingredient(s):</strong> Cyclosporin<br><strong>Drug Class:</strong> Immunosuppressant<br><strong>Use:</strong> Organ transplant, rheumatoid arthritis, psoriasis<br><strong>Side Effects:</strong> Hypertension, nephrotoxicity, tremor<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lantus",
  "answer": "<strong>Description:</strong> Provides long-lasting blood sugar control in diabetes.<br><strong>Mechanism:</strong> Mimics human insulin with a prolonged absorption profile.<br><strong>Active Ingredient(s):</strong> Insulin glargine<br><strong>Drug Class:</strong> Long-acting insulin<br><strong>Use:</strong> Type 1 and type 2 diabetes<br><strong>Side Effects:</strong> Hypoglycemia, injection site reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Subcutaneous",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Cialis",
  "answer": "<strong>Description:</strong> Treats erectile dysfunction and benign prostatic hyperplasia (BPH).<br><strong>Mechanism:</strong> Inhibits PDE5, increasing blood flow to the penis and relaxing prostate/bladder muscles.<br><strong>Active Ingredient(s):</strong> Tadalafil<br><strong>Drug Class:</strong> PDE5 inhibitor<br><strong>Use:</strong> Erectile dysfunction, BPH<br><strong>Side Effects:</strong> Headache, flushing, dyspepsia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Elavil / Vanatrip",
  "answer": "<strong>Description:</strong> Treats depression and certain types of chronic pain.<br><strong>Mechanism:</strong> Inhibits reuptake of norepinephrine and serotonin.<br><strong>Active Ingredient(s):</strong> Amitriptyline<br><strong>Drug Class:</strong> Tricyclic antidepressant<br><strong>Use:</strong> Depression, neuropathic pain<br><strong>Side Effects:</strong> Drowsiness, dry mouth, weight gain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Lopid",
  "answer": "<strong>Description:</strong> Lowers triglycerides and increases HDL cholesterol.<br><strong>Mechanism:</strong> Activates PPAR-alpha to increase lipid metabolism.<br><strong>Active Ingredient(s):</strong> Gemfibrozil<br><strong>Drug Class:</strong> Fibrate<br><strong>Use:</strong> Hypertriglyceridemia<br><strong>Side Effects:</strong> Stomach pain, diarrhea, muscle pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Flo-Pred",
  "answer": "<strong>Description:</strong> Reduces inflammation in allergic and autoimmune conditions.<br><strong>Mechanism:</strong> Suppresses migration of leukocytes and reduces capillary permeability.<br><strong>Active Ingredient(s):</strong> Prednisolone<br><strong>Drug Class:</strong> Corticosteroid<br><strong>Use:</strong> Allergies, asthma, arthritis<br><strong>Side Effects:</strong> Increased appetite, mood changes, fluid retention<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, ophthalmic, topical",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Advil",
  "answer": "<strong>Description:</strong> Reduces fever and treats pain or inflammation.<br><strong>Mechanism:</strong> Inhibits COX enzymes, reducing prostaglandin synthesis.<br><strong>Active Ingredient(s):</strong> Ibuprofen<br><strong>Drug Class:</strong> NSAID<br><strong>Use:</strong> Pain, inflammation, fever<br><strong>Side Effects:</strong> Stomach upset, GI bleeding, kidney issues<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Aceon",
  "answer": "<strong>Description:</strong> Treats high blood pressure and reduces heart failure risk.<br><strong>Mechanism:</strong> Inhibits ACE, preventing angiotensin II formation.<br><strong>Active Ingredient(s):</strong> Perindopril<br><strong>Drug Class:</strong> ACE inhibitor<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Cough, dizziness, hyperkalemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Desyrel",
  "answer": "<strong>Description:</strong> Treats depression and can aid with insomnia.<br><strong>Mechanism:</strong> Inhibits serotonin reuptake and blocks certain serotonin receptors.<br><strong>Active Ingredient(s):</strong> Trazodone<br><strong>Drug Class:</strong> Antidepressant<br><strong>Use:</strong> Depression, insomnia<br><strong>Side Effects:</strong> Drowsiness, dry mouth, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Actos",
  "answer": "<strong>Description:</strong> Controls blood sugar levels in type 2 diabetes.<br><strong>Mechanism:</strong> Increases insulin sensitivity via PPAR-gamma activation.<br><strong>Active Ingredient(s):</strong> Pioglitazone<br><strong>Drug Class:</strong> Thiazolidinedione<br><strong>Use:</strong> Type 2 diabetes<br><strong>Side Effects:</strong> Weight gain, edema, risk of heart failure<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Proscar",
  "answer": "<strong>Description:</strong> Treats symptoms of benign prostatic hyperplasia (BPH).<br><strong>Mechanism:</strong> Inhibits 5-alpha reductase, reducing dihydrotestosterone (DHT) levels.<br><strong>Active Ingredient(s):</strong> Finasteride<br><strong>Drug Class:</strong> 5-alpha reductase inhibitor<br><strong>Use:</strong> BPH, male pattern baldness<br><strong>Side Effects:</strong> Decreased libido, erectile dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Inbrija / Dopar / Larodopa",
  "answer": "<strong>Description:</strong> Helps control movement problems in Parkinsonâ€™s disease.<br><strong>Mechanism:</strong> Converts to dopamine in the brain.<br><strong>Active Ingredient(s):</strong> Levodopa<br><strong>Drug Class:</strong> Antiparkinsonian drug<br><strong>Use:</strong> Parkinsonâ€™s disease<br><strong>Side Effects:</strong> Nausea, dizziness, dyskinesia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Actonel",
  "answer": "<strong>Description:</strong> Prevents and treats osteoporosis.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Risedronate<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis, Pagetâ€™s disease<br><strong>Side Effects:</strong> Bone/joint pain, GI upset<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "ProAir / Ventolin / Proventil",
  "answer": "<strong>Description:</strong> Quickly relieves asthma symptoms and bronchospasm.<br><strong>Mechanism:</strong> Stimulates beta-2 receptors to relax bronchial smooth muscle.<br><strong>Active Ingredient(s):</strong> Albuterol<br><strong>Drug Class:</strong> Beta-2 agonist<br><strong>Use:</strong> Asthma, COPD<br><strong>Side Effects:</strong> Tremors, nervousness, increased heart rate<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ultram",
  "answer": "<strong>Description:</strong> Manages moderate pain.<br><strong>Mechanism:</strong> Binds to opioid receptors and inhibits serotonin/norepinephrine reuptake.<br><strong>Active Ingredient(s):</strong> Tramadol<br><strong>Drug Class:</strong> Opiate narcotic<br><strong>Use:</strong> Pain relief<br><strong>Side Effects:</strong> Dizziness, constipation, drowsiness<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Sonata",
  "answer": "<strong>Description:</strong> Helps with falling asleep.<br><strong>Mechanism:</strong> Modulates GABA-A receptors in the brain to induce sleep.<br><strong>Active Ingredient(s):</strong> Zaleplon<br><strong>Drug Class:</strong> Z-drug / hypnotic<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Dizziness, headache, rebound insomnia<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zebeta",
  "answer": "<strong>Description:</strong> Treats high blood pressure and heart-related chest pain.<br><strong>Mechanism:</strong> Selectively blocks beta-1 receptors to reduce heart rate and blood pressure.<br><strong>Active Ingredient(s):</strong> Bisoprolol<br><strong>Drug Class:</strong> Beta-blocker<br><strong>Use:</strong> Hypertension, angina<br><strong>Side Effects:</strong> Fatigue, bradycardia, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zovirax",
  "answer": "<strong>Description:</strong> Treats herpes virus infections like cold sores and shingles.<br><strong>Mechanism:</strong> Inhibits viral DNA polymerase to prevent viral replication.<br><strong>Active Ingredient(s):</strong> Acyclovir<br><strong>Drug Class:</strong> Antiviral drug<br><strong>Use:</strong> Herpes simplex, shingles<br><strong>Side Effects:</strong> Nausea, headache, kidney toxicity (rare)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, topical, IV",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Coumadin",
  "answer": "<strong>Description:</strong> Prevents blood clots and reduces risk of stroke.<br><strong>Mechanism:</strong> Inhibits vitamin K epoxide reductase, decreasing clotting factor synthesis.<br><strong>Active Ingredient(s):</strong> Warfarin<br><strong>Drug Class:</strong> Anticoagulant drug<br><strong>Use:</strong> Atrial fibrillation, DVT, PE, stroke prevention<br><strong>Side Effects:</strong> Bleeding, bruising, GI upset<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Luvox",
  "answer": "<strong>Description:</strong> Treats obsessive-compulsive disorder (OCD).<br><strong>Mechanism:</strong> Inhibits serotonin reuptake to increase serotonin levels in the brain.<br><strong>Active Ingredient(s):</strong> Fluvoxamine<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> OCD, depression, anxiety disorders<br><strong>Side Effects:</strong> Nausea, insomnia, sexual dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Plavix",
  "answer": "<strong>Description:</strong> Prevents blood clots in people with heart disease.<br><strong>Mechanism:</strong> Inhibits ADP receptor on platelets, preventing aggregation.<br><strong>Active Ingredient(s):</strong> Clopidogrel<br><strong>Drug Class:</strong> Antiplatelet drug<br><strong>Use:</strong> MI prevention, stroke, coronary artery disease<br><strong>Side Effects:</strong> Bleeding, rash, GI upset<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Vibramycin / Adoxa",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic used to treat many infections.<br><strong>Mechanism:</strong> Inhibits bacterial protein synthesis by binding 30S ribosomal subunit.<br><strong>Active Ingredient(s):</strong> Doxycycline<br><strong>Drug Class:</strong> Tetracycline antibiotic<br><strong>Use:</strong> Acne, respiratory infections, STIs<br><strong>Side Effects:</strong> Photosensitivity, nausea, tooth discoloration<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Hyzaar",
  "answer": "<strong>Description:</strong> Treats high blood pressure and reduces stroke risk.<br><strong>Mechanism:</strong> Blocks angiotensin II receptors and promotes diuresis via thiazide.<br><strong>Active Ingredient(s):</strong> Losartan, Hydrochlorothiazide<br><strong>Drug Class:</strong> Angiotensin II blocker, Thiazide diuretic<br><strong>Use:</strong> Hypertension<br><strong>Side Effects:</strong> Dizziness, fatigue, hypokalemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Kytril / Sancuso",
  "answer": "<strong>Description:</strong> Prevents nausea and vomiting from chemotherapy or surgery.<br><strong>Mechanism:</strong> Blocks serotonin (5-HT3) receptors in the brain and gut.<br><strong>Active Ingredient(s):</strong> Granisetron<br><strong>Drug Class:</strong> Antiemetic drug<br><strong>Use:</strong> Nausea, vomiting prevention<br><strong>Side Effects:</strong> Headache, constipation, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, transdermal, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Restoril",
  "answer": "<strong>Description:</strong> Short-term treatment of insomnia.<br><strong>Mechanism:</strong> Enhances GABA activity at GABA-A receptors to induce sleep.<br><strong>Active Ingredient(s):</strong> Temazepam<br><strong>Drug Class:</strong> Benzodiazepine<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Drowsiness, dizziness, dependence<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Prevacid",
  "answer": "<strong>Description:</strong> Reduces stomach acid and treats GERD and ulcers.<br><strong>Mechanism:</strong> Inhibits proton pumps in gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Lansoprazole<br><strong>Drug Class:</strong> Proton-pump inhibitor<br><strong>Use:</strong> GERD, ulcers, heartburn<br><strong>Side Effects:</strong> Headache, diarrhea, abdominal pain<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Augmentin",
  "answer": "<strong>Description:</strong> Treats bacterial infections with beta-lactam resistance.<br><strong>Mechanism:</strong> Amoxicillin inhibits bacterial cell wall synthesis; clavulanic acid inhibits beta-lactamase.<br><strong>Active Ingredient(s):</strong> Amoxicillin, Clavulanic acid<br><strong>Drug Class:</strong> Penicillin antibiotic + Beta-lactamase inhibitor<br><strong>Use:</strong> Respiratory infections, UTIs, skin infections<br><strong>Side Effects:</strong> Diarrhea, rash, nausea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Mevacor / Altoprev",
  "answer": "<strong>Description:</strong> Lowers LDL cholesterol and triglycerides.<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase to decrease cholesterol production.<br><strong>Active Ingredient(s):</strong> Lovastatin<br><strong>Drug Class:</strong> Statin<br><strong>Use:</strong> Hyperlipidemia, cardiovascular risk reduction<br><strong>Side Effects:</strong> Muscle pain, liver enzyme changes<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Desyrel",
  "answer": "<strong>Description:</strong> Treats depression and insomnia.<br><strong>Mechanism:</strong> Inhibits serotonin reuptake and blocks histamine and alpha-adrenergic receptors.<br><strong>Active Ingredient(s):</strong> Trazodone<br><strong>Drug Class:</strong> Antidepressant<br><strong>Use:</strong> Depression, insomnia<br><strong>Side Effects:</strong> Drowsiness, dizziness, dry mouth, priapism (rare)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Actos",
  "answer": "<strong>Description:</strong> Improves insulin sensitivity in type 2 diabetes.<br><strong>Mechanism:</strong> Activates PPAR-gamma receptors to regulate glucose and lipid metabolism.<br><strong>Active Ingredient(s):</strong> Pioglitazone<br><strong>Drug Class:</strong> Thiazolidinedione<br><strong>Use:</strong> Type 2 diabetes<br><strong>Side Effects:</strong> Weight gain, edema, heart failure risk<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Proscar",
  "answer": "<strong>Description:</strong> Treats benign prostatic hyperplasia (BPH).<br><strong>Mechanism:</strong> Inhibits type II 5-alpha-reductase to reduce DHT levels.<br><strong>Active Ingredient(s):</strong> Finasteride<br><strong>Drug Class:</strong> 5-alpha reductase inhibitor<br><strong>Use:</strong> BPH, male pattern baldness (at lower doses)<br><strong>Side Effects:</strong> Decreased libido, erectile dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Inbrija / Dopar / Larodopa",
  "answer": "<strong>Description:</strong> Replenishes dopamine levels in Parkinson's disease.<br><strong>Mechanism:</strong> Converts to dopamine in the brain to improve motor function.<br><strong>Active Ingredient(s):</strong> Levodopa<br><strong>Drug Class:</strong> Antiparkinsonian drug<br><strong>Use:</strong> Parkinsonâ€™s disease<br><strong>Side Effects:</strong> Dyskinesia, nausea, hallucinations<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Actonel",
  "answer": "<strong>Description:</strong> Treats or prevents osteoporosis.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Risedronate<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis, Paget's disease<br><strong>Side Effects:</strong> GI upset, jaw osteonecrosis (rare)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "ProAir / Ventolin / Proventil",
  "answer": "<strong>Description:</strong> Rapid relief of asthma or COPD symptoms.<br><strong>Mechanism:</strong> Stimulates beta-2 receptors causing bronchial smooth muscle relaxation.<br><strong>Active Ingredient(s):</strong> Albuterol<br><strong>Drug Class:</strong> Beta-2 agonist<br><strong>Use:</strong> Asthma, bronchospasm<br><strong>Side Effects:</strong> Tremor, tachycardia, nervousness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ultram",
  "answer": "<strong>Description:</strong> Relieves moderate to moderately severe pain.<br><strong>Mechanism:</strong> Binds to mu-opioid receptors and inhibits norepinephrine/serotonin reuptake.<br><strong>Active Ingredient(s):</strong> Tramadol<br><strong>Drug Class:</strong> Opiate narcotic<br><strong>Use:</strong> Pain relief<br><strong>Side Effects:</strong> Drowsiness, nausea, dependence<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Sonata",
  "answer": "<strong>Description:</strong> Short-term treatment of insomnia.<br><strong>Mechanism:</strong> Binds to GABA-A receptors, enhancing inhibitory neurotransmission.<br><strong>Active Ingredient(s):</strong> Zaleplon<br><strong>Drug Class:</strong> Z-drug / hypnotic<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Drowsiness, dizziness, headache<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zebeta",
  "answer": "<strong>Description:</strong> Treats high blood pressure and improves heart function.<br><strong>Mechanism:</strong> Selectively blocks beta-1 receptors to reduce cardiac output.<br><strong>Active Ingredient(s):</strong> Bisoprolol<br><strong>Drug Class:</strong> Beta-blocker<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Bradycardia, fatigue, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zovirax",
  "answer": "<strong>Description:</strong> Treats herpes infections, including cold sores and shingles.<br><strong>Mechanism:</strong> Inhibits viral DNA polymerase, preventing replication.<br><strong>Active Ingredient(s):</strong> Acyclovir<br><strong>Drug Class:</strong> Antiviral drug<br><strong>Use:</strong> Herpes simplex, varicella-zoster<br><strong>Side Effects:</strong> Nausea, headache, renal toxicity (IV)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, topical, IV",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "Coumadin",
  "answer": "<strong>Description:</strong> Prevents blood clots and reduces stroke risk.<br><strong>Mechanism:</strong> Inhibits vitamin K epoxide reductase, reducing synthesis of clotting factors II, VII, IX, and X.<br><strong>Active Ingredient(s):</strong> Warfarin<br><strong>Drug Class:</strong> Anticoagulant<br><strong>Use:</strong> Thrombosis prevention, atrial fibrillation<br><strong>Side Effects:</strong> Bleeding, bruising, drug-food interactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Luvox",
  "answer": "<strong>Description:</strong> Treats obsessive-compulsive disorder (OCD).<br><strong>Mechanism:</strong> Inhibits serotonin reuptake to increase serotonin levels in the brain.<br><strong>Active Ingredient(s):</strong> Fluvoxamine<br><strong>Drug Class:</strong> SSRI<br><strong>Use:</strong> OCD, depression<br><strong>Side Effects:</strong> Nausea, drowsiness, sexual dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Plavix",
  "answer": "<strong>Description:</strong> Prevents clot formation after heart attack or stroke.<br><strong>Mechanism:</strong> Inhibits platelet aggregation by blocking ADP receptors on platelets.<br><strong>Active Ingredient(s):</strong> Clopidogrel<br><strong>Drug Class:</strong> Antiplatelet drug<br><strong>Use:</strong> Heart attack, stroke, stent thrombosis prevention<br><strong>Side Effects:</strong> Bleeding, rash, GI upset<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Vibramycin / Adoxa",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic for various infections.<br><strong>Mechanism:</strong> Inhibits bacterial protein synthesis by binding to 30S ribosomal subunit.<br><strong>Active Ingredient(s):</strong> Doxycycline<br><strong>Drug Class:</strong> Tetracycline antibiotic<br><strong>Use:</strong> Respiratory infections, acne, STIs, Lyme disease<br><strong>Side Effects:</strong> GI upset, photosensitivity, tooth discoloration<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Hyzaar",
  "answer": "<strong>Description:</strong> Lowers blood pressure and reduces stroke risk.<br><strong>Mechanism:</strong> Hydrochlorothiazide increases sodium excretion; losartan blocks angiotensin II receptors.<br><strong>Active Ingredient(s):</strong> Hydrochlorothiazide, Losartan<br><strong>Drug Class:</strong> Thiazide diuretic, Angiotensin II blocker<br><strong>Use:</strong> Hypertension<br><strong>Side Effects:</strong> Dizziness, fatigue, electrolyte imbalance<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Kytril / Sancuso",
  "answer": "<strong>Description:</strong> Prevents nausea and vomiting from chemotherapy or surgery.<br><strong>Mechanism:</strong> Blocks 5-HT3 receptors in the brain and gut.<br><strong>Active Ingredient(s):</strong> Granisetron<br><strong>Drug Class:</strong> Antiemetic drug<br><strong>Use:</strong> Nausea and vomiting prevention<br><strong>Side Effects:</strong> Headache, constipation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, transdermal, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Restoril",
  "answer": "<strong>Description:</strong> Short-term treatment of insomnia.<br><strong>Mechanism:</strong> Enhances GABA activity by binding to benzodiazepine receptors.<br><strong>Active Ingredient(s):</strong> Temazepam<br><strong>Drug Class:</strong> Benzodiazepine<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Drowsiness, dizziness, dependence<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Prevacid",
  "answer": "<strong>Description:</strong> Treats GERD, ulcers, and acid-related disorders.<br><strong>Mechanism:</strong> Inhibits H+/K+ ATPase enzyme in gastric parietal cells.<br><strong>Active Ingredient(s):</strong> Lansoprazole<br><strong>Drug Class:</strong> Proton-pump inhibitor<br><strong>Use:</strong> GERD, ulcers<br><strong>Side Effects:</strong> Headache, abdominal pain, diarrhea<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Augmentin",
  "answer": "<strong>Description:</strong> Broad-spectrum antibiotic for bacterial infections.<br><strong>Mechanism:</strong> Amoxicillin inhibits bacterial cell wall synthesis; clavulanic acid inhibits beta-lactamase enzymes.<br><strong>Active Ingredient(s):</strong> Amoxicillin, Clavulanic acid<br><strong>Drug Class:</strong> Penicillin antibiotic, Beta-lactamase inhibitor<br><strong>Use:</strong> Respiratory, urinary, and skin infections<br><strong>Side Effects:</strong> Diarrhea, rash, allergic reactions<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Mevacor / Altoprev",
  "answer": "<strong>Description:</strong> Lowers LDL cholesterol and prevents heart disease.<br><strong>Mechanism:</strong> Inhibits HMG-CoA reductase to reduce cholesterol synthesis.<br><strong>Active Ingredient(s):</strong> Lovastatin<br><strong>Drug Class:</strong> Statin<br><strong>Use:</strong> Hyperlipidemia, cardiovascular prevention<br><strong>Side Effects:</strong> Muscle pain, liver enzyme elevation<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
,
			{
  "question": "ProAir / Ventolin / Proventil",
  "answer": "<strong>Description:</strong> Provides quick relief from asthma and COPD symptoms.<br><strong>Mechanism:</strong> Stimulates beta-2 adrenergic receptors, relaxing bronchial smooth muscle.<br><strong>Active Ingredient(s):</strong> Albuterol<br><strong>Drug Class:</strong> Beta-2 agonist<br><strong>Use:</strong> Asthma, bronchospasm, COPD<br><strong>Side Effects:</strong> Tremors, nervousness, rapid heartbeat<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Inhalation",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Ultram",
  "answer": "<strong>Description:</strong> Relieves moderate to moderately severe pain.<br><strong>Mechanism:</strong> Binds to mu-opioid receptors and inhibits norepinephrine and serotonin reuptake.<br><strong>Active Ingredient(s):</strong> Tramadol<br><strong>Drug Class:</strong> Opiate narcotic<br><strong>Use:</strong> Pain management<br><strong>Side Effects:</strong> Dizziness, nausea, constipation<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Sonata",
  "answer": "<strong>Description:</strong> Short-term treatment for insomnia.<br><strong>Mechanism:</strong> Binds to benzodiazepine receptors, enhancing GABA activity.<br><strong>Active Ingredient(s):</strong> Zaleplon<br><strong>Drug Class:</strong> Z-drug / hypnotic<br><strong>Use:</strong> Insomnia<br><strong>Side Effects:</strong> Dizziness, headache, drowsiness<br><strong>Controlled Substance:</strong> Yes (CIV)<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zebeta",
  "answer": "<strong>Description:</strong> Reduces high blood pressure and improves heart function.<br><strong>Mechanism:</strong> Blocks beta-1 adrenergic receptors, reducing heart rate and cardiac output.<br><strong>Active Ingredient(s):</strong> Bisoprolol<br><strong>Drug Class:</strong> Beta-blocker<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Fatigue, bradycardia, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Zovirax",
  "answer": "<strong>Description:</strong> Treats herpes virus infections including shingles and cold sores.<br><strong>Mechanism:</strong> Inhibits viral DNA polymerase, preventing viral replication.<br><strong>Active Ingredient(s):</strong> Acyclovir<br><strong>Drug Class:</strong> Antiviral drug<br><strong>Use:</strong> Herpes simplex, shingles, chickenpox<br><strong>Side Effects:</strong> Nausea, diarrhea, headache<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral, topical, IV",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Aceon",
  "answer": "<strong>Description:</strong> Treats high blood pressure and heart failure.<br><strong>Mechanism:</strong> Inhibits the angiotensin-converting enzyme (ACE), reducing blood pressure.<br><strong>Active Ingredient(s):</strong> Perindopril<br><strong>Drug Class:</strong> ACE inhibitor<br><strong>Use:</strong> Hypertension, heart failure<br><strong>Side Effects:</strong> Cough, dizziness, hyperkalemia<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Desyrel",
  "answer": "<strong>Description:</strong> Used for major depressive disorder and insomnia.<br><strong>Mechanism:</strong> Inhibits serotonin reuptake and blocks histamine and alpha-1 receptors.<br><strong>Active Ingredient(s):</strong> Trazodone<br><strong>Drug Class:</strong> Antidepressant<br><strong>Use:</strong> Depression, insomnia<br><strong>Side Effects:</strong> Drowsiness, dry mouth, dizziness<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Actos",
  "answer": "<strong>Description:</strong> Helps control blood sugar levels in type 2 diabetes.<br><strong>Mechanism:</strong> Improves insulin sensitivity by activating PPAR-gamma receptors.<br><strong>Active Ingredient(s):</strong> Pioglitazone<br><strong>Drug Class:</strong> Thiazolidinedione<br><strong>Use:</strong> Type 2 diabetes<br><strong>Side Effects:</strong> Edema, weight gain, risk of heart failure<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Proscar",
  "answer": "<strong>Description:</strong> Treats enlarged prostate (BPH).<br><strong>Mechanism:</strong> Inhibits 5-alpha reductase, reducing conversion of testosterone to DHT.<br><strong>Active Ingredient(s):</strong> Finasteride<br><strong>Drug Class:</strong> 5-alpha reductase inhibitor<br><strong>Use:</strong> Benign prostatic hyperplasia (BPH)<br><strong>Side Effects:</strong> Decreased libido, erectile dysfunction<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
},
{
  "question": "Actonel",
  "answer": "<strong>Description:</strong> Treats and prevents osteoporosis.<br><strong>Mechanism:</strong> Inhibits osteoclast-mediated bone resorption.<br><strong>Active Ingredient(s):</strong> Risedronate<br><strong>Drug Class:</strong> Bisphosphonate<br><strong>Use:</strong> Osteoporosis, Paget's disease<br><strong>Side Effects:</strong> GI upset, bone pain, jaw problems (rare)<br><strong>Controlled Substance:</strong> No<br><strong>Route:</strong> Oral",
  "tags": ["#all", "#medications", "#top200"]
}
			
			
			]

	};
 const modal = document.getElementById('flashcard-modal');
  const modalClose = modal.querySelector('.close-btn');
  const flashcardElement = modal.querySelector('.flashcard');
  const flashcardFront = modal.querySelector('.front p');
  const flashcardBack = modal.querySelector('.back p');
  const prevCardBtn = document.getElementById('prev-card');
  const nextCardBtn = document.getElementById('next-card');
  const shuffleBtn = document.getElementById('shuffle-deck');
  const gotItBtn = document.getElementById('got-it-btn');
  const cardNumberDisplay = document.getElementById('card-number-display');

  let completedCards = JSON.parse(localStorage.getItem("completedCards")) || [];
  let currentDeck = [];
  let filteredDeck = [];
  let currentCardIndex = 0;
  let currentTagFilter = "#all";
  let isFlipped = false;

  function loadCard() {
    if (!filteredDeck.length) return;

    const card = filteredDeck[currentCardIndex];
    flashcardFront.textContent = card.question;
    flashcardBack.innerHTML = card.answer;
    isFlipped = false;
    flashcardElement.classList.remove('flipped');

    cardNumberDisplay.textContent = "Card " + (currentCardIndex + 1) + " of " + filteredDeck.length;
  }

  function applyTagFilter(tag) {
    currentTagFilter = tag;
    filteredDeck = tag === "#all" ? currentDeck : currentDeck.filter(card => card.tags && card.tags.includes(tag));
    currentCardIndex = 0;
    loadCard();
  }

  document.querySelectorAll('.view-deck-btn').forEach(button => {
    button.addEventListener('click', () => {
      const deckName = button.getAttribute('data-deck');
      currentDeck = flashcardData[deckName] || [];
      applyTagFilter("#all");
      modal.classList.remove('hidden');

		document.body.classList.add("modal-open");

    });
  });

  modalClose.addEventListener('click', () => modal.classList.add('hidden'));
	
	document.body.classList.remove("modal-open");

  flashcardElement.addEventListener('click', () => {
    isFlipped = !isFlipped;
    flashcardElement.classList.toggle('flipped', isFlipped);
  });

  prevCardBtn.addEventListener('click', () => {
    if (!filteredDeck.length) return;
    currentCardIndex = (currentCardIndex - 1 + filteredDeck.length) % filteredDeck.length;
    loadCard();
  });

  nextCardBtn.addEventListener('click', () => {
    if (!filteredDeck.length) return;
    currentCardIndex = (currentCardIndex + 1) % filteredDeck.length;
    loadCard();
  });

  shuffleBtn.addEventListener('click', () => {
    if (!filteredDeck.length) return;
    filteredDeck = [...filteredDeck].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    loadCard();
  });

  gotItBtn.addEventListener('click', () => {
    const card = filteredDeck[currentCardIndex];
    const id = card.question;

    if (!completedCards.includes(id)) {
      completedCards.push(id);
      localStorage.setItem("completedCards", JSON.stringify(completedCards));
    }

    filteredDeck.splice(currentCardIndex, 1);

    if (filteredDeck.length === 0) {
      alert("You've finished all cards!");
      modal.classList.add('hidden');
      return;
    }

    if (currentCardIndex >= filteredDeck.length) {
      currentCardIndex = 0;
    }

    loadCard();
  });

  window.resetProgress = function () {
    localStorage.removeItem("completedCards");
    location.reload();
  };

  document.querySelectorAll(".lecture-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-tag");
      applyTagFilter(tag);
    });
  });
});