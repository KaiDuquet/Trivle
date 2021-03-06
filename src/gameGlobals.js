import officialBank from './official.json'

const wordBanks = {
	'Sunday': {
		theme: 'Everything!',
		difficulty: 'Easy',
		words: [
			'often','lease','owner','small','large','creep','waste','stick','panic','quota','smile','rough','unity','ferry',
			'tempt','slave','train','faith','abuse','stake','feigh','whole','total','dozen','swarm','alive','title','petty',
			'curve','agile','broad','slide','pluck','fling','widen','count','stall','dress','tribe','store','power','beard',
			'troop','anger','sweat','trunk','young','south','north','abbey','embox','extra','enter','shoot','debut','fever',
			'eject','snarl','ivory','carry','frown','favor','other','spell','place','trade','union','sense','greet','stock',
			'muggy','lamps','blade','shout','crate','reach','enfix','groan','choke','flash','shock','state','giant','evoke',
			'round','gaffe','rugby','elite','money','drown','loose','stuff'
		]
	},
	'Monday': {
		theme: 'Food',
		difficulty: 'Easy',
		words: [
			"anise","apple","aspic","bacon","bagel","basil","beans","berry","bland","bread","broil","candy","cater","chard",
			"chili","chips","cream","crepe","crisp","crust","curds","curry","dairy","dates","diner","dough","dried","drink",
			"feast","flour","fried","fruit","grain","grape","gravy","guava","herbs","honey","icing","jelly","juice","kebab",
			"knife","ladle","lemon","liver","lunch","maize","mango","melon","mints","mochi","munch","olive","onion","order",
			"pasta","patty","peach","pecan","pilaf","pizza","plate","prune","punch","roast","salad","salsa","sauce","seeds",
			"slice","snack","spicy","spoon","spork","spuds","squid","steak","stove","straw","sugar","sushi","sweet","syrup",
			"thyme","toast","torte","tuber","wafer","water","wheat","yeast",
		]
	},
	'Tuesday': {
		theme: 'Cities and Countries',
		difficulty: 'Very Hard',
		words: [
			"samoa","gabon","qatar","libya","syria","niger","nepal","yemen","ghana","sudan","spain","kenya","italy","egypt",
			"japan","china","india","malta","benin","tonga","palau","nauru","cairo","paris","yaren","vaduz","tunis","tokyo",
			"sucre","sofia","seoul","sanaa","rabat","quito","praia","minsk","lagos","kyoto","kabul","hanoi","dhaka","dakar",
			"berne","amman","alofi","accra","abuja","milan","porto","turin","leeds","genoa","liege","brest","dijon","sochi",
			"mecca","macau","osaka","wuhan","delhi","dubai","yukon","flint","salem","tampa","utica","omaha","vegas","huron",
			"miami","dover","texas","idaho","maine","chile","congo","macao","touba","zaria","beira","warri","tanta","delta",
			"trail","brant","gaspe","laval","levis","perce","tulsa","boise"
		],
	},
	'Wednesday': {
		theme: 'Common First Names',
		difficulty: 'Easy',
		words: [
			"adolf","abdul","aaron","ahmed","alvin","boris","blake","pablo","brian","brett","bruno","bryce","caleb","casey",
			"alice","chloe","cathy","cindy","linda","carol","bella","bambi","jamie","annie","daisy","diane","dixie","edith",
			"dylan","drake","diego","edgar","eddie","elvis","erwin","emile","ethan","felix","floyd","frank","fritz","geoff",
			"sasha","trish","paula","emily","riley","hazel","sofie","clara","grace","julia","julie","alexa","sarah","elena",
			"james","lucas","david","logan","nolan","jason","jacob","henry","isaac","wyatt","jaxon","ayden","roman","aiden",
			"layla","lydia","sadie","quinn","piper","naomi","avery","ellie","erika","erica","haley","diana","ember","hanna",
			"holly","lilly","maria","karen","maxim","oscar","pedro","roger"
		]
	},
	'Thursday': {
		theme: 'Science, Life and Nature',
		difficulty: 'Hard',
		words: [
			'atoms','axiom','maths','light','cliff','space','quark','plant','birth','lives','breed','semen','sperm','speed',
			'basis','micro','macro','graph','earth','stars','comet','magma','child','adult','scope','cells','facts','flask',
			'genes','meteo','phase','organ','heart','brain','prism','tests','value','chart','prove','bones','lungs','blood',
			'weigh','watch','glass','added','times','virus','force','joule','datum','orbit','tidal','tides','waves','solar',
			'cycle','chemo','gluon','prion','ionic','xenon','argon','radon','atlas','helix','level','pluto','venus','moons',
			'field','ocean','river','lakes','teeth','coast','tooth','caves','solid','grass','rocks','stone','trees','cloud',
			'storm','death','sunny','exact','metal','dense','float','clear',
		]
	},
	'Friday': {
		theme: 'Arts, Music and Entertainment',
		difficulty: 'Hard',
		words: [
			'paint','color','shape','style','tones','tonal','blues','jazzy','music','theme','scale','lines','sound','drama',
			'piece','shows','films','actor','sings','notes','major','minor','works','tonic','write','paper','brush','voice',
			'opera','stage','scene','plays','gloss','ideas','think','signs','first','third','fifth','short','flute','drums',
			'blend','parts','green','taste','piano','forte','mezzo','pitch','tempo','black','craft','chord','grave','beats',
			'dance','moves','lento','slurs','solos','bands','tenor','trill','turns','vocal','score','track','brown','curvy',
			'point','shade','print','mixed','tools','forms','genre','layer','stain','skill','tales','story','books','reads',
			'image','drawn','draws','photo','video','depth','matte','media'
		]
	},
	'Saturday': {
		theme: 'Animals',
		difficulty: 'Medium',
		words: [
			"aguti","ammon","ariel","bison","birds","boars","bulls","brock","bears","burro","camel","canis","chimp","coati",
			"coral","crows","crane","daman","deers","dingo","doggy","drill","eagle","fauna","flies","frogs","goose","goats",
			"hippo","horse","hutia","hyena","indri","jocko","koala","kitty","larva","lemur","liger","llama","magot","lions",
			"minks","moles","moose","morse","mouse","nagor","okapi","orang","oribi","otary","otter","ounce","panda","pekan",
			"pongo","puppy","rhino","roach","royal","sable","saiga","sajou","sasin","sheep","shoat","shote","shrew","skunk",
			"sloth","snail","snake","steer","stirk","stoat","swine","tabby","takin","tapir","tatou","tiger","tigon","urial",
			"urson","vison","vixen","whale","whelp","worms","zebra","zorro",
		],
	},
	'general': {
		theme: 'others',
		words: [
			"aback", "abase", "abate", "abaya", "abbot", "abets", "abhor", "abide", "abode", "abort", "about", "above", "abuts", "abyss", "ached", "aches", "acids", "acing", "ackee", "acorn", "acres", "acrid", "acted", "actin", "acute", "adage", "adapt", "adder", "addle", "adept", "adieu", "adios", "adits", "adman", "admin", "admit", "adobe", "adobo", "adopt", "adore", "adorn", "adzes", "aegis", "aeons", "aerie", "affix", "afire", "afoot", "afore", "after", "again", "agape", "agate", "agave", "agent", "aggro", "aging", "aglow", "agony", "agora", "agree", "ahead", "ahold", "aided", "aider", "aides", "ailed", "aimed", "aimer", "aioli", "aired", "aisle", "alarm", "album", "alder", "aleph", "alert", "algae", "algal", "alias", "alibi", "alien", "align", "alike", "alkyd", "alkyl", "allay", "alley", "allot", "allow", "alloy", "allyl", "aloes", "aloft", "aloha", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "altos", "alums", "amass", "amaze", "amber", "ambit", "amble", "ambos", "amend", "amide", "amine", "amino", "amiss", "amity", "amnio", "among", "amour", "amped", "ample", "amply", "amuse", "ancho", "angel", "angle", "angry", "angst", "anima", "anime", "anion", "ankle", "annas", "annex", "annoy", "annul", "anode", "anole", "antic", "antis", "antsy", "anvil", "aorta", "apace", "apart", "aphid", "apnea", "apply", "apron", "apses", "apter", "aptly", "aquas", "arbor", "ardor", "areal", "areas", "areca", "arena", "argot", "argue", "argus", "arias", "arils", "arise", "armed", "armor", "aroma", "arose", "array", "arrow", "arses", "arson", "artsy", "asana", "ascot", "ashen", "ashes", "aside", "asked", "asker", "askew", "aspen", "assay", "asses", "asset", "aster", "astir", "asura", "atman", "atoll", "atone", "atopy", "attic", "audio", "audit", "auger", "aught", "augur", "aunts", "aunty", "aural", "auras", "autos", "auxin", "avail", "avers", "avert", "avian", "avoid", "avows", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axels", "axial", "axils", "axing", "axion", "axles", "axons", "azide", "azole", "azure", "babel", "babes", "babka", "backs", "baddy", "badge", "badly", "baggy", "bails", "bairn", "baits", "baize", "baked", "baker", "bakes", "baldy", "baled", "baler", "bales", "balks", "balky", "balls", "balms", "balmy", "balsa", "banal", "bandy", "banes", "bangs", "banjo", "banks", "barbs", "bards", "bared", "barer", "bares", "barge", "barks", "barmy", "barns", "baron", "barre", "basal", "based", "baser", "bases", "basic", "basin", "basks", "basso", "bassy", "baste", "batch", "bated", "bathe", "baths", "batik", "baton", "batts", "batty", "bawdy", "bawls", "bayed", "bayou", "beach", "beads", "beady", "beaks", "beams", "beamy", "beast", "beaus", "beaut", "beaux", "bebop", "becks", "beech", "beefs", "beefy", "beeps", "beers", "beery", "beets", "befit", "began", "beget", "begin", "begun", "beige", "being", "belay", "belch", "belie", "belle", "bells", "belly", "below", "belts", "bench", "bends", "bendy", "bento", "bents", "beret", "bergs", "berms", "berth", "beryl", "beset", "bests", "betas", "betel", "betta", "bevel", "bezel", "bhaji", "bible", "bicep", "biddy", "bided", "bides", "bidet", "bight", "bigot", "bijou", "biked", "biker", "bikes", "biles", "bilge", "bills", "billy", "bimbo", "bindi", "binds", "binge", "bingo", "biome", "biota", "bipod", "birch", "bitch", "biter", "bites", "bitsy", "bitty", "blame", "blank", "blare", "blase", "blast", "blaze", "bleak", "bleat", "blebs", "bleed", "bleep", "bless", "blimp", "blind", "bling", "blini", "blink", "blips", "bliss", "blitz", "bloat", "blobs", "block", "blocs", "blogs", "bloke", "blond", "bloom", "bloop", "blots", "blown", "blows", "blued", "bluey", "bluff", "blunt", "blurb", "blurs", "blurt", "blush", "board", "boast", "boats", "bobby", "bocce", "boche", "boded", "bodes", "boffo", "bogey", "boggy", "bogie", "bogus", "boils", "bolas", "boles", "bolls", "bolts", "bolus", "bombe", "bombs", "bonds", "boned", "boner", "boney", "bongo", "bongs", "bonks", "bonny", "bonus", "boobs", "booby", "booed", "booms", "boomy", "boons", "boors", "boost", "booth", "boots", "booty", "booze", "boozy", "boppy", "borax", "bored", "borer", "bores", "boric", "borne", "boron", "bosom", "boson", "bossy", "bosun", "botch", "bough", "boule", "bound", "bouts", "bowed", "bowel", "bower", "bowls", "boxed", "boxer", "boxes", "boyar", "boyos", "bozos", "brace", "bract", "brads", "brags", "braid", "brake", "brand", "brans", "brash", "brass", "brats", "brave", "bravo", "brawl", "brawn", "brays", "braze", "break", "bream", "brews", "briar", "bribe", "brick", "bride", "brief", "brier", "brigs", "brims", "brine", "bring", "brink", "briny", "brisk", "brits", "broch", "broke", "brome", "bronc", "brood", "brook", "broom", "broth", "brows", "bruin", "bruit", "brunt", "brute", "bubba", "bucks", "buddy", "budge", "buffs", "buggy", "bugle", "build", "built", "bulbs", "bulge", "bulks", "bulky", "bulla", "bully", "bumps", "bumpy", "bunch", "bunds", "bundt", "bunks", "bunny", "bunts", "buoys", "burbs", "burgs", "burka", "burly", "burns", "burnt", "burps", "burqa", "burrs", "bursa", "burst", "bused", "buses", "bushy", "busts", "busty", "butch", "butte", "butts", "buxom", "buyer", "buzzy", "bylaw", "byres", "bytes", "byway", "cabal", "cabby", "caber", "cabin", "cable", "cacao", "cache", "cacti", "caddy", "cadet", "cadre", "cafes", "caged", "cages", "cagey", "cairn", "caked", "cakes", "cakey", "calfs", "calif", "calla", "calls", "calms", "calve", "calyx", "cameo", "campo", "camps", "campy", "canal", "caned", "canes", "canid", "canna", "canny", "canoe", "canon", "canto", "caped", "caper", "capes", "capon", "capos", "caput", "carat", "carbo", "carbs", "cards", "cared", "carer", "cares", "cargo", "carob", "carom", "carps", "carte", "carts", "carve", "cased", "cases", "casks", "caste", "casts", "catch", "catty", "caulk", "cause", "caved", "caver", "cavil", "cease", "cecal", "cecum", "cedar", "ceded", "cedes", "ceili", "celeb", "cello", "celts", "cents", "chads", "chafe", "chaff", "chain", "chair", "chalk", "champ", "chana", "chant", "chaos", "chaps", "charm", "chars", "chase", "chasm", "chats", "cheap", "cheat", "check", "cheek", "cheep", "cheer", "chefs", "chert", "chess", "chest", "chews", "chewy", "chica", "chick", "chico", "chide", "chief", "chill", "chime", "chine", "ching", "chino", "chins", "chirp", "chits", "chive", "chock", "choir", "chomp", "chops", "chore", "chose", "chows", "chubs", "chuck", "chuff", "chugs", "chump", "chums", "chunk", "churn", "chute", "cider", "cigar", "cinch", "circa", "cisco", "cited", "cites", "civet", "civic", "civil", "civvy", "clack", "clade", "claim", "clamp", "clams", "clang", "clank", "clans", "claps", "clash", "clasp", "class", "clave", "claws", "clays", "clean", "cleat", "clefs", "cleft", "clerk", "click", "climb", "clime", "cline", "cling", "clink", "clips", "cloak", "clock", "clods", "clogs", "clomp", "clone", "close", "cloth", "clots", "clout", "clove", "clown", "clubs", "cluck", "clued", "clues", "clump", "clung", "clunk", "coach", "coals", "coats", "cobia", "cobra", "cocci", "cocks", "cocky", "cocoa", "codas", "codec", "coded", "coder", "codes", "codex", "codon", "coeds", "cohos", "coifs", "coils", "coins", "cokes", "colas", "colds", "coles", "colic", "colin", "colon", "colts", "comas", "combo", "combs", "comer", "comes", "comfy", "comic", "comma", "commo", "compo", "comps", "comte", "conch", "condo", "coned", "cones", "conga", "conic", "conks", "cooed", "cooks", "cools", "coops", "coopt", "coped", "copes", "copra", "copse", "cords", "cored", "corer", "cores", "corgi", "corks", "corky", "corms", "corns", "cornu", "corny", "corps", "costs", "cotta", "couch", "cough", "could", "coupe", "coups", "court", "coven", "cover", "coves", "covet", "covey", "cowed", "cower", "cowls", "coyly", "crabs", "crack", "crags", "cramp", "crams", "crank", "crape", "craps", "crash", "crass", "crave", "crawl", "craws", "craze", "crazy", "creak", "credo", "creed", "creek", "creel", "creme", "crept", "cress", "crest", "crews", "cribs", "crick", "cried", "crier", "cries", "crime", "crimp", "crits", "croak", "crock", "crocs", "croft", "crone", "crony", "crook", "croon", "crops", "cross", "croup", "crowd", "crown", "crude", "cruel", "cruet", "crumb", "cruse", "crush", "crypt", "cubby", "cubed", "cubes", "cubic", "cubit", "cuddy", "cuffs", "culls", "culpa", "cults", "cumin", "cupid", "cuppa", "curbs", "cured", "cures", "curia", "curio", "curls", "curly", "curse", "cushy", "cusps", "cuter", "cutie", "cutis", "cutup", "cycad", "cyclo", "cynic", "cysts", "czars", "dacha", "daddy", "dados", "daffy", "daily", "dales", "dames", "damns", "damps", "dandy", "dared", "dares", "darks", "darns", "darts", "dashi", "dated", "dater", "daubs", "daunt", "davit", "dawns", "dazed", "deals", "dealt", "deans", "dears", "deary", "debit", "debts", "debug", "decaf", "decal", "decay", "decks", "decor", "decoy", "decry", "deeds", "deems", "deeps", "defer", "deify", "deign", "deism", "deist", "deity", "dekes", "delay", "delft", "delis", "dells", "delve", "demon", "demos", "demur", "denim", "dents", "depot", "derby", "desks", "deter", "detox", "deuce", "devil", "dewar", "dhikr", "dhows", "dials", "diary", "diced", "dices", "dicey", "dicky", "dicta", "diets", "digit", "diked", "dikes", "dills", "dilly", "dimer", "dimes", "dimly", "dinar", "dined", "dines", "dings", "dingy", "dinks", "dinky", "dinos", "diode", "dippy", "direr", "dirge", "dirty", "disco", "discs", "dishy", "disks", "ditch", "ditsy", "ditto", "ditty", "ditzy", "divan", "divas", "dived", "diver", "dives", "divot", "divvy", "dizzy", "docks", "dodge", "dodgy", "dodos", "doers", "doffs", "doges", "dogma", "doing", "doled", "doles", "dolls", "dolly", "dolor", "dolts", "domed", "domes", "donee", "dongs", "donna", "donor", "donut", "dooms", "doomy", "doors", "doozy", "doped", "dopes", "dopey", "dorks", "dorky", "dorms", "dosas", "dosed", "doses", "doted", "dotes", "dotty", "doubt", "doula", "douse", "doves", "dowdy", "dowel", "dower", "downs", "downy", "dowry", "dowse", "doyen", "dozed", "dozer", "dozes", "drabs", "draft", "drags", "drain", "drams", "drank", "drape", "drawl", "drays", "dread", "dream", "dreck", "dregs", "dribs", "drier", "dries", "drift", "drily", "drips", "drive", "droid", "droll", "drone", "drool", "droop", "drops", "dross", "drove", "drugs", "druid", "drunk", "drupe", "dryad", "dryer", "dryly", "duals", "ducal", "ducat", "duchy", "ducks", "ducky", "ducts", "dudes", "duels", "duets", "duffs", "dukes", "dulls", "dully", "dulse", "dumbo", "dummy", "dumps", "dumpy", "dunce", "dunes", "dunks", "duomo", "duped", "dupes", "dural", "durum", "dusks", "dusky", "dusts", "dusty", "dutch", "duvet", "dwarf", "dweeb", "dwell", "dwelt", "dyads", "dyers", "dying", "dykes", "eager", "eared", "earls", "early", "earns", "eased", "easel", "easer", "eases", "eaten", "eater", "eaves", "ebbed", "ebony", "ebook", "echos", "eclat", "edema", "edged", "edger", "edges", "edict", "edify", "edits", "eejit", "eerie", "egged", "egret", "eider", "eidos", "eight", "ejido", "eland", "elbow", "elder", "elect", "elegy", "elide", "elope", "elude", "elute", "elven", "elves", "email", "embed", "emcee", "emery", "emirs", "emits", "emote", "empty", "enact", "ended", "endow", "enema", "enemy", "enjoy", "ennui", "enoki", "enrol", "ensue", "entry", "envoy", "eosin", "epics", "epoch", "epoxy", "equal", "equip", "erase", "erect", "ergot", "erode", "erred", "error", "erupt", "essay", "ether", "ethic", "ethos", "ethyl", "etude", "euros", "evade", "evens", "event", "every", "evict", "evils", "ewers", "exalt", "exams", "excel", "execs", "exert", "exile", "exist", "exits", "expat", "expel", "expos", "extol", "exude", "exult", "exurb", "eying", "eyrie", "fable", "faced", "facer", "faces", "facet", "facia", "faded", "fader", "fades", "faery", "fails", "faint", "fairs", "fairy", "faked", "faker", "fakes", "fakie", "fakir", "falls", "famed", "fancy", "fangs", "fanny", "farce", "fared", "fares", "farms", "farts", "fasts", "fatal", "fated", "fates", "fatso", "fatty", "fatwa", "fault", "fauns", "favas", "faves", "fawns", "faxed", "faxes", "fazed", "fazes", "fears", "feats", "fecal", "feces", "feeds", "feels", "feign", "feint", "fella", "fells", "felon", "felts", "femme", "femur", "fence", "fends", "feral", "feria", "ferns", "ferny", "fests", "fetal", "fetch", "feted", "fetes", "fetid", "fetus", "feuds", "fewer", "fiats", "fiber", "fibre", "fiche", "ficus", "fiefs", "fiend", "fiery", "fifes", "fifty", "fight", "filch", "filed", "filer", "files", "filet", "fills", "filly", "filmy", "filth", "final", "finca", "finch", "finds", "fined", "finer", "fines", "finis", "finks", "fiord", "fired", "fires", "firms", "fishy", "fists", "fitly", "fiver", "fives", "fixed", "fixer", "fixes", "fizzy", "fjord", "flack", "flags", "flail", "flair", "flake", "flaky", "flame", "flank", "flans", "flaps", "flare", "flats", "flaws", "flays", "fleas", "fleck", "flees", "fleet", "flesh", "flick", "flier", "flood", "floor", "flown", "flows", "fluid", "flyer", "focal", "focus", "folks", "fonts", "foods", "forth", "forty", "forum", "found", "frame", "fraud", "fresh", "fries", "front", "frost", "fuels", "fully", "funds", "funny", "gains", "games", "gamma", "gases", "gates", "gauge", "gears", "ghost", "gifts", "girls", "given", "gives", "gland", "globe", "glory", "glove", "glued", "goals", "going", "goods", "grade", "grams", "grand", "grant", "grasp", "great", "greek", "grief", "grill", "grind", "grips", "gross", "group", "grove", "grown", "grows", "guard", "guess", "guest", "guide", "guild", "guilt", "habit", "hairs", "halls", "hands", "handy", "hangs", "happy", "harsh", "hated", "hates", "haven", "hawks", "heads", "heard", "heavy", "hedge", "heels", "hello", "helps", "hence", "highs", "hills", "hints", "hired", "hobby", "holds", "holes", "homes", "honor", "hooks", "hoped", "hopes", "horns", "hosts", "hotel", "hours", "house", "hover", "human", "humor", "hurts", "icons", "ideal", "idiot", "imply", "inbox", "incur", "index", "indie", "inner", "input", "intro", "issue", "items", "jeans", "jewel", "joins", "joint", "jokes", "judge", "juicy", "jumps", "keeps", "kicks", "kills", "kinda", "kinds", "kings", "knees", "knock", "knots", "known", "knows", "label", "labor", "lacks", "lands", "lanes", "laser", "lasts", "later", "laugh", "leads", "leaks", "learn", "least", "leave", "legal", "lever", "liked", "likes", "limbs", "limit", "lined", "linen", "liner", "links", "lists", "lived", "loads", "loans", "lobby", "local", "locks", "lodge", "logic", "logos", "looks", "loops", "lords", "loses", "loved", "lover", "loves", "lower", "loyal", "lucky", "lunar", "lying", "magic", "maker", "makes", "males", "maple", "march", "marks", "marry", "masks", "match", "mates", "maybe", "mayor", "meals", "means", "meant", "meats", "medal", "meets", "melee", "menus", "mercy", "merge", "merit", "merry", "messy", "meter", "metro", "midst", "might", "miles", "minds", "mines", "minus", "mixer", "mixes", "model", "modem", "modes", "moist", "month", "moral", "motor", "mount", "mouth", "moved", "movie", "myths", "nails", "naked", "named", "names", "nasal", "nasty", "naval", "needs", "nerve", "never", "newer", "newly", "nexus", "nicer", "niche", "night", "ninja", "ninth", "noble", "nodes", "noise", "noisy", "norms", "notch", "noted", "novel", "nurse", "nylon", "oasis", "occur", "offer", "older", "omega", "onset", "opens", "opted", "optic", "ought", "outer", "owned", "oxide", "packs", "pages", "pains", "pairs", "panel", "pants", "parks", "party", "paste", "patch", "paths", "patio", "pause", "peace", "peaks", "pearl", "pedal", "peers", "penis", "penny", "perks", "pests", "phone", "picks", "piles", "pills", "pilot", "pinch", "pipes", "pixel", "plain", "plane", "plans", "plaza", "plots", "plugs", "poems", "poker", "polar", "poles", "polls", "pools", "porch", "pores", "ports", "posed", "poses", "posts", "pouch", "pound", "press", "price", "pride", "prime", "prior", "prize", "probe", "promo", "prone", "proof", "props", "proud", "proxy", "psalm", "pulls", "pulse", "pumps", "pupil", "purse", "queen", "query", "quest", "queue", "quick", "quiet", "quilt", "quite", "quote", "races", "racks", "radar", "radio", "rails", "rainy", "raise", "rally", "ranch", "range", "ranks", "rapid", "rated", "rates", "ratio", "razor", "react", "ready", "realm", "rebel", "refer", "reign", "relax", "relay", "renal", "renew", "reply", "reset", "resin", "retro", "rider", "rides", "ridge", "rifle", "right", "rigid", "rings", "rinse", "risen", "rises", "risks", "risky", "rival", "roads", "robot", "rocky", "rogue", "roles", "rolls", "rooms", "roots", "ropes", "roses", "route", "ruins", "ruled", "ruler", "rules", "rural", "sadly", "safer", "sales", "salon", "sandy", "satin", "saved", "saves", "scalp", "scans", "scare", "scarf", "scary", "scent", "scoop", "scout", "scrap", "screw", "seals", "seams", "seats", "seeks", "seems", "sells", "sends", "serum", "serve", "setup", "seven", "sewer", "shaft", "shake", "shall", "shame", "share", "shark", "sharp", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "ships", "shirt", "shoes", "shook", "shops", "shore", "shots", "shown", "sides", "siege", "sight", "sigma", "silly", "since", "sites", "sixth", "sized", "sizes", "skies", "skins", "skirt", "skull", "slate", "sleek", "sleep", "slept", "slope", "slots", "smart", "smell", "smoke", "sneak", "socks", "soils", "solve", "songs", "sonic", "sorry", "sorts", "souls", "spare", "spark", "speak", "specs", "spend", "spent", "spice", "spike", "spine", "spite", "split", "spoke", "sport", "spots", "spray", "spurs", "squad", "stack", "staff", "stamp", "stand", "stark", "start", "stats", "stays", "steal", "steam", "steel", "steep", "stems", "steps", "stiff", "still", "stole", "stood", "stool", "stops", "strap", "strip", "stuck", "study", "sucks", "suite", "suits", "super", "surge", "swear", "swept", "swift", "swing", "swiss", "sword", "table", "taken", "takes", "talks", "tanks", "tapes", "tasks", "tasty", "taxes", "teach", "teams", "tears", "teens", "tells", "tends", "tenth", "tents", "terms", "texts", "thank", "theft", "their", "there", "these", "thick", "thief", "thigh", "thing", "those", "three", "threw", "throw", "thumb", "tight", "tiles", "timer", "tired", "tires", "today", "token", "topic", "torch", "touch", "tough", "tours", "towel", "tower", "towns", "toxic", "trace", "tract", "trait", "trans", "traps", "trash", "treat", "trend", "trial", "trick", "tried", "tries", "trips", "trout", "truck", "truly", "trump", "trust", "truth", "tubes", "tumor", "tuned", "tunes", "turbo", "tutor", "tweet", "twice", "twins", "twist", "types", "tyres", "ultra", "uncle", "under", "unite", "units", "until", "upper", "upset", "urban", "urged", "urine", "usage", "users", "using", "usual", "vague", "valid", "valve", "vapor", "vault", "vegan", "veins", "vents", "venue", "verse", "views", "villa", "vinyl", "viral", "visas", "visit", "vital", "vivid", "vodka", "volts", "voted", "voter", "votes", "wages", "wagon", "waist", "walks", "walls", "wants", "warns", "watts", "wears", "weeds", "weeks", "weird", "wells", "welsh", "wheel", "where", "which", "while", "white", "whose", "wider", "widow", "width", "winds", "wines", "wings", "wiped", "wired", "wires", "witch", "wives", "woman", "women", "woods", "words", "world", "worry", "worse", "worst", "worth", "would", "wound", "wrath", "wrist", "wrong", "wrote", "yacht", "yards", "years", "yield", "yours", "youth", "yummy", "zones"
		]
	}
};


export const getWordBank = (day) => wordBanks[day];

export const getOfficialWord = (day) => {
	return officialBank[day];
}

export const getAllWords = () => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", 'general'];
	const allWords = new Set();
	for (let day of days) {
		wordBanks[day].words.forEach(allWords.add, allWords)
	}
	return allWords
}

export const keyboardKeys = [['q','w','e','r','t','y','u','i','o','p'],
						['a','s','d','f','g','h','j','k','l'],
						['Submit','z','x','c','v','b','n','m','Delete']];

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

// ALL WORDS BANK GENERATION

/*function generate() {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const { general, ...allBanks } = wordBanks;
	const officialBank = []

	let day = new Date().getDay();

	while (officialBank.length < 92 * 7) {
		let weekday = days[day];

		if (allBanks[weekday].words.length === 0) break;
		const randIndex = Math.floor(Math.random() * allBanks[weekday].words.length);
		officialBank.push(allBanks[weekday].words.splice(randIndex, 1)[0]);
		day = (day + 1) % 7;
	}

	console.log(officialBank)
}

generate();*/