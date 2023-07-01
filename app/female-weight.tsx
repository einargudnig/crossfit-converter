import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';
import { Table, TableWrapper, Row, Cell } from "react-native-reanimated-table";

export default function WeightsTableF(): JSX.Element {
  const tableHead = ['LBS', 'KG']
  const tableData = [
    ['35', '15'],
    ['45', '20'],
    ['65', '30'],
    ['85', '38'],
    ['95', '43'],
    ['105', '47'],
    ['115', '52'],
    ['125', '57'],
    ['135', '61'],
    ['145', '66'],
    ['165', '75'],
    ['185', '84'],
    ['205', '93'],
    ['225', '102'],
    ['245', '111'],
  ]

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell key={cellIndex} data={cellData} textStyle={styles.rowText} />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'black'
  },
  head: {
    height: 40,
    backgroundColor: 'black',
  },
  headText: {
    margin: 6,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  rowText: {
    margin: 6,
    color: 'white'
  },
  border: {
    borderWidth: 1,
    borderColor: 'white'
  },
})