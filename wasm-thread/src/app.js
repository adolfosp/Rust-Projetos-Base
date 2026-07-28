const memory = new WebAssembly.Memory({ initial: 320, maximum: 320, shared: true });

const importacoes = {env: {memory}};

const workersLista = [];


const processadores = window.navigator.hardwareConcurrency || 1;
console.log('processadores', processadores);

for (let i = 0; i < processadores; i++) {
  const worker = new Worker('./worker.js');

  worker.addEventListener('message', (event) => {
    if(event.data.operacao === 'INICIALIZAR'){
        workersLista.push(worker);
    }
    console.log('worker', i, 'respondeu', event.data);
  }, false);

  worker.postMessage({operacao: 'INICIALIZAR', importacoes});

  const intervalo = setInterval(executaWorkers, 100);

  function executaWorkers() {
    if(workersLista.length == processadores){
        for (let i = 0; i < processadores; i++) {
            const valor = i +1;
            console.log('Enviando para worker', valor);
            workersLista[i].postMessage({operacao: 'EXECUTAR', valor});
        }
    }
  }
}