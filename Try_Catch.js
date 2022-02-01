
try
{
    console.log("Statement 1");
    dsdsd;
    console.log("Statement 2");

}
catch(error)
{
    console.log("************");
    console.log(error.name);
    console.log("************");
    console.log(error.message);
    console.log("************");
    console.log(error.stack);
}