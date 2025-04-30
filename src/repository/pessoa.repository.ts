import { Pessoa } from "../entities/pessoa.entity";

export interface RepositorioDePessoas {
  listarPessoas(): Pessoa[];
}
