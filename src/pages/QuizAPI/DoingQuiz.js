import { Text, View } from "react-native";
import { questions, resultQuiz } from "./Info";
import ButtonChoice from "../../components/Buttons/ButtonChoice";
import { useState } from "react";
import Button from "../../components/Buttons/Button";

export function DoingQuiz({ navigation }) {

    const [step, setStep] = useState(0);
    const [qtQuestions, setQtQuestions] = useState(questions.length);
    const [points, setPoints] = useState(0);
    const [seeNext, setSeeNext] = useState(false);
    const [currentPoint, setCurrentPoint] = useState(0);

    function nextQuestion() {
        setStep(prev => prev + 1)
        setSeeNext(false)
    }

    function countPoints(point) {
        setPoints(prev => prev + point)
    }

    function result() {
        let profile;
        if(points < 15) {
            profile = resultQuiz.find(e => e.id == "conservative")
        } else if(points < 36) {
            profile = resultQuiz.find(e => e.id == "moderate")
        } else {
            profile = resultQuiz.find(e => e.id == "audacious")
        }

        navigation.navigate("ResultQuiz", { profile })
    }

    return (
        <View>
            {
                <>
                    <Text>{questions[step].question}</Text>
                    {questions[step].alternatives.map((e, key) => (
                        <ButtonChoice 
                            key={key}
                            label={e.label} 
                            onClick={() => {
                                setCurrentPoint(e.value)
                                setSeeNext(true)
                            }}
                        />
                    ))}
                </>
            }
            {(seeNext && (step + 1 < qtQuestions)) && <Button title="Próximo" onPress={() => {
                countPoints(currentPoint)
                nextQuestion()
            }} />}
            {(seeNext && !(step + 1 < qtQuestions)) && <Button title="Enviar" onPress={() => result()} />}
        </View>
    )
}