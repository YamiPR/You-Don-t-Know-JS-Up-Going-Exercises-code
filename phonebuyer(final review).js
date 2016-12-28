const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200.00;

var accountbalance = 303.91;
var phonecount = 0;
var accesoriescount = 0;
var spentatm = 0;

function calculateTax( amt ) {
	amt = amt + ( amt * TAX_RATE );
	
	return amt;
}

function formatPrice( amt ) {
	return "$" + amt.toFixed( 2 );
}

while (spentatm < accountbalance ) {
	
	spentatm += PHONE_PRICE;
	phonecount++;
	
	if ( spentatm < SPENDING_THRESHOLD ) {
		spentatm += ACCESORY_PRICE;
		accesoriescount++;
	}
}

console.log("You're trying to purchase " + phonecount + " phones and " + accesoriescount + " phone accesories. Total cost is " + formatPrice(calculateTax(spentatm)));

if ( spentatm < accountbalance ){
	console.log( "You can afford buying all of this." );
}

else ( spentatm > accountbalance ){
	console.log( "You can't afford buying all of this." );
}
