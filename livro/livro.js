WebAssembly.instantiateStreaming(fetch('https://github.com/raphamorim/livro-webassembly-exemplos/blob/main/capitulo-06/livro/livro.wasm'))
.then(({ instance }) => {
  const {
    salvar_livro_na_memoria,
    memory
  } = instance.exports;

  // Insere os bytes nas posições do tamanho do texto
  salvar_livro_na_memoria();

  // Aqui lemos os primeiros 700 blocos da memória
  const memoria = new Uint8Array(memory.buffer, 0, 700);
  console.log(memoria);

  const conteudo = document.querySelector('#conteudo');
  const decoder = new TextDecoder();
  const texto = decoder.decode(memoria);
  conteudo.textContent = texto;
});