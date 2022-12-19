class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Escribe tu nombre aquí...");
    this.input2 = createInput("Escribe el número de opción...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.question0=createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Juego MiQuiz");
    this.title.position(350, 0);
//primer reto
    this.question.html("Pregunta: Hay algo que, aunque te pertenezca,") 
    this.question0.html( "la gente siempre lo utiliza más que tú. ¿Qué es?." );
   
    this.question.position(95, 60);
    this.question0.position(95, 80);

    this.option1.html("1: Tu ropa" );
    this.option1.position(150, 110);
    this.option2.html("2: Tu nombre" );
    this.option2.position(150, 130);
    this.option3.html("3: Tu celular" );
    this.option3.position(150, 150);
    this.option4.html("4: Tu cuarto" );
    this.option4.position(150, 170);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      //segundo reto
       this.message.html("Gracias, tu respuesta ha sido entregada.");
       this.message.position(350, 350);

    });
  }
}
