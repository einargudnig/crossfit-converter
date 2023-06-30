import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-reanimated-table";

const WeightsTable: React.FC = () => {
  const tableHead = ['LBS', 'KG']
  const tableData = [
    ['Einar', '1'],
    ['Jona', '2'],
    ['Brynja', '3'],
    ['Thorey', '4']
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, width: 320, backgroundColor: '#f1f8ff', padding: 6 },
  headText: { margin: 6, fontWeight: 'bold' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  rowText: { margin: 6 },
  border: { borderWidth: 1, borderColor: '#c8e1ff' },
})

export default WeightsTable;