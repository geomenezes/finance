import { Text, View } from "react-native";
import { questions } from "./Info";
import ButtonChoice from "../../components/Buttons/ButtonChoice";

export function DoingQuiz({ navigation }) {

    // Conservador - Até 14 pontos
    // Moderado - Entre 15 e 35 pontos
    // Arrojado - Acima de 36 pontos

    return (
        <View>
            {questions.map((data, key) => (
                <>
                    <Text key={key}>{data.question}</Text>
                    {data.alternatives.map((e, key) => (
                        <ButtonChoice 
                            key={key}
                            label={e.label} 
                            onClick={() => navigation.goBack()}
                        />
                    ))}
                </>
            ))}
        </View>
    )
}