# Route Monitor
A simple demonstration of how to redirect users to a pre-defined page if they fail a condition (i.e. authenticated)

In this example, only authenticated users may be allowed to go to the home route.

One advantage of this method is the fact that it prevents the home controller from ever being instantiated should the user ever try to go to the home route.
This saves developers having to put unnecessary guards in to prevent errors / information leaking.
