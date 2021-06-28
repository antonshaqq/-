import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
const [A, setInputA] = useState("");
const [B, setInputB] = useState("");
const [C, setInputC] = useState("");
const [result, setInputResult] = useState("");

const pressHandler = () => {
var a = Number.parseInt(A);
var b = Number.parseInt(B);
var c = Number.parseInt(C);
if (A != "" && B != "" && C != "") {
let D = b * b - 4 * a * c;
if (D == 0) {
let res = -c / b;
setInputResult("x=" + res);
} else if (D > 0) {
let x1 = (-b - Math.sqrt(D)) / (2 * a);
let x2 = (-b + Math.sqrt(D)) / (2 * a);
setInputResult("x1 = " + x1 + "\nx2 = " + x2);
} else if (D < 0) {
setInputResult("Нет корней!");
} else if (D == 0) {
let x = -b / (2 * a);
setInputResult("x = " + x);
}
} else {
Alert.alert("Поля не должны быть пустыми!");
}
};

return (
<View>
<View style={styles.header}>
<Text style={styles.header_txt}>Решение квадратных уравнений</Text>
</View>
<Text
style={{
paddingTop: 10,
color: "gray",
textAlign: "center",
fontWeight: "bold",
fontSize: 17,
paddingLeft: 10,
}}
paddingTop
>
Заполните необходимые поля:
</Text>
<View style={styles.block}>
<TextInput
style={styles.input}
keyboardType="numeric"
placeholder="a"
value={A}
onChangeText={(text) => setInputA(text) + setInputResult("")}
/>
<TextInput
style={styles.input}
keyboardType="numeric"
placeholder="b"
value={B}
onChangeText={(text) => setInputB(text) + setInputResult("")}
/>
<TextInput
style={styles.input}
keyboardType="numeric"
placeholder="c"
value={C}
onChangeText={(text) => setInputC(text) + setInputResult("")}
/>
</View>
<View style={styles.button}>
<Button color="gray" title="Вычислить" onPress={pressHandler} />
</View>
<Text style={styles.res}>{result}</Text>
</View>
);
}
const styles = StyleSheet.create({
block: {
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
marginBottom: 15,
width: "100%",
marginTop: 10,
},
input: {
margin: 0,
marginLeft: 15,
marginRight: 15,
width: "5%",
borderStyle: "solid",
borderBottomColor: "#2196f3",
textAlign: "center",
},
text: {
color: "#2196f3",
fontWeight: "bold",
},
res: {
color: "red",
marginTop: 5,
marginLeft: 15,
fontSize: 17,
textAlign: "center",
},
header: {
backgroundColor: "gray",
height: 50,
},
header_txt: {
color: "#fff",
fontWeight: "bold",
fontSize: 24,
textAlign: "center",
lineHeight: 50,
},
button: {
backgroundColor: "gray",
width: "auto",
margin: 0,
marginLeft: "auto",
marginRight: "auto",
},
});