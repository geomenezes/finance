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
    const [reference, setReference] = useState([]);

    function nextQuestion() {
        setStep(prev => prev + 1)
        setSeeNext(false)
        cleanButtons(questions[step].alternatives, -1)
    }

    function countPoints(point) {
        if(reference.length > 0) {
            let ref = ([...reference, point])

            if(ref.length > ref[0]) {
                var count = 0;
                ref.map((e, key) => {
                    if(key !== 0) {
                        count += e;
                    }
                })
                
                if(count < 2) {
                    setPoints(prev => prev + 1)
                } else if(count < 5) {
                    setPoints(prev => prev + 2)
                } else setPoints(prev => prev + 4)

            } 
            else setReference(ref)
        }  else setPoints(prev => prev + point)
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

    function changeColor(id, others) {
        let element = document.getElementById("button-color-" + id);
        if (element != null) {
          element.style.backgroundColor = "#0DA980";
        }
        cleanButtons(others, id)
    }

    function cleanButtons(data, id) {
        data.map((e, key) => {
            if(key !== id) {
                let element = document.getElementById("button-color-" + key);
                if (element != null) {
                element.style.backgroundColor = "#dbd7d7";
                }
            }
        })
    }

    return (
        <View>
            <Header navigation={navigation} />
            {
                <>
                    <Text style={styles.title}>{questions[step].question}</Text>
                    {questions[step]?.label && <Text style={styles.title}>{questions[step].label}</Text>}
                    {questions[step].alternatives.map((e, key) => (
                        <ButtonChoice 
                            key={key}
                            id={"button-color-" + key}
                            label={e.label + " " + e.value} 
                            onClick={() => {
                                setCurrentPoint(e.value)
                                setSeeNext(true)
                                changeColor(key, questions[step].alternatives)
                                if(questions[step]?.reference)
                                    setReference([questions[step]?.reference])
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
                <ActionButton label="Enviar" onClick={() => {
                    countPoints(currentPoint)
                    result()
                }} />}
        </View>
    )
}