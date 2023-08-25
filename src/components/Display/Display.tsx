
import { useState, useEffect } from "react";
import SharingInformationService from "../../services/sharing-information.services"
import { SubjectInfo } from "@src/utilities/subject-manager.utilities";

const Display: React.FC = () => {

  const subscription$ = SharingInformationService.getSubject();
  const [result, setResult] = useState('');
  const [numbersContainer, setNumbersContainer] = useState({
    totalDisplay: '',
    lastType: ''
  });
  const {totalDisplay, lastType } = numbersContainer;


  const verifyDuplicatedOperators = (data: SubjectInfo): Boolean => {
    if (data.type === lastType && lastType !== "numbers") return true;
    else return false;
  }

  const verifyIfEvaluate = () => {
    if (lastType === "numbers") setResult(eval(totalDisplay));
    else null;
  }

  const verifyFunctions = () => {
    
  }

  useEffect(() => {

    subscription$.subscribe(data => verifyDuplicatedOperators(data) ? null : setNumbersContainer({
      totalDisplay: totalDisplay + data.value,
      lastType: data.type
    }));

    verifyIfEvaluate();

  }, [subscription$])


  return (
    <div className=" flex flex-col h-40">
      <p>{totalDisplay}</p>
      <p>{result}</p>
    </div>
  )
}

export default Display