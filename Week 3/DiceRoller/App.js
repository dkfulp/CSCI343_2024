import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  Pressable,
} from "react-native";

export default function App() {
  // Set max and min dice values
  const maxVal = 6;
  const minVal = 1;

  // Create state variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  // Create modal screen handler functions
  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  // Create submit button function
  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2;
    setDiceSum(result);

    endDiceRollHandler();
  }

  // Determine which type of result text to display
  let resultText = (
    <Text style={styles.resultsText}>Roll the Dice and Make a Wager</Text>
  );

  const userWagerNum = parseFloat(userWager);
  const userGuessNum = parseInt(userGuess);
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNum === diceSumNum) {
    resultText = (
      <Text style={styles.resultsText}>
        You Won ${(userWagerNum * 10).toFixed(2)}
      </Text>
    );
  }

  if (userGuess !== "" && userGuessNum !== diceSumNum) {
    resultText = (
      <Text style={styles.resultsText}>
        You Lost ${userWagerNum.toFixed(2)}
      </Text>
    );
  }

  let diceText = (
    <Text style={styles.resultsText}>Roll the Dice to Get Started</Text>
  );

  if (diceSum !== 0) {
    diceText = (
      <Text style={styles.resultsText}>
        The resulting dice roll is {diceSum}
      </Text>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dice Roller</Text>
        </View>

        <View style={styles.rollButtonContainer}>
          <Pressable
            onPress={startDiceRollHandler}
            style={({ pressed }) => pressed && styles.pressedButton}
            android_ripple={{ color: "#210644" }}
          >
            <View style={styles.rollButton}>
              <Text style={styles.buttonText}>Roll Dice</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice2}</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          {diceText}
        </View>

        <View style={styles.resultsContainer}>{resultText}</View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>Guess The Roll Value:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter a Guess Between 2 and 12"
              keyboardType="number-pad"
              value={userGuess}
              onChangeText={setUserGuess}
            />
            <Text style={styles.inputLabel}>What's Your Wager:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Wager Here"
              keyboardType="numeric"
              value={userWager}
              onChangeText={setUserWager}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Roll Dice" color="blue" onPress={onDiceRoll} />
              </View>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  color="black"
                  onPress={endDiceRollHandler}
                />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#b739fa",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    marginTop: 50,
    margin: 20,
    borderWidth: 3,
    borderRadius: 30,
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },
  rollButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rollButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    color: "#000000",
    padding: 8,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressedButton: {
    opacity: 0.5,
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  dice: {
    borderWidth: 6,
    margin: 20,
    width: "40%",
    paddingVertical: 30,
    backgroundColor: "white",
  },
  diceNumber: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultsContainer: {
    flex: 1,
  },
  resultsText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#b739fa",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "90%",
    padding: 12,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
