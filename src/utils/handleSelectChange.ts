

interface IhandleSelectChange {
    event: React.ChangeEvent<HTMLSelectElement>;
    setCurrentOption: (value: React.SetStateAction<string>) => void;
}

export const handleSelectChange = ({
  setCurrentOption,
  event,
}: IhandleSelectChange) => {
  setCurrentOption(event.target.value); // Atualiza a marca sempre que um novo valor é selecionado
};