var urlName = location.search.replace("?",""),
    finalName = "%NULL%",
    str = "",
    isCheck = false,
    nothing = [btoa("notATip"), "giveItUp", "ok"],
    aux = "Welcome";

var myVar = setInterval(checkFalse, 3000);

initCode();

function initCode(){

    finalName = atob(urlName);

    nothing[0] = nothing[8*6+8+8/6-8/6-8-6*8][8*6+8+8/6-8/6-8-6*8];
    aux = nothing[2*2/2+2*8/4/4-1][8*6+8+8/6-8/6-8-6*8];
    nothing[2] = nothing[-7-7*7+7/7+7*7+7][7-7*7+7*7+7/7-7];

    str += "<p style=\"margin: 0;\">Olá " + finalName + ". <br><br>Calma, como que faz para<br>centralizar isso?</p><br>";
    str += "<p style=\"text-align: right;\">Será que tá cer<br>tá cortan</p><br>";
    str += "<p style=\"text-align: center; margin-top: 0;\">Aee, agora tá certo, o que eu ia falar mesmo?<br>Ahh, lembrei..</p>";
    str += "<div style=\"text-align: center;\"><input id=\"checkboxText\" type=\"checkbox\" class=\"checkboxText\" onclick=\"checkboxText()\"></div>";
    nothing[1] = btoa(aux);
    str += "<p style=\"text-align: center; margin-bottom: 0; margin-left: 2vh; margin-right: 2vh;\">";
    str += "Viemos por meio desta <span style=\"color: #00000000\" id=\"sp1\">correspôndencia internética</span> expressar as nossas <span style=\"color: #00000000\" id=\"sp2\">felicitações</span> e lhe apresentar a notícia de que vossa senhoria <span style=\"color: #00000000\" id=\"sp3\">passou</span> por todas as <span style=\"color: #00000000\" id=\"sp13\">etapas de seleção</span> para o projeto! <span style=\"color: #00000000\" id=\"sp8\">Aeeeeee.</span><br>";
    str += "A partir do <span style=\"color: #00000000\" id=\"sp9\">presente</span> momento, és <span style=\"color: #00000000\" id=\"sp10\">um Keyscaper! Uhuuuu.</span><br>";
    str += "Por obséquio, estamos fazendo algumas <span style=\"color: #00000000\" id=\"sp11\">mudanças</span> na estrutura interna do <span style=\"color: #00000000\" id=\"sp12\">presente projeto</span>, pedimos que aguarde até o <span style=\"color: #00000000\" id=\"sp4\">centésimo quadragésimo terceiro</span> dia do corrente ano, ou <span style=\"color: #00000000\" id=\"sp5\">domingo, dia 23 de maio</span> de 2021, para sua inclusão nas <span style=\"color: #00000000\" id=\"sp6\">teias sociais</span> do projeto que foram <span style=\"color: #00000000\" id=\"sp7\">mencionadas</span> na entrevista.<br><br>";
    str += "Equipe Keyscape</p>";
    
    document.getElementById("mid").innerHTML = str;

    aux = btoa(atob("QSBTZW5oYTogYnRm") + atob(nothing[1]) + nothing[2] + nothing[0]);
}

function checkFalse (){
    for(i = 0; i < 13; i++){
        document.getElementById("sp"+(i+1)).style.color = "#00000000";
    }
    document.getElementById("checkboxText").checked = false;
    isCheck = false;
}

function checkboxText() {
    isCheck = !isCheck;
    if(isCheck){
        for(i = 0; i < 13; i++){
            document.getElementById("sp"+(i+1)).style.color = "#ffffff";
        }
    }
    else{
        for(i = 0; i < 13; i++){
            document.getElementById("sp"+(i+1)).style.color = "#00000000";
        }
    }
}