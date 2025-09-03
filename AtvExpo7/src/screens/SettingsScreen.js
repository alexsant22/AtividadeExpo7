import React from "react";
import {
  ScrollView,
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [location, setLocation] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Notificações</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Modo Escuro</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Localização</Text>
          <Switch value={location} onValueChange={setLocation} />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Idioma</Text>
          <Text style={styles.optionValue}>Português (Brasil)</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Versão do App</Text>
          <Text style={styles.optionValue}>1.0.0</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Política de Privacidade</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Termos de Uso</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Ajuda e Suporte</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Sobre</Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
  },
  optionValue: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
