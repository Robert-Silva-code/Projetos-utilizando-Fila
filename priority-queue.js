class PriorityNode {
    constructor(value, priority = null){
        this.value = value
        this.priority = priority
        this.next = null
    }
}

class PriorityQueue {
    constructor(){
        this.front = null
        this.rear = null
        this._size = 0
    }
    // Método para adicionar um elemento na fila 
    enqueue(element, priority){
        const node = new PriorityNode(element, priority)
        if (this.front === null && this.rear === null) {
            this.front = node
            this.rear = node
        } else {
            /*this.rear.next = node 
            this.rear = node*/
            if (node.priority > this.front.priority) {
                node.next = this.front
                this.front = node
            } else{
            const temp1 = this.front
            const temp2 = this.front.next

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
            this.rear = node
            }
        }
            
    }
    // Método para remover o elemento da frente da fila
    dequeue(){
        if ( this.isEmpty() ) { // Não há nada para remover
            return "A fila está vazia"
        }
        const node = this.front  // Valor do nó removido
        this.front = this.front.next  // O próximo nó se torna o primeiro

        if (!this.front) {
          this.rear = null; // Se a fila ficar vazia, rear também se torna null
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
        return this.isEmpty()? "A fila está vazia": this.front.value
    }
    // Método para ver o elemento no final da fila
    rear(){
        return this.isEmpty()? "A fila está vazia": this.rear.value
    }
    // Método para limpar a fila
    clear() {
        this.front = null 
        this.rear = null
        this._size = 0
    }
}

export {PriorityQueue}