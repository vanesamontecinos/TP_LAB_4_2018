export abstract class Juego {
    public nombre = 'Sin Nombre';
    public jugador: any;
    public gano = false;
  
    constructor() {
     
    }
  
  
    
  
    public abstract verificar():boolean; 
    
    public retornarAyuda() {
      
      return "NO hay Ayuda definida";
    }
  }
  