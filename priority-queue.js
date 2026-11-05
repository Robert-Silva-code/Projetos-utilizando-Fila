class PriorityNode {
    constructor(value, priority = null){
        this.value = value
        this.priority = priority
        this.next = null
    }
}

class PriorityQueue {
    constructor(){
        this._front = null
        this._rear = null
        this._size = 0
    }
    // Método para adicionar um elemento na fila 
    enqueue(element, priority){
        const node = new PriorityNode(element, Number(priority))
        if (this._front === null && this._rear === null) {
            this._front = node
            this._rear = node
        } else {
            /*this._rear.next = node 
            this._rear = node*/
            if (node.priority > this._front.priority) {
                node.next = this._front
                this._front = node
            } else{
            let temp1 = this._front
            let temp2 = this._front.next

            while (temp2 !== null) {
                if (node.priority > temp2.priority) {
                    temp1.next = node
                    node.next = temp2
                    this._size += 1  
                    return
                } else {
                    temp1 = temp2
                    temp2 = temp2.next
                }
            }
            this._rear = node
            }
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

export {PriorityQueue}