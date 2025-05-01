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
    const flashcardData = {		'earth': [
  {
    "question": "What is regulation?",
    "answer": "Regulation refers to actions by the federal or local government directed at influencing market outcomes."
  },
  {
    "question": "What is a price ceiling?",
    "answer": "A price “ceiling” is a limit on how _high_ prices can go."
  },
  {
    "question": "What happens when a price ceiling is introduced (e.g. rent control)?",
    "answer": "We have generated a situation of excess demand. We have a shortage!"
  },
  {
    "question": "Who will oppose rent control and why?",
    "answer": "Landlords will oppose this — lost income."
  },
  {
    "question": "What is the difference between a binding and non-binding price ceiling?",
    "answer": "A binding price ceiling is below equilibrium and has an impact. A non-binding one is above equilibrium and has no effect."
  },
  {
    "question": "What justification is often given for rent control?",
    "answer": "Safe, stable, affordable housing was first recognized as a human right in the 1948 Universal Declaration of Human Rights."
  },
  {
    "question": "What is rent control a form of?",
    "answer": "Rent control is a form of redistribution from landlords to tenants (money that landlords were previously pocketing now stays in the pockets of tenants)."
  },
  {
    "question": "What is a means test?",
    "answer": "A means test is a determination of whether an individual or family is eligible for government assistance, based upon whether the individual or family possesses the means to do without that help."
  },
  {
    "question": "What is a price floor?",
    "answer": "A price floor is a limit on how _low_ prices can go."
  },
  {
    "question": "What happens in the labor market when a price floor (minimum wage) is introduced?",
    "answer": "LD – LS < 0 ? Unemployment"
  },
  {
    "question": "What is the difference between a binding and non-binding price floor?",
    "answer": "A binding price floor is above equilibrium and causes a surplus (unemployment). A non-binding one is below equilibrium and has no effect."
  },
  {
    "question": "What is a monopsony in the labor market?",
    "answer": "A market where there is only 1 firm that can hire people (e.g., coal mine owner in a town where the company is the only source of employment)."
  },
  {
    "question": "What might happen if a minimum wage is introduced in a monopsony?",
    "answer": "Introducing a minimum wage might result in an increase (or decrease) in the number of people employed."
  },
  {
    "question": "What are the two most important goals for government policy?",
    "answer": "1. Equitable allocation of resources: Equity\n2. Increasing total output/surplus: Efficiency"
  },
  {
    "question": "What does equity refer to?",
    "answer": "Equity refers to the quality of being fair and impartial."
  },
  {
    "question": "What are two ways to define fairness?",
    "answer": "1. “It’s not fair if the results aren’t fair” (Utilitarianism: the greatest happiness for the greatest number)\n2. “It’s not fair if the rules aren’t fair” (the requirement that people in similar situations should be treated similarly)"
  },
  {
    "question": "What happens to quantity transacted when we introduce a binding price intervention?",
    "answer": "We decrease the quantity transacted."
  },
  {
    "question": "What is the cost of trades that no longer happen due to intervention?",
    "answer": "These are trades that would have been mutually beneficial for both seller and buyer. We refer to them as deadweight loss."
  },
  {
    "question": "Can economic principles alone resolve equity vs. efficiency conflicts?",
    "answer": "No. Political philosophy plays an important role in striking a balance between these two goals."
  },
  {
    "question": "What does the Rawlsian approach ask of you?",
    "answer": "It asks you to put yourself behind a veil of ignorance in an attempt to maximize fairness."
  },
  {
    "question": "What does Nozick argue?",
    "answer": "A just society is one that resulted from an unfettered free market."
  }
]
  , 'exam1': [
		{"question": "Primary structure?", "answer": "<strong>Primary Structure</strong><br>Determines protein folds, shape, and function. <br> One change in amino acid will completely change protein function (e.g, sickle cell anemia)<br> Sequence of Amino Acids (N -> C terminus) <br> Stabilized via covalent peptide bonds", "tags": ["#proteins"]},
		 {"question": "Secondary Structure?", 
		  "answer": "<strong> Interactions in the peptide backbone promote folding into repeated pattern</strong><br><strong>Stabilized:</strong> Hydrogen bonds in the peptide backbone<br> <strong>Examples:</strong>Alpha Helicies(4 amino acids away, the amino group H bonds to the carboxyl group O) and Beta pleated sheets<br>Function: provide initial folding and structural support <img src='Images_Flash/a-helix.png' alt='a-helix Diagram'><br> <img src='Images_Flash/b-sheet.png' alt='B-sheet Diagram'>", "tags": ["#proteins"]}, 
		  
		{"question": "Tertiary Structure?", "answer":"<strong>R group defines the overall 3D folding shape of a single polypeptide chain</strong><br> <strong>Bond types(5):</strong> Ionic, Disulfide, Hydrogen, Hydrophobic(inside), Hydrophilic(outside)<br><strong>Function:</strong> Determines protein's specific function and binding abilities<br> <strong>Example:</strong> Enzymes have active sites formed at this level<br> Misfolds can cause neurologic diseases such as alzheimers and parkinsons<br>"}, 
		{"question": "Quarternary Structure?", "answer": "<strong>Definition:</strong> Arrangement of 2+ polypeptide chains (subunits)<br> Same bonds as Tertiary <br> Required for function of some proteins (hemoglobin)", "tags": ["#proteins"]},
		{ "question": "Rank the intermolecular forces from weakest to strongest (bio context)","answer": "<strong>1. London Dispersion Forces (LDF)/ Van der waals:</strong> Weakest. Temporary electron shifts.<br><em>Example:</em> Lipid tail clustering in membranes.<br><br><strong>2. Dipole-Dipole Interactions:</strong> Polar molecules with permanent dipoles.<br><em>Example:</em> Polar amino acid side chains.<br><br>\<strong>3. Hydrogen Bonding:</strong> Strong dipole interaction with H + N/O/F.<br><em>Example:</em> DNA base pairing, protein folding.<br><br>\<strong>4. Ionic Bonds:</strong> Strongest. Full charge attractions.<br><em>Example:</em> Salt bridges in proteins.", "tags": ["#all", "#biology", "#intermolecularForces"]},
		
		{"question": "Hydrogen Bonding in Folded Proteins", "answer": "<strong>Backbone to backbone </strong> Hydrogen bonding between atoms of two peptide bonds<br><strong>Backbone to sidechain</strong> Hydrogen bonding between atoms a peptide bond and an amino acid side chain <br><strong>Sidechain to Side Chain</strong> Hydrogen bonds between atoms of two amino acid side chains", "tags": ["#proteins"]},
		
		{"question": "Denaturation?", "answer": "Loss of structure and function due to heat, pH changes, or chemicals", "tags": ["#proteins"]},
		{"question": "Chaperone proteins?", "answer": "Help other proteins fold properly", "tags": ["#proteins"]},
		{"question": "Hemoglobin structure?", "answer": "Quarternary Structure with 2 a-helixes and 2 b-sheets", "tags": ["#proteins"]},
		{"question": "Prevention of misfolds?", "answer": "Chaperone proteins: assist protein folding<br>Ubiquitin: Tags misfolds", "tags": ["#proteins"]},
		{"question": "Condensation", "answer": "<strong>An energetically unfavorable reaction</strong><br>Two subunits combine to form a larger molecule, with the loss of water.", "tags": ["#terminology", "#biochemistry"]},
		{"question": "Hydrolysis", "answer": "<strong>An energetically favorable reaction</strong><br>A molecule is broken down into smaller subunits through the addition of water.", "tags": ["#terminology", "#biochemistry"]},
		{"question": "Subunit", "answer": "Also called a <strong>monomer</strong><br>The simplest version of a molecule that makes up a larger chain.<br>Examples: sugars, fatty acids, amino acids, nucleotides.", "tags": ["#terminology", "#biochemistry"]},
		{"question": "Macromolecule", "answer": "A type of <strong>polymer</strong> — a large chain molecule made of subunit building blocks.<br>Examples: polysaccharides, lipids, proteins, RNA, DNA.", "tags": ["#terminology", "#biochemistry"]},
		{"question": "Metabolism", "answer": "<strong>The sum of all chemical reactions</strong> in a biological system at a given time.<br>Involves energy use and production.", "tags": ["#terminology", "#biochemistry", "#metabolism"]},
		{"question": "Anabolic Reactions", "answer": "<strong>Condensation reactions</strong> that require energy to build complex molecules from simple ones.", "tags": ["#terminology", "#biochemistry", "#metabolism"]},
		{"question": "Catabolic Reactions", "answer": "<strong>Hydrolysis reactions</strong> that release energy by breaking down complex molecules into simpler ones.", "tags": ["#terminology", "#biochemistry", "#metabolism"]},
		{"question": "Free Energy", "answer": "The energy in a system that can be used to do work.<br>Released in <strong>exergonic</strong> reactions and consumed in <strong>endergonic</strong> reactions.", "tags": ["#terminology", "#biochemistry", "#energy"]},
		{"question": "Enzymes", "answer": "Catalysts that lower activation energy<br>so that reactions occur more easily and with less energy input.", "tags": ["#terminology", "#enzymes", "#biochemistry"]},
		{"question": "Activation Energy", "answer": "The energy needed to start a reaction.<br><strong>Calculated by:</strong> transition state energy - reactant energy.", "tags": ["#terminology", "#biochemistry"]},
		{"question": "Endergonic Reactions", "answer": "Reactions that <strong>require energy input</strong><br>Must be coupled with an exergonic reaction to occur.", "tags": ["#terminology", "#biochemistry", "#energy"]},
		{"question": "Exergonic Reactions", "answer": "Reactions that <strong>release energy</strong> (often in the form of ATP or heat).", "tags": ["#terminology", "#biochemistry", "#energy"]},

		{"question": "Amino Acid", "answer": "<strong>The building blocks of proteins.</strong><br>Each has a central carbon atom bonded to an amino group, carboxyl group, a hydrogen, and a variable side chain (R group).", "tags": ["#proteins", "#terminology"]},
		{"question": "Peptide Bond", "answer": "A covalent bond linking the carboxyl group of one amino acid to the amino group of another.", "tags": ["#proteins", "#terminology"]},
		{"question": "Polypeptide", "answer": "A chain of amino acids linked by peptide bonds.<br>One or more polypeptides fold into a functional protein.", "tags": ["#proteins", "#terminology"]},
		{"question": "Protein", "answer": "A molecule made of one or more polypeptide chains,<br>folded into a specific 3D shape necessary for its function.", "tags": ["#proteins", "#terminology"]},
		{"question": "R Group (Side Chain)", "answer": "The variable group on an amino acid that determines its chemical nature<br>(e.g., hydrophobic, hydrophilic, charged).", "tags": ["#proteins", "#terminology"]},
		{"question": "Hydrogen Bond", "answer": "Weak bond between hydrogen and electronegative atoms like oxygen or nitrogen.<br>Occurs in both backbone and R-group interactions.", "tags": ["#proteins", "#terminology"]},
		{"question": "Ionic Interaction (Salt Bridge)", "answer": "Attraction between oppositely charged R groups.", "tags": ["#proteins", "#terminology"]},
		{"question": "Hydrophobic Interaction", "answer": "Nonpolar R groups cluster away from water,<br>often buried in the interior of the protein.", "tags": ["#proteins", "#terminology"]},
		{"question": "Disulfide Bridge", "answer": "A covalent bond between two cysteine residues;<br>stabilizes tertiary structure.", "tags": ["#proteins", "#terminology"]},
		{"question": "Antibody", "answer": "A Y-shaped protein made of two heavy chains and two light chains, stabilized by disulfide bonds.<br> Recognizes and binds to specific epitopes on antigens using its variable regions.<br> Immunoglobulins are bivalent, meaning they can bind two identical antigens at once. <br> <img src='Images_Flash/antibody.png' alt ='Antibody Diagram'>", "tags": ["#proteins", "#terminology", "#immunology"]},
		{"question": "Intramolecular Interactions?", "answer": "Interactions inbetween amino acids parts like R groups and peptide bonds", "tags": ["#proteins"]},
		{"question": "Intermolecular Interactions?", "answer": "Temporary association between proteins. Enzyme ascociating with a substrate. Will not find covalent bonds like disulfide bonds with proteins and ligands. It is a job that y0ou only want for a certain period of time. we dont want the substrate made by  the enzyme to be held at the site. Non-covalent interactions that also help support tertiary structure.", "tags": ["#proteins"]},
		{"question": "SDS-PAGE", "answer": "Thousands of proteins being  seperated. Creates a smear of bands where you cant really identify what it is. Purified proteins you probably could use SDS to identify the protein. Each of the lanes is like a well, different cell types. Healthy cells vs stress cells. Thousands of proteins start at the top. 1) Treat our proteines, want them to run according to their molecular weight. Add BME to break disulfide bonds. We want to break the tertiary and quarternary strucutre. Add SDS, coats all the proteins with a uniform negative charge to get rid of any differences in intrinsic charge. Current running through the gel. The proteins with their negative charge are going to migrate towards the bottom. What else does SDS do? Coating in a uniform negative charge, gets rid of (with heat) the non covalent interactions (electrostatic). Will only travel as far as their molecular weight allows them to go. Smaller proteins can travel further. Seperation through molecular weight. Lets say we start w a cell lysate, were going to need to follow through w a western blot.", "tags": []},
		{"question": "Western Blot", "answer": "Incubate protein w primary and secondary antibodies. (rabbit antiprotein A, means - what animal the antibody was made in. what comes after anti is what the antibody recognizes. Generates antibodies against protein A) 1. primary antibody, rabit antiprotein A. 2. secondary antibody, goat antirabbit A. Linked to an enzyme, when it binds to the substrate it willl produce light. Why use secondary substrate?: Amplify the signal. Multiple copies  of the secondary can bind to the primary to get more light. More cost effective because we can use the primary antibody again for multiple different experiments, bc the enzyme will bind to the second not the first", "tags": []},
		{"question": "Immunoflorescnenfce Microscopy", "answer": "Want to know where my protein is in the cell? Not using a cell lysate (not disturbing our cells, just visualize what is happening). Found  near another protein, certain part of the cell? Florescent tags have to be different colors. Have to be made in different species. Golgi - what is primary antibody going to recognize? Protein found in the golgi. 2 sets of antibodies: protein A, protein found in golgi. Have a secondary made in a different animal that recognizes rabbit antiprotein A. ex. goat antirabbit. Primary antibodies mustf be made in different animals. 1 haws red tag. 1 has green tag. both r diff animals. distincly labeling different proteins. If one was mislabeled, the antibodies could overlab. ", "tags": []},
		{"question": "Coimmunization", "answer": "", "tags": []},
		{"question": "", "answer": "", "tags": []},
		{"question": "", "answer": "", "tags": []},
		{"question": "Protein Domain", "answer": "A modular and independently folding part of a protein<br>that can have a specific function.", "tags": ["#proteins", "#terminology"]},
		{"question": "Membrane Protein", "answer": "Protein that spans or interacts with the cell membrane,<br>often with hydrophobic side chains exposed to lipid tails.", "tags": ["#proteins", "#terminology", "#cellbiology"]},
		{"question": "Chaperones", "answer": "Proteins that assist the folding of other proteins and prevent misfolding.", "tags": ["#proteins", "#terminology"]},
		{"question": "Misfolded Proteins", "answer": "Main cause of human degenerative and neurodegenerative diseases. Can lead to diseases like Alzheimer’s, Parkinson’s, Huntington’s, and ALS.", "tags": ["#proteins", "#terminology", "#disease"]},
		{"question": "Ubiquitin", "answer": "A small protein that tags damaged or misfolded proteins for degradation.", "tags": ["#proteins", "#terminology", "#cellregulation"]},
		{"question": "Proteasome", "answer": "A complex that breaks down proteins tagged with ubiquitin.", "tags": ["#proteins", "#terminology", "#cellregulation"]},
		{"question": "Protein Conformation", "answer": "The 3D shape of a folded protein.", "tags": ["#proteins", "#terminology"]},
		{"question": "Ligand", "answer": "A molecule that a protein binds to.", "tags": ["#proteins", "#terminology"]},
		{"question": "Binding Site", "answer": "The part of the protein where the ligand binds.", "tags": ["#proteins", "#terminology"]},
		{"question": "Protein-Ligand Interactions", "answer": "Weak forces (e.g., H-bonds, van der Waals, hydrophobic, electrostatic)<br>allow reversible binding between proteins and ligands.", "tags": ["#proteins", "#terminology"]},
		{"question": "Electrostatic Interaction", "answer": "Attractive or repulsive force between charged groups.", "tags": ["#proteins", "#terminology"]},
		{"question": "Specificity", "answer": "The ability of a protein to selectively bind a particular molecule.", "tags": ["#proteins", "#terminology"]},
		{"question": "Substrate", "answer": "The molecule that an enzyme acts on.", "tags": ["#proteins", "#terminology", "#enzymes"]},
		{"question": "Catalysis", "answer": "The acceleration of a chemical reaction by an enzyme.", "tags": ["#proteins", "#terminology", "#enzymes"]},
		{"question": "Coenzymes", "answer": "Small organic molecules required for enzyme function.", "tags": ["#proteins", "#terminology", "#enzymes"]},
		{"question": "Feedback Inhibition", "answer": "A control mechanism where a product inhibits an earlier step<br>to regulate the metabolic pathway.", "tags": ["#proteins", "#terminology", "#regulation"]},
		{"question": "Allostery", "answer": "Regulation of protein activity through binding at a site<br>other than the active site.", "tags": ["#proteins", "#terminology", "#regulation"]},
		{"question": "Allosteric Negative Regulation", "answer": "A regulatory molecule binds and inactivates the enzyme. Change in conformation of the protein/enzyme. If it turns it off its negative.", "tags": ["#proteins", "#terminology", "#regulation"]},
		{"question": "Allosteric Positive Regulation", "answer": "A regulatory molecule binds and activates the enzyme. Change in conformation of the protein/enzyme. If it turns it on its positive regulation.", "tags": ["#proteins", "#terminology", "#regulation"]},
		{"question": "Is phosphate adding allosteric regulation?", "answer": "An activator binds to the regulatory site noncovalently: Positive. Phosphate is added covanelty. This reaction is catalyzed by a protein kinase. Happened at different site thst is not active site. Changed conformation so that protein is turned on. Phosphetase removes phosphates.", "tags": ["#proteins"]},
		{"question": "Phosphorylation", "answer": "Addition of a phosphate group to a protein<br>(usually by kinases) to regulate its activity.", "tags": ["#proteins", "#terminology", "#regulation"]},
		{"question": "Regulatory Site", "answer": "A location on the protein where a regulatory molecule can bind.", "tags": ["#proteins", "#terminology"]},
		{"question": "Protein Analysis", "answer": "The study of proteins using methods like Western Blot,<br>Immunofluorescence, and Co-immunoprecipitation.", "tags": ["#proteins", "#terminology", "#labtechniques"]},
		{"question": "In Silico Analysis", "answer": "Studying proteins using computational modeling and bioinformatics tools.", "tags": ["#proteins", "#terminology", "#bioinformatics"]},
		{"question": "Nuclear Localization Signal", "answer": "A protein sequence tag that directs the protein into the nucleus.", "tags": ["#proteins", "#terminology", "#cellbiology"]},
		{"question": "Blocking Solution", "answer": "A solution used to prevent non-specific binding of antibodies<br>during immunoassays.", "tags": ["#terminology", "#labtechniques"]},
		{"question": "Disulfide Bonds", "answer": "Covalent bonds between cysteines that stabilize protein structure.", "tags": ["#proteins", "#terminology"]},
		{"question": "Fixing Cells", "answer": "A method used to preserve cellular structures<br>by 'freezing' them in their current state.", "tags": ["#terminology", "#labtechniques"]},
		{"question": "Permeabilize Membrane", "answer": "A technique used to allow antibodies to enter the cell<br>by making the membrane porous.", "tags": ["#terminology", "#labtechniques"]},
		{"question": "Electrophoresis", "answer": "A technique that separates molecules based on size and charge<br>using an electric field.", "tags": ["#terminology", "#labtechniques"]},
		{"question": "Multimerization", "answer": "The assembly of multiple protein subunits into a complex.", "tags": ["#proteins", "#terminology"]},
		{"question": "Constant Region", "answer": "The part of an antibody that remains the same<br>and mediates immune functions.", "tags": ["#proteins", "#terminology", "#immunology"]},
		{"question": "Homogenization", "answer": "A mechanical method to break open cells<br>and release their contents.", "tags": ["#terminology", "#labtechniques"]},
		{"question": "Immunoglobulin", "answer": "A type of antibody that is bivalent<br>(can bind two antigens at once).", "tags": ["#proteins", "#terminology", "#immunology"]},
		{"question": "Colocalization", "answer": "When two fluorescently labeled proteins are located<br>in the same region of the cell.", "tags": ["#proteins", "#terminology", "#labtechniques"]},

		{"question": "Special Case Amino Acids", "answer": "Cysteine: Can form disulfide bonds with other cysteines. Important for stabilizing protein strucutre with covalent linkage.<br> Glycine: Very flexible, smallest amino acid. Found in tight turns of a protein.<br> Proline: Forms a ring with the backbone nitrogen. Causes a rigid kink  in the polypeptide chain. Found where tight turns or constraints are needed.", "tags": ["#proteins", "#l4"]},
		
		{"question": "", "answer": "", "tags": ["#proteins"]},
		{"question": "", "answer": "", "tags": ["#proteins"]},
		{"question": "", "answer": "", "tags": ["#proteins"]}], 
				
		'biology': [
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
}, 
  /*Central Dogma */
  {
    "question": "What is the Central Dogma of molecular biology?",
    "answer": "The Central Dogma describes the flow of genetic information in a cell: <strong>DNA > RNA > Protein</strong>. It explains how genetic information is stored, expressed, and used to build cellular structures. <img src='Images_Flash/flowchart.png' alt = 'Central Dogma'>",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during transcription in the Central Dogma?",
    "answer": "During transcription, <strong>RNA polymerase</strong> reads the DNA template strand and synthesizes a complementary <strong>mRNA</strong> molecule. This occurs in the <strong>nucleus</strong> in eukaryotes and in the cytoplasm in prokaryotes.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during RNA processing (in eukaryotic cells)?",
    "answer": "Before translation, eukaryotic mRNA is modified by adding a <strong>5' cap</strong>, a <strong>3' poly-A tail</strong>, and removing <strong>introns</strong> through splicing. This creates a mature mRNA strand for translation.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during translation in the Central Dogma?",
    "answer": "In translation, ribosomes read the <strong>mRNA codons</strong> and match them with complementary <strong>tRNA anticodons</strong> that bring in specific amino acids, forming a <strong>polypeptide chain</strong> (protein).",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "What does 'self-replicating system' mean in biology?",
    "answer": "A self-replicating system can make all the components needed to reproduce itself. In cells, this includes DNA, RNA, proteins, and the machinery to synthesize them.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "How does the Central Dogma support a self-replicating system?",
    "answer": "The Central Dogma allows DNA to encode proteins like <strong>DNA polymerase</strong> (replicates DNA), <strong>RNA polymerase</strong> (transcribes RNA), and <strong>ribosomal proteins</strong> (make more proteins), enabling the cell to build all parts of itself.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "Why is DNA replication not part of the Central Dogma itself?",
    "answer": "DNA replication is not part of the Central Dogma because it is not part of the information flow <em>from</em> DNA to protein. It is a <strong>preservation step</strong> to copy DNA before cell division.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "What enzymes are involved in each step of the Central Dogma?",
    "answer": "<strong>Replication:</strong> DNA polymerase<br><strong>Transcription:</strong> RNA polymerase<br><strong>Translation:</strong> Ribosome (rRNA + protein), assisted by tRNA and aminoacyl-tRNA synthetase.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "How do mutations affect the flow of information in the Central Dogma?",
    "answer": "Mutations in DNA can lead to changes in the mRNA sequence and alter the amino acid sequence of the protein, potentially affecting structure and function.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  },
  {
    "question": "Summarize the Central Dogma and its importance in life.",
    "answer": "The Central Dogma describes how genetic information is expressed: <strong>DNA ? RNA ? Protein</strong>. It enables cells to create the proteins that build and control life functions, and forms the basis of all biological inheritance and function.",
    "tags": ["#all", "#biology", "#centraldogma", "#APBio", "#lecture1"]
  }, 
  {
    "question": "What enzyme catalyzes transcription from DNA to RNA?",
    "answer": "RNA polymerase catalyzes transcription. It binds to the promoter region of DNA and synthesizes RNA in the 5' to 3' direction.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "Which strand of DNA is used as the template for transcription?",
    "answer": "The <strong>template strand</strong> (also called the antisense or noncoding strand) is read by RNA polymerase in the 3' to 5' direction to synthesize RNA in the 5' to 3' direction.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the coding strand in transcription?",
    "answer": "The coding strand (also called the sense strand) is the DNA strand not used for transcription. It has the same sequence as the RNA (except T is replaced by U).",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What sequence signals the start of transcription?",
    "answer": "The <strong>promoter</strong> region, often including a TATA box in eukaryotes, signals RNA polymerase to bind and start transcription.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during the initiation phase of transcription?",
    "answer": "RNA polymerase binds to the promoter with help from transcription factors, unwinds the DNA, and begins synthesizing the RNA strand at the +1 nucleotide.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during elongation in transcription?",
    "answer": "RNA polymerase moves along the DNA template strand (3' to 5') and synthesizes a complementary RNA strand (5' to 3') by adding RNA nucleotides.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during termination of transcription?",
    "answer": "In prokaryotes, termination occurs when RNA polymerase reaches a terminator sequence. In eukaryotes, it involves a polyadenylation signal and later cleavage of the RNA transcript.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the role of transcription factors in eukaryotic transcription?",
    "answer": "Transcription factors are proteins that bind to DNA sequences near the promoter to help RNA polymerase bind and initiate transcription.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What direction does RNA polymerase synthesize mRNA?",
    "answer": "RNA polymerase synthesizes mRNA in the <strong>5' to 3'</strong> direction, adding nucleotides to the 3' end of the growing RNA strand.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What base pairs are used during transcription?",
    "answer": "A pairs with U (instead of T), T pairs with A, C pairs with G, and G pairs with C when building RNA from DNA.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the function of the TATA box?",
    "answer": "The TATA box is a DNA sequence in the promoter region that helps position RNA polymerase and transcription factors for accurate transcription initiation.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the difference between a prokaryotic and eukaryotic promoter?",
    "answer": "Prokaryotic promoters include -10 and -35 regions; eukaryotic promoters often include a TATA box and require multiple transcription factors for initiation.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "How does RNA polymerase know where to stop transcribing?",
    "answer": "Termination sequences in the DNA (such as a GC-rich hairpin in prokaryotes or polyadenylation signal in eukaryotes) signal the end of transcription.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  }, 
  {
    "question": "What is RNA processing?",
    "answer": "RNA processing is the modification of pre-mRNA in eukaryotes before it becomes mature mRNA. It includes 5' capping, 3' poly-A tail addition, and splicing.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "What is added to the 5' end of the pre-mRNA and why?",
    "answer": "A modified guanine nucleotide called a <strong>5' cap</strong> is added. It protects mRNA from degradation and helps ribosomes bind during translation.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "What is added to the 3' end of the pre-mRNA and what is its function?",
    "answer": "A <strong>poly-A tail</strong> of about 100–250 adenine nucleotides is added. It protects the mRNA from degradation and helps with nuclear export and translation.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "What are introns and exons?",
    "answer": "<strong>Introns</strong> are non-coding sequences that are removed during splicing. <strong>Exons</strong> are coding regions that remain and are joined to form the mature mRNA.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "What enzyme complex performs splicing?",
    "answer": "The <strong>spliceosome</strong>, a complex of proteins and small nuclear RNAs (snRNAs), removes introns and joins exons together.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "Why is splicing important in eukaryotic cells?",
    "answer": "Splicing creates mature mRNA and allows for <strong>alternative splicing</strong>, enabling one gene to code for multiple proteins by rearranging exons.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "What is alternative splicing?",
    "answer": "Alternative splicing is the process where different combinations of exons are joined together, allowing a single gene to produce multiple protein variants.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  },
  {
    "question": "Does RNA processing occur in prokaryotes?",
    "answer": "No. Prokaryotic mRNA does not undergo capping, tailing, or splicing. Transcription and translation are coupled in the cytoplasm.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#APBio", "#lecture1"]
  }, 
  {
    "question": "What is DNA replication and why is it essential for cells?",
    "answer": "DNA replication is the process by which a cell copies its entire genome before cell division, ensuring that each daughter cell receives an identical set of genetic instructions. It is essential for maintaining genetic continuity and enabling growth and repair.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Which enzyme initiates the unwinding of the DNA double helix, and what is its function?",
    "answer": "Helicase initiates DNA replication by unwinding the double helix and breaking the hydrogen bonds between the complementary bases, thereby creating a replication fork where the two DNA strands separate.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "What role does primase play during DNA replication?",
    "answer": "Primase synthesizes a short RNA primer complementary to the DNA template. This primer provides a free 3' hydroxyl group that is necessary for DNA polymerase to begin adding new nucleotides.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Describe the function of DNA polymerase during replication.",
    "answer": "DNA polymerase adds nucleotides to the growing DNA strand in the 5' to 3' direction using the RNA primer as a starting point. It also proofreads the newly synthesized strand using its 3' to 5' exonuclease activity to correct errors.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "What is the difference between the leading and lagging strands during DNA replication?",
    "answer": "The leading strand is synthesized continuously in the 5' to 3' direction as the replication fork opens, while the lagging strand is synthesized discontinuously in short segments called Okazaki fragments, because it is oriented in the 3' to 5' direction relative to the fork.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "How are Okazaki fragments processed and joined together?",
    "answer": "Okazaki fragments are first extended by DNA polymerase and then the RNA primers are removed and replaced with DNA. DNA ligase finally joins the fragments by forming phosphodiester bonds, resulting in a continuous strand.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "What does 'semi-conservative replication' mean?",
    "answer": "Semi-conservative replication means that each new DNA molecule consists of one original (parental) strand and one newly synthesized strand, thereby preserving half of the original DNA in each daughter molecule.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "Explain the significance of the replication fork.",
    "answer": "The replication fork is the region where the DNA double helix is unwound into two single strands. It is the active area where DNA replication occurs, allowing simultaneous synthesis of the leading and lagging strands.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "How does DNA polymerase ensure the accuracy of DNA replication?",
    "answer": "DNA polymerase has a proofreading function (3' to 5' exonuclease activity) that checks and removes incorrectly paired nucleotides, significantly reducing the error rate during DNA synthesis.",
    "tags": ["#all", "#biology", "#replication", "#APBio", "#lecture1", "#frq"]
  },
  {
    "question": "What is translation in molecular biology?",
    "answer": "Translation is the process by which the sequence of a messenger RNA (mRNA) is decoded by a ribosome to build a polypeptide (protein), using transfer RNA (tRNA) to bring in specific amino acids.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#APBio", "#lecture1"]
  },
  {
    "question": "Where does translation occur in eukaryotic cells?",
    "answer": "Translation occurs in the cytoplasm, either on free ribosomes or on ribosomes attached to the rough endoplasmic reticulum.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#APBio", "#lecture1"]
  },
  {
    "question": "What are the three binding sites on the ribosome used during translation?",
    "answer": "<strong>A site (Aminoacyl):</strong> holds the incoming tRNA carrying an amino acid.<br><strong>P site (Peptidyl):</strong> holds the tRNA carrying the growing polypeptide chain.<br><strong>E site (Exit):</strong> holds the empty tRNA before it leaves the ribosome.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#ribosome", "#APBio", "#lecture1"]
  },
  {
    "question": "What does tRNA do during translation?",
    "answer": "Each tRNA molecule carries a specific amino acid and has an anticodon that base-pairs with the corresponding codon on the mRNA, ensuring correct amino acid placement.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#tRNA", "#APBio", "#lecture1"]
  },
  {
    "question": "What is a codon, and how is it used in translation?",
    "answer": "A codon is a sequence of three mRNA nucleotides that codes for a specific amino acid. The codon is read by the ribosome, and the corresponding tRNA anticodon binds to it during translation.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#codon", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the start codon and what does it code for?",
    "answer": "The start codon is <strong>AUG</strong>, which codes for the amino acid <strong>methionine</strong>. It signals the beginning of translation.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#codon", "#APBio", "#lecture1"]
  },
  {
    "question": "What are the stop codons and what do they do?",
    "answer": "The stop codons are <strong>UAA</strong>, <strong>UAG</strong>, and <strong>UGA</strong>. They do not code for amino acids; instead, they signal the ribosome to stop translation and release the finished polypeptide.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#codon", "#APBio", "#lecture1"]
  },
  {
    "question": "How is the correct amino acid added during translation?",
    "answer": "The correct amino acid is delivered by a tRNA with a complementary anticodon. The ribosome ensures correct pairing between the mRNA codon and tRNA anticodon.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#tRNA", "#APBio", "#lecture1"]
  },
  {
    "question": "What role does GTP play in translation?",
    "answer": "GTP provides energy for steps in translation, including ribosome assembly, tRNA binding, translocation along the mRNA, and termination.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#energy", "#APBio", "#lecture1"]
  },
  {
    "question": "How does the ribosome move along the mRNA during translation?",
    "answer": "After peptide bond formation, the ribosome shifts (translocates) along the mRNA 3 nucleotides (one codon) at a time in the 5' to 3' direction, using GTP energy.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#ribosome", "#APBio", "#lecture1"]
  },
  {
    "question": "How does the codon chart work in translation?",
    "answer": "The codon chart is used to translate each 3-base mRNA codon into the corresponding amino acid. For example, UUU codes for phenylalanine, and AUG codes for methionine.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#codonchart", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during translation initiation?",
    "answer": "The small ribosomal subunit binds to the mRNA near the 5' cap (eukaryotes) or Shine-Dalgarno sequence (prokaryotes). The initiator tRNA binds to the start codon (AUG), then the large ribosomal subunit joins to form the initiation complex.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#initiation", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during elongation in translation?",
    "answer": "During elongation, the ribosome moves codon by codon, matching tRNAs with mRNA and forming peptide bonds between amino acids to extend the polypeptide chain.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#elongation", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during translation termination?",
    "answer": "When a stop codon is reached, release factors bind to the ribosome, prompting it to release the completed polypeptide and disassemble the translation machinery.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#termination", "#APBio", "#lecture1"]
  }, 
		{
  "question": "Draw out the Central Dogma. What is happening at each step? What do we mean by self-replicating? How does the system of the Central Dogma allow this?",
  "answer": "<strong>Central Dogma Steps:</strong><br><strong>1. DNA Replication:</strong> DNA replicates before cell division, ensuring each new cell has an identical set of genetic material. The process is self-replicating because DNA encodes the enzymes needed to copy itself.<br><strong>2. Transcription (DNA ? RNA):</strong> RNA polymerase synthesizes mRNA from the DNA template strand. The mRNA carries genetic information from the DNA to the ribosome.<br><strong>3. RNA Processing (Eukaryotes):</strong> In eukaryotes, mRNA is capped at the 5' end, a poly-A tail is added to the 3' end, and introns are spliced out to form mature mRNA.<br><strong>4. Translation (RNA ? Protein):</strong> Ribosomes translate the mRNA into a protein by reading codons and linking amino acids brought by tRNA.<br><br><strong>Self-Replicating:</strong> DNA is self-replicating because it contains the information to create copies of itself, ensuring genetic continuity. The system works because DNA codes for the proteins (like DNA polymerase) required for replication, making the process autonomous.<br><strong>How Central Dogma Supports Self-Replication:</strong> The Central Dogma ensures that the necessary proteins and enzymes needed for replication (such as DNA polymerase) are synthesized, allowing DNA to copy itself and pass on genetic information to new cells.",
  "tags": ["#all", "#biology", "#centraldogma", "#self-replication", "#APBio", "#lecture1"]
}, 
  {
    "question": "What is DNA replication, and why is it considered self-replicating?",
    "answer": "DNA replication is the process by which a cell makes an identical copy of its DNA before cell division. It’s considered self-replicating because DNA contains the information required to produce the enzymes (like DNA polymerase) necessary for replication. The system relies on its own encoded instructions to copy itself. The machinery involved in replication is also encoded by the DNA itself, making the process autonomous and continuous.",
    "tags": ["#all", "#biology", "#centraldogma", "#replication", "#self-replication", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens during the process of transcription in the Central Dogma?",
    "answer": "Transcription is the process by which an RNA molecule is synthesized from a DNA template. RNA polymerase binds to the promoter region of the DNA, separating the DNA strands and synthesizing an mRNA strand complementary to the DNA template. The mRNA carries the genetic code from the DNA to the ribosome for protein synthesis. Transcription occurs in the nucleus in eukaryotic cells and the cytoplasm in prokaryotic cells. The resulting mRNA is a copy of the gene that can be translated into a protein.",
    "tags": ["#all", "#biology", "#centraldogma", "#transcription", "#APBio", "#lecture1"]
  },
  {
    "question": "What are the steps involved in RNA processing, and why is it necessary in eukaryotic cells?",
    "answer": "RNA processing includes three main steps: 1) Adding a <strong>5' cap</strong> to the mRNA to protect it from degradation and assist in ribosome binding for translation. 2) Adding a <strong>3' poly-A tail</strong> to stabilize the mRNA and aid in its export from the nucleus. 3) <strong>Splicing</strong>, where introns (non-coding regions) are removed, and exons (coding regions) are joined together to form mature mRNA. This processing is crucial in eukaryotic cells to ensure the mRNA is functional, stable, and ready for translation into protein. Prokaryotic cells do not perform this level of RNA processing as transcription and translation occur simultaneously in the cytoplasm.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#eukaryotes", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the role of ribosomes in translation, and how do they function?",
    "answer": "Ribosomes are the molecular machines responsible for translating mRNA into protein. They consist of rRNA and protein subunits. The ribosome has three binding sites for tRNA: the <strong>A site</strong> (for aminoacyl-tRNA), the <strong>P site</strong> (where the polypeptide chain grows), and the <strong>E site</strong> (where empty tRNA exits). Translation begins when the ribosome binds to the mRNA and reads the codons, matching each mRNA codon with the corresponding tRNA anticodon. This process adds amino acids to the growing polypeptide chain, following the instructions encoded in the mRNA sequence.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#ribosome", "#APBio", "#lecture1"]
  },
  {
    "question": "How is the genetic information in DNA decoded during translation?",
    "answer": "In translation, the genetic information in the mRNA is decoded into a sequence of amino acids. The mRNA contains codons, which are sequences of three nucleotides that specify a particular amino acid. The ribosome reads the mRNA codons, and tRNA molecules with complementary anticodons bring the corresponding amino acids to the ribosome. Each tRNA has a specific amino acid attached, and as the ribosome moves along the mRNA, it links the amino acids together to form a polypeptide chain. This process is powered by GTP molecules, which provide energy for binding and translocation.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#codons", "#tRNA", "#APBio", "#lecture1"]
  },
  {
    "question": "What happens when a stop codon is reached during translation?",
    "answer": "When the ribosome encounters a stop codon (UAA, UAG, or UGA) on the mRNA, translation is terminated. Release factors bind to the ribosome, causing the ribosome to dissociate and release the newly synthesized polypeptide chain. The polypeptide then folds into its functional three-dimensional structure, ready to perform its role in the cell. The ribosome and tRNA molecules are also released and can participate in another round of translation.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#stopcodon", "#APBio", "#lecture1"]
  },
  {
    "question": "How do mutations in DNA affect the process of translation?",
    "answer": "Mutations in DNA can lead to changes in the mRNA sequence, which in turn may alter the amino acid sequence of the resulting protein. A <strong>missense mutation</strong> changes one amino acid in the protein, potentially affecting its function. A <strong>nonsense mutation</strong> creates a premature stop codon, truncating the protein and likely rendering it nonfunctional. A <strong>silent mutation</strong> does not change the amino acid sequence, as it often occurs in the third base of a codon and does not affect protein function. Mutations can also affect the efficiency of translation or lead to the production of faulty proteins.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#mutation", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the significance of the poly-A tail and 5' cap in mRNA processing?",
    "answer": "The <strong>poly-A tail</strong> added to the 3' end of eukaryotic mRNA protects the mRNA from degradation and aids in its export from the nucleus to the cytoplasm for translation. The <strong>5' cap</strong> added to the 5' end of mRNA serves to protect the mRNA from exonucleases, aids in ribosome recognition during translation, and facilitates the binding of the mRNA to the ribosome.",
    "tags": ["#all", "#biology", "#centraldogma", "#RNAprocessing", "#eukaryotes", "#APBio", "#lecture1"]
  },
  {
    "question": "What is the role of GTP in translation?",
    "answer": "GTP (Guanosine triphosphate) provides energy for several steps during translation. It is used by elongation factors to drive the binding of tRNA to the ribosome, the translocation of the ribosome along the mRNA, and the release of the completed polypeptide. GTP is hydrolyzed to GDP during these processes, releasing the energy required for translation to proceed efficiently.",
    "tags": ["#all", "#biology", "#centraldogma", "#translation", "#GTP", "#APBio", "#lecture1"]
  }, 
  {
    "question": "What is the definition of free energy (G)?",
    "answer": "Free energy (G) is the amount of energy available in a system to do work. It represents the energy that can be used to drive cellular processes.",
    "tags": ["#all", "#biology", "#thermodynamics", "#APBio", "#lecture3"]
  },
  {
    "question": "What does ?G represent in a chemical reaction?",
    "answer": "?G represents the difference in free energy between the reactants and the products of a reaction. If ?G is negative, the reaction releases energy (exergonic). If ?G is positive, the reaction requires energy (endergonic).",
    "tags": ["#all", "#biology", "#thermodynamics", "#APBio", "#lecture3"]
  },
  {
    "question": "What is an anabolic reaction?",
    "answer": "An anabolic reaction is a type of chemical reaction that builds up molecules, requires energy (endergonic), and typically involves condensation reactions with a positive ?G value.",
    "tags": ["#all", "#biology", "#thermodynamics", "#APBio", "#lecture3"]
  },
  {
    "question": "What is a catabolic reaction?",
    "answer": "A catabolic reaction is a type of chemical reaction that breaks down molecules, releases energy (exergonic), and typically involves hydrolysis reactions with a negative ?G value.",
    "tags": ["#all", "#biology", "#thermodynamics", "#APBio", "#lecture3"]
  },
  {
    "question": "How do enzymes function in metabolic reactions?",
    "answer": "Enzymes are catalysts that lower the activation energy (energy barrier) of a chemical reaction, thereby increasing the reaction rate without being consumed in the process.",
    "tags": ["#all", "#biology", "#enzymes", "#APBio", "#lecture3"]
  },
  {
    "question": "What is reaction coupling in cellular metabolism?",
    "answer": "Reaction coupling is the process by which an exergonic reaction (releases energy) drives an endergonic reaction (requires energy). ATP hydrolysis is commonly used to drive endergonic reactions.",
    "tags": ["#all", "#biology", "#thermodynamics", "#ATP", "#APBio", "#lecture3"]
  },
  {
    "question": "What is the role of ATP in cellular reactions?",
    "answer": "ATP (adenosine triphosphate) is used by cells to provide energy for cellular processes. The high-energy bonds in ATP are broken during hydrolysis, releasing energy that can be used to drive reactions in the cell.",
    "tags": ["#all", "#biology", "#ATP", "#APBio", "#lecture3"]
  },
  {
    "question": "How does ATP consumption relate to energy cycles in cells?",
    "answer": "An active cell consumes millions of ATP molecules per second, and each ATP molecule undergoes about 10,000 cycles of synthesis and hydrolysis every day, constantly being recycled to meet energy demands.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#APBio", "#lecture3"]
  },
  {
    "question": "What is the relationship between condensation reactions and ATP?",
    "answer": "Condensation reactions, which occur during the synthesis of polysaccharides, nucleic acids, and proteins, require energy. ATP provides the energy needed for these anabolic reactions through reaction coupling.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#APBio", "#lecture3"]
  },
  {
    "question": "Why does an ATP molecule typically get consumed within a second of its formation?",
    "answer": "ATP is consumed quickly because it is a primary energy source for cellular processes. The energy released from ATP hydrolysis is used to drive biochemical reactions, including those that involve building and breaking down molecules.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#APBio", "#lecture3"]
  }, 
  {
    "question": "What is an enzyme? What is the function of an enzyme?",
    "answer": "An enzyme is a protein that acts as a catalyst to speed up biochemical reactions by lowering the activation energy. Enzymes facilitate reactions without being consumed or altered in the process, allowing cells to perform essential processes more efficiently.",
    "tags": ["#all", "#biology", "#enzymes", "#APBio", "#lecture3"]
  },
  {
    "question": "Why does a cell need energy? What are some cellular processes that require energy?",
    "answer": "Cells need energy to carry out essential functions such as protein synthesis, active transport (e.g., pumping ions across membranes), DNA replication, and cell division. Energy is also required for maintaining homeostasis, muscle contraction, and cellular movement.",
    "tags": ["#all", "#biology", "#energy", "#APBio", "#lecture3"]
  },
  {
    "question": "What are some sources of energy in the cell? What chemical properties of these energy resources allow them to be used as energy?",
    "answer": "Cells primarily use ATP as an energy source. Other sources include glucose (for cellular respiration), fatty acids (for long-term energy storage), and nucleotides (for genetic energy). These molecules have high-energy bonds, which, when broken, release energy that can be used for cellular processes.",
    "tags": ["#all", "#biology", "#energy", "#ATP", "#APBio", "#lecture3"]
  },
  {
    "question": "Diagram an exergonic reaction. What is an important property of an exergonic reaction?",
    "answer": "An exergonic reaction is one where the free energy (?G) is negative, meaning that the reaction releases energy to the surroundings. A key property of exergonic reactions is that they occur spontaneously, such as the hydrolysis of ATP.",
    "tags": ["#all", "#biology", "#thermodynamics", "#energy", "#exergonic", "#APBio", "#lecture3"]
  }, 
  {
    "question": "Explain the role of metabolism in a cell. What types of reactions are involved, and how do anabolic and catabolic reactions interact with each other?",
    "answer": "Metabolism refers to the entire network of chemical reactions that occur within a cell, enabling it to maintain life. These reactions can be classified as anabolic (building molecules, requiring energy) and catabolic (breaking down molecules, releasing energy). Anabolic reactions often require energy provided by catabolic reactions, creating a cycle where catabolic reactions release energy that is used to fuel anabolic reactions, ensuring the cell’s energy balance is maintained.",
    "tags": ["#all", "#biology", "#metabolism", "#APBio", "#lecture3"]
  },
  {
    "question": "Why are enzymes significant within cells? How do they influence the rate of chemical reactions and the activation energy?",
    "answer": "Enzymes are crucial for catalyzing biochemical reactions in cells by lowering the activation energy required for reactions to occur. This makes reactions happen faster and more efficiently. Enzymes achieve this by stabilizing the transition state of reactants, allowing reactions to proceed at a lower energy cost. Enzymes also enable cells to control and regulate metabolic pathways in a highly specific manner.",
    "tags": ["#all", "#biology", "#enzymes", "#APBio", "#lecture3"]
  },
  {
    "question": "Explain the importance of ATP in cellular energy processes. How is ATP synthesized and used in the cell?",
    "answer": "ATP (adenosine triphosphate) is the primary energy carrier in cells. It stores energy in its high-energy phosphate bonds, which can be broken to release energy for cellular processes. ATP is synthesized through cellular respiration and other energy-producing reactions. When ATP is hydrolyzed into ADP (adenosine diphosphate) and inorganic phosphate (Pi), energy is released, which is then used to power endergonic (energy-requiring) reactions like protein synthesis, muscle contraction, and active transport.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#APBio", "#lecture3"]
  },
  {
    "question": "What are anabolic reactions, and how do they contribute to the synthesis of important biological molecules? Provide examples of anabolic processes.",
    "answer": "Anabolic reactions are biosynthetic reactions that build larger, more complex molecules from smaller units, requiring energy input. These reactions typically involve condensation reactions, where water is removed to form bonds between molecules. Examples of anabolic processes include the synthesis of proteins from amino acids (protein synthesis), the formation of DNA from nucleotides (DNA replication), and the synthesis of polysaccharides from monosaccharides (glycogen or starch synthesis).",
    "tags": ["#all", "#biology", "#anabolic", "#synthesis", "#APBio", "#lecture3"]
  },
  {
    "question": "What are catabolic reactions, and how do they release energy? Explain their role in cellular metabolism.",
    "answer": "Catabolic reactions are metabolic pathways that break down large molecules into smaller ones, releasing energy in the process. These reactions are exergonic, meaning they release energy, often in the form of ATP. Catabolic reactions are essential for providing energy for cellular processes. Examples include the breakdown of glucose in glycolysis and cellular respiration, where glucose is broken down into pyruvate, releasing energy used to generate ATP.",
    "tags": ["#all", "#biology", "#catabolic", "#breakdown", "#APBio", "#lecture3"]
  },
  {
    "question": "What is the significance of reaction coupling in cellular metabolism? How does ATP hydrolysis drive endergonic reactions?",
    "answer": "Reaction coupling is the process where an exergonic reaction (one that releases energy) is paired with an endergonic reaction (one that requires energy). ATP hydrolysis is often used to drive endergonic reactions in the cell. The energy released from ATP hydrolysis (breaking the high-energy phosphate bonds) is used to power processes like the synthesis of macromolecules, muscle contraction, or active transport, thus coupling the energy-releasing process with energy-requiring processes.",
    "tags": ["#all", "#biology", "#reactioncoupling", "#ATP", "#energy", "#APBio", "#lecture3"]
  }, 
  {
    "question": "What role do enzymes play in the efficiency of cellular reactions? How do they specifically lower activation energy and increase the rate of reactions?",
    "answer": "Enzymes act as biological catalysts, speeding up reactions by lowering the activation energy required for the reaction to occur. They do this by stabilizing the transition state of the reactants, thus reducing the energy needed to break bonds. This allows reactions to proceed faster and more efficiently, which is essential for maintaining life processes in cells.",
    "tags": ["#all", "#biology", "#enzymes", "#APBio", "#lecture3"]
  },
  {
    "question": "How does ATP hydrolysis help power cellular processes? Provide examples of processes that use the energy released from ATP hydrolysis.",
    "answer": "ATP hydrolysis releases energy when the high-energy phosphate bonds are broken, converting ATP into ADP and inorganic phosphate (Pi). This energy is used to drive various cellular processes, such as active transport across membranes (e.g., sodium-potassium pump), muscle contraction, and the synthesis of macromolecules like proteins and nucleic acids. These energy-requiring processes are coupled with ATP hydrolysis to ensure they occur efficiently.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#hydrolysis", "#APBio", "#lecture3"]
  },
  {
    "question": "Why is ATP considered the main energy carrier in cells? How does its structure relate to its function?",
    "answer": "ATP is considered the main energy carrier because it stores energy in its high-energy phosphate bonds. The structure of ATP consists of an adenine base, ribose sugar, and three phosphate groups. The bond between the second and third phosphate groups contains high potential energy, which, when broken through hydrolysis, releases energy for cellular activities. This makes ATP a versatile molecule that can efficiently transfer energy where needed.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#APBio", "#lecture3"]
  },
  {
    "question": "What are the key differences between anabolic and catabolic reactions? How do they work together in cellular metabolism?",
    "answer": "Anabolic reactions build larger molecules from smaller units, requiring energy input (endergonic), while catabolic reactions break down complex molecules into simpler ones, releasing energy (exergonic). These two types of reactions work together in cellular metabolism, with catabolic reactions providing the energy required for anabolic processes. For example, the breakdown of glucose during cellular respiration releases energy, which is used to synthesize ATP that powers the building of proteins and other cellular structures.",
    "tags": ["#all", "#biology", "#metabolism", "#anabolic", "#catabolic", "#APBio", "#lecture3"]
  },
  {
    "question": "Explain the process of reaction coupling. How does ATP hydrolysis drive endergonic reactions?",
    "answer": "Reaction coupling involves pairing an exergonic reaction (which releases energy) with an endergonic reaction (which requires energy). ATP hydrolysis, an exergonic reaction, releases energy that is used to drive endergonic reactions. For example, the energy from ATP hydrolysis powers processes like protein synthesis, where energy is needed to form peptide bonds between amino acids.",
    "tags": ["#all", "#biology", "#reactioncoupling", "#ATP", "#energy", "#APBio", "#lecture3"]
  },
  {
    "question": "What is the importance of free energy (?G) in cellular reactions? How does the concept of free energy relate to the efficiency of metabolic pathways?",
    "answer": "Free energy (?G) represents the amount of energy available to do work in a system. A negative ?G indicates an exergonic reaction, which releases energy, while a positive ?G indicates an endergonic reaction, which requires energy input. In metabolic pathways, the efficiency of energy use depends on the ?G of the reactions involved. Cells optimize these pathways to release energy from catabolic reactions and use it to power anabolic reactions, ensuring efficient energy use and balance.",
    "tags": ["#all", "#biology", "#thermodynamics", "#metabolism", "#freeenergy", "#APBio", "#lecture3"]
  },
  {
    "question": "How do enzymes enable cellular processes to occur at a faster rate? What is the role of the enzyme’s active site in this process?",
    "answer": "Enzymes speed up cellular processes by lowering the activation energy required for reactions. The enzyme’s active site binds to the substrate(s), forming an enzyme-substrate complex. This binding stabilizes the transition state and lowers the energy needed for the reaction to proceed. By reducing the activation energy, enzymes increase the reaction rate without being consumed in the process.",
    "tags": ["#all", "#biology", "#enzymes", "#activationenergy", "#APBio", "#lecture3"]
  },
  {
    "question": "How do cells regulate the flow of energy through anabolic and catabolic pathways to maintain homeostasis?",
    "answer": "Cells regulate energy flow by carefully balancing anabolic and catabolic pathways. Catabolic reactions break down molecules like glucose to release energy, which is stored in ATP. Anabolic reactions, which build molecules such as proteins and nucleic acids, require energy. The cell coordinates these pathways by using enzymes to control reaction rates, ensuring that energy is available when needed and that metabolic processes are efficiently coupled. Feedback inhibition and activation mechanisms also help regulate these pathways.",
    "tags": ["#all", "#biology", "#metabolism", "#homeostasis", "#enzymes", "#APBio", "#lecture3"]
  },
  {
    "question": "Explain how ATP’s role in cellular processes extends beyond energy transfer. What are some additional functions of ATP in cells?",
    "answer": "Beyond being an energy carrier, ATP also plays a role in regulating cellular activities. It is involved in signaling pathways, such as protein kinase activation, where ATP transfers phosphate groups to proteins (phosphorylation). ATP is also a substrate for synthesis reactions, like those in DNA and RNA, and is involved in maintaining cellular structures, like the synthesis of the cytoskeleton. Additionally, ATP is used in motor proteins during cellular movement (e.g., muscle contraction).",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#cellularprocesses", "#APBio", "#lecture3"]
  },
  {
    "question": "What is the relationship between ATP and cellular respiration? How does ATP production vary under aerobic and anaerobic conditions?",
    "answer": "ATP is the main product of cellular respiration, a process that breaks down glucose to release energy. In aerobic respiration, oxygen is used to generate a large amount of ATP (around 36-38 ATP per glucose molecule) through oxidative phosphorylation. In anaerobic conditions (such as in muscle cells during intense exercise), cells rely on glycolysis to produce ATP, resulting in only 2 ATP per glucose molecule, as no oxygen is used to fully oxidize glucose.",
    "tags": ["#all", "#biology", "#ATP", "#cellularrespiration", "#aerobic", "#anaerobic", "#APBio", "#lecture3"]
  },
  {
    "question": "Why are enzymes highly specific to the reactions they catalyze? How does the structure of an enzyme relate to its function?",
    "answer": "Enzymes are highly specific because their active sites have unique shapes that only fit particular substrates. The enzyme’s structure, especially the shape and charge of the active site, determines which molecules can bind to it. This specificity ensures that enzymes catalyze only the correct reactions. The enzyme’s active site undergoes a slight change in shape when the substrate binds, which facilitates the formation of the transition state and lowers the activation energy of the reaction.",
    "tags": ["#all", "#biology", "#enzymes", "#specificity", "#structurefunction", "#APBio", "#lecture3"]
  },
  {
    "question": "How do environmental factors (such as temperature and pH) affect enzyme activity?",
    "answer": "Environmental factors like temperature and pH can significantly influence enzyme activity. Temperature affects enzyme activity by changing the kinetic energy of molecules, with enzymes generally functioning optimally within a specific temperature range. If the temperature is too high, enzymes may denature and lose their function. pH affects enzyme activity by altering the charge of the enzyme and substrate, which can impact their binding. Enzymes have an optimal pH range, and deviations can decrease enzyme efficiency or cause denaturation.",
    "tags": ["#all", "#biology", "#enzymes", "#environmentalfactors", "#APBio", "#lecture3"]
  },
  {
    "question": "What is feedback inhibition, and how does it help regulate metabolic pathways?",
    "answer": "Feedback inhibition is a regulatory mechanism where the end product of a metabolic pathway inhibits an earlier step in the pathway. This prevents the overproduction of a product and helps maintain homeostasis. For example, in the synthesis of isoleucine, the end product inhibits the first enzyme in the pathway, thus preventing the cell from wasting resources by producing more isoleucine than needed.",
    "tags": ["#all", "#biology", "#metabolism", "#feedbackinhibition", "#enzymes", "#APBio", "#lecture3"]
  },
  {
    "question": "How does ATP function in active transport, and why is this process energy-consuming?",
    "answer": "ATP is required for active transport because it provides the energy needed to move molecules against their concentration gradient, which is essential for maintaining cellular functions like ion balance. In active transport, ATP is hydrolyzed, and the energy released is used by membrane transport proteins (like pumps) to transport ions or other molecules across membranes. This process is energy-consuming because it requires work to move substances from low to high concentration, which is energetically unfavorable.",
    "tags": ["#all", "#biology", "#ATP", "#activetransport", "#energy", "#APBio", "#lecture3"]
  }, 
  {
    "question": "How do cells use ATP to maintain a resting membrane potential across the plasma membrane? Why is this process critical for cell function?",
    "answer": "ATP is used to power the sodium-potassium pump, which actively transports sodium ions (Na+) out of the cell and potassium ions (K+) into the cell against their concentration gradients. This process maintains the resting membrane potential, which is essential for nerve transmission, muscle contraction, and other cellular functions. Without this gradient, cells would be unable to generate action potentials or carry out processes like nutrient uptake.",
    "tags": ["#all", "#biology", "#ATP", "#activetransport", "#cellfunction", "#APBio", "#lecture3"]
  },
  {
    "question": "Consider a scenario where a cell is in an environment with limited glucose. How might this affect cellular metabolism, and how could ATP be generated from alternative sources?",
    "answer": "In an environment with limited glucose, cells may switch to alternative energy sources like fatty acids or amino acids. During fatty acid oxidation, cells can generate ATP via ß-oxidation, producing acetyl-CoA, which enters the citric acid cycle. Additionally, amino acids can be deaminated and their carbon skeletons used in the citric acid cycle. This metabolic flexibility allows cells to continue ATP production even when glucose is scarce.",
    "tags": ["#all", "#biology", "#metabolism", "#ATP", "#alternativeenergy", "#APBio", "#lecture3"]
  },
  {
    "question": "During exercise, muscles require more energy. How does ATP production increase, and what role do catabolic reactions play in this process?",
    "answer": "During exercise, ATP production increases through both aerobic and anaerobic pathways. In aerobic conditions, the citric acid cycle and oxidative phosphorylation produce large amounts of ATP. Under anaerobic conditions, glycolysis provides quick ATP, though less efficiently. Catabolic reactions like glycolysis and fatty acid oxidation break down stored glycogen and lipids to generate ATP quickly, meeting the energy demands of muscle cells during exercise.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#exercise", "#APBio", "#lecture3"]
  },
  {
    "question": "In a laboratory experiment, you inhibit the activity of ATP synthase. What would be the immediate consequence for the cell, and how would this impact metabolic processes?",
    "answer": "Inhibiting ATP synthase would prevent the cell from synthesizing ATP via oxidative phosphorylation, which is the primary method of ATP production in eukaryotic cells. As a result, the cell would be forced to rely on less efficient methods like glycolysis to generate ATP, leading to a significant energy deficit. This would impact various energy-dependent processes, such as protein synthesis, active transport, and cell division.",
    "tags": ["#all", "#biology", "#ATP", "#ATPproduction", "#cellfunction", "#APBio", "#lecture3"]
  },
  {
    "question": "Imagine a bacterial culture in a nutrient-limited environment where glucose is scarce. What adaptations might the bacteria undergo to optimize ATP production?",
    "answer": "In a nutrient-limited environment, bacteria may switch from glucose to alternative energy sources like fatty acids or proteins. They might increase the expression of enzymes involved in the breakdown of these alternative substrates, such as those involved in ß-oxidation of fatty acids or the deamination of amino acids. Additionally, some bacteria may activate anaerobic pathways, such as fermentation, to generate ATP without relying on oxygen.",
    "tags": ["#all", "#biology", "#ATP", "#bacteria", "#metabolism", "#alternativeenergy", "#APBio", "#lecture3"]
  },
  {
    "question": "How does temperature influence enzyme activity in the human body, especially during fever? How might this affect cellular metabolism?",
    "answer": "Temperature affects enzyme activity by influencing the kinetic energy of molecules. At higher temperatures (like during a fever), enzymes may become more active up to a certain point, increasing the rate of reactions. However, if the temperature rises too much, enzymes may denature, losing their functional shape and ceasing to catalyze reactions. During fever, the body may speed up metabolic reactions to fight infection, but excessively high temperatures can harm enzyme function and disrupt normal cellular metabolism.",
    "tags": ["#all", "#biology", "#enzymes", "#temperature", "#metabolism", "#APBio", "#lecture3"]
  },
  {
    "question": "In a genetically modified plant, you insert a gene that overproduces a specific enzyme involved in an anabolic pathway. How might this affect the plant’s metabolic processes and energy balance?",
    "answer": "Overproducing an enzyme involved in an anabolic pathway would likely increase the rate at which the plant synthesizes specific molecules (e.g., proteins, starch). While this may lead to enhanced growth or accumulation of desired compounds, it would also increase the demand for energy, requiring more ATP to drive the reaction. The plant would need to balance energy production through catabolic reactions to meet the increased demand, potentially altering its overall energy balance and resource allocation.",
    "tags": ["#all", "#biology", "#genetics", "#enzymes", "#metabolism", "#APBio", "#lecture3"]
  }, 
  {
    "question": "In a scenario where an athlete is consuming large amounts of protein to build muscle mass, how do anabolic reactions in muscle cells use ATP, and how do these reactions contribute to muscle growth?",
    "answer": "Anabolic reactions in muscle cells require ATP to build proteins from amino acids during muscle synthesis. These reactions involve condensation, where ATP provides the energy needed to form peptide bonds. The ATP is utilized to power processes like the formation of ribosomes for protein synthesis and the transport of amino acids into muscle cells. The more ATP available, the more efficiently muscles can grow, as protein synthesis is an energy-intensive process.",
    "tags": ["#all", "#biology", "#ATP", "#musclegrowth", "#anabolic", "#protein", "#APBio", "#lecture3"]
  },
  {
    "question": "If a scientist is studying a plant's response to drought, how might energy production through cellular respiration and photosynthesis be affected under these conditions?",
    "answer": "During drought conditions, plants face water stress, which can reduce their ability to carry out photosynthesis effectively, as photosynthesis relies on water. Without sufficient photosynthesis, the plant will have reduced glucose production, which means less ATP generated through cellular respiration. To adapt, the plant may switch to conserving energy by reducing metabolic activity or using stored reserves. Additionally, some plants may activate mechanisms like stomatal closure to limit water loss, further reducing ATP demand.",
    "tags": ["#all", "#biology", "#photosynthesis", "#cellularrespiration", "#energy", "#drought", "#APBio", "#lecture3"]
  },
  {
    "question": "During a bacterial infection, the human immune system speeds up metabolic processes to fight off the pathogen. How does this increase in metabolism affect ATP production and energy usage in immune cells?",
    "answer": "In response to infection, immune cells like macrophages and lymphocytes ramp up their metabolic activity, including protein synthesis for antibodies, immune cell proliferation, and phagocytosis of pathogens. These processes require ATP, which is generated through both glycolysis (anaerobic) and oxidative phosphorylation (aerobic). The immune system's increased energy demand leads to higher ATP consumption, and the cells may utilize stored glucose, fatty acids, and other molecules to meet the energy needs, adjusting the metabolic balance accordingly.",
    "tags": ["#all", "#biology", "#immune", "#ATP", "#energy", "#infection", "#APBio", "#lecture3"]
  },
  {
    "question": "Imagine a cell in a lab environment with no oxygen supply. How does the lack of oxygen affect the cell's ATP production and what alternative methods does the cell use to generate ATP?",
    "answer": "In the absence of oxygen, cells switch from aerobic respiration to anaerobic processes. Glycolysis is the primary pathway for ATP production, yielding 2 ATP molecules per glucose molecule. However, without oxygen, the electron transport chain cannot operate, and NADH cannot be oxidized. To regenerate NAD+ for glycolysis to continue, cells often rely on fermentation, producing lactate in animals or ethanol in yeast, which allows ATP production to continue despite the lack of oxygen. This process, though less efficient, ensures that cells can still produce some ATP in anaerobic conditions.",
    "tags": ["#all", "#biology", "#cellularrespiration", "#ATP", "#anaerobic", "#fermentation", "#APBio", "#lecture3"]
  },
  {
    "question": "How might a mutation that affects the ATP synthase enzyme impact a cell's ability to produce energy, and what physiological consequences could result from such a mutation?",
    "answer": "A mutation affecting ATP synthase would disrupt the cell’s ability to produce ATP via oxidative phosphorylation, the most efficient method of ATP production. Without functional ATP synthase, the proton gradient established across the mitochondrial membrane would not be used to synthesize ATP, significantly lowering the cell's energy production. As a result, the cell would rely on less efficient ATP production methods like glycolysis. This could lead to fatigue, weakness, and impaired function of energy-intensive tissues like muscles and neurons.",
    "tags": ["#all", "#biology", "#ATP", "#energy", "#mutation", "#mitochondria", "#APBio", "#lecture3"]
  },
  {
    "question": "How might an increase in enzyme concentration affect the rate of a biochemical reaction in a cell, and under what conditions might this increase be limited?",
    "answer": "Increasing enzyme concentration can enhance the rate of a biochemical reaction by providing more enzyme molecules to catalyze the reaction. However, the rate increase is limited when all substrate molecules are bound to enzymes, meaning the enzyme concentration exceeds the amount of substrate available (saturation point). Additionally, factors such as temperature, pH, and the presence of inhibitors or activators can affect enzyme activity, potentially limiting the rate of reaction despite higher enzyme concentrations.",
    "tags": ["#all", "#biology", "#enzymes", "#reactionrate", "#enzymeconcentration", "#APBio", "#lecture3"]
  },
  {
    "question": "In an experiment, you inhibit glycolysis in a eukaryotic cell. What would be the immediate consequence for ATP production, and how would the cell adapt to continue energy production?",
    "answer": "Inhibiting glycolysis would prevent the cell from generating ATP through the breakdown of glucose. Since glycolysis is the primary pathway for anaerobic ATP production, the cell would rely on other energy sources, such as fatty acids or amino acids, to produce ATP. This would shift the cell’s metabolism toward fatty acid oxidation and oxidative phosphorylation, which require oxygen. If the cell is in an anaerobic environment, it may rely on fermentation to produce ATP, though this method is much less efficient.",
    "tags": ["#all", "#biology", "#glycolysis", "#ATP", "#energy", "#fermentation", "#APBio", "#lecture3"]
  }, 
		
  {
    "question": "True or false: Only molecules with chemical groups -H and -OH can be joined in condensation reactions – e.g. A-H + B-OH",
    "answer": "True. Condensation reactions typically involve the joining of molecules with functional groups such as hydroxyl (-OH) and hydrogen (-H), forming a covalent bond and releasing water.",
    "tags": ["#all", "#biology", "#condensationreaction", "#functionalgroups", "#APBio", "#lecture2"]
  },
  {
    "question": "Which of the following statements is NOT true about glycogen?",
    "answer": "C. It exists as linear molecules with many branches. Glycogen is a highly branched polysaccharide used for energy storage in animals. The branches allow for rapid release of glucose when needed.",
    "tags": ["#all", "#biology", "#glycogen", "#polysaccharides", "#energystorage", "#APBio", "#lecture2"]
  },
  {
    "question": "Which of the following statements are true about amino acids?",
    "answer": "A. Amino acids share a common backbone but differ in their R-groups. C. Proteins always have polarity no matter the sequence/composition of the amino acid chain.",
    "tags": ["#all", "#biology", "#aminoacids", "#proteins", "#polarity", "#APBio", "#lecture2"]
  },
  {
    "question": "Match the carbon number in ribose or deoxyribose with its function. (Use carbon numbers from ribose and deoxyribose.)",
    "answer": "Carbon 1: This carbon is connected to the nitrogenous base.<br> Carbon 2: This carbon determines if you are looking at DNA or RNA (in RNA, the -OH group is present at this position, while in DNA, it is absent).<br> Carbon 3: This carbon links to an incoming nucleotide subunit.<br> Carbon 4: This carbon is part of the sugar ring.<br> Carbon 5: This carbon is connected to one or more phosphate groups. These carbons are involved in the formation of the sugar-phosphate backbone in nucleic acids.",
    "tags": ["#all", "#biology", "#nucleicacids", "#ribose", "#deoxyribose", "#APBio", "#lecture2"]
  }, 
  {
    "question": "What is the role of glycosidic bonds in carbohydrates, and how are they formed?",
    "answer": "Glycosidic bonds are covalent bonds that link monosaccharides (sugar units) to form disaccharides, oligosaccharides, or polysaccharides. These bonds are formed during condensation reactions, where a molecule of water is removed as two sugar molecules are joined. The glycosidic bond is essential for creating the structure of complex carbohydrates like starch, glycogen, and cellulose.",
    "tags": ["#all", "#biology", "#carbohydrates", "#glycosidicbond", "#synthesis", "#APBio", "#lecture2"]
  },
  {
    "question": "How do hydrophilic and hydrophobic interactions contribute to the structure and function of lipids?",
    "answer": "Lipids have both hydrophilic (water-attracting) and hydrophobic (water-repelling) components. The hydrophilic head interacts with water, while the hydrophobic tails avoid water, leading to the formation of structures like lipid bilayers in cell membranes. These interactions are crucial for membrane integrity and the selective permeability of the cell membrane.",
    "tags": ["#all", "#biology", "#lipids", "#membranes", "#hydrophilic", "#hydrophobic", "#APBio", "#lecture2"]
  },
  {
    "question": "Explain the importance of the peptide bond in protein structure.",
    "answer": "A peptide bond is a covalent bond formed between the amino group of one amino acid and the carboxyl group of another, with the release of a water molecule (condensation reaction). These bonds link amino acids together in a chain, forming polypeptides. The sequence and arrangement of amino acids in the polypeptide chain determine the protein's final three-dimensional structure and function.",
    "tags": ["#all", "#biology", "#proteins", "#peptidebond", "#structure", "#synthesis", "#APBio", "#lecture2"]
  },
  {
    "question": "What is the significance of polarity in nucleic acids (DNA and RNA)?",
    "answer": "Polarity in nucleic acids refers to the directionality of the DNA or RNA strands, with distinct 5' and 3' ends. The 5' end is where the phosphate group is attached to the ribose sugar, and the 3' end has the hydroxyl group. This polarity is essential for processes like DNA replication and RNA transcription, where enzymes read and synthesize new strands in a specific direction.",
    "tags": ["#all", "#biology", "#nucleicacids", "#polarity", "#DNA", "#RNA", "#APBio", "#lecture2"]
  },
  {
    "question": "What role do hydrogen bonds play in the structure of DNA?",
    "answer": "Hydrogen bonds are responsible for holding the two strands of DNA together in a double helix. They form between complementary nitrogenous bases: adenine pairs with thymine (A-T) using two hydrogen bonds, and guanine pairs with cytosine (G-C) using three hydrogen bonds. These bonds ensure the stability of the DNA molecule while allowing it to be unzipped for replication and transcription.",
    "tags": ["#all", "#biology", "#DNA", "#hydrogenbonds", "#structure", "#nucleicacids", "#APBio", "#lecture2"]
  },
  {
    "question": "Why is the structure of ribose different from deoxyribose, and how does this impact the function of RNA and DNA?",
    "answer": "Ribose, found in RNA, has a hydroxyl group (-OH) attached to the 2' carbon, while deoxyribose, found in DNA, has a hydrogen atom (-H) at the 2' carbon. This small difference makes RNA more reactive and less stable than DNA. The presence of the hydroxyl group in RNA allows it to participate in more chemical reactions, while the absence of this group in DNA makes it more stable and suitable for long-term genetic storage.",
    "tags": ["#all", "#biology", "#ribose", "#deoxyribose", "#RNA", "#DNA", "#structure", "#APBio", "#lecture2"]
  },
  {
    "question": "How do enzymes facilitate hydrolysis and condensation reactions in biological systems?",
    "answer": "Enzymes facilitate hydrolysis and condensation reactions by lowering the activation energy needed for these reactions to occur. In condensation reactions, enzymes bring substrates together in the correct orientation to facilitate the removal of a water molecule, forming a covalent bond. In hydrolysis, enzymes help break the covalent bond by adding a water molecule, splitting the polymer into its subunits. These reactions are essential for the synthesis and breakdown of macromolecules in cells.",
    "tags": ["#all", "#biology", "#enzymes", "#condensation", "#hydrolysis", "#APBio", "#lecture2"]
  },
  {
    "question": "How does the presence of a hydroxyl group (-OH) on a sugar molecule influence its behavior in condensation and hydrolysis reactions?",
    "answer": "The presence of the hydroxyl group (-OH) on a sugar molecule makes it highly reactive, allowing it to participate in condensation reactions by forming glycosidic bonds with other monosaccharides. In hydrolysis reactions, the hydroxyl group can participate in the addition of water, breaking the glycosidic bond between two sugar molecules. This reactivity is crucial for the synthesis and degradation of polysaccharides.",
    "tags": ["#all", "#biology", "#hydroxylgroup", "#sugars", "#condensation", "#hydrolysis", "#APBio", "#lecture2"]
  }, 
  {
    "question": "What happens during a condensation reaction, and why is it important for macromolecule synthesis in the cell?",
    "answer": "A condensation reaction involves the joining of two molecules, typically monomers, to form a larger molecule (a polymer) while releasing a water molecule. This reaction is essential for synthesizing macromolecules such as proteins, carbohydrates, lipids, and nucleic acids. In protein synthesis, for example, condensation reactions form peptide bonds between amino acids to build polypeptides. In nucleic acid synthesis, it creates phosphodiester bonds between nucleotides to form DNA or RNA. Condensation reactions are used in both anabolic processes, like building cell structures, and energy-storing processes, like starch formation in plants.",
    "tags": ["#all", "#biology", "#condensationreaction", "#macromolecules", "#synthesis", "#APBio", "#lecture2"]
  },
  {
    "question": "How does hydrolysis differ from condensation, and what role does it play in metabolism?",
    "answer": "Hydrolysis is the opposite of condensation; it involves the addition of a water molecule to break a covalent bond, splitting a polymer into smaller molecules (monomers or dimers). For example, when glycogen is broken down into glucose units, a hydrolysis reaction occurs. This reaction is crucial for digestion, as enzymes catalyze the breakdown of food molecules like starches and proteins into absorbable subunits. Hydrolysis reactions are also used in the recycling of cellular components, such as proteins and nucleic acids, ensuring that the cell maintains a supply of basic building blocks for synthesis and repair.",
    "tags": ["#all", "#biology", "#hydrolysis", "#digestion", "#metabolism", "#macromolecules", "#APBio", "#lecture2"]
  },
  {
    "question": "Explain the difference between glycogen’s linear and branched structure. How does this structural feature affect its function in energy storage?",
    "answer": "Glycogen is a polysaccharide made up of glucose monomers linked by glycosidic bonds. Unlike starch, glycogen has a highly branched structure, which allows for rapid breakdown of glucose when energy is needed quickly. The branching increases the surface area for enzymes like glycogen phosphorylase to act, facilitating faster release of glucose molecules during periods of high energy demand. This structural difference makes glycogen an efficient form of energy storage in animals, especially in liver and muscle cells, where quick mobilization of glucose is necessary during activities like exercise.",
    "tags": ["#all", "#biology", "#glycogen", "#polysaccharides", "#energy", "#storage", "#structure", "#APBio", "#lecture2"]
  },
  {
    "question": "Why are peptide bonds critical for protein function, and how does the sequence of amino acids influence the final protein structure?",
    "answer": "Peptide bonds are covalent bonds that link amino acids in proteins, forming a polypeptide chain. The sequence of amino acids in this chain determines the protein’s primary structure, which influences its overall shape and function. The sequence dictates how the polypeptide will fold into its secondary, tertiary, and quaternary structures. These folded shapes are essential for the protein's specific function, such as catalyzing reactions (enzymes), signaling (receptors), or structural support (collagen). A change in the amino acid sequence, even by a single amino acid, can disrupt the protein's function, leading to diseases like sickle cell anemia.",
    "tags": ["#all", "#biology", "#proteins", "#peptidebond", "#aminoacids", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "What role do the 5' and 3' ends play in the polarity of nucleic acids, and how does this affect processes like DNA replication?",
    "answer": "The polarity of nucleic acids is determined by the orientation of the sugar-phosphate backbone. The 5' end has a phosphate group attached to the fifth carbon of the sugar molecule, and the 3' end has a hydroxyl group attached to the third carbon. This polarity is crucial during DNA replication and transcription because enzymes like DNA polymerase add new nucleotides to the 3' end of the growing strand. This means replication occurs in the 5' to 3' direction, which is important for the accuracy and regulation of genetic material copying.",
    "tags": ["#all", "#biology", "#DNA", "#polarity", "#replication", "#nucleicacids", "#structure", "#APBio", "#lecture2"]
  },
  {
    "question": "What is the role of hydrogen bonds in the structure of DNA and how do they contribute to its function?",
    "answer": "Hydrogen bonds play a crucial role in stabilizing the double helix structure of DNA by forming between complementary nitrogenous bases: adenine (A) with thymine (T), and guanine (G) with cytosine (C). These bonds are weak enough to allow the DNA strands to separate during replication and transcription but strong enough to maintain the overall integrity of the DNA molecule. The specificity of base pairing ensures that genetic information is accurately copied and transmitted during cell division. The ability of hydrogen bonds to hold the strands together while allowing for controlled unzipping is key for DNA's function in genetic information storage and transmission.",
    "tags": ["#all", "#biology", "#DNA", "#hydrogenbonds", "#structure", "#replication", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "How do purine and pyrimidine bases differ in their structure, and what is the significance of this difference in nucleic acid function?",
    "answer": "Purine bases (adenine and guanine) have a double-ring structure, while pyrimidine bases (cytosine, thymine, and uracil) have a single-ring structure. This difference is important for the structure of nucleic acids because purines always pair with pyrimidines in complementary base pairing (A with T, G with C) to form the rungs of the DNA double helix. This complementary base pairing is critical for accurate DNA replication and transcription, ensuring the genetic code is preserved and correctly transmitted.",
    "tags": ["#all", "#biology", "#DNA", "#purines", "#pyrimidines", "#basepairing", "#structure", "#APBio", "#lecture2"]
  },
  {
    "question": "What is the significance of the 2' hydroxyl group in RNA compared to DNA, and how does this difference affect their stability and function?",
    "answer": "The 2' hydroxyl group in RNA makes it more reactive and less stable compared to DNA, which lacks this hydroxyl group (having only a hydrogen at the 2' position in deoxyribose). This makes RNA more prone to hydrolysis, leading to its relatively short lifespan in cells. The additional -OH group in RNA allows for greater flexibility in its structure, which is essential for its role in protein synthesis, as it can easily form complex secondary structures (e.g., hairpins) necessary for function in processes like translation. In contrast, DNA's stability is key for its role as long-term genetic storage.",
    "tags": ["#all", "#biology", "#RNA", "#DNA", "#structure", "#stability", "#function", "#APBio", "#lecture2"]
  }, 
  {
    "question": "In the context of biological systems, why is it important for condensation and hydrolysis reactions to be carefully regulated by enzymes?",
    "answer": "Condensation and hydrolysis reactions are critical for macromolecule synthesis and breakdown in cells. Condensation reactions are responsible for building macromolecules like proteins, polysaccharides, and nucleic acids, while hydrolysis reactions break these macromolecules down into their subunits for recycling or energy release. Enzymes regulate these reactions by lowering the activation energy, ensuring that they occur at appropriate rates. Without enzyme regulation, these reactions would either proceed too slowly or uncontrollably, disrupting cellular homeostasis.",
    "tags": ["#all", "#biology", "#enzymes", "#condensation", "#hydrolysis", "#macromolecules", "#APBio", "#lecture2"]
  },
  {
    "question": "How do the properties of the covalent bonds in carbohydrates, lipids, proteins, and nucleic acids influence their functions in cells?",
    "answer": "The covalent bonds in macromolecules significantly impact their structure and function. In carbohydrates, glycosidic bonds link monosaccharides to form polysaccharides that provide energy storage and structural support. In lipids, ester bonds between fatty acids and glycerol enable the formation of membranes and energy storage. In proteins, peptide bonds between amino acids define the sequence that determines the protein's shape and function, such as enzyme catalysis. In nucleic acids, phosphodiester bonds between nucleotides provide the stability necessary for genetic information storage and transmission.",
    "tags": ["#all", "#biology", "#macromolecules", "#covalentbonds", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "How does the polarity of a molecule affect its solubility in water and its interactions with other molecules? Provide an example using one of the macromolecules.",
    "answer": "Polarity refers to the distribution of electrical charge across a molecule, with one end being slightly negative and the other slightly positive. This polarity allows molecules to interact with water molecules, which are also polar. For example, in proteins, polar (hydrophilic) amino acids tend to be on the outside of the protein, interacting with the aqueous environment, while non-polar (hydrophobic) amino acids tend to be buried inside the protein structure. This polarity affects how proteins fold and interact with other molecules, like enzymes binding to substrates or antibodies recognizing antigens.",
    "tags": ["#all", "#biology", "#polarity", "#hydrophilic", "#hydrophobic", "#proteins", "#APBio", "#lecture2"]
  },
  {
    "question": "Why is the 5' to 3' polarity important in DNA replication and transcription? What consequences would arise if this polarity were disrupted?",
    "answer": "The 5' to 3' polarity in DNA ensures that enzymes like DNA polymerase and RNA polymerase add nucleotides in a specific direction during replication and transcription. DNA polymerase can only add new nucleotides to the 3' end of a strand, creating the new strand in the 5' to 3' direction. If this polarity were disrupted, it could lead to errors in the replication of genetic material or in the synthesis of RNA, resulting in mutations or nonfunctional proteins. The specificity of this directionality is crucial for maintaining the integrity of genetic information.",
    "tags": ["#all", "#biology", "#DNA", "#RNA", "#polarity", "#replication", "#transcription", "#APBio", "#lecture2"]
  },
  {
    "question": "Describe the functional significance of purines and pyrimidines in DNA and RNA. How does base pairing help preserve genetic information?",
    "answer": "Purines (adenine and guanine) and pyrimidines (cytosine, thymine, and uracil) are nitrogenous bases that form the rungs of the DNA or RNA ladder. In DNA, adenine pairs with thymine, and guanine pairs with cytosine, while in RNA, uracil replaces thymine. The complementary base pairing between purines and pyrimidines ensures that the genetic information is accurately preserved during DNA replication and RNA transcription. This base pairing also helps maintain the stability of the DNA double helix structure and ensures that genetic codes are correctly translated into proteins.",
    "tags": ["#all", "#biology", "#nucleicacids", "#basepairing", "#purines", "#pyrimidines", "#DNA", "#RNA", "#geneticinformation", "#APBio", "#lecture2"]
  },
  {
    "question": "How does the branching structure of glycogen relate to its function in energy storage and mobilization in animals?",
    "answer": "The highly branched structure of glycogen allows for rapid mobilization of glucose during energy demand. The branches provide multiple sites for enzymes like glycogen phosphorylase to break down glucose from the polymer into usable monomers. This enables animals to quickly access stored energy during physical activity or stress. The branched structure also ensures that glycogen can be stored compactly without forming large, inefficient aggregates, which is especially important for energy storage in muscles and the liver.",
    "tags": ["#all", "#biology", "#glycogen", "#energy", "#storage", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "How do the covalent bonds in macromolecules (like glycosidic, peptide, and phosphodiester bonds) contribute to their function in biological systems?",
    "answer": "Covalent bonds like glycosidic bonds (in carbohydrates), peptide bonds (in proteins), and phosphodiester bonds (in nucleic acids) provide structural integrity and stability to macromolecules. These bonds are critical for the polymerization of monomers into larger molecules that can carry out essential biological functions. For instance, peptide bonds link amino acids to form proteins that catalyze reactions, glycosidic bonds link glucose molecules to form polysaccharides that store energy, and phosphodiester bonds hold nucleotides together in DNA and RNA to store genetic information.",
    "tags": ["#all", "#biology", "#macromolecules", "#covalentbonds", "#synthesis", "#APBio", "#lecture2"]
  },
  {
    "question": "What are the functional roles of carbohydrates in the cell, and how does their structure allow them to carry out these functions?",
    "answer": "Carbohydrates serve as energy sources (glucose, glycogen) and structural components (cellulose, chitin). Their structure allows them to form complex polysaccharides that store energy, and their repeating units of monosaccharides can be easily broken down via hydrolysis to release energy when needed. Carbohydrates also contribute to cell signaling, recognition, and adhesion, as seen in glycoproteins and glycolipids. The branching of polysaccharides like glycogen allows for rapid mobilization of energy in animals.",
    "tags": ["#all", "#biology", "#carbohydrates", "#energy", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "How does the amphipathic nature of lipids (having both hydrophilic and hydrophobic parts) influence their role in forming cellular membranes?",
    "answer": "The amphipathic nature of lipids allows them to form bilayers in cellular membranes, with hydrophilic (water-attracting) heads facing outward toward the aqueous environment and hydrophobic (water-repelling) tails facing inward. This arrangement creates a semi-permeable barrier that separates the cell from its environment while maintaining structural integrity. The fluidity of lipid bilayers is essential for membrane function, allowing for membrane protein movement, cell signaling, and selective permeability for ions and small molecules.",
    "tags": ["#all", "#biology", "#lipids", "#membranes", "#amphipathic", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "What is the relationship between a protein's primary, secondary, tertiary, and quaternary structures, and how does this hierarchy of folding determine a protein’s function?",
    "answer": "A protein’s primary structure is its linear sequence of amino acids, held together by peptide bonds. The secondary structure involves folding into alpha-helices or beta-pleated sheets due to hydrogen bonding between the backbone atoms. The tertiary structure arises from interactions between R-groups, including hydrophobic interactions, hydrogen bonds, ionic bonds, and disulfide bridges, leading to the three-dimensional shape that is functional. The quaternary structure involves the assembly of multiple polypeptide chains into a functional protein complex. The specific folding at each level of structure is critical for the protein's function, whether it is catalyzing a reaction, binding to a substrate, or signaling in a cellular pathway.",
    "tags": ["#all", "#biology", "#proteins", "#structure", "#folding", "#APBio", "#lecture2"]
  },
  {
    "question": "What are the key differences between DNA and RNA in terms of structure and function, and how do these differences influence their roles in the cell?",
    "answer": "DNA is double-stranded, with a deoxyribose sugar and thymine as one of its nitrogenous bases, while RNA is single-stranded, with ribose as its sugar and uracil replacing thymine. These structural differences make DNA stable and suited for long-term storage of genetic information, while RNA is more reactive and serves as an intermediary in protein synthesis. RNA transcribes genetic information from DNA and translates it into proteins. The instability of RNA allows it to be rapidly synthesized and degraded, providing quick regulation of gene expression.",
    "tags": ["#all", "#biology", "#DNA", "#RNA", "#structure", "#function", "#genetics", "#APBio", "#lecture2"]
  },
  {
    "question": "How does the polarity of nucleic acids (DNA/RNA) influence their interactions with other molecules and their function in the cell?",
    "answer": "The polarity of nucleic acids refers to the directionality of their sugar-phosphate backbone, with 5' and 3' ends. This polarity ensures that the replication, transcription, and translation processes occur in a specific direction. The complementary base pairing between the nitrogenous bases (A-T/U, G-C) also relies on the polarity, maintaining the stability and accuracy of genetic information. The 5' to 3' polarity of RNA allows it to interact specifically with ribosomes and tRNAs during translation, ensuring the correct sequence of amino acids is incorporated into proteins.",
    "tags": ["#all", "#biology", "#nucleicacids", "#polarity", "#DNA", "#RNA", "#function", "#geneexpression", "#APBio", "#lecture2"]
  },
  {
    "question": "How do enzymes catalyze reactions involving the breakdown of macromolecules, and why are they crucial for metabolism?",
    "answer": "Enzymes catalyze the breakdown of macromolecules through hydrolysis reactions, where water molecules are added to break covalent bonds between monomers in polymers. For example, amylase breaks down starch (a polysaccharide) into glucose monomers. Enzymes lower the activation energy required for these reactions to occur, making them happen faster and more efficiently at physiological temperatures. Without enzymes, these reactions would occur too slowly to sustain life. Enzymes are essential for metabolism because they regulate the breakdown of macromolecules for energy production and the synthesis of new macromolecules for growth and repair.",
    "tags": ["#all", "#biology", "#enzymes", "#macromolecules", "#metabolism", "#hydrolysis", "#catalysis", "#APBio", "#lecture2"]
  },
  {
    "question": "What are some key functions of lipids in the cell, and how do their structures support these functions?",
    "answer": "Lipids serve several key functions in the cell, including energy storage, insulation, and forming structural components of cell membranes. Their hydrophobic nature allows them to form stable membranes by self-assembling into bilayers, with hydrophilic heads facing outward and hydrophobic tails facing inward. This structure is vital for the formation of the lipid bilayer of cell membranes, which separates the cell's interior from the external environment. Additionally, lipids like phospholipids and cholesterol contribute to membrane fluidity, which is essential for membrane function and protein mobility.",
    "tags": ["#all", "#biology", "#lipids", "#membranes", "#energy", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "Outline the four families of macromolecules, their subunits, intermediate molecules, and polymers.",
    "answer": "<strong>Carbohydrates:</strong> Subunit: Monosaccharides, Intermediate: Disaccharides/Oligosaccharides, Polymer: Polysaccharides (e.g., starch, glycogen)<br><strong>Lipids:</strong> Subunit: Fatty acids and glycerol, Intermediate: Triglycerides, Polymer: Phospholipid bilayers (cell membranes)<br><strong>Proteins:</strong> Subunit: Amino acids, Intermediate: Polypeptides, Polymer: Functional proteins (e.g., enzymes, receptors)<br><strong>Nucleic Acids:</strong> Subunit: Nucleotides, Intermediate: Dinucleotides, Polymer: DNA/RNA.",
    "tags": ["#all", "#biology", "#macromolecules", "#subunits", "#polymers", "#APBio", "#lecture2"]
  },
  {
    "question": "Compare and contrast the four macromolecules discussed with reference to general structure, polarity, and covalent bonds that link the subunits.",
    "answer": "Carbohydrates: Polarity varies based on monomers; glycosidic bonds link monosaccharides. Lipids: Amphipathic with hydrophilic heads and hydrophobic tails; ester bonds link fatty acids and glycerol. Proteins: Polar backbone with diverse R-groups; peptide bonds link amino acids. Nucleic Acids: Polar backbone with 5' and 3' ends; phosphodiester bonds link nucleotides. Carbohydrates are polar, lipids are non-polar (except phospholipids), proteins have varying polarity based on R-groups, and nucleic acids are highly polar due to their phosphate backbone.",
    "tags": ["#all", "#biology", "#macromolecules", "#structure", "#polarity", "#covalentbonds", "#APBio", "#lecture2"]
  },
  {
    "question": "Differentiate between condensation and hydrolysis reactions and explain when each is used in the cell.",
    "answer": "Condensation reactions involve the joining of two molecules to form a larger molecule, with the release of a water molecule. They are used in the synthesis of macromolecules such as proteins (peptide bonds), nucleic acids (phosphodiester bonds), and carbohydrates (glycosidic bonds). Hydrolysis reactions are the reverse, where water is added to break a covalent bond, splitting a polymer into smaller units. Hydrolysis is used during digestion, when polymers like starch and proteins are broken down into their monomers for absorption.",
    "tags": ["#all", "#biology", "#condensationreaction", "#hydrolysis", "#macromolecules", "#synthesis", "#digestion", "#APBio", "#lecture2"]
  }, 
  {
    "question": "How does the function of proteins differ from that of carbohydrates, and how does their structure support these functions?",
    "answer": "Proteins perform a wide variety of functions, including catalyzing biochemical reactions (enzymes), providing structural support (e.g., collagen), and regulating cellular processes (e.g., hormones). Their function depends on their specific three-dimensional shape, which is determined by their amino acid sequence. In contrast, carbohydrates primarily provide energy (e.g., glucose), store energy (e.g., glycogen), and serve as structural components (e.g., cellulose). Carbohydrates are linear or branched chains of monosaccharides, allowing them to store energy efficiently and form structures that support cells.",
    "tags": ["#all", "#biology", "#proteins", "#carbohydrates", "#structure", "#function", "#energy", "#macromolecules", "#APBio", "#lecture2"]
  },
  {
    "question": "Why is the amphipathic nature of phospholipids important for the structure and function of cell membranes?",
    "answer": "Phospholipids are amphipathic, meaning they have both hydrophilic (water-attracting) heads and hydrophobic (water-repelling) tails. This allows them to form bilayers in water, with the hydrophilic heads facing outward toward the aqueous environment and the hydrophobic tails facing inward, away from water. This structure is the basis of cell membranes, providing a semi-permeable barrier that regulates what enters and leaves the cell while allowing the flexibility required for cellular functions like signaling and protein movement.",
    "tags": ["#all", "#biology", "#lipids", "#phospholipids", "#membranes", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "What is the role of nitrogenous bases in nucleic acids, and how do base pairing and hydrogen bonds contribute to the structure of DNA?",
    "answer": "The nitrogenous bases (A, T, G, C in DNA) are the building blocks of nucleic acids. In DNA, adenine (A) pairs with thymine (T), and guanine (G) pairs with cytosine (C), forming the rungs of the double helix ladder. The complementary base pairing ensures that the genetic information encoded in DNA can be accurately replicated and transcribed. Hydrogen bonds between the complementary bases hold the two DNA strands together, but are weak enough to allow the strands to separate during replication and transcription.",
    "tags": ["#all", "#biology", "#nucleicacids", "#basepairing", "#DNA", "#structure", "#geneticinformation", "#APBio", "#lecture2"]
  }, 
  {
    "question": "How do glycosidic bonds formed in condensation reactions contribute to the diversity of carbohydrate functions in cells?",
    "answer": "Glycosidic bonds are covalent bonds that link monosaccharides (simple sugars) to form disaccharides, oligosaccharides, and polysaccharides. These bonds can vary in type (e.g., alpha or beta linkage), affecting the structure and function of the carbohydrate. For example, in starch, alpha-glycosidic bonds create a helical structure that is ideal for energy storage, whereas in cellulose, beta-glycosidic bonds form long, rigid chains that provide structural support to plant cells. The variability in glycosidic bond formation allows carbohydrates to serve diverse roles in cells, from energy storage (glycogen in animals) to providing mechanical strength (cellulose in plants).",
    "tags": ["#all", "#biology", "#carbohydrates", "#glycosidicbonds", "#macromolecules", "#APBio", "#lecture2"]
  },
  {
    "question": "What is the role of the amphipathic nature of phospholipids in maintaining membrane integrity and how does this support cell functions such as signaling?",
    "answer": "Phospholipids are amphipathic molecules, meaning they contain both hydrophilic (water-loving) and hydrophobic (water-hating) parts. The hydrophilic heads interact with the aqueous environment, while the hydrophobic tails repel water, leading to the formation of a bilayer in cell membranes. This arrangement forms the **fluid mosaic model** of the membrane, which provides flexibility and selectivity in terms of what enters and exits the cell. The ability of the phospholipid bilayer to allow certain molecules to pass while blocking others is crucial for cell signaling, as embedded proteins can act as receptors to trigger intracellular pathways when they bind with ligands. The fluidity of the membrane also allows the movement of proteins and lipids, enabling the cell to respond quickly to changes in the environment.",
    "tags": ["#all", "#biology", "#lipids", "#phospholipids", "#membranes", "#cellfunction", "#signaling", "#APBio", "#lecture2"]
  },
  {
    "question": "Explain how the sequence of amino acids in a protein determines its final three-dimensional structure and why this is crucial for protein function.",
    "answer": "The sequence of amino acids in a protein, known as the primary structure, dictates how the protein will fold into its secondary, tertiary, and quaternary structures. The secondary structure arises from hydrogen bonding between the backbone atoms, forming alpha-helices or beta-pleated sheets. The tertiary structure is the final three-dimensional shape, formed by interactions between the side chains (R-groups) of the amino acids, including hydrophobic interactions, hydrogen bonds, ionic bonds, and disulfide bridges. The quaternary structure refers to the assembly of multiple polypeptide chains into a functional protein complex. The correct folding of a protein is essential for its function, as a misfolded protein can lead to dysfunction or diseases like Alzheimer's or cystic fibrosis. For instance, enzymes must have a precise shape to bind their substrates and catalyze reactions.",
    "tags": ["#all", "#biology", "#proteins", "#folding", "#structure", "#function", "#misfolding", "#diseases", "#APBio", "#lecture2"]
  },
  {
    "question": "How do the structural differences between DNA and RNA contribute to their distinct functions in the cell?",
    "answer": "DNA and RNA differ structurally in several key ways that are critical to their respective functions. DNA is double-stranded and has deoxyribose sugar, which makes it more stable and suited for long-term storage of genetic information. Its double-helix structure is stable enough to preserve genetic information over time, and the complementary base pairing ensures accurate replication. RNA, on the other hand, is single-stranded and has ribose as the sugar, making it more reactive and less stable. RNA’s instability is beneficial for its role in protein synthesis; it is quickly synthesized and degraded, allowing the cell to rapidly respond to changes in gene expression. Additionally, RNA can fold into various shapes, allowing it to perform regulatory roles and catalyze reactions, as seen in ribozymes.",
    "tags": ["#all", "#biology", "#DNA", "#RNA", "#structure", "#function", "#geneticinformation", "#APBio", "#lecture2"]
  },
  {
    "question": "What are the specific roles of RNA in protein synthesis, and how do structural differences between mRNA, tRNA, and rRNA facilitate their functions?",
    "answer": "RNA plays multiple roles in protein synthesis. Messenger RNA (mRNA) serves as the template that carries genetic information from the DNA in the nucleus to the ribosome for translation. Transfer RNA (tRNA) is responsible for bringing the correct amino acids to the ribosome during translation, with its anticodon matching the codon on the mRNA. Ribosomal RNA (rRNA) is a structural component of the ribosome itself and catalyzes the formation of peptide bonds between amino acids. The structural differences between these RNA types reflect their functions: mRNA is linear and carries the coding sequence, tRNA has a cloverleaf structure for its anticodon loop and amino acid attachment site, and rRNA forms complex structures that facilitate protein assembly. These structural adaptations ensure the efficiency and accuracy of protein synthesis.",
    "tags": ["#all", "#biology", "#RNA", "#mRNA", "#tRNA", "#rRNA", "#proteinsynthesis", "#structure", "#function", "#APBio", "#lecture2"]
  },
  {
    "question": "Explain how condensation reactions contribute to the formation of macromolecules, and why they are essential for cellular processes such as energy storage and genetic information transmission.",
    "answer": "Condensation reactions are essential for forming macromolecules by linking monomers together, releasing a water molecule in the process. In proteins, condensation reactions form peptide bonds between amino acids, creating polypeptides. In carbohydrates, they form glycosidic bonds between monosaccharides to create polysaccharides like starch or cellulose. In nucleic acids, condensation reactions form phosphodiester bonds between nucleotides to create DNA and RNA. These reactions are critical for energy storage (e.g., glycogen) and for storing genetic information (in DNA). They also play a role in cell signaling and maintaining cellular structure. Without condensation reactions, cells would be unable to synthesize the complex molecules required for life processes.",
    "tags": ["#all", "#biology", "#condensationreaction", "#macromolecules", "#synthesis", "#energy", "#geneticinformation", "#cellularprocesses", "#APBio", "#lecture2"]
  }, 
  {
    "question": "Part A: Discuss the structural properties and functions of proteins, carbohydrates, and lipids in biological systems. Provide specific examples of how each macromolecule supports cellular functions and contributes to the overall functioning of organisms.",
    "answer": "Proteins are made up of amino acid subunits linked by peptide bonds. Their function is determined by their three-dimensional structure, which is critical for functions like catalysis (e.g., lactase), transport (e.g., hemoglobin), and structural roles (e.g., collagen). Carbohydrates are made of monosaccharides linked by glycosidic bonds. They provide energy (e.g., glucose) and store energy (e.g., glycogen). Lipids, composed of fatty acids and glycerol, form cell membranes and store energy (e.g., triglycerides). Phospholipids contribute to membrane integrity and fluidity, while lipids like cholesterol are precursors to hormones.",
    "tags": ["#all", "#biology", "#macromolecules", "#proteins", "#carbohydrates", "#lipids", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "Part B: Describe the process of protein folding and explain how errors in this process can lead to diseases. Provide an example of a disease caused by protein misfolding, and discuss the molecular basis of its pathogenesis.",
    "answer": "Protein folding is the process where a polypeptide chain folds into a specific three-dimensional shape, driven by interactions between amino acids in the chain. Misfolding can cause diseases like Alzheimer's, where **amyloid-beta** proteins misfold and form plaques that disrupt brain function. The misfolded **amyloid precursor protein (APP)** aggregates, leading to cell death. Misfolding of proteins like **cystic fibrosis transmembrane conductance regulator (CFTR)** in cystic fibrosis also causes diseases by impairing function due to the accumulation of misfolded proteins in cells.",
    "tags": ["#all", "#biology", "#proteinFolding", "#diseases", "#misfolding", "#Alzheimers", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "How do glycosidic bonds formed in condensation reactions contribute to the diversity of carbohydrate functions in cells?",
    "answer": "Glycosidic bonds form between monosaccharides in condensation reactions, linking them into disaccharides, oligosaccharides, or polysaccharides. These bonds allow carbohydrates like **glycogen** (energy storage in animals) and **cellulose** (structural support in plants) to form diverse structures that serve different biological functions. The type of glycosidic bond (alpha or beta) determines the carbohydrate's properties, such as digestibility and structure.",
    "tags": ["#all", "#biology", "#carbohydrates", "#glycosidicBonds", "#condensation", "#macromolecules", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "What is the amphipathic nature of phospholipids and how does it help in membrane formation?",
    "answer": "Phospholipids are amphipathic, meaning they have a hydrophilic head and hydrophobic tail. This allows them to form a lipid bilayer where the hydrophilic heads face the aqueous environment, and the hydrophobic tails face inward. This arrangement forms the basic structure of cell membranes, providing a semi-permeable barrier that regulates the flow of materials into and out of the cell. This structure is essential for cellular function and integrity.",
    "tags": ["#all", "#biology", "#lipids", "#phospholipids", "#membranes", "#cellfunction", "#signaling", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "Explain how the structure of DNA contributes to its ability to store and replicate genetic information.",
    "answer": "DNA has a double-helix structure formed by two complementary strands held together by hydrogen bonds between nitrogenous bases (A-T, G-C). This structure allows for the accurate storage and transmission of genetic information. During replication, the two strands separate, and each acts as a template for the synthesis of a new complementary strand, ensuring the precise copying of genetic material.",
    "tags": ["#all", "#biology", "#DNA", "#structure", "#geneticInformation", "#replication", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "How do the structural differences between DNA and RNA influence their respective functions in the cell?",
    "answer": "DNA is double-stranded and has deoxyribose sugar, making it more stable for long-term genetic information storage. RNA is single-stranded, has ribose as the sugar, and contains uracil instead of thymine. This structural difference makes RNA more reactive and suitable for its transient role in protein synthesis. RNA can quickly be synthesized and degraded, allowing cells to respond rapidly to changes in gene expression.",
    "tags": ["#all", "#biology", "#DNA", "#RNA", "#structure", "#function", "#geneticinformation", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "What is the role of RNA in protein synthesis and how does the structure of mRNA, tRNA, and rRNA facilitate their functions?",
    "answer": "mRNA carries the genetic code from DNA to the ribosome for translation. tRNA brings amino acids to the ribosome and matches the mRNA codon with the appropriate amino acid using its anticodon. rRNA forms the core structure of the ribosome and catalyzes peptide bond formation. The structure of each RNA type is specialized: mRNA is linear and carries the genetic code; tRNA has a cloverleaf shape to recognize mRNA codons and carry amino acids; rRNA is a structural component of the ribosome that aids in protein synthesis.",
    "tags": ["#all", "#biology", "#RNA", "#proteinSynthesis", "#mRNA", "#tRNA", "#rRNA", "#structure", "#function", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "How do condensation reactions contribute to the formation of macromolecules, and why are they essential for cellular processes?",
    "answer": "Condensation reactions involve the removal of a water molecule to form covalent bonds between monomers, creating macromolecules like proteins, carbohydrates, and nucleic acids. These reactions are essential for cellular processes because they allow cells to build complex molecules needed for structure, function, and energy storage. For example, peptide bonds between amino acids form proteins that carry out essential enzymatic functions, while glycosidic bonds between glucose molecules form glycogen for energy storage.",
    "tags": ["#all", "#biology", "#condensationReactions", "#macromolecules", "#synthesis", "#cellularProcesses", "#APBio", "#lecture2", "#frq"]
  }, 
  {
    "question": "How do enzymes facilitate condensation and hydrolysis reactions? Provide examples of these reactions in biological processes.",
    "answer": "Enzymes are biological catalysts that lower the activation energy required for reactions to occur. In condensation reactions, enzymes help link monomers (like amino acids in proteins or nucleotides in nucleic acids) by facilitating the removal of a water molecule, forming a covalent bond. For example, **peptidyl transferase** catalyzes peptide bond formation during protein synthesis. In hydrolysis reactions, enzymes like **amylase** or **lipase** catalyze the addition of water to break bonds between monomers, breaking down starch or fats for energy production. These reactions are essential for cellular processes like metabolism and macromolecule synthesis.",
    "tags": ["#all", "#biology", "#enzymes", "#condensation", "#hydrolysis", "#macromolecules", "#synthesis", "#digestion", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "Explain how the structure of phospholipids supports their role in forming cell membranes. How does membrane fluidity contribute to cell function?",
    "answer": "Phospholipids have an amphipathic structure, with hydrophilic (water-loving) heads and hydrophobic (water-fearing) tails. In an aqueous environment, phospholipids spontaneously form a bilayer, with the hydrophilic heads facing the exterior and the hydrophobic tails facing inward. This bilayer forms the fundamental structure of the cell membrane, providing a barrier to the movement of ions and molecules. The fluidity of the membrane, due to the lateral movement of lipid molecules, is crucial for cell function, enabling membrane proteins to move and interact, facilitating cell signaling, nutrient transport, and membrane repair.",
    "tags": ["#all", "#biology", "#lipids", "#phospholipids", "#membranes", "#fluidity", "#cellfunction", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "What is the significance of the alpha and beta glycosidic bonds in carbohydrates? How do these bonds affect the structure and function of polysaccharides like starch and cellulose?",
    "answer": "Alpha and beta glycosidic bonds are the two main types of covalent bonds that link monosaccharides in carbohydrates. In alpha-glycosidic bonds (found in **starch** and **glycogen**), the bond forms at a 110-degree angle, allowing the polysaccharide to coil into helical structures, making it suitable for energy storage. In contrast, beta-glycosidic bonds (found in **cellulose**) form straight chains that stack to form rigid, insoluble structures, which provide structural support in plants. The difference in the type of glycosidic bond affects the digestibility and function of the polysaccharide: starch is easily hydrolyzed by enzymes, while cellulose is resistant to most digestive enzymes.",
    "tags": ["#all", "#biology", "#carbohydrates", "#glycosidicbonds", "#starch", "#cellulose", "#structure", "#function", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "Explain the relationship between the structure of amino acids and the function of proteins. How does the R-group influence the protein’s activity?",
    "answer": "Amino acids are the building blocks of proteins. The structure of an amino acid includes a central carbon, an amino group, a carboxyl group, and an R-group (side chain), which varies between different amino acids. The R-group determines the amino acid's chemical properties (e.g., hydrophobic, hydrophilic, acidic, basic) and plays a critical role in the protein’s folding and function. The interactions between R-groups (e.g., hydrophobic interactions, hydrogen bonding, ionic bonds, and disulfide bridges) drive the formation of the protein’s three-dimensional structure. This structure is crucial for the protein’s function, such as enzyme catalysis, substrate binding, and molecular recognition.",
    "tags": ["#all", "#biology", "#aminoacids", "#proteins", "#Rgroup", "#function", "#structure", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "How do the properties of nucleotides allow DNA to function as a stable and reliable genetic material? Discuss how base pairing contributes to DNA replication.",
    "answer": "Nucleotides consist of a nitrogenous base (A, T, G, or C), a five-carbon sugar (deoxyribose in DNA), and a phosphate group. In DNA, base pairing occurs between adenine (A) and thymine (T), and between guanine (G) and cytosine (C), held together by hydrogen bonds. This complementary base pairing allows DNA to maintain a stable double-helix structure, ensuring the accurate storage and transmission of genetic information. During DNA replication, the two strands of DNA separate, and each strand serves as a template for the synthesis of a new complementary strand, using base pairing to ensure the correct sequence of nucleotides is incorporated.",
    "tags": ["#all", "#biology", "#DNA", "#nucleotides", "#basepairing", "#replication", "#geneticinformation", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "What are the functional differences between DNA and RNA in the central dogma of molecular biology, and how do their structures reflect these roles?",
    "answer": "DNA and RNA are both nucleic acids, but they serve different roles in the central dogma of molecular biology. DNA stores genetic information in a stable, double-stranded form, which is used as a template for RNA synthesis during transcription. RNA is single-stranded and serves as an intermediary, carrying the genetic code from DNA to the ribosome for protein synthesis in translation. The structural differences between DNA (double-stranded, deoxyribose sugar) and RNA (single-stranded, ribose sugar) reflect their functional differences: DNA’s stability allows it to serve as a long-term genetic repository, while RNA’s reactivity allows it to quickly perform its role in protein synthesis.",
    "tags": ["#all", "#biology", "#DNA", "#RNA", "#centraldogma", "#structure", "#function", "#APBio", "#lecture2", "#frq"]
  },
  {
    "question": "What is the importance of protein misfolding in diseases such as Alzheimer's, and how does this misfolding affect cellular functions?",
    "answer": "Protein misfolding occurs when proteins do not adopt their correct three-dimensional structure, which can lead to the accumulation of misfolded proteins and the formation of toxic aggregates. In **Alzheimer’s disease**, misfolded **amyloid-beta** proteins aggregate to form plaques in the brain, leading to neuronal dysfunction, inflammation, and ultimately neurodegeneration. The misfolded proteins disrupt normal cell processes, impairing synaptic function and leading to cognitive decline. Other diseases, such as **cystic fibrosis** and **Parkinson’s disease**, are also associated with misfolded proteins, showing how critical proper protein folding is for cellular function and health.",
    "tags": ["#all", "#biology", "#proteinMisfolding", "#Alzheimers", "#diseases", "#function", "#APBio", "#lecture2", "#frq"]
  }
		], 
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

  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.classList.remove("modal-open");
  });

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
      document.body.classList.remove("modal-open");
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

  //  NEW: Dropdown filter support for all screen sizes
  const tagDropdown = document.getElementById("lecture-filter-dropdown");
  if (tagDropdown) {
    tagDropdown.addEventListener("change", () => {
      const selectedTag = tagDropdown.value;
      applyTagFilter(selectedTag);
    });
  }
});