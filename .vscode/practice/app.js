const fakeRequest = (url, success, failure)=> {
    const delay = math.floor(math.radom()*4500)+500;
    setTimeout(()=> {
        if(delay>4000){
            failure("connection:(")
        }
        else{
            success(`here is your fake data ${url}`)
        }
    }, delay)

}
fakeRequest('/kim.co/page1', function(){
    console.log("done");
}, function(){
    console.log(" ooops");
})