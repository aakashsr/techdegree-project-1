// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote , false);
document.getElementById('loadQuote').addEventListener("click" , changeBgColor ,false );

//Creating array of objects
var quotes = [
{
	quote :"Arise! , Awake! and not stop until the goal is reached.",
	source:"Swami Vivekananda",
	tag:"motivational" 
},

{
	quote :"Tradition becomes security and when the mind becomes secure , it is in decay.",
	source :"Jiddu Krishnamurty",
	tag:"mind"
},

{
	quote :"Life and death are one thread, the same line viewed from different sides.",
	source :"Lao Tzu",
	tag:"life"                                    
},

{ 
	quote :"You can't blame gravity for falling in love.",
	source :"Albert Einstein",
	tag:"love"                               
},

{
	quote :"It is during our darkest moments that we must focus to see the light.",
	source :"Aristotle",
	tag:"inspiration"                              
},

{  
	quote :"The only journey is the one within.",
	source :"Rainer Maria Rilke",
	tag:"life"                               
},

{
	quote :"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
	source:"Lau Tzu",
	tag:"love"
},

{
	quote :"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
	source :"Buddha",
	tag:"life"
},

{
	quote :"Change your thoughts and you change your world.",
	source :"Norman Vincent Peale",
	tag:"inspirational"
},

{
	quote :"God cares, and humanity cares, and I care; and with God’s help I shall not fail. I may not see the end; but it will come and I shall be vindicated",
	source :"Abraham Lincoln",
	tag :"humanity",
	citaion: "Life of Abraham Lincoln by Joseph Holland",
	year: 1866
},

{
	quote :"The mind is everything. What you think you become.",
	source :"Buddha",
	tag:"mind"
},

{
	quote :"Failure is only the opportunity more intelligently to begin again. There is no disgrace in honest failure.",
	source :"Henry Ford",
	tag: "Success",
	citation:"The Magazine of Business",
	year: 1927
},

{
	quote :"The only true wisdom is in knowing you know nothing.",
	source :"Socrates",
	tag:"wisdom"
},

{
	quote :"Try to be a rainbow in someone's cloud.",
	source :"Maya Angelou",
	tag:"relationship"
},

{
	quote :"A person should set his goals as early as he can and devote all his energy and talent to getting there.",
	source: "Walt Disney",
	tag:"dream",
	citation:"Magician of the Movies",
	year:1966
}
]

function getRandomQuote(){
	// returning random quotes's "object' by using Math.random() function to obtain subscript of objects
	return quotes[Math.floor(Math.random()*quotes.length)];  
}

function printQuote(){
	var quoteHTML = " ";
    // calling the getRandomQuote function and storing the returned object in a variable.
    let randomQuote = getRandomQuote(); 
	// selecting the quote property of the stored object						  
	quoteHTML += '<p class="quote">' + randomQuote.quote + "</p>";
	// selecting the source property of the stored object	 
	quoteHTML +='<p class="source">' + randomQuote.source;
	//Checking if the returned object has "citation" property?
	if(randomQuote.hasOwnProperty("citation")){
		quoteHTML +='<span class="citation">' + randomQuote.citation + "</span>";
		quoteHTML +='<span class="year">' + randomQuote.year + "</span></p>";
	}

	// selecting the tag property of the stored object
	quoteHTML +='<p class="tag">' +	 "tag: " + randomQuote.tag + "</p>";	

	//Appending the content of quoteHTML into the DOM as text
	document.getElementById("quote-box").innerHTML = quoteHTML;
}

function changeBgColor(){
	//Assigning a random value between 0 to 255 to p,q,r,u,v,w
	var p = Math.floor(Math.random() * 256); 
	var q = Math.floor(Math.random() * 100);
	var r = Math.floor(Math.random() * 256);
	var u = Math.floor(Math.random() * 256); 
	var v = Math.floor(Math.random() * 100);
	var w = Math.floor(Math.random() * 256);

	var colorA = "rgba( " + p + "," + q + "," + r + ")";
	var colorB = "rgba( " + u + "," + v + "," + w + ")";
	var bgColor = "linear-gradient" + "(" + colorA + "," + colorB + ")";
	
	//setting body's "background-image" property of linear-gradient
	document.body.style.backgroundImage = bgColor;
}

//Calling both the functions once to avoid any delay
printQuote();
changeBgColor();
//Setting the interval for changing both - quotes and background color( 1second = 1000) at regular interval provided
setInterval( printQuote , 6000);
setInterval( changeBgColor , 6000);
