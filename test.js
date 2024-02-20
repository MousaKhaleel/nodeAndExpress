
const express=require('express');
var app=express();


app.get('/',function(req,res){
    res.send('start server')
})

// /////////////////////////////////////////////////////////
function factorial(f) {
    let fact=1;
    while (f>1) {
        fact*=f;
        f--;
    }
    return fact;
}

app.get('/fact/:num',function(req,res){
    var myfact=factorial(req.params.num);
    res.json('fact is '+myfact);
})

// /////////////////////////////////////////////////////////
function productTable(n) {
    let temp=[];
    for (let i =1; i <11; i++) {
        temp.push(n*i);
    }
    return temp;
}

app.get('/multiply/:num',function(req,res){
    var table=productTable(req.params.num);
    console.log(table)
    res.json('table is '+ table);
})

// /////////////////////////////////////////////////////////
function fibonacci(n) {
    if(n==0||n==1) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

app.get('/fib/:num',function(req,res){
    var fib=fibonacci(req.params.num);
    res.json('fib is '+ fib);
})

// /////////////////////////////////////////////////////////
function cumlatveSum(nms) {
    let temp=Number(nms);
    let cs=0;
    while(temp>0){
        cs+=temp;
        temp--;
    }
    return cs;
}

app.get('/cumulativesum/:num',function(req,res){
    var cs=cumlatveSum(req.params.num);
    res.json('cumulative sum is '+ cs);
})

// /////////////////////////////////////////////////////////
function checkRev(r) {
    let word=r;
    word=word.toLowerCase();
    let rev='';
    for (let i=word.length; i>0;i--) {
        rev+=word[i-1];
    }
    if(word==rev)
    return true;
    else
    return false;
}

app.get('/string/:word',function(req,res){
    var revo=checkRev(req.params.word);
    res.json('is it same? '+ revo);
})

// /////////////////////////////////////////////////////////
var server= app.listen(7000,function(){
    var host=server.address().address
    var port=server.address().port
})