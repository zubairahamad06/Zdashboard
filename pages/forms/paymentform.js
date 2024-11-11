let buttontag=document.getElementById("button");
let tableclone=document.getElementById("tableclone");
let printbutton=document.getElementById("printbutton");
let n7=document.getElementById("n7");


buttontag.addEventListener("click",()=>{
    tableclone.style.display="block";
    printbutton.style.display="block";

    let stuname=document.getElementById("exampleInputName1");
    let stunumber=document.getElementById("exampleInputPassword4");
    let stucourse=document.getElementById("exampleSelectGender");
    let stutotalfee=document.getElementById("exampleInputPassword5");
    let stufeepaid=document.getElementById("exampleInputPassword6");
    let datapass=document.getElementById("datapass");
    let datadisplay=document.getElementById("datadisplay");
    let balancefee=stutotalfee.value-stufeepaid.value;  
    let fullstack=document.getElementById("fs");


    let rowcreate=datapass.insertRow(datapass.rows.length);

    let stunamecell=rowcreate.insertCell(0);
    let stunumbercell=rowcreate.insertCell(1);
    let stucoursecell=rowcreate.insertCell(2);
    let stutotalfeecell=rowcreate.insertCell(3);
    let stufeepaidcell=rowcreate.insertCell(4);
    let balancefeecell=rowcreate.insertCell(5);

    let removebtn=rowcreate.insertCell(6);

  

    stunamecell.innerHTML=stuname.value;
    stunumbercell.innerHTML=stunumber.value;
    stucoursecell.innerHTML=stucourse.value;
    stutotalfeecell.innerHTML=stutotalfee.value;
    stufeepaidcell.innerHTML=stufeepaid.value;
    // balancefeecell.innerHTML=balancefee;

    if (balancefee==0) {
        balancefeecell.innerHTML="NILL";

    } else {
        balancefeecell.innerHTML=balancefee;
    }

    removebtn.innerHTML='<button type="submit" class="rebutton bg-gradient-info" id="b11" onclick={removefunction(this)}>Remove</button>'
    
    

}) 

function removefunction(params) {
    let rowdata=params.parentNode.parentNode;
    let removedata=rowdata.parentNode.removeChild(rowdata);
    
}
let geneatebtn = document.getElementById("printbutton");
geneatebtn.addEventListener("click",(e)=>{
    e.preventDefault(); 
    n7.style.display = "none";
    let product_table = document.getElementById("tableclone").cloneNode(true)
    let allrows=product_table.getElementsByTagName('tr');
    for (let index = 0; index < allrows.length; index++) {
        const element = allrows[index].getElementsByTagName('td');
        if (element.length > 0) {
         allrows[index].deleteCell(element.length-1)   
        }
        
        
    }

    let entire_table = product_table.outerHTML
    let newtab = window.open('','_blank');
    newtab.document.write('<head><style>');
        newtab.document.write('body { font-family: Arial, sans-serif; }');
        newtab.document.write('table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }');
        newtab.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
        newtab.document.write('th { background-color: #f2f2f2; }');
        newtab.document.write('#totalAmount { font-weight: bold; }');
        newtab.document.write('#invoiceTitle { text-align: center; font-size: 24px; margin-bottom: 20px; }');
        newtab.document.write('</style>');
        newtab.document.write('</head><body>');
            newtab.document.write('<h2 id="invoiceTitle">Fee Bill</h2>');
            newtab.document.write(entire_table);
            newtab.document.close();
            newtab.print();
                n7.style.display = "block"
    
})





