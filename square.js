function doMath(){
    var inputNum1=document.form1.input1.value;
    var inputNum2=document.form1.input1.value;
    var result = Math.pow(inputNum1,inputNum2);
    document.form1.answer.value = result;
    }