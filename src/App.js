import Input from "./components/Input";
import Button from "./components/Button";
import ButtonZero from "./components/Button Zero";
import ButtonGray from "./components/Button Gray";
import ButtonOrange from "./components/Button Orange";

import { Container, Content, Row } from "./styles.js";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  // Limpa o estado atual da calculadora
  const handleClear = () => {
    setCurrentNumber("0"); // Define o número atual como '0'
    setFirstNumber("0"); // Define o primeiro número como '0'
    setOperation(""); // Limpa a operação atual
  };

  // Adiciona um número ao número atual
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (prev === "0" ? "" : prev) + number); // Concatena o número atual com o novo número
  };

  // Realiza a operação selecionada
  const handleOperation = (op) => {
    if (firstNumber === "0") {
      // Se for a primeira operação, atualiza o primeiro número, reseta o número atual e define a operação
      setFirstNumber(currentNumber); // Define o primeiro número como o número atual
      setCurrentNumber("0"); // Reseta o número atual para '0'
      setOperation(op); // Define a operação atual
    } else {
      calculateResult(); // Se não for a primeira operação, calcula o resultado antes de definir a nova operação
      setOperation(op); // Define a nova operação
    }
  };

  // Calcula o resultado com base na operação selecionada
  const calculateResult = () => {
    let result;
    switch (operation) {
      case "+":
        result = Number(firstNumber) + Number(currentNumber); // Adição
        break;
      case "-":
        result = Number(firstNumber) - Number(currentNumber); // Subtração
        break;
      case "*":
        result = Number(firstNumber) * Number(currentNumber); // Multiplicação
        break;
      case "/":
        result = Number(firstNumber) / Number(currentNumber); // Divisão
        break;
      case "%":
        result =
          Number(firstNumber) +
          (Number(firstNumber) * Number(currentNumber)) / 100; // Porcentagem
        break;
      default:
        break;
    }
    setCurrentNumber(String(result)); // Atualiza o número atual com o resultado
    setFirstNumber("0"); // Reseta o primeiro número para '0'
  };

  // Função chamada ao pressionar o botão '=' para calcular o resultado final
  const handleEquals = () => {
    if (operation && currentNumber !== "0") {
      calculateResult(); // Calcula o resultado final
      setOperation(""); // Limpa a operação atual
    }
  };

  // Função para mudar o sinal do número atual (positivo para negativo e vice-versa)
  const handleSignChange = () => {
    setCurrentNumber((prev) => String(Number(prev) * -1)); // Multiplica o número atual por -1 para mudar o sinal
  };

  // Função para calcular a porcentagem do primeiro número
  const handlePercentage = () => {
    if (firstNumber !== "0") {
      // Se houver um primeiro número, calcula a porcentagem e atualiza o número atual
      const result =
        Number(firstNumber) +
        (Number(firstNumber) * Number(currentNumber)) / 100; // Calcula a porcentagem
      setCurrentNumber(String(result)); // Atualiza o número atual com o resultado
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <ButtonGray label="C" onClick={handleClear} />
          <ButtonGray label="±" onClick={handleSignChange} />
          <ButtonGray label="%" onClick={handlePercentage} />
          <ButtonOrange label="÷" onClick={() => handleOperation("/")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <ButtonOrange label="x" onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <ButtonOrange label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <ButtonOrange label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <ButtonZero label="0" onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(".")} />
          <ButtonOrange label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
