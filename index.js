const Screen1 = document.getElementById("ProblemScreen");
         const Screen2 = document.getElementById("SecondScreen");
         const Brand = document.getElementsByClassName("Brand")[0];
         Brand.innerHTML = "AyushKumar";
 
         const CEButton = document.getElementById("CeKey");
         const CButton = document.getElementById("CKey");
         const BackSpaceButton = document.getElementById("BackSpaceKey");
         const DevideButton = document.getElementById("DevideKey");
         const MultipicationButton = document.getElementById("MultipicationKey");
         const MinusButton = document.getElementById("MinusKey");
         const SummessionButton = document.getElementById("SummessionKey");
 
         const ZeroButton = document.getElementById("0Key");
         const OneButton = document.getElementById("1Key");
         const TwoButton = document.getElementById("2Key");
         const ThreeButton = document.getElementById("3Key");
         const FourButton = document.getElementById("4Key");
         const FiveButton = document.getElementById("5Key");
         const SixButton = document.getElementById("6Key");
         const SevenButton = document.getElementById("7Key");
         const EightButton = document.getElementById("8Key");
         const NineButton = document.getElementById("9Key");
         const PointButton = document.getElementById("PointKey");
 
         const EqualButton = document.getElementById("EqualKey");
 
         const SinButton = document.getElementById("SinKey");
         const CosButton = document.getElementById("CosKey");
         const TanButton = document.getElementById("TanKey");
         const SinInvButton = document.getElementById("SinInvKey");
         const CosInvButton = document.getElementById("CosInvKey");
         const TanInvButton = document.getElementById("TanInvKey");
 
         const FactorialButton = document.getElementById("FactorialKey");
         const nPrButton = document.getElementById("nPrKey");
         const nCrButton = document.getElementById("nCrKey");
 
         const LnButton = document.getElementById("LnKey");
         const Log10Button = document.getElementById("Log10Key");
         const EPowerXButton = document.getElementById("EPowerXKey");
 
         const PowerButton = document.getElementById("PowerKey");
         const RootButton = document.getElementById("RootKey");
         const PiButton = document.getElementById("PiKey");
         const EButton = document.getElementById("eKey");
         const OpenBracketButton = document.getElementById("OpenBracketKey");
         const CloseBracketButton = document.getElementById("CloseBracketKey");
         const PercentButton = document.getElementById("PercentKey");
         const SquereButton = document.getElementById("SquereKey");
 
         var Screen1Value = "";
         var Expression = "";
         var SpecialOperation = ""
 
         function factorial(a){
             if(a===0){
                 return 1;
             }
             return (a * factorial(a-1))
         }
 
         function nPr(n,r){
            return factorial(n)/factorial(n-r);
         }
         function nCr(n,r){
             return factorial(n)/(factorial(r)*factorial(n-r));
         }
 
         OneButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "1";
             Expression = Expression + "1";
             Screen1.innerHTML = Screen1Value;
         })
         TwoButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "2";
             Expression = Expression + "2";
             Screen1.innerHTML = Screen1Value;
         })
         ThreeButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "3";
             Expression = Expression + "3";
             Screen1.innerHTML = Screen1Value;
         })
         FourButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "4";
             Expression = Expression + "4";
             Screen1.innerHTML = Screen1Value;
         })
         FiveButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "5";
             Expression = Expression + "5";
             Screen1.innerHTML = Screen1Value;
         })
         SixButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "6";
             Expression = Expression + "6";
             Screen1.innerHTML = Screen1Value;
         })
         SevenButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "7";
             Expression = Expression + "7";
             Screen1.innerHTML = Screen1Value;
         })
         EightButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "8";
             Expression = Expression + "8";
             Screen1.innerHTML = Screen1Value;
         })
         NineButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "9";
             Expression = Expression + "9";
             Screen1.innerHTML = Screen1Value;
         })
         ZeroButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "0";
             Expression = Expression + "0";
             Screen1.innerHTML = Screen1Value;
         })
         PointButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + ".";
             Expression = Expression + ".";
             Screen1.innerHTML = Screen1Value;
         })
 
         CEButton.addEventListener("click", ()=>{
             location.reload();
         })
         CButton.addEventListener("click", ()=>{
             Expression = "";
             Screen1Value = "";
             Screen1.innerHTML = "0";
         })
         BackSpaceButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value.slice(0,Screen1Value.length-1);
             Screen1.innerHTML = Screen1Value;
         })
 
         DevideButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "÷";
             Expression = Expression + "/";
             Screen1.innerHTML = Screen1Value; 
         })
         MultipicationButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "X";
             Expression = Expression + "*";
             Screen1.innerHTML = Screen1Value;
         })
         MinusButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "-";
             Expression = Expression + "-";
             Screen1.innerHTML = Screen1Value;
         })
         SummessionButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "+";
             Expression = Expression + "+";
             Screen1.innerHTML = Screen1Value;
         })
         OpenBracketButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "(";
             Expression = Expression + "(";
             Screen1.innerHTML = Screen1Value;
         })
         CloseBracketButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + ")";
             Expression = Expression + ")";
             Screen1.innerHTML = Screen1Value;
         })
         PowerButton.addEventListener("click",()=>{
             Screen1Value = Screen1Value + "^";
             Expression = Expression + "**";
             Screen1.innerHTML = Screen1Value;
         })
         RootButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "√(";
             Expression = Expression + "Math.sqrt(";
             Screen1.innerHTML = Screen1Value;
         })
         SquereButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "^2";
             Expression = Expression + "**2";
             Screen1.innerHTML = Screen1Value;
         })
         PiButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "𝝅";
             Expression = Expression + "Math.PI";
             Screen1.innerHTML = Screen1Value;
         })
         EButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "e";
             Expression = Expression + "Math.E";
             Screen1.innerHTML = Screen1Value;
         })
         SinButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "sin(";
             Expression = Expression + "Math.sin((Math.PI/(180))*";
             Screen1.innerHTML = Screen1Value;
         })
         CosButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "cos(";
             Expression = Expression + "Math.cos((Math.PI/(180))*";
             Screen1.innerHTML = Screen1Value;
         })
         TanButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "tan(";
             Expression = Expression + "Math.tan((Math.PI/(180))*";
             Screen1.innerHTML = Screen1Value;
         })
         SinInvButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "sin⁻¹(";
             Expression = Expression + "(180/Math.PI)*Math.asin(";
             Screen1.innerHTML = Screen1Value;
         })
         CosInvButton
         CosInvButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "cos⁻¹(";
             Expression = Expression + "(180/Math.PI)*Math.acos(";
             Screen1.innerHTML = Screen1Value;
         })
         TanInvButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "tan⁻¹(";
             Expression = Expression + "(180/Math.PI)*Math.atan(";
             Screen1.innerHTML = Screen1Value;
         })
         PercentButton.addEventListener("click", ()=>{
             Screen1Value = Screen1Value + "%";
             Expression = Expression+ "/100";
             Screen1.innerHTML = Screen1Value;
         })
         FactorialButton.addEventListener("click",()=>{
             Screen1Value = Screen1Value + "!";
             Expression = factorial(eval(Expression));
             Screen1.innerHTML = Screen1Value; 
         })
         var n = 0;
         nPrButton.addEventListener("click",()=>{
             n = Number(Expression);
             Screen1Value = Screen1Value + "P";
             Screen1.innerHTML = Screen1Value; 
             Expression = "P";
         })
         nCrButton.addEventListener("click",()=>{
             n = Number(Expression);
             Screen1Value = Screen1Value + "C";
             Screen1.innerHTML = Screen1Value; 
             Expression = "C";
         })
         LnButton.addEventListener("click",()=>{
             Screen1Value = Screen1Value + "ln(";
             Expression = Expression + "Math.log(";
             Screen1.innerHTML = Screen1Value;
         })
         Log10Button.addEventListener("click",()=>{
             Screen1Value = Screen1Value + "log<sub>10</sub>(";
             Expression = Expression + "Math.log10(";
             Screen1.innerHTML = Screen1Value;
         })
         EPowerXButton.addEventListener("click",()=>{
             Screen1Value = Screen1Value + "e^";
             Expression = Expression + "Math.E**";
             Screen1.innerHTML = Screen1Value;
         })
         EqualButton.addEventListener("click",()=>{
             if(Expression[0]==="P"){
                 r = Number(Expression.slice(1,Expression.length))
                 Expression = nPr(n,r)
             }
             if(Expression[0]==="C"){
                 r = Number(Expression.slice(1,Expression.length))
                 Expression = nCr(n,r)
             }
             Screen2.innerHTML = Screen1Value;
             ans = eval(Expression);
             Screen1Value = String(ans);
             Screen1.innerHTML = ans;
         })
         