import { ChangeEvent, useEffect, useState } from "react";
import { 
    StyleFilterByKM, 
    StyleFilterSliderByKM, 
    StyleFilterRangeInput, 
    StyledKMInput
} from "./style"
import { useAuth } from "../../../hooks/useAuth"


export const FilterByKM = () =>{
    const { cars, setCarsFilter } = useAuth()
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(500000);

    function filterCars() {
        const filteredCars = cars.filter(car => car.km >= minValue && car.km <= maxValue);
        setCarsFilter(filteredCars);
    }

    useEffect(() => {
        filterCars();
    }, [minValue, maxValue]);
  

    function handleMinChange(event:  ChangeEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        const value = Number(input.value);
      if (value >= 0 && value <= 500000 && value < maxValue) {
        setMinValue(value);
      }
    }
  

    function handleMaxChange(event:  ChangeEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        const value = Number(input.value);
      if (value >= 0 && value <= 500000 && value > minValue) {
        setMaxValue(value);
      }
    }

    const scale = (value: number) => {
        const min = 0;
        const max = 500000;
        const width = 300; 
        return ((value - min) / (max - min)) * width;
      };

    return(
        <StyleFilterByKM>
            <h4>Quilometragem (KM)</h4>
            <StyledKMInput>
                <div>
                    <p>Min</p>
                    <input type="number" value={minValue} onChange={handleMinChange} />
                </div>

                <div>
                    <p>Max</p>
                    <input type="number" value={maxValue} onChange={handleMaxChange} />
                </div>
            </StyledKMInput>

            <StyleFilterSliderByKM>
                {/* progress */}
                <div  style={{
                    position: "absolute",
                    width: `${scale(maxValue) - scale(minValue)}px`,
                    left: `${scale(minValue)}px`,
                    height: "5px",
                    backgroundColor: "#4529E6",
                    }}> 
                </div>
            </StyleFilterSliderByKM>

            <StyleFilterRangeInput>
                <input  type="range" min={0} max={500000} value={minValue} onChange={handleMinChange}/> 
                <input type="range" min={0} max={500000} value={maxValue} onChange={handleMaxChange}/> 
            </StyleFilterRangeInput>
        </StyleFilterByKM>
    )
}


