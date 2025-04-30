import { writeFileSync, unlinkSync } from "fs";
import { join } from "path";
import { test } from "node:test";
import { equal } from "node:assert";
import { PessoaCsvAdapter } from "../adapter/pessoa-csv-adapter";

const nomeArquivo = join(process.cwd(), "pessoas-teste.csv");
const conteudoCsv = `nome,idade
Alice,30
Bob,25`;

test("PessoaCsvAdapter", async (t) => {
  t.before(() => {
    writeFileSync(nomeArquivo, conteudoCsv, "utf-8");
  });

  t.after(() => {
    unlinkSync(nomeArquivo);
  });

  await t.test("deve ler e converter pessoas de um CSV", () => {
    const adapter = new PessoaCsvAdapter(nomeArquivo);
    const pessoas = adapter.listarPessoas();

    equal(pessoas.length, 2);
    equal(pessoas[0].nome, "Alice");
    equal(pessoas[0].idade, 30);
    equal(pessoas[1].nome, "Bob");
    equal(pessoas[1].idade, 25);
  });
});
