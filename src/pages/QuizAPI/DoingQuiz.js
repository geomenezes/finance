import { Text, View } from "react-native";
import { questions, resultQuiz } from "./Info";
import ButtonChoice from "../../components/Buttons/ButtonChoice";
import { useState } from "react";
import styles from '../../assets/scss/quiz.scss'
import Header from "../../components/Header/Header";
import ActionButton from "../../components/Buttons/Action";

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

    function changeColor(id) {
        let element = document.getElementById(id);
        if (element != null) {
          element.style.backgroundColor = active ? color : "#0DA980";
        }
    }

    return (
        <View>
            <Header navigation={navigation} />
            {
                <>
                    <Text style={styles.title}>{questions[step].question}</Text>
                    {questions[step].alternatives.map((e, key) => (
                        <ButtonChoice 
                            key={key}
                            id={"button-color-" + key}
                            label={e.label} 
                            onClick={() => {
                                setCurrentPoint(e.value)
                                setSeeNext(true)
                                changeColor("button-color-" + key)
                            }}
                        />
                    ))}
                </>
            }
            {(seeNext && (step + 1 < qtQuestions)) && 
                <ActionButton label="Próximo" onClick={() => {
                    countPoints(currentPoint)
                    nextQuestion()
                }} />}
            {(seeNext && !(step + 1 < qtQuestions)) && 
                <ActionButton label="Enviar" onClick={() => result()} />}
        </View>
    )
}