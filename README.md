# PessoaCsvAdapterProject

Este projeto demonstra o padrão Adapter para ler dados de um arquivo CSV e convertê-los em objetos `Pessoa`, sem que o sistema principal precise conhecer detalhes do formato do arquivo.

## Classes e Interfaces

- **Pessoa**: Representa a entidade de domínio com propriedades `nome` e `idade`.
- **RepositorioDePessoas**: Interface que define o método `listarPessoas(): Pessoa[]`.
- **PessoaCsvAdapter**: Adapter que implementa `RepositorioDePessoas`, lendo um CSV do caminho configurado e retornando um array de `Pessoa`.
- **Main**: Classe principal que cria uma instância de `PessoaCsvAdapter` e exibe as pessoas lidas do CSV.
- **Teste**: Valida que `PessoaCsvAdapter` converte corretamente as linhas do CSV em instâncias de `Pessoa`.
