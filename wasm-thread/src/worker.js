
let funcaoSoma;

addEventListener('message', async (event) => {

   if(event.data.operacao ==='INICIALIZAR'){
      result = await WebAssembly.instantiateStreaming(fetch('./target/wasm32-unknown-unknown/release/wasm_thread.wasm'), e.data.imports);
   }

   funcaoSoma = result.instance.exports.soma;
   if(event.data.operacao ==='EXECUTAR'){
      const retorno = funcaoSoma(event.data.valor);
      console.log(retorno);
   }
      postMessage(event.data);
}, false); 

