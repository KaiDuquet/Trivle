const wordBanks = {
	'Sunday': {
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
	'Monday': {
		theme: 'Animals',
		difficulty: 'Medium',
		words: [
			
		],
	},
	'Tuesday': {
		theme: 'Cities and Countries',
		difficulty: 'Hard',
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
		theme: 'First Names',
		difficulty: 'Easy',
		words: [
			"adolf","abdul","aaron","ahmed","alvin","boris","blake","brock","brian","brett","bruno","bryce","caleb","casey",
			"alice","chloe","cathy","cindy","linda","carol","bella","bambi","ariel","annie","daisy","diane","dixie","edith",
			"dylan","drake","diego","edgar","eddie","elvis","erwin","emile","ethan","felix","floyd","frank","fritz","geoff",
		]
	},
	'Thursday': {
		theme: 'Science, Life and Nature',
		difficulty: 'Hard',
		words: [
			'atoms','axiom','maths','light','color','space','quark','plant','birth','lives','breed','semen','sperm','speed',
			'photo','micro','macro','graph','earth','stars','comet','magma','child','adult','scope','cells','facts','flask',
			'genes','meteo','phase','organ','heart','brain','scale','tests','value','chart','liver','bones','lungs','blood',
			'weigh','watch','glass','added','times','virus','force','joule','datum','orbit','tidal','tides','waves','solar',
			'cycle','chemo','gluon','prion','ionic','xenon','argon','radon','atlas','helix','level','omega','sigma','pluto',
			'venus','moons',
		]
	},
	'Friday': {
		theme: 'Yoyo',
		words: [

		]
	},
	'Saturday': {
		theme: 'Animals',
		difficulty: 'Medium',
		words: [
			"aguti","ammon","ariel","bison","bitch","boars","bulls","brock","bears","burro","camel","canis","chimp","coati",
			"coral","crows","crane","daman","deers","dingo","doggy","drill","eagle","fauna","flies","frogs","grice","goats",
			"hippo","horse","hutia","hyena","indri","jocko","koala","kitty","larva","lemur","liger","llama","magot","lions",
			"minks","moles","moose","morse","mouse","nagor","okapi","orang","oribi","otary","otter","ounce","panda","pekan",
			"pongo","puppy","rhino","roach","royal","sable","saiga","sajou","sasin","sheep","shoat","shote","shrew","skunk",
			"sloth","snail","snake","steer","stirk","stoat","swine","tabby","takin","tapir","tatou","tiger","tigon","urial",
			"urson","vison","vixen","whale","whelp","worms","zebra","zorro",
		],
	}
};

const getWordBank = (day) => (wordBanks[day]);

export default getWordBank;
export const keyboardKeys = [['q','w','e','r','t','y','u','i','o','p'],
						['a','s','d','f','g','h','j','k','l'],
						['Enter','z','x','c','v','b','n','m','\u232b']];

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;