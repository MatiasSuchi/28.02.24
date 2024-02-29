//na linha de baixo a uma declaração de variável com o nome matriz e cada elemento é uma string representando um vetor
var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];
//na linha de baixo é uma declarção da variável posicao que serve para achar a matriz e seu é valor 0
var posicao = 0;

//na linha de baixo while é um loop enquanto a posicao < matriz.length for verdadeira
while (posicao < matriz.length) {

// na linha de baixo, posicao é uma variável que está dentro de um loop e o código a baixo irá imprimir cada elemento da matriz em sequência, um de cada vez, até que o valor da posicao seja igual ou menor que o matriz.length
    console.log(matriz[posicao]);

//na linha de baixo a funçaõ acrescenta o valor da variável posicao em 1 a cada iteração do loop.
    posicao++;
}