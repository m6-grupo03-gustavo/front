import { ChangeEvent, useEffect, useState } from "react";
import { 
    StyleFilterByPrice, 
    StyleFilterSliderByPrice, 
    StyleFilterRangeInput, 
    StyledPriceInput
} from "./style"
import { useAuth } from "../../../hooks/useAuth"


export const FilterByPrice = () =>{
    const { cars, setCarsFilter } = useAuth()
    const [minValue, setMinValue] = useState(10000);
    const [maxValue, setMaxValue] = useState(1000000);

    function filterCars() {
        // filtra os carros que têm o preço entre os valores mínimo e máximo
        const filteredCars = cars.filter(car => car.value >= minValue && car.value <= maxValue);
        // atualiza o estado com os carros filtrados
        setCarsFilter(filteredCars);
    }

    useEffect(() => {
        filterCars();
    }, [minValue, maxValue]);
  
    // Cria a função para atualizar o valor mínimo
    function handleMinChange(event:  ChangeEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        // Pega o valor do input como número
        const value = Number(input.value);
      // Valida se o valor está dentro dos limites e se não é maior que o máximo
      if (value >= 10000 && value <= 1000000 && value < maxValue) {
        // Atualiza o estado com o valor
        setMinValue(value);
      }
    }
  
    // Cria a função para atualizar o valor máximo
    function handleMaxChange(event:  ChangeEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        // Pega o valor do input como número
        const value = Number(input.value);
      // Valida se o valor está dentro dos limites e se não é menor que o mínimo
      if (value >= 10000 && value <= 1000000 && value > minValue) {
        // Atualiza o estado com o valor
        setMaxValue(value);
      }
    }

    const scale = (value: number) => {
        // define os limites dos valores dos inputs
        const min = 10000;
        const max = 1000000;
        // define a largura do slider em pixels
        const width = 300; // muda para 300px
        // retorna o valor convertido em pixels
        return ((value - min) / (max - min)) * width;
      };

    return(
        // warapper
        <StyleFilterByPrice>
            <h4>Preço (R$)</h4>

            {/* Price input */}
            <StyledPriceInput>
                {/* field */}
                <div>
                    <p>Min</p>
                    <input type="number" value={minValue} onChange={handleMinChange} />
                </div>

                {/* field */}
                <div>
                    <p>Max</p>
                    <input type="number" value={maxValue} onChange={handleMaxChange} />
                </div>
            </StyledPriceInput>

            {/* slider */}
            <StyleFilterSliderByPrice>
                {/* progress */}
                <div  style={{
                    position: "absolute",
                    width: `${scale(maxValue) - scale(minValue)}px`,
                    left: `${scale(minValue)}px`,
                    height: "5px",
                    backgroundColor: "#4529E6",
                    }}> 
                </div>
            </StyleFilterSliderByPrice>

            <StyleFilterRangeInput>
                <input  type="range" min={10000} max={1000000} value={minValue} onChange={handleMinChange}/> 
                <input type="range" min={10000} max={1000000} value={maxValue} onChange={handleMaxChange}/> 
            </StyleFilterRangeInput>
        </StyleFilterByPrice>
    )
}


