function takesPeeOrPoo(excrement){
    return `I just ${excrement}`
}
function receivesAFunction(takesPeeOrPoo) {
    takesPeeOrPoo()
}
function takeALeak (){
    return "went pee"
}
function returnsANamedFunction(){
   return function takeALeak(){}
}
function returnsAnAnonymousFunction(){
    return (function () {})
}