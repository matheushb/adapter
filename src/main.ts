import { PessoaCsvAdapter } from "./adapter/pessoa-csv-adapter";

class Main {
  static main(): void {
    const caminho = "data/pessoas.csv";
    const adapter = new PessoaCsvAdapter(caminho);
    const pessoas = adapter.listarPessoas();
    console.log("Pessoas carregadas do CSV:", pessoas);
  }
}

Main.main();
