import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#161616',
    flex: 1,
  },
  header: {
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 15,
  },
  item: {
    backgroundColor: '#1C1C1C',
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  itemDetails: {
    backgroundColor: '#1C1C1C',
    padding: 10
  }
})

export default styles;