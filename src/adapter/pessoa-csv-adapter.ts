import { readFileSync } from "fs";
import { RepositorioDePessoas } from "../repository/pessoa.repository";
import { Pessoa } from "../entities/pessoa.entity";

export class PessoaCsvAdapter implements RepositorioDePessoas {
  constructor(private caminhoCsv: string) {}

  listarPessoas(): Pessoa[] {
    const conteudo = readFileSync(this.caminhoCsv, "utf-8");
    const linhas = conteudo.split(/\r?\n/);
    const resultado: Pessoa[] = [];

    for (let i = 1; i < linhas.length; i++) {
      const linha = linhas[i].trim();
      if (!linha) continue;
      const [nome, idadeStr] = linha.split(",");
      const idade = Number(idadeStr.trim());
      resultado.push(new Pessoa(nome.trim(), idade));
    }

    return resultado;
  }
}
