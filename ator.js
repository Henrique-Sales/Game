//code ator

let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 4
  }
    if(keyIsDown(DOWN_ARROW)){
      if (yAtor < 366)yAtor += 4
  }
}

function verificaColisao (){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    if(colisao){
      colidiu()
      if(meusPontos > 0){
        meusPontos -= 1;
        somColisao.play()
      }
        
    }    
  }
}

function colidiu(){
  if (colisao){
    yAtor = 366;
  }
}
function incluiPontos(){
  textSize(25)
  fill(245, 265, 0)
  textAlign(CENTER)
  text("Pontos: "+meusPontos, width / 5, 27)
}



function marcaPonto(){
  if(yAtor < 15){
    meusPontos ++
    yAtor = 366;
    somPonto.play()
  }
}

