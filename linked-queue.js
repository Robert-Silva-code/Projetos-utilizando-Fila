class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this._front = null
        this._rear = null
        this._size = 0
    }
    // Método para adicionar um elemento na fila 
    enqueue(element){
        const node = new Node(element)
        if (this._front === null && this._rear === null) {
            this._front = node
            this._rear = node
        } else {
            this._rear.next = node 
            this._rear = node
        }
        
        this._size += 1      
    }
    // Método para remover o elemento da frente da fila
    dequeue(){
        if ( this.isEmpty() ) { // Não há nada para remover
            return "A fila está vazia"
        }
        const node = this._front  // Valor do nó removido
        this._front = this._front.next  // O próximo nó se torna o primeiro

        if (!this._front) {
          this._rear = null; // Se a fila ficar vazia, rear também se torna null
        }

        this._size -= 1
        return node.value
    }
    
    // Método para verificar o tamanho da fila
    size(){
        return this._size
    }
    // Método para verificar se a fila está vazia
    isEmpty(){
        return this._size === 0
    }
    // Método para ver o elemento na frente da fila
    front(){
        return this.isEmpty()? "A fila está vazia": this._front.value
    }
    // Método para ver o elemento no final da fila
    rear(){
        return this.isEmpty()? "A fila está vazia": this._rear.value
    }
    // Método para limpar a fila
    clear() {
        this._front = null 
        this._rear = null
        this._size = 0
    }
}

export {Queue}