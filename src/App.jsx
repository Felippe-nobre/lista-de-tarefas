import { useState } from "react";
function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  console.log(tarefas);
  function adicionarTarefa(e) {
    e.preventDefault();
    const atualizarTarefas = [...tarefas, { texto: tarefa, concluida: false }];
    setTarefas(atualizarTarefas);
    setTarefa("");
  }

  function removerTarefa(index) {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  }

  function tarefaConcluida(index) {
    const novaLista = tarefas.map((tarefa, i) => {
      if (i === index) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novaLista);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button className="button" type="submit">
          Adicionar Tarefa
        </button>
      </form>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
              }}
            >
              {tarefa.texto}
            </span>
            <button className="btn-remover" onClick={() => removerTarefa(index)}>
              Remover
            </button>

            <button className="btn-concluir" onClick={() => tarefaConcluida(index)}>
              {tarefa.concluida
                ? "Marcar como pendente"
                : "Marcar como concluída"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
